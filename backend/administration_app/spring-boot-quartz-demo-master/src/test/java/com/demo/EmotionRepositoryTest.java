package com.demo;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

import com.demo.entity.Emotion;
import com.demo.entity.Position;
import com.demo.entity.Segment;
import com.demo.repository.EmotionRepository;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import static com.mongodb.client.model.Filters.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmotionRepositoryTest {

	@Autowired
	private EmotionRepository emotionRepository;

	@Test
	public void getAll() {
		int i = 0;
		Iterable<Emotion> all = emotionRepository.findAll();
		for (Emotion m : all) {
			System.out.println(m.toString());
			i++;
		}
		assertEquals(5, i);
	}

	@Test
	public void insertOnMongo() {
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase database = mongoClient.getDatabase("emotionsMap");
		assertNotNull(database);
		/* database.createCollection("pruebasFiltros"); */
		MongoCollection<Document> collection = database.getCollection("pruebasFiltrosSegundPrueba");

		Document document = new Document();
		document.put("_id", "2376582453_6473466_54864356");
		document.put("emotion1", 3);
		document.put("emotion2", 0);
		document.put("emotion3", 4);
		document.put("emotion4", 7);
		document.put("emotion5", 38);
		collection.insertOne(document);

		Document myDoc = collection.find(eq("_id", "2376582453_6473466_54864356")).first();

		assertEquals(myDoc.get("emotion4"), 7);

		myDoc.replace("emotion4", 8);
		collection.findOneAndReplace(eq("_id", "2376582453_6473466_54864356"), myDoc);

		myDoc = collection.find(eq("_id", "2376582453_6473466_54864356")).first();
		assertEquals(myDoc.get("emotion4"), 8);

		collection.deleteOne(eq("_id", "2376582453_6473466_54864356"));

		mongoClient.close();
	}

	@Test
	public void deleteCollections() {
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase database = mongoClient.getDatabase("emotionsMap");
		assertNotNull(database);
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