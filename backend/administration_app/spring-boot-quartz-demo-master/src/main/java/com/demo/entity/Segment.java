package com.demo.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonLineString;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.index.GeoSpatialIndexType;
import org.springframework.data.mongodb.core.index.GeoSpatialIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "segments")
public class Segment {
	// <way_id>-<node1_id>-<node2_id>
	@Id
	private String id;
	private long way_id;
	private long node1_id;
	private long node2_id;
	private Position point1;
	private Position point2;

	@GeoSpatialIndexed(type = GeoSpatialIndexType.GEO_2DSPHERE)
	private GeoJsonLineString coordinates;

	private Date lastFetch;

	public Segment(long way_id, long node1_id, long node2_id, Position point1, Position point2, Date lastFetch) {
		if (node1_id < node2_id) {
			this.id = way_id + "_" + node1_id + "_" + node2_id;
		} else {
			this.id = way_id + "_" + node2_id + "_" + node1_id;
		}
		this.way_id = way_id;
		this.node1_id = node1_id;
		this.node2_id = node2_id;
		this.point1 = point1;
		this.point2 = point2;
		this.lastFetch = lastFetch;

		this.coordinates = new GeoJsonLineString(new GeoJsonPoint(point1.getLng(), point1.getLat()),
				new GeoJsonPoint(point2.getLng(), point2.getLat()));
	}

	@Override
	public String toString() {
		return "Segment [coordinates=" + coordinates + ", id=" + id + ", lastFetch=" + lastFetch + ", node1_id="
				+ node1_id + ", node2_id=" + node2_id + ", point1=" + point1 + ", point2=" + point2 + ", way_id="
				+ way_id + "]";
	}

	public Position getPoint1() {
		return point1;
	}

	public Position getPoint2() {
		return point2;
	}

	public String getId() {
		return id;
	}

}