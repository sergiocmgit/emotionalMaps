package com.emotionalmap;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import java.util.Date;

import com.emotionalmap.entity.Position;
import com.emotionalmap.entity.Segment;
import com.emotionalmap.repository.SegmentRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SegmentRepositoryTest {

	@Autowired
	private SegmentRepository segmentRepository;

	@Before
	public void fillDatabase() {
		Position p1 = new Position(23.5464325, 64.53452);
		Position p2 = new Position(-23.5464325, -64.53452);
		Segment s = new Segment(4766164, 67413242, 357434523, p1, p2, "idMatrixQuadrant");
		segmentRepository.save(s);
	}

	@Test
	public void getAll() {
		int i = 0;
		Iterable<Segment> all = segmentRepository.findAll();
		for (Segment m : all) {
			System.out.println(m.toString());
			i++;
		}
		assertEquals(1, i);
	}

	@Test
	public void findByWayAndNodes() {
		Segment s = segmentRepository.findByWayAndNode1_idAndNode2_id(4766164, 67413242, 357434523);
		assertNotNull(s);
	}

	@After
	public void emptyDatabase() {
		segmentRepository.deleteAll();
	}
}