import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';

const appRoutes: Routes = [
	{
		path: '', component: SidenavComponent, children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home/:filter', component: HomeComponent },
			{ path: 'home', component: HomeComponent },
		]
	},
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SidenavComponent,
		MapComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false }	// <-- debugging purposes only
		),
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatSelectModule,
		MatFormFieldModule,
		FormsModule,
        ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
