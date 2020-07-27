package com.emotionalmap.service;

import java.util.ArrayList;

import com.emotionalmap.entity.Position;

public class Areas {

	// 1 grado son 111,32 km
	// 1/111320 es 1 metro
	private double meter = 1 / 111320;
	private double SCALE = meter * 10;

	public ArrayList<Position> buildRectangle(Position A, Position B) {
		ArrayList<Double> vector = new ArrayList<Double>();
		ArrayList<Double> vectorAux = new ArrayList<Double>();
		vector.add(B.getLng() - A.getLng());
		vector.add(B.getLat() - A.getLat());
		if (vector.get(0) > vector.get(1)) {
			vectorAux.add(vector.get(0) / vector.get(0));
			vectorAux.add(vector.get(1) / vector.get(0));
		} else {
			vectorAux.add(vector.get(0) / vector.get(1));
			vectorAux.add(vector.get(1) / vector.get(1));
		}

		ArrayList<Double> perpendicular1 = new ArrayList<Double>();
		ArrayList<Double> perpendicular2 = new ArrayList<Double>();

		perpendicular1.add(-vector.get(1) * SCALE);
		perpendicular1.add(vector.get(0) * SCALE);
		perpendicular2.add(vector.get(1) * SCALE);
		perpendicular2.add(-vector.get(0) * SCALE);

		Position A1 = new Position(A.getLng() + perpendicular1.get(0), A.getLat() + perpendicular1.get(1));
		Position A2 = new Position(A.getLng() + perpendicular2.get(0), A.getLat() + perpendicular2.get(1));
		Position B1 = new Position(B.getLng() + perpendicular1.get(0), B.getLat() + perpendicular1.get(1));
		Position B2 = new Position(B.getLng() + perpendicular2.get(0), B.getLat() + perpendicular2.get(1));

		// El orden importa, de este modo se devuelven vértices contiguos
		ArrayList<Position> res = new ArrayList<Position>();
		res.add(A1);
		res.add(A2);
		res.add(B2);
		res.add(B1);
		return res;
	}

	public double calculateRectangleArea(Position A, Position B, Position C, Position D) {
		double base = Math.sqrt(Math.pow((B.getLng() - A.getLng()), 2) + Math.pow((B.getLat() - A.getLat()), 2));
		double height = Math.sqrt(Math.pow((C.getLng() - B.getLng()), 2) + Math.pow((C.getLat() - B.getLat()), 2));
		return base * height;
	}

	public double calculateTriangleArea(Position A, Position B, Position C) {
		return 1 / 2 * Math.abs(A.getLng() * (B.getLat() - C.getLat()) + B.getLng() * (C.getLat() - A.getLat())
				+ C.getLng() * (A.getLat() - B.getLat()));
	}

}