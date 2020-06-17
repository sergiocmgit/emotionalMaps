const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/emotionsMap'
var config = require('../models/db');
const Emotion = mongoose.model('Emotion');
const Segment = mongoose.model('Segment');

const dbName = "emotionsMap";

const getAllEmotions = function (req, res) {
	Emotion
		.find()
		.exec((err, emotions) => {
			if (!emotions) {
				res
					.status(404)
					.json({
						"message": "emotions not found"
					});
				return;
			} else if (err) {
				res
					.status(404)
					.json(err);
				return;
			}
			res
				.status(200)
				.json({ data: emotions });
		});
}

const getSegmentByWay = function (req, res) {
	var way = req.params.way;
	Segment
		.findOne({ _id: way })
		.exec((err, segment) => {
			if (!segment) {
				res
					.status(404)
					.json({
						"message": "segment not found"
					});
				return;
			} else if (err) {
				res
					.status(404)
					.json(err);
				return;
			}
			res
				.status(200)
				.json(segment);
		});
}

const getEmotionsFiltered = function (req, res) {
	MongoClient.connect('mongodb://localhost', function (err, client) {
		if (err) throw err;

		var db = client.db(dbName);
		db.collection(req.params.filter).find().toArray(function (err, documents) {
			console.log(documents)
			res
				.status(200)
				.json({ data: documents });
		});
	});
}

module.exports = {
	getAllEmotions,
	getSegmentByWay,
	getEmotionsFiltered
}