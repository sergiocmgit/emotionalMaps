import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmRouteDeleteComponent } from './components/confirm-route-delete/confirm-route-delete.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AddRouteComponent } from './components/add-route/add-route.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditRouteComponent } from './components/edit-route/edit-route.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'addroute', component: AddRouteComponent },
	{ path: 'editroute/:routeID', component: EditRouteComponent },
	{ path: 'scheduler', component: SchedulerComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ConfirmRouteDeleteComponent,
		AddRouteComponent,
		EditRouteComponent,
		SchedulerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		MatToolbarModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatBottomSheetModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		HttpClientModule,
		HttpModule,
		MatSelectModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
