import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const BACKEND_URL = environment.apiUrl + '/users';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient,
		private router: Router) { }

	login(username: String, password: String) {
		var body = {
			username: username,
			password: password
		}
		return this.http.post<JSON>(BACKEND_URL + '/login', body);
	}

	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['login']);
	}
}
