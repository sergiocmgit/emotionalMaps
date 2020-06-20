package com.demo.job;

import org.bson.Document;
import org.quartz.InterruptableJob;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobKey;
import org.quartz.UnableToInterruptJobException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.demo.service.OSMdownloader;
import com.demo.service.SegmentLinker;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import com.demo.entity.Emotion;
import com.demo.entity.MatrixQuadrant;
import com.demo.entity.Segment;
import com.demo.repository.EmotionRepository;
import com.demo.repository.MatrixQuadrantRepository;
import com.demo.repository.SegmentRepository;
import com.demo.service.JobService;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;

public class DownloadOSMJob extends QuartzJobBean implements InterruptableJob {

	private volatile boolean toStopFlag = true;

	@Autowired
	JobService jobService;
	@Autowired
	private SegmentRepository segmentRepository;
	@Autowired
	private MatrixQuadrantRepository matrixQuadrantRepository;
	@Autowired
	private EmotionRepository emotionRepository;

	@Override
	protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
		JobKey key = jobExecutionContext.getJobDetail().getKey();

		System.out.println("======================================");
		System.out.println("Download from OSM Job");
		System.out.println("Download from OSM Job");
		System.out.println("Download from OSM Job");
		System.out.println("======================================");

		// *********** For retrieving stored key-value pairs ***********/
		JobDataMap dataMap = jobExecutionContext.getMergedJobDataMap();
		String myValue = dataMap.getString("myKey");
		System.out.println("Value:" + myValue);

		// Here the logic
		long sixMonthsAgo = new Date().getTime() - 15770000000L;
		long oneDayAgo = new Date().getTime() - 86400000L;

		// Get all MatrixQuadrant with "lastFetch" older than 6 months
		List<MatrixQuadrant> list = matrixQuadrantRepository.findByLastFetchLessThan(new Date(sixMonthsAgo));

		OSMdownloader osm = new OSMdownloader(segmentRepository);
		for (MatrixQuadrant matrixQuadrant : list) {
			removeMatrixQuadrant(matrixQuadrant);
			try {
				// For every MatrixQuadrant update its ways
				osm.downloadWays(matrixQuadrant);
				// Update "lastFetch" field of the MatrixQuadrant
				matrixQuadrant.setLastFetch(new Date());
				matrixQuadrantRepository.save(matrixQuadrant);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		Segment segment;
		SegmentLinker segmentLinker = new SegmentLinker(segmentRepository);
		ArrayList<Emotion> emotions = emotionRepository.findBySegment(null);
		for (Emotion emotion : emotions) {
			segment = segmentLinker.segmentByEmotion(emotion.getPoint1(), emotion.getPoint2());
			emotion.setSegment(segment.getId());
			emotionRepository.save(emotion);
		}

		System.out.println("Thread: " + Thread.currentThread().getName() + " stopped.");
	}

	@Override
	public void interrupt() throws UnableToInterruptJobException {
		System.out.println("Stopping thread... ");
		toStopFlag = false;
	}

	private void removeMatrixQuadrant(MatrixQuadrant matrixQuadrant) {
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase database = mongoClient.getDatabase("emotionsMap");
		ArrayList<Segment> segments = segmentRepository.findByIdMatrixQuadrant(matrixQuadrant.getId());
		// For each segment that will be updated
		for (Segment segment : segments) {
			ArrayList<Emotion> emotions = emotionRepository.findBySegment(segment.getId());
			// Remove the segment from the precalculated collections
			for (Emotion emotion : emotions) {
				String collectionName = collectionNameBuilder(emotion);
				MongoCollection<Document> collection = database.getCollection(collectionName);
				collection.deleteOne(eq("_id", segment.getId()));
			}
			// Remove the segment from the emotions
			removeSegmentFromEmotions(segment);
			// Remove segment from segments
			segmentRepository.delete(segment);
		}
		mongoClient.close();
	}

	private void removeSegmentFromEmotions(Segment segment) {
		ArrayList<Emotion> emotions = emotionRepository.findBySegment(segment.getId());
		for (Emotion emotion : emotions) {
			emotion.removeSegment();
			emotionRepository.save(emotion);
		}
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

}