const mongoose = require('mongoose');

const lineStringSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['LineString'],
		required: true
	},
	coordinates: {
		type: [[Number]], // Array of arrays of numbers
		required: true
	}
});

const segment = new mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	way_id: {
		type: Number,
		required: true
	},
	node1_id: {
		type: Number,
		required: true
	},
	node2_id: {
		type: Number,
		required: true
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
	coordinates: {
		type: lineStringSchema,
		required: true
	},
	lastFetch: {
		type: Date
	}
});


mongoose.model('Segment', segment);