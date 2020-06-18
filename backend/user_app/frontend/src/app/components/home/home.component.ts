import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { segments } from '../../../assets/coordenadas/exportFilteredGeoJson.js';
import { DatabaseAccessService } from '../../services/database-access.service'
import { ActivatedRoute } from '@angular/router';

interface Filter {
	name: string;
	value: string;
	options: option[];
}

interface option {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private map;
	private layerGroup = new L.LayerGroup();
	private filter: string;

	public allFilters: string[] = [
		"morning",
		"spring",
		"male",
		"adult",
		"citizen"
	];

	filters: Filter[] = [
		{
			name: "Time section", value: "time", options: [
				{ value: "morning", viewValue: "6:00h - 13:00h" },
				{ value: "afternoon", viewValue: "13:00h - 21:00h" },
				{ value: "night", viewValue: "21:00h - 6:00h" }
			]
		},
		{
			name: "Season", value: "season", options: [
				{ value: "spring", viewValue: "Spring" },
				{ value: "summer", viewValue: "Summer" },
				{ value: "autumn", viewValue: "Autumn" },
				{ value: "winter", viewValue: "Winter" }
			]
		},
		{
			name: "Gender", value: "gender", options: [
				{ value: "male", viewValue: "Male" },
				{ value: "female", viewValue: "Female" },
				{ value: "othergender", viewValue: "Other" }
			]
		},
		{
			name: "Age range", value: "age", options: [
				{ value: "child", viewValue: "0 - 18" },
				{ value: "adult", viewValue: "18 - 65" },
				{ value: "old", viewValue: "Greater than 65" }
			]
		},
		{
			name: "User type", value: "type", options: [
				{ value: "citizen", viewValue: "Citizen" },
				{ value: "tourist", viewValue: "Tourist" }
			]
		}
	]

	constructor(private dbService: DatabaseAccessService) { }

	ngOnInit() {
		this.map = L.map("map").setView([41.649914, -0.877733], 13);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);
		this.refreshMap();
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
			/* weight: 12, */
			weight: 4,
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

	// Removes the painted layer
	removeLayers(): void {
		this.map.removeLayer(this.layerGroup);
		this.layerGroup = new L.LayerGroup();;
	}

	// Removes the painted layer and paints the new one
	refreshMap(): void {
		this.removeLayers();
		this.filter = this.allFilters[0];
		for (var i = 1; i < 5; i++) {
			this.filter += "." + this.allFilters[i];
		}
		this.buildSegments();
	}

	//Given a segment, is painted in the map
	paintSegment(segment, emotion: number) {
		L.geoJSON(segment, { style: this.style(emotion) })
			.addTo(this.layerGroup);
	}

	//Paints in the map the segments which are related to a emotion
	buildSegments() {
		this.dbService.getEmotionsFiltered(this.filter)
			.subscribe(res => {
				res['data'].forEach(segment => {
					var mostRepeated: number = 0;
					for (var j = 0; j < 5; j++) {
						if (segment.emotions[mostRepeated] < segment.emotions[j]) {
							mostRepeated = j;
						}
					}
					var emotion: number = mostRepeated + 1;
					this.dbService.getSegmentByWay(segment._id)
						.subscribe(res => {
							this.paintSegment(res['coordinates'], emotion);
						},
							err => {
								console.log("Error at getSegmentByWay")
							})
				});
				this.layerGroup.addTo(this.map);
			},
				err => {
					console.log("Error at getAllEmotions")
				});
	}
}
