package com.demo;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import com.demo.entity.User;
import com.demo.repository.UserRepository;
import com.demo.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;

	@Before
	public void addUser() {
		User user = userService.findByUsername("admin");
		if (user == null) {
			userRepository.insert(user);
		}
	}

	@Test
	public void login() {
		User user = userService.login("admin", "admin");
		assertNotNull(user);
	}

}