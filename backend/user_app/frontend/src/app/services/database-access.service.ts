import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const apiURL = 'http://localhost:3000';

@Injectable({
	providedIn: 'root'
})
export class DatabaseAccessService {

	private emotions;

	constructor(private http: HttpClient) { }

	getAllEmotions() {
		return this.http.get(apiURL + '/getAllEmotions', { responseType: 'json' });
	}

	getSegmentByWay(way) {
		return this.http.get(apiURL + '/getSegmentByWay/' + way, { responseType: 'json' });
	}

	getEmotionsFiltered(filter: String) {
		return this.http.get(apiURL + '/getEmotionsFiltered/' + filter, { responseType: 'json' });
	}
}
