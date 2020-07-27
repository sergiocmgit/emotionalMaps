package com.emotionalmap.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "routes")
public class Route {
	@Id
	private String id;
	@Indexed(unique = true)
	private String name;
	@Indexed(unique = true)
	private String uri;
	private String username;
	private String password;
	private Date lastFetch;

	public Route(String id, String name, String uri, String username, String password) {
		this.id = id;
		this.name = name;
		this.uri = uri;
		this.username = username;
		this.password = password;
		this.lastFetch = null;
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

	public Date getLastFetch() {
		return lastFetch;
	}

	public void updateLastFetch() {
		lastFetch = new Date();
	}

	@Override
	public String toString() {
		return "Route [id=" + id + ", lastFetch=" + lastFetch + ", name=" + name + ", password=" + password + ", uri="
				+ uri + ", username=" + username + "]";
	}

}