package com.demo.repository;

import com.demo.entity.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	User findById(String id);

	User findByUsername(String username);

	User findByUsernameAndPassword(String username, String password);
}