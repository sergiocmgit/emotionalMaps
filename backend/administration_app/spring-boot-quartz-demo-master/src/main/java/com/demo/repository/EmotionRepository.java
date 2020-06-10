package com.demo.repository;

import com.demo.entity.Emotion;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmotionRepository extends MongoRepository<Emotion, String> {
	Emotion findById(String id);
}