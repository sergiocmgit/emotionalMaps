import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
	selector: 'app-edit-route',
	templateUrl: './edit-route.component.html',
	styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent {

	routeID: string;

	newRoute: FormGroup = new FormGroup({
		name: new FormControl(),
		uri: new FormControl(),
		username: new FormControl(),
		password: new FormControl()
	});

	isReachable: boolean = false;

	constructor(private location: Location,
		private router: Router,
		private activatedroute: ActivatedRoute,
		private routeService: RouteService) {
		this.activatedroute.paramMap.subscribe(
			params => {
				this.routeID = params.get('routeID');
				this.routeService.getRoute(this.routeID).subscribe(
					res => {
						if (res['statusCode'] == 200) {
							//This will fill the form with the previous route info
							this.newRoute.get('name').setValue(res['data']['name']);
							this.newRoute.get('uri').setValue(res['data']['uri']);
							this.newRoute.get('username').setValue(res['data']['username']);
							this.newRoute.get('password').setValue(res['data']['password']);
						}
						else if (res['statusCode'] == 400) {
							console.error(res);
							alert("It was not possible to load the previous info of the route");
						}
					})
			});
	}

	goBack() {
		this.location.back();
	}

	tryConnection(): void {
		this.routeService.checkReachability(this.routeID).subscribe(res => {
			console.log("Is reachable?---> " + res);
			console.log(this.newRoute.value);

			// The new status of reachability will be calculated here
			var random = Math.random();
			this.isReachable = random < 0.5;
		})
	}

	save(): void {
		this.routeService.editRoute(this.routeID, this.newRoute.value.name, this.newRoute.value.uri, this.newRoute.value.username, this.newRoute.value.password)
			.subscribe(
				res => {
					if (res['statusCode'] == 200) {
						this.router.navigate(['/home']);
					}
					else if (res['statusCode'] == 400) {
						console.error(res);
						alert("It was not possible to edit the route");
					}
				}
			)
	}
}
