package com.emotionalmap.entity;

public class Position {
	private double lng;
	private double lat;

	@Override
	public String toString() {
		return "Position [lat=" + lat + ", lng=" + lng + "]";
	}

	public Position(double lng, double lat) {
		this.lng = lng;
		this.lat = lat;
	}

	public double getLng() {
		return lng;
	}

	public double getLat() {
		return lat;
	}
}