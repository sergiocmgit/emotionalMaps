import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { route } from '../home/home.component'

@Component({
	selector: 'app-confirm-route-delete',
	templateUrl: './confirm-route-delete.component.html',
	styleUrls: ['./confirm-route-delete.component.css']
})
export class ConfirmRouteDeleteComponent {

	public route: route;

	constructor(private bottomsheet: MatBottomSheetRef<ConfirmRouteDeleteComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
		this.route = data.route;
	}

	deleteRoutePermanently(){
		this.bottomsheet.dismiss("deletePermanently");
	}

}
