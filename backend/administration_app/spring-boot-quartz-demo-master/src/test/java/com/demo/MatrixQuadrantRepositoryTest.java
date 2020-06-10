package com.demo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Date;

import com.demo.entity.MatrixQuadrant;
import com.demo.entity.Position;
import com.demo.repository.MatrixQuadrantRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MatrixQuadrantRepositoryTest {

	@Autowired
	private MatrixQuadrantRepository matrixQuadrantRepository;

	@Test
	public void getAll() {
		MatrixQuadrant initial = new MatrixQuadrant(1, 1, 1, 1, new Date());
		matrixQuadrantRepository.save(initial);

		int i = 0;
		Iterable<MatrixQuadrant> all = matrixQuadrantRepository.findAll();
		for (MatrixQuadrant m : all) {
			System.out.println(m.toString());
			i++;
		}
		assertEquals(1, i);

		matrixQuadrantRepository.deleteAll();
	}

	@Test
	public void findByCoordinatesNotNull() {
		// @BeforeEach
		MatrixQuadrant initial = new MatrixQuadrant(1, 1, 45, 1, new Date());
		matrixQuadrantRepository.save(initial);

		// @Test
		MatrixQuadrant m = matrixQuadrantRepository.findByBottomAndTopAndLeftAndRight(1, 1, 45, 1);
		assertNotNull(m);

		// @AfterEach
		matrixQuadrantRepository.deleteAll();
	}

	@Test
	public void findByCoordinatesNull() {
		// @BeforeEach

		// @Test
		MatrixQuadrant m = matrixQuadrantRepository.findByBottomAndTopAndLeftAndRight(0, 0, 0, 0);
		assertNull(m);

		// @AfterEach
		matrixQuadrantRepository.deleteAll();
	}

	/* The position is close to two edges of the quadrant */
	@Test
	public void getMatrixQuadrantsV3T0() {
		Position p = new Position(23.200002, -76.799999);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 4;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(-76.8, -76.6, 23.2, 23.4, null);
		MatrixQuadrant m2 = new MatrixQuadrant(-77, -76.8, 23.2, 23.4, null);
		MatrixQuadrant m3 = new MatrixQuadrant(-76.8, -76.6, 23, 23.2, null);
		MatrixQuadrant m4 = new MatrixQuadrant(-77, -76.8, 23, 23.2, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m3, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m4, 6)) {
				count++;
			}
		}
		assert count == 4;
	}

	/* Equivalence class 1 for the third version of the algorithm */
	@Test
	public void getMatrixQuadrantsV3T1() {
		Position p = new Position(23.600031, 98.19999);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 4;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(98, 98.2, 23.6, 23.8, null);
		MatrixQuadrant m2 = new MatrixQuadrant(98.2, 98.4, 23.6, 23.8, null);
		MatrixQuadrant m3 = new MatrixQuadrant(98, 98.2, 23.4, 23.6, null);
		MatrixQuadrant m4 = new MatrixQuadrant(98.2, 98.4, 23.4, 23.6, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m3, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m4, 6)) {
				count++;
			}
		}
		assert count == 4;
	}

	/* Equivalence class 2 for the third version of the algorithm */
	@Test
	public void getMatrixQuadrantsV3T2() {
		Position p = new Position(23.600031, -21);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 4;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(-21, -20.8, 23.6, 23.8, null);
		MatrixQuadrant m2 = new MatrixQuadrant(-21.2, -21, 23.6, 23.8, null);
		MatrixQuadrant m3 = new MatrixQuadrant(-21, -20.8, 23.4, 23.6, null);
		MatrixQuadrant m4 = new MatrixQuadrant(-21.2, -21, 23.4, 23.6, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m3, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m4, 6)) {
				count++;
			}
		}
		assert count == 4;
	}

	/* Equivalence class 3 for the third version of the algorithm */
	@Test
	public void getMatrixQuadrantsV3T3() {
		Position p = new Position(23.600031, -50);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 4;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(-50.2, -50, 23.6, 23.8, null);
		MatrixQuadrant m2 = new MatrixQuadrant(-50, -49.8, 23.6, 23.8, null);
		MatrixQuadrant m3 = new MatrixQuadrant(-50.2, -50, 23.4, 23.6, null);
		MatrixQuadrant m4 = new MatrixQuadrant(-50, -49.8, 23.4, 23.6, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m3, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m4, 6)) {
				count++;
			}
		}
		assert count == 4;
	}

	/* Equivalence class 4 for the third version of the algorithm */
	@Test
	public void getMatrixQuadrantsV3T4() {
		Position p = new Position(21, 98.19999);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 4;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(98, 98.2, 21, 21.2, null);
		MatrixQuadrant m2 = new MatrixQuadrant(98.2, 98.4, 21, 21.2, null);
		MatrixQuadrant m3 = new MatrixQuadrant(98, 98.2, 20.8, 21, null);
		MatrixQuadrant m4 = new MatrixQuadrant(98.2, 98.4, 20.8, 21, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m3, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m4, 6)) {
				count++;
			}
		}
		assert count == 4;
	}

	/* Equivalence class 5 for the third version of the algorithm */
	@Test
	public void getMatrixQuadrantsV3T5() {
		Position p = new Position(-50, 98.19999);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 4;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(98, 98.2, -50, -49.8, null);
		MatrixQuadrant m2 = new MatrixQuadrant(98.2, 98.4, -50, -49.8, null);
		MatrixQuadrant m3 = new MatrixQuadrant(98, 98.2, -50.2, -50, null);
		MatrixQuadrant m4 = new MatrixQuadrant(98.2, 98.4, -50.2, -50, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m3, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m4, 6)) {
				count++;
			}
		}
		assert count == 4;
	}

	/* Equivalence class 6 for the third version of the algorithm */
	@Test
	public void getMatrixQuadrantsV3T6() {
		Position p = new Position(-180, 42.1);
		ArrayList<MatrixQuadrant> list = MatrixQuadrant.getMatrixQuadrantList(p, 0.2, 0.1);
		assert list.size() == 2;
		int count = 0;
		MatrixQuadrant m1 = new MatrixQuadrant(42, 42.2, -180, -179.8, null);
		MatrixQuadrant m2 = new MatrixQuadrant(42, 42.2, -180.2, -180, null);
		for (MatrixQuadrant m : list) {
			if (MatrixQuadrant.equals(m, m1, 6)) {
				count++;
			} else if (MatrixQuadrant.equals(m, m2, 6)) {
				count++;
			}
		}
		assert count == 2;
	}
}