package com.demo.service;

import java.util.List;

import com.demo.entity.Route;
import com.demo.repository.RouteMongoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteServiceImpl implements RouteService {

	@Autowired
	private RouteMongoRepository routeMongoRepository;

	@Override
	public List<Route> getAllRoutes() {
		return routeMongoRepository.findAll();
	}

	@Override
	public Route getRouteById(String id) {
		return routeMongoRepository.findById(id);
	}

	@Override
	public Route addRoute(Route route) {
		try {
			return routeMongoRepository.insert(route);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public Route editRoute(String id, String name, String uri, String username, String password) {
		try {
			Route route = new Route(id, name, uri, username, password);
			return routeMongoRepository.save(route);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public boolean deleteRoute(String id) {
		try {
			routeMongoRepository.delete(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
