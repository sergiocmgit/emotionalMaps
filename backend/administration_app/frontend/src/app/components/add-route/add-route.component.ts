import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
	selector: 'app-add-route',
	templateUrl: './add-route.component.html',
	styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent {

	newRoute: FormGroup = new FormGroup({
		name: new FormControl(),
		uri: new FormControl(),
		username: new FormControl(),
		password: new FormControl()
	});

	isReachable: boolean = false;

	constructor(private location: Location,
		private router: Router,
		private routeService: RouteService) { }

	goBack() {
		this.location.back();
	}

	tryConnection(): void {
		this.routeService.checkReachability("idHARDCODED").subscribe(res => {
			console.log("Is reachable?---> " + res);
			console.log(this.newRoute.value);

			// The new status of reachability will be calculated here
			var random = Math.random();
			this.isReachable = random < 0.5;
		})
	}

	save(): void {
		this.routeService.addRoute(
			this.newRoute.value.name,
			this.newRoute.value.uri,
			this.newRoute.value.username,
			this.newRoute.value.password
		).subscribe(
			res => {
				if (res['statusCode'] == 201) {
					this.router.navigate(['/home']);
				}
				else if (res['statusCode'] == 400) {
					console.error(res);
					alert("It was not possible to save the route");
				}
			})
	}

}
