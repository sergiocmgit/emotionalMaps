import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ConfirmRouteDeleteComponent } from '../confirm-route-delete/confirm-route-delete.component'
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

export interface route {
	id: string,
	name: string,
	uri: string,
	username: string,
	password: string,
	status: boolean
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	routes: route[] = [];

	constructor(private confirmRouteDelete: MatBottomSheet,
		private router: Router,
		private routeService: RouteService) {
		this.refreshRoutes();
	}

	/* Asks to backend for the routes saved */
	refreshRoutes(): void {
		this.routes = [];
		this.routeService.getAllRoutes().subscribe(res => {
			for (let r of res['data']) {
				this.routes.push({
					id: r['id'],
					name: r['name'],
					uri: r['uri'],
					username: r['username'],
					password: r['password'],
					status: false
				});
				this.routeIsReachable(r);
			}
		})
	}

	/*
	Attempts to reach de uri of the route.
	In case of success the array "routes" is updated and returns true.
	Otherwise, the array "routes" is updated and returns false.
	 */
	routeIsReachable(route): void {
		this.routeService.checkReachability(route.id).subscribe(res => {
			var index = this.routes.findIndex(r => r.id == route.id);
			if (index != -1) {
				this.routes[index].status = res;
			}
		})
	}

	/* 
	Opens a bottom sheet where the user confirms the delete.
	If the user confirms the route is deleted from the array "routes"
	 */
	deleteRoute(route): void {
		this.confirmRouteDelete.open(ConfirmRouteDeleteComponent, { data: { route: route } });
		this.confirmRouteDelete._openedBottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
			if (dataFromChild == "deletePermanently") {
				this.routeService.deleteRoute(route.id).subscribe(
					res => {
						if (res['data']) {
							this.refreshRoutes()
						}
						else {
							alert("It was not possible to delete the route");
						}
					})
			}
		})
	}

	/* Navigates to Edit Route with the info of the route */
	goEditRoute(route): void {
		this.router.navigate(['/editroute/' + route.id])
	}

	/* Navigates to Add Route page */
	goAddRoute() {
		this.router.navigate(['/addroute']);
	}

	/* Navigates to Scheduler page */
	goScheduler() {
		this.router.navigate(['/scheduler']);
	}
}
