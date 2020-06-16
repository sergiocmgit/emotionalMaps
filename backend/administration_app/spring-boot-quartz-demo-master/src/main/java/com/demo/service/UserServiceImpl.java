package com.demo.service;

import com.demo.entity.User;
import com.demo.repository.UserRepository;
import com.demo.util.JWTCoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

	@Override
	public User findById(String id) {
		return userRepository.findById(id);
	}

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public String login(String username, String password) {
		User user = userRepository.findByUsername(username);
		if (user != null && bCryptPasswordEncoder.matches(password, user.getPassword())) {
			return JWTCoder.createJWT();
		} else {
			return null;
		}
	}

	@Override
	public User signup(String username, String password) {
		User user = userRepository.findByUsername(username);
		if (user == null) {
			return userRepository.insert(new User(username, bCryptPasswordEncoder.encode(password)));
		} else {
			return null;
		}
	}

}