
import java.io.*;
import java.net.*;
import java.time.LocalDate;
import java.io.File;

public class OSMdownloader {

	private String baseURL = "https://overpass-api.de/api/map?data=[out:json];";
	private String statusURL = "https://overpass-api.de/api/status";

	// Returns your IP status for Overpass API
	public String checkStatus() throws Exception {
		String auxString = httpGET(this.statusURL).replaceAll("(?<!^)([CR])", "\n$1");
		auxString = auxString.replaceAll("(?<!^)([0-9] slots)", "\n$1");
		return auxString;
	}

	// Writes into a json file the ways found inside the bounding box defined by the
	// doubles given
	public void downloadWays(double left, double bottom, double right, double top) throws Exception {
		StringBuilder address = new StringBuilder();
		address.append(this.baseURL);
		address.append("way(");
		address.append(bottom + "," + left + "," + top + "," + right);
		address.append(");out;");
		String json = httpGET(address.toString());
		try {
			File jsonFile = new File("ways-" + LocalDate.now() + ".json");
			if (jsonFile.createNewFile()) {
				System.out.println("File created: " + jsonFile.getName());
			} else {
				System.out.println("File already exists.");
			}
			FileWriter myWriter = new FileWriter(jsonFile.getName());
			myWriter.write(json);
			myWriter.close();
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}

	// Does a http get to the given url
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

	public static void main(String[] args) throws Exception {
		OSMdownloader osm = new OSMdownloader();
		System.out.println("-----------------");
		System.out.println(osm.checkStatus());
		System.out.println("-----------------");
		osm.downloadWays(-0.9603, 41.6034, -0.7934, 41.6960);
		System.out.println("-----------------");
		System.out.println(osm.checkStatus());
		System.out.println("-----------------");
	}
}