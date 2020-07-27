package com.emotionalmap.repository;

import java.util.ArrayList;

import com.emotionalmap.entity.Emotion;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmotionRepository extends MongoRepository<Emotion, String> {
	Emotion findById(String id);

	ArrayList<Emotion> findBySegment(String id);
}