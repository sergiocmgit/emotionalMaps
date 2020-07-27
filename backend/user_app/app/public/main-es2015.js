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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFdBQVc7Q0FDWCxZQUFZO0NBQ1osT0FBTztDQUNQLE1BQU07QUFDUCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG59Il19 */"] });
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


















const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home/:filter', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                    ),
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_database_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database-access.service */ "./src/app/services/database-access.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function HomeComponent_select_9_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", opt_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r4.viewValue);
} }
function HomeComponent_select_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_select_9_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r5.allFilters[i_r2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_select_9_option_1_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.allFilters[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", f_r1.options);
} }
class HomeComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.layerGroup = new leaflet__WEBPACK_IMPORTED_MODULE_1__["LayerGroup"]();
        this.allFilters = [
            "morning",
            "spring",
            "male",
            "adult",
            "citizen"
        ];
        this.filters = [
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
        ];
    }
    ngOnInit() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]("map").setView([41.649914, -0.877733], 13);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        this.refreshMap();
    }
    //Returns the segment style
    style(emotion) {
        var color;
        switch (emotion) {
            case 1:
                color = 'orange';
                break;
            case 2:
                color = 'red';
                break;
            case 3:
                color = 'blue';
                break;
            case 4:
                color = 'green';
                break;
            case 5:
                color = 'white';
                break;
            default:
                color = 'black';
                break;
        }
        return {
            /* weight: 12, */
            weight: 4,
            opacity: 5,
            color: color,
            dashArray: '1',
            fillOpacity: 0
        };
    }
    //Transforms a json segment into a geojson segment
    toGeoJson(segment) {
        var geojson = {};
        geojson['properties'] = segment;
        geojson['type'] = "Feature";
        geojson['geometry'] = {
            "type": "LineString",
            "coordinates": segment['segment']['coordinates']
        };
        return geojson;
    }
    // Removes the painted layer
    removeLayers() {
        this.map.removeLayer(this.layerGroup);
        this.layerGroup = new leaflet__WEBPACK_IMPORTED_MODULE_1__["LayerGroup"]();
        ;
    }
    // Removes the painted layer and paints the new one
    refreshMap() {
        this.removeLayers();
        this.filter = this.allFilters[0];
        for (var i = 1; i < 5; i++) {
            this.filter += "." + this.allFilters[i];
        }
        this.buildSegments();
    }
    //Given a segment, is painted in the map
    paintSegment(segment, emotion) {
        leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](segment, { style: this.style(emotion) })
            .addTo(this.layerGroup);
    }
    //Paints in the map the segments which are related to a emotion
    buildSegments() {
        this.dbService.getEmotionsFiltered(this.filter)
            .subscribe(res => {
            res['data'].forEach(segment => {
                var mostRepeated = 0;
                for (var j = 0; j < 5; j++) {
                    if (segment.emotions[mostRepeated] < segment.emotions[j]) {
                        mostRepeated = j;
                    }
                }
                var emotion = mostRepeated + 1;
                this.dbService.getSegmentByWay(segment._id)
                    .subscribe(res => {
                    this.paintSegment(res['coordinates'], emotion);
                }, err => {
                    console.log("Error at getSegmentByWay");
                });
            });
            this.layerGroup.addTo(this.map);
        }, err => {
            console.log("Error at getAllEmotions");
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_database_access_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseAccessService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 1, consts: [["lang", "es"], ["rel", "stylesheet", "href", "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css"], [1, "header"], [1, "toolbar"], [1, "title"], [1, "selectors"], ["class", "filter", 3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "click"], ["id", "map"], [1, "filter", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Emotions map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_select_9_Template, 2, 2, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { return ctx.refreshMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-flow: column;\r\n\theight: 100%;\r\n}\r\n\r\n#map[_ngcontent-%COMP%] {\r\n\tflex-grow : 1;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%]{\r\n\tbackground-color: #3a93c4;\r\n}\r\n\r\ndiv.selectors[_ngcontent-%COMP%]{\r\n\ttext-align: end;\r\n\tright: 1em;\r\n\tpadding-top: 0.5em;\r\n\tposition: fixed;\r\n}\r\n\r\nselect.filter[_ngcontent-%COMP%]{\r\n\tmargin-left: 1em;\r\n\tmargin-right: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI21hcCB7XHJcblx0ZmxleC1ncm93IDogMTtcclxufVxyXG5cclxuZGl2LmhlYWRlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5M2M0O1xyXG59XHJcblxyXG5kaXYuc2VsZWN0b3Jze1xyXG5cdHRleHQtYWxpZ246IGVuZDtcclxuXHRyaWdodDogMWVtO1xyXG5cdHBhZGRpbmctdG9wOiAwLjVlbTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbnNlbGVjdC5maWx0ZXJ7XHJcblx0bWFyZ2luLWxlZnQ6IDFlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_database_access_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseAccessService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/database-access.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/database-access.service.ts ***!
  \*****************************************************/
/*! exports provided: DatabaseAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseAccessService", function() { return DatabaseAccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const apiURL = 'http://localhost:3000';
class DatabaseAccessService {
    constructor(http) {
        this.http = http;
    }
    getAllEmotions() {
        return this.http.get(apiURL + '/getAllEmotions', { responseType: 'json' });
    }
    getSegmentByWay(way) {
        return this.http.get(apiURL + '/getSegmentByWay/' + way, { responseType: 'json' });
    }
    getEmotionsFiltered(filter) {
        return this.http.get(apiURL + '/getEmotionsFiltered/' + filter, { responseType: 'json' });
    }
}
DatabaseAccessService.ɵfac = function DatabaseAccessService_Factory(t) { return new (t || DatabaseAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DatabaseAccessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatabaseAccessService, factory: DatabaseAccessService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseAccessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Sergio\Desktop\emotionalMaps\backend\user_app\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map