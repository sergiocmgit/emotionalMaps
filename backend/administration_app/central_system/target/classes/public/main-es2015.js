(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _components_confirm_route_delete_confirm_route_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/confirm-route-delete/confirm-route-delete.component */ "./src/app/components/confirm-route-delete/confirm-route-delete.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _components_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-route/add-route.component */ "./src/app/components/add-route/add-route.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-route/edit-route.component */ "./src/app/components/edit-route/edit-route.component.ts");
/* harmony import */ var _components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/scheduler/scheduler.component */ "./src/app/components/scheduler/scheduler.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");



























const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'addroute', component: _components_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_15__["AddRouteComponent"] },
    { path: 'editroute/:routeID', component: _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_19__["EditRouteComponent"] },
    { path: 'scheduler', component: _components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_20__["SchedulerComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_confirm_route_delete_confirm_route_delete_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmRouteDeleteComponent"],
        _components_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_15__["AddRouteComponent"],
        _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_19__["EditRouteComponent"],
        _components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_20__["SchedulerComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__["ToolbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_confirm_route_delete_confirm_route_delete_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmRouteDeleteComponent"],
                    _components_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_15__["AddRouteComponent"],
                    _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_19__["EditRouteComponent"],
                    _components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_20__["SchedulerComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__["ToolbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-route/add-route.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-route/add-route.component.ts ***!
  \*************************************************************/
/*! exports provided: AddRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteComponent", function() { return AddRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












class AddRouteComponent {
    constructor(location, router, routeService) {
        this.location = location;
        this.router = router;
        this.routeService = routeService;
        this.newRoute = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            uri: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.isReachable = false;
    }
    goBack() {
        this.location.back();
    }
    tryConnection() {
        this.routeService.checkReachability("idHARDCODED").subscribe(res => {
            console.log("Is reachable?---> " + res);
            console.log(this.newRoute.value);
            // The new status of reachability will be calculated here
            var random = Math.random();
            this.isReachable = random < 0.5;
        });
    }
    save() {
        this.routeService.addRoute(this.newRoute.value.name, this.newRoute.value.uri, this.newRoute.value.username, this.newRoute.value.password).subscribe(res => {
            if (res['statusCode'] == 201) {
                this.router.navigate(['/home']);
            }
            else if (res['statusCode'] == 400) {
                console.error(res);
                alert("It was not possible to save the route");
            }
        });
    }
}
AddRouteComponent.ɵfac = function AddRouteComponent_Factory(t) { return new (t || AddRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"])); };
AddRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRouteComponent, selectors: [["app-add-route"]], decls: 30, vars: 1, consts: [["mat-icon-button", "", 1, "goBack", 3, "click"], [1, "general"], [1, "addRoute"], [3, "formGroup"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "name"], ["appearance", "legacy", "id", "uri"], ["matInput", "", "type", "text", "formControlName", "uri"], ["appearance", "legacy", "id", "username"], ["matInput", "", "type", "text", "formControlName", "username"], ["appearance", "legacy", "id", "password"], ["matInput", "", "type", "text", "formControlName", "password"], [1, "controls"], ["mat-raised-button", "", "id", "save", 3, "click"]], template: function AddRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRouteComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add a new route ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "uri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRouteComponent_Template_button_click_28_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newRoute);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["div.general[_ngcontent-%COMP%] {\r\n\tmargin-top: 1em;\r\n\tmargin-left: 2em;\r\n}\r\n\r\nh2.addRoute[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 1em;\r\n}\r\n\r\ndiv.controls[_ngcontent-%COMP%]{\r\n}\r\n\r\n#tryConnection[_ngcontent-%COMP%], #save[_ngcontent-%COMP%] {\r\n\tmargin-top: 1em;\r\n}\r\n\r\n#reachable[_ngcontent-%COMP%] {\r\n\tcolor: green;\r\n}\r\n\r\n#notReachable[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n}\r\n\r\n#uri[_ngcontent-%COMP%] {\r\n\twidth: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcm91dGUvYWRkLXJvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtcm91dGUvYWRkLXJvdXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZ2VuZXJhbCB7XHJcblx0bWFyZ2luLXRvcDogMWVtO1xyXG5cdG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbmgyLmFkZFJvdXRlIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmRpdi5jb250cm9sc3tcclxufVxyXG5cclxuI3RyeUNvbm5lY3Rpb24sICNzYXZlIHtcclxuXHRtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbiNyZWFjaGFibGUge1xyXG5cdGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI25vdFJlYWNoYWJsZSB7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG5cclxuI3VyaSB7XHJcblx0d2lkdGg6IDgwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-route',
                templateUrl: './add-route.component.html',
                styleUrls: ['./add-route.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/confirm-route-delete/confirm-route-delete.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/confirm-route-delete/confirm-route-delete.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfirmRouteDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRouteDeleteComponent", function() { return ConfirmRouteDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ConfirmRouteDeleteComponent {
    constructor(bottomsheet, data) {
        this.bottomsheet = bottomsheet;
        this.data = data;
        this.route = data.route;
    }
    deleteRoutePermanently() {
        this.bottomsheet.dismiss("deletePermanently");
    }
}
ConfirmRouteDeleteComponent.ɵfac = function ConfirmRouteDeleteComponent_Factory(t) { return new (t || ConfirmRouteDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])); };
ConfirmRouteDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmRouteDeleteComponent, selectors: [["app-confirm-route-delete"]], decls: 8, vars: 1, consts: [[1, "bottomSheet"], ["id", "routeTitle"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ConfirmRouteDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmRouteDeleteComponent_Template_button_click_6_listener() { return ctx.deleteRoutePermanently(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I'm sure I want to delete the database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.route.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["div.bottomSheet[_ngcontent-%COMP%]{\r\n\ttext-align: center;\r\n}\r\n\r\n#routeTitle[_ngcontent-%COMP%] {\r\n\tfont-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtLXJvdXRlLWRlbGV0ZS9jb25maXJtLXJvdXRlLWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtLXJvdXRlLWRlbGV0ZS9jb25maXJtLXJvdXRlLWRlbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJvdHRvbVNoZWV0e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3JvdXRlVGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmRouteDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-route-delete',
                templateUrl: './confirm-route-delete.component.html',
                styleUrls: ['./confirm-route-delete.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-route/edit-route.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-route/edit-route.component.ts ***!
  \***************************************************************/
/*! exports provided: EditRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRouteComponent", function() { return EditRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












class EditRouteComponent {
    constructor(location, router, activatedroute, routeService) {
        this.location = location;
        this.router = router;
        this.activatedroute = activatedroute;
        this.routeService = routeService;
        this.newRoute = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            uri: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.isReachable = false;
        this.activatedroute.paramMap.subscribe(params => {
            this.routeID = params.get('routeID');
            this.routeService.getRoute(this.routeID).subscribe(res => {
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
            });
        });
    }
    goBack() {
        this.location.back();
    }
    tryConnection() {
        this.routeService.checkReachability(this.routeID).subscribe(res => {
            this.isReachable = res;
        });
    }
    save() {
        this.routeService.editRoute(this.routeID, this.newRoute.value.name, this.newRoute.value.uri, this.newRoute.value.username, this.newRoute.value.password)
            .subscribe(res => {
            if (res['statusCode'] == 200) {
                this.router.navigate(['/home']);
            }
            else if (res['statusCode'] == 400) {
                console.error(res);
                alert("It was not possible to edit the route");
            }
        });
    }
}
EditRouteComponent.ɵfac = function EditRouteComponent_Factory(t) { return new (t || EditRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"])); };
EditRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditRouteComponent, selectors: [["app-edit-route"]], decls: 30, vars: 1, consts: [["mat-icon-button", "", 1, "goBack", 3, "click"], [1, "general"], [1, "editRoute"], [3, "formGroup"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "name"], ["appearance", "legacy", "id", "uri"], ["matInput", "", "type", "text", "formControlName", "uri"], ["appearance", "legacy", "id", "username"], ["matInput", "", "type", "text", "formControlName", "username"], ["appearance", "legacy", "id", "password"], ["matInput", "", "type", "text", "formControlName", "password"], [1, "controls"], ["mat-raised-button", "", "id", "save", 3, "click"]], template: function EditRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditRouteComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit existing route ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "uri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditRouteComponent_Template_button_click_28_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newRoute);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["div.general[_ngcontent-%COMP%] {\r\n\tmargin-top: 1em;\r\n\tmargin-left: 2em;\r\n}\r\n\r\nh2.editRoute[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 1em;\r\n}\r\n\r\ndiv.controls[_ngcontent-%COMP%]{\r\n}\r\n\r\n#tryConnection[_ngcontent-%COMP%], #save[_ngcontent-%COMP%] {\r\n\tmargin-top: 1em;\r\n}\r\n\r\n#reachable[_ngcontent-%COMP%] {\r\n\tcolor: green;\r\n}\r\n\r\n#notReachable[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n}\r\n\r\n#uri[_ngcontent-%COMP%] {\r\n\twidth: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXJvdXRlL2VkaXQtcm91dGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcm91dGUvZWRpdC1yb3V0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmdlbmVyYWwge1xyXG5cdG1hcmdpbi10b3A6IDFlbTtcclxuXHRtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcblxyXG5oMi5lZGl0Um91dGUge1xyXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuZGl2LmNvbnRyb2xze1xyXG59XHJcblxyXG4jdHJ5Q29ubmVjdGlvbiwgI3NhdmUge1xyXG5cdG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuI3JlYWNoYWJsZSB7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4jbm90UmVhY2hhYmxlIHtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jdXJpIHtcclxuXHR3aWR0aDogODAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-route',
                templateUrl: './edit-route.component.html',
                styleUrls: ['./edit-route.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirm_route_delete_confirm_route_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-route-delete/confirm-route-delete.component */ "./src/app/components/confirm-route-delete/confirm-route-delete.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");












function HomeComponent_mat_list_6_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_list_6_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_list_6_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_list_6_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const route_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.routeIsReachable(route_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_list_6_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_list_6_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const route_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.routeIsReachable(route_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_list_6_mat_divider_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function HomeComponent_mat_list_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "uri: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_mat_list_6_button_13_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_mat_list_6_button_14_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_mat_list_6_button_15_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_mat_list_6_button_16_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_list_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const route_r1 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.goEditRoute(route_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_list_6_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const route_r1 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteRoute(route_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_mat_list_6_mat_divider_32_Template, 1, 0, "mat-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !route_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", route_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", route_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !route_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
} }
class HomeComponent {
    constructor(confirmRouteDelete, router, routeService) {
        this.confirmRouteDelete = confirmRouteDelete;
        this.router = router;
        this.routeService = routeService;
        this.routes = [];
        this.refreshRoutes();
    }
    /* Asks to backend for the routes saved */
    refreshRoutes() {
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
        });
    }
    /*
    Attempts to reach de uri of the route.
    In case of success the array "routes" is updated and returns true.
    Otherwise, the array "routes" is updated and returns false.
     */
    routeIsReachable(route) {
        this.routeService.checkReachability(route.id).subscribe(res => {
            var index = this.routes.findIndex(r => r.id == route.id);
            if (index != -1) {
                this.routes[index].status = res;
            }
        });
    }
    /*
    Opens a bottom sheet where the user confirms the delete.
    If the user confirms the route is deleted from the array "routes"
     */
    deleteRoute(route) {
        this.confirmRouteDelete.open(_confirm_route_delete_confirm_route_delete_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmRouteDeleteComponent"], { data: { route: route } });
        this.confirmRouteDelete._openedBottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
            if (dataFromChild == "deletePermanently") {
                this.routeService.deleteRoute(route.id).subscribe(res => {
                    if (res['data']) {
                        this.refreshRoutes();
                    }
                    else {
                        alert("It was not possible to delete the route");
                    }
                });
            }
        });
    }
    /* Navigates to Edit Route with the info of the route */
    goEditRoute(route) {
        this.router.navigate(['/editroute/' + route.id]);
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 1, consts: [[1, "databaseRoutes"], ["mat-raised-button", "", "color", "primary", 1, "databaseRoutes", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "lightText"], ["id", "routeTitle"], [1, "routeUri"], [1, "routeControls"], ["id", "lightText", 2, "margin-top", "11px"], ["mat-icon-button", "", "class", "routeControls", "disabled", "", 4, "ngIf"], ["mat-icon-button", "", "class", "routeControls", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "routeControls", 3, "click"], ["id", "edit"], ["id", "delete"], ["id", "routeUsername"], ["id", "routePassword"], [4, "ngIf"], ["mat-icon-button", "", "disabled", "", 1, "routeControls"], ["id", "notReachable", 1, "status"], ["id", "reachable", 1, "status"], ["id", "refreshGrey"], ["id", "refresh"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Database routes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() { return ctx.goAddRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add route");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_mat_list_6_Template, 33, 9, "mat-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"]], styles: ["div.databaseRoutes[_ngcontent-%COMP%] {\r\n\tmargin: 2em;\r\n}\r\n\r\nh2.databaseRoutes[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 1em;\r\n}\r\n\r\nbutton.databaseRoutes[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\tcolor: \"accent\";\r\n}\r\n\r\nspan.routeControls[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n}\r\n\r\n.routeControls[_ngcontent-%COMP%]{\r\n\tmargin-right: 0;\r\n\tmargin-left: auto;\r\n}\r\n\r\nmat-list[_ngcontent-%COMP%]{\r\n\tpadding: 0;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tmargin: 0;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n\tmargin-top: 0.5em;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\n#lightText[_ngcontent-%COMP%] {\r\n\tfont-size: small;\r\n\tfont-weight: lighter;\r\n\tmargin-right: 1em;\r\n\tcolor: gray;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%], #notReachable[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n}\r\n\r\n#reachable[_ngcontent-%COMP%] {\r\n\tcolor: green;\r\n}\r\n\r\n#routeTitle[_ngcontent-%COMP%] {\r\n\tfont-weight: bold;\r\n\tfont-size: medium;\r\n}\r\n\r\n#refreshGrey[_ngcontent-%COMP%] {\r\n\tcolor: rgb(221, 221, 221);\r\n}\r\n\r\n#routeUsername[_ngcontent-%COMP%] {\r\n\tmargin-right: 1em;\r\n}\r\n\r\ndiv.scheduler[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n\tmargin-right: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsV0FBVztBQUNaOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmRhdGFiYXNlUm91dGVzIHtcclxuXHRtYXJnaW46IDJlbTtcclxufVxyXG5cclxuaDIuZGF0YWJhc2VSb3V0ZXMge1xyXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuYnV0dG9uLmRhdGFiYXNlUm91dGVzIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0Y29sb3I6IFwiYWNjZW50XCI7XHJcbn1cclxuXHJcbnNwYW4ucm91dGVDb250cm9sc3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm91dGVDb250cm9sc3tcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1saXN0e1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm1hdC1saXN0LWl0ZW17XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYXQtZGl2aWRlciB7XHJcblx0bWFyZ2luLXRvcDogMC41ZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbiNsaWdodFRleHQge1xyXG5cdGZvbnQtc2l6ZTogc21hbGw7XHJcblx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0bWFyZ2luLXJpZ2h0OiAxZW07XHJcblx0Y29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNkZWxldGUsICNub3RSZWFjaGFibGUge1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNyZWFjaGFibGUge1xyXG5cdGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI3JvdXRlVGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4jcmVmcmVzaEdyZXkge1xyXG5cdGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn1cclxuXHJcbiNyb3V0ZVVzZXJuYW1lIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuZGl2LnNjaGVkdWxlciB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    login() {
        this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
            .subscribe(res => {
            if (res['statusCode'] == 200) {
                console.log("INICIO DE SESION BIEN");
                console.log(res['data']);
                localStorage.setItem('token', res['data']);
                this.router.navigate(['home']);
            }
            else {
                console.log("INICIO DE SESION MAL");
            }
        }, err => {
            console.log(err);
            console.log("Error al iniciar sesion");
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 1, consts: [[1, "general"], [1, "addRoute"], [3, "formGroup"], ["appearance", "legacy", "id", "username"], ["matInput", "", "type", "text", "formControlName", "username"], ["appearance", "legacy", "id", "password"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "controls"], ["mat-raised-button", "", "id", "save", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["*[_ngcontent-%COMP%]{\r\n\ttext-align: center;\r\n}\r\n\r\ndiv.general[_ngcontent-%COMP%]{\r\n\tpadding-top: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5nZW5lcmFse1xyXG5cdHBhZGRpbmctdG9wOiAyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/scheduler/response.code.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/scheduler/response.code.constants.ts ***!
  \*****************************************************************/
/*! exports provided: ServerResponseCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerResponseCode", function() { return ServerResponseCode; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServerResponseCode {
}
//SPECIFIC ERROR CODES
ServerResponseCode.JOB_WITH_SAME_NAME_EXIST = 501;
ServerResponseCode.JOB_NAME_NOT_PRESENT = 502;
ServerResponseCode.JOB_ALREADY_IN_RUNNING_STATE = 510;
ServerResponseCode.JOB_NOT_IN_PAUSED_STATE = 520;
ServerResponseCode.JOB_NOT_IN_RUNNING_STATE = 521;
ServerResponseCode.JOB_DOESNT_EXIST = 500;
//GENERIC ERROR
ServerResponseCode.ERROR = 600;
//SUCCESS CODES
ServerResponseCode.SUCCESS = 200;
ServerResponseCode.ɵfac = function ServerResponseCode_Factory(t) { return new (t || ServerResponseCode)(); };
ServerResponseCode.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerResponseCode, factory: ServerResponseCode.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerResponseCode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/scheduler/scheduler.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/scheduler/scheduler.component.ts ***!
  \*************************************************************/
/*! exports provided: SchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerComponent", function() { return SchedulerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _response_code_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response.code.constants */ "./src/app/components/scheduler/response.code.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_scheduler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scheduler.service */ "./src/app/services/scheduler.service.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












function SchedulerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulerComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulerComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r7.viewValue);
} }
function SchedulerComponent_input_73_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_input_73_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.scheduleJob(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulerComponent_input_74_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_input_74_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateJob(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulerComponent_input_75_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_input_75_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulerComponent_ng_container_106_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_ng_container_106_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const jobRec_r14 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.startJobNow(jobRec_r14.jobName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start Job Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_ng_container_106_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const jobRec_r14 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.pauseJob(jobRec_r14.jobName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pause Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_ng_container_106_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const jobRec_r14 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.resumeJob(jobRec_r14.jobName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Resume Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_ng_container_106_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const jobRec_r14 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.deleteJob(jobRec_r14.jobName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Delete Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_ng_container_106_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const jobRec_r14 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.stopJob(jobRec_r14.jobName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Stop Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_ng_container_106_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const jobRec_r14 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.editJob(jobRec_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Edit Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const jobRec_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobRec_r14.jobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 11, jobRec_r14.scheduleTime, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 14, jobRec_r14.lastFiredTime, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 17, jobRec_r14.nextFireTime, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", jobRec_r14.jobStatus == "RUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", jobRec_r14.jobStatus != "SCHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", jobRec_r14.jobStatus != "PAUSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", jobRec_r14.jobStatus == "RUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", jobRec_r14.jobStatus != "RUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", jobRec_r14.jobStatus == "RUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobRec_r14.jobStatus);
} }
class SchedulerComponent {
    constructor(_router, _fb, _schedulerService, _responseCode) {
        this._router = _router;
        this._fb = _fb;
        this._schedulerService = _schedulerService;
        this._responseCode = _responseCode;
        this.jobNameStatus = false;
        this.jobRecords = [];
        this.isEditMode = false;
        this.jobTypes = [
            {
                value: "download-emotions",
                viewValue: "Download emotions"
            },
            {
                value: "download-osm",
                viewValue: "Download data from OSM"
            }
        ];
        this.defaultJobType = "download-emotions";
    }
    ngOnInit() {
        this.schedulerForm = this._fb.group({
            jobName: [''],
            year: [''],
            month: [''],
            day: [''],
            hour: [''],
            minute: [''],
            cronExpression: ['0 0/1 * 1/1 * ? *'],
            jobType: [this.defaultJobType]
        });
        this.setDate();
        this.getJobs();
        let tick = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000, 3000);
        this.jobRefreshTimerSubscription = tick.subscribe(t => {
            this.getJobs();
        });
    }
    ngOnDestroy() {
        this.jobRefreshTimerSubscription.unsubscribe();
    }
    setDate() {
        let date = new Date();
        this.schedulerForm.patchValue({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes()
        });
    }
    resetForm() {
        var dateNow = new Date();
        this.schedulerForm.patchValue({
            jobName: "",
            year: dateNow.getFullYear(),
            month: dateNow.getMonth() + 1,
            day: dateNow.getDate(),
            hour: dateNow.getHours(),
            minute: dateNow.getMinutes()
        });
        this.jobNameStatus = false;
    }
    getJobs() {
        this._schedulerService.getJobs().subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS) {
                this.jobRecords = success['data'];
            }
            else {
                alert("Some error while fetching jobs");
            }
            /*
            let dateToShow = new Date(success.scheduleTime);
            this.jobRecords.scheduleTime = this.getFormattedDate(dateToShow.getFullYear(),
              dateToShow.getMonth(),dateToShow.getHours(), dateToShow.getHours(),
              dateToShow.getMinutes());
            */
        }, err => {
            alert("Error while getting all jobs");
        });
    }
    getFormattedDate(year, month, day, hour, minute) {
        return year + "/" + month + "/" + day + " " + hour + ":" + minute;
    }
    checkJobExistWith(jobName) {
        var data = {
            "jobName": jobName
        };
        this._schedulerService.isJobWithNamePresent(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS) {
                if (success['data'] == true) {
                    this.jobNameStatus = false;
                }
                else {
                    this.jobNameStatus = true;
                }
            }
            else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_NAME_NOT_PRESENT) {
                alert("Job name is mandatory.");
                this.schedulerForm.patchValue({
                    jobName: "",
                });
            }
        }, err => {
            alert("Error while checkinh job with name exist.");
        });
        this.jobNameStatus = false;
    }
    scheduleJob() {
        var jobName = this.schedulerForm.value.jobName;
        var year = this.schedulerForm.value.year;
        var month = this.schedulerForm.value.month;
        var day = this.schedulerForm.value.day;
        var hour = this.schedulerForm.value.hour;
        var minute = this.schedulerForm.value.minute;
        this.checkJobExistWith(jobName);
        var data = {
            "jobName": this.schedulerForm.value.jobName,
            "jobScheduleTime": this.getFormattedDate(year, month, day, hour, minute),
            "cronExpression": this.schedulerForm.value.cronExpression,
            "jobType": this.schedulerForm.value.jobType
        };
        this._schedulerService.scheduleJob(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS) {
                alert("Job scheduled successfully.");
                this.resetForm();
            }
            else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_WITH_SAME_NAME_EXIST) {
                alert("Job with same name exists, Please choose different name.");
            }
            else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_NAME_NOT_PRESENT) {
                alert("Job name is mandatory.");
            }
            this.jobRecords = success['data'];
        }, err => {
            alert("Error while getting all jobs");
        });
    }
    updateJob() {
        var jobName = this.schedulerForm.value.jobName;
        var year = this.schedulerForm.value.year;
        var month = this.schedulerForm.value.month;
        var day = this.schedulerForm.value.day;
        var hour = this.schedulerForm.value.hour;
        var minute = this.schedulerForm.value.minute;
        var data = {
            "jobName": this.schedulerForm.value.jobName,
            "jobScheduleTime": this.getFormattedDate(year, month, day, hour, minute),
            "cronExpression": this.schedulerForm.value.cronExpression
        };
        this._schedulerService.updateJob(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS) {
                alert("Job updated successfully.");
                this.resetForm();
            }
            else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_DOESNT_EXIST) {
                alert("Job no longer exist.");
            }
            else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_NAME_NOT_PRESENT) {
                alert("Please provide job name.");
            }
            this.jobRecords = success['data'];
        }, err => {
            alert("Error while updating job");
        });
    }
    editJob(selectedJobRow) {
        this.isEditMode = true;
        var d = Date.parse(selectedJobRow.scheduleTime);
        let date = new Date(selectedJobRow.scheduleTime);
        this.schedulerForm.patchValue({
            jobName: selectedJobRow.jobName,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes()
        });
    }
    cancelEdit() {
        this.resetForm();
        this.isEditMode = false;
    }
    pauseJob(jobName) {
        var data = {
            "jobName": jobName
        };
        this._schedulerService.pauseJob(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS && success['data'] == true) {
                alert("Job paused successfully.");
            }
            else if (success['data'] == false) {
                if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_ALREADY_IN_RUNNING_STATE) {
                    alert("Job already started/completed, so cannot be paused.");
                }
            }
            this.getJobs();
        }, err => {
            alert("Error while pausing job");
        });
        //For updating fresh status of all jobs 
        this.getJobs();
    }
    resumeJob(jobName) {
        var data = {
            "jobName": jobName
        };
        this._schedulerService.resumeJob(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS && success['data'] == true) {
                alert("Job resumed successfully.");
            }
            else if (success['data'] == false) {
                if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_NOT_IN_PAUSED_STATE) {
                    alert("Job is not in paused state, so cannot be resumed.");
                }
            }
            //For updating fresh status of all jobs 
            this.getJobs();
        }, err => {
            alert("Error while resuming job");
        });
        //For updating fresh status of all jobs 
        this.getJobs();
    }
    stopJob(jobName) {
        var data = {
            "jobName": jobName
        };
        this._schedulerService.stopJob(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS && success['data'] == true) {
                alert("Job stopped successfully.");
            }
            else if (success['data'] == false) {
                if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_NOT_IN_RUNNING_STATE) {
                    alert("Job not started, so cannot be stopped.");
                }
                else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_ALREADY_IN_RUNNING_STATE) {
                    alert("Job already started.");
                }
                else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_DOESNT_EXIST) {
                    alert("Job no longer exist.");
                }
            }
            //For updating fresh status of all jobs 
            this.getJobs();
        }, err => {
            alert("Error while pausing job");
        });
    }
    startJobNow(jobName) {
        var data = {
            "jobName": jobName
        };
        this._schedulerService.startJobNow(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS && success['data'] == true) {
                alert("Job started successfully.");
            }
            else if (success['data'] == false) {
                if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].ERROR) {
                    alert("Server error while starting job.");
                }
                else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_ALREADY_IN_RUNNING_STATE) {
                    alert("Job is already started.");
                }
                else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_DOESNT_EXIST) {
                    alert("Job no longer exist.");
                }
            }
            //For updating fresh status of all jobs 
            this.getJobs();
        }, err => {
            alert("Error while starting job now.");
        });
        //For updating fresh status of all jobs 
        this.getJobs();
    }
    deleteJob(jobName) {
        var data = {
            "jobName": jobName
        };
        this._schedulerService.deleteJob(data).subscribe(success => {
            if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].SUCCESS && success['data'] == true) {
                alert("Job deleted successfully.");
            }
            else if (success['data'] == false) {
                if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_ALREADY_IN_RUNNING_STATE) {
                    alert("Job is already started/completed, so cannot be deleted.");
                }
                else if (success['statusCode'] == _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"].JOB_DOESNT_EXIST) {
                    alert("Job no longer exist.");
                }
            }
            //For updating fresh status of all jobs
            this.getJobs();
        }, err => {
            alert("Error while deleting job");
        });
    }
    refreshJob() {
        //For updating fresh status of all jobs 
        this.getJobs();
    }
    cronChange(cronExp) {
        this.schedulerForm.patchValue({
            cronExpression: cronExp
        });
    }
}
SchedulerComponent.ɵfac = function SchedulerComponent_Factory(t) { return new (t || SchedulerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_scheduler_service__WEBPACK_IMPORTED_MODULE_5__["SchedulerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"])); };
SchedulerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulerComponent, selectors: [["app-scheduler"]], decls: 107, vars: 9, consts: [["novalidate", "", "autocomplete", "off", 3, "formGroup"], ["type", "text", "name", "jobName", "id", "jobName", "formControlName", "jobName", 1, "form-control", 2, "width", "100px", 3, "readonly"], ["mat-icon-button", "", "class", "routeControls", "disabled", "", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["name", "jobType", "id", "jobType", "formControlName", "jobType"], ["value", "option.value", "selected", "", 3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "name", "year", "id", "year", "formControlName", "year", 1, "form-control", 2, "width", "100px"], ["type", "text", "name", "month", "id", "month", "formControlName", "month", 1, "form-control", 2, "width", "100px"], ["type", "text", "name", "day", "id", "day", "formControlName", "day", 1, "form-control", 2, "width", "100px"], ["type", "text", "name", "hour", "id", "hour", "formControlName", "hour", 1, "form-control", 2, "width", "100px"], ["type", "text", "name", "minute", "id", "minute", "formControlName", "minute", 1, "form-control", 2, "width", "100px"], ["colspan", "5", 2, "padding", "5px"], [2, "padding", "5px"], ["type", "text", "name", "cronExpression", "id", "cronExpression", "formControlName", "cronExpression", 1, "form-control", 2, "width", "200px"], [1, "form-control", 3, "change"], ["value", "0 0/1 * 1/1 * ? *"], ["value", "0 0 10 1/1 * ? *"], ["value", "0 0 0/1 1/1 * ? *"], ["value", "0 0 10 ? * TUE,THU *"], ["colspan", "2"], ["colspan", "2", 2, "padding", "5px"], ["type", "button", "name", "submit", "id", "submit", "class", "btn btn-primary", "value", "Submit", 3, "click", 4, "ngIf"], ["type", "button", "name", "submit", "id", "submit", "class", "btn btn-primary", "value", "Update", 3, "click", 4, "ngIf"], ["type", "button", "name", "submit", "id", "submit", "class", "btn btn-primary", "value", "Cancel", 3, "click", 4, "ngIf"], [2, "color", "red"], ["border", "1", 1, "table", "table-responsive", "table-hover", 2, "width", "100%"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "disabled", "", 1, "routeControls"], ["id", "notReachable", 1, "status"], ["id", "reachable", 1, "status"], ["value", "option.value", "selected", "", 3, "ngValue"], ["type", "button", "name", "submit", "id", "submit", "value", "Submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "name", "submit", "id", "submit", "value", "Update", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "name", "submit", "id", "submit", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function SchedulerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter Job Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SchedulerComponent_button_8_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SchedulerComponent_button_9_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_Template_button_click_11_listener() { return ctx.checkJobExistWith(ctx.schedulerForm.value.jobName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check name conflict");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Job Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SchedulerComponent_option_19_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Enter Date and Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Year: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Month: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Day: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Hour(24-hour): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Minute: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "If given date/time is invalid then job will not get scheduled. If given date is older than current date then job will be started immediately");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Enter Cron expression ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Select Sample Cron:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SchedulerComponent_Template_select_change_56_listener($event) { return ctx.cronChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Every 1 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Every day at 10 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Every hour starting 10 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Every week Tue and Thur at 10 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "If Cron expression is blank then it will be treated as One time job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SchedulerComponent_input_73_Template, 1, 0, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SchedulerComponent_input_74_Template, 1, 0, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SchedulerComponent_input_75_Template, 1, 0, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Job List:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " 1. Completed jobs will not be shown in listing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " 2. If job is in \"RUNNING\" state then no action like \"Pause, Resume, Delete, Edit\" is allowed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Job Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Job Schedule Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Job Last Fired Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Job Next Fire Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Job Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, SchedulerComponent_ng_container_106_Template, 33, 20, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.schedulerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobNameStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobNameStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobRecords);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["#delete[_ngcontent-%COMP%], #notReachable[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n}\r\n\r\n#reachable[_ngcontent-%COMP%] {\r\n\tcolor: green;\r\n}\r\n\r\n#refreshGrey[_ngcontent-%COMP%] {\r\n\tcolor: rgb(221, 221, 221);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZXIvc2NoZWR1bGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZXIvc2NoZWR1bGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2RlbGV0ZSwgI25vdFJlYWNoYWJsZSB7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG5cclxuI3JlYWNoYWJsZSB7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4jcmVmcmVzaEdyZXkge1xyXG5cdGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scheduler',
                templateUrl: './scheduler.component.html',
                styleUrls: ['./scheduler.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_scheduler_service__WEBPACK_IMPORTED_MODULE_5__["SchedulerService"] }, { type: _response_code_constants__WEBPACK_IMPORTED_MODULE_1__["ServerResponseCode"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







function ToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goRoutesPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View routes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goSchedulerPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set scheduler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        if (localStorage.getItem('token') != null) {
            this.thereIsToken = true;
        }
        else {
            this.thereIsToken = false;
        }
    }
    goSchedulerPage() {
        this.router.navigate(['/scheduler']);
    }
    goRoutesPage() {
        this.router.navigate(['/home']);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    goProfilePage() {
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['/profile']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 5, vars: 3, consts: [["color", "primary"], ["mat-stroked-button", "", "id", "routesButton", "color", "basic", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "id", "schedulerButton", "color", "basic", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "id", "loginButton", "color", "basic", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "id", "routesButton", "color", "basic", 3, "click"], ["mat-stroked-button", "", "id", "schedulerButton", "color", "basic", 3, "click"], ["mat-flat-button", "", "id", "loginButton", "color", "basic", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Emotions Map Administration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thereIsToken);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thereIsToken);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thereIsToken);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["#schedulerButton[_ngcontent-%COMP%] {\r\n\tmargin-left: 2em;\r\n}\r\n#routesButton[_ngcontent-%COMP%] {\r\n\tmargin-left: 2em;\r\n}\r\n#loginButton[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY2hlZHVsZXJCdXR0b24ge1xyXG5cdG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuI3JvdXRlc0J1dHRvbiB7XHJcblx0bWFyZ2luLWxlZnQ6IDJlbTtcclxufVxyXG4jbG9naW5CdXR0b24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
class AuthInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        const idToken = localStorage.getItem("token");
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
        }
        else if (req.url == (API_URL + "/users/login")) {
            return next.handle(req);
        }
        else {
            this.router.navigate(['login']);
        }
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/routes';
class RouteService {
    constructor(http) {
        this.http = http;
    }
    getAllRoutes() {
        return this.http.get(BACKEND_URL + '/allroutes');
    }
    getRoute(id) {
        return this.http.get(BACKEND_URL + '/route/' + id);
    }
    addRoute(name, uri, username, password) {
        var body = {
            name: name,
            uri: uri,
            username: username,
            password: password
        };
        return this.http.post(BACKEND_URL + '/route', body);
    }
    editRoute(id, name, uri, username, password) {
        var body = {
            name: name,
            uri: uri,
            username: username,
            password: password
        };
        return this.http.put(BACKEND_URL + '/route/' + id, body);
    }
    deleteRoute(id) {
        return this.http.delete(BACKEND_URL + '/route/' + id);
    }
    checkReachability(id) {
        return this.http.get(BACKEND_URL + "/reachability/" + id);
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/scheduler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/scheduler.service.ts ***!
  \***********************************************/
/*! exports provided: SchedulerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerService", function() { return SchedulerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
class SchedulerService {
    constructor(_http, http) {
        this._http = _http;
        this.http = http;
        this.getJobsUrl = "/scheduler/jobs";
        this.scheduleJobUrl = "/scheduler/schedule";
        this.pauseJobUrl = "/scheduler/pause";
        this.resumeJobUrl = "/scheduler/resume";
        this.deleteJobUrl = "/scheduler/delete";
        this.updateJobUrl = "/scheduler/update";
        this.isJobWithNamePresentUrl = "/scheduler/checkJobName";
        this.stopJobUrl = "/scheduler/stop";
        this.startJobNowUrl = "/scheduler/start";
        /* Http functions are not intercepted so the token has to be set manually, for future versions it is better to use HttpClient */
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    }
    getJobs() {
        return this.http.get(BACKEND_URL + this.getJobsUrl);
    }
    scheduleJob(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.scheduleJobUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    isJobWithNamePresent(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.isJobWithNamePresentUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    pauseJob(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.pauseJobUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    resumeJob(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.resumeJobUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    deleteJob(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.deleteJobUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    stopJob(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.stopJobUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    startJobNow(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.startJobNowUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
    updateJob(data) {
        let params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (let key in data) {
            params.set(key, data[key]);
        }
        this.options.search = params;
        return this._http.get(BACKEND_URL + this.updateJobUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.json()));
    }
}
SchedulerService.ɵfac = function SchedulerService_Factory(t) { return new (t || SchedulerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SchedulerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchedulerService, factory: SchedulerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/users';
class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(username, password) {
        var body = {
            username: username,
            password: password
        };
        return this.http.post(BACKEND_URL + '/login', body);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:7080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sergio\Desktop\emotionalMaps\backend\administration_app\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map