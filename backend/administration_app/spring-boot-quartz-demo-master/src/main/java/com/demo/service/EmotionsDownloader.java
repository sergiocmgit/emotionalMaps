package com.demo.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;

import com.demo.entity.Emotion;
import com.demo.entity.Position;

import org.springframework.stereotype.Service;

@Service
public class EmotionsDownloader {

	public boolean isReachable(String uri, String user, String password) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://" + uri + "?" + "serverTimezone=UTC" + "&user=" + user + "&password=" + password);
			boolean b = con.isValid(10000);
			con.close();
			return b;
		} catch (Exception e) {
			System.out.println(e);
		}
		return false;
	}

	public ArrayList<Emotion> retrieveEmotions(String uri, String user, String password) {
		ArrayList<Emotion> emotions = new ArrayList<>();

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://" + uri + "?" + "serverTimezone=UTC" + "&user=" + user + "&password=" + password);

			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(
					"select *, ST_X(emocaptures.point1) as lng1, ST_Y(emocaptures.point1) as lat1, ST_X(emocaptures.point2) as lng2, ST_Y(emocaptures.point2) as lat2 from emocaptures");

			int feeling, age;
			Date time1, time2;
			double lng1, lat1, lng2, lat2;
			String gender, type, idMysql;
			while (rs.next()) {
				idMysql = rs.getString(1);
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
				// System.out.println(id + "\t" + time1 + "\t" + lng1 + "\t" + lat1 + "\t" +
				// time2 + "\t" + lng2 + "\t" + lat2 + "\t" + gender + "\t" + type);
				Emotion e = new Emotion(time1, time2, new Position(lng1, lat1), new Position(lng2, lat2), feeling, age,
						gender.charAt(0), type.charAt(0), null, idMysql);
				emotions.add(e);
				// System.out.println(e.toString());
			}
			con.close();
			return emotions;
		} catch (Exception e) {
			System.out.println(e);
		}
		return emotions;
	}

	public void deleteEmotion(Emotion emotion, String uri, String user, String password) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://" + uri + "?" + "serverTimezone=UTC" + "&user=" + user + "&password=" + password);

			Statement stmt = con.createStatement();
			stmt.executeUpdate("delete from emocaptures where id=" + emotion.getIdMysql());
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}