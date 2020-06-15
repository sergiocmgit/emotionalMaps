package com.demo.service;

import com.demo.entity.User;
import com.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User findById(String id) {
		return userRepository.findById(id);
	}

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public User login(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}

	@Override
	public User signup(String username, String password) {
		User user = userRepository.findByUsername(username);
		if (user == null) {
			return userRepository.insert(new User(username, password));
		} else {
			return null;
		}
	}

}