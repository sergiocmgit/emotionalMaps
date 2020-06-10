const mongoose = require('mongoose');

const emotion = new mongoose.Schema({
	id: {
		type: String,
		//required: true
	},
	age: {
		type: Number
	},
	emotion: {
		type: Number
	},
	gender: {
		type: String
	},
	point1: {
		lat: {
			type: mongoose.Decimal128
		},
		lng: {
			type: mongoose.Decimal128
		}
	},
	point2: {
		lat: {
			type: mongoose.Decimal128
		},
		lng: {
			type: mongoose.Decimal128
		}
	},
	segment: {
		type: String
	},
	time1: {
		type: Date
	},
	time2: {
		type: Date
	},
	type: {
		type: String
	}
});


mongoose.model('Emotion', emotion);