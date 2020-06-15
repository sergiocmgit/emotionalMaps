package com.demo.service;

import com.demo.entity.User;

public interface UserService {
	User findById(String id);

	User findByUsername(String username);

	User login(String username, String password);

	User signup(String string, String string2);
}
