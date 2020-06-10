const mongoose = require('mongoose');
var config = require('../models/db');
const Emotion = mongoose.model('Emotion');
const Segment = mongoose.model('Segment');

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
			/* console.log(emotions) */
			res
				.status(200)
				.json({ data: emotions });
		});
	/* console.log("EMOTIONS SENDED") */
}

const getSegmentByWay = function (req, res) {
	var way = req.params.way;
	Segment
		.findOne({_id: way})
		.exec((err, segment) => {
			/* console.log(segment) */
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
	/* console.log("SEGMENT SENDED") */
}

module.exports = {
	getAllEmotions,
	getSegmentByWay
}