import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL =  environment.apiUrl + '/users';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	login(username: String, password: String) {
		var body = {
			username: username,
			password: password
		}
		return this.http.post<JSON>(BACKEND_URL + '/login', body);
	}

	logout(id: String) {
		return this.http.get<JSON>(BACKEND_URL + '/route/' + id);
	}

	signUp(username: String, password: String) {

	}
}
