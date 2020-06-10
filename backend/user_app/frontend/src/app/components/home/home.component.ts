import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { segments } from '../../../assets/coordenadas/exportFilteredGeoJson.js';
import { DatabaseAccessService } from '../../services/database-access.service'
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private map;

	constructor(private dbService: DatabaseAccessService) { }

	ngOnInit() {
		this.map = L.map("map").setView([41.649914, -0.877733], 16);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);

		this.buildSegments();
	}

	//Returns the segment style
	style() {
		return {
			weight: 12,
			/* weight: 2, */
			opacity: 5,
			color: 'red',
			dashArray: '1',
			fillOpacity: 0
		};
	}

	highlightFeature(e) {
		const layer = e.target;
		layer.setStyle({
			weight: 4,
			opacity: 1.0,
			color: 'blue',
			fillOpacity: 0.6,
			fillColor: '#F0FFFF'
		});

	}

	resetHighlight(e) {
		const layer = e.target;
		layer.setStyle({
			weight: 2,
			opacity: 5,
			color: 'black',
			dashArray: '1',
			fillOpacity: 0.1
		});
	}

	zoomToFeature(e) {
		this.map.fitBounds(e.target.getBounds());
	}

	onEachSegment(feature, layer) {
		//console.log(feature);
		if (feature.properties.way > 1) {
			layer.setStyle({
				color: 'blue'
			})
		}
		layer.on({
			mouseover: (e) => (this.highlightFeature(e)),
			mouseout: (e) => (this.resetHighlight(e))
		})
	}

	//Transforms a json segment into a geojson segment
	toGeoJson(segment) {
		var geojson = {};
		geojson['properties'] = segment;
		geojson['type'] = "Feature";
		geojson['geometry'] = {
			"type": "LineString",
			"coordinates": segment['segment']['coordinates']
		}

		return geojson;
	}

	//Given a segment, is painted in the map
	paintSegment(segment) {
		/* L.geoJSON(this.toGeoJson(segment), { style: this.style() })
			.addTo(this.map); */
		L.geoJSON(segment, { style: this.style() })
			.addTo(this.map);
	}

	//Paints in the map the segments which are related to a emotion
	buildSegments() {
		this.dbService.getAllEmotions()
			.subscribe(res => {
				for (let emotion of res['data']) {
					console.log(emotion);
					this.dbService.getSegmentByWay(emotion.segment)
						.subscribe(res => {
							console.log(res);
							this.paintSegment(res['coordinates']);
						},
							err => {
								console.log("Error at getSegmentByWay")
							})
				}
			},
				err => {
					console.log("Error at getAllEmotions")
				});
	}
}
