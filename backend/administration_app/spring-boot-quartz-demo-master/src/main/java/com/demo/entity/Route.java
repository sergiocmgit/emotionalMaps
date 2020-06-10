package com.demo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "routes")
public class Route {
	@Id
	private String id;
	@Indexed(unique=true)
	private String name;
	@Indexed(unique=true)
	private String uri;
	private String username;
	private String password;

	public Route(String id, String name, String uri, String username, String password) {
		this.id = id;
		this.name = name;
		this.uri = uri;
		this.username = username;
		this.password = password;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getUri() {
		return uri;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setId(String id) {
		this.id = id;
	}

}