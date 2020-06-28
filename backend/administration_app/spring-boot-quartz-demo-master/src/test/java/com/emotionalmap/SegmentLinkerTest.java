package com.emotionalmap;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import com.emotionalmap.entity.Position;
import com.emotionalmap.entity.Segment;
import com.emotionalmap.repository.SegmentRepository;
import com.emotionalmap.service.SegmentLinker;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SegmentLinkerTest {

	@Autowired
	private SegmentRepository segmentRepository;

	@Test
	public void SegmentLinkerT1() {
		assertNotNull(segmentRepository);
		SegmentLinker segmentLinker = new SegmentLinker(segmentRepository);
		assertNotNull(segmentLinker);
		Segment s = segmentLinker.segmentByEmotion(new Position(-3.0453707, 41.9741649),
				new Position(-3.0453707, 41.9741649));
		assertNotNull(s);
		System.out.println(s.toString());
		assert true;
	}
}