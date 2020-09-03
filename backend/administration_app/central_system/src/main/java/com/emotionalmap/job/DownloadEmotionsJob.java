package com.emotionalmap.job;

import org.bson.Document;
import org.quartz.InterruptableJob;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobKey;
import org.quartz.UnableToInterruptJobException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.emotionalmap.entity.Emotion;
import com.emotionalmap.entity.MatrixQuadrant;
import com.emotionalmap.entity.Route;
import com.emotionalmap.entity.Segment;
import com.emotionalmap.repository.EmotionRepository;
import com.emotionalmap.repository.MatrixQuadrantRepository;
import com.emotionalmap.repository.RouteRepository;
import com.emotionalmap.repository.SegmentRepository;
import com.emotionalmap.service.EmotionsDownloader;
import com.emotionalmap.service.JobService;
import com.emotionalmap.service.OSMdownloader;
import com.emotionalmap.service.SegmentLinker;
import com.emotionalmap.util.CollectionNameBuilder;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;

public class DownloadEmotionsJob extends QuartzJobBean implements InterruptableJob {
	private boolean debug = true;

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

	private double quadrantSize = 0.2;
	private double quadrantMarginPercentage = 0.025;

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
			downloadEmotions(route);
		}

		System.out.println("Thread: " + Thread.currentThread().getName() + " stopped.");
	}

	@Override
	public void interrupt() throws UnableToInterruptJobException {
		System.out.println("Stopping thread... ");
		toStopFlag = false;
	}

	public void downloadEmotions(Route route) {
		// Here is the job logic
		OSMdownloader osm = new OSMdownloader(segmentRepository);

		double totalTime, timeToRetrieveEmotions, timeToFindQuadrantsToDownload, timeToLinkEmotionAndSegment,
				timeToUpdateFilters, auxTime;
		totalTime = System.nanoTime();

		timeToRetrieveEmotions = System.nanoTime();
		// Pick up the emotions
		ArrayList<Emotion> emotions = emotionsDownloader.retrieveEmotions(route);
		timeToRetrieveEmotions = System.nanoTime() - timeToRetrieveEmotions;

		timeToFindQuadrantsToDownload = System.nanoTime();
		// Find which quadrant belongs each emotion
		for (Emotion emotion : emotions) {
			ArrayList<MatrixQuadrant> quadrants = MatrixQuadrant.getMatrixQuadrantList(emotion.getPoint1(),
					this.quadrantSize, this.quadrantMarginPercentage);
			quadrants.addAll(MatrixQuadrant.getMatrixQuadrantList(emotion.getPoint2(), this.quadrantSize,
					this.quadrantMarginPercentage));
			// Find out if the quadrant or quadrants have been already downloaded
			for (MatrixQuadrant q : quadrants) {
				MatrixQuadrant aux = matrixQuadrantRepository.findByBottomAndTopAndLeftAndRight(q.getBottom(),
						q.getTop(), q.getLeft(), q.getRight());
				// If the quadrant has not been downloaded yet, download it
				if (aux == null) {
					// Download OSM data
					try {
						MatrixQuadrant newMatrixQuadrant = new MatrixQuadrant(q.getBottom(), q.getTop(), q.getLeft(),
								q.getRight(), new Date());
						matrixQuadrantRepository.save(newMatrixQuadrant);
						System.out.println(newMatrixQuadrant.toString());
						if (!osm.downloadWays(newMatrixQuadrant)) {
							matrixQuadrantRepository.delete(newMatrixQuadrant);
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}
		timeToFindQuadrantsToDownload = System.nanoTime() - timeToFindQuadrantsToDownload;

		
		// Save each emotion with its closest segment
		

		SegmentLinker segmentLinker = new SegmentLinker(segmentRepository);

		//Create connection String
		//Get Env variables
		//Map<String, String> env = System.getenv();
		//String connString = String.format("mongodb://%s:%s@%s:%s", env.get("MONGO_USER"), env.get("MONGO_PASSWORD"), env.get("MONGO_HOST"), env.get("MONGO_PORT"));
		String connString = "mongodb://emotionsmaps:emmOA6kn9cb5E69@localhost:64015/emotionsMap";
		MongoClient mongoClient = new MongoClient(connString);
		MongoDatabase database = mongoClient.getDatabase("emotionsMap");
		timeToLinkEmotionAndSegment = 0;
		timeToUpdateFilters = 0;
		for (Emotion emotion : emotions) {
			auxTime = System.nanoTime();
			Segment s = segmentLinker.segmentByEmotion(emotion.getPoint1(), emotion.getPoint2());
			emotion.setSegment(s.getId());
			emotionRepository.save(emotion);
			auxTime = System.nanoTime() - auxTime;
			timeToLinkEmotionAndSegment += auxTime;

			auxTime = System.nanoTime();
			String collectionName = CollectionNameBuilder.build(emotion);
			MongoCollection<Document> collection = database.getCollection(collectionName);
			updateSegmentForFiltering(emotion, collection);
			auxTime = System.nanoTime() - auxTime;
			timeToUpdateFilters += auxTime;
		}

		// Update lastFetch of the route
		if (emotions.size() > 0) {
			route.updateLastFetch();
			routeRepository.save(route);
		}

		mongoClient.close();
		totalTime = System.nanoTime() - totalTime;

		System.out.println("--------------------------");
		System.out.println("Total time in millis: " + totalTime / 1000000);
		System.out.println("Retrieve emotions time in millis: " + timeToRetrieveEmotions / 1000000);
		System.out
				.println("Find quadrant for every emotion time in millis: " + timeToFindQuadrantsToDownload / 1000000);
		System.out.println("Time to link emotions and segments in millis: " + timeToLinkEmotionAndSegment / 1000000);
		System.out.println("Time to update filters in millis: " + timeToUpdateFilters / 1000000);
		System.out.println("--------------------------");

		try {
			FileWriter myFile = new FileWriter("mediciones-" + route.getName() + ".txt");
			myFile.write("Tiempos para " + emotions.size() + " emociones" + '\n');
			myFile.write("-----------------------------" + '\n');
			myFile.write("Total time in millis: " + totalTime / 1000000 + '\n');
			myFile.write("Retrieve emotions in millis: " + timeToRetrieveEmotions / 1000000 + '\n');
			myFile.write("Find quadrants to download in millis: " + timeToFindQuadrantsToDownload / 1000000 + '\n');
			myFile.write("Link emotions and segments in millis: " + timeToLinkEmotionAndSegment / 1000000 + '\n');
			myFile.write("Update filters in millis: " + timeToUpdateFilters / 1000000 + '\n');
			myFile.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// Updates the filtering collections for having the queries done faster.
	private void updateSegmentForFiltering(Emotion e, MongoCollection<Document> collection) {
		Document myDoc = collection.find(eq("_id", e.getSegment())).first();
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