package com.emotionalmap.repository;

import java.util.ArrayList;

import com.emotionalmap.entity.Segment;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SegmentRepository extends MongoRepository<Segment, String> {
	Segment findById(String id);

	ArrayList<Segment> findByIdMatrixQuadrant(String idMatrixQuadrant);

	@Query("{ 'way_id' : ?0, 'node1_id' : ?1, 'node2_id' : ?2 }")
	Segment findByWayAndNode1_idAndNode2_id(int way_id, int node1_id, int node2_id);

	@Query("{'coordinates': {'$nearSphere': [?0, ?1]}}")
	ArrayList<Segment> findTop2ByCoordinates(double lng, double lat, Pageable page);
}