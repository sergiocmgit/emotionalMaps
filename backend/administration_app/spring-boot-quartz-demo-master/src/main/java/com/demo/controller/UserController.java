package com.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.demo.dto.ServerResponse;
import com.demo.entity.User;
import com.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ServerResponse login(@RequestBody Map<String, Object> req) {
		User user = userService.login(req.get("username").toString(), req.get("password").toString());
		if (user != null) {
			return getServerResponse(200, user);
		} else {
			return getServerResponse(400, null);
		}
	}

	@PostMapping("/signup")
	public ServerResponse signup(@RequestBody Map<String, Object> req) {
		User user = userService.signup(req.get("username").toString(), req.get("password").toString());
		if (user != null) {
			return getServerResponse(201, user);
		} else {
			return getServerResponse(400, null);
		}
	}

	public ServerResponse getServerResponse(int responseCode, Object data) {
		ServerResponse serverResponse = new ServerResponse();
		serverResponse.setStatusCode(responseCode);
		serverResponse.setData(data);
		return serverResponse;
	}
}
