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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.emotionalmap.entity.Emotion;
import com.emotionalmap.entity.MatrixQuadrant;
import com.emotionalmap.entity.Segment;
import com.emotionalmap.repository.EmotionRepository;
import com.emotionalmap.repository.MatrixQuadrantRepository;
import com.emotionalmap.repository.SegmentRepository;
import com.emotionalmap.service.JobService;
import com.emotionalmap.service.OSMdownloader;
import com.emotionalmap.service.SegmentLinker;
import com.emotionalmap.util.CollectionNameBuilder;
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
				String collectionName = CollectionNameBuilder.build(emotion);
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

}