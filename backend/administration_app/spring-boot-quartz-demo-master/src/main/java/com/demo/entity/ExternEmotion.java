package com.demo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

@Entity
public class ExternEmotion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	private Date time1;
	private Date time2;
	private String point1;
	private String point2;
	private int emotion;
	private int age;
	private char gender;
	private char type;

	public ExternEmotion(Date time1, Date time2, String point1, String point2, int emotion, int age, char gender,
			char type) {
		this.time1 = time1;
		this.time2 = time2;
		this.point1 = point1;
		this.point2 = point2;
		this.emotion = emotion;
		this.age = age;
		this.gender = gender;
		this.type = type;
	}

}