package com.demo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import com.demo.entity.Emotion;
import com.demo.repository.EmotionRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmotionRepositoryTest {

	@Autowired
	private EmotionRepository emotionRepository;

	@Test
	public void getAll() {
		int i = 0;
		Iterable<Emotion> all = emotionRepository.findAll();
		for (Emotion m : all) {
			System.out.println(m.toString());
			i++;
		}
		assertEquals(5, i);
	}
}