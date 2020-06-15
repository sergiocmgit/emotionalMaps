import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'frontend';

	constructor(private router: Router){}

	goSchedulerPage(){
		this.router.navigate(['/scheduler']);
	}

	goRoutesPage(){
		this.router.navigate(['/home']);
	}

	goLoginPage(){
		this.router.navigate(['/login']);
	}
}
