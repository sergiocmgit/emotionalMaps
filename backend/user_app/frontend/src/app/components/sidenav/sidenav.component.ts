import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

interface Filter {
	name: string;
	value: string;
	options: opcion[];
}

interface opcion {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

	filters: Filter[] = [
		{
			name: "Gender", value: "gender", options: [
				{ value: "M", viewValue: "Male" },
				{ value: "F", viewValue: "Female" },
				{ value: "O", viewValue: "Other" }
			]
		},
		{
			name: "User type", value: "type", options: [
				{ value: "C", viewValue: "Citizen" },
				{ value: "T", viewValue: "Tourist" }
			]
		},
		{
			name: "Age range", value: "age", options: [
				{ value: "18-25", viewValue: "18 - 25" },
				{ value: "25-35", viewValue: "25 - 35" },
				{ value: "35-45", viewValue: "35 - 45" },
				{ value: "45-55", viewValue: "45 - 55" },
				{ value: "55-65", viewValue: "55 - 65" },
				{ value: "65-75", viewValue: "65 - 75" },
				{ value: "gt75", viewValue: "Greater than 75" }
			]
		},
		{
			name: "Month", value: "month", options: [
				{ value: "1", viewValue: "January" },
				{ value: "2", viewValue: "February" },
				{ value: "3", viewValue: "March" },
				{ value: "4", viewValue: "April" },
				{ value: "5", viewValue: "May" },
				{ value: "6", viewValue: "June" },
				{ value: "7", viewValue: "July" },
				{ value: "8", viewValue: "August" },
				{ value: "9", viewValue: "September" },
				{ value: "10", viewValue: "October" },
				{ value: "11", viewValue: "November" },
				{ value: "12", viewValue: "Dicember" }
			]
		},
		{
			name: "Season", value: "season", options: [
				{ value: "1", viewValue: "Spring" },
				{ value: "2", viewValue: "Summer" },
				{ value: "3", viewValue: "Autumn" },
				{ value: "4", viewValue: "Winter" }
			]
		},
		{
			name: "Time section", value: "time", options: [
				{ value: "1", viewValue: "2:00h - 6:00h" },
				{ value: "2", viewValue: "6:00h - 10:00h" },
				{ value: "3", viewValue: "10:00h - 14:00h" },
				{ value: "4", viewValue: "14:00h - 18:00h" },
				{ value: "5", viewValue: "18:00h - 22:00h" },
				{ value: "6", viewValue: "22:00h - 2:00h" }
			]
		}
	]

	mobileQuery: MediaQueryList;

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	shouldRun = true;

}
