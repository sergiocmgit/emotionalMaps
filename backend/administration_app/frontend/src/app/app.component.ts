import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'frontend';

	constructor(private router: Router,
		private userService: UserService) { }

	goSchedulerPage() {
		this.router.navigate(['/scheduler']);
	}

	goRoutesPage() {
		this.router.navigate(['/home']);
	}

	goProfilePage() {
		if (localStorage.getItem('token') != null) {
			this.router.navigate(['/profile']);
		}
		else {
			this.router.navigate(['/login']);
		}
	}
}
