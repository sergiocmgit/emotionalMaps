package com.emotionalmap.service;

import com.emotionalmap.entity.User;

public interface UserService {
	User findById(String id);

	User findByUsername(String username);

	String login(String username, String password);

	User signup(String string, String string2);
}
