package com.demo.job;

import org.quartz.InterruptableJob;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobKey;
import org.quartz.UnableToInterruptJobException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.demo.service.OSMdownloader;

import java.util.Date;
import java.util.List;

import com.demo.entity.MatrixQuadrant;
import com.demo.repository.MatrixQuadrantRepository;
import com.demo.repository.SegmentRepository;
import com.demo.service.JobService;

public class DownloadOSMJob extends QuartzJobBean implements InterruptableJob {

	private volatile boolean toStopFlag = true;

	@Autowired
	JobService jobService;
	@Autowired
	private SegmentRepository segmentRepository;
	@Autowired
	private MatrixQuadrantRepository matrixQuadrantRepository;

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
			System.out.println(matrixQuadrant.toString());
			try {
				// For every MatrixQuadrant, download its ways and update them
				osm.downloadWays(matrixQuadrant.getBottom(), matrixQuadrant.getTop(), matrixQuadrant.getLeft(),
						matrixQuadrant.getRight());
				// Update "lastFetch" field of the MatrixQuadrant
				matrixQuadrant.setLastFetch(new Date());
				matrixQuadrantRepository.save(matrixQuadrant);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		System.out.println("Thread: " + Thread.currentThread().getName() + " stopped.");
	}

	@Override
	public void interrupt() throws UnableToInterruptJobException {
		System.out.println("Stopping thread... ");
		toStopFlag = false;
	}

}