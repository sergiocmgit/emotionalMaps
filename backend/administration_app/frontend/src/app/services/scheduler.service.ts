import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL =  environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class SchedulerService {

	getJobsUrl = "/scheduler/jobs";
	scheduleJobUrl = "/scheduler/schedule";
	pauseJobUrl = "/scheduler/pause";
	resumeJobUrl = "/scheduler/resume";
	deleteJobUrl = "/scheduler/delete";
	updateJobUrl = "/scheduler/update";
	isJobWithNamePresentUrl = "/scheduler/checkJobName";
	stopJobUrl = "/scheduler/stop";
	startJobNowUrl = "/scheduler/start";

	private options = new RequestOptions(
		{ headers: new Headers({ 'Content-Type': 'application/json' }) });

	constructor(
		private _http: Http,
		private http: HttpClient) {
	}

	getJobs() {
		return this.http.get<JSON>(BACKEND_URL + this.getJobsUrl);
	}

	scheduleJob(data){
        let params: URLSearchParams = new URLSearchParams();
        for(let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;

        return this._http.get(BACKEND_URL + this.scheduleJobUrl, this.options).pipe(map(res => res.json())); 
    }

	isJobWithNamePresent(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;
		return this._http.get(BACKEND_URL + this.isJobWithNamePresentUrl, this.options).pipe(map(res => res.json()));
	}

	pauseJob(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;
		return this._http.get(BACKEND_URL + this.pauseJobUrl, this.options).pipe(map(res => res.json()));
	}

	resumeJob(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;
		return this._http.get(BACKEND_URL + this.resumeJobUrl, this.options).pipe(map(res => res.json()));
	}

	deleteJob(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;
		return this._http.get(BACKEND_URL + this.deleteJobUrl, this.options).pipe(map(res => res.json()));
	}

	stopJob(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;
		return this._http.get(BACKEND_URL + this.stopJobUrl, this.options).pipe(map(res => res.json()));
	}

	startJobNow(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;
		return this._http.get(BACKEND_URL + this.startJobNowUrl, this.options).pipe(map(res => res.json()));
	}

	updateJob(data) {
		let params: URLSearchParams = new URLSearchParams();
		for (let key in data) {
			params.set(key, data[key]);
		}
		this.options.search = params;

		return this._http.get(BACKEND_URL + this.updateJobUrl, this.options).pipe(map(res => res.json()));
	}
}