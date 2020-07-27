package com.emotionalmap;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Date;

import org.junit.Test;

public class ExternEmotionTest {
	@Test
	public void getAll() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost/geoemo?" + "serverTimezone=UTC" + "&user=root&password=admin");

			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(
					"select *, ST_X(emocaptures.point1) as lng1, ST_Y(emocaptures.point1) as lat1, ST_X(emocaptures.point2) as lng2, ST_Y(emocaptures.point2) as lat2 from emocaptures");

			int id, feeling, age;
			Timestamp time1, time2;
			double lng1, lat1, lng2, lat2;
			String gender, type;
			while (rs.next()) {
				id = rs.getInt(1);
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
				System.out.println(id + "\t" + time1 + "\t" + lng1 + "\t" + lat1 + "\t" + time2 + "\t" + lng2 + "\t"
						+ lat2 + "\t" + gender + "\t" + type);
			}
			con.close();

		} catch (Exception e) {
			System.out.println(e);
			assert false;
		}

	}

	@Test
	public void deleteOne() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost/geoemo?" + "serverTimezone=UTC" + "&user=root&password=admin");

			Statement stmt = con.createStatement();
			stmt.executeUpdate("delete from emocaptures where id=" + 130);
		} catch (Exception e) {
			System.out.println(e);
			assert false;
		}
	}

}