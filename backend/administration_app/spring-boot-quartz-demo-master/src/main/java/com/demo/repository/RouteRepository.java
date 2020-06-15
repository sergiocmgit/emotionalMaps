package com.demo.repository;

import com.demo.entity.Route;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RouteRepository extends MongoRepository<Route, String> {
	Route findById(String id);
	Route findByName(String name);
	Route findByUri(String uri);
}