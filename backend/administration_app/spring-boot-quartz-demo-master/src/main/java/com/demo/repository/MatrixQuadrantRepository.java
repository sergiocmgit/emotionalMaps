package com.demo.repository;

import java.util.Date;
import java.util.List;

import com.demo.entity.MatrixQuadrant;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatrixQuadrantRepository extends MongoRepository<MatrixQuadrant, String> {
	
	MatrixQuadrant findById(String id);
	MatrixQuadrant findByBottomAndTopAndLeftAndRight(double bottom, double top, double left, double right);
	List<MatrixQuadrant> findByLastFetchLessThan(Date lastFetch);
}