import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

	thereIsToken: boolean;

	constructor(private router: Router,
		private userService: UserService) {
		if (localStorage.getItem('token') != null) {
			this.thereIsToken = true;
		}
		else {
			this.thereIsToken = false;
		}
	}

	goSchedulerPage() {
		this.router.navigate(['/scheduler']);
	}

	goRoutesPage() {
		this.router.navigate(['/home']);
	}

	logout(): void {
		localStorage.removeItem('token');
		this.router.navigate(['/login']);
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
