package com.demo.service;

import java.io.*;
import java.net.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

import com.demo.entity.Position;
import com.demo.entity.Segment;
import com.demo.repository.SegmentRepository;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class OSMdownloader {

	// private String baseURL = "https://overpass-api.de/api/map?data=[out:json];";
	private String statusURL = "https://overpass-api.de/api/status";

	private String xapiURL = "http://www.overpass-api.de/api/xapi";
	private String osmWayURL = "https://api.openstreetmap.org/api/0.6/way";

	// Repository for the segments to be saved
	private SegmentRepository segmentRepository;

	public OSMdownloader(SegmentRepository segmentRepository) {
		this.segmentRepository = segmentRepository;
	}

	// Returns your IP status for Overpass API
	public String checkStatus() throws Exception {
		String auxString = httpGET(this.statusURL).replaceAll("(?<!^)([CR])", "\n$1");
		auxString = auxString.replaceAll("(?<!^)([0-9] slots)", "\n$1");
		return auxString;
	}

	/*
	 * Given the coordinates of a bounding box, it downloads the ways from the
	 * extended api, reads the ids from the xml file, downloads every way from the
	 * general api and uploads the needed info on the database
	 */
	public boolean downloadWays(double bottom, double top, double left, double right) throws Exception {
		double startTime = System.nanoTime();
		if (downloadWaysXAPI(bottom, top, left, right)) {
			/* if (true) { */
			try {
				FileWriter myFile = new FileWriter("provisional.txt");
				myFile.write(bottom + ", " + top + ", " + left + ", " + right + '\n');

				readWaysXML(myFile);
				downloadWaysOSM(myFile);

				double elapsedTime = System.nanoTime() - startTime;
				System.out.println("Total execution time in milis: " + elapsedTime / 1000000);
				myFile.write("Total execution time in milis: " + elapsedTime / 1000000);
				myFile.close();
				return true;
			} catch (IOException e) {
				System.out.println("An error occurred.");
				e.printStackTrace();
				return false;
			}
		}
		return false;
	}

	/*
	 * Returns true if the download is completed nad written succesfully. Otherwise
	 * returns false
	 */
	public boolean downloadWaysXAPI(double bottom, double top, double left, double right) throws Exception {
		StringBuilder address = new StringBuilder();
		address.append(this.xapiURL);
		address.append("?way[bbox=");
		address.append(bottom + "," + left + "," + top + "," + right);
		address.append("]");
		String json = httpGET(address.toString());
		try {
			String dirName = "ways_xapi";
			File dir = new File(dirName);
			if (!dir.exists()) {
				dir.mkdirs();
			}
			File xmlFile = new File(dir.getName() + "/ways-" + LocalDate.now() + ".xml");
			if (xmlFile.createNewFile()) {
				System.out.println("File created: " + xmlFile.getPath());
			} else {
				System.out.println("File already exists.");
			}
			FileWriter myWriter = new FileWriter(xmlFile.getPath());
			myWriter.write(json);
			myWriter.close();
			return true;
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
			return false;
		}
	}

	/* Reads the xml file and writes down into a txt file only the way ids */
	public static void readWaysXML(FileWriter myFile) {
		try {
			String nameXmlFile = "ways_xapi/ways-" + LocalDate.now() + ".xml";
			String nameTxtFile = "ways_xapi/ways-" + LocalDate.now() + ".txt";
			FileWriter txtFile = new FileWriter(nameTxtFile);

			XmlHandler xmlHandler = new XmlHandler(nameXmlFile);
			xmlHandler.parseWays(txtFile);

			txtFile.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/*
	 * Reads the way ids from the file and downloads their info from Open Street Map
	 * and saves it in the database
	 */
	public boolean downloadWaysOSM(FileWriter myFile) throws Exception {
		File file = new File("ways_xapi/ways-" + LocalDate.now() + ".txt");
		BufferedReader reader = new BufferedReader(new FileReader(file));
		String word;
		ArrayList<String> ways = new ArrayList<String>();
		while ((word = reader.readLine()) != null) {
			/* System.out.println(word); */
			ways.add(word);
		}

		int numWways = 0;
		int numNodes = 0;

		StringBuilder address = new StringBuilder();
		for (String way : ways) {
			address.setLength(0);
			address.append(this.osmWayURL);
			address.append("/");
			address.append(way);
			address.append("/full.json");

			String jsonString = httpGET(address.toString());
			/* System.out.println(jsonString); */

			JSONObject json = new JSONObject(jsonString);
			/* System.out.println(json.getJSONArray("elements")); */
			numWways++;
			numNodes += json.getJSONArray("elements").length() - 1;
			saveWayOnDatabase(json);
		}

		myFile.write(numWways + " ways\n");
		myFile.write(numNodes + " nodes\n");

		reader.close();
		return false;
	}

	public void saveWayOnDatabase(JSONObject json) {
		/* System.out.println("------------"); */
		JSONObject element;
		int length = json.getJSONArray("elements").length();

		// Get the way detailed info
		element = json.getJSONArray("elements").getJSONObject(length - 1);
		/* System.out.println(element); */

		// Save into the database
		int way_id = element.getInt("id");
		Date date = new Date();
		int node1_id, node2_id;
		double lng, lat;
		Position pos1, pos2;
		for (int i = 0; i < json.getJSONArray("elements").length() - 2; i++) {
			node1_id = json.getJSONArray("elements").getJSONObject(i).getInt("id");
			lng = json.getJSONArray("elements").getJSONObject(i).getDouble("lon");
			lat = json.getJSONArray("elements").getJSONObject(i).getDouble("lat");
			pos1 = new Position(lng, lat);

			node2_id = json.getJSONArray("elements").getJSONObject(i + 1).getInt("id");
			lng = json.getJSONArray("elements").getJSONObject(i + 1).getDouble("lon");
			lat = json.getJSONArray("elements").getJSONObject(i + 1).getDouble("lat");
			pos2 = new Position(lng, lat);

			Segment s = new Segment(way_id, node1_id, node2_id, pos1, pos2, date);
			segmentRepository.save(s);
		}
	}

	// Sends an http get to the given url
	public String httpGET(String urlToRead) throws Exception {
		StringBuilder result = new StringBuilder();
		URL url = new URL(urlToRead);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String line;
		while ((line = rd.readLine()) != null) {
			result.append(line);
		}
		rd.close();
		return result.toString();
	}

	/*
	 * public static void main(String[] args) throws Exception { OSMdownloader osm =
	 * new OSMdownloader(); System.out.println("-----------------");
	 * System.out.println(osm.checkStatus());
	 * System.out.println("-----------------"); osm.downloadWays(-1, -0.8, 41.6,
	 * 41.8); System.out.println("-----------------");
	 * System.out.println(osm.checkStatus());
	 * System.out.println("-----------------"); }
	 */
}