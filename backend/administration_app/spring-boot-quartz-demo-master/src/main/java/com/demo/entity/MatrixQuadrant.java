package com.demo.entity;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "matrix-quadrants")
@CompoundIndexes({ @CompoundIndex(name = "boundingbox", def = "{'bottom' : 1, 'top': 1, 'left': 1, 'right': 1}") })
public class MatrixQuadrant {

	private static boolean debug = false;

	@Id
	private String id;
	private double top;
	private double bottom;
	private double left;
	private double right;
	@LastModifiedDate
	private Date lastFetch;

	public MatrixQuadrant(double bottom, double top, double left, double right, Date lastFetch) {
		this.top = top;
		this.bottom = bottom;
		this.left = left;
		this.right = right;
		this.lastFetch = lastFetch;
	}

	@Override
	public String toString() {
		return "MatrixQuadrant [bottom=" + bottom + ", id=" + id + ", lastFetch=" + lastFetch + ", left=" + left
				+ ", right=" + right + ", top=" + top + "]";
	}

	/* Returns the non-decimal part of the given double */
	public static int truncate(double x) {
		return (int) x;
	}

	/**
	 * Returns an ArrayList with the quadrant where the position belongs and its
	 * adjacents if they are close enough
	 * 
	 * @param p             Position of the point we do not know where belongs
	 * @param intervalSize  One side size, in grades, of the matrix quadrant (e.g.
	 *                      0.2)
	 * @param intervalLimit Matrix quadrant portion used to define when the Position
	 *                      is too closed to an edge (e.g. 0.1)
	 * 
	 * @return e.g. in getMatrixQuadrantList(p, 0.2, 0.1) the quadrant size is
	 *         0.2x0.2 grades and the height of the portion where the Position is
	 *         too close to another quadrant is 10% of 0.2
	 */
	public static ArrayList<MatrixQuadrant> getMatrixQuadrantList(Position p, double intervalSize,
			double intervalLimit) {
		ArrayList<MatrixQuadrant> list = new ArrayList<MatrixQuadrant>();

		double top, bottom, left, right;

		if (p.getLat() >= 0) {
			if (debug)
				System.out.println(0);
			bottom = truncate(p.getLat() / intervalSize) * intervalSize;
		} else if (p.getLat() / intervalSize - truncate(p.getLat() / intervalSize) == 0) {
			bottom = truncate(p.getLat() / intervalSize) * intervalSize;
			if (debug)
				System.out.println(1);
		} else {
			bottom = truncate(p.getLat() / intervalSize - 1) * intervalSize;
			if (debug)
				System.out.println(2);
		}
		top = bottom + intervalSize;

		if (p.getLng() >= 0) {
			left = truncate(p.getLng() / intervalSize) * intervalSize;
			if (debug)
				System.out.println(3);
		} else if (p.getLng() / intervalSize - truncate(p.getLng() / intervalSize) == 0) {
			left = truncate(p.getLng() / intervalSize) * intervalSize;
			if (debug)
				System.out.println(4);
		} else {
			left = truncate(p.getLng() / intervalSize - 1) * intervalSize;
			if (debug)
				System.out.println(5);
		}
		right = left + intervalSize;

		// Main Quadrant
		MatrixQuadrant m1 = new MatrixQuadrant(bottom, top, left, right, null);
		list.add(m1);

		// Here it is checked if the position is too close to any edge of the quadrant
		boolean nearTop = false, nearBottom = false, nearLeft = false, nearRight = false;
		if (p.getLat() <= bottom + intervalSize * intervalLimit) {
			if (debug)
				System.out.println(6);
			nearBottom = true;
		} else if (p.getLat() >= top - intervalSize * intervalLimit) {
			if (debug)
				System.out.println(7);
			nearTop = true;
		}

		if (p.getLng() <= left + intervalSize * intervalLimit) {
			if (debug)
				System.out.println(8);
			nearLeft = true;
		} else if (p.getLng() >= right - intervalSize * intervalLimit) {
			if (debug)
				System.out.println(9);
			nearRight = true;
		}

		// Non diagonal coincidences
		if (nearBottom) {
			MatrixQuadrant m2 = new MatrixQuadrant(bottom - intervalSize, top - intervalSize, left, right, null);
			list.add(m2);
			if (debug)
				System.out.println(10);
		} else if (nearTop) {
			if (debug)
				System.out.println(11);
			MatrixQuadrant m2 = new MatrixQuadrant(bottom + intervalSize, top + intervalSize, left, right, null);
			list.add(m2);
		}
		if (nearLeft) {
			if (debug)
				System.out.println(12);
			MatrixQuadrant m2 = new MatrixQuadrant(bottom, top, left - intervalSize, right - intervalSize, null);
			list.add(m2);
		} else if (nearRight) {
			if (debug)
				System.out.println(13);
			MatrixQuadrant m2 = new MatrixQuadrant(bottom, top, left + intervalSize, right + intervalSize, null);
			list.add(m2);
		}

		// Diagonal coincidences
		if (nearBottom && nearLeft) {
			if (debug)
				System.out.println(14);
			MatrixQuadrant m4 = new MatrixQuadrant(bottom - intervalSize, top - intervalSize, left - intervalSize,
					right - intervalSize, null);
			list.add(m4);
		} else if (nearBottom && nearRight) {
			if (debug)
				System.out.println(15);
			MatrixQuadrant m4 = new MatrixQuadrant(bottom - intervalSize, top - intervalSize, left + intervalSize,
					right + intervalSize, null);
			list.add(m4);
		} else if (nearTop && nearRight) {
			if (debug)
				System.out.println(16);
			MatrixQuadrant m4 = new MatrixQuadrant(bottom + intervalSize, top + intervalSize, left + intervalSize,
					right + intervalSize, null);
			list.add(m4);
		} else if (nearTop && nearLeft) {
			if (debug)
				System.out.println(17);
			MatrixQuadrant m4 = new MatrixQuadrant(bottom + intervalSize, top + intervalSize, left - intervalSize,
					right - intervalSize, null);
			list.add(m4);
		}

		/*
		 * for (MatrixQuadrant matrixQuadrant : list) {
		 * System.out.println(matrixQuadrant.toString()); }
		 */

		return list;
	}

	public double getTop() {
		return top;
	}

	public double getBottom() {
		return bottom;
	}

	public double getLeft() {
		return left;
	}

	public double getRight() {
		return right;
	}

	/*
	 * Returns true if both two MatrixQuadrants are equals given the decimal
	 * precision. Otherwise returns false
	 */
	public static boolean equals(MatrixQuadrant m1, MatrixQuadrant m2, int precision) {
		boolean res = true;
		BigDecimal bd1, bd2;
		bd1 = new BigDecimal(m1.bottom);
		bd1 = bd1.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		bd2 = new BigDecimal(m2.bottom);
		bd2 = bd2.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		if (bd1.compareTo(bd2) != 0) {
			res = false;
		}

		bd1 = new BigDecimal(m1.top);
		bd1 = bd1.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		bd2 = new BigDecimal(m2.top);
		bd2 = bd2.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		if (bd1.compareTo(bd2) != 0) {
			res = false;
		}

		bd1 = new BigDecimal(m1.left);
		bd1 = bd1.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		bd2 = new BigDecimal(m2.left);
		bd2 = bd2.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		if (bd1.compareTo(bd2) != 0) {
			res = false;
		}

		bd1 = new BigDecimal(m1.right);
		bd1 = bd1.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		bd2 = new BigDecimal(m2.right);
		bd2 = bd2.setScale(precision, RoundingMode.HALF_UP); // Round to 6 decimals
		if (bd1.compareTo(bd2) != 0) {
			res = false;
		}

		return res;
	}

	public Date getLastFetch() {
		return lastFetch;
	}

	public void setLastFetch(Date lastFetch) {
		this.lastFetch = lastFetch;
	}

	public String getId() {
		return id;
	}
}