package com.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dto.ServerResponse;
import com.demo.entity.Route;
import com.demo.service.RouteService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/routes")
public class RoutesController {

	@Autowired
	private RouteService routeService;

	@GetMapping("/allroutes")
	public ServerResponse getAllRoutes() {
		System.out.println("GET ALL ROUTES");
		return getServerResponse(200, routeService.getAllRoutes());
	}

	@GetMapping("/route/{id}")
	public ServerResponse getRoute(@PathVariable String id) {
		System.out.println("GET ROUTE WITH ID: " + id);
		Route route = routeService.getRouteById(id);
		if (route != null) {
			return getServerResponse(200, route);
		} else {
			return getServerResponse(400, null);
		}
	}

	@PostMapping("/route")
	public ServerResponse addroute(@RequestBody Map<String, Object> req) {
		System.out.println("ADD ROUTE");
		Route route = routeService.addRoute(new Route(null, req.get("name").toString(), req.get("uri").toString(),
				req.get("username").toString(), req.get("password").toString()));
		if (route != null) {
			return getServerResponse(201, route);
		} else {
			return getServerResponse(400, null);
		}
	}

	@PutMapping("/route/{id}")
	public ServerResponse editroute(@RequestBody Map<String, Object> req, @PathVariable String id) {
		System.out.println("EDIT ROUTE " + id);
		Route route = routeService.editRoute(id, req.get("name").toString(), req.get("uri").toString(),
				req.get("username").toString(), req.get("password").toString());
		if (route != null) {
			return getServerResponse(200, route);
		} else {
			return getServerResponse(400, null);
		}
	}

	@DeleteMapping("/route/{id}")
	public ServerResponse deleteroute(@PathVariable String id) {
		System.out.println("DELETE ROUTE WITH ID: " + id);
		boolean deleted = routeService.deleteRoute(id);
		if (deleted) {
			return getServerResponse(200, deleted);
		} else {
			return getServerResponse(400, deleted);
		}
	}

	@GetMapping("/reachability/{id}")
	public boolean checkReachablity(@PathVariable String id) {
		System.out.println("CHECK REACHABILITY " + id);
		return true;
	}

	public ServerResponse getServerResponse(int responseCode, Object data) {
		ServerResponse serverResponse = new ServerResponse();
		serverResponse.setStatusCode(responseCode);
		serverResponse.setData(data);
		return serverResponse;
	}
}
