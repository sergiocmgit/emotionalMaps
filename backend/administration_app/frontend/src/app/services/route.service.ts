import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '/routes';

@Injectable({
	providedIn: 'root'
})
export class RouteService {

	constructor(private http: HttpClient) { }

	getAllRoutes(){
		return this.http.get<JSON>(BACKEND_URL + '/allroutes');
	}

	getRoute(id: String){
		return this.http.get<JSON>(BACKEND_URL + '/route/' + id);
	}

	addRoute(name: String, uri: String, username: String, password: String){
		var body = {
			name: name,
			uri: uri,
			username: username,
			password: password
		}
		return this.http.post<JSON>(BACKEND_URL + '/route', body);
	}

	editRoute(id: String, name: String, uri: String, username: String, password: String){
		var body = {
			name: name,
			uri: uri,
			username: username,
			password: password
		}
		return this.http.put<JSON>(BACKEND_URL + '/route/' + id, body);
	}

	deleteRoute(id: String){
		return this.http.delete<JSON>(BACKEND_URL + '/route/' + id);
	}

	checkReachability(id: String){
		return this.http.get<boolean>(BACKEND_URL + "/reachability/" + id);
	}
}
