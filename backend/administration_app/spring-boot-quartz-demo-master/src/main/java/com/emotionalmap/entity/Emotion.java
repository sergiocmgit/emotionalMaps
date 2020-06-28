package com.emotionalmap.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "emotions")
public class Emotion {
	@Id
	private String id;

	private Date time1;
	private Date time2;
	private Position point1;
	private Position point2;
	private int emotion;
	private int age;
	private char gender;
	private char type;
	private String segment;

	public Emotion(Date time1, Date time2, Position point1, Position point2, int emotion, int age, char gender,
			char type, String segment) {
		this.time1 = time1;
		this.time2 = time2;
		this.point1 = point1;
		this.point2 = point2;
		this.emotion = emotion;
		this.age = age;
		this.gender = gender;
		this.type = type;
		this.segment = segment;
	}

	@Override
	public String toString() {
		return "Emotion [age=" + age + ", emotion=" + emotion + ", gender=" + gender + ", id=" + id + ", point1="
				+ point1 + ", point2=" + point2 + ", segment=" + segment + ", time1=" + time1 + ", time2=" + time2
				+ ", type=" + type + "]";
	}

	public Position getPoint1() {
		return point1;
	}

	public Position getPoint2() {
		return point2;
	}

	public String getSegment() {
		return segment;
	}

	public void setSegment(String segment) {
		this.segment = segment;
	}

	public int getEmotion() {
		return emotion;
	}

	public Date getTime1() {
		return time1;
	}

	public char getGender() {
		return gender;
	}

	public char getType() {
		return type;
	}

	public int getAge() {
		return age;
	}

	public void removeSegment() {
		this.segment = null;
	}

}