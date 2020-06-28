package com.emotionalmap.service;

import java.util.List;

import com.emotionalmap.entity.Route;
import com.emotionalmap.repository.RouteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteServiceImpl implements RouteService {

	@Autowired
	private RouteRepository routeRepository;

	@Override
	public List<Route> getAllRoutes() {
		return routeRepository.findAll();
	}

	@Override
	public Route getRouteById(String id) {
		return routeRepository.findById(id);
	}

	@Override
	public Route addRoute(Route route) {
		try {
			return routeRepository.insert(route);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public Route editRoute(String id, String name, String uri, String username, String password) {
		try {
			Route route = new Route(id, name, uri, username, password);
			return routeRepository.save(route);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public boolean deleteRoute(String id) {
		try {
			routeRepository.delete(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
