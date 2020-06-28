package com.emotionalmap.controller;

import java.util.Map;

import com.emotionalmap.dto.ServerResponse;
import com.emotionalmap.entity.Route;
import com.emotionalmap.service.EmotionsDownloader;
import com.emotionalmap.service.RouteService;
import com.emotionalmap.util.JWTCoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/routes")
public class RouteController {

	@Autowired
	private RouteService routeService;
	@Autowired
	private EmotionsDownloader emotionsDownloader;

	@GetMapping("/allroutes")
	public ServerResponse getAllRoutes(@RequestHeader("Authorization") String jwt) {
		if (!JWTCoder.isValidJWT(jwt)) {
			return getServerResponse(400, null);
		}
		System.out.println("GET ALL ROUTES");
		return getServerResponse(200, routeService.getAllRoutes());
	}

	@GetMapping("/route/{id}")
	public ServerResponse getRoute(@RequestHeader("Authorization") String jwt, @PathVariable String id) {
		if (!JWTCoder.isValidJWT(jwt)) {
			return getServerResponse(400, null);
		}
		System.out.println("GET ROUTE WITH ID: " + id);
		Route route = routeService.getRouteById(id);
		if (route != null) {
			return getServerResponse(200, route);
		} else {
			return getServerResponse(400, null);
		}
	}

	@PostMapping("/route")
	public ServerResponse addroute(@RequestHeader("Authorization") String jwt, @RequestBody Map<String, Object> req) {
		if (!JWTCoder.isValidJWT(jwt)) {
			return getServerResponse(400, null);
		}
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
	public ServerResponse editroute(@RequestHeader("Authorization") String jwt, @RequestBody Map<String, Object> req,
			@PathVariable String id) {
		if (!JWTCoder.isValidJWT(jwt)) {
			return getServerResponse(400, null);
		}
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
	public ServerResponse deleteroute(@RequestHeader("Authorization") String jwt, @PathVariable String id) {
		if (!JWTCoder.isValidJWT(jwt)) {
			return getServerResponse(400, null);
		}
		System.out.println("DELETE ROUTE WITH ID: " + id);
			boolean deleted = routeService.deleteRoute(id);
			if (deleted) {
				return getServerResponse(200, deleted);
			} else {
				return getServerResponse(400, deleted);
			}
	}

	@GetMapping("/reachability/{id}")
	public boolean checkReachablity(@RequestHeader("Authorization") String jwt, @PathVariable String id) {
		System.out.println("CHECK REACHABILITY " + id);
		if (JWTCoder.isValidJWT(jwt)) {
			Route r = routeService.getRouteById(id);
			return emotionsDownloader.isReachable(r);
		} else {
			return false;
		}
	}

	public ServerResponse getServerResponse(int responseCode, Object data) {
		ServerResponse serverResponse = new ServerResponse();
		serverResponse.setStatusCode(responseCode);
		serverResponse.setData(data);
		return serverResponse;
	}
}
