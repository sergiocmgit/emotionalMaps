package com.demo.job;

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

import com.demo.entity.Emotion;
import com.demo.entity.MatrixQuadrant;
import com.demo.entity.Route;
import com.demo.entity.Segment;
import com.demo.repository.EmotionRepository;
import com.demo.repository.MatrixQuadrantRepository;
import com.demo.repository.RouteMongoRepository;
import com.demo.repository.SegmentRepository;
import com.demo.service.EmotionsDownloader;
import com.demo.service.JobService;
import com.demo.service.OSMdownloader;
import com.demo.service.SegmentLinker;

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
	RouteMongoRepository routeMongoRepository;

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

		for (Route route : routeMongoRepository.findAll()) {
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
				System.out.println(q.toString());
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
		for (Emotion emotion : emotions) {
			Segment s = segmentLinker.segmentByEmotion(emotion.getPoint1(), emotion.getPoint2());
			emotion.setSegment(s.getId());
			emotionRepository.save(emotion);
			// emotionsDownloader.deleteEmotion(emotion, uri, username, password);
		}
	}

}