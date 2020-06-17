package com.demo.job;

import org.bson.BsonArray;
import org.bson.Document;
import org.quartz.InterruptableJob;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobKey;
import org.quartz.UnableToInterruptJobException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Vector;

import com.demo.entity.Emotion;
import com.demo.entity.MatrixQuadrant;
import com.demo.entity.Route;
import com.demo.entity.Segment;
import com.demo.repository.EmotionRepository;
import com.demo.repository.MatrixQuadrantRepository;
import com.demo.repository.RouteRepository;
import com.demo.repository.SegmentRepository;
import com.demo.service.EmotionsDownloader;
import com.demo.service.JobService;
import com.demo.service.OSMdownloader;
import com.demo.service.SegmentLinker;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;

public class DownloadEmotionsJob extends QuartzJobBean implements InterruptableJob {

	private volatile boolean toStopFlag = true;

	@Autowired
	JobService jobService;
	@Autowired
	EmotionsDownloader emotionsDownloader;

	@Autowired
	MatrixQuadrantRepository matrixQuadrantRepository;

	@Autowired
	SegmentRepository segmentRepository;
	@Autowired
	EmotionRepository emotionRepository;
	@Autowired
	RouteRepository routeRepository;

	@Override
	protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
		JobKey key = jobExecutionContext.getJobDetail().getKey();

		System.out.println("======================================");
		System.out.println("Download Emotions from databases Job");
		System.out.println("Download Emotions from databases Job");
		System.out.println("Download Emotions from databases Job");
		System.out.println("======================================");

		// *********** For retrieving stored key-value pairs ***********/
		JobDataMap dataMap = jobExecutionContext.getMergedJobDataMap();
		String myValue = dataMap.getString("myKey");
		System.out.println("Value:" + myValue);

		for (Route route : routeRepository.findAll()) {
			downloadEmotions(route.getUri(), route.getUsername(), route.getPassword());
		}

		System.out.println("Thread: " + Thread.currentThread().getName() + " stopped.");
	}

	@Override
	public void interrupt() throws UnableToInterruptJobException {
		System.out.println("Stopping thread... ");
		toStopFlag = false;
	}

	public void downloadEmotions(String uri, String username, String password) {
		// Here is the job logic
		OSMdownloader osm = new OSMdownloader(segmentRepository);

		// Pick up the emotions
		ArrayList<Emotion> emotions = emotionsDownloader.retrieveEmotions(uri, username, password);

		// Find which quadrant belongs each emotion
		for (Emotion emotion : emotions) {
			ArrayList<MatrixQuadrant> quadrants = MatrixQuadrant.getMatrixQuadrantList(emotion.getPoint1(), 0.02, 0.1);
			quadrants.addAll(MatrixQuadrant.getMatrixQuadrantList(emotion.getPoint2(), 0.02, 0.1));
			// Find out if the quadrant or quadrants have been already downloaded
			for (MatrixQuadrant q : quadrants) {
				// System.out.println(q.toString());
				MatrixQuadrant aux = matrixQuadrantRepository.findByBottomAndTopAndLeftAndRight(q.getBottom(),
						q.getTop(), q.getLeft(), q.getRight());
				// If the quadrant has not been downloaded yet, download it
				if (aux == null) {
					// Download OSM data
					try {
						if (osm.downloadWays(q.getBottom(), q.getTop(), q.getLeft(), q.getRight())) {
							MatrixQuadrant newMatrixQuadrant = new MatrixQuadrant(q.getBottom(), q.getTop(),
									q.getLeft(), q.getRight(), new Date());
							matrixQuadrantRepository.save(newMatrixQuadrant);
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}

		// Save each emotion with its closest segment
		SegmentLinker segmentLinker = new SegmentLinker(segmentRepository);
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase database = mongoClient.getDatabase("emotionsMap");
		for (Emotion emotion : emotions) {
			Segment s = segmentLinker.segmentByEmotion(emotion.getPoint1(), emotion.getPoint2());
			emotion.setSegment(s.getId());
			emotionRepository.save(emotion);

			String collectionName = collectionNameBuilder(emotion);
			MongoCollection<Document> collection = database.getCollection(collectionName);
			updateSegmentForFiltering(emotion, collection);
			// emotionsDownloader.deleteEmotion(emotion, uri, username, password);
		}
		mongoClient.close();
	}

	private String collectionNameBuilder(Emotion emotion) {
		String collectionName = "";
		Calendar calendar = GregorianCalendar.getInstance();
		calendar.setTime(emotion.getTime1());
		int hour = calendar.get(Calendar.HOUR_OF_DAY);
		// Morning from 6:00 to 12:59
		if (hour >= 6 && hour < 13) {
			collectionName += "morning";
		}
		// Afternoon from 13:00 to 20:59
		else if (hour >= 13 && hour < 21) {
			collectionName += "afternoon";
		}
		// Night from 21:00 to 5:59
		else if (hour >= 21 || hour < 6) {
			collectionName += "night";
		}

		// Seasons
		int dayOfYear = calendar.get(Calendar.DAY_OF_YEAR);
		if (dayOfYear >= 81 && dayOfYear <= 173) {
			collectionName += ".spring";
		} else if (dayOfYear >= 174 && dayOfYear <= 266) {
			collectionName += ".summer";
		} else if (dayOfYear >= 267 && dayOfYear <= 356) {
			collectionName += ".autumn";
		} else {
			collectionName += ".winter";
		}

		// Gender
		if (emotion.getGender() == 'M') {
			collectionName += ".male";
		} else if (emotion.getGender() == 'F') {
			collectionName += ".female";
		} else if (emotion.getGender() == 'O') {
			collectionName += ".othergender";
		}

		// Age
		if (emotion.getAge() < 18) {
			collectionName += ".child";
		} else if (emotion.getAge() >= 18 && emotion.getAge() < 65) {
			collectionName += ".adult";
		} else {
			collectionName += ".old";
		}

		// Type
		if (emotion.getType() == 'C') {
			collectionName += ".citizen";
		} else {
			collectionName += ".tourist";
		}

		return collectionName;
	}

	// Updates the filtering collections for having the queries done faster.
	private void updateSegmentForFiltering(Emotion e, MongoCollection<Document> collection) {
		Document myDoc = collection.find(eq("_id", e.getSegment())).first();
		String field = "emotion" + e.getEmotion();
		if (myDoc != null) {
			List<Integer> emotions = (List<Integer>) myDoc.get("emotions");
			int newValue = emotions.get(e.getEmotion() - 1) + 1;
			emotions.set(e.getEmotion() - 1, newValue);
			myDoc.replace("emotions", emotions);
			collection.findOneAndReplace(eq("_id", e.getSegment()), myDoc);
		} else {
			myDoc = new Document();
			myDoc.put("_id", e.getSegment());

			List<Integer> emotions = new ArrayList<Integer>(5);
			for (int i = 0; i < 5; i++) {
				emotions.add(0);
			}
			emotions.set(e.getEmotion() - 1, 1);
			myDoc.put("emotions", emotions);

			collection.insertOne(myDoc);
		}
	}

}