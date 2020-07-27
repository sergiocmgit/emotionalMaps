package com.emotionalmap.service;

import java.util.List;

import com.emotionalmap.entity.Route;

public interface RouteService {
	List<Route> getAllRoutes();
	Route getRouteById(String id);
	Route addRoute(Route route);
	Route editRoute(String id, String name, String uri, String username, String password);
	boolean deleteRoute(String id);
}
