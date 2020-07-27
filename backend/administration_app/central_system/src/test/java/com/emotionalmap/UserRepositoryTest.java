package com.emotionalmap;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import com.emotionalmap.entity.User;
import com.emotionalmap.repository.UserRepository;
import com.emotionalmap.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;

	@Test
	public void signupAndLogin() {
		User user = userService.signup("pruebaTest", "pruebaTest");
		assertNotNull(user);
		String token;
		token = userService.login("pruebaTest", "pruebaTest");
		assertNotNull(token);
		userRepository.delete(user);
		token = userService.login("pruebaTest", "pruebaTest");
		assertNull(token);
	}

}