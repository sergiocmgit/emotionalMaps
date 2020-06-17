import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { segments } from '../../../assets/coordenadas/exportFilteredGeoJson.js';
import { DatabaseAccessService } from '../../services/database-access.service'
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private map;
	private layerGroup = new L.LayerGroup();
	private filter: String;

	constructor(private dbService: DatabaseAccessService,
		private activatedroute: ActivatedRoute) {
		console.log("CONSTRUCTOR")
		this.activatedroute.paramMap.subscribe(params => {
			this.filter = params.get('filter');
			/* console.log(this.map); */
			/* this.map.removeLayer(this.layerGroup); */
			/* this.buildSegments(); */
		});

	}

	ngOnInit() {
		console.log("NG ON INIT")
		this.map = L.map("map").setView([41.649914, -0.877733], 13);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);
		this.buildSegments();
	}

	//Returns the segment style
	style(emotion: number) {
		var color;
		switch (emotion) {
			case 1:
				color = 'yellow';
				break;
			case 2:
				color = 'purple';
				break;
			case 3:
				color = 'white';
				break;
			case 4:
				color = 'green';
				break;
			case 5:
				color = 'blue'
				break;
			default:
				color = 'red'
				break;
		}
		return {
			weight: 12,
			/* weight: 2, */
			opacity: 5,
			color: color,
			dashArray: '1',
			fillOpacity: 0
		};
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
	paintSegment(segment, emotion: number) {
		/* L.geoJSON(this.toGeoJson(segment), { style: this.style() })
			.addTo(this.map); */
		L.geoJSON(segment, { style: this.style(emotion) })
			.addTo(this.map);
	}

	//Paints in the map the segments which are related to a emotion
	buildSegmentsOld() {
		this.dbService.getAllEmotions()
			.subscribe(res => {
				for (let emotion of res['data']) {
					console.log(emotion);
					this.dbService.getSegmentByWay(emotion.segment)
						.subscribe(res => {
							console.log(res);
							this.paintSegment(res['coordinates'], -1);
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

	//Paints in the map the segments which are related to a emotion
	buildSegments() {
		this.dbService.getEmotionsFiltered(this.filter)
			.subscribe(res => {
				res['data'].forEach(segment => {
					/* console.log(segment); */
					var mostRepeated: number = 0;
					for (var j = 0; j < 5; j++) {
						/* console.log(segment) */
						if (segment.emotions[mostRepeated] < segment.emotions[j]) {
							mostRepeated = j;
						}
					}
					var emotion: number = mostRepeated + 1;
					this.dbService.getSegmentByWay(segment._id)
						.subscribe(res => {
							//console.log(res);
							this.paintSegment(res['coordinates'], emotion);
						},
							err => {
								console.log("Error at getSegmentByWay")
							})
				});
			},
				err => {
					console.log("Error at getAllEmotions")
				});
	}
}
