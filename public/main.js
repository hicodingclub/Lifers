(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_public_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/public-routing */ "./src/app/home/public-routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "public", children: _home_public_routing__WEBPACK_IMPORTED_MODULE_3__["publicRoutingPath"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #00BFFF;\n  height: 70px;\n}\n\n.logo {\n    max-width:60px;\n}\n\n.logo-text {\n    margin-left: 70px; /*logo max-width + 10 */\n}\n\n.contact-info {\n\t\n}\n\n.content {\n\tpadding-top: 70px; /*same height with .header*/\n\twidth: 100%;\n\tmin-height: calc(100vh - 70px);  /*viewport height substracts footer height*/\n}\n\n.footer {\n  background-color: #00BFFF;\n  color: white;\n  font-size: 0.75rem;\n  \n  width: 100%;\n  height: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQixFQUFFLHVCQUF1QjtBQUM5Qzs7QUFFQTs7QUFFQTs7QUFFQTtDQUNDLGlCQUFpQixFQUFFLDJCQUEyQjtDQUM5QyxXQUFXO0NBQ1gsOEJBQThCLEdBQUcsMkNBQTJDO0FBQzdFOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkZGO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBtYXgtd2lkdGg6NjBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7IC8qbG9nbyBtYXgtd2lkdGggKyAxMCAqL1xufVxuXG4uY29udGFjdC1pbmZvIHtcblx0XG59XG5cbi5jb250ZW50IHtcblx0cGFkZGluZy10b3A6IDcwcHg7IC8qc2FtZSBoZWlnaHQgd2l0aCAuaGVhZGVyKi9cblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTsgIC8qdmlld3BvcnQgaGVpZ2h0IHN1YnN0cmFjdHMgZm9vdGVyIGhlaWdodCovXG59XG5cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGRkY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header navbar fixed-top navbar-light navbar-expand-lg\">\n\t<a class=\"navbar-brand\" routerLink=\"/home\">\n\t\t<img src=\"assets/LKA.png\" align=\"left\" class=\"logo\">\n\t\t<div class=\"logo-text mt-2 h3\">Light of Knowledge Academy </div>\n\t</a>\n\t<div class=\"ml-3 mr-5\">\n\t\t<i class=\"fas fa-phone\"></i> (408) 996-1236\n\t</div>\n\t\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarItems\" aria-controls=\"navbarItems\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\t\n\t<div class=\"collapse navbar-collapse ml-auto mr-auto\" id=\"navbarItems\">\n\t    <ul class=\"navbar-nav\">\n\t      <li class=\"nav-item\">\n\t        <a class=\"nav-link\" routerLink=\"/lifehacks/hack\">Hacks</a>\n\t      </li>\n\t      <li class=\"nav-item\">\n\t        <a class=\"nav-link\" routerLink=\"/lifehacks/lifer\">Lifer</a>\n\t      </li>\n\t      <li class=\"nav-item\">\n\t        <a class=\"nav-link\" routerLink=\"/academics/teacher\">FAQ</a>\n\t      </li>\n\t    </ul>\n\t</div>\n    \n\t<div class=\"mr-4 pt-2\">\n\t\t<app-auth-icon></app-auth-icon>\n\t</div>\n</nav>\n\n<div class=\"content\">\n\t<router-outlet></router-outlet>\n</div>\n\n<nav class=\"footer footer-font navbar navbar-light\">\n  <div class=\"mx-auto mb-2\">\n\t  <div>© 2019 Light of Knowledge Academy, Inc. All rights reserved.</div>\n\t  <div><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 20432 Silverado Ave STE 6, Cupertino, CA 95014</div>\n  </div>\n</nav>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _publicinfo_publicinfo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./publicinfo/publicinfo.module */ "./src/app/publicinfo/publicinfo.module.ts");
/* harmony import */ var _lifehacks_lifehacks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifehacks/lifehacks.module */ "./src/app/lifehacks/lifehacks.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _users_users_module__WEBPACK_IMPORTED_MODULE_6__["UsersModule"],
                _publicinfo_publicinfo_module__WEBPACK_IMPORTED_MODULE_7__["PublicinfoModule"],
                _lifehacks_lifehacks_module__WEBPACK_IMPORTED_MODULE_8__["LifehacksModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.conf.ts":
/*!******************************!*\
  !*** ./src/app/auth.conf.ts ***!
  \******************************/
/*! exports provided: authentication_login_page_uri, authentication_server_root_uri, authentication_interfaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication_login_page_uri", function() { return authentication_login_page_uri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication_server_root_uri", function() { return authentication_server_root_uri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication_interfaces", function() { return authentication_interfaces; });
var authentication_login_page_uri = '/auth/login';
var authentication_server_root_uri = '/api/auth';
var authentication_interfaces = 'users';


/***/ }),

/***/ "./src/app/auth/auth-icon/auth-icon.component.css":
/*!********************************************************!*\
  !*** ./src/app/auth/auth-icon/auth-icon.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-icon-container {\n\t\n}\n\n.auth-icon {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\t\n\tbackground-color: rgb(170, 170, 170);\n/*    height: 3rem;\n    width: 3rem; */\n    height: 2.5rem;\n    width: 2.5rem;\n    \n    border-radius: 50%;\n    text-align: center;\n    cursor: pointer;\n}\n\n.auth-icon-active {\n\tbackground-color: rgb(90, 160, 70);\n}\n\n.icon-text {\n    /*font-size: 1.8rem;*/\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n}\n\n.auth-icon:hover {\n\tbackground-color: rgb(200, 200, 200);\n}\n\n.auth-icon-active:hover {\n\tbackground-color: rgb(120, 170, 110);\n}\n\n.auth-icon-pop {\n\tposition: absolute;\n\tz-index: 10;\t\n}\n\n.auth-icon-pop {\n\tposition: absolute;\n\tz-index: 10;\t\n}\n\n.pop-menu-container {\n\tposition: relative;\n\tdisplay: block;\n}\n\n.login-name {\n\twidth: 100%;\n\tfont-style: italic;\n\ttext-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLWljb24vYXV0aC1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCOztDQUVsQixvQ0FBb0M7QUFDckM7a0JBQ2tCO0lBQ2QsY0FBYztJQUNkLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1pY29uL2F1dGgtaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtaWNvbi1jb250YWluZXIge1xuXHRcbn1cblxuLmF1dGgtaWNvbiB7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XG4vKiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDNyZW07ICovXG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF1dGgtaWNvbi1hY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDE2MCwgNzApO1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgICAvKmZvbnQtc2l6ZTogMS44cmVtOyovXG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uYXV0aC1pY29uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xufVxuXG4uYXV0aC1pY29uLWFjdGl2ZTpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDE3MCwgMTEwKTtcbn1cblxuLmF1dGgtaWNvbi1wb3Age1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDEwO1x0XG59XG5cbi5hdXRoLWljb24tcG9wIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxMDtcdFxufVxuXG4ucG9wLW1lbnUtY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ2luLW5hbWUge1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/auth-icon/auth-icon.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-icon/auth-icon.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='auth-icon-container' (clickElsewhere)=\"closePopup()\">\n\n\t<div class=\"auth-icon\" [ngClass]=\"{'auth-icon-active': isAuthorized()}\" (click)=\"toggle($event)\">\n\t\t<span class=\"icon-text\"><i class=\"fas fa-user\"></i></span>\n\t</div>\n\n    <div>{{userNameShort}}</div>\n\n\t<div *ngIf=\"popup\" class=\"auth-icon-pop\" [ngStyle]=\"popupStyle\">\n\t  <div class=\"dropdown-menu pop-menu-container\">\n\t  \t<label class=\"login-name\">{{userName}}</label>\n\t  \n\t  \t<div class=\"dropdown-divider\"></div>\n\t    <ng-container *ngIf=\"isAuthorized(); else notAuthorized\">\n\t\t    <a class=\"dropdown-item\" href=\"#\">Profile</a>\n\t\t    \n\t\t    <div class=\"dropdown-divider\"></div>\n\t\t    \n\t\t    <a class=\"dropdown-item btn\" (click)=\"logout()\">Logout</a>\n\t\t</ng-container>\n\t    <ng-template #notAuthorized>\t\t    \n\t\t    <a class=\"dropdown-item btn\" (click)=\"login()\">Login</a>\n\t\t</ng-template>\n\t  </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth-icon/auth-icon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/auth-icon/auth-icon.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthIconComponent", function() { return AuthIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens */ "./src/app/auth/tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AuthIconComponent = /** @class */ (function () {
    function AuthIconComponent(router, authService, loginPageUri) {
        this.router = router;
        this.authService = authService;
        this.loginPageUri = loginPageUri;
        this.popup = false;
        this.popupStyle = {};
        this.userName = 'Please login';
        this.userNameShort = 'Please login';
    }
    AuthIconComponent.prototype.ngOnInit = function () {
        this.isAuthorized();
    };
    AuthIconComponent.prototype.toggle = function (event) {
        if (!this.popup) {
            var right = (window.innerWidth - event.x) - 2;
            var top_1 = event.y + 15;
            this.popupStyle = {
                'right': right.toString() + 'px',
                'top': top_1.toString() + 'px',
            };
        }
        this.popup = !this.popup;
    };
    AuthIconComponent.prototype.closePopup = function () {
        this.popup = false;
    };
    AuthIconComponent.prototype.isAuthorized = function () {
        var name = this.authService.getUserName();
        var isAuth = this.authService.isAuthorized();
        if (name) {
            this.userName = name;
            if (isAuth) {
                if (name.length > 12) {
                    this.userNameShort = name.substring(0, 10) + '...';
                }
                else {
                    this.userNameShort = name.substring(0, 13);
                }
            }
            else {
                this.userNameShort = 'Please login';
            }
        }
        return isAuth;
    };
    AuthIconComponent.prototype.login = function () {
        // not logged in so redirect to login page with the return url
        var state = this.router.routerState.snapshot;
        this.authService.setInterruptedUrl(state.url);
        this.popup = false;
        this.router.navigate([this.loginPageUri]);
    };
    AuthIconComponent.prototype.logout = function () {
        // not logged in so redirect to login page with the return url
        this.authService.logout();
        this.popup = false;
        this.router.navigated = false; // refresh current page;
        this.router.navigate(['/']); // home page
    };
    AuthIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-icon',
            template: __webpack_require__(/*! ./auth-icon.component.html */ "./src/app/auth/auth-icon/auth-icon.component.html"),
            styles: [__webpack_require__(/*! ./auth-icon.component.css */ "./src/app/auth/auth-icon/auth-icon.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_3__["AUTHTICATION_LOGIN_PAGE_URI"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], String])
    ], AuthIconComponent);
    return AuthIconComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-icon/click-elsewhere.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/auth-icon/click-elsewhere.directive.ts ***!
  \*************************************************************/
/*! exports provided: ClickElsewhereDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickElsewhereDirective", function() { return ClickElsewhereDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickElsewhereDirective = /** @class */ (function () {
    function ClickElsewhereDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickElsewhere = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickElsewhereDirective.prototype.onDocumentClick = function (event) {
        var targetElement = event.target;
        // Check if the click was outside the element
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.clickElsewhere.emit(event);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickElsewhereDirective.prototype, "clickElsewhere", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ClickElsewhereDirective.prototype, "onDocumentClick", null);
    ClickElsewhereDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[clickElsewhere]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickElsewhereDirective);
    return ClickElsewhereDirective;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/auth/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "./src/app/auth/register/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'auth',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"],
        children: [
            { path: "login", component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login' }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 offset-sm-3\">\n\n<ul class=\"nav nav-tabs nav-fill mb-3\" *ngIf=\"adminIntEnabled && userIntEnabled\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active': !adminInterface}\" href=\"javascript:void(0)\" \n        (click)=\"setAdminInterface(false)\">Users</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active': adminInterface}\" href=\"javascript:void(0)\" \n        (click)=\"setAdminInterface(true)\">Administrators</a>\n  </li>\n</ul>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens */ "./src/app/auth/tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authenticationService, authenticationInterfaces) {
        this.authenticationService = authenticationService;
        this.authenticationInterfaces = authenticationInterfaces;
        this.adminInterface = false;
        this.userIntEnabled = false;
        this.adminIntEnabled = false;
        var str = authenticationInterfaces.toLowerCase();
        if (str.includes("user") && str.includes("admin")) { //both interface. Check cached.
            this.adminInterface = authenticationService.isAdminInterface();
            this.userIntEnabled = true;
            this.adminIntEnabled = true;
        }
        else if (str.includes("administrator")) { //administrator only
            this.authenticationService.setAdminInterface(true);
            this.adminIntEnabled = true;
        }
        else { //users only
            this.authenticationService.setAdminInterface(false);
            this.userIntEnabled = true;
        }
    }
    AuthenticationComponent.prototype.setAdminInterface = function (adminInterface) {
        this.adminInterface = adminInterface;
        this.authenticationService.setAdminInterface(this.adminInterface);
    };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_2__["AUTHTICATION_INTERFACES"])),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], String])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens */ "./src/app/auth/tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, loginPageUri) {
        this.router = router;
        this.authService = authService;
        this.loginPageUri = loginPageUri;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthorized()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.authService.setInterruptedUrl(state.url);
        this.router.navigate([this.loginPageUri]);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_3__["AUTHTICATION_LOGIN_PAGE_URI"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], String])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens */ "./src/app/auth/tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(router, authService, loginPageUri) {
        this.router = router;
        this.authService = authService;
        this.loginPageUri = loginPageUri;
        this.refreshTokenInProgress = false;
        // Refresh Token Subject tracks the current token, or is null if no token is currently
        // available (e.g. refresh pending).
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    TokenInterceptor.prototype.addAuthHeader = function (request) {
        if (this.authService.isAuthorized()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.authService.getAccessToken()
                }
            });
        }
        return request;
    };
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(this.addAuthHeader(request))
            .pipe(
        /*
        tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              ;
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.authService.setInterruptedUrl(this.router.url);
                this.router.navigate([this.loginPageUri]);
              }
            }
        })
        */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && error.status === 401) {
                if (_this.refreshTokenInProgress && !_this.authService.verifyTokenRequest(request.url)) {
                    // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
                    // – which means the new token is ready and we can retry the request again
                    return _this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (result) { return result !== null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return next.handle(_this.addAuthHeader(request)); }));
                }
                else {
                    _this.refreshTokenInProgress = true;
                    // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
                    _this.refreshTokenSubject.next(null);
                    return _this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
                        _this.refreshTokenInProgress = false;
                        _this.refreshTokenSubject.next(data);
                        return next.handle(_this.addAuthHeader(request));
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                        // looks like this part will not hit
                        _this.refreshTokenInProgress = false;
                        _this.authService.setInterruptedUrl(_this.router.url);
                        _this.router.navigate([_this.loginPageUri]);
                        return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
                    }));
                }
            }
            if (_this.authService.verifyTokenRequest(request.url)) {
                // refreshToken failed. Go to login page.
                _this.refreshTokenInProgress = false;
                _this.authService.setInterruptedUrl(_this.router.url);
                _this.router.navigate([_this.loginPageUri]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_6__["AUTHTICATION_LOGIN_PAGE_URI"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], String])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_conf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.conf */ "./src/app/auth.conf.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens */ "./src/app/auth/tokens.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login */ "./src/app/auth/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register */ "./src/app/auth/register/index.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_icon_auth_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-icon/auth-icon.component */ "./src/app/auth/auth-icon/auth-icon.component.ts");
/* harmony import */ var _auth_icon_click_elsewhere_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth-icon/click-elsewhere.directive */ "./src/app/auth/auth-icon/click-elsewhere.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
            ],
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticationComponent"],
                _login__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _auth_icon_auth_icon_component__WEBPACK_IMPORTED_MODULE_13__["AuthIconComponent"],
                _auth_icon_click_elsewhere_directive__WEBPACK_IMPORTED_MODULE_14__["ClickElsewhereDirective"]
            ],
            exports: [
                _auth_icon_auth_icon_component__WEBPACK_IMPORTED_MODULE_13__["AuthIconComponent"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                { provide: _tokens__WEBPACK_IMPORTED_MODULE_7__["AUTHTICATION_LOGIN_PAGE_URI"], useValue: _auth_conf__WEBPACK_IMPORTED_MODULE_4__["authentication_login_page_uri"] },
                { provide: _tokens__WEBPACK_IMPORTED_MODULE_7__["AUTHTICATION_SERVER_ROOT_URI"], useValue: _auth_conf__WEBPACK_IMPORTED_MODULE_4__["authentication_server_root_uri"] },
                { provide: _tokens__WEBPACK_IMPORTED_MODULE_7__["AUTHTICATION_INTERFACES"], useValue: _auth_conf__WEBPACK_IMPORTED_MODULE_4__["authentication_interfaces"] },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
                    multi: true
                },
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens */ "./src/app/auth/tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(authServerRootUri, router, http) {
        var _this = this;
        this.authServerRootUri = authServerRootUri;
        this.router = router;
        this.http = http;
        this.adminInterface = false;
        this.navigateEndTime = Date.now();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.navigateEndTime = Date.now();
                if (event.urlAfterRedirects) {
                    _this.currentUrl = event.urlAfterRedirects;
                }
                else {
                    _this.currentUrl = event.url;
                }
            }
        });
        this.adminInterface = JSON.parse(localStorage.getItem('adminInterface'));
    }
    AuthenticationService.prototype.isAuthorized = function () {
        var authRecord = JSON.parse(localStorage.getItem('mdds-auth-record'));
        if (authRecord && authRecord['accessToken']) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getLogoutTime = function () {
        var authRecord = JSON.parse(localStorage.getItem('mdds-auth-record'));
        if (authRecord && 'logoutTs' in authRecord) {
            return authRecord.logoutTs;
        }
        return 0;
    };
    AuthenticationService.prototype.getAccessToken = function () {
        var authRecord = JSON.parse(localStorage.getItem('mdds-auth-record'));
        if (authRecord) {
            return authRecord['accessToken'];
        }
        return null;
    };
    AuthenticationService.prototype.refreshToken = function () {
        var _this = this;
        var authRecord = JSON.parse(localStorage.getItem('mdds-auth-record'));
        if (!authRecord) {
            authRecord = { refreshToken: '', userName: '' };
        }
        var refreshToken = authRecord['refreshToken'];
        var userName = authRecord['userName'];
        return this.http.post(this.authServerRootUri + '/refresh', { refreshToken: refreshToken, userName: userName }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.loggedIn), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.logout();
            return error;
        }));
    };
    AuthenticationService.prototype.refreshShouldHappen = function (response) {
        return response.status === 401;
    };
    AuthenticationService.prototype.verifyTokenRequest = function (url) {
        if (url.endsWith(this.authServerRootUri + '/refresh') ||
            url.endsWith(this.authServerRootUri + '/login')) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getInterruptedUrl = function () {
        return this.interruptedUrl || '/';
    };
    AuthenticationService.prototype.getRoutedFromUrl = function () {
        return this.routedFromUrl || '/';
    };
    AuthenticationService.prototype.setInterruptedUrl = function (url) {
        this.interruptedUrl = url;
        var currentTime = Date.now();
        if (currentTime - this.navigateEndTime > 1000) {
            // Happend > 1 sec. assume it is triggered from current page.
            this.routedFromUrl = this.currentUrl;
        }
        else {
            // page transitioned
            this.routedFromUrl = this.previousUrl;
        }
    };
    AuthenticationService.prototype.getUserName = function () {
        var authRecord = JSON.parse(localStorage.getItem('mdds-auth-record'));
        if (!authRecord) {
            authRecord = { userName: '' };
        }
        return authRecord['userName'];
    };
    AuthenticationService.prototype.login = function (userName, password) {
        var authRecord = {
            userName: userName,
            accessToken: '',
            refreshToken: '',
            displayName: ''
        };
        localStorage.setItem('mdds-auth-record', JSON.stringify(authRecord));
        var options = this.adminInterface ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('type', 'admin') } : {};
        return this.http.post(this.authServerRootUri + '/login', { username: userName, password: password }, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.loggedIn));
    };
    AuthenticationService.prototype.register = function (userInfo) {
        localStorage.removeItem('mdds-auth-record');
        var authRecord = {
            userName: userInfo.userName,
            accessToken: '',
            refreshToken: '',
            displayName: userInfo.displayName
        };
        localStorage.setItem('mdds-auth-record', JSON.stringify(authRecord));
        var options = this.adminInterface ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('type', 'admin') } : {};
        return this.http.post(this.authServerRootUri + '/register', userInfo, options);
    };
    AuthenticationService.prototype.loggedIn = function (user) {
        var authRecord = {
            userName: '',
            accessToken: '',
            refreshToken: '',
            displayName: ''
        };
        if (user && user.accessToken) {
            authRecord['accessToken'] = user.accessToken;
        }
        if (user && user.refreshToken) {
            authRecord['refreshToken'] = user.refreshToken;
        }
        if (user && user.displayName) {
            authRecord['displayName'] = user.displayName;
        }
        if (user && user.userName) {
            authRecord['userName'] = user.userName;
        }
        localStorage.setItem('mdds-auth-record', JSON.stringify(authRecord));
        return user;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        var authRecord = JSON.parse(localStorage.getItem('mdds-auth-record'));
        if (!authRecord) {
            authRecord = {};
        }
        authRecord.logoutTs = Date.now();
        authRecord.accessToken = '';
        authRecord.refreshToken = '';
        localStorage.setItem('mdds-auth-record', JSON.stringify(authRecord));
    };
    AuthenticationService.prototype.setAdminInterface = function (isAdminInterface) {
        this.adminInterface = isAdminInterface;
        localStorage.setItem('adminInterface', JSON.stringify(isAdminInterface));
    };
    AuthenticationService.prototype.isAdminInterface = function () {
        return this.adminInterface;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_4__["AUTHTICATION_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [String, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/auth/login/index.ts":
/*!*************************************!*\
  !*** ./src/app/auth/login/index.ts ***!
  \*************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\" (click)=\"onSubmit();\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['../register']\" class=\"btn btn-link\">Register</a>\n        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-link float-right\">Cancel</button>\n    </div>\n    <div *ngIf=\"servererror\" style=\"display: block;\" class=\"invalid-feedback\">\n  \t\t{{serverText}}\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.servererror = false;
        this.serverText = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var returnUrl = this.authenticationService.getInterruptedUrl();
        if (this.router.url === returnUrl) {
            returnUrl = '/';
        } // home page
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.servererror = false;
            _this.router.navigate([returnUrl]);
            _this.loading = false;
        }, function (error) {
            // this.alertService.error(error);
            _this.servererror = true;
            _this.serverText = error.error.error;
            _this.loading = false;
        });
    };
    LoginComponent.prototype.cancel = function () {
        var routedFromUrl = this.authenticationService.getRoutedFromUrl();
        this.router.navigate([routedFromUrl]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"), styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/index.ts":
/*!****************************************!*\
  !*** ./src/app/auth/register/index.ts ***!
  \****************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback {\n    width: 100%;\n    margin-top: .25rem;\n    font-size: 80%;\n    color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgY29sb3I6ICNkYzM1NDU7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password_conf\">Confirm Password</label>\n        <input type=\"password\" formControlName=\"password_conf\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password_conf.errors }\" />\n        <div *ngIf=\"submitted && f.password_conf.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password_conf.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password_conf.errors.minlength\">Password must be at least 6 characters</div>\n            <div *ngIf=\"f.password_conf.errors.passwordNotSame\">Password doesn't match.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n\n        <a [routerLink]=\"['../login']\" class=\"btn btn-link\">Login</a>\n        <button (click)=\"cancel()\" class=\"btn btn-link float-right\">Cancel</button>\n    </div>\n    <div *ngIf=\"servererror\" style=\"display: block;\" class=\"invalid-feedback\">\n  \t\t{{serverText}}\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var validatePasswords = function (form) {
    var passwordConf = form.controls.password_conf.value;
    var password = form.controls.password.value;
    if (passwordConf === password) {
        return null;
    }
    else {
        form.controls.password_conf.setErrors({ 'passwordNotSame': true });
        return null;
    }
};
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, route, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.servererror = false;
        this.serverText = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            password_conf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, { validator: validatePasswords });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            _this.router.navigate(['../login'], { relativeTo: _this.route, });
            _this.servererror = false;
        }, function (error) {
            // this.alertService.error(error);
            // alert("Error login");
            _this.servererror = true;
            _this.serverText = error.error.error;
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.cancel = function () {
        var routedFromUrl = this.authenticationService.getRoutedFromUrl();
        this.router.navigate([routedFromUrl]);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"), styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/tokens.ts":
/*!********************************!*\
  !*** ./src/app/auth/tokens.ts ***!
  \********************************/
/*! exports provided: AUTHTICATION_SERVER_ROOT_URI, AUTHTICATION_LOGIN_PAGE_URI, AUTHTICATION_INTERFACES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHTICATION_SERVER_ROOT_URI", function() { return AUTHTICATION_SERVER_ROOT_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHTICATION_LOGIN_PAGE_URI", function() { return AUTHTICATION_LOGIN_PAGE_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHTICATION_INTERFACES", function() { return AUTHTICATION_INTERFACES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AUTHTICATION_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AUTHTICATION_SERVER_ROOT_URI');
var AUTHTICATION_LOGIN_PAGE_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AUTHTICATION_LOGIN_PAGE_URI');
var AUTHTICATION_INTERFACES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AUTHTICATION_INTERFACES');


/***/ }),

/***/ "./src/app/home/event/event.component.css":
/*!************************************************!*\
  !*** ./src/app/home/event/event.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/event/event.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/event/event.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size:70px\">Latest News</p>\n\n<ul>\n  <li class=\"\" *ngFor=\"let event of events\">\n  \t\t<p style=\"font-size:1.5em\"><a routerLink=\"/public/event/{{event._id}}\" >{{event.title}}</a>: {{event.publishDate}}</p>\n  </li>\n</ul>  "

/***/ }),

/***/ "./src/app/home/event/event.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/event/event.component.ts ***!
  \***********************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _publicinfo_event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../publicinfo/event/event.service */ "./src/app/publicinfo/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(eventService) {
        var _this = this;
        this.eventService = eventService;
        var result = this.eventService.getList(1, 25, {}).subscribe(function (result) {
            _this.events = result.items;
            for (var _i = 0, _a = _this.events; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
                var utcDate = event_1.publishDate;
                var localDate = new Date(utcDate);
                event_1.publishDate = localDate.toLocaleDateString("en-US", options);
            }
        });
    }
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-event-component',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/home/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/home/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_publicinfo_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/home/faq/faq.component.css":
/*!********************************************!*\
  !*** ./src/app/home/faq/faq.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZmFxL2ZhcS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/faq/faq.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/faq/faq.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size:70px;\">Frequently Asked Questions</p>\n\n<ul>\n  <li class=\"\" *ngFor=\"let faq of faqs\" style=\"font-size:1.5em\">{{faq.question}}: {{faq.answer}}</li>\n</ul>  "

/***/ }),

/***/ "./src/app/home/faq/faq.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/faq/faq.component.ts ***!
  \*******************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _publicinfo_faq_faq_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../publicinfo/faq/faq.service */ "./src/app/publicinfo/faq/faq.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqService) {
        var _this = this;
        this.faqService = faqService;
        var result = this.faqService.getList(1, 25, {}).subscribe(function (result) {
            _this.faqs = result.items;
        });
    }
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-faq-component',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/home/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/home/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [_publicinfo_faq_faq_service__WEBPACK_IMPORTED_MODULE_1__["FaqService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption {\n\tbottom: 300px;\n}\n\n.new-carousel-subcaption {\n\tfont-size: 2rem;\n}\n\n.carousel-inner img {\n\twidth: 100%;\n}\n\n.horizontal {\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jYXB0aW9uIHtcblx0Ym90dG9tOiAzMDBweDtcbn1cblxuLm5ldy1jYXJvdXNlbC1zdWJjYXB0aW9uIHtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcblx0d2lkdGg6IDEwMCU7XG59XG4uaG9yaXpvbnRhbCB7XG5cdHdpZHRoOiA4MCU7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slides\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#slides\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#slides\" data-slide-to=\"1\"></li>\n    <li data-target=\"#slides\" data-slide-to=\"2\"></li>\n  </ul>\n\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"{{imageObject[0].imageURL}}\" alt=\"We Work Together for a Better Tomorrow\">\n      \t<div class=\"carousel-caption d-none d-md-block\">\n    \t\t<p style=\"font-size:70px;\">{{imageObject[0].heading}}</p>\n  \t\t</div>\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#slides\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#slides\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n  <!-- End of The slideshow -->\n</div>\n\n <div class=\"mt-3\">\n    <div class=\"horizontal\">\n            <home-event-component></home-event-component>\n    </div>\n    \n    <hr/>\n    \n    <div class=\"horizontal\">\n          <introduction-component></introduction-component>\n    </div>\n    \n    <hr/>\n    \n    <div class=\"horizontal\">\n          <home-faq-component></home-faq-component>\n    </div>\n   \n\n </div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageObject = [{
                imageURL: 'assets/images/work.jpg',
                heading: 'We Work Together for a Better Tomorrow',
            }];
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/event.component */ "./src/app/home/event/event.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/home/faq/faq.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/home/introduction/introduction.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [
                _event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__["IntroductionComponent"],
            ],
            providers: [],
            exports: [
                _event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__["IntroductionComponent"],
            ],
            entryComponents: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/introduction/introduction.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/introduction/introduction.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    font-weight: 700;\n    color: #00BFFF;\n}\n\np {\n    font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMEJGRkY7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/home/introduction/introduction.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/introduction/introduction.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size:70px\">Top Reasons to choose Light of Knowledge</p>\n\n<ul>\n  <p class=\"WhatLKAClass\" style=\"line-height:28px;\"></p>\n  <p class=\"WhyLKAClass\" style=\"line-height:28px;\"></p>\n</ul>\n\n<div *ngFor=\"let item of list\">\n  <h2>{{item.title}}</h2>\n  <p>{{item.description}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/home/introduction/introduction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/introduction/introduction.component.ts ***!
  \*************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _publicinfo_generalinfo_generalinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../publicinfo/generalinfo/generalinfo.service */ "./src/app/publicinfo/generalinfo/generalinfo.service.ts");
/* harmony import */ var _publicinfo_generalinfo_generalinfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../publicinfo/generalinfo/generalinfo.component */ "./src/app/publicinfo/generalinfo/generalinfo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IntroductionComponent = /** @class */ (function (_super) {
    __extends(IntroductionComponent, _super);
    function IntroductionComponent(generalinfoService, injector, router, route, location) {
        var _this = _super.call(this, generalinfoService, injector, router, route, location, _publicinfo_generalinfo_generalinfo_component__WEBPACK_IMPORTED_MODULE_4__["ViewType"].LIST) || this;
        _this.generalinfoService = generalinfoService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('title');
        _this.stringFields.push('description');
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'introduction-component',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/home/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/home/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [_publicinfo_generalinfo_generalinfo_service__WEBPACK_IMPORTED_MODULE_3__["GeneralinfoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}(_publicinfo_generalinfo_generalinfo_component__WEBPACK_IMPORTED_MODULE_4__["GeneralinfoComponent"]));

//export class IntroductionComponent {
//	private WhatTitle = 'What is LKA?';
//	private WhatContent = 'Write introduction to LKA here..';
//	private WhyTitle = 'Why you should be here?';
//	private WhyContent = 'Write reasons here...';
//	private MissionTitle = 'What is LKA\'s Mission?';
//	private MissionContent = 'Write missions here...';
//	
//	
// }


/***/ }),

/***/ "./src/app/home/public-routing.ts":
/*!****************************************!*\
  !*** ./src/app/home/public-routing.ts ***!
  \****************************************/
/*! exports provided: publicRoutingPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicRoutingPath", function() { return publicRoutingPath; });
/* harmony import */ var _publicinfo_event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicinfo/event/event-detail/event-detail.component */ "./src/app/publicinfo/event/event-detail/event-detail.component.ts");

var publicRoutingPath = [
    { path: 'event/:id', component: _publicinfo_event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailComponent"] },
];


/***/ }),

/***/ "./src/app/lifehacks.conf.ts":
/*!***********************************!*\
  !*** ./src/app/lifehacks.conf.ts ***!
  \***********************************/
/*! exports provided: LifehacksRoutes, lifehacks_server_root_uri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifehacksRoutes", function() { return LifehacksRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifehacks_server_root_uri", function() { return lifehacks_server_root_uri; });
/* harmony import */ var _lifehacks_lifehacks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lifehacks/lifehacks.component */ "./src/app/lifehacks/lifehacks.component.ts");
/* harmony import */ var _lifehacks_lifehacks_routing_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifehacks/lifehacks-routing.path */ "./src/app/lifehacks/lifehacks-routing.path.ts");

//Import routing paths

var LifehacksRoutes = [
    { path: 'lifehacks',
        component: _lifehacks_lifehacks_component__WEBPACK_IMPORTED_MODULE_0__["LifehacksComponent"],
        children: [
            { path: '', redirectTo: 'hack', pathMatch: 'full' },
            { path: "hack",
                children: _lifehacks_lifehacks_routing_path__WEBPACK_IMPORTED_MODULE_1__["hackRoutingPath"],
                data: { "mraLevel": 1, "item": "hack" }
            },
            { path: "liferhack",
                children: _lifehacks_lifehacks_routing_path__WEBPACK_IMPORTED_MODULE_1__["liferhackRoutingPath"],
                data: { "mraLevel": 1, "item": "liferhack" }
            },
            { path: "lifer",
                children: _lifehacks_lifehacks_routing_path__WEBPACK_IMPORTED_MODULE_1__["liferRoutingPath"],
                data: { "mraLevel": 1, "item": "lifer" }
            },
        ]
    }
];
var lifehacks_server_root_uri = "/api/lifehacks";


/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #LifehacksModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ItemCamelName}} Detail</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\n<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Title</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['title']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Description</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['description']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n</div>\n\n\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.ts ***!
  \*************************************************************************/
/*! exports provided: HackDetailPopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackDetailPopComponent", function() { return HackDetailPopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hack-detail.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.ts");
/* harmony import */ var _hack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackDetailPopComponent = /** @class */ (function (_super) {
    __extends(HackDetailPopComponent, _super);
    function HackDetailPopComponent(hackService, injector, router, route, location) {
        var _this = _super.call(this, hackService, injector, router, route, location) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.majorUi = false;
        return _this;
    }
    HackDetailPopComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.inputData;
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HackDetailPopComponent.prototype, "inputData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HackDetailPopComponent.prototype, "outputData", void 0);
    HackDetailPopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack-detail-pop',
            template: __webpack_require__(/*! ./hack-detail-pop.component.html */ "./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.html"),
            styles: [__webpack_require__(/*! ./hack-detail.component.css */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_hack_service__WEBPACK_IMPORTED_MODULE_4__["HackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HackDetailPopComponent);
    return HackDetailPopComponent;
}(_hack_detail_component__WEBPACK_IMPORTED_MODULE_3__["HackDetailComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #LifehacksModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Selected {{ItemCamelName}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\n\n<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <a routerLink=\".\" (click)=\"detailSelBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back to list\">&nbsp; {{ItemCamelName}} List</i></a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"detailSelSelected()\">Select</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail</h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Title</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['title']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Description</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['description']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n</div>\n\n\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.ts ***!
  \*************************************************************************/
/*! exports provided: HackDetailSelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackDetailSelComponent", function() { return HackDetailSelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hack-detail.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.ts");
/* harmony import */ var _hack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackDetailSelComponent = /** @class */ (function (_super) {
    __extends(HackDetailSelComponent, _super);
    function HackDetailSelComponent(hackService, injector, router, route, location) {
        var _this = _super.call(this, hackService, injector, router, route, location) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.majorUi = false;
        return _this;
    }
    HackDetailSelComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.inputData;
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HackDetailSelComponent.prototype, "inputData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HackDetailSelComponent.prototype, "outputData", void 0);
    HackDetailSelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack-detail-sel',
            template: __webpack_require__(/*! ./hack-detail-sel.component.html */ "./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.html"),
            styles: [__webpack_require__(/*! ./hack-detail.component.css */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_hack_service__WEBPACK_IMPORTED_MODULE_4__["HackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HackDetailSelComponent);
    return HackDetailSelComponent;
}(_hack_detail_component__WEBPACK_IMPORTED_MODULE_3__["HackDetailComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list {\n\tfloat: left;\n\tdisplay: inline-block;\n\t/*margin-left: 2.5rem;*/\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2hhY2svaGFjay1kZXRhaWwvaGFjay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7Q0FDcEIsZUFBZTtBQUNoQjs7QUFDQTs7OztDQUlDOztBQUNEO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xpZmVoYWNrcy9oYWNrL2hhY2stZGV0YWlsL2hhY2stZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcblx0d2lkdGg6IDc1JTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5mYS1hbmdsZS1kb3VibGUtbGVmdCwgLmZhLWxpc3Qge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQvKm1hcmdpbi1sZWZ0OiAyLjVyZW07Ki9cblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zIHNwYW4ge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMHJlbTtcblx0bWFyZ2luLXRvcDogIDAuNXJlbVxufVxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuLypcbi5jYXJkIHNwYW4ge1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiovXG4ucmVmZXJyZWQtYnktbGlua3Mge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t\t<a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDelete(detail['_id'], null)\">Delete</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail\n\t    \t<a class=\"float-right\" style=\"font-size: 1rem;\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t    </h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Title</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['title']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Description</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['description']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n\t<br/>\n\t\n\t<ul class=\"nav nav-tabs\">\n\t  \n\t    <li class=\"nav-item\">\n\t    <a [routerLink]=\"['./liferhack/list']\"\n\t        class=\"nav-link\" routerLinkActive=\"active\">LiferHack</a>\n\t  </li>\n    </ul>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-detail/hack-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: HackDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackDetailComponent", function() { return HackDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hack.component */ "./src/app/lifehacks/hack/hack.component.ts");
/* harmony import */ var _hack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackDetailComponent = /** @class */ (function (_super) {
    __extends(HackDetailComponent, _super);
    function HackDetailComponent(hackService, injector, router, route, location) {
        var _this = _super.call(this, hackService, injector, router, route, location, _hack_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('title');
        _this.stringFields.push('description');
        return _this;
    }
    HackDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HackDetailComponent.prototype, "id", void 0);
    HackDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack-detail',
            template: __webpack_require__(/*! ./hack-detail.component.html */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.html"),
            styles: [__webpack_require__(/*! ./hack-detail.component.css */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_hack_service__WEBPACK_IMPORTED_MODULE_4__["HackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HackDetailComponent);
    return HackDetailComponent;
}(_hack_component__WEBPACK_IMPORTED_MODULE_3__["HackComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-edit/hack-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2hhY2svaGFjay1lZGl0L2hhY2stZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7Q0FDcEIsZUFBZTtBQUNoQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBRUQ7RUFDRSw4QkFBOEIsRUFBRSxRQUFRO0FBQzFDOztBQUVBO0NBQ0MseUJBQXlCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZUFBZTs7RUFFZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsSUFBSSx5Q0FBeUM7SUFDL0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxNQUFNO0lBQ04sYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWhhY2tzL2hhY2svaGFjay1lZGl0L2hhY2stZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuZmllbGRzZXQgPiAuZm9ybS1jb250cm9sLCAuaW5wdXQtZ3JvdXAsIC5mb3JtLWNoZWNrLCAuYWxlcnQge1xuXHR3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zLWNlbnRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cblxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsIC5pY29uLWNsZWFyIHtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwID4gc3BhbiB7XG5tYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTsgICAvKiB0ZXh0IDEgKyBsZWZ0IDAuNSArIHJpZ2h0IDAuNSA9IDIgcmVtKi9cbiAgICBib3JkZXI6IDA7XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZS1zbSB7XG4gICAgei1pbmRleDogMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-edit/hack-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} Hack</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('title')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditTitle\">Title</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditTitle\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['title']\" name=\"EditTitle\"\n\t\t                #EditTitle=\"ngModel\">\n                <div *ngIf=\"detail['title']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('title')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditTitle.valid || EditTitle.pristine || EditTitle.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditTitle.errors && EditTitle.errors.required\">\n    \t        Title is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('description')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditDescription\">Description</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditDescription\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['description']\" name=\"EditDescription\"\n\t\t                #EditDescription=\"ngModel\">\n                <div *ngIf=\"detail['description']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('description')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditDescription.valid || EditDescription.pristine || EditDescription.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditDescription.errors && EditDescription.errors.required\">\n    \t        Description is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('title')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditTitle\">Title</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditTitle\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['title']\" name=\"EditTitle\"\n\t\t                #EditTitle=\"ngModel\">\n                <div *ngIf=\"detail['title']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('title')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditTitle.valid || EditTitle.pristine || EditTitle.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditTitle.errors && EditTitle.errors.required\">\n    \t        Title is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('description')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditDescription\">Description</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditDescription\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['description']\" name=\"EditDescription\"\n\t\t                #EditDescription=\"ngModel\">\n                <div *ngIf=\"detail['description']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('description')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditDescription.valid || EditDescription.pristine || EditDescription.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditDescription.errors && EditDescription.errors.required\">\n    \t        Description is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-edit/hack-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: HackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackEditComponent", function() { return HackEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hack.component */ "./src/app/lifehacks/hack/hack.component.ts");
/* harmony import */ var _hack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackEditComponent = /** @class */ (function (_super) {
    __extends(HackEditComponent, _super);
    function HackEditComponent(hackService, injector, router, route, location) {
        var _this = _super.call(this, hackService, injector, router, route, location, _hack_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.stringFields.push('title');
        _this.stringFields.push('description');
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    HackEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {};
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {};
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HackEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HackEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HackEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HackEditComponent.prototype, "done", void 0);
    HackEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack-edit',
            template: __webpack_require__(/*! ./hack-edit.component.html */ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.html"),
            styles: [__webpack_require__(/*! ./hack-edit.component.css */ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_hack_service__WEBPACK_IMPORTED_MODULE_4__["HackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HackEditComponent);
    return HackEditComponent;
}(_hack_component__WEBPACK_IMPORTED_MODULE_3__["HackComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack-list/hack-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-list/hack-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2hhY2svaGFjay1saXN0L2hhY2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBR0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsSUFBSSx5Q0FBeUM7SUFDL0QsU0FBUztBQUNiOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFHQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUEsZ0NBQWdDOztBQUM1QjtNQUNFLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0FBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7O0FBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMsWUFBWTtJQUNkOztBQUNBO01BQ0Usd0NBQXdDO0lBQzFDOztBQUVBO0VBQ0YsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtJQUNsQjs7QUFFSjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWhhY2tzL2hhY2svaGFjay1saXN0L2hhY2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuXHRtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbnRkIGkge1xuXHRjb2xvcjpibGFjaztcblx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcblx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG50ZCBhIGk6aG92ZXIge1xuXHRjb2xvcjogYmx1ZTtcbn1cbnRkIGEgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuXHR3aWR0aDogMTAwJTtcblx0ZmxvYXQ6cmlnaHQ7IFxuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuXG4ucGFnaW5hdGlvbiBsaSB7XG5cdG1pbi13aWR0aDogMi44cmVtO1xufVxuLnRvdGFsX2NvdW50cyB7XG5cdHBhZGRpbmctdG9wOiAwLjhyZW07XG59XG5cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24tY2xlYXIge1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4ucmVmaW5lLXNlYXJjaC10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07IC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgY29sb3I6ICM4NjgxODE7XG59XG5cbi5zZWxlY3QtbW9kZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHotaW5kZXg6IDEwMDA7IFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIC8qbWFyZ2luOiBhdXRvOyovXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbn1cblxudGFibGUge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2xpY2tlZC1yb3cge1xuYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbn1cbi5zZWxlY3RlZC1yb3cge1xuYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVlYjtcbn1cblxuXG50ciB0aDpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDo4JTtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0IHtcblx0XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0ID4gLnJvdyB7XG5cdHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi8qTmRiRGF0ZVBpY2tlciBSYW5nZSBTZWxlY3RvciAqL1xuICAgIC5jdXN0b20tZGF5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICB9XG4gICAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmN1c3RvbS1kYXkuZmFkZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbiAgICB9XG4gICAgXG4gICAgLmRhdGUtc2VsZWN0aW9uLXBvcCB7XG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0dG9wOjEwMCU7XG5cdFx0bGVmdDowO1xuXHRcdHotaW5kZXg6MTAwMDtcblx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdGZsb2F0OmxlZnQ7XG5cdFx0bWluLXdpZHRoOjEwcmVtO1xuXHRcdC8qcGFkZGluZzouNXJlbSAwOyovXG5cdFx0bWFyZ2luOi4xMjVyZW0gMCAwO1xuXHRcdGZvbnQtc2l6ZToxcmVtO1xuXHRcdGNvbG9yOiMyMTI1Mjk7XG5cdFx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRcdGxpc3Qtc3R5bGU6bm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5cdFx0YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O1xuXHRcdGJvcmRlcjrCoDFweCBzb2xpZMKgI2RmZGZkZjtcblx0XHRib3JkZXItcmFkaXVzOi4yNXJlbTtcbiAgICB9XG4gICAgXG4uYWRkLWFyZWEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-list/hack-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-list/hack-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"hackTextSearch\" \n\t\t\t\t\t\t#hackTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for title\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDeleteSelected()\"\n\t\t\t\t\t\t[ngClass]=\"{'disabled': !isItemSelected()}\">Delete</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t\t<a class=\"float-right\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Title</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:6rem;\"></th>\n\t\t        <th scope=\"col\" style=\"width:2rem;\">\n\t\t        \t<input type=\"checkbox\" [(ngModel)]=\"checkAll\" (change)=\"onCheckAllChange()\">\n\t\t        </th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t{{(page-1)*per_page+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['title']}} \n\n\t            </td>\n\t            \n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\t            </td>\n\t            \n\t            <td>      \n\t            \t<input type=\"checkbox\" [(ngModel)]=\"checkedItem[i]\"/>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-list/hack-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-list/hack-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: HackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackListComponent", function() { return HackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hack.component */ "./src/app/lifehacks/hack/hack.component.ts");
/* harmony import */ var _hack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackListComponent = /** @class */ (function (_super) {
    __extends(HackListComponent, _super);
    function HackListComponent(hackService, injector, router, route, location) {
        var _this = _super.call(this, hackService, injector, router, route, location, _hack_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('title');
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    HackListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    HackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack-list',
            template: __webpack_require__(/*! ./hack-list.component.html */ "./src/app/lifehacks/hack/hack-list/hack-list.component.html"),
            styles: [__webpack_require__(/*! ./hack-list.component.css */ "./src/app/lifehacks/hack/hack-list/hack-list.component.css")]
        }),
        __metadata("design:paramtypes", [_hack_service__WEBPACK_IMPORTED_MODULE_4__["HackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HackListComponent);
    return HackListComponent;
}(_hack_component__WEBPACK_IMPORTED_MODULE_3__["HackComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack-list/hack-select.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-list/hack-select.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #LifehacksModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Select {{ItemCamelName}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"hackTextSearch\" \n\t\t\t\t\t\t#hackTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for title\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Title</th>\n\n\t\t        <th></th>      \n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" \n\t        \t[ngClass]=\"{'clicked-row': detail['_id']==clickedId}\" >\n\t            <td scope=\"row\" (click)=\"selectItemSelected(i)\"  class=\"pointer\">{{(page-1)*per_page+i+1}}</td>\n\n\t            <td (click)=\"selectItemSelected(i)\"  class=\"pointer\">                  {{detail['title']}} \n\n\t            </td>\n\n\t            <td><a routerLink=\".\" class=\"btn\" \n\t                 [ngClass]=\"{'btn-primary': detail['_id']==selectedId, 'btn-outline-primary': detail['_id']!==selectedId}\"\n\t            \t (click)=\"selectViewDetail(i)\">View Details</a>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n\n"

/***/ }),

/***/ "./src/app/lifehacks/hack/hack-list/hack-select.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/lifehacks/hack/hack-list/hack-select.component.ts ***!
  \*******************************************************************/
/*! exports provided: HackSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackSelectComponent", function() { return HackSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hack-list.component */ "./src/app/lifehacks/hack/hack-list/hack-list.component.ts");
/* harmony import */ var _hack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackSelectComponent = /** @class */ (function (_super) {
    __extends(HackSelectComponent, _super);
    function HackSelectComponent(hackService, injector, router, route, location) {
        var _this = _super.call(this, hackService, injector, router, route, location) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.majorUi = false;
        return _this;
    }
    HackSelectComponent.prototype.ngOnInit = function () {
        this.selectedId = this.inputData;
        this.populateList();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HackSelectComponent.prototype, "inputData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HackSelectComponent.prototype, "outputData", void 0);
    HackSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack-select',
            template: __webpack_require__(/*! ./hack-select.component.html */ "./src/app/lifehacks/hack/hack-list/hack-select.component.html"),
            styles: [__webpack_require__(/*! ./hack-list.component.css */ "./src/app/lifehacks/hack/hack-list/hack-list.component.css")]
        }),
        __metadata("design:paramtypes", [_hack_service__WEBPACK_IMPORTED_MODULE_4__["HackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HackSelectComponent);
    return HackSelectComponent;
}(_hack_list_component__WEBPACK_IMPORTED_MODULE_3__["HackListComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack.base.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/lifehacks/hack/hack.base.service.ts ***!
  \*****************************************************/
/*! exports provided: HackBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackBaseService", function() { return HackBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/hack/';
var HackBaseService = /** @class */ (function (_super) {
    __extends(HackBaseService, _super);
    function HackBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return HackBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lifehacks/hack/hack.component.ts ***!
  \**************************************************/
/*! exports provided: ViewType, HackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackComponent", function() { return HackComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var itemCamelName = 'hack';



var HackComponent = /** @class */ (function (_super) {
    __extends(HackComponent, _super);
    function HackComponent(hackService, injector, router, route, location, view) {
        var _this = _super.call(this, hackService, injector, router, route, location, view, itemCamelName) || this;
        _this.hackService = hackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.indexFields = ['title',];
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('LifehacksModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HackComponent.prototype, "focusEl", void 0);
    return HackComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/hack/hack.service.ts":
/*!************************************************!*\
  !*** ./src/app/lifehacks/hack/hack.service.ts ***!
  \************************************************/
/*! exports provided: HackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackService", function() { return HackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hack_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hack.base.service */ "./src/app/lifehacks/hack/hack.base.service.ts");
/* harmony import */ var _lifehacks_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifehacks.tokens */ "./src/app/lifehacks/lifehacks.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HackService = /** @class */ (function (_super) {
    __extends(HackService, _super);
    function HackService(http, lifehacksServerRootUri) {
        var _this = _super.call(this, http, lifehacksServerRootUri) || this;
        _this.lifehacksServerRootUri = lifehacksServerRootUri;
        return _this;
    }
    HackService.prototype.ngOnDestroy = function () { };
    HackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_lifehacks_tokens__WEBPACK_IMPORTED_MODULE_3__["Lifehacks_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], HackService);
    return HackService;
}(_hack_base_service__WEBPACK_IMPORTED_MODULE_2__["HackBaseService"]));



/***/ }),

/***/ "./src/app/lifehacks/lifehacks-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lifehacks/lifehacks-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LifehacksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifehacksRoutingModule", function() { return LifehacksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony import */ var _lifehacks_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifehacks.conf */ "./src/app/lifehacks.conf.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LifehacksRoutingModule = /** @class */ (function () {
    function LifehacksRoutingModule() {
    }
    LifehacksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_lifehacks_conf__WEBPACK_IMPORTED_MODULE_3__["LifehacksRoutes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"], useClass: mean_rest_angular__WEBPACK_IMPORTED_MODULE_2__["MraRouteReuseStrategy"] },
            ],
        })
    ], LifehacksRoutingModule);
    return LifehacksRoutingModule;
}());



/***/ }),

/***/ "./src/app/lifehacks/lifehacks-routing.path.ts":
/*!*****************************************************!*\
  !*** ./src/app/lifehacks/lifehacks-routing.path.ts ***!
  \*****************************************************/
/*! exports provided: hackRoutingPath, liferhackRoutingPath, liferRoutingPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hackRoutingPath", function() { return hackRoutingPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liferhackRoutingPath", function() { return liferhackRoutingPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liferRoutingPath", function() { return liferRoutingPath; });
/* harmony import */ var _hack_hack_list_hack_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hack/hack-list/hack-list.component */ "./src/app/lifehacks/hack/hack-list/hack-list.component.ts");
/* harmony import */ var _hack_hack_detail_hack_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hack/hack-detail/hack-detail.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.ts");
/* harmony import */ var _hack_hack_edit_hack_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hack/hack-edit/hack-edit.component */ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.ts");
/* harmony import */ var _liferhack_liferhack_list_liferhack_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liferhack/liferhack-list/liferhack-list.component */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.ts");
/* harmony import */ var _liferhack_liferhack_detail_liferhack_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liferhack/liferhack-detail/liferhack-detail.component */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.ts");
/* harmony import */ var _liferhack_liferhack_edit_liferhack_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liferhack/liferhack-edit/liferhack-edit.component */ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.ts");
/* harmony import */ var _liferhack_liferhack_list_liferhack_list_sub_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liferhack/liferhack-list/liferhack-list-sub.component */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.ts");
/* harmony import */ var _lifer_lifer_list_lifer_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifer/lifer-list/lifer-list.component */ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.ts");
/* harmony import */ var _lifer_lifer_detail_lifer_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifer/lifer-detail/lifer-detail.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.ts");
/* harmony import */ var _lifer_lifer_edit_lifer_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifer/lifer-edit/lifer-edit.component */ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.ts");
// Import components for each schema










var liferhackSubPath = [
    { path: 'list', component: _liferhack_liferhack_list_liferhack_list_sub_component__WEBPACK_IMPORTED_MODULE_6__["LiferhackListSubComponent"] }
];
var hackDetailPath = [
    { path: 'liferhack', children: liferhackSubPath,
        data: { 'mraLevel': 2, 'item': 'liferhack' } },
];
var liferDetailPath = [
    { path: 'liferhack', children: liferhackSubPath,
        data: { 'mraLevel': 2, 'item': 'liferhack' } },
];
var hackRoutingPath = [
    { path: 'list', component: _hack_hack_list_hack_list_component__WEBPACK_IMPORTED_MODULE_0__["HackListComponent"] },
    { path: 'detail/:id', component: _hack_hack_detail_hack_detail_component__WEBPACK_IMPORTED_MODULE_1__["HackDetailComponent"], children: hackDetailPath },
    { path: 'edit/:id', component: _hack_hack_edit_hack_edit_component__WEBPACK_IMPORTED_MODULE_2__["HackEditComponent"] },
    { path: 'new', component: _hack_hack_edit_hack_edit_component__WEBPACK_IMPORTED_MODULE_2__["HackEditComponent"] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];
var liferhackRoutingPath = [
    { path: 'list', component: _liferhack_liferhack_list_liferhack_list_component__WEBPACK_IMPORTED_MODULE_3__["LiferhackListComponent"] },
    { path: 'detail/:id', component: _liferhack_liferhack_detail_liferhack_detail_component__WEBPACK_IMPORTED_MODULE_4__["LiferhackDetailComponent"] },
    { path: 'edit/:id', component: _liferhack_liferhack_edit_liferhack_edit_component__WEBPACK_IMPORTED_MODULE_5__["LiferhackEditComponent"] },
    { path: 'new', component: _liferhack_liferhack_edit_liferhack_edit_component__WEBPACK_IMPORTED_MODULE_5__["LiferhackEditComponent"] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];
var liferRoutingPath = [
    { path: 'list', component: _lifer_lifer_list_lifer_list_component__WEBPACK_IMPORTED_MODULE_7__["LiferListComponent"] },
    { path: 'detail/:id', component: _lifer_lifer_detail_lifer_detail_component__WEBPACK_IMPORTED_MODULE_8__["LiferDetailComponent"], children: liferDetailPath },
    { path: 'edit/:id', component: _lifer_lifer_edit_lifer_edit_component__WEBPACK_IMPORTED_MODULE_9__["LiferEditComponent"] },
    { path: 'new', component: _lifer_lifer_edit_lifer_edit_component__WEBPACK_IMPORTED_MODULE_9__["LiferEditComponent"] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/lifehacks/lifehacks.component.css":
/*!***************************************************!*\
  !*** ./src/app/lifehacks/lifehacks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmVoYWNrcy9saWZlaGFja3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lifehacks/lifehacks.component.html":
/*!****************************************************!*\
  !*** ./src/app/lifehacks/lifehacks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\t\t<div class=\"card\">\n\t\t  <div class=\"card-header\">\n\t\t\t  <nav class=\"nav nav-pills\">\n\n\t\t\t    <a class=\"nav-item nav-link\" routerLink=\"./hack\" \n\t\t\t    \trouterLinkActive=\"active\">Hack</a>\n\n\t\t\t    <a class=\"nav-item nav-link\" routerLink=\"./lifer\" \n\t\t\t    \trouterLinkActive=\"active\">Lifer</a>\n\n\t\t\t  </nav>\n\t\t  </div>\n\t\t  <div class=\"card-body\">\n\t\t\t<router-outlet></router-outlet>\n\t\t  </div>\n\t\t</div>\n\t</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/lifehacks/lifehacks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lifehacks/lifehacks.component.ts ***!
  \**************************************************/
/*! exports provided: LifehacksRefSelectDirective, LifehacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifehacksRefSelectDirective", function() { return LifehacksRefSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifehacksComponent", function() { return LifehacksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifehacksRefSelectDirective = /** @class */ (function () {
    function LifehacksRefSelectDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    LifehacksRefSelectDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[lifehacks-ref-select]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], LifehacksRefSelectDirective);
    return LifehacksRefSelectDirective;
}());

var LifehacksComponent = /** @class */ (function () {
    function LifehacksComponent() {
    }
    LifehacksComponent.prototype.ngOnInit = function () {
    };
    LifehacksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifehacks',
            template: __webpack_require__(/*! ./lifehacks.component.html */ "./src/app/lifehacks/lifehacks.component.html"),
            styles: [__webpack_require__(/*! ./lifehacks.component.css */ "./src/app/lifehacks/lifehacks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifehacksComponent);
    return LifehacksComponent;
}());



/***/ }),

/***/ "./src/app/lifehacks/lifehacks.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lifehacks/lifehacks.module.ts ***!
  \***********************************************/
/*! exports provided: LifehacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifehacksModule", function() { return LifehacksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony import */ var _lifehacks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lifehacks-routing.module */ "./src/app/lifehacks/lifehacks-routing.module.ts");
/* harmony import */ var _lifehacks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifehacks.component */ "./src/app/lifehacks/lifehacks.component.ts");
/* harmony import */ var _lifehacks_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifehacks.tokens */ "./src/app/lifehacks/lifehacks.tokens.ts");
/* harmony import */ var _lifehacks_conf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lifehacks.conf */ "./src/app/lifehacks.conf.ts");
/* harmony import */ var _hack_hack_list_hack_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hack/hack-list/hack-list.component */ "./src/app/lifehacks/hack/hack-list/hack-list.component.ts");
/* harmony import */ var _hack_hack_detail_hack_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hack/hack-detail/hack-detail.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail.component.ts");
/* harmony import */ var _hack_hack_edit_hack_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hack/hack-edit/hack-edit.component */ "./src/app/lifehacks/hack/hack-edit/hack-edit.component.ts");
/* harmony import */ var _hack_hack_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hack/hack.service */ "./src/app/lifehacks/hack/hack.service.ts");
/* harmony import */ var _liferhack_liferhack_list_liferhack_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./liferhack/liferhack-list/liferhack-list.component */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.ts");
/* harmony import */ var _liferhack_liferhack_detail_liferhack_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./liferhack/liferhack-detail/liferhack-detail.component */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.ts");
/* harmony import */ var _liferhack_liferhack_edit_liferhack_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./liferhack/liferhack-edit/liferhack-edit.component */ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.ts");
/* harmony import */ var _liferhack_liferhack_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./liferhack/liferhack.service */ "./src/app/lifehacks/liferhack/liferhack.service.ts");
/* harmony import */ var _lifer_lifer_list_lifer_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lifer/lifer-list/lifer-list.component */ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.ts");
/* harmony import */ var _lifer_lifer_detail_lifer_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lifer/lifer-detail/lifer-detail.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.ts");
/* harmony import */ var _lifer_lifer_edit_lifer_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lifer/lifer-edit/lifer-edit.component */ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.ts");
/* harmony import */ var _lifer_lifer_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lifer/lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
/* harmony import */ var _lifer_lifer_list_lifer_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lifer/lifer-list/lifer-select.component */ "./src/app/lifehacks/lifer/lifer-list/lifer-select.component.ts");
/* harmony import */ var _lifer_lifer_detail_lifer_detail_pop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lifer/lifer-detail/lifer-detail-pop.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.ts");
/* harmony import */ var _lifer_lifer_detail_lifer_detail_sel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lifer/lifer-detail/lifer-detail-sel.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.ts");
/* harmony import */ var _hack_hack_list_hack_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hack/hack-list/hack-select.component */ "./src/app/lifehacks/hack/hack-list/hack-select.component.ts");
/* harmony import */ var _hack_hack_detail_hack_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hack/hack-detail/hack-detail-pop.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.ts");
/* harmony import */ var _hack_hack_detail_hack_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hack/hack-detail/hack-detail-sel.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.ts");
/* harmony import */ var _liferhack_liferhack_list_liferhack_list_sub_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./liferhack/liferhack-list/liferhack-list-sub.component */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.ts");
/* harmony import */ var _liferhack_liferhack_detail_liferhack_detail_sub_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./liferhack/liferhack-detail/liferhack-detail-sub.component */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail-sub.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Import components for each schema




















var LifehacksModule = /** @class */ (function () {
    function LifehacksModule() {
    }
    LifehacksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                mean_rest_angular__WEBPACK_IMPORTED_MODULE_4__["MraModule"],
                _lifehacks_routing_module__WEBPACK_IMPORTED_MODULE_5__["LifehacksRoutingModule"]
            ],
            declarations: [
                _lifehacks_component__WEBPACK_IMPORTED_MODULE_6__["LifehacksComponent"],
                _lifehacks_component__WEBPACK_IMPORTED_MODULE_6__["LifehacksRefSelectDirective"],
                _hack_hack_list_hack_list_component__WEBPACK_IMPORTED_MODULE_9__["HackListComponent"],
                _hack_hack_detail_hack_detail_component__WEBPACK_IMPORTED_MODULE_10__["HackDetailComponent"],
                _hack_hack_edit_hack_edit_component__WEBPACK_IMPORTED_MODULE_11__["HackEditComponent"],
                _liferhack_liferhack_list_liferhack_list_component__WEBPACK_IMPORTED_MODULE_13__["LiferhackListComponent"],
                _liferhack_liferhack_detail_liferhack_detail_component__WEBPACK_IMPORTED_MODULE_14__["LiferhackDetailComponent"],
                _liferhack_liferhack_edit_liferhack_edit_component__WEBPACK_IMPORTED_MODULE_15__["LiferhackEditComponent"],
                _lifer_lifer_list_lifer_list_component__WEBPACK_IMPORTED_MODULE_17__["LiferListComponent"],
                _lifer_lifer_detail_lifer_detail_component__WEBPACK_IMPORTED_MODULE_18__["LiferDetailComponent"],
                _lifer_lifer_edit_lifer_edit_component__WEBPACK_IMPORTED_MODULE_19__["LiferEditComponent"],
                _lifer_lifer_list_lifer_select_component__WEBPACK_IMPORTED_MODULE_21__["LiferSelectComponent"],
                _lifer_lifer_detail_lifer_detail_pop_component__WEBPACK_IMPORTED_MODULE_22__["LiferDetailPopComponent"],
                _lifer_lifer_detail_lifer_detail_sel_component__WEBPACK_IMPORTED_MODULE_23__["LiferDetailSelComponent"],
                _hack_hack_list_hack_select_component__WEBPACK_IMPORTED_MODULE_24__["HackSelectComponent"],
                _hack_hack_detail_hack_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["HackDetailPopComponent"],
                _hack_hack_detail_hack_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["HackDetailSelComponent"],
                _liferhack_liferhack_list_liferhack_list_sub_component__WEBPACK_IMPORTED_MODULE_27__["LiferhackListSubComponent"],
                _liferhack_liferhack_detail_liferhack_detail_sub_component__WEBPACK_IMPORTED_MODULE_28__["LiferhackDetailSubComponent"],
            ],
            exports: [
                _lifehacks_component__WEBPACK_IMPORTED_MODULE_6__["LifehacksComponent"],
                _hack_hack_list_hack_list_component__WEBPACK_IMPORTED_MODULE_9__["HackListComponent"],
                _hack_hack_detail_hack_detail_component__WEBPACK_IMPORTED_MODULE_10__["HackDetailComponent"],
                _hack_hack_edit_hack_edit_component__WEBPACK_IMPORTED_MODULE_11__["HackEditComponent"],
                _liferhack_liferhack_list_liferhack_list_component__WEBPACK_IMPORTED_MODULE_13__["LiferhackListComponent"],
                _liferhack_liferhack_detail_liferhack_detail_component__WEBPACK_IMPORTED_MODULE_14__["LiferhackDetailComponent"],
                _liferhack_liferhack_edit_liferhack_edit_component__WEBPACK_IMPORTED_MODULE_15__["LiferhackEditComponent"],
                _lifer_lifer_list_lifer_list_component__WEBPACK_IMPORTED_MODULE_17__["LiferListComponent"],
                _lifer_lifer_detail_lifer_detail_component__WEBPACK_IMPORTED_MODULE_18__["LiferDetailComponent"],
                _lifer_lifer_edit_lifer_edit_component__WEBPACK_IMPORTED_MODULE_19__["LiferEditComponent"],
                _lifer_lifer_list_lifer_select_component__WEBPACK_IMPORTED_MODULE_21__["LiferSelectComponent"],
                _lifer_lifer_detail_lifer_detail_pop_component__WEBPACK_IMPORTED_MODULE_22__["LiferDetailPopComponent"],
                _lifer_lifer_detail_lifer_detail_sel_component__WEBPACK_IMPORTED_MODULE_23__["LiferDetailSelComponent"],
                _hack_hack_list_hack_select_component__WEBPACK_IMPORTED_MODULE_24__["HackSelectComponent"],
                _hack_hack_detail_hack_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["HackDetailPopComponent"],
                _hack_hack_detail_hack_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["HackDetailSelComponent"],
                _liferhack_liferhack_list_liferhack_list_sub_component__WEBPACK_IMPORTED_MODULE_27__["LiferhackListSubComponent"],
                _liferhack_liferhack_detail_liferhack_detail_sub_component__WEBPACK_IMPORTED_MODULE_28__["LiferhackDetailSubComponent"],
            ],
            providers: [
                { provide: _lifehacks_tokens__WEBPACK_IMPORTED_MODULE_7__["Lifehacks_SERVER_ROOT_URI"], useValue: _lifehacks_conf__WEBPACK_IMPORTED_MODULE_8__["lifehacks_server_root_uri"] },
                _hack_hack_service__WEBPACK_IMPORTED_MODULE_12__["HackService"],
                _liferhack_liferhack_service__WEBPACK_IMPORTED_MODULE_16__["LiferhackService"],
                _lifer_lifer_service__WEBPACK_IMPORTED_MODULE_20__["LiferService"],
            ],
            entryComponents: [
                _lifer_lifer_list_lifer_select_component__WEBPACK_IMPORTED_MODULE_21__["LiferSelectComponent"],
                _lifer_lifer_detail_lifer_detail_pop_component__WEBPACK_IMPORTED_MODULE_22__["LiferDetailPopComponent"],
                _lifer_lifer_detail_lifer_detail_sel_component__WEBPACK_IMPORTED_MODULE_23__["LiferDetailSelComponent"],
                _hack_hack_list_hack_select_component__WEBPACK_IMPORTED_MODULE_24__["HackSelectComponent"],
                _hack_hack_detail_hack_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["HackDetailPopComponent"],
                _hack_hack_detail_hack_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["HackDetailSelComponent"],
            ]
        })
    ], LifehacksModule);
    return LifehacksModule;
}());



/***/ }),

/***/ "./src/app/lifehacks/lifehacks.tokens.ts":
/*!***********************************************!*\
  !*** ./src/app/lifehacks/lifehacks.tokens.ts ***!
  \***********************************************/
/*! exports provided: Lifehacks_SERVER_ROOT_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lifehacks_SERVER_ROOT_URI", function() { return Lifehacks_SERVER_ROOT_URI; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Lifehacks_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Lifehacks_SERVER_ROOT_URI');


/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #LifehacksModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ItemCamelName}} Detail</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\n<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>First Name</label></div>\n\t\t\t<div class=\"col-3\">                  {{detail['first_name']}} \n</div>\n\n\t\t\t<div class=\"col-3\"><label>Last Name</label></div>\n\t\t\t<div class=\"col-3\">                  {{detail['last_name']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Email</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['email']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n</div>\n\n\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.ts ***!
  \****************************************************************************/
/*! exports provided: LiferDetailPopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferDetailPopComponent", function() { return LiferDetailPopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifer_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifer-detail.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.ts");
/* harmony import */ var _lifer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferDetailPopComponent = /** @class */ (function (_super) {
    __extends(LiferDetailPopComponent, _super);
    function LiferDetailPopComponent(liferService, injector, router, route, location) {
        var _this = _super.call(this, liferService, injector, router, route, location) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.majorUi = false;
        return _this;
    }
    LiferDetailPopComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.inputData;
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiferDetailPopComponent.prototype, "inputData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LiferDetailPopComponent.prototype, "outputData", void 0);
    LiferDetailPopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifer-detail-pop',
            template: __webpack_require__(/*! ./lifer-detail-pop.component.html */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.html"),
            styles: [__webpack_require__(/*! ./lifer-detail.component.css */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_lifer_service__WEBPACK_IMPORTED_MODULE_4__["LiferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferDetailPopComponent);
    return LiferDetailPopComponent;
}(_lifer_detail_component__WEBPACK_IMPORTED_MODULE_3__["LiferDetailComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #LifehacksModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Selected {{ItemCamelName}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\n\n<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <a routerLink=\".\" (click)=\"detailSelBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back to list\">&nbsp; {{ItemCamelName}} List</i></a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"detailSelSelected()\">Select</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail</h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>First Name</label></div>\n\t\t\t<div class=\"col-3\">                  {{detail['first_name']}} \n</div>\n\n\t\t\t<div class=\"col-3\"><label>Last Name</label></div>\n\t\t\t<div class=\"col-3\">                  {{detail['last_name']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Email</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['email']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n</div>\n\n\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.ts ***!
  \****************************************************************************/
/*! exports provided: LiferDetailSelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferDetailSelComponent", function() { return LiferDetailSelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifer_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifer-detail.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.ts");
/* harmony import */ var _lifer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferDetailSelComponent = /** @class */ (function (_super) {
    __extends(LiferDetailSelComponent, _super);
    function LiferDetailSelComponent(liferService, injector, router, route, location) {
        var _this = _super.call(this, liferService, injector, router, route, location) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.majorUi = false;
        return _this;
    }
    LiferDetailSelComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.inputData;
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiferDetailSelComponent.prototype, "inputData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LiferDetailSelComponent.prototype, "outputData", void 0);
    LiferDetailSelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifer-detail-sel',
            template: __webpack_require__(/*! ./lifer-detail-sel.component.html */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.html"),
            styles: [__webpack_require__(/*! ./lifer-detail.component.css */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_lifer_service__WEBPACK_IMPORTED_MODULE_4__["LiferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferDetailSelComponent);
    return LiferDetailSelComponent;
}(_lifer_detail_component__WEBPACK_IMPORTED_MODULE_3__["LiferDetailComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list {\n\tfloat: left;\n\tdisplay: inline-block;\n\t/*margin-left: 2.5rem;*/\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyL2xpZmVyLWRldGFpbC9saWZlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7Q0FDcEIsZUFBZTtBQUNoQjs7QUFDQTs7OztDQUlDOztBQUNEO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xpZmVoYWNrcy9saWZlci9saWZlci1kZXRhaWwvbGlmZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcblx0d2lkdGg6IDc1JTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5mYS1hbmdsZS1kb3VibGUtbGVmdCwgLmZhLWxpc3Qge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQvKm1hcmdpbi1sZWZ0OiAyLjVyZW07Ki9cblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zIHNwYW4ge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMHJlbTtcblx0bWFyZ2luLXRvcDogIDAuNXJlbVxufVxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuLypcbi5jYXJkIHNwYW4ge1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiovXG4ucmVmZXJyZWQtYnktbGlua3Mge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t\t<a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDelete(detail['_id'], null)\">Delete</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail\n\t    \t<a class=\"float-right\" style=\"font-size: 1rem;\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t    </h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>First Name</label></div>\n\t\t\t<div class=\"col-3\">                  {{detail['first_name']}} \n</div>\n\n\t\t\t<div class=\"col-3\"><label>Last Name</label></div>\n\t\t\t<div class=\"col-3\">                  {{detail['last_name']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Email</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['email']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n\t<br/>\n\t\n\t<ul class=\"nav nav-tabs\">\n\t  \n\t    <li class=\"nav-item\">\n\t    <a [routerLink]=\"['./liferhack/list']\"\n\t        class=\"nav-link\" routerLinkActive=\"active\">LiferHack</a>\n\t  </li>\n    </ul>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: LiferDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferDetailComponent", function() { return LiferDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifer.component */ "./src/app/lifehacks/lifer/lifer.component.ts");
/* harmony import */ var _lifer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferDetailComponent = /** @class */ (function (_super) {
    __extends(LiferDetailComponent, _super);
    function LiferDetailComponent(liferService, injector, router, route, location) {
        var _this = _super.call(this, liferService, injector, router, route, location, _lifer_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('first_name');
        _this.stringFields.push('last_name');
        _this.stringFields.push('email');
        return _this;
    }
    LiferDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiferDetailComponent.prototype, "id", void 0);
    LiferDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifer-detail',
            template: __webpack_require__(/*! ./lifer-detail.component.html */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.html"),
            styles: [__webpack_require__(/*! ./lifer-detail.component.css */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_lifer_service__WEBPACK_IMPORTED_MODULE_4__["LiferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferDetailComponent);
    return LiferDetailComponent;
}(_lifer_component__WEBPACK_IMPORTED_MODULE_3__["LiferComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyL2xpZmVyLWVkaXQvbGlmZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7Q0FDcEIsZUFBZTtBQUNoQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBRUQ7RUFDRSw4QkFBOEIsRUFBRSxRQUFRO0FBQzFDOztBQUVBO0NBQ0MseUJBQXlCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZUFBZTs7RUFFZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsSUFBSSx5Q0FBeUM7SUFDL0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxNQUFNO0lBQ04sYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyL2xpZmVyLWVkaXQvbGlmZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuZmllbGRzZXQgPiAuZm9ybS1jb250cm9sLCAuaW5wdXQtZ3JvdXAsIC5mb3JtLWNoZWNrLCAuYWxlcnQge1xuXHR3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zLWNlbnRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cblxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsIC5pY29uLWNsZWFyIHtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwID4gc3BhbiB7XG5tYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTsgICAvKiB0ZXh0IDEgKyBsZWZ0IDAuNSArIHJpZ2h0IDAuNSA9IDIgcmVtKi9cbiAgICBib3JkZXI6IDA7XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZS1zbSB7XG4gICAgei1pbmRleDogMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} Lifer</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('first_name')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditFirst_name\">First Name</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditFirst_name\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['first_name']\" name=\"EditFirst_name\"\n\t\t                #EditFirst_name=\"ngModel\">\n                <div *ngIf=\"detail['first_name']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('first_name')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditFirst_name.valid || EditFirst_name.pristine || EditFirst_name.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditFirst_name.errors && EditFirst_name.errors.required\">\n    \t        First_name is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('last_name')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditLast_name\">Last Name</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditLast_name\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['last_name']\" name=\"EditLast_name\"\n\t\t                #EditLast_name=\"ngModel\">\n                <div *ngIf=\"detail['last_name']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('last_name')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditLast_name.valid || EditLast_name.pristine || EditLast_name.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditLast_name.errors && EditLast_name.errors.required\">\n    \t        Last_name is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('email')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditEmail\">Email</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditEmail\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['email']\" name=\"EditEmail\"\n\t\t                #EditEmail=\"ngModel\">\n                <div *ngIf=\"detail['email']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('email')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditEmail.valid || EditEmail.pristine || EditEmail.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditEmail.errors && EditEmail.errors.required\">\n    \t        Email is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('first_name')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditFirst_name\">First Name</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditFirst_name\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['first_name']\" name=\"EditFirst_name\"\n\t\t                #EditFirst_name=\"ngModel\">\n                <div *ngIf=\"detail['first_name']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('first_name')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditFirst_name.valid || EditFirst_name.pristine || EditFirst_name.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditFirst_name.errors && EditFirst_name.errors.required\">\n    \t        First_name is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('last_name')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditLast_name\">Last Name</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditLast_name\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['last_name']\" name=\"EditLast_name\"\n\t\t                #EditLast_name=\"ngModel\">\n                <div *ngIf=\"detail['last_name']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('last_name')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditLast_name.valid || EditLast_name.pristine || EditLast_name.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditLast_name.errors && EditLast_name.errors.required\">\n    \t        Last_name is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('email')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditEmail\">Email</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditEmail\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['email']\" name=\"EditEmail\"\n\t\t                #EditEmail=\"ngModel\">\n                <div *ngIf=\"detail['email']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('email')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditEmail.valid || EditEmail.pristine || EditEmail.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditEmail.errors && EditEmail.errors.required\">\n    \t        Email is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: LiferEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferEditComponent", function() { return LiferEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifer.component */ "./src/app/lifehacks/lifer/lifer.component.ts");
/* harmony import */ var _lifer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferEditComponent = /** @class */ (function (_super) {
    __extends(LiferEditComponent, _super);
    function LiferEditComponent(liferService, injector, router, route, location) {
        var _this = _super.call(this, liferService, injector, router, route, location, _lifer_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.stringFields.push('first_name');
        _this.stringFields.push('last_name');
        _this.stringFields.push('email');
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    LiferEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {};
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {};
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiferEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiferEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiferEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LiferEditComponent.prototype, "done", void 0);
    LiferEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifer-edit',
            template: __webpack_require__(/*! ./lifer-edit.component.html */ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.html"),
            styles: [__webpack_require__(/*! ./lifer-edit.component.css */ "./src/app/lifehacks/lifer/lifer-edit/lifer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_lifer_service__WEBPACK_IMPORTED_MODULE_4__["LiferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferEditComponent);
    return LiferEditComponent;
}(_lifer_component__WEBPACK_IMPORTED_MODULE_3__["LiferComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-list/lifer-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyL2xpZmVyLWxpc3QvbGlmZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBR0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsSUFBSSx5Q0FBeUM7SUFDL0QsU0FBUztBQUNiOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFHQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUEsZ0NBQWdDOztBQUM1QjtNQUNFLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0FBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7O0FBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMsWUFBWTtJQUNkOztBQUNBO01BQ0Usd0NBQXdDO0lBQzFDOztBQUVBO0VBQ0YsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtJQUNsQjs7QUFFSjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyL2xpZmVyLWxpc3QvbGlmZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuXHRtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbnRkIGkge1xuXHRjb2xvcjpibGFjaztcblx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcblx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG50ZCBhIGk6aG92ZXIge1xuXHRjb2xvcjogYmx1ZTtcbn1cbnRkIGEgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuXHR3aWR0aDogMTAwJTtcblx0ZmxvYXQ6cmlnaHQ7IFxuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuXG4ucGFnaW5hdGlvbiBsaSB7XG5cdG1pbi13aWR0aDogMi44cmVtO1xufVxuLnRvdGFsX2NvdW50cyB7XG5cdHBhZGRpbmctdG9wOiAwLjhyZW07XG59XG5cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24tY2xlYXIge1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4ucmVmaW5lLXNlYXJjaC10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07IC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgY29sb3I6ICM4NjgxODE7XG59XG5cbi5zZWxlY3QtbW9kZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHotaW5kZXg6IDEwMDA7IFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIC8qbWFyZ2luOiBhdXRvOyovXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbn1cblxudGFibGUge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2xpY2tlZC1yb3cge1xuYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbn1cbi5zZWxlY3RlZC1yb3cge1xuYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVlYjtcbn1cblxuXG50ciB0aDpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDo4JTtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0IHtcblx0XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0ID4gLnJvdyB7XG5cdHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi8qTmRiRGF0ZVBpY2tlciBSYW5nZSBTZWxlY3RvciAqL1xuICAgIC5jdXN0b20tZGF5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICB9XG4gICAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmN1c3RvbS1kYXkuZmFkZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbiAgICB9XG4gICAgXG4gICAgLmRhdGUtc2VsZWN0aW9uLXBvcCB7XG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0dG9wOjEwMCU7XG5cdFx0bGVmdDowO1xuXHRcdHotaW5kZXg6MTAwMDtcblx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdGZsb2F0OmxlZnQ7XG5cdFx0bWluLXdpZHRoOjEwcmVtO1xuXHRcdC8qcGFkZGluZzouNXJlbSAwOyovXG5cdFx0bWFyZ2luOi4xMjVyZW0gMCAwO1xuXHRcdGZvbnQtc2l6ZToxcmVtO1xuXHRcdGNvbG9yOiMyMTI1Mjk7XG5cdFx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRcdGxpc3Qtc3R5bGU6bm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5cdFx0YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O1xuXHRcdGJvcmRlcjrCoDFweCBzb2xpZMKgI2RmZGZkZjtcblx0XHRib3JkZXItcmFkaXVzOi4yNXJlbTtcbiAgICB9XG4gICAgXG4uYWRkLWFyZWEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-list/lifer-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"liferTextSearch\" \n\t\t\t\t\t\t#liferTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for first_name, last_name\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDeleteSelected()\"\n\t\t\t\t\t\t[ngClass]=\"{'disabled': !isItemSelected()}\">Delete</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t\t<a class=\"float-right\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">First Name</th>\n\t\t        <th scope=\"col\">Last Name</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:6rem;\"></th>\n\t\t        <th scope=\"col\" style=\"width:2rem;\">\n\t\t        \t<input type=\"checkbox\" [(ngModel)]=\"checkAll\" (change)=\"onCheckAllChange()\">\n\t\t        </th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t{{(page-1)*per_page+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['first_name']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['last_name']}} \n\n\t            </td>\n\t            \n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\t            </td>\n\t            \n\t            <td>      \n\t            \t<input type=\"checkbox\" [(ngModel)]=\"checkedItem[i]\"/>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-list/lifer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: LiferListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferListComponent", function() { return LiferListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifer.component */ "./src/app/lifehacks/lifer/lifer.component.ts");
/* harmony import */ var _lifer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferListComponent = /** @class */ (function (_super) {
    __extends(LiferListComponent, _super);
    function LiferListComponent(liferService, injector, router, route, location) {
        var _this = _super.call(this, liferService, injector, router, route, location, _lifer_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('first_name');
        _this.stringFields.push('last_name');
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    LiferListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    LiferListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifer-list',
            template: __webpack_require__(/*! ./lifer-list.component.html */ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.html"),
            styles: [__webpack_require__(/*! ./lifer-list.component.css */ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_lifer_service__WEBPACK_IMPORTED_MODULE_4__["LiferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferListComponent);
    return LiferListComponent;
}(_lifer_component__WEBPACK_IMPORTED_MODULE_3__["LiferComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-list/lifer-select.component.html":
/*!************************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-list/lifer-select.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #LifehacksModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Select {{ItemCamelName}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"liferTextSearch\" \n\t\t\t\t\t\t#liferTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for first_name, last_name\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">First Name</th>\n\t\t        <th scope=\"col\">Last Name</th>\n\n\t\t        <th></th>      \n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" \n\t        \t[ngClass]=\"{'clicked-row': detail['_id']==clickedId}\" >\n\t            <td scope=\"row\" (click)=\"selectItemSelected(i)\"  class=\"pointer\">{{(page-1)*per_page+i+1}}</td>\n\n\t            <td (click)=\"selectItemSelected(i)\"  class=\"pointer\">                  {{detail['first_name']}} \n\n\t            </td>\n\t            <td (click)=\"selectItemSelected(i)\"  class=\"pointer\">                  {{detail['last_name']}} \n\n\t            </td>\n\n\t            <td><a routerLink=\".\" class=\"btn\" \n\t                 [ngClass]=\"{'btn-primary': detail['_id']==selectedId, 'btn-outline-primary': detail['_id']!==selectedId}\"\n\t            \t (click)=\"selectViewDetail(i)\">View Details</a>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n\n"

/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer-list/lifer-select.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer-list/lifer-select.component.ts ***!
  \**********************************************************************/
/*! exports provided: LiferSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferSelectComponent", function() { return LiferSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifer-list.component */ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.ts");
/* harmony import */ var _lifer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer.service */ "./src/app/lifehacks/lifer/lifer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferSelectComponent = /** @class */ (function (_super) {
    __extends(LiferSelectComponent, _super);
    function LiferSelectComponent(liferService, injector, router, route, location) {
        var _this = _super.call(this, liferService, injector, router, route, location) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.majorUi = false;
        return _this;
    }
    LiferSelectComponent.prototype.ngOnInit = function () {
        this.selectedId = this.inputData;
        this.populateList();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiferSelectComponent.prototype, "inputData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LiferSelectComponent.prototype, "outputData", void 0);
    LiferSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifer-select',
            template: __webpack_require__(/*! ./lifer-select.component.html */ "./src/app/lifehacks/lifer/lifer-list/lifer-select.component.html"),
            styles: [__webpack_require__(/*! ./lifer-list.component.css */ "./src/app/lifehacks/lifer/lifer-list/lifer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_lifer_service__WEBPACK_IMPORTED_MODULE_4__["LiferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferSelectComponent);
    return LiferSelectComponent;
}(_lifer_list_component__WEBPACK_IMPORTED_MODULE_3__["LiferListComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer.base.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer.base.service.ts ***!
  \*******************************************************/
/*! exports provided: LiferBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferBaseService", function() { return LiferBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/lifer/';
var LiferBaseService = /** @class */ (function (_super) {
    __extends(LiferBaseService, _super);
    function LiferBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return LiferBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer.component.ts ***!
  \****************************************************/
/*! exports provided: ViewType, LiferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferComponent", function() { return LiferComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var itemCamelName = 'lifer';



var LiferComponent = /** @class */ (function (_super) {
    __extends(LiferComponent, _super);
    function LiferComponent(liferService, injector, router, route, location, view) {
        var _this = _super.call(this, liferService, injector, router, route, location, view, itemCamelName) || this;
        _this.liferService = liferService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.indexFields = ['email',];
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('LifehacksModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LiferComponent.prototype, "focusEl", void 0);
    return LiferComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/lifer/lifer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/lifehacks/lifer/lifer.service.ts ***!
  \**************************************************/
/*! exports provided: LiferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferService", function() { return LiferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _lifer_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifer.base.service */ "./src/app/lifehacks/lifer/lifer.base.service.ts");
/* harmony import */ var _lifehacks_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifehacks.tokens */ "./src/app/lifehacks/lifehacks.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LiferService = /** @class */ (function (_super) {
    __extends(LiferService, _super);
    function LiferService(http, lifehacksServerRootUri) {
        var _this = _super.call(this, http, lifehacksServerRootUri) || this;
        _this.lifehacksServerRootUri = lifehacksServerRootUri;
        return _this;
    }
    LiferService.prototype.ngOnDestroy = function () { };
    LiferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_lifehacks_tokens__WEBPACK_IMPORTED_MODULE_3__["Lifehacks_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], LiferService);
    return LiferService;
}(_lifer_base_service__WEBPACK_IMPORTED_MODULE_2__["LiferBaseService"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail-sub.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail-sub.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"detail\">\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t\t<div class=\"card-text\">\n      \n\t\t</div>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail-sub.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail-sub.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LiferhackDetailSubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackDetailSubComponent", function() { return LiferhackDetailSubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liferhack_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liferhack-detail.component */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.ts");
/* harmony import */ var _liferhack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../liferhack.service */ "./src/app/lifehacks/liferhack/liferhack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferhackDetailSubComponent = /** @class */ (function (_super) {
    __extends(LiferhackDetailSubComponent, _super);
    function LiferhackDetailSubComponent(liferhackService, injector, router, route, location) {
        var _this = _super.call(this, null, liferhackService, injector, router, route, location) || this;
        _this.liferhackService = liferhackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        return _this;
    }
    LiferhackDetailSubComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.inputData;
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail sub view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiferhackDetailSubComponent.prototype, "inputData", void 0);
    LiferhackDetailSubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liferhack-detail-sub',
            template: __webpack_require__(/*! ./liferhack-detail-sub.component.html */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail-sub.component.html"),
            styles: [__webpack_require__(/*! ./liferhack-detail.component.css */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_liferhack_service__WEBPACK_IMPORTED_MODULE_4__["LiferhackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferhackDetailSubComponent);
    return LiferhackDetailSubComponent;
}(_liferhack_detail_component__WEBPACK_IMPORTED_MODULE_3__["LiferhackDetailComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list {\n\tfloat: left;\n\tdisplay: inline-block;\n\t/*margin-left: 2.5rem;*/\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyaGFjay9saWZlcmhhY2stZGV0YWlsL2xpZmVyaGFjay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7Q0FDcEIsZUFBZTtBQUNoQjs7QUFDQTs7OztDQUlDOztBQUNEO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xpZmVoYWNrcy9saWZlcmhhY2svbGlmZXJoYWNrLWRldGFpbC9saWZlcmhhY2stZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcblx0d2lkdGg6IDc1JTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5mYS1hbmdsZS1kb3VibGUtbGVmdCwgLmZhLWxpc3Qge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQvKm1hcmdpbi1sZWZ0OiAyLjVyZW07Ki9cblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zIHNwYW4ge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMHJlbTtcblx0bWFyZ2luLXRvcDogIDAuNXJlbVxufVxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuLypcbi5jYXJkIHNwYW4ge1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiovXG4ucmVmZXJyZWQtYnktbGlua3Mge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t\t<a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDelete(detail['_id'], null)\">Delete</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail\n\t    \t<a class=\"float-right\" style=\"font-size: 1rem;\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t    </h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Lifer</label></div>\n\t\t\t<div class=\"col-9\">                \n               \t  \n\t            \t{{detail['lifer']?detail['lifer']['value']:\"\"}}\n\t              \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Hack</label></div>\n\t\t\t<div class=\"col-9\">                \n               \t  \n\t            \t{{detail['hack']?detail['hack']['value']:\"\"}}\n\t              \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: LiferhackDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackDetailComponent", function() { return LiferhackDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liferhack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../liferhack.component */ "./src/app/lifehacks/liferhack/liferhack.component.ts");
/* harmony import */ var _liferhack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../liferhack.service */ "./src/app/lifehacks/liferhack/liferhack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiferhackDetailComponent = /** @class */ (function (_super) {
    __extends(LiferhackDetailComponent, _super);
    function LiferhackDetailComponent(componentFactoryResolver, liferhackService, injector, router, route, location) {
        var _this = _super.call(this, componentFactoryResolver, liferhackService, injector, router, route, location, _liferhack_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.liferhackService = liferhackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.referenceFields = ['lifer', 'hack',];
        _this.referenceFieldsMap = { 'lifer': 'lifer', 'hack': 'hack', };
        return _this;
    }
    LiferhackDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiferhackDetailComponent.prototype, "id", void 0);
    LiferhackDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liferhack-detail',
            template: __webpack_require__(/*! ./liferhack-detail.component.html */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.html"),
            styles: [__webpack_require__(/*! ./liferhack-detail.component.css */ "./src/app/lifehacks/liferhack/liferhack-detail/liferhack-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _liferhack_service__WEBPACK_IMPORTED_MODULE_4__["LiferhackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferhackDetailComponent);
    return LiferhackDetailComponent;
}(_liferhack_component__WEBPACK_IMPORTED_MODULE_3__["LiferhackComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyaGFjay9saWZlcmhhY2stZWRpdC9saWZlcmhhY2stZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7Q0FDcEIsZUFBZTtBQUNoQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBRUQ7RUFDRSw4QkFBOEIsRUFBRSxRQUFRO0FBQzFDOztBQUVBO0NBQ0MseUJBQXlCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZUFBZTs7RUFFZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsSUFBSSx5Q0FBeUM7SUFDL0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxNQUFNO0lBQ04sYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyaGFjay9saWZlcmhhY2stZWRpdC9saWZlcmhhY2stZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuZmllbGRzZXQgPiAuZm9ybS1jb250cm9sLCAuaW5wdXQtZ3JvdXAsIC5mb3JtLWNoZWNrLCAuYWxlcnQge1xuXHR3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zLWNlbnRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cblxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsIC5pY29uLWNsZWFyIHtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwID4gc3BhbiB7XG5tYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTsgICAvKiB0ZXh0IDEgKyBsZWZ0IDAuNSArIHJpZ2h0IDAuNSA9IDIgcmVtKi9cbiAgICBib3JkZXI6IDA7XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZS1zbSB7XG4gICAgei1pbmRleDogMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} LiferHack</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('lifer')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditLifer\">Lifer </label>\n\t        \n\t\t    <!-- <a class=\"icon-search\" [routerLink]=\"['.']\" (click)=\"onRefSelect('lifer')\"><i class=\"fas fa-list\" title=\"Search\"></i></a>  -->\n\t\t    <div class=\"input-group\">\n\t\t    \t<!--  [attr.disabled]=\"true\" -->\n\t\t        <input class=\"form-control rounded\" id=\"EditLifer\" \n\t\t             [ngClass]=\"{'pointer ref-badge': detail['lifer']['_id']}\"\n\t\t             (focus)=\"onRefSelect('lifer')\"\n\t                 required\n\t\t        \t  \n\t\t             [ngModel]=\"detail['lifer']['value']\" name=\"EditLifer\"\n\t\t             #EditLifer=\"ngModel\"> \n\t\t        <div *ngIf=\"detail['lifer']['value']\" \n\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('lifer')\">\n\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t\t\t</div>\n\t        <div [hidden]=\"EditLifer.valid || EditLifer.pristine\"\n\t             class=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditLifer.errors && EditLifer.errors.required && !(detail['lifer']?.date)\">\n    \t        Lifer is required.\n  \t          </div>\n \n\t        </div>\n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('hack')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditHack\">Hack </label>\n\t        \n\t\t    <!-- <a class=\"icon-search\" [routerLink]=\"['.']\" (click)=\"onRefSelect('hack')\"><i class=\"fas fa-list\" title=\"Search\"></i></a>  -->\n\t\t    <div class=\"input-group\">\n\t\t    \t<!--  [attr.disabled]=\"true\" -->\n\t\t        <input class=\"form-control rounded\" id=\"EditHack\" \n\t\t             [ngClass]=\"{'pointer ref-badge': detail['hack']['_id']}\"\n\t\t             (focus)=\"onRefSelect('hack')\"\n\t                 required\n\t\t        \t  \n\t\t             [ngModel]=\"detail['hack']['value']\" name=\"EditHack\"\n\t\t             #EditHack=\"ngModel\"> \n\t\t        <div *ngIf=\"detail['hack']['value']\" \n\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('hack')\">\n\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t\t\t</div>\n\t        <div [hidden]=\"EditHack.valid || EditHack.pristine\"\n\t             class=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditHack.errors && EditHack.errors.required && !(detail['hack']?.date)\">\n    \t        Hack is required.\n  \t          </div>\n \n\t        </div>\n\t      </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('lifer')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditLifer\">Lifer </label>\n\t        \n\t\t    <!-- <a class=\"icon-search\" [routerLink]=\"['.']\" (click)=\"onRefSelect('lifer')\"><i class=\"fas fa-list\" title=\"Search\"></i></a>  -->\n\t\t    <div class=\"input-group\">\n\t\t    \t<!--  [attr.disabled]=\"true\" -->\n\t\t        <input class=\"form-control rounded\" id=\"EditLifer\" \n\t\t             [ngClass]=\"{'pointer ref-badge': detail['lifer']['_id']}\"\n\t\t             (focus)=\"onRefSelect('lifer')\"\n\t                 required\n\t\t        \t  \n\t\t             [ngModel]=\"detail['lifer']['value']\" name=\"EditLifer\"\n\t\t             #EditLifer=\"ngModel\"> \n\t\t        <div *ngIf=\"detail['lifer']['value']\" \n\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('lifer')\">\n\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t\t\t</div>\n\t        <div [hidden]=\"EditLifer.valid || EditLifer.pristine\"\n\t             class=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditLifer.errors && EditLifer.errors.required && !(detail['lifer']?.date)\">\n    \t        Lifer is required.\n  \t          </div>\n \n\t        </div>\n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('hack')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditHack\">Hack </label>\n\t        \n\t\t    <!-- <a class=\"icon-search\" [routerLink]=\"['.']\" (click)=\"onRefSelect('hack')\"><i class=\"fas fa-list\" title=\"Search\"></i></a>  -->\n\t\t    <div class=\"input-group\">\n\t\t    \t<!--  [attr.disabled]=\"true\" -->\n\t\t        <input class=\"form-control rounded\" id=\"EditHack\" \n\t\t             [ngClass]=\"{'pointer ref-badge': detail['hack']['_id']}\"\n\t\t             (focus)=\"onRefSelect('hack')\"\n\t                 required\n\t\t        \t  \n\t\t             [ngModel]=\"detail['hack']['value']\" name=\"EditHack\"\n\t\t             #EditHack=\"ngModel\"> \n\t\t        <div *ngIf=\"detail['hack']['value']\" \n\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('hack')\">\n\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t\t\t</div>\n\t        <div [hidden]=\"EditHack.valid || EditHack.pristine\"\n\t             class=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditHack.errors && EditHack.errors.required && !(detail['hack']?.date)\">\n    \t        Hack is required.\n  \t          </div>\n \n\t        </div>\n\t      </fieldset>\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n<ng-template lifehacks-ref-select></ng-template>\n"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: LiferhackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackEditComponent", function() { return LiferhackEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liferhack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../liferhack.component */ "./src/app/lifehacks/liferhack/liferhack.component.ts");
/* harmony import */ var _liferhack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../liferhack.service */ "./src/app/lifehacks/liferhack/liferhack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiferhackEditComponent = /** @class */ (function (_super) {
    __extends(LiferhackEditComponent, _super);
    function LiferhackEditComponent(componentFactoryResolver, liferhackService, injector, router, route, location) {
        var _this = _super.call(this, componentFactoryResolver, liferhackService, injector, router, route, location, _liferhack_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.liferhackService = liferhackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.referenceFields = ['lifer', 'hack',];
        _this.referenceFieldsMap = { 'lifer': 'lifer', 'hack': 'hack', };
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    LiferhackEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {};
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {};
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiferhackEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiferhackEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiferhackEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LiferhackEditComponent.prototype, "done", void 0);
    LiferhackEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liferhack-edit',
            template: __webpack_require__(/*! ./liferhack-edit.component.html */ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.html"),
            styles: [__webpack_require__(/*! ./liferhack-edit.component.css */ "./src/app/lifehacks/liferhack/liferhack-edit/liferhack-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _liferhack_service__WEBPACK_IMPORTED_MODULE_4__["LiferhackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferhackEditComponent);
    return LiferhackEditComponent;
}(_liferhack_component__WEBPACK_IMPORTED_MODULE_3__["LiferhackComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n      <div class=\"add-area\">\n        <a href=\"javascript:void(0)\" (click)=\"onAdd()\"><i class=\"fas fa-plus-square\" title=\"Add\"></i></a>\n        <div *ngIf=\"isAdding\">\n            <app-liferhack-edit [initData]=\"parentData\" (done)=\"onAddDone($event)\"></app-liferhack-edit>\n        </div>\n    </div>\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table\">\n\t    <thead>\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th *ngIf=\"referenceFieldsMap['lifer'] != parentItem\"  scope=\"col\">\n\t\t        \tLifer\n\t\t        </th>\n\t\t        <th *ngIf=\"referenceFieldsMap['hack'] != parentItem\"  scope=\"col\">\n\t\t        \tHack\n\t\t        </th>\t\t        \n                <th scope=\"col\" style=\"width:2rem;\"></th>\n\n\t\t        <th scope=\"col\" style=\"width:2rem;\"></th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t      <ng-template ngFor let-detail [ngForOf]=\"list\" let-i=\"index\">\n\t        <tr [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\"> <!-- *ngFor=\"let detail of list;  let i = index\" -->\n\t            <td scope=\"row\">{{(page-1)*per_page+i+1}}</td>\n\n\t            <td *ngIf=\"referenceFieldsMap['lifer'] != parentItem\"  >\n\t            \t                \n               \t  \n\t            \t{{detail['lifer']?detail['lifer']['value']:\"\"}}\n\t              \n\n                </td>\n\t            <td *ngIf=\"referenceFieldsMap['hack'] != parentItem\"  >\n\t            \t                \n               \t  \n\t            \t{{detail['hack']?detail['hack']['value']:\"\"}}\n\t              \n\n                </td>\n\t            <td>\n\n                </td>\n\n\t            <td>\n\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\n                </td>\n\t        </tr>\n\n\t        <tr *ngIf=\"checkedItem[i]\" >\n\t        \t<td colspan=\"2\"><app-liferhack-detail-sub [inputData]=\"detail['_id']\"></app-liferhack-detail-sub></td>\n\t        </tr>\n\t      </ng-template>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.ts ***!
  \************************************************************************************/
/*! exports provided: LiferhackListSubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackListSubComponent", function() { return LiferhackListSubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liferhack_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liferhack-list.component */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.ts");
/* harmony import */ var _liferhack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../liferhack.service */ "./src/app/lifehacks/liferhack/liferhack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiferhackListSubComponent = /** @class */ (function (_super) {
    __extends(LiferhackListSubComponent, _super);
    function LiferhackListSubComponent(liferhackService, injector, router, route, location) {
        var _this = _super.call(this, null, liferhackService, injector, router, route, location) || this;
        _this.liferhackService = liferhackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.parentData = {};
        return _this;
    }
    LiferhackListSubComponent.prototype.ngOnInit = function () {
        var ref = this.getParentRouteRefField();
        var id = this.getParentRouteItemId();
        this.detail = {};
        if (this.arrayFields.some(function (x) { return x[0] == ref; })) {
            this.parentData[ref] = { 'selection': [{ '_id': id }] };
            this.detail[ref] = { 'selection': [{ '_id': id }] }; //search on array list
        }
        else {
            this.parentData[ref] = { '_id': id };
            this.detail[ref] = { '_id': id }; //make this as the search context
        }
        this.processSearchContext();
        this.populateList();
    };
    LiferhackListSubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liferhack-list-sub',
            template: __webpack_require__(/*! ./liferhack-list-sub.component.html */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list-sub.component.html"),
            styles: [__webpack_require__(/*! ./liferhack-list.component.css */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.css")]
        }),
        __metadata("design:paramtypes", [_liferhack_service__WEBPACK_IMPORTED_MODULE_4__["LiferhackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferhackListSubComponent);
    return LiferhackListSubComponent;
}(_liferhack_list_component__WEBPACK_IMPORTED_MODULE_3__["LiferhackListComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyaGFjay9saWZlcmhhY2stbGlzdC9saWZlcmhhY2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBR0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsSUFBSSx5Q0FBeUM7SUFDL0QsU0FBUztBQUNiOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFHQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUEsZ0NBQWdDOztBQUM1QjtNQUNFLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0FBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7O0FBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMsWUFBWTtJQUNkOztBQUNBO01BQ0Usd0NBQXdDO0lBQzFDOztBQUVBO0VBQ0YsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtJQUNsQjs7QUFFSjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWhhY2tzL2xpZmVyaGFjay9saWZlcmhhY2stbGlzdC9saWZlcmhhY2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuXHRtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbnRkIGkge1xuXHRjb2xvcjpibGFjaztcblx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcblx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG50ZCBhIGk6aG92ZXIge1xuXHRjb2xvcjogYmx1ZTtcbn1cbnRkIGEgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuXHR3aWR0aDogMTAwJTtcblx0ZmxvYXQ6cmlnaHQ7IFxuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuXG4ucGFnaW5hdGlvbiBsaSB7XG5cdG1pbi13aWR0aDogMi44cmVtO1xufVxuLnRvdGFsX2NvdW50cyB7XG5cdHBhZGRpbmctdG9wOiAwLjhyZW07XG59XG5cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24tY2xlYXIge1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4ucmVmaW5lLXNlYXJjaC10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07IC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgY29sb3I6ICM4NjgxODE7XG59XG5cbi5zZWxlY3QtbW9kZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHotaW5kZXg6IDEwMDA7IFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIC8qbWFyZ2luOiBhdXRvOyovXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbn1cblxudGFibGUge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2xpY2tlZC1yb3cge1xuYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbn1cbi5zZWxlY3RlZC1yb3cge1xuYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVlYjtcbn1cblxuXG50ciB0aDpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDo4JTtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0IHtcblx0XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0ID4gLnJvdyB7XG5cdHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi8qTmRiRGF0ZVBpY2tlciBSYW5nZSBTZWxlY3RvciAqL1xuICAgIC5jdXN0b20tZGF5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICB9XG4gICAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmN1c3RvbS1kYXkuZmFkZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbiAgICB9XG4gICAgXG4gICAgLmRhdGUtc2VsZWN0aW9uLXBvcCB7XG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0dG9wOjEwMCU7XG5cdFx0bGVmdDowO1xuXHRcdHotaW5kZXg6MTAwMDtcblx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdGZsb2F0OmxlZnQ7XG5cdFx0bWluLXdpZHRoOjEwcmVtO1xuXHRcdC8qcGFkZGluZzouNXJlbSAwOyovXG5cdFx0bWFyZ2luOi4xMjVyZW0gMCAwO1xuXHRcdGZvbnQtc2l6ZToxcmVtO1xuXHRcdGNvbG9yOiMyMTI1Mjk7XG5cdFx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRcdGxpc3Qtc3R5bGU6bm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5cdFx0YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O1xuXHRcdGJvcmRlcjrCoDFweCBzb2xpZMKgI2RmZGZkZjtcblx0XHRib3JkZXItcmFkaXVzOi4yNXJlbTtcbiAgICB9XG4gICAgXG4uYWRkLWFyZWEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\n\t\t\t\t<div class=\"text-center\">\n                    <span  class=\"pointer\" (click)=\"toggleMoreSearch()\">\n                        <span class=\"refine-search-text\">Refine Search &nbsp;</span>\n                        <span>\n                            <i *ngIf=\"!moreSearchOpened\"  class=\"fas fa-plus-circle\" title=\"More\"></i>\n                            <i *ngIf=\"moreSearchOpened\" class=\"fas fa-minus-circle\"  title=\"Less\"></i>\n                        </span>\n                    </span>\n\t\t\t\t</div>\n\t\t\t    <div class=\"shadow\" *ngIf=\"moreSearchOpened\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"liferhackEditLifer\">Lifer</label></div>\n\t        <div class=\"col-8\">\n\n\n\t\t    <div class=\"input-group\">\n\t\t        <input class=\"form-control rounded\" id=\"liferhackEditLifer\" \n\t\t             [ngClass]=\"{'pointer ref-badge': detail['lifer']['_id']}\"\n\t\t             (focus)=\"detail['lifer']['_id']?onRefShow('lifer', 'select', detail['lifer']['_id']):onRefSelect('lifer')\"\n\t\t        \t  \n\t\t             [ngModel]=\"detail['lifer']['value']\" name=\"liferhackEditLifer\"\n\t\t             #liferhackEditLifer=\"ngModel\"> \n\t\t\t</div>\n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('lifer')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('lifer')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"liferhackEditHack\">Hack</label></div>\n\t        <div class=\"col-8\">\n\n\n\t\t    <div class=\"input-group\">\n\t\t        <input class=\"form-control rounded\" id=\"liferhackEditHack\" \n\t\t             [ngClass]=\"{'pointer ref-badge': detail['hack']['_id']}\"\n\t\t             (focus)=\"detail['hack']['_id']?onRefShow('hack', 'select', detail['hack']['_id']):onRefSelect('hack')\"\n\t\t        \t  \n\t\t             [ngModel]=\"detail['hack']['value']\" name=\"liferhackEditHack\"\n\t\t             #liferhackEditHack=\"ngModel\"> \n\t\t\t</div>\n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('hack')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('hack')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\n\t\t\t\t\t\t  <div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onSearchClear()\">Reset</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"searchList()\">Search</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t        <div *ngIf=\"!moreSearchOpened\" style=\"text-align: left;\">\n\t\t\t\t\t<span class=\"badge badge-pill badge-info\" *ngFor=\"let value of searchMoreDetail\">\n\t\t\t\t\t    <a (click)=\"toggleMoreSearch()\" class=\"pointer\"> {{value[0]}}: {{value[1]}}</a>\n\t\t\t\t\t    <i class=\"fas fa-times-circle icon-clear-badge\" (click)=\"clearValueFromDetailAndSearchList(value[0])\" title=\"Clear\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t    \n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDeleteSelected()\"\n\t\t\t\t\t\t[ngClass]=\"{'disabled': !isItemSelected()}\">Delete</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t\t<a class=\"float-right\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Lifer</th>\n\t\t        <th scope=\"col\">Hack</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:6rem;\"></th>\n\t\t        <th scope=\"col\" style=\"width:2rem;\">\n\t\t        \t<input type=\"checkbox\" [(ngModel)]=\"checkAll\" (change)=\"onCheckAllChange()\">\n\t\t        </th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t{{(page-1)*per_page+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                \n               \t  \n\t            \t{{detail['lifer']?detail['lifer']['value']:\"\"}}\n\t              \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                \n               \t  \n\t            \t{{detail['hack']?detail['hack']['value']:\"\"}}\n\t              \n\n\t            </td>\n\t            \n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\t            </td>\n\t            \n\t            <td>      \n\t            \t<input type=\"checkbox\" [(ngModel)]=\"checkedItem[i]\"/>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n<ng-template lifehacks-ref-select></ng-template>\n"

/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: LiferhackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackListComponent", function() { return LiferhackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liferhack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../liferhack.component */ "./src/app/lifehacks/liferhack/liferhack.component.ts");
/* harmony import */ var _liferhack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../liferhack.service */ "./src/app/lifehacks/liferhack/liferhack.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiferhackListComponent = /** @class */ (function (_super) {
    __extends(LiferhackListComponent, _super);
    function LiferhackListComponent(componentFactoryResolver, liferhackService, injector, router, route, location) {
        var _this = _super.call(this, componentFactoryResolver, liferhackService, injector, router, route, location, _liferhack_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.liferhackService = liferhackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.referenceFields = ['lifer', 'hack',];
        _this.referenceFieldsMap = { 'lifer': 'lifer', 'hack': 'hack', };
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    LiferhackListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    LiferhackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liferhack-list',
            template: __webpack_require__(/*! ./liferhack-list.component.html */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.html"),
            styles: [__webpack_require__(/*! ./liferhack-list.component.css */ "./src/app/lifehacks/liferhack/liferhack-list/liferhack-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _liferhack_service__WEBPACK_IMPORTED_MODULE_4__["LiferhackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LiferhackListComponent);
    return LiferhackListComponent;
}(_liferhack_component__WEBPACK_IMPORTED_MODULE_3__["LiferhackComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack.base.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack.base.service.ts ***!
  \***************************************************************/
/*! exports provided: LiferhackBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackBaseService", function() { return LiferhackBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/liferhack/';
var LiferhackBaseService = /** @class */ (function (_super) {
    __extends(LiferhackBaseService, _super);
    function LiferhackBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return LiferhackBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack.component.ts ***!
  \************************************************************/
/*! exports provided: ViewType, LiferhackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackComponent", function() { return LiferhackComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lifehacks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lifehacks.component */ "./src/app/lifehacks/lifehacks.component.ts");
/* harmony import */ var _lifer_lifer_detail_lifer_detail_sel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifer/lifer-detail/lifer-detail-sel.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-sel.component.ts");
/* harmony import */ var _lifer_lifer_detail_lifer_detail_pop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lifer/lifer-detail/lifer-detail-pop.component */ "./src/app/lifehacks/lifer/lifer-detail/lifer-detail-pop.component.ts");
/* harmony import */ var _lifer_lifer_list_lifer_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lifer/lifer-list/lifer-select.component */ "./src/app/lifehacks/lifer/lifer-list/lifer-select.component.ts");
/* harmony import */ var _hack_hack_detail_hack_detail_sel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hack/hack-detail/hack-detail-sel.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail-sel.component.ts");
/* harmony import */ var _hack_hack_detail_hack_detail_pop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hack/hack-detail/hack-detail-pop.component */ "./src/app/lifehacks/hack/hack-detail/hack-detail-pop.component.ts");
/* harmony import */ var _hack_hack_list_hack_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hack/hack-list/hack-select.component */ "./src/app/lifehacks/hack/hack-list/hack-select.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var itemCamelName = 'liferHack';









var LiferhackComponent = /** @class */ (function (_super) {
    __extends(LiferhackComponent, _super);
    function LiferhackComponent(componentFactoryResolver, liferhackService, injector, router, route, location, view) {
        var _this = _super.call(this, liferhackService, injector, router, route, location, view, itemCamelName) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.liferhackService = liferhackService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.selectComponents = {
            'lifer': {
                'select-type': _lifer_lifer_list_lifer_select_component__WEBPACK_IMPORTED_MODULE_5__["LiferSelectComponent"],
                'select-detail-type': _lifer_lifer_detail_lifer_detail_sel_component__WEBPACK_IMPORTED_MODULE_3__["LiferDetailSelComponent"],
                'pop-detail-type': _lifer_lifer_detail_lifer_detail_pop_component__WEBPACK_IMPORTED_MODULE_4__["LiferDetailPopComponent"],
                'componentRef': null
            },
            'hack': {
                'select-type': _hack_hack_list_hack_select_component__WEBPACK_IMPORTED_MODULE_8__["HackSelectComponent"],
                'select-detail-type': _hack_hack_detail_hack_detail_sel_component__WEBPACK_IMPORTED_MODULE_6__["HackDetailSelComponent"],
                'pop-detail-type': _hack_hack_detail_hack_detail_pop_component__WEBPACK_IMPORTED_MODULE_7__["HackDetailPopComponent"],
                'componentRef': null
            },
        };
        _this.indexFields = ['lifer',];
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_lifehacks_component__WEBPACK_IMPORTED_MODULE_2__["LifehacksRefSelectDirective"]),
        __metadata("design:type", _lifehacks_component__WEBPACK_IMPORTED_MODULE_2__["LifehacksRefSelectDirective"])
    ], LiferhackComponent.prototype, "refSelectDirective", void 0);
    return LiferhackComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/lifehacks/liferhack/liferhack.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/lifehacks/liferhack/liferhack.service.ts ***!
  \**********************************************************/
/*! exports provided: LiferhackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiferhackService", function() { return LiferhackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _liferhack_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liferhack.base.service */ "./src/app/lifehacks/liferhack/liferhack.base.service.ts");
/* harmony import */ var _lifehacks_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lifehacks.tokens */ "./src/app/lifehacks/lifehacks.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LiferhackService = /** @class */ (function (_super) {
    __extends(LiferhackService, _super);
    function LiferhackService(http, lifehacksServerRootUri) {
        var _this = _super.call(this, http, lifehacksServerRootUri) || this;
        _this.lifehacksServerRootUri = lifehacksServerRootUri;
        return _this;
    }
    LiferhackService.prototype.ngOnDestroy = function () { };
    LiferhackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_lifehacks_tokens__WEBPACK_IMPORTED_MODULE_3__["Lifehacks_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], LiferhackService);
    return LiferhackService;
}(_liferhack_base_service__WEBPACK_IMPORTED_MODULE_2__["LiferhackBaseService"]));



/***/ }),

/***/ "./src/app/publicinfo.conf.ts":
/*!************************************!*\
  !*** ./src/app/publicinfo.conf.ts ***!
  \************************************/
/*! exports provided: PublicinfoRoutes, publicinfo_server_root_uri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicinfoRoutes", function() { return PublicinfoRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicinfo_server_root_uri", function() { return publicinfo_server_root_uri; });
/* harmony import */ var _publicinfo_publicinfo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicinfo/publicinfo.component */ "./src/app/publicinfo/publicinfo.component.ts");
/* harmony import */ var _publicinfo_publicinfo_routing_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicinfo/publicinfo-routing.path */ "./src/app/publicinfo/publicinfo-routing.path.ts");

//Import routing paths

var PublicinfoRoutes = [
    { path: 'publicinfo',
        component: _publicinfo_publicinfo_component__WEBPACK_IMPORTED_MODULE_0__["PublicinfoComponent"],
        children: [
            { path: '', redirectTo: 'generalinfo', pathMatch: 'full' },
            { path: "generalinfo",
                children: _publicinfo_publicinfo_routing_path__WEBPACK_IMPORTED_MODULE_1__["generalinfoRoutingPath"],
                data: { "mraLevel": 1, "item": "generalinfo" }
            },
            { path: "faq",
                children: _publicinfo_publicinfo_routing_path__WEBPACK_IMPORTED_MODULE_1__["faqRoutingPath"],
                data: { "mraLevel": 1, "item": "faq" }
            },
            { path: "event",
                children: _publicinfo_publicinfo_routing_path__WEBPACK_IMPORTED_MODULE_1__["eventRoutingPath"],
                data: { "mraLevel": 1, "item": "event" }
            },
        ]
    }
];
var publicinfo_server_root_uri = "/api/publicinfo";


/***/ }),

/***/ "./src/app/publicinfo/event/event-detail/event-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/publicinfo/event/event-detail/event-detail.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list {\n\tfloat: left;\n\tdisplay: inline-block;\n\t/*margin-left: 2.5rem;*/\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9ldmVudC9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCLGVBQWU7QUFDaEI7O0FBQ0E7Ozs7Q0FJQzs7QUFDRDtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxRUFBcUU7QUFDekU7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWNpbmZvL2V2ZW50L2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0LCAuZmEtbGlzdCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdC8qbWFyZ2luLWxlZnQ6IDIuNXJlbTsqL1xuXHRtYXJnaW4tdG9wOiAgMC43NXJlbVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMgc3BhbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAwcmVtO1xuXHRtYXJnaW4tdG9wOiAgMC41cmVtXG59XG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG4vKlxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuKi9cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB6LWluZGV4OiAxMDAwOyBcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAvKm1hcmdpbjogYXV0bzsqL1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/publicinfo/event/event-detail/event-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/publicinfo/event/event-detail/event-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t\t<a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDelete(detail['_id'], null)\">Delete</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail\n\t    \t<a class=\"float-right\" style=\"font-size: 1rem;\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t    </h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Title</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['title']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Author</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['author']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Publish Date</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['publishDate']?detail['publishDate']['value']:\"\"}}\n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Content</label></div>\n\t\t\t<div class=\"col-9\">                 \n\t            \t <div mra-richtext-show=\"eventDetailContent\"></div>\n\t            \t{{detail['content']?detail['content']['value']:\"\"}}\n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/publicinfo/event/event-detail/event-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/publicinfo/event/event-detail/event-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.component */ "./src/app/publicinfo/event/event.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.service */ "./src/app/publicinfo/event/event.service.ts");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventDetailComponent = /** @class */ (function (_super) {
    __extends(EventDetailComponent, _super);
    function EventDetailComponent(eventService, injector, router, route, location) {
        var _this = _super.call(this, eventService, injector, router, route, location, _event_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.eventService = eventService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('title');
        _this.stringFields.push('author');
        _this.stringFields.push('content');
        _this.dateFields = ['publishDate',];
        _this.textEditorMap['eventDetailContent'] = {
            fieldName: 'content'
        };
        return _this;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventDetailComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(mean_rest_angular__WEBPACK_IMPORTED_MODULE_5__["MraRichTextShowDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], EventDetailComponent.prototype, "textEditors", void 0);
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/publicinfo/event/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/publicinfo/event/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}(_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/event/event-edit/event-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/publicinfo/event/event-edit/event-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9ldmVudC9ldmVudC1lZGl0L2V2ZW50LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUdBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0NBQ3BCLGVBQWU7QUFDaEI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDs7OztDQUlDOztBQUVEO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQzs7QUFFQTtDQUNDLHlCQUF5QjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHFCQUFxQjtFQUNoRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGVBQWU7O0VBRWYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLElBQUkseUNBQXlDO0lBQy9ELFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vZXZlbnQvZXZlbnQtZWRpdC9ldmVudC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG5cdHdpZHRoOiA3NSU7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldCA+IC5mb3JtLWNvbnRyb2wsIC5pbnB1dC1ncm91cCwgLmZvcm0tY2hlY2ssIC5hbGVydCB7XG5cdHdpZHRoOiA5MCVcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMi41cmVtO1xuXHRtYXJnaW4tdG9wOiAgMC43NXJlbVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zLWNlbnRlciAuYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMi41cmVtO1xufVxuXG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi8qXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLypcbi5uZy12YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICpcbn1cbiovXG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5pY29uLXNlYXJjaCwgLmljb24tY2xlYXIge1xuICB6LWluZGV4OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiBzcGFuIHtcbm1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogMztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItaW5zaWRlLXNtIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/publicinfo/event/event-edit/event-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/publicinfo/event/event-edit/event-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} Event</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('title')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditTitle\">Title</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditTitle\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['title']\" name=\"EditTitle\"\n\t\t                #EditTitle=\"ngModel\">\n                <div *ngIf=\"detail['title']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('title')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditTitle.valid || EditTitle.pristine || EditTitle.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditTitle.errors && EditTitle.errors.required\">\n    \t        Title is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('author')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditAuthor\">Author</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditAuthor\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['author']\" name=\"EditAuthor\"\n\t\t                #EditAuthor=\"ngModel\">\n                <div *ngIf=\"detail['author']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('author')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditAuthor.valid || EditAuthor.pristine || EditAuthor.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditAuthor.errors && EditAuthor.errors.required\">\n    \t        Author is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('content')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditContent\">Content</label>\n\t        \n    \t    <div mra-richtext-select=\"EditContent\"></div>\n\t\t  \t<div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onEdtiorPreview('EditContent')\">Preview</button>\n\t\t    </div>\n\t\t    \n\t        <div [hidden]=\"EditContent.valid\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditContent.errors && EditContent.errors.required\">\n    \t        Content is required.\n  \t          </div>\n \n\n        \n\t        </div>\n\t\t    \n\t      </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('title')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditTitle\">Title</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditTitle\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['title']\" name=\"EditTitle\"\n\t\t                #EditTitle=\"ngModel\">\n                <div *ngIf=\"detail['title']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('title')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditTitle.valid || EditTitle.pristine || EditTitle.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditTitle.errors && EditTitle.errors.required\">\n    \t        Title is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('author')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditAuthor\">Author</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditAuthor\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['author']\" name=\"EditAuthor\"\n\t\t                #EditAuthor=\"ngModel\">\n                <div *ngIf=\"detail['author']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('author')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditAuthor.valid || EditAuthor.pristine || EditAuthor.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditAuthor.errors && EditAuthor.errors.required\">\n    \t        Author is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('content')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditContent\">Content</label>\n\t        \n    \t    <div mra-richtext-select=\"EditContent\"></div>\n\t\t  \t<div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onEdtiorPreview('EditContent')\">Preview</button>\n\t\t    </div>\n\t\t    \n\t        <div [hidden]=\"EditContent.valid\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditContent.errors && EditContent.errors.required\">\n    \t        Content is required.\n  \t          </div>\n \n\n        \n\t        </div>\n\t\t    \n\t      </fieldset>\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/publicinfo/event/event-edit/event-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/publicinfo/event/event-edit/event-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditComponent", function() { return EventEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.component */ "./src/app/publicinfo/event/event.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.service */ "./src/app/publicinfo/event/event.service.ts");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventEditComponent = /** @class */ (function (_super) {
    __extends(EventEditComponent, _super);
    function EventEditComponent(eventService, injector, router, route, location) {
        var _this = _super.call(this, eventService, injector, router, route, location, _event_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.eventService = eventService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.EditContent = { valid: true };
        _this.stringFields.push('title');
        _this.stringFields.push('author');
        _this.stringFields.push('content');
        _this.textEditorMap['EditContent'] = {
            required: true,
            fieldState: _this.EditContent,
            fieldName: 'content'
        };
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    EventEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {};
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {};
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventEditComponent.prototype, "done", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(mean_rest_angular__WEBPACK_IMPORTED_MODULE_5__["MraRichTextSelectDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], EventEditComponent.prototype, "textEditors", void 0);
    EventEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-edit',
            template: __webpack_require__(/*! ./event-edit.component.html */ "./src/app/publicinfo/event/event-edit/event-edit.component.html"),
            styles: [__webpack_require__(/*! ./event-edit.component.css */ "./src/app/publicinfo/event/event-edit/event-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], EventEditComponent);
    return EventEditComponent;
}(_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/event/event-list/event-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/publicinfo/event/event-list/event-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9ldmVudC9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUdBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLElBQUkseUNBQXlDO0lBQy9ELFNBQVM7QUFDYjs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLHFCQUFxQjtFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBR0E7SUFDSSxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBLGdDQUFnQzs7QUFDNUI7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztJQUNiOztBQUNBO01BQ0UseUJBQXlCO0lBQzNCOztBQUNBO01BQ0Usa0NBQWtDO01BQ2xDLFlBQVk7SUFDZDs7QUFDQTtNQUNFLHdDQUF3QztJQUMxQzs7QUFFQTtFQUNGLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixvQkFBb0I7SUFDbEI7O0FBRUo7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vZXZlbnQvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG5cdG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxudGQgaSB7XG5cdGNvbG9yOmJsYWNrO1xuXHRtYXJnaW4tbGVmdDogMC41cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbnRkIGEgaTpob3ZlciB7XG5cdGNvbG9yOiBibHVlO1xufVxudGQgYSBpLmZhLXRyYXNoLWFsdDpob3ZlciB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5cbi5wYWdpbmF0aW9uIGxpIHtcblx0bWluLXdpZHRoOiAyLjhyZW07XG59XG4udG90YWxfY291bnRzIHtcblx0cGFkZGluZy10b3A6IDAuOHJlbTtcbn1cblxuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1jbGVhciB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogMztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07ICAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5yZWZpbmUtc2VhcmNoLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBjb2xvcjogIzg2ODE4MTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xufVxuLnNlbGVjdGVkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjYzlmNWViO1xufVxuXG5cbnRyIHRoOmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOjglO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQge1xuXHRcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcblx0cGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4gICAgLmN1c3RvbS1kYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gICAgfVxuICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xuICAgIH1cbiAgICBcbiAgICAuZGF0ZS1zZWxlY3Rpb24tcG9wIHtcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHR0b3A6MTAwJTtcblx0XHRsZWZ0OjA7XG5cdFx0ei1pbmRleDoxMDAwO1xuXHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0ZmxvYXQ6bGVmdDtcblx0XHRtaW4td2lkdGg6MTByZW07XG5cdFx0LypwYWRkaW5nOi41cmVtIDA7Ki9cblx0XHRtYXJnaW46LjEyNXJlbSAwIDA7XG5cdFx0Zm9udC1zaXplOjFyZW07XG5cdFx0Y29sb3I6IzIxMjUyOTtcblx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0bGlzdC1zdHlsZTpub25lO1xuXHRcdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0XHRiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XG5cdFx0Ym9yZGVyOsKgMXB4IHNvbGlkwqAjZGZkZmRmO1xuXHRcdGJvcmRlci1yYWRpdXM6LjI1cmVtO1xuICAgIH1cbiAgICBcbi5hZGQtYXJlYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG59XG5cbi5iYWRnZS1jbGljayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/publicinfo/event/event-list/event-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/publicinfo/event/event-list/event-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"eventTextSearch\" \n\t\t\t\t\t\t#eventTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for title, author\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\t<div class=\"text-center\">\n                    <span  class=\"pointer\" (click)=\"toggleMoreSearch()\">\n                        <span class=\"refine-search-text\">Refine Search &nbsp;</span>\n                        <span>\n                            <i *ngIf=\"!moreSearchOpened\"  class=\"fas fa-plus-circle\" title=\"More\"></i>\n                            <i *ngIf=\"moreSearchOpened\" class=\"fas fa-minus-circle\"  title=\"Less\"></i>\n                        </span>\n                    </span>\n\t\t\t\t</div>\n\t\t\t    <div class=\"shadow\" *ngIf=\"moreSearchOpened\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"eventEditPublishDate\">Publish Date</label></div>\n\t        <div class=\"col-8\">\n\n \n\t        <div class=\"input-group\">\n\t\t      <input class=\"form-control\" id=\"eventEditPublishDate\" placeholder=\"{{dateFormat}}\"\n\t\t             [(ngModel)]=\"detail['publishDate']['from']\" name=\"eventEditPublishDate\"\n\t\t             ngbDatepicker #eventEditPublishDate=\"ngModel\">\n\t\t      <span>&nbsp; ~ &nbsp;</span>\n\t\t      <input class=\"form-control\" id=\"eventEditPublishDate\" placeholder=\"{{dateFormat}}\"\n\t\t             [(ngModel)]=\"detail['publishDate']['to']\" name=\"eventEditPublishDate\"\n\t\t             ngbDatepicker #eventEditPublishDate=\"ngModel\">\n\n\t\t      <div class=\"input-group-append\">\n\t\t        <button class=\"btn btn-outline-secondary\" (click)=\"onDateSelectionToggle('publishDate')\" type=\"button\">\n\t\t          <i class=\"fas fa-calendar-alt\"></i>\n\t\t        </button>\n\t\t      </div>\n\t\t    </div><!-- input group --> \n\t\t    <div class=\"date-selection-pop\" *ngIf=\"detail['publishDate']['pop']\">\n\t\t\t    <ngb-datepicker #dp [minDate]=\"minDate\" (select)=\"onDateSelection('publishDate', $event)\" [displayMonths]=\"2\" [dayTemplate]=\"eventEditPublishDateT\">\n\t\t\t\t</ngb-datepicker>\n\t\t\t\t<ng-template #eventEditPublishDateT let-eventEditPublishDateDate=\"date\" let-eventEditPublishDateFocused=\"focused\">\n\t\t\t\t  <span class=\"custom-day\"\n\t\t\t\t        [class.focused]=\"eventEditPublishDateFocused\"\n\t\t\t\t        [class.range]=\"isRange('publishDate', eventEditPublishDateDate)\"\n\t\t\t\t        [class.faded]=\"isHovered('publishDate', eventEditPublishDateDate) || isInside('publishDate', eventEditPublishDateDate)\"\n\t\t\t\t        (mouseenter)=\"hoveredDate = eventEditPublishDateDate\"\n\t\t\t\t        (mouseleave)=\"hoveredDate = null\">\n\t\t\t\t    {{ eventEditPublishDateDate.day }}\n\t\t\t\t  </span>\n\t\t\t\t</ng-template>\n\t\t    </div>      \n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('publishDate')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('publishDate')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\n\t\t\t\t\t\t  <div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onSearchClear()\">Reset</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"searchList()\">Search</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t        <div *ngIf=\"!moreSearchOpened\" style=\"text-align: left;\">\n\t\t\t\t\t<span class=\"badge badge-pill badge-info\" *ngFor=\"let value of searchMoreDetail\">\n\t\t\t\t\t    <a (click)=\"toggleMoreSearch()\" class=\"pointer\"> {{value[0]}}: {{value[1]}}</a>\n\t\t\t\t\t    <i class=\"fas fa-times-circle icon-clear-badge\" (click)=\"clearValueFromDetailAndSearchList(value[0])\" title=\"Clear\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t    \n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDeleteSelected()\"\n\t\t\t\t\t\t[ngClass]=\"{'disabled': !isItemSelected()}\">Delete</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t\t<a class=\"float-right\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Title</th>\n\t\t        <th scope=\"col\">Author</th>\n\t\t        <th scope=\"col\">Publish Date</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:6rem;\"></th>\n\t\t        <th scope=\"col\" style=\"width:2rem;\">\n\t\t        \t<input type=\"checkbox\" [(ngModel)]=\"checkAll\" (change)=\"onCheckAllChange()\">\n\t\t        </th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t{{(page-1)*per_page+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['title']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['author']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['publishDate']?detail['publishDate']['value']:\"\"}}\n\n\t            </td>\n\t            \n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\t            </td>\n\t            \n\t            <td>      \n\t            \t<input type=\"checkbox\" [(ngModel)]=\"checkedItem[i]\"/>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/publicinfo/event/event-list/event-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/publicinfo/event/event-list/event-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.component */ "./src/app/publicinfo/event/event.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.service */ "./src/app/publicinfo/event/event.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventListComponent = /** @class */ (function (_super) {
    __extends(EventListComponent, _super);
    function EventListComponent(eventService, injector, router, route, location) {
        var _this = _super.call(this, eventService, injector, router, route, location, _event_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.eventService = eventService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.minDate = { year: (new Date()).getFullYear() - 100, month: 1, day: 1 };
        _this.stringFields.push('title');
        _this.stringFields.push('author');
        _this.dateFields = ['publishDate',];
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/publicinfo/event/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.css */ "./src/app/publicinfo/event/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], EventListComponent);
    return EventListComponent;
}(_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/event/event.base.service.ts":
/*!********************************************************!*\
  !*** ./src/app/publicinfo/event/event.base.service.ts ***!
  \********************************************************/
/*! exports provided: EventBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBaseService", function() { return EventBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/event/';
var EventBaseService = /** @class */ (function (_super) {
    __extends(EventBaseService, _super);
    function EventBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return EventBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/publicinfo/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/publicinfo/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: ViewType, EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var itemCamelName = 'event';

var EventComponent = /** @class */ (function (_super) {
    __extends(EventComponent, _super);
    function EventComponent(eventService, injector, router, route, location, view) {
        var _this = _super.call(this, eventService, injector, router, route, location, view, itemCamelName) || this;
        _this.eventService = eventService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.dateFormat = 'MM-DD-YYYY';
        _this.timeFormat = 'hh:mm:ss';
        _this.indexFields = ['title',];
        return _this;
    }
    return EventComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/event/event.service.ts":
/*!***************************************************!*\
  !*** ./src/app/publicinfo/event/event.service.ts ***!
  \***************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _event_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.base.service */ "./src/app/publicinfo/event/event.base.service.ts");
/* harmony import */ var _publicinfo_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publicinfo.tokens */ "./src/app/publicinfo/publicinfo.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EventService = /** @class */ (function (_super) {
    __extends(EventService, _super);
    function EventService(http, publicinfoServerRootUri) {
        var _this = _super.call(this, http, publicinfoServerRootUri) || this;
        _this.publicinfoServerRootUri = publicinfoServerRootUri;
        return _this;
    }
    EventService.prototype.ngOnDestroy = function () { };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_publicinfo_tokens__WEBPACK_IMPORTED_MODULE_3__["Publicinfo_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], EventService);
    return EventService;
}(_event_base_service__WEBPACK_IMPORTED_MODULE_2__["EventBaseService"]));



/***/ }),

/***/ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-detail/faq-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list {\n\tfloat: left;\n\tdisplay: inline-block;\n\t/*margin-left: 2.5rem;*/\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9mYXEvZmFxLWRldGFpbC9mYXEtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCLGVBQWU7QUFDaEI7O0FBQ0E7Ozs7Q0FJQzs7QUFDRDtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxRUFBcUU7QUFDekU7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWNpbmZvL2ZhcS9mYXEtZGV0YWlsL2ZhcS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0LCAuZmEtbGlzdCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdC8qbWFyZ2luLWxlZnQ6IDIuNXJlbTsqL1xuXHRtYXJnaW4tdG9wOiAgMC43NXJlbVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMgc3BhbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAwcmVtO1xuXHRtYXJnaW4tdG9wOiAgMC41cmVtXG59XG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG4vKlxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuKi9cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB6LWluZGV4OiAxMDAwOyBcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAvKm1hcmdpbjogYXV0bzsqL1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-detail/faq-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t\t<a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDelete(detail['_id'], null)\">Delete</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail\n\t    \t<a class=\"float-right\" style=\"font-size: 1rem;\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t    </h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Question</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['question']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Answer</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['answer']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Order</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['order']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Enable</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['enable']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-detail/faq-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: FaqDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqDetailComponent", function() { return FaqDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faq.component */ "./src/app/publicinfo/faq/faq.component.ts");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../faq.service */ "./src/app/publicinfo/faq/faq.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqDetailComponent = /** @class */ (function (_super) {
    __extends(FaqDetailComponent, _super);
    function FaqDetailComponent(faqService, injector, router, route, location) {
        var _this = _super.call(this, faqService, injector, router, route, location, _faq_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.faqService = faqService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('question');
        _this.stringFields.push('answer');
        return _this;
    }
    FaqDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FaqDetailComponent.prototype, "id", void 0);
    FaqDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-detail',
            template: __webpack_require__(/*! ./faq-detail.component.html */ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.html"),
            styles: [__webpack_require__(/*! ./faq-detail.component.css */ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FaqDetailComponent);
    return FaqDetailComponent;
}(_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-edit/faq-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9mYXEvZmFxLWVkaXQvZmFxLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUdBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0NBQ3BCLGVBQWU7QUFDaEI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDs7OztDQUlDOztBQUVEO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQzs7QUFFQTtDQUNDLHlCQUF5QjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHFCQUFxQjtFQUNoRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGVBQWU7O0VBRWYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLElBQUkseUNBQXlDO0lBQy9ELFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vZmFxL2ZhcS1lZGl0L2ZhcS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG5cdHdpZHRoOiA3NSU7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldCA+IC5mb3JtLWNvbnRyb2wsIC5pbnB1dC1ncm91cCwgLmZvcm0tY2hlY2ssIC5hbGVydCB7XG5cdHdpZHRoOiA5MCVcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMi41cmVtO1xuXHRtYXJnaW4tdG9wOiAgMC43NXJlbVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zLWNlbnRlciAuYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMi41cmVtO1xufVxuXG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi8qXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLypcbi5uZy12YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICpcbn1cbiovXG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5pY29uLXNlYXJjaCwgLmljb24tY2xlYXIge1xuICB6LWluZGV4OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiBzcGFuIHtcbm1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogMztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItaW5zaWRlLXNtIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-edit/faq-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} FAQ</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('question')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditQuestion\">Question</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditQuestion\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['question']\" name=\"EditQuestion\"\n\t\t                #EditQuestion=\"ngModel\">\n                <div *ngIf=\"detail['question']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('question')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditQuestion.valid || EditQuestion.pristine || EditQuestion.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditQuestion.errors && EditQuestion.errors.required\">\n    \t        Question is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('answer')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditAnswer\">Answer</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditAnswer\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['answer']\" name=\"EditAnswer\"\n\t\t                #EditAnswer=\"ngModel\">\n                <div *ngIf=\"detail['answer']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('answer')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditAnswer.valid || EditAnswer.pristine || EditAnswer.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditAnswer.errors && EditAnswer.errors.required\">\n    \t        Answer is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('order')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditOrder\">Order</label>\n\t        \n\t        <input type=\"number\" class=\"form-control\" id=\"EditOrder\" \n\t                \n\t                \n\t                required\n\t\t        \t \n\t                [(ngModel)]=\"detail['order']\" name=\"EditOrder\"\n\t                #EditOrder=\"ngModel\">\n\t        <div [hidden]=\"EditOrder.valid || EditOrder.pristine || EditOrder.errors.minnumber\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditOrder.errors && EditOrder.errors.required\">\n    \t        Order is required.\n  \t          </div>\n \n\n\t        </div>\n\n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('enable')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditEnable\">Enable</label>\n\t        \n\t        <div class=\"form-check\"\n\n\t\t          [ngClass]=\"{'ng-valid': detail['enable'] == true || detail['enable'] == false,\n\t\t                      'ng-invalid': detail['enable'] != true && detail['enable'] != false}\"\n\t\t        \n\t\t        >\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableYes\" [value]=\"true\" \n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Yes</label>\n\t\t      </div>\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableNo\" [value]=\"false\"\n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">No</label>\n\t\t      </div>\n\t\t      \n\t\t    </div>\n\t        <div [hidden]=\"EditEnable.valid || EditEnable.pristine\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditEnable.errors && EditEnable.errors.required\">\n    \t        Enable is required.\n  \t          </div>\n \n\t        </div>\n\t\t  </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('question')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditQuestion\">Question</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditQuestion\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['question']\" name=\"EditQuestion\"\n\t\t                #EditQuestion=\"ngModel\">\n                <div *ngIf=\"detail['question']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('question')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditQuestion.valid || EditQuestion.pristine || EditQuestion.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditQuestion.errors && EditQuestion.errors.required\">\n    \t        Question is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('answer')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditAnswer\">Answer</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditAnswer\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['answer']\" name=\"EditAnswer\"\n\t\t                #EditAnswer=\"ngModel\">\n                <div *ngIf=\"detail['answer']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('answer')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditAnswer.valid || EditAnswer.pristine || EditAnswer.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditAnswer.errors && EditAnswer.errors.required\">\n    \t        Answer is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('order')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditOrder\">Order</label>\n\t        \n\t        <input type=\"number\" class=\"form-control\" id=\"EditOrder\" \n\t                \n\t                \n\t                required\n\t\t        \t \n\t                [(ngModel)]=\"detail['order']\" name=\"EditOrder\"\n\t                #EditOrder=\"ngModel\">\n\t        <div [hidden]=\"EditOrder.valid || EditOrder.pristine || EditOrder.errors.minnumber\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditOrder.errors && EditOrder.errors.required\">\n    \t        Order is required.\n  \t          </div>\n \n\n\t        </div>\n\n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('enable')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditEnable\">Enable</label>\n\t        \n\t        <div class=\"form-check\"\n\n\t\t          [ngClass]=\"{'ng-valid': detail['enable'] == true || detail['enable'] == false,\n\t\t                      'ng-invalid': detail['enable'] != true && detail['enable'] != false}\"\n\t\t        \n\t\t        >\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableYes\" [value]=\"true\" \n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Yes</label>\n\t\t      </div>\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableNo\" [value]=\"false\"\n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">No</label>\n\t\t      </div>\n\t\t      \n\t\t    </div>\n\t        <div [hidden]=\"EditEnable.valid || EditEnable.pristine\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditEnable.errors && EditEnable.errors.required\">\n    \t        Enable is required.\n  \t          </div>\n \n\t        </div>\n\t\t  </fieldset>\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-edit/faq-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: FaqEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqEditComponent", function() { return FaqEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faq.component */ "./src/app/publicinfo/faq/faq.component.ts");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../faq.service */ "./src/app/publicinfo/faq/faq.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqEditComponent = /** @class */ (function (_super) {
    __extends(FaqEditComponent, _super);
    function FaqEditComponent(faqService, injector, router, route, location) {
        var _this = _super.call(this, faqService, injector, router, route, location, _faq_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.faqService = faqService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.stringFields.push('question');
        _this.stringFields.push('answer');
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    FaqEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {
                    enable: false,
                };
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {
                    enable: false,
                };
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FaqEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FaqEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FaqEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FaqEditComponent.prototype, "done", void 0);
    FaqEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-edit',
            template: __webpack_require__(/*! ./faq-edit.component.html */ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.html"),
            styles: [__webpack_require__(/*! ./faq-edit.component.css */ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FaqEditComponent);
    return FaqEditComponent;
}(_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/faq/faq-list/faq-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-list/faq-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9mYXEvZmFxLWxpc3QvZmFxLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUdBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLElBQUkseUNBQXlDO0lBQy9ELFNBQVM7QUFDYjs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLHFCQUFxQjtFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBR0E7SUFDSSxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBLGdDQUFnQzs7QUFDNUI7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztJQUNiOztBQUNBO01BQ0UseUJBQXlCO0lBQzNCOztBQUNBO01BQ0Usa0NBQWtDO01BQ2xDLFlBQVk7SUFDZDs7QUFDQTtNQUNFLHdDQUF3QztJQUMxQzs7QUFFQTtFQUNGLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixvQkFBb0I7SUFDbEI7O0FBRUo7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vZmFxL2ZhcS1saXN0L2ZhcS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG5cdG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxudGQgaSB7XG5cdGNvbG9yOmJsYWNrO1xuXHRtYXJnaW4tbGVmdDogMC41cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbnRkIGEgaTpob3ZlciB7XG5cdGNvbG9yOiBibHVlO1xufVxudGQgYSBpLmZhLXRyYXNoLWFsdDpob3ZlciB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5cbi5wYWdpbmF0aW9uIGxpIHtcblx0bWluLXdpZHRoOiAyLjhyZW07XG59XG4udG90YWxfY291bnRzIHtcblx0cGFkZGluZy10b3A6IDAuOHJlbTtcbn1cblxuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1jbGVhciB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogMztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07ICAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5yZWZpbmUtc2VhcmNoLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBjb2xvcjogIzg2ODE4MTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xufVxuLnNlbGVjdGVkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjYzlmNWViO1xufVxuXG5cbnRyIHRoOmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOjglO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQge1xuXHRcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcblx0cGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4gICAgLmN1c3RvbS1kYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gICAgfVxuICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xuICAgIH1cbiAgICBcbiAgICAuZGF0ZS1zZWxlY3Rpb24tcG9wIHtcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHR0b3A6MTAwJTtcblx0XHRsZWZ0OjA7XG5cdFx0ei1pbmRleDoxMDAwO1xuXHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0ZmxvYXQ6bGVmdDtcblx0XHRtaW4td2lkdGg6MTByZW07XG5cdFx0LypwYWRkaW5nOi41cmVtIDA7Ki9cblx0XHRtYXJnaW46LjEyNXJlbSAwIDA7XG5cdFx0Zm9udC1zaXplOjFyZW07XG5cdFx0Y29sb3I6IzIxMjUyOTtcblx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0bGlzdC1zdHlsZTpub25lO1xuXHRcdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0XHRiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XG5cdFx0Ym9yZGVyOsKgMXB4IHNvbGlkwqAjZGZkZmRmO1xuXHRcdGJvcmRlci1yYWRpdXM6LjI1cmVtO1xuICAgIH1cbiAgICBcbi5hZGQtYXJlYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG59XG5cbi5iYWRnZS1jbGljayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/publicinfo/faq/faq-list/faq-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-list/faq-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"faqTextSearch\" \n\t\t\t\t\t\t#faqTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for question, answer\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\t<div class=\"text-center\">\n                    <span  class=\"pointer\" (click)=\"toggleMoreSearch()\">\n                        <span class=\"refine-search-text\">Refine Search &nbsp;</span>\n                        <span>\n                            <i *ngIf=\"!moreSearchOpened\"  class=\"fas fa-plus-circle\" title=\"More\"></i>\n                            <i *ngIf=\"moreSearchOpened\" class=\"fas fa-minus-circle\"  title=\"Less\"></i>\n                        </span>\n                    </span>\n\t\t\t\t</div>\n\t\t\t    <div class=\"shadow\" *ngIf=\"moreSearchOpened\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"faqEditOrder\">Order</label></div>\n\t        <div class=\"col-8\">\n\n\n\t        <input type=\"number\" class=\"form-control\" id=\"faqEditOrder\" \n\t                [(ngModel)]=\"detail['order']\" name=\"faqEditOrder\"\n\t                #faqEditOrder=\"ngModel\">\n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('order')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('order')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"faqEditEnable\">Enable</label></div>\n\t        <div class=\"col-8\">\n\n\n\t        <div class=\"form-check\">\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"faqEditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"faqEditEnableYes\" [value]=\"true\" \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#faqEditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Yes</label>\n\t\t      </div>\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"faqEditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"faqEditEnableNo\" [value]=\"false\"\n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#faqEditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">No</label>\n\t\t      </div>\n\t\t    </div>\n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('enable')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('enable')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\n\t\t\t\t\t\t  <div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onSearchClear()\">Reset</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"searchList()\">Search</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t        <div *ngIf=\"!moreSearchOpened\" style=\"text-align: left;\">\n\t\t\t\t\t<span class=\"badge badge-pill badge-info\" *ngFor=\"let value of searchMoreDetail\">\n\t\t\t\t\t    <a (click)=\"toggleMoreSearch()\" class=\"pointer\"> {{value[0]}}: {{value[1]}}</a>\n\t\t\t\t\t    <i class=\"fas fa-times-circle icon-clear-badge\" (click)=\"clearValueFromDetailAndSearchList(value[0])\" title=\"Clear\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t    \n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDeleteSelected()\"\n\t\t\t\t\t\t[ngClass]=\"{'disabled': !isItemSelected()}\">Delete</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t\t<a class=\"float-right\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Question</th>\n\t\t        <th scope=\"col\">Answer</th>\n\t\t        <th scope=\"col\">Order</th>\n\t\t        <th scope=\"col\">Enable</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:6rem;\"></th>\n\t\t        <th scope=\"col\" style=\"width:2rem;\">\n\t\t        \t<input type=\"checkbox\" [(ngModel)]=\"checkAll\" (change)=\"onCheckAllChange()\">\n\t\t        </th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t{{(page-1)*per_page+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['question']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['answer']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['order']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['enable']}} \n\n\t            </td>\n\t            \n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\t            </td>\n\t            \n\t            <td>      \n\t            \t<input type=\"checkbox\" [(ngModel)]=\"checkedItem[i]\"/>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/publicinfo/faq/faq-list/faq-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/publicinfo/faq/faq-list/faq-list.component.ts ***!
  \***************************************************************/
/*! exports provided: FaqListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqListComponent", function() { return FaqListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faq.component */ "./src/app/publicinfo/faq/faq.component.ts");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../faq.service */ "./src/app/publicinfo/faq/faq.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqListComponent = /** @class */ (function (_super) {
    __extends(FaqListComponent, _super);
    function FaqListComponent(faqService, injector, router, route, location) {
        var _this = _super.call(this, faqService, injector, router, route, location, _faq_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.faqService = faqService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('question');
        _this.stringFields.push('answer');
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    FaqListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    FaqListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-list',
            template: __webpack_require__(/*! ./faq-list.component.html */ "./src/app/publicinfo/faq/faq-list/faq-list.component.html"),
            styles: [__webpack_require__(/*! ./faq-list.component.css */ "./src/app/publicinfo/faq/faq-list/faq-list.component.css")]
        }),
        __metadata("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FaqListComponent);
    return FaqListComponent;
}(_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/faq/faq.base.service.ts":
/*!****************************************************!*\
  !*** ./src/app/publicinfo/faq/faq.base.service.ts ***!
  \****************************************************/
/*! exports provided: FaqBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqBaseService", function() { return FaqBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/faq/';
var FaqBaseService = /** @class */ (function (_super) {
    __extends(FaqBaseService, _super);
    function FaqBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return FaqBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/publicinfo/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/publicinfo/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: ViewType, FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var itemCamelName = 'faq';

var FaqComponent = /** @class */ (function (_super) {
    __extends(FaqComponent, _super);
    function FaqComponent(faqService, injector, router, route, location, view) {
        var _this = _super.call(this, faqService, injector, router, route, location, view, itemCamelName) || this;
        _this.faqService = faqService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.indexFields = ['question',];
        return _this;
    }
    return FaqComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/faq/faq.service.ts":
/*!***********************************************!*\
  !*** ./src/app/publicinfo/faq/faq.service.ts ***!
  \***********************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _faq_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.base.service */ "./src/app/publicinfo/faq/faq.base.service.ts");
/* harmony import */ var _publicinfo_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publicinfo.tokens */ "./src/app/publicinfo/publicinfo.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FaqService = /** @class */ (function (_super) {
    __extends(FaqService, _super);
    function FaqService(http, publicinfoServerRootUri) {
        var _this = _super.call(this, http, publicinfoServerRootUri) || this;
        _this.publicinfoServerRootUri = publicinfoServerRootUri;
        return _this;
    }
    FaqService.prototype.ngOnDestroy = function () { };
    FaqService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_publicinfo_tokens__WEBPACK_IMPORTED_MODULE_3__["Publicinfo_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], FaqService);
    return FaqService;
}(_faq_base_service__WEBPACK_IMPORTED_MODULE_2__["FaqBaseService"]));



/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list {\n\tfloat: left;\n\tdisplay: inline-block;\n\t/*margin-left: 2.5rem;*/\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9nZW5lcmFsaW5mby9nZW5lcmFsaW5mby1kZXRhaWwvZ2VuZXJhbGluZm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCLGVBQWU7QUFDaEI7O0FBQ0E7Ozs7Q0FJQzs7QUFDRDtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxRUFBcUU7QUFDekU7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWNpbmZvL2dlbmVyYWxpbmZvL2dlbmVyYWxpbmZvLWRldGFpbC9nZW5lcmFsaW5mby1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0LCAuZmEtbGlzdCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdC8qbWFyZ2luLWxlZnQ6IDIuNXJlbTsqL1xuXHRtYXJnaW4tdG9wOiAgMC43NXJlbVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMgc3BhbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAwcmVtO1xuXHRtYXJnaW4tdG9wOiAgMC41cmVtXG59XG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG4vKlxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuKi9cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB6LWluZGV4OiAxMDAwOyBcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAvKm1hcmdpbjogYXV0bzsqL1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t\t<a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDelete(detail['_id'], null)\">Delete</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">{{ItemCamelName}} Detail\n\t    \t<a class=\"float-right\" style=\"font-size: 1rem;\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t    </h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Title</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['title']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Description</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['description']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Order</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['order']}} \n</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Enable</label></div>\n\t\t\t<div class=\"col-9\">                  {{detail['enable']}} \n</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: GeneralinfoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinfoDetailComponent", function() { return GeneralinfoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generalinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalinfo.component */ "./src/app/publicinfo/generalinfo/generalinfo.component.ts");
/* harmony import */ var _generalinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generalinfo.service */ "./src/app/publicinfo/generalinfo/generalinfo.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralinfoDetailComponent = /** @class */ (function (_super) {
    __extends(GeneralinfoDetailComponent, _super);
    function GeneralinfoDetailComponent(generalinfoService, injector, router, route, location) {
        var _this = _super.call(this, generalinfoService, injector, router, route, location, _generalinfo_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.generalinfoService = generalinfoService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('title');
        _this.stringFields.push('description');
        return _this;
    }
    GeneralinfoDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GeneralinfoDetailComponent.prototype, "id", void 0);
    GeneralinfoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generalinfo-detail',
            template: __webpack_require__(/*! ./generalinfo-detail.component.html */ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.html"),
            styles: [__webpack_require__(/*! ./generalinfo-detail.component.css */ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_generalinfo_service__WEBPACK_IMPORTED_MODULE_4__["GeneralinfoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], GeneralinfoDetailComponent);
    return GeneralinfoDetailComponent;
}(_generalinfo_component__WEBPACK_IMPORTED_MODULE_3__["GeneralinfoComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9nZW5lcmFsaW5mby9nZW5lcmFsaW5mby1lZGl0L2dlbmVyYWxpbmZvLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUdBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0NBQ3BCLGVBQWU7QUFDaEI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDs7OztDQUlDOztBQUVEO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQzs7QUFFQTtDQUNDLHlCQUF5QjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHFCQUFxQjtFQUNoRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGVBQWU7O0VBRWYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLElBQUkseUNBQXlDO0lBQy9ELFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vZ2VuZXJhbGluZm8vZ2VuZXJhbGluZm8tZWRpdC9nZW5lcmFsaW5mby1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG5cdHdpZHRoOiA3NSU7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldCA+IC5mb3JtLWNvbnRyb2wsIC5pbnB1dC1ncm91cCwgLmZvcm0tY2hlY2ssIC5hbGVydCB7XG5cdHdpZHRoOiA5MCVcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucyAuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xuXHRmbG9hdDogbGVmdDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMi41cmVtO1xuXHRtYXJnaW4tdG9wOiAgMC43NXJlbVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zLWNlbnRlciAuYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMi41cmVtO1xufVxuXG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi8qXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLypcbi5uZy12YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICpcbn1cbiovXG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5pY29uLXNlYXJjaCwgLmljb24tY2xlYXIge1xuICB6LWluZGV4OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiBzcGFuIHtcbm1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogMztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItaW5zaWRlLXNtIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} General Information</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('title')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditTitle\">Title</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditTitle\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['title']\" name=\"EditTitle\"\n\t\t                #EditTitle=\"ngModel\">\n                <div *ngIf=\"detail['title']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('title')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditTitle.valid || EditTitle.pristine || EditTitle.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditTitle.errors && EditTitle.errors.required\">\n    \t        Title is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('description')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditDescription\">Description</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditDescription\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['description']\" name=\"EditDescription\"\n\t\t                #EditDescription=\"ngModel\">\n                <div *ngIf=\"detail['description']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('description')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditDescription.valid || EditDescription.pristine || EditDescription.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditDescription.errors && EditDescription.errors.required\">\n    \t        Description is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('order')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditOrder\">Order</label>\n\t        \n\t        <input type=\"number\" class=\"form-control\" id=\"EditOrder\" \n\t                \n\t                \n\t                required\n\t\t        \t \n\t                [(ngModel)]=\"detail['order']\" name=\"EditOrder\"\n\t                #EditOrder=\"ngModel\">\n\t        <div [hidden]=\"EditOrder.valid || EditOrder.pristine || EditOrder.errors.minnumber\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditOrder.errors && EditOrder.errors.required\">\n    \t        Order is required.\n  \t          </div>\n \n\n\t        </div>\n\n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('enable')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditEnable\">Enable</label>\n\t        \n\t        <div class=\"form-check\"\n\n\t\t          [ngClass]=\"{'ng-valid': detail['enable'] == true || detail['enable'] == false,\n\t\t                      'ng-invalid': detail['enable'] != true && detail['enable'] != false}\"\n\t\t        \n\t\t        >\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableYes\" [value]=\"true\" \n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Yes</label>\n\t\t      </div>\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableNo\" [value]=\"false\"\n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">No</label>\n\t\t      </div>\n\t\t      \n\t\t    </div>\n\t        <div [hidden]=\"EditEnable.valid || EditEnable.pristine\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditEnable.errors && EditEnable.errors.required\">\n    \t        Enable is required.\n  \t          </div>\n \n\t        </div>\n\t\t  </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('title')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditTitle\">Title</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditTitle\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['title']\" name=\"EditTitle\"\n\t\t                #EditTitle=\"ngModel\">\n                <div *ngIf=\"detail['title']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('title')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditTitle.valid || EditTitle.pristine || EditTitle.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditTitle.errors && EditTitle.errors.required\">\n    \t        Title is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('description')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditDescription\">Description</label>\n\t        \n\n        \t<div class=\"input-group\">\n\t\t        <input type=\"text\" class=\"form-control rounded\" id=\"EditDescription\" \n\t\t                required\n\t\t                \n\t\t                \n\t\t\t        \t \n\t\t                [(ngModel)]=\"detail['description']\" name=\"EditDescription\"\n\t\t                #EditDescription=\"ngModel\">\n                <div *ngIf=\"detail['description']\" \n\t\t\t          class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('description')\">\n\t\t\t          <i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t        </div>\n\n\t        <div [hidden]=\"EditDescription.valid || EditDescription.pristine || EditDescription.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditDescription.errors && EditDescription.errors.required\">\n    \t        Description is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('order')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditOrder\">Order</label>\n\t        \n\t        <input type=\"number\" class=\"form-control\" id=\"EditOrder\" \n\t                \n\t                \n\t                required\n\t\t        \t \n\t                [(ngModel)]=\"detail['order']\" name=\"EditOrder\"\n\t                #EditOrder=\"ngModel\">\n\t        <div [hidden]=\"EditOrder.valid || EditOrder.pristine || EditOrder.errors.minnumber\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditOrder.errors && EditOrder.errors.required\">\n    \t        Order is required.\n  \t          </div>\n \n\n\t        </div>\n\n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('enable')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"EditEnable\">Enable</label>\n\t        \n\t        <div class=\"form-check\"\n\n\t\t          [ngClass]=\"{'ng-valid': detail['enable'] == true || detail['enable'] == false,\n\t\t                      'ng-invalid': detail['enable'] != true && detail['enable'] != false}\"\n\t\t        \n\t\t        >\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableYes\" [value]=\"true\" \n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Yes</label>\n\t\t      </div>\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"EditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"EditEnableNo\" [value]=\"false\"\n\t\t        \trequired\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#EditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">No</label>\n\t\t      </div>\n\t\t      \n\t\t    </div>\n\t        <div [hidden]=\"EditEnable.valid || EditEnable.pristine\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"EditEnable.errors && EditEnable.errors.required\">\n    \t        Enable is required.\n  \t          </div>\n \n\t        </div>\n\t\t  </fieldset>\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GeneralinfoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinfoEditComponent", function() { return GeneralinfoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generalinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalinfo.component */ "./src/app/publicinfo/generalinfo/generalinfo.component.ts");
/* harmony import */ var _generalinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generalinfo.service */ "./src/app/publicinfo/generalinfo/generalinfo.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralinfoEditComponent = /** @class */ (function (_super) {
    __extends(GeneralinfoEditComponent, _super);
    function GeneralinfoEditComponent(generalinfoService, injector, router, route, location) {
        var _this = _super.call(this, generalinfoService, injector, router, route, location, _generalinfo_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.generalinfoService = generalinfoService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.stringFields.push('title');
        _this.stringFields.push('description');
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    GeneralinfoEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {
                    enable: false,
                };
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {
                    enable: false,
                };
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GeneralinfoEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GeneralinfoEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneralinfoEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GeneralinfoEditComponent.prototype, "done", void 0);
    GeneralinfoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generalinfo-edit',
            template: __webpack_require__(/*! ./generalinfo-edit.component.html */ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.html"),
            styles: [__webpack_require__(/*! ./generalinfo-edit.component.css */ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_generalinfo_service__WEBPACK_IMPORTED_MODULE_4__["GeneralinfoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], GeneralinfoEditComponent);
    return GeneralinfoEditComponent;
}(_generalinfo_component__WEBPACK_IMPORTED_MODULE_3__["GeneralinfoComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljaW5mby9nZW5lcmFsaW5mby9nZW5lcmFsaW5mby1saXN0L2dlbmVyYWxpbmZvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUdBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLElBQUkseUNBQXlDO0lBQy9ELFNBQVM7QUFDYjs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLHFCQUFxQjtFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBR0E7SUFDSSxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBLGdDQUFnQzs7QUFDNUI7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztJQUNiOztBQUNBO01BQ0UseUJBQXlCO0lBQzNCOztBQUNBO01BQ0Usa0NBQWtDO01BQ2xDLFlBQVk7SUFDZDs7QUFDQTtNQUNFLHdDQUF3QztJQUMxQzs7QUFFQTtFQUNGLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixvQkFBb0I7SUFDbEI7O0FBRUo7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vZ2VuZXJhbGluZm8vZ2VuZXJhbGluZm8tbGlzdC9nZW5lcmFsaW5mby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG5cdG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxudGQgaSB7XG5cdGNvbG9yOmJsYWNrO1xuXHRtYXJnaW4tbGVmdDogMC41cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbnRkIGEgaTpob3ZlciB7XG5cdGNvbG9yOiBibHVlO1xufVxudGQgYSBpLmZhLXRyYXNoLWFsdDpob3ZlciB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5cbi5wYWdpbmF0aW9uIGxpIHtcblx0bWluLXdpZHRoOiAyLjhyZW07XG59XG4udG90YWxfY291bnRzIHtcblx0cGFkZGluZy10b3A6IDAuOHJlbTtcbn1cblxuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1jbGVhciB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogMztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07ICAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5yZWZpbmUtc2VhcmNoLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBjb2xvcjogIzg2ODE4MTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xufVxuLnNlbGVjdGVkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjYzlmNWViO1xufVxuXG5cbnRyIHRoOmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOjglO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQge1xuXHRcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcblx0cGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4gICAgLmN1c3RvbS1kYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gICAgfVxuICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xuICAgIH1cbiAgICBcbiAgICAuZGF0ZS1zZWxlY3Rpb24tcG9wIHtcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHR0b3A6MTAwJTtcblx0XHRsZWZ0OjA7XG5cdFx0ei1pbmRleDoxMDAwO1xuXHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0ZmxvYXQ6bGVmdDtcblx0XHRtaW4td2lkdGg6MTByZW07XG5cdFx0LypwYWRkaW5nOi41cmVtIDA7Ki9cblx0XHRtYXJnaW46LjEyNXJlbSAwIDA7XG5cdFx0Zm9udC1zaXplOjFyZW07XG5cdFx0Y29sb3I6IzIxMjUyOTtcblx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0bGlzdC1zdHlsZTpub25lO1xuXHRcdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0XHRiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XG5cdFx0Ym9yZGVyOsKgMXB4IHNvbGlkwqAjZGZkZmRmO1xuXHRcdGJvcmRlci1yYWRpdXM6LjI1cmVtO1xuICAgIH1cbiAgICBcbi5hZGQtYXJlYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG59XG5cbi5iYWRnZS1jbGljayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"generalinfoTextSearch\" \n\t\t\t\t\t\t#generalinfoTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for title, description\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\t<div class=\"text-center\">\n                    <span  class=\"pointer\" (click)=\"toggleMoreSearch()\">\n                        <span class=\"refine-search-text\">Refine Search &nbsp;</span>\n                        <span>\n                            <i *ngIf=\"!moreSearchOpened\"  class=\"fas fa-plus-circle\" title=\"More\"></i>\n                            <i *ngIf=\"moreSearchOpened\" class=\"fas fa-minus-circle\"  title=\"Less\"></i>\n                        </span>\n                    </span>\n\t\t\t\t</div>\n\t\t\t    <div class=\"shadow\" *ngIf=\"moreSearchOpened\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"generalinfoEditOrder\">Order</label></div>\n\t        <div class=\"col-8\">\n\n\n\t        <input type=\"number\" class=\"form-control\" id=\"generalinfoEditOrder\" \n\t                [(ngModel)]=\"detail['order']\" name=\"generalinfoEditOrder\"\n\t                #generalinfoEditOrder=\"ngModel\">\n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('order')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('order')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"generalinfoEditEnable\">Enable</label></div>\n\t        <div class=\"col-8\">\n\n\n\t        <div class=\"form-check\">\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"generalinfoEditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"generalinfoEditEnableYes\" [value]=\"true\" \n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#generalinfoEditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Yes</label>\n\t\t      </div>\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"generalinfoEditEnable\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \tid=\"generalinfoEditEnableNo\" [value]=\"false\"\n\t\t        \t[(ngModel)]=\"detail['enable']\"\n\t\t        \t#generalinfoEditEnable=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">No</label>\n\t\t      </div>\n\t\t    </div>\n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('enable')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('enable')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n \n\n\t\t\t\t\t\t  <div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onSearchClear()\">Reset</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"searchList()\">Search</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t        <div *ngIf=\"!moreSearchOpened\" style=\"text-align: left;\">\n\t\t\t\t\t<span class=\"badge badge-pill badge-info\" *ngFor=\"let value of searchMoreDetail\">\n\t\t\t\t\t    <a (click)=\"toggleMoreSearch()\" class=\"pointer\"> {{value[0]}}: {{value[1]}}</a>\n\t\t\t\t\t    <i class=\"fas fa-times-circle icon-clear-badge\" (click)=\"clearValueFromDetailAndSearchList(value[0])\" title=\"Clear\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t    \n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t<a routerLink=\".\" class=\"btn btn-outline-primary\" (click)=\"onDeleteSelected()\"\n\t\t\t\t\t\t[ngClass]=\"{'disabled': !isItemSelected()}\">Delete</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t\t<a class=\"float-right\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Title</th>\n\t\t        <th scope=\"col\">Description</th>\n\t\t        <th scope=\"col\">Order</th>\n\t\t        <th scope=\"col\">Enable</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:6rem;\"></th>\n\t\t        <th scope=\"col\" style=\"width:2rem;\">\n\t\t        \t<input type=\"checkbox\" [(ngModel)]=\"checkAll\" (change)=\"onCheckAllChange()\">\n\t\t        </th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t{{(page-1)*per_page+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['title']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['description']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['order']}} \n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                  {{detail['enable']}} \n\n\t            </td>\n\t            \n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a routerLink=\".\" (click)=\"onDelete(detail['_id'], i)\"><i class=\"fas fa-trash-alt\" title=\"Delete\"></i></a>\n\t            </td>\n\t            \n\t            <td>      \n\t            \t<input type=\"checkbox\" [(ngModel)]=\"checkedItem[i]\"/>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\tTotal: <b>{{total_count}}</b> items\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GeneralinfoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinfoListComponent", function() { return GeneralinfoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generalinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalinfo.component */ "./src/app/publicinfo/generalinfo/generalinfo.component.ts");
/* harmony import */ var _generalinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generalinfo.service */ "./src/app/publicinfo/generalinfo/generalinfo.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralinfoListComponent = /** @class */ (function (_super) {
    __extends(GeneralinfoListComponent, _super);
    function GeneralinfoListComponent(generalinfoService, injector, router, route, location) {
        var _this = _super.call(this, generalinfoService, injector, router, route, location, _generalinfo_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.generalinfoService = generalinfoService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('title');
        _this.stringFields.push('description');
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    GeneralinfoListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    GeneralinfoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generalinfo-list',
            template: __webpack_require__(/*! ./generalinfo-list.component.html */ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.html"),
            styles: [__webpack_require__(/*! ./generalinfo-list.component.css */ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_generalinfo_service__WEBPACK_IMPORTED_MODULE_4__["GeneralinfoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], GeneralinfoListComponent);
    return GeneralinfoListComponent;
}(_generalinfo_component__WEBPACK_IMPORTED_MODULE_3__["GeneralinfoComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo.base.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo.base.service.ts ***!
  \********************************************************************/
/*! exports provided: GeneralinfoBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinfoBaseService", function() { return GeneralinfoBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/generalinfo/';
var GeneralinfoBaseService = /** @class */ (function (_super) {
    __extends(GeneralinfoBaseService, _super);
    function GeneralinfoBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return GeneralinfoBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewType, GeneralinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinfoComponent", function() { return GeneralinfoComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var itemCamelName = 'generalInfo';

var GeneralinfoComponent = /** @class */ (function (_super) {
    __extends(GeneralinfoComponent, _super);
    function GeneralinfoComponent(generalinfoService, injector, router, route, location, view) {
        var _this = _super.call(this, generalinfoService, injector, router, route, location, view, itemCamelName) || this;
        _this.generalinfoService = generalinfoService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.indexFields = ['title',];
        return _this;
    }
    return GeneralinfoComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/publicinfo/generalinfo/generalinfo.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/publicinfo/generalinfo/generalinfo.service.ts ***!
  \***************************************************************/
/*! exports provided: GeneralinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinfoService", function() { return GeneralinfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _generalinfo_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalinfo.base.service */ "./src/app/publicinfo/generalinfo/generalinfo.base.service.ts");
/* harmony import */ var _publicinfo_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publicinfo.tokens */ "./src/app/publicinfo/publicinfo.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var GeneralinfoService = /** @class */ (function (_super) {
    __extends(GeneralinfoService, _super);
    function GeneralinfoService(http, publicinfoServerRootUri) {
        var _this = _super.call(this, http, publicinfoServerRootUri) || this;
        _this.publicinfoServerRootUri = publicinfoServerRootUri;
        return _this;
    }
    GeneralinfoService.prototype.ngOnDestroy = function () { };
    GeneralinfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_publicinfo_tokens__WEBPACK_IMPORTED_MODULE_3__["Publicinfo_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], GeneralinfoService);
    return GeneralinfoService;
}(_generalinfo_base_service__WEBPACK_IMPORTED_MODULE_2__["GeneralinfoBaseService"]));



/***/ }),

/***/ "./src/app/publicinfo/publicinfo-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/publicinfo/publicinfo-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PublicinfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicinfoRoutingModule", function() { return PublicinfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony import */ var _publicinfo_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publicinfo.conf */ "./src/app/publicinfo.conf.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PublicinfoRoutingModule = /** @class */ (function () {
    function PublicinfoRoutingModule() {
    }
    PublicinfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_publicinfo_conf__WEBPACK_IMPORTED_MODULE_3__["PublicinfoRoutes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"], useClass: mean_rest_angular__WEBPACK_IMPORTED_MODULE_2__["MraRouteReuseStrategy"] },
            ],
        })
    ], PublicinfoRoutingModule);
    return PublicinfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/publicinfo/publicinfo-routing.path.ts":
/*!*******************************************************!*\
  !*** ./src/app/publicinfo/publicinfo-routing.path.ts ***!
  \*******************************************************/
/*! exports provided: generalinfoRoutingPath, faqRoutingPath, eventRoutingPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalinfoRoutingPath", function() { return generalinfoRoutingPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqRoutingPath", function() { return faqRoutingPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventRoutingPath", function() { return eventRoutingPath; });
/* harmony import */ var _generalinfo_generalinfo_list_generalinfo_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalinfo/generalinfo-list/generalinfo-list.component */ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.ts");
/* harmony import */ var _generalinfo_generalinfo_detail_generalinfo_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalinfo/generalinfo-detail/generalinfo-detail.component */ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.ts");
/* harmony import */ var _generalinfo_generalinfo_edit_generalinfo_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalinfo/generalinfo-edit/generalinfo-edit.component */ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.ts");
/* harmony import */ var _faq_faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq/faq-list/faq-list.component */ "./src/app/publicinfo/faq/faq-list/faq-list.component.ts");
/* harmony import */ var _faq_faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq-detail/faq-detail.component */ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.ts");
/* harmony import */ var _faq_faq_edit_faq_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq-edit/faq-edit.component */ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.ts");
/* harmony import */ var _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event/event-list/event-list.component */ "./src/app/publicinfo/event/event-list/event-list.component.ts");
/* harmony import */ var _event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event/event-detail/event-detail.component */ "./src/app/publicinfo/event/event-detail/event-detail.component.ts");
/* harmony import */ var _event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event/event-edit/event-edit.component */ "./src/app/publicinfo/event/event-edit/event-edit.component.ts");
/* harmony import */ var _auth___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/ */ "./src/app/auth/index.ts");
// Import components for each schema










var generalinfoRoutingPath = [
    { path: 'list', component: _generalinfo_generalinfo_list_generalinfo_list_component__WEBPACK_IMPORTED_MODULE_0__["GeneralinfoListComponent"] },
    { path: 'detail/:id', component: _generalinfo_generalinfo_detail_generalinfo_detail_component__WEBPACK_IMPORTED_MODULE_1__["GeneralinfoDetailComponent"] },
    { path: 'edit/:id', component: _generalinfo_generalinfo_edit_generalinfo_edit_component__WEBPACK_IMPORTED_MODULE_2__["GeneralinfoEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'new', component: _generalinfo_generalinfo_edit_generalinfo_edit_component__WEBPACK_IMPORTED_MODULE_2__["GeneralinfoEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];
var faqRoutingPath = [
    { path: 'list', component: _faq_faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_3__["FaqListComponent"] },
    { path: 'detail/:id', component: _faq_faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_4__["FaqDetailComponent"] },
    { path: 'edit/:id', component: _faq_faq_edit_faq_edit_component__WEBPACK_IMPORTED_MODULE_5__["FaqEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'new', component: _faq_faq_edit_faq_edit_component__WEBPACK_IMPORTED_MODULE_5__["FaqEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];
var eventRoutingPath = [
    { path: 'list', component: _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__["EventListComponent"] },
    { path: 'detail/:id', component: _event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailComponent"] },
    { path: 'edit/:id', component: _event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_8__["EventEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'new', component: _event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_8__["EventEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/publicinfo/publicinfo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/publicinfo/publicinfo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2luZm8vcHVibGljaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/publicinfo/publicinfo.component.html":
/*!******************************************************!*\
  !*** ./src/app/publicinfo/publicinfo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\t\t<div class=\"card\">\n\t\t  <div class=\"card-header\">\n\t\t\t  <nav class=\"nav nav-pills\">\n\n\t\t\t    <a class=\"nav-item nav-link\" routerLink=\"./generalinfo\" \n\t\t\t    \trouterLinkActive=\"active\">General Information</a>\n\n\t\t\t    <a class=\"nav-item nav-link\" routerLink=\"./faq\" \n\t\t\t    \trouterLinkActive=\"active\">FAQ</a>\n\n\t\t\t    <a class=\"nav-item nav-link\" routerLink=\"./event\" \n\t\t\t    \trouterLinkActive=\"active\">Event</a>\n\n\t\t\t  </nav>\n\t\t  </div>\n\t\t  <div class=\"card-body\">\n\t\t\t<router-outlet></router-outlet>\n\t\t  </div>\n\t\t</div>\n\t</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/publicinfo/publicinfo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/publicinfo/publicinfo.component.ts ***!
  \****************************************************/
/*! exports provided: PublicinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicinfoComponent", function() { return PublicinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicinfoComponent = /** @class */ (function () {
    function PublicinfoComponent() {
    }
    PublicinfoComponent.prototype.ngOnInit = function () {
    };
    PublicinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publicinfo',
            template: __webpack_require__(/*! ./publicinfo.component.html */ "./src/app/publicinfo/publicinfo.component.html"),
            styles: [__webpack_require__(/*! ./publicinfo.component.css */ "./src/app/publicinfo/publicinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicinfoComponent);
    return PublicinfoComponent;
}());



/***/ }),

/***/ "./src/app/publicinfo/publicinfo.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/publicinfo/publicinfo.directive.ts ***!
  \****************************************************/
/*! exports provided: MraNgbDateFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MraNgbDateFormatterService", function() { return MraNgbDateFormatterService; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MraNgbDateFormatterService = /** @class */ (function (_super) {
    __extends(MraNgbDateFormatterService, _super);
    function MraNgbDateFormatterService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateFormat = 'MM-DD-YYYY';
        _this.timeFormat = 'hh:mm:ss';
        return _this;
    }
    // from input -> internal model
    MraNgbDateFormatterService.prototype.parse = function (value) {
        return Object(mean_rest_angular__WEBPACK_IMPORTED_MODULE_1__["stringToDateStructure"])(value, this.dateFormat);
    };
    // from internal model -> string
    MraNgbDateFormatterService.prototype.format = function (date) {
        return Object(mean_rest_angular__WEBPACK_IMPORTED_MODULE_1__["dateStructureToString"])(date, this.dateFormat);
    };
    return MraNgbDateFormatterService;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/publicinfo/publicinfo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/publicinfo/publicinfo.module.ts ***!
  \*************************************************/
/*! exports provided: PublicinfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicinfoModule", function() { return PublicinfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _publicinfo_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicinfo.directive */ "./src/app/publicinfo/publicinfo.directive.ts");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony import */ var _publicinfo_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./publicinfo-routing.module */ "./src/app/publicinfo/publicinfo-routing.module.ts");
/* harmony import */ var _publicinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publicinfo.component */ "./src/app/publicinfo/publicinfo.component.ts");
/* harmony import */ var _publicinfo_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publicinfo.tokens */ "./src/app/publicinfo/publicinfo.tokens.ts");
/* harmony import */ var _publicinfo_conf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../publicinfo.conf */ "./src/app/publicinfo.conf.ts");
/* harmony import */ var _generalinfo_generalinfo_list_generalinfo_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generalinfo/generalinfo-list/generalinfo-list.component */ "./src/app/publicinfo/generalinfo/generalinfo-list/generalinfo-list.component.ts");
/* harmony import */ var _generalinfo_generalinfo_detail_generalinfo_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./generalinfo/generalinfo-detail/generalinfo-detail.component */ "./src/app/publicinfo/generalinfo/generalinfo-detail/generalinfo-detail.component.ts");
/* harmony import */ var _generalinfo_generalinfo_edit_generalinfo_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generalinfo/generalinfo-edit/generalinfo-edit.component */ "./src/app/publicinfo/generalinfo/generalinfo-edit/generalinfo-edit.component.ts");
/* harmony import */ var _generalinfo_generalinfo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generalinfo/generalinfo.service */ "./src/app/publicinfo/generalinfo/generalinfo.service.ts");
/* harmony import */ var _faq_faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faq/faq-list/faq-list.component */ "./src/app/publicinfo/faq/faq-list/faq-list.component.ts");
/* harmony import */ var _faq_faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./faq/faq-detail/faq-detail.component */ "./src/app/publicinfo/faq/faq-detail/faq-detail.component.ts");
/* harmony import */ var _faq_faq_edit_faq_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./faq/faq-edit/faq-edit.component */ "./src/app/publicinfo/faq/faq-edit/faq-edit.component.ts");
/* harmony import */ var _faq_faq_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./faq/faq.service */ "./src/app/publicinfo/faq/faq.service.ts");
/* harmony import */ var _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./event/event-list/event-list.component */ "./src/app/publicinfo/event/event-list/event-list.component.ts");
/* harmony import */ var _event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./event/event-detail/event-detail.component */ "./src/app/publicinfo/event/event-detail/event-detail.component.ts");
/* harmony import */ var _event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./event/event-edit/event-edit.component */ "./src/app/publicinfo/event/event-edit/event-edit.component.ts");
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./event/event.service */ "./src/app/publicinfo/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Import components for each schema












var PublicinfoModule = /** @class */ (function () {
    function PublicinfoModule() {
    }
    PublicinfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                mean_rest_angular__WEBPACK_IMPORTED_MODULE_6__["MraModule"],
                _publicinfo_routing_module__WEBPACK_IMPORTED_MODULE_7__["PublicinfoRoutingModule"]
            ],
            declarations: [
                _publicinfo_component__WEBPACK_IMPORTED_MODULE_8__["PublicinfoComponent"],
                _generalinfo_generalinfo_list_generalinfo_list_component__WEBPACK_IMPORTED_MODULE_11__["GeneralinfoListComponent"],
                _generalinfo_generalinfo_detail_generalinfo_detail_component__WEBPACK_IMPORTED_MODULE_12__["GeneralinfoDetailComponent"],
                _generalinfo_generalinfo_edit_generalinfo_edit_component__WEBPACK_IMPORTED_MODULE_13__["GeneralinfoEditComponent"],
                _faq_faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_15__["FaqListComponent"],
                _faq_faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_16__["FaqDetailComponent"],
                _faq_faq_edit_faq_edit_component__WEBPACK_IMPORTED_MODULE_17__["FaqEditComponent"],
                _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_19__["EventListComponent"],
                _event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_20__["EventDetailComponent"],
                _event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_21__["EventEditComponent"],
            ],
            exports: [
                _publicinfo_component__WEBPACK_IMPORTED_MODULE_8__["PublicinfoComponent"],
                _generalinfo_generalinfo_list_generalinfo_list_component__WEBPACK_IMPORTED_MODULE_11__["GeneralinfoListComponent"],
                _generalinfo_generalinfo_detail_generalinfo_detail_component__WEBPACK_IMPORTED_MODULE_12__["GeneralinfoDetailComponent"],
                _generalinfo_generalinfo_edit_generalinfo_edit_component__WEBPACK_IMPORTED_MODULE_13__["GeneralinfoEditComponent"],
                _faq_faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_15__["FaqListComponent"],
                _faq_faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_16__["FaqDetailComponent"],
                _faq_faq_edit_faq_edit_component__WEBPACK_IMPORTED_MODULE_17__["FaqEditComponent"],
                _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_19__["EventListComponent"],
                _event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_20__["EventDetailComponent"],
                _event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_21__["EventEditComponent"],
            ],
            providers: [
                { provide: _publicinfo_tokens__WEBPACK_IMPORTED_MODULE_9__["Publicinfo_SERVER_ROOT_URI"], useValue: _publicinfo_conf__WEBPACK_IMPORTED_MODULE_10__["publicinfo_server_root_uri"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateParserFormatter"], useClass: _publicinfo_directive__WEBPACK_IMPORTED_MODULE_5__["MraNgbDateFormatterService"] },
                _generalinfo_generalinfo_service__WEBPACK_IMPORTED_MODULE_14__["GeneralinfoService"],
                _faq_faq_service__WEBPACK_IMPORTED_MODULE_18__["FaqService"],
                _event_event_service__WEBPACK_IMPORTED_MODULE_22__["EventService"],
            ],
        })
    ], PublicinfoModule);
    return PublicinfoModule;
}());



/***/ }),

/***/ "./src/app/publicinfo/publicinfo.tokens.ts":
/*!*************************************************!*\
  !*** ./src/app/publicinfo/publicinfo.tokens.ts ***!
  \*************************************************/
/*! exports provided: Publicinfo_SERVER_ROOT_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publicinfo_SERVER_ROOT_URI", function() { return Publicinfo_SERVER_ROOT_URI; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Publicinfo_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Publicinfo_SERVER_ROOT_URI');


/***/ }),

/***/ "./src/app/users.conf.ts":
/*!*******************************!*\
  !*** ./src/app/users.conf.ts ***!
  \*******************************/
/*! exports provided: UsersRoutes, users_server_root_uri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutes", function() { return UsersRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users_server_root_uri", function() { return users_server_root_uri; });
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_users_routing_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users-routing.path */ "./src/app/users/users-routing.path.ts");

//Import routing paths

var UsersRoutes = [
    { path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_0__["UsersComponent"],
        children: [
            { path: '', redirectTo: 'muser', pathMatch: 'full' },
            { path: "muser",
                children: _users_users_routing_path__WEBPACK_IMPORTED_MODULE_1__["muserRoutingPath"],
                data: { "mraLevel": 1, "item": "muser" }
            },
        ]
    }
];
var users_server_root_uri = "/api/users"; /*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Feb 07 2019 21:27:45 GMT-0800 (PST)

import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';

//Import routing paths
import {muserRoutingPath,  } from './users/users-routing.path';

export const UsersRoutes: Routes = [
  { path: 'users',
    component: UsersComponent,
    children: [
      {path: '',  redirectTo: 'muser', pathMatch: 'full'},

      { path: "muser",
        children: muserRoutingPath,
        data: {"mraLevel": 1, "item": "muser"}
      },
    ]
  }
];

export const users_server_root_uri:string = "/api/users";**** End of recent updates.<<<*/


/***/ }),

/***/ "./src/app/users/muser/muser-detail/muser-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/users/muser/muser-detail/muser-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left, .fa-list, span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons span {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 0rem;\n\tmargin-top:  0.5rem\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.referred-by-links {\n\ttext-align: left;\n}\n\n.referred-by-links a {\n\tmargin-left: 1rem;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbXVzZXIvbXVzZXItZGV0YWlsL211c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQjtBQUNEOztBQUNBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakI7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtDQUNwQixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtBQUN6RSIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL211c2VyL211c2VyLWRldGFpbC9tdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OnJpZ2h0OyBcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0LCAuZmEtbGlzdCwgc3BhbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyLjVyZW07XG5cdG1hcmdpbi10b3A6ICAwLjc1cmVtXG59XG4uYWN0aW9uLWJ1dHRvbnMgc3BhbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAwcmVtO1xuXHRtYXJnaW4tdG9wOiAgMC41cmVtXG59XG5cbi5jYXJkLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB6LWluZGV4OiAxMDAwOyBcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAvKm1hcmdpbjogYXV0bzsqL1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/muser/muser-detail/muser-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/users/muser/muser-detail/muser-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\t<div class=\"action-buttons\">\n        <!--<a href=\"javascript:void(0)\" (click)=\"goBack()\"><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a>-->\n        <a [routerLink]=\"['../../list' ]\"><i class=\"fas fa-list\" title=\"List\"></i><span>&nbsp;&nbsp;User List</span></a>\n\t\t<a [routerLink]=\"['../../password', detail['_id'] ]\" class=\"btn btn-outline-primary\">Change Password</a>\n\t\t<a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n\t</div>\n\t\n\t<div class=\"card text-left\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">User Detail</h4>    \n\t\t<div class=\"card-text\">\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Username</label></div>\n\t\t\t<div class=\"col-9\">  {{detail['username']}}</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Email</label></div>\n\t\t\t<div class=\"col-9\">  {{detail['email']}}</div>\n\n          </div>\n\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Phone</label></div>\n\t\t\t<div class=\"col-9\">  {{detail['phone']}}</div>\n\n          </div>\n          <div class=\"row\">\n      \n\t\t\t<div class=\"col-3\"><label>Since</label></div>\n\t\t\t<div class=\"col-3\">  {{detail['since']?detail['since']['value']:\"\"}}</div>\n\t\t\t<div class=\"col-3\"><label>Status</label></div>\n\t\t\t<div class=\"col-3\">  {{detail['status']}}</div>\n\n          </div>\n      \n\t\t</div>\n\t  </div>\n\t</div>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/users/muser/muser-detail/muser-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/users/muser/muser-detail/muser-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MuserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserDetailComponent", function() { return MuserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../muser.component */ "./src/app/users/muser/muser.component.ts");
/* harmony import */ var _muser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muser.service */ "./src/app/users/muser/muser.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MuserDetailComponent = /** @class */ (function (_super) {
    __extends(MuserDetailComponent, _super);
    function MuserDetailComponent(muserService, injector, router, route, location) {
        var _this = _super.call(this, muserService, injector, router, route, location, _muser_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].DETAIL) || this;
        _this.muserService = muserService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.stringFields.push('username');
        _this.stringFields.push('email');
        _this.stringFields.push('phone');
        _this.stringFields.push('status');
        _this.dateFields = ['since',];
        return _this;
    }
    MuserDetailComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.populateDetail(this.id);
        else
            console.error("Routing error for detail view... no id...");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MuserDetailComponent.prototype, "id", void 0);
    MuserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-muser-detail',
            template: __webpack_require__(/*! ./muser-detail.component.html */ "./src/app/users/muser/muser-detail/muser-detail.component.html"),
            styles: [__webpack_require__(/*! ./muser-detail.component.css */ "./src/app/users/muser/muser-detail/muser-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_muser_service__WEBPACK_IMPORTED_MODULE_4__["MuserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], MuserDetailComponent);
    return MuserDetailComponent;
}(_muser_component__WEBPACK_IMPORTED_MODULE_3__["MuserComponent"]));



/***/ }),

/***/ "./src/app/users/muser/muser-edit/muser-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users/muser/muser-edit/muser-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label, .field-label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 5;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbXVzZXIvbXVzZXItZWRpdC9tdXNlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0M7QUFDRDs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQjtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFHQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtDQUNwQixlQUFlO0FBQ2hCOztBQUVBOzs7O0NBSUM7O0FBQ0Q7Ozs7Q0FJQzs7QUFFRDtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUM7O0FBRUE7Q0FDQyx5QkFBeUI7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlOztFQUVmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQixJQUFJLHlDQUF5QztJQUMvRCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9tdXNlci9tdXNlci1lZGl0L211c2VyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0IHtcblx0d2lkdGg6IDc1JTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbmZpZWxkc2V0ID4gLmZvcm0tY29udHJvbCwgLmlucHV0LWdyb3VwLCAuZm9ybS1jaGVjaywgLmFsZXJ0IHtcblx0d2lkdGg6IDkwJVxufVxuXG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zLWNlbnRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cblxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsLCAuZmllbGQtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi8qXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLypcbi5uZy12YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICpcbn1cbiovXG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5pY29uLXNlYXJjaCwgLmljb24tY2xlYXIge1xuICB6LWluZGV4OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiBzcGFuIHtcbm1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogNTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtOyAgIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICAgIGJvcmRlcjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/muser/muser-edit/muser-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/users/muser/muser-edit/muser-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!subEdit\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!subEdit\">{{action}} User</h4>    \n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('username')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditUsername\">Username</label>\n\n\t        <input type=\"text\" class=\"form-control\" id=\"muserEditUsername\" \n\t                required\n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['username']\" name=\"muserEditUsername\"\n\t                #muserEditUsername=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditUsername.valid || muserEditUsername.pristine || muserEditUsername.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"muserEditUsername.errors && muserEditUsername.errors.required\">\n    \t        Username is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('email')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditEmail\">Email</label>\n\n\t        <input type=\"text\" class=\"form-control\" id=\"muserEditEmail\" \n\t                \n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['email']\" name=\"muserEditEmail\"\n\t                #muserEditEmail=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditEmail.valid || muserEditEmail.pristine || muserEditEmail.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('phone')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditPhone\">Phone</label>\n\n\t        <input type=\"text\" class=\"form-control\" id=\"muserEditPhone\" \n\t                \n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['phone']\" name=\"muserEditPhone\"\n\t                #muserEditPhone=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditPhone.valid || muserEditPhone.pristine || muserEditPhone.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('status')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditStatus\">Status</label>\n\n\t        <div class=\"form-check\"\n\n\t\t          [ngClass]=\"{'ng-valid': enums['status'].includes(detail['status']),\n\t\t                      'ng-invalid': !enums['status'].includes(detail['status'])}\"\n\t\t        \n\t\t        >\n\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"muserEditStatus\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \trequired\n\t\t        \tid=\"muserEditStatusEnabled\" [value]=\"'Enabled'\"\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['status']\"\n\t\t        \t#muserEditStatus=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Enabled</label>\n\t\t      </div>\n\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"muserEditStatus\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \trequired\n\t\t        \tid=\"muserEditStatusDisabled\" [value]=\"'Disabled'\"\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['status']\"\n\t\t        \t#muserEditStatus=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Disabled</label>\n\t\t      </div>\n\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"muserEditStatus\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \trequired\n\t\t        \tid=\"muserEditStatusPending\" [value]=\"'Pending'\"\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['status']\"\n\t\t        \t#muserEditStatus=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Pending</label>\n\t\t      </div>\n\n\t\t      \n\t\t    </div>\n\n\t        <div [hidden]=\"muserEditStatus.valid || muserEditStatus.pristine || muserEditStatus.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"muserEditStatus.errors && muserEditStatus.errors.required\">\n    \t        Status is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div>\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('username')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditUsername\">Username</label>\n\n\t        <input type=\"text\" class=\"form-control\" id=\"muserEditUsername\" \n\t                required\n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['username']\" name=\"muserEditUsername\"\n\t                #muserEditUsername=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditUsername.valid || muserEditUsername.pristine || muserEditUsername.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"muserEditUsername.errors && muserEditUsername.errors.required\">\n    \t        Username is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('email')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditEmail\">Email</label>\n\n\t        <input type=\"text\" class=\"form-control\" id=\"muserEditEmail\" \n\t                \n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['email']\" name=\"muserEditEmail\"\n\t                #muserEditEmail=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditEmail.valid || muserEditEmail.pristine || muserEditEmail.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('phone')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditPhone\">Phone</label>\n\n\t        <input type=\"text\" class=\"form-control\" id=\"muserEditPhone\" \n\t                \n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['phone']\" name=\"muserEditPhone\"\n\t                #muserEditPhone=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditPhone.valid || muserEditPhone.pristine || muserEditPhone.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n \n\n\t        </div>\n        \n\t      </fieldset>\n </div><div *ngIf=\"!hiddenFields.includes('status')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditStatus\">Status</label>\n\n\t        <div class=\"form-check\"\n\n\t\t          [ngClass]=\"{'ng-valid': enums['status'].includes(detail['status']),\n\t\t                      'ng-invalid': !enums['status'].includes(detail['status'])}\"\n\t\t        \n\t\t        >\n\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"muserEditStatus\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \trequired\n\t\t        \tid=\"muserEditStatusEnabled\" [value]=\"'Enabled'\"\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['status']\"\n\t\t        \t#muserEditStatus=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Enabled</label>\n\t\t      </div>\n\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"muserEditStatus\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \trequired\n\t\t        \tid=\"muserEditStatusDisabled\" [value]=\"'Disabled'\"\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['status']\"\n\t\t        \t#muserEditStatus=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Disabled</label>\n\t\t      </div>\n\n\t          <div class=\"form-check-inline\">\n\t\t        <input type=\"radio\" name=\"muserEditStatus\" \n\t\t        \tclass=\"form-check-input\"\n\t\t        \trequired\n\t\t        \tid=\"muserEditStatusPending\" [value]=\"'Pending'\"\n\t\t        \t \n\t\t        \t[(ngModel)]=\"detail['status']\"\n\t\t        \t#muserEditStatus=\"ngModel\">\n\t\t      \t<label class=\"form-check-label\">Pending</label>\n\t\t      </div>\n\n\t\t      \n\t\t    </div>\n\n\t        <div [hidden]=\"muserEditStatus.valid || muserEditStatus.pristine || muserEditStatus.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"muserEditStatus.errors && muserEditStatus.errors.required\">\n    \t        Status is required.\n  \t          </div>\n \n\n\t        </div>\n        \n\t      </fieldset>\n    \n</div><div *ngIf=\"!hiddenFields.includes('password')\">\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditPassword\">Password</label>\n\n\t        <input type=\"password\" class=\"form-control\" id=\"muserEditPassword\" \n\t                required\n\t                \n\t                \n\t\t        \t \n\t                [(ngModel)]=\"detail['password']\" name=\"muserEditPassword\"\n\t                #muserEditPassword=\"ngModel\">\n\n\t        <div [hidden]=\"muserEditPassword.valid || muserEditPassword.pristine || muserEditPassword.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\n\t          <div *ngIf=\"muserEditPassword.errors && muserEditPassword.errors.required\">\n    \t        Password is required.\n  \t          </div>\n \n\n\t        </div>\n\t      </fieldset>\n        \n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditConfirmPassword\">Confirm Password</label>\n\n\t        <input type=\"password\" class=\"form-control\" id=\"muserEditConfirmPassword\" \n\t                required\n\t                passwordValidateEqual=\"muserEditPassword\"\n\t                [(ngModel)]=\"confirmPassword\" name=\"muserEditConfirmPassword\"\n\t                #muserEditConfirmPassword=\"ngModel\">\n\t        <div [hidden]=\"muserEditConfirmPassword.valid || muserEditConfirmPassword.pristine || muserEditConfirmPassword.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\t          <div *ngIf=\"muserEditConfirmPassword.errors && muserEditConfirmPassword.errors.required\">\n    \t        Confirm Password is required.\n  \t          </div> \n\t          <div *ngIf=\"muserEditConfirmPassword.errors && muserEditConfirmPassword.errors.passwordValidateEqual\">\n    \t        Password doesn't match.\n  \t          </div> \n\t        </div>\n\t      </fieldset>\n\n    \n</div>\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/muser/muser-edit/muser-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users/muser/muser-edit/muser-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: MuserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserEditComponent", function() { return MuserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../muser.component */ "./src/app/users/muser/muser.component.ts");
/* harmony import */ var _muser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muser.service */ "./src/app/users/muser/muser.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MuserEditComponent = /** @class */ (function (_super) {
    __extends(MuserEditComponent, _super);
    function MuserEditComponent(muserService, injector, router, route, location) {
        var _this = _super.call(this, muserService, injector, router, route, location, _muser_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].EDIT) || this;
        _this.muserService = muserService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.enums['status'] = ['Enabled', 'Disabled', 'Pending',];
        _this.stringFields.push('username');
        _this.stringFields.push('email');
        _this.stringFields.push('phone');
        _this.stringFields.push('status');
        _this.stringFields.push('password');
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    MuserEditComponent.prototype.ngOnInit = function () {
        if (!this.id)
            this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action = "Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action = "Create";
            if (!this.cid)
                this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            }
            else if (this.initData) {
                this.action = "Add";
                this.subEdit = true;
                var detail = {};
                for (var prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            }
            else {
                var detail = {};
                this.detail = this.formatDetail(detail);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MuserEditComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MuserEditComponent.prototype, "cid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MuserEditComponent.prototype, "initData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MuserEditComponent.prototype, "done", void 0);
    MuserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-muser-edit',
            template: __webpack_require__(/*! ./muser-edit.component.html */ "./src/app/users/muser/muser-edit/muser-edit.component.html"),
            styles: [__webpack_require__(/*! ./muser-edit.component.css */ "./src/app/users/muser/muser-edit/muser-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_muser_service__WEBPACK_IMPORTED_MODULE_4__["MuserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], MuserEditComponent);
    return MuserEditComponent;
}(_muser_component__WEBPACK_IMPORTED_MODULE_3__["MuserComponent"]));



/***/ }),

/***/ "./src/app/users/muser/muser-edit/muser-pass.component.html":
/*!******************************************************************!*\
  !*** ./src/app/users/muser/muser-edit/muser-pass.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\">\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\">Change Password</h4>    \n\t    <div class=\"card-text\">\n\n          <div *ngIf=\"detail['username']\" class=\"row\">\n\t\t\t<div class=\"col-3\"><label class=\"field-label\">Username</label></div>\n\t\t\t<div class=\"col-9\">  {{detail['username']}}</div>\n          </div>\n\n          <div *ngIf=\"detail['email']\" class=\"row\">\n\t\t\t<div class=\"col-3\"><label class=\"field-label\">Email</label></div>\n\t\t\t<div class=\"col-9\">  {{detail['email']}}</div>\n          </div>\n\n          <div *ngIf=\"detail['phone']\" class=\"row\">\n\t\t\t<div class=\"col-3\"><label class=\"field-label\">Phone</label></div>\n\t\t\t<div class=\"col-9\">  {{detail['phone']}}</div>\n          </div>\n\t\t</div>\n\t    <hr/>\n\t    <form (ngSubmit)=\"onSubmit()\" #passForm=\"ngForm\">\n\t        \n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditPassword\">Password</label>\n\n\t        <input type=\"password\" class=\"form-control\" id=\"muserEditPassword\" \n\t                required\n\t                [(ngModel)]=\"detail['password']\" name=\"muserEditPassword\"\n\t                #muserEditPassword=\"ngModel\">\n\t        <div [hidden]=\"muserEditPassword.valid || muserEditPassword.pristine || muserEditPassword.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\t          <div *ngIf=\"muserEditPassword.errors && muserEditPassword.errors.required\">\n    \t        Password is required.\n  \t          </div> \n\t        </div>\n\t      </fieldset>\n\n\t      <fieldset class=\"form-group\">\n\t        <label for=\"muserEditConfirmPassword\">Confirm Password</label>\n\n\t        <input type=\"password\" class=\"form-control\" id=\"muserEditConfirmPassword\" \n\t                required\n\t                passwordValidateEqual=\"muserEditPassword\"\n\t                [(ngModel)]=\"tempString\" name=\"muserEditConfirmPassword\"\n\t                #muserEditConfirmPassword=\"ngModel\">\n\t        <div [hidden]=\"muserEditConfirmPassword.valid || muserEditConfirmPassword.pristine || muserEditConfirmPassword.errors.minlength\"\n     \t\t\tclass=\"alert alert-danger\">\n\t          <div *ngIf=\"muserEditConfirmPassword.errors && muserEditConfirmPassword.errors.required\">\n    \t        Confirm Password is required.\n  \t          </div> \n\t          <div *ngIf=\"muserEditConfirmPassword.errors && muserEditConfirmPassword.errors.passwordValidateEqual\">\n    \t        Password doesn't match.\n  \t          </div> \n\t        </div>\n\t      </fieldset>\n\n    \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!passForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/muser/muser-edit/muser-pass.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users/muser/muser-edit/muser-pass.component.ts ***!
  \****************************************************************/
/*! exports provided: PassswordEqualValidator, MuserPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassswordEqualValidator", function() { return PassswordEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserPassComponent", function() { return MuserPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muser_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muser-edit.component */ "./src/app/users/muser/muser-edit/muser-edit.component.ts");
/* harmony import */ var _muser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muser.service */ "./src/app/users/muser/muser.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var PassswordEqualValidator = /** @class */ (function () {
    function PassswordEqualValidator(passwordField) {
        this.passwordField = passwordField;
    }
    PassswordEqualValidator_1 = PassswordEqualValidator;
    PassswordEqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.passwordField);
        // value not equal
        if (e && v !== e.value)
            return {
                passwordValidateEqual: "Passwords doesn't match"
            };
        return null;
    };
    var PassswordEqualValidator_1;
    PassswordEqualValidator = PassswordEqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[passwordValidateEqual]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], useExisting: PassswordEqualValidator_1, multi: true }]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('passwordValidateEqual')),
        __metadata("design:paramtypes", [String])
    ], PassswordEqualValidator);
    return PassswordEqualValidator;
}());

var MuserPassComponent = /** @class */ (function (_super) {
    __extends(MuserPassComponent, _super);
    function MuserPassComponent(muserService, injector, router, route, location) {
        var _this = _super.call(this, muserService, injector, router, route, location) || this;
        _this.muserService = muserService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    MuserPassComponent.prototype.ngOnInit = function () {
        if (this.id) {
            this.subEdit = true;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
        }
        this.action = "Edit";
        this.populateDetailForAction(this.id, "edit");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MuserPassComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MuserPassComponent.prototype, "done", void 0);
    MuserPassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-muser-pass',
            template: __webpack_require__(/*! ./muser-pass.component.html */ "./src/app/users/muser/muser-edit/muser-pass.component.html"),
            styles: [__webpack_require__(/*! ./muser-edit.component.css */ "./src/app/users/muser/muser-edit/muser-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_muser_service__WEBPACK_IMPORTED_MODULE_4__["MuserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], MuserPassComponent);
    return MuserPassComponent;
}(_muser_edit_component__WEBPACK_IMPORTED_MODULE_3__["MuserEditComponent"]));



/***/ }),

/***/ "./src/app/users/muser/muser-list/muser-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users/muser/muser-list/muser-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\tmargin-top: 0.5rem;\n}\n\ntd i {\n\tcolor:black;\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n\ntd a i:hover {\n\tcolor: blue;\n}\n\ntd a i.fa-trash-alt:hover {\n\tcolor: red;\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 1rem;\n}\n\n.pagination li {\n\tmin-width: 2.8rem;\n}\n\n.total_counts {\n\tpadding-top: 0.8rem;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\ncursor: pointer;\nmargin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 5;\n    vertical-align: middle;\n    padding: 0.5rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n}\n\n.icon-clear-badge {\ncursor: pointer;\nmargin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n.select-model {\n    display: block; \n    position: fixed; \n    z-index: 1000; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.select-model.show {\n    display: block; \n}\n\n.select-model-content {\n    position: relative;\n    float:right;\n    background-color: #fefefe;\n    /*margin: auto;*/\n    margin-right: 50px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\ntable {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.clicked-row {\nbackground-color: #dcdfe0;\n}\n\n.selected-row {\nbackground-color: #c9f5eb;\n}\n\ntr th:first-child{\n    width:8%;\n    white-space:nowrap;\n}\n\n.single-line-edit {\n\t\n}\n\n.single-line-edit > .row {\n\tpadding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n\n.custom-day.focused {\n      background-color: #e6e6e6;\n    }\n\n.custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n\n.custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n\n.date-selection-pop {\n\t\tposition:absolute;\n\t\ttop:100%;\n\t\tleft:0;\n\t\tz-index:1000;\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tmin-width:10rem;\n\t\t/*padding:.5rem 0;*/\n\t\tmargin:.125rem 0 0;\n\t\tfont-size:1rem;\n\t\tcolor:#212529;\n\t\ttext-align:left;\n\t\tlist-style:none;\n\t\tbackground-color:#fff;\n\t\tbackground-clip:padding-box;\n\t\tborder: 1px solid #dfdfdf;\n\t\tborder-radius:.25rem;\n    }\n\n.add-area {\n    margin-left: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbXVzZXIvbXVzZXItbGlzdC9tdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFHQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQixJQUFJLHlDQUF5QztJQUMvRCxTQUFTO0FBQ2I7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHFCQUFxQjtFQUNoRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxRUFBcUU7QUFDekU7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUdBO0lBQ0ksUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQSxnQ0FBZ0M7O0FBQzVCO01BQ0Usa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFDckIsWUFBWTtNQUNaLFdBQVc7SUFDYjs7QUFDQTtNQUNFLHlCQUF5QjtJQUMzQjs7QUFDQTtNQUNFLGtDQUFrQztNQUNsQyxZQUFZO0lBQ2Q7O0FBQ0E7TUFDRSx3Q0FBd0M7SUFDMUM7O0FBRUE7RUFDRixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsb0JBQW9CO0lBQ2xCOztBQUVKO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvbXVzZXIvbXVzZXItbGlzdC9tdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG5cdG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxudGQgaSB7XG5cdGNvbG9yOmJsYWNrO1xuXHRtYXJnaW4tbGVmdDogMC41cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbnRkIGEgaTpob3ZlciB7XG5cdGNvbG9yOiBibHVlO1xufVxudGQgYSBpLmZhLXRyYXNoLWFsdDpob3ZlciB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5cbi5wYWdpbmF0aW9uIGxpIHtcblx0bWluLXdpZHRoOiAyLjhyZW07XG59XG4udG90YWxfY291bnRzIHtcblx0cGFkZGluZy10b3A6IDAuOHJlbTtcbn1cblxuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1jbGVhciB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWluc2lkZSB7XG4gICAgei1pbmRleDogNTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07ICAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG5jdXJzb3I6IHBvaW50ZXI7XG5tYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi5yZWZpbmUtc2VhcmNoLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBjb2xvcjogIzg2ODE4MTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgLyptYXJnaW46IGF1dG87Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xufVxuLnNlbGVjdGVkLXJvdyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjYzlmNWViO1xufVxuXG5cbnRyIHRoOmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOjglO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQge1xuXHRcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcblx0cGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4gICAgLmN1c3RvbS1kYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gICAgfVxuICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xuICAgIH1cbiAgICBcbiAgICAuZGF0ZS1zZWxlY3Rpb24tcG9wIHtcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHR0b3A6MTAwJTtcblx0XHRsZWZ0OjA7XG5cdFx0ei1pbmRleDoxMDAwO1xuXHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0ZmxvYXQ6bGVmdDtcblx0XHRtaW4td2lkdGg6MTByZW07XG5cdFx0LypwYWRkaW5nOi41cmVtIDA7Ki9cblx0XHRtYXJnaW46LjEyNXJlbSAwIDA7XG5cdFx0Zm9udC1zaXplOjFyZW07XG5cdFx0Y29sb3I6IzIxMjUyOTtcblx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0bGlzdC1zdHlsZTpub25lO1xuXHRcdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0XHRiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XG5cdFx0Ym9yZGVyOsKgMXB4IHNvbGlkwqAjZGZkZmRmO1xuXHRcdGJvcmRlci1yYWRpdXM6LjI1cmVtO1xuICAgIH1cbiAgICBcbi5hZGQtYXJlYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/users/muser/muser-list/muser-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/users/muser/muser-list/muser-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"muserTextSearch\" \n\t\t\t\t\t\t#muserTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for username, email, phone, status\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\t<div class=\"text-center\">\n                    <span  class=\"pointer\" (click)=\"toggleMoreSearch()\">\n                        <span class=\"refine-search-text\">Refine Search &nbsp;</span>\n                        <span>\n                            <i *ngIf=\"!moreSearchOpened\"  class=\"fas fa-plus-circle\" title=\"More\"></i>\n                            <i *ngIf=\"moreSearchOpened\" class=\"fas fa-minus-circle\"  title=\"Less\"></i>\n                        </span>\n                    </span>\n\t\t\t\t</div>\n\t\t\t    <div class=\"shadow\" *ngIf=\"moreSearchOpened\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t    <div class=\"single-line-edit\">\n\t      <div class=\"row\">\n\t        <div class=\"col-3\"><label for=\"muserEditSince\">Since</label></div>\n\t        <div class=\"col-8\">\n\n \n\t        <div class=\"input-group\">\n\t\t      <input class=\"form-control\" id=\"muserEditSince\" placeholder=\"{{dateFormat}}\"\n\t\t             [(ngModel)]=\"detail['since']['from']\" name=\"muserEditSince\"\n\t\t             ngbDatepicker #muserEditSince=\"ngModel\">\n\t\t      <span>&nbsp; ~ &nbsp;</span>\n\t\t      <input class=\"form-control\" id=\"muserEditSince\" placeholder=\"{{dateFormat}}\"\n\t\t             [(ngModel)]=\"detail['since']['to']\" name=\"muserEditSince\"\n\t\t             ngbDatepicker #muserEditSince=\"ngModel\">\n\n\t\t      <div class=\"input-group-append\">\n\t\t        <button class=\"btn btn-outline-secondary\" (click)=\"onDateSelectionToggle('since')\" type=\"button\">\n\t\t          <i class=\"fas fa-calendar-alt\"></i>\n\t\t        </button>\n\t\t      </div>\n\t\t    </div><!-- input group --> \n\t\t    <div class=\"date-selection-pop\" *ngIf=\"detail['since']['pop']\">\n\t\t\t    <ngb-datepicker #dp [minDate]=\"minDate\" (select)=\"onDateSelection('since', $event)\" [displayMonths]=\"2\" [dayTemplate]=\"muserEditSinceT\">\n\t\t\t\t</ngb-datepicker>\n\t\t\t\t<ng-template #muserEditSinceT let-muserEditSinceDate=\"date\" let-muserEditSinceFocused=\"focused\">\n\t\t\t\t  <span class=\"custom-day\"\n\t\t\t\t        [class.focused]=\"muserEditSinceFocused\"\n\t\t\t\t        [class.range]=\"isRange('since', muserEditSinceDate)\"\n\t\t\t\t        [class.faded]=\"isHovered('since', muserEditSinceDate) || isInside('since', muserEditSinceDate)\"\n\t\t\t\t        (mouseenter)=\"hoveredDate = muserEditSinceDate\"\n\t\t\t\t        (mouseleave)=\"hoveredDate = null\">\n\t\t\t\t    {{ muserEditSinceDate.day }}\n\t\t\t\t  </span>\n\t\t\t\t</ng-template>\n\t\t    </div>      \n\n\t      </div>\n\t      \n\t      <div class=\"col-1\">\n\t\t    <div class=\"icon-clear\" (click)=\"clearValueFromDetail('since')\"\n\t\t        *ngIf=\"checkValueDefinedFromDetail('since')\"\n\t\t        ><i class=\"fas fa-times-circle\" title=\"Clear\"></i></div>\n\t      </div>\n\t    </div>\n      </div>\n      \n\n\t\t\t\t\t\t  <div class=\"action-buttons\" style=\"margin-top: 10px;\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onSearchClear()\">Reset</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"searchList()\">Search</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t        <div *ngIf=\"!moreSearchOpened\" style=\"text-align: left;\">\n\t\t\t\t\t<span class=\"badge badge-pill badge-info\" *ngFor=\"let value of searchMoreDetail\">\n\t\t\t\t\t    <a (click)=\"toggleMoreSearch()\" class=\"pointer\"> {{value[0]}}: {{value[1]}}</a>\n\t\t\t\t\t    <i class=\"fas fa-times-circle icon-clear-badge\" (click)=\"clearValueFromDetailAndSearchList(value[0])\" title=\"Clear\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t    \n\t\t\t\n\t\t    </div>\n\t\t\t<div class=\"col-3\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr/>\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">Total: <b>{{total_count}}</b> items</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Username</th>\n\t\t        <th scope=\"col\">Email</th>\n\t\t        <th scope=\"col\">Phone</th>\t\t        \n\t\t        <th scope=\"col\">Since</th>\n\t\t        <th scope=\"col\">Status</th>\t\t        \n\t\t        <th scope=\"col\" style=\"width:8rem;\"></th>\n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">{{(page-1)*per_page+i+1}}</td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">  {{detail['username']}}\n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">  {{detail['email']}}\n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">  {{detail['phone']}}\n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">  {{detail['since']?detail['since']['value']:\"\"}}\n\n\t            </td>\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">  {{detail['status']}}\n\n\t            </td>\n\t            <td>\n\t            \t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t            \t<a [routerLink]=\"['../password', detail['_id'] ]\" ><i class=\"fas fa-key\" title=\"Change Password\"></i></a>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t  <div *ngIf=\"total_pages > 1\">\n\t\t\t\t  <ul class=\"pagination justify-content-center\">\n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t         aria-label=\"Previous\">\n\t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Previous</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"left_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t    \t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t    \t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t    </li>\n\t\t\t\t    \n\t\t\t\t    <li *ngIf=\"right_more\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t    \n\t\t\t\t    <li class=\"page-item\"\n\t\t\t\t            [ngClass]=\"{'disabled': page>=total_pages}\">\n\t\t\t\t      <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t         aria-label=\"Next\">\n\t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t        <span class=\"sr-only\">Next</span>\n\t\t\t\t      </a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"total_counts\">Total: <b>{{total_count}}</b> items</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/users/muser/muser-list/muser-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users/muser/muser-list/muser-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MuserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserListComponent", function() { return MuserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../muser.component */ "./src/app/users/muser/muser.component.ts");
/* harmony import */ var _muser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muser.service */ "./src/app/users/muser/muser.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MuserListComponent = /** @class */ (function (_super) {
    __extends(MuserListComponent, _super);
    function MuserListComponent(muserService, injector, router, route, location) {
        var _this = _super.call(this, muserService, injector, router, route, location, _muser_component__WEBPACK_IMPORTED_MODULE_3__["ViewType"].LIST) || this;
        _this.muserService = muserService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.minDate = { year: (new Date()).getFullYear() - 100, month: 1, day: 1 };
        _this.enums['status'] = ['Enabled', 'Disabled', 'Pending',];
        _this.stringFields.push('username');
        _this.stringFields.push('email');
        _this.stringFields.push('phone');
        _this.stringFields.push('status');
        _this.dateFields = ['since',];
        // this is to initialize the detail that will be used for search condition selection
        var detail = {};
        _this.detail = _this.formatDetail(detail);
        return _this;
    }
    MuserListComponent.prototype.ngOnInit = function () {
        this.populateList();
    };
    MuserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-muser-list',
            template: __webpack_require__(/*! ./muser-list.component.html */ "./src/app/users/muser/muser-list/muser-list.component.html"),
            styles: [__webpack_require__(/*! ./muser-list.component.css */ "./src/app/users/muser/muser-list/muser-list.component.css")]
        }),
        __metadata("design:paramtypes", [_muser_service__WEBPACK_IMPORTED_MODULE_4__["MuserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], MuserListComponent);
    return MuserListComponent;
}(_muser_component__WEBPACK_IMPORTED_MODULE_3__["MuserComponent"]));



/***/ }),

/***/ "./src/app/users/muser/muser.base.service.ts":
/*!***************************************************!*\
  !*** ./src/app/users/muser/muser.base.service.ts ***!
  \***************************************************/
/*! exports provided: MuserBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserBaseService", function() { return MuserBaseService; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var servicePath = '/muser/';
var MuserBaseService = /** @class */ (function (_super) {
    __extends(MuserBaseService, _super);
    function MuserBaseService(http, serverRootUrl) {
        var _this = this;
        var serviceUrl = serverRootUrl + servicePath;
        _this = _super.call(this, http, serviceUrl) || this;
        return _this;
    }
    return MuserBaseService;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/users/muser/muser.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/muser/muser.component.ts ***!
  \************************************************/
/*! exports provided: ViewType, MuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserComponent", function() { return MuserComponent; });
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["ViewType"]; });

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var itemCamelName = 'muser';

var MuserComponent = /** @class */ (function (_super) {
    __extends(MuserComponent, _super);
    function MuserComponent(muserService, injector, router, route, location, view) {
        var _this = _super.call(this, muserService, injector, router, route, location, view, itemCamelName) || this;
        _this.muserService = muserService;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.view = view;
        _this.indexFields = ['username',];
        return _this;
    }
    return MuserComponent;
}(mean_rest_angular__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/users/muser/muser.service.ts":
/*!**********************************************!*\
  !*** ./src/app/users/muser/muser.service.ts ***!
  \**********************************************/
/*! exports provided: MuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuserService", function() { return MuserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _muser_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./muser.base.service */ "./src/app/users/muser/muser.base.service.ts");
/* harmony import */ var _users_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.tokens */ "./src/app/users/users.tokens.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MuserService = /** @class */ (function (_super) {
    __extends(MuserService, _super);
    function MuserService(http, usersServerRootUri) {
        var _this = _super.call(this, http, usersServerRootUri) || this;
        _this.usersServerRootUri = usersServerRootUri;
        return _this;
    }
    MuserService.prototype.ngOnDestroy = function () { };
    MuserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_users_tokens__WEBPACK_IMPORTED_MODULE_3__["Users_SERVER_ROOT_URI"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], MuserService);
    return MuserService;
}(_muser_base_service__WEBPACK_IMPORTED_MODULE_2__["MuserBaseService"]));



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony import */ var _users_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.conf */ "./src/app/users.conf.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_users_conf__WEBPACK_IMPORTED_MODULE_3__["UsersRoutes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"], useClass: mean_rest_angular__WEBPACK_IMPORTED_MODULE_2__["MraRouteReuseStrategy"] },
            ],
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users-routing.path.ts":
/*!*********************************************!*\
  !*** ./src/app/users/users-routing.path.ts ***!
  \*********************************************/
/*! exports provided: muserRoutingPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "muserRoutingPath", function() { return muserRoutingPath; });
/* harmony import */ var _muser_muser_list_muser_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muser/muser-list/muser-list.component */ "./src/app/users/muser/muser-list/muser-list.component.ts");
/* harmony import */ var _muser_muser_detail_muser_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muser/muser-detail/muser-detail.component */ "./src/app/users/muser/muser-detail/muser-detail.component.ts");
/* harmony import */ var _muser_muser_edit_muser_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./muser/muser-edit/muser-edit.component */ "./src/app/users/muser/muser-edit/muser-edit.component.ts");
/* harmony import */ var _muser_muser_edit_muser_pass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muser/muser-edit/muser-pass.component */ "./src/app/users/muser/muser-edit/muser-pass.component.ts");
/* harmony import */ var _auth___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/ */ "./src/app/auth/index.ts");
// Import components for each schema





var muserRoutingPath = [
    { path: 'list', component: _muser_muser_list_muser_list_component__WEBPACK_IMPORTED_MODULE_0__["MuserListComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'detail/:id', component: _muser_muser_detail_muser_detail_component__WEBPACK_IMPORTED_MODULE_1__["MuserDetailComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'edit/:id', component: _muser_muser_edit_muser_edit_component__WEBPACK_IMPORTED_MODULE_2__["MuserEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'password/:id', component: _muser_muser_edit_muser_pass_component__WEBPACK_IMPORTED_MODULE_3__["MuserPassComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'new', component: _muser_muser_edit_muser_edit_component__WEBPACK_IMPORTED_MODULE_2__["MuserEditComponent"], canActivate: [_auth___WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\t\t<div class=\"card\">\n\t\t  <div class=\"card-header\">\n\t\t\t  <nav class=\"nav nav-pills\">\n\n\t\t\t    <a class=\"nav-item nav-link\" routerLink=\"./muser\" \n\t\t\t    \trouterLinkActive=\"active\">User</a>\n\n\t\t\t  </nav>\n\t\t  </div>\n\t\t  <div class=\"card-body\">\n\t\t\t<router-outlet></router-outlet>\n\t\t  </div>\n\t\t</div>\n\t</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.directive.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.directive.ts ***!
  \******************************************/
/*! exports provided: MraNgbDateFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MraNgbDateFormatterService", function() { return MraNgbDateFormatterService; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MraNgbDateFormatterService = /** @class */ (function (_super) {
    __extends(MraNgbDateFormatterService, _super);
    function MraNgbDateFormatterService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateFormat = 'MM-DD-YYYY';
        _this.timeFormat = 'hh:mm:ss';
        return _this;
    }
    // from input -> internal model
    MraNgbDateFormatterService.prototype.parse = function (value) {
        return Object(mean_rest_angular__WEBPACK_IMPORTED_MODULE_1__["stringToDateStructure"])(value, this.dateFormat);
    };
    // from internal model -> string
    MraNgbDateFormatterService.prototype.format = function (date) {
        return Object(mean_rest_angular__WEBPACK_IMPORTED_MODULE_1__["dateStructureToString"])(date, this.dateFormat);
    };
    return MraNgbDateFormatterService;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mean_rest_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mean-rest-angular */ "./node_modules/mean-rest-angular/fesm5/mean-rest-angular.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _users_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.directive */ "./src/app/users/users.directive.ts");
/* harmony import */ var _users_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users.tokens */ "./src/app/users/users.tokens.ts");
/* harmony import */ var _users_conf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../users.conf */ "./src/app/users.conf.ts");
/* harmony import */ var _muser_muser_list_muser_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./muser/muser-list/muser-list.component */ "./src/app/users/muser/muser-list/muser-list.component.ts");
/* harmony import */ var _muser_muser_detail_muser_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./muser/muser-detail/muser-detail.component */ "./src/app/users/muser/muser-detail/muser-detail.component.ts");
/* harmony import */ var _muser_muser_edit_muser_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./muser/muser-edit/muser-edit.component */ "./src/app/users/muser/muser-edit/muser-edit.component.ts");
/* harmony import */ var _muser_muser_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./muser/muser.service */ "./src/app/users/muser/muser.service.ts");
/* harmony import */ var _muser_muser_edit_muser_pass_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./muser/muser-edit/muser-pass.component */ "./src/app/users/muser/muser-edit/muser-pass.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Import components for each schema






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                mean_rest_angular__WEBPACK_IMPORTED_MODULE_4__["MraModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"]
            ],
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _muser_muser_list_muser_list_component__WEBPACK_IMPORTED_MODULE_11__["MuserListComponent"],
                _muser_muser_detail_muser_detail_component__WEBPACK_IMPORTED_MODULE_12__["MuserDetailComponent"],
                _muser_muser_edit_muser_edit_component__WEBPACK_IMPORTED_MODULE_13__["MuserEditComponent"],
                _muser_muser_edit_muser_pass_component__WEBPACK_IMPORTED_MODULE_15__["MuserPassComponent"],
                _muser_muser_edit_muser_pass_component__WEBPACK_IMPORTED_MODULE_15__["PassswordEqualValidator"],
            ],
            exports: [
                _users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _muser_muser_list_muser_list_component__WEBPACK_IMPORTED_MODULE_11__["MuserListComponent"],
                _muser_muser_detail_muser_detail_component__WEBPACK_IMPORTED_MODULE_12__["MuserDetailComponent"],
                _muser_muser_edit_muser_edit_component__WEBPACK_IMPORTED_MODULE_13__["MuserEditComponent"],
                _muser_muser_edit_muser_pass_component__WEBPACK_IMPORTED_MODULE_15__["MuserPassComponent"],
            ],
            providers: [
                { provide: _users_tokens__WEBPACK_IMPORTED_MODULE_9__["Users_SERVER_ROOT_URI"], useValue: _users_conf__WEBPACK_IMPORTED_MODULE_10__["users_server_root_uri"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateParserFormatter"], useClass: _users_directive__WEBPACK_IMPORTED_MODULE_8__["MraNgbDateFormatterService"] },
                _muser_muser_service__WEBPACK_IMPORTED_MODULE_14__["MuserService"],
            ],
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users.tokens.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.tokens.ts ***!
  \***************************************/
/*! exports provided: Users_SERVER_ROOT_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users_SERVER_ROOT_URI", function() { return Users_SERVER_ROOT_URI; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Users_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Users_SERVER_ROOT_URI');


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackliu/Documents/workspace/web/Lifers/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map