package com.emotionalmap.util;

import java.util.Calendar;
import java.util.GregorianCalendar;

import com.emotionalmap.entity.Emotion;

public class CollectionNameBuilder {
	public static String build(Emotion emotion) {
		String collectionName = "";
		Calendar calendar = GregorianCalendar.getInstance();
		calendar.setTime(emotion.getTime1());
		int hour = calendar.get(Calendar.HOUR_OF_DAY);
		// Morning from 6:00 to 12:59
		if (hour >= 6 && hour < 13) {
			collectionName += "morning";
		}
		// Afternoon from 13:00 to 20:59
		else if (hour >= 13 && hour < 21) {
			collectionName += "afternoon";
		}
		// Night from 21:00 to 5:59
		else if (hour >= 21 || hour < 6) {
			collectionName += "night";
		}

		// Seasons
		int dayOfYear = calendar.get(Calendar.DAY_OF_YEAR);
		if (dayOfYear >= 81 && dayOfYear <= 173) {
			collectionName += ".spring";
		} else if (dayOfYear >= 174 && dayOfYear <= 266) {
			collectionName += ".summer";
		} else if (dayOfYear >= 267 && dayOfYear <= 356) {
			collectionName += ".autumn";
		} else {
			collectionName += ".winter";
		}

		// Gender
		if (emotion.getGender() == 'M') {
			collectionName += ".male";
		} else if (emotion.getGender() == 'F') {
			collectionName += ".female";
		} else if (emotion.getGender() == 'O') {
			collectionName += ".othergender";
		}

		// Age
		if (emotion.getAge() < 18) {
			collectionName += ".child";
		} else if (emotion.getAge() >= 18 && emotion.getAge() < 65) {
			collectionName += ".adult";
		} else {
			collectionName += ".old";
		}

		// Type
		if (emotion.getType() == 'C') {
			collectionName += ".citizen";
		} else {
			collectionName += ".tourist";
		}

		return collectionName;
	}
}