package com.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.junit.Test;

public class ExternEmotionTest {
	@Test
	public void getAll() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager
					.getConnection("jdbc:mysql://localhost/geoemo?serverTimezone=UTC" + "&user=root&password=admin");

			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select *, ST_X(emocaptures.point1) as x_coordinate, ST_Y(emocaptures.point1) as y_coordinate from emocaptures");
			while (rs.next())
				System.out.println(rs.getDouble("x_coordinate") + "\t" + rs.getDouble("y_coordinate"));
			con.close();

		} catch (Exception e) {
			System.out.println(e);
			assert false;
		}

	}
}