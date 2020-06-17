import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

interface Filter {
	name: string;
	value: string;
	options: option[];
}

interface option {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

	public time = "morning";
	public season = "spring";
	public gender = "male";
	public age = "adult";
	public type = "citizen";

	filters: Filter[] = [
		{
			name: "Time section", value: "time", options: [
				{ value: "morning", viewValue: "6:00h - 13:00h" },
				{ value: "afternoon", viewValue: "13:00h - 21:00h" },
				{ value: "night", viewValue: "21:00h - 6:00h" }
			]
		},
		{
			name: "Season", value: "season", options: [
				{ value: "spring", viewValue: "Spring" },
				{ value: "summer", viewValue: "Summer" },
				{ value: "autumn", viewValue: "Autumn" },
				{ value: "winter", viewValue: "Winter" }
			]
		},
		{
			name: "Gender", value: "gender", options: [
				{ value: "male", viewValue: "Male" },
				{ value: "female", viewValue: "Female" },
				{ value: "othergender", viewValue: "Other" }
			]
		},
		{
			name: "Age range", value: "age", options: [
				{ value: "child", viewValue: "0 - 18" },
				{ value: "adult", viewValue: "18 - 65" },
				{ value: "old", viewValue: "Greater than 65" }
			]
		},
		{
			name: "User type", value: "type", options: [
				{ value: "citizen", viewValue: "Citizen" },
				{ value: "tourist", viewValue: "Tourist" }
			]
		}
		/* {
			name: "Age range", value: "age", options: [
				{ value: "18-25", viewValue: "18 - 25" },
				{ value: "25-35", viewValue: "25 - 35" },
				{ value: "35-45", viewValue: "35 - 45" },
				{ value: "45-55", viewValue: "45 - 55" },
				{ value: "55-65", viewValue: "55 - 65" },
				{ value: "65-75", viewValue: "65 - 75" },
				{ value: "gt75", viewValue: "Greater than 75" }
			]
		}, */
		/* {
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
		}, */

	]

	mobileQuery: MediaQueryList;

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
		private router: Router) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	filter(): String {
		var filter: String = this.time + '.' + this.season + '.' + this.gender + '.' + this.age + '.' + this.type;
		/* this.router.navigate(['/home/' + filter]); */
		window.location.href = "http://localhost:4200/home/" + filter;
		return filter;
	}

	shouldRun = true;

}
