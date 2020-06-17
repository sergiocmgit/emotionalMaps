package com.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dto.ServerResponse;
import com.demo.service.FilterService;
import com.demo.util.JWTCoder;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/filter")
public class FilterController {

	@GetMapping("/reset-filters")
	public ServerResponse getAllRoutes(@RequestHeader("Authorization") String jwt) {
		if (!JWTCoder.isValidJWT(jwt)) {
			return getServerResponse(400, null);
		}
		System.out.println("RESET FILTERS");
		FilterService.deleteCollections();
		return getServerResponse(200, "Success");
	}

	public ServerResponse getServerResponse(int responseCode, Object data) {
		ServerResponse serverResponse = new ServerResponse();
		serverResponse.setStatusCode(responseCode);
		serverResponse.setData(data);
		return serverResponse;
	}
}