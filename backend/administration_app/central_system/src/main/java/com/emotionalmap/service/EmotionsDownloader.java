package com.emotionalmap.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import com.emotionalmap.entity.Emotion;
import com.emotionalmap.entity.Position;
import com.emotionalmap.entity.Route;

import org.springframework.stereotype.Service;

@Service
public class EmotionsDownloader {

	public boolean isReachable(Route route) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://" + route.getUri() + "?" + "serverTimezone=UTC"
					+ "&user=" + route.getUsername() + "&password=" + route.getPassword());
			boolean b = con.isValid(10000);
			con.close();
			return b;
		} catch (Exception e) {
			System.out.println(e);
		}
		return false;
	}

	public ArrayList<Emotion> retrieveEmotions(Route route) {
		ArrayList<Emotion> emotions = new ArrayList<>();

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://" + route.getUri() + "?" + "serverTimezone=UTC"
					+ "&user=" + route.getUsername() + "&password=" + route.getPassword());

			Statement stmt = con.createStatement();
			ResultSet rs;
			if (route.getLastFetch() == null) {
				rs = stmt.executeQuery(
						"select *, ST_X(emocaptures.point1) as lng1, ST_Y(emocaptures.point1) as lat1, ST_X(emocaptures.point2) as lng2, ST_Y(emocaptures.point2) as lat2 from emocaptures");
			} else {
				SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				String lastFetchFormated = sdfDate.format(route.getLastFetch());
				rs = stmt.executeQuery(
						"select *, ST_X(emocaptures.point1) as lng1, ST_Y(emocaptures.point1) as lat1, ST_X(emocaptures.point2) as lng2, ST_Y(emocaptures.point2) as lat2 from emocaptures where time1 >= '"
								+ lastFetchFormated + "'");
			}

			int feeling, age;
			Date time1, time2;
			double lng1, lat1, lng2, lat2;
			String gender, type;
			while (rs.next()) {
				feeling = rs.getInt(6);
				age = rs.getInt(7);
				lng1 = rs.getDouble("lng1");
				lat1 = rs.getDouble("lat1");
				lng2 = rs.getDouble("lng2");
				lat2 = rs.getDouble("lat2");
				time1 = rs.getTimestamp(2);
				time2 = rs.getTimestamp(4);
				gender = rs.getString(8);
				type = rs.getString(9);
				Emotion e = new Emotion(time1, time2, new Position(lng1, lat1), new Position(lng2, lat2), feeling, age,
						gender.charAt(0), type.charAt(0), null);
				emotions.add(e);
			}
			con.close();

			return emotions;
		} catch (Exception e) {
			System.out.println(e);
		}
		return emotions;
	}
}