package com.demo;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import com.demo.entity.Route;
import com.demo.repository.RouteMongoRepository;
import com.demo.service.RouteService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RouteMongoRepositoryTest {

	@Autowired
	private RouteMongoRepository routeMongoRepository;
	@Autowired
	private RouteService routeService;

	@Before
	public void setUp() throws Exception {
		Route route1 = new Route(null, "Zaragoza", "uri:Zaragoza", "username1", "password1");
		Route route2 = new Route(null, "Bilbao", "uri:Bilbao", "username2", "password2");
		// save product, verify has ID value after save
		assertNull(route1.getId());
		assertNull(route2.getId());// null before save
		this.routeMongoRepository.save(route1);
		this.routeMongoRepository.save(route2);
		assertNotNull(route1.getId());
		assertNotNull(route2.getId());
	}

	@Test
	public void testFetchData() {
		/* Test data retrieval */
		Route routeA = routeMongoRepository.findByName("Zaragoza");
		assertNotNull(routeA);
		assertEquals("uri:Zaragoza", routeA.getUri());
		/* Get all products, list should only have two */
		Iterable<Route> routes = routeMongoRepository.findAll();
		int count = 0;
		for (Route r : routes) {
			count++;
		}
		assertEquals(count, 2);
	}

	@Test
	public void addRoute() throws Exception {
		Route route = new Route(null, "Barcelona", "uri:Barcelona", "username1", "password1");
		// save product, verify has ID value after save
		assertNull(route.getId());
		Route routeAdded = routeService.addRoute(route);
		assertNotNull(routeAdded.getId());
	}

	@Test
	public void doNotAddTwoRoutesSameName() throws Exception {
		Route routeFirstTime = new Route(null, "Copenhage", "uri:CopenhageFirstTime", "username1", "password1");
		Route routeSecondTime = new Route(null, "Copenhage", "uri:CopenhageSecondTime", "username1", "password1");
		assertNull(routeFirstTime.getId());
		Route routeAddedFirstTime = routeService.addRoute(routeFirstTime);
		assertNotNull(routeAddedFirstTime.getId());

		assertNull(routeSecondTime.getId());
		Route routeAddedSecondTime = routeService.addRoute(routeSecondTime);
		assertNull(routeAddedSecondTime);
	}

	@Test
	public void doNotAddTwoRoutesSameUri() throws Exception {
		Route routeFirstTime = new Route(null, "CopenhageFirstTime", "uri:Copenhage", "username1", "password1");
		Route routeSecondTime = new Route(null, "CopenhageSecondTime", "uri:Copenhage", "username1", "password1");
		assertNull(routeFirstTime.getId());
		Route routeAddedFirstTime = routeService.addRoute(routeFirstTime);
		assertNotNull(routeAddedFirstTime.getId());

		assertNull(routeSecondTime.getId());
		Route routeAddedSecondTime = routeService.addRoute(routeSecondTime);
		assertNull(routeAddedSecondTime);
	}

	@Test
	public void editExistingRoute() throws Exception {
		Route routeBefore = new Route(null, "Madrid", "uri:Madrid", "username", "password");
		Route added = routeService.addRoute(routeBefore);
		String newUri = "uri:MadridEdited";
		Route edited = routeService.editRoute(added.getId(), added.getName(), newUri, added.getUsername(), added.getPassword());
		assertEquals(newUri, edited.getUri());
	}

	@Test
	public void getRouteById() throws Exception {
		Route ny = new Route(null, "New York", "uri", "username", "password");
		Route added = routeService.addRoute(ny);
		Route got = routeService.getRouteById(added.getId());
		assertEquals(added.getId(), got.getId());
	}

	@After
	public void tearDown() throws Exception {
		this.routeMongoRepository.deleteAll();
	}

}