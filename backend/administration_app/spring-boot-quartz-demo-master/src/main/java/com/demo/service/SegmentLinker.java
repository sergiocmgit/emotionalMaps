package com.demo.service;

import java.util.ArrayList;

import com.demo.entity.Position;
import com.demo.entity.Segment;
import com.demo.repository.SegmentRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class SegmentLinker {

	private boolean debug = false;

	private SegmentRepository segmentRepository;

	public SegmentLinker(SegmentRepository segmentRepository) {
		this.segmentRepository = segmentRepository;
	}

	private ArrayList<Segment> closestSegment(Position point) {
		ArrayList<Segment> segments = new ArrayList<Segment>();
		Areas a = new Areas();
		double rectangleArea = 0;
		double triangleArea1 = 0;
		double triangleArea2 = 0;
		double triangleArea3 = 0;
		double triangleArea4 = 0;
		double sumTriangleAreas = 0;

		ArrayList<Segment> segmentsFound = segmentRepository.findTop2ByCoordinates(point.getLng(), point.getLat(),
				new PageRequest(0, 2));
		for (Segment s : segmentsFound) {
			if (debug)
				System.out.println("-----------------------------------------");
			if (debug)
				System.out.println("Uno de los segmentos encontrados: " + s.toString());
			ArrayList<Position> rectangleVertices = a.buildRectangle(s.getPoint1(), s.getPoint2());
			rectangleArea = a.calculateRectangleArea(rectangleVertices.get(0), rectangleVertices.get(1),
					rectangleVertices.get(2), rectangleVertices.get(3));
			triangleArea1 = a.calculateTriangleArea(point, rectangleVertices.get(0), rectangleVertices.get(1));
			triangleArea2 = a.calculateTriangleArea(point, rectangleVertices.get(1), rectangleVertices.get(2));
			triangleArea3 = a.calculateTriangleArea(point, rectangleVertices.get(2), rectangleVertices.get(3));
			triangleArea4 = a.calculateTriangleArea(point, rectangleVertices.get(3), rectangleVertices.get(0));
			sumTriangleAreas = triangleArea1 + triangleArea2 + triangleArea3 + triangleArea4;
			if (rectangleArea <= sumTriangleAreas + 0.0000000001 && rectangleArea >= sumTriangleAreas - 0.0000000001) {
				segments.add(s);
			}
		}

		return segments;
	}

	public Segment segmentByEmotion(Position point1, Position point2) {
		ArrayList<Segment> list1 = closestSegment(point1);
		ArrayList<Segment> list2 = closestSegment(point2);

		// Ambas coordenadas tienen segments cerca
		if (list1.size() != 0 && list2.size() != 0) {
			// Ambas coordenadas corresponden a un segmento sin haber conflicto
			// Ambas coordenadas corresponden a la misma intersección
			if (list1.equals(list2)) {
				return list1.get(0);
			}
			// La primera coordenada está en una intersección pero la segunda no
			else if (list1.size() > 1 && list2.size() == 1) {
				return list2.get(0);
			}
			// La segunda coordenada está en una intersección pero la primera no
			else if (list1.size() == 1 && list2.size() > 1) {
				return list1.get(0);
			} else if (list1.size() > 1 && list2.size() > 1 && !list1.equals(list2)) {
				if (list1.get(0).equals(list2.get(0))) {
					return list1.get(0);
				} else {
					return list1.get(1);
				}
			}
		}
		// El primer par de coordenadas tiene algún segmento cerca pero el segundo no
		else if (list1.size() != 0) {
			return list1.get(0);
		}
		// El segundo par de coordenadas tiene algún segmento cerca pero el primero no
		else {
			return list2.get(0);
		}
		return null;
	}
}