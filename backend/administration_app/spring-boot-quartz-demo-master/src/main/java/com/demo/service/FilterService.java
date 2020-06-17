package com.demo.service;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import org.bson.Document;
import org.springframework.stereotype.Service;

@Service
public class FilterService {

	/*
	 * Drops all the collections that filter the emotions by hour, season, gender,
	 * age and type.
	 */
	public static void deleteCollections() {
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase database = mongoClient.getDatabase("emotionsMap");
		String collectionName, age, gender, season, hour, type;

		for (int i = 0; i < 3; i++) {
			switch (i) {
				case 0:
					hour = "morning";
					break;
				case 1:
					hour = "afternoon";
					break;
				default:
					hour = "night";
					break;
			}
			for (int j = 0; j < 4; j++) {
				switch (j) {
					case 0:
						season = ".spring";
						break;
					case 1:
						season = ".summer";
						break;
					case 2:
						season = ".autumn";
						break;
					default:
						season = ".winter";
						break;
				}
				for (int k = 0; k < 3; k++) {
					switch (k) {
						case 0:
							gender = ".male";
							break;
						case 1:
							gender = ".female";
							break;
						default:
							gender = ".othergender";
							break;
					}
					for (int l = 0; l < 3; l++) {
						switch (l) {
							case 0:
								age = ".child";
								break;
							case 1:
								age = ".adult";
								break;
							default:
								age = ".old";
								break;
						}
						for (int m = 0; m < 2; m++) {
							switch (m) {
								case 0:
									type = ".citizen";
									break;
								default:
									type = ".tourist";
									break;
							}
							collectionName = hour + season + gender + age + type;
							MongoCollection<Document> collection = database.getCollection(collectionName);
							collection.drop();
						}
					}
				}
			}
		}

		mongoClient.close();

	}
}