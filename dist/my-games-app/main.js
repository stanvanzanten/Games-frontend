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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'my-games-app';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_developers_developers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/developers/developers.component */ "./src/app/components/developers/developers.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _services_developers_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/developers.service */ "./src/app/services/developers.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_games_games_edit_games_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/games/games-edit/games-edit.component */ "./src/app/components/games/games-edit/games-edit.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _components_developers_developer_edit_developer_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/developers/developer-edit/developer-edit.component */ "./src/app/components/developers/developer-edit/developer-edit.component.ts");
/* harmony import */ var _logged_in_gaurd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logged-in.gaurd */ "./src/app/logged-in.gaurd.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'games', component: _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"] },
    { path: 'developers', component: _components_developers_developers_component__WEBPACK_IMPORTED_MODULE_8__["DevelopersComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"] },
    { path: 'login', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
                _components_developers_developers_component__WEBPACK_IMPORTED_MODULE_8__["DevelopersComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_games_games_edit_games_edit_component__WEBPACK_IMPORTED_MODULE_14__["GameEditComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_developers_developer_edit_developer_edit_component__WEBPACK_IMPORTED_MODULE_19__["DeveloperEditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"]
            ],
            providers: [
                _services_games_service__WEBPACK_IMPORTED_MODULE_10__["GameService"],
                _services_developers_service__WEBPACK_IMPORTED_MODULE_11__["DeveloperService"],
                _services_register_service__WEBPACK_IMPORTED_MODULE_17__["RegisterService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_18__["LoginService"],
                _logged_in_gaurd__WEBPACK_IMPORTED_MODULE_20__["LoggedInGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"username\" id=\"username\" name =\"username\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name =\"password\" ngModel class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">Sign In</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_models_login_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/login.model */ "./src/app/models/login.model.ts");
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
    function LoginComponent(router, route, loginService) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.editMode = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loginService.startedEditing
            .subscribe(function (id) {
            _this.editedItemId = id;
            _this.editMode = true;
        });
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var value = form.value;
        var login = new src_app_models_login_model__WEBPACK_IMPORTED_MODULE_4__["Login"](value.username, value.password);
        this.loginService.loginUser(login).subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("f"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginComponent.prototype, "userForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched{\n    border-left: 5px solid #a94442; /* red */\n}\ninput.ng-valid.ng-touched,\ntextarea.ng-invalid.ng-touched{\n    border-left: 5px solid #42A948; /* green */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksK0JBQStCLENBQUMsU0FBUztDQUM1QztBQUNEOztJQUVJLCtCQUErQixDQUFDLFdBQVc7Q0FDOUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"username\" id=\"username\" name =\"username\" ngModel required class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name =\"password\" ngModel required class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstname\">Firstname</label>\n        <input type=\"firstname\" id=\"firstname\" name =\"firstname\" ngModel required class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">Lastname</label>\n        <input type=\"lastname\" id=\"lastname\" name =\"lastname\" ngModel required class=\"form-control\">\n      </div>\n      <button class=\"btn btn-success\" type=\"submit\">Sign Up</button>\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, route, registerService) {
        this.router = router;
        this.route = route;
        this.registerService = registerService;
        this.editMode = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.registerService.startedEditing
            .subscribe(function (id) {
            _this.editedItemId = id;
            _this.editMode = true;
        });
    };
    SignupComponent.prototype.onSignup = function (form) {
        var value = form.value;
        var newUser = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](value.username, value.password, value.firstname, value.lastname);
        this.registerService.addUser(newUser);
        this.editMode = false;
        form.reset();
    };
    SignupComponent.prototype.onClear = function () {
        this.userForm.reset();
        this.editMode = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("f"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SignupComponent.prototype, "userForm", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/developers/developer-edit/developer-edit.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/developers/developer-edit/developer-edit.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched{\n    border-left: 5px solid #a94442; /* red */\n}\ninput.ng-valid.ng-touched,\ntextarea.ng-invalid.ng-touched{\n    border-left: 5px solid #42A948; /* green */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXZlbG9wZXJzL2RldmVsb3Blci1lZGl0L2RldmVsb3Blci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksK0JBQStCLENBQUMsU0FBUztDQUM1QztBQUNEOztJQUVJLCtCQUErQixDQUFDLFdBQVc7Q0FDOUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldmVsb3BlcnMvZGV2ZWxvcGVyLWVkaXQvZGV2ZWxvcGVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59Il19 */"

/***/ }),

/***/ "./src/app/components/developers/developer-edit/developer-edit.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/developers/developer-edit/developer-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" ngModel required>\n          </div>\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"age\">Age</label>\n            <input type=\"number\" id=\"age\" class=\"form-control\" name=\"age\" ngModel required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12 form-group\">\n            <label for=\"games\">Games</label>\n            <input type=\"text\" id=\"games\" class=\"form-control\" name=\"games\" ngModel required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'update' : 'Add' }}</button>\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/developers/developer-edit/developer-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/developers/developer-edit/developer-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeveloperEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperEditComponent", function() { return DeveloperEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_developers_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/developers.model */ "./src/app/models/developers.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/developers.service */ "./src/app/services/developers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeveloperEditComponent = /** @class */ (function () {
    function DeveloperEditComponent(router, route, gameService, developerService) {
        this.router = router;
        this.route = route;
        this.gameService = gameService;
        this.developerService = developerService;
        this.developers = [];
        this.editMode = false;
    }
    DeveloperEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.developerService.getDevelopers()
        //   .then((developers) => {
        //     this.developers = developers
        //   }
        //   );
        this.subscription = this.developerService.startedEditing
            .subscribe(function (id) {
            _this.editedItemId = id;
            _this.editMode = true;
            _this.developerService.getDeveloper(id)
                .then(function (developers) {
                _this.editedItem = developers;
                _this.developerForm.setValue({
                    name: _this.editedItem.name,
                    age: _this.editedItem.age,
                    games: _this.editedItem.games
                });
            })
                .catch(function (error) { return console.log(error); });
        });
    };
    DeveloperEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newDeveloper = new src_app_models_developers_model__WEBPACK_IMPORTED_MODULE_1__["Developer"](value.name, value.age, value.games);
        if (this.editMode) {
            this.developerService.updateDevelopers(this.editedItemId, newDeveloper);
        }
        else {
            this.developerService.addDeveloper(newDeveloper);
        }
        this.editMode = false;
        form.reset();
    };
    DeveloperEditComponent.prototype.onDelete = function () {
        this.developerService.deleteDeveloper(this.editedItemId);
        this.onClear();
    };
    DeveloperEditComponent.prototype.onClear = function () {
        this.developerForm.reset();
        this.editMode = false;
    };
    DeveloperEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DeveloperEditComponent.prototype.onEditItem = function (id) {
        console.log("dit id klik je aan : " + id);
        this.developerService.startedEditing.next(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("f"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], DeveloperEditComponent.prototype, "developerForm", void 0);
    DeveloperEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developer-edit',
            template: __webpack_require__(/*! ./developer-edit.component.html */ "./src/app/components/developers/developer-edit/developer-edit.component.html"),
            styles: [__webpack_require__(/*! ./developer-edit.component.css */ "./src/app/components/developers/developer-edit/developer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_games_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
            src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_5__["DeveloperService"]])
    ], DeveloperEditComponent);
    return DeveloperEditComponent;
}());



/***/ }),

/***/ "./src/app/components/developers/developers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/developers/developers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row text-center\">\n  <div class=\"col-xs-12\">\n    <h1>Welkom op de developers page! Hier is een overzicht te zien van alle developers en hun gemaakte games.\n      De games zijn te bekijken door op de developer te klikken!</h1><br>\n    <hr class=\"style13\">\n  </div>\n</div>\n<div class=\"row text-center\">\n  <ng-template [ngIf]=\"!loginService.isAuth()\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default list-group-item\" style=\"cursor: pointer\" *ngFor=\"let developer of developers; let i = index\"\n        (click)=\"onEditItem(i)\">\n        <table class=\"table\">\n          <tr>\n            <th class=\"text-center\">Name</th>\n            <th class=\"text-center\">Age</th>\n            <th class=\"text-center\">Games</th>\n          </tr>\n          <tr>\n            <td>{{ developer.name }}</td>\n            <td>{{ developer.age }}</td>\n            <td>{{ developer.games.name }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template [ngIf]=\"loginService.isAuth()\">\n    <div class=\"col-xs-4\">\n      <div class=\"panel panel-default list-group-item\" style=\"cursor: pointer\" *ngFor=\"let developer of developers; let i = index\"\n        (click)=\"onEditItem(i)\">\n        <table class=\"table\">\n          <tr>\n            <th class=\"text-center\">Name</th>\n            <th class=\"text-center\">Age</th>\n            <th class=\"text-center\">Games</th>\n          </tr>\n          <tr>\n            <td>{{ developer.name }}</td>\n            <td>{{ developer.age }}</td>\n            <td>{{ developer.games.name }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </ng-template>\n  <div class=\"col-xs-8\">\n    <ng-template [ngIf]=\"loginService.isAuth()\">\n      <app-developer-edit></app-developer-edit>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/developers/developers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/developers/developers.component.ts ***!
  \***************************************************************/
/*! exports provided: DevelopersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersComponent", function() { return DevelopersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_developers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/developers.service */ "./src/app/services/developers.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevelopersComponent = /** @class */ (function () {
    function DevelopersComponent(developersService, loginService) {
        this.developersService = developersService;
        this.loginService = loginService;
        this.developers = [];
    }
    DevelopersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.developersService.getDevelopers()
            .then(function (developers) {
            _this.developers = developers;
        });
        this.subscription = this.developersService.developersChanged
            .subscribe(function (developers) {
            _this.developers = developers;
        });
    };
    DevelopersComponent.prototype.onEditItem = function (id) {
        console.log("dit id klik je aan : " + id);
        this.developersService.startedEditing.next(id);
    };
    DevelopersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developers',
            template: __webpack_require__(/*! ./developers.component.html */ "./src/app/components/developers/developers.component.html")
        }),
        __metadata("design:paramtypes", [_services_developers_service__WEBPACK_IMPORTED_MODULE_1__["DeveloperService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], DevelopersComponent);
    return DevelopersComponent;
}());



/***/ }),

/***/ "./src/app/components/games/games-edit/games-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/games/games-edit/games-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched{\n    border-left: 5px solid #a94442; /* red */\n}\ninput.ng-valid.ng-touched,\ntextarea.ng-invalid.ng-touched{\n    border-left: 5px solid #42A948; /* green */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lcy9nYW1lcy1lZGl0L2dhbWVzLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwrQkFBK0IsQ0FBQyxTQUFTO0NBQzVDO0FBQ0Q7O0lBRUksK0JBQStCLENBQUMsV0FBVztDQUM5QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZXMvZ2FtZXMtZWRpdC9nYW1lcy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cbmlucHV0Lm5nLXZhbGlkLm5nLXRvdWNoZWQsXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/games/games-edit/games-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/games/games-edit/games-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label for=\"imageUrl\">Image</label>\n          <input type=\"text\" id=\"imageUrl\" class=\"form-control\" name=\"imageUrl\" ngModel required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label for=\"name\">naam</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" ngModel required>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label for=\"releaseDate\">ReleaseDate</label>\n          <input type=\"text\" id=\"releaseDate\" class=\"form-control\" name=\"releaseDate\" ngModel required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label for=\"genre\">Genre</label>\n          <input type=\"text\" id=\"genre\" class=\"form-control\" name=\"genre\" ngModel required>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-8 form-group\">\n          <label for=\"description\">Description</label>\n          <input type=\"text\" id=\"description\" class=\"form-control\" name=\"description\" ngModel required>\n        </div>\n        <div class=\"col-sm-4 form-group\" *ngIf=\"!editMode\">\n          <label for=\"developer\">Developer</label>\n          <select type=\"text\" class=\"form-control\" id=\"developer\" name=\"developer\" ngModel required>\n            <option *ngFor=\"let developer of developers\">{{developer._id}}</option> \n            \n          </select>\n        </div>\n        <div class=\"col-sm-4 form-group\" *ngIf=\"editMode\">\n          <label>Developer</label>\n          <input disabled type=\"text\" class=\"form-control\" id=\"developer\" name=\"developer\" ngModel required>\n          <!-- <p>{{name}}</p> -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'update' : 'Add' }}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- <label for=\"developer\">Developer</label> -->\n        <!-- <input type=\"search\" id=\"developer\" class=\"form-control\" name=\"developer\" ngModel required> -->\n        <!-- <ul class=\"list-group\">\n                <a\n                class=\"list-group-item\"\n                style=\"cursor: pointer\"\n                *ngFor=\"let developer of developers; let i = index\"\n                (click)=\"onEditItem(i)\"\n              >\n              <input type=\"object\" id=\"developer\" class=\"form-control\" name=\"developer\" ngModel required>\n              <label>Developer:</label> {{ developer.name}}\n              </a>\n            </ul> -->"

/***/ }),

/***/ "./src/app/components/games/games-edit/games-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/games/games-edit/games-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return GameEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _models_games_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/games.model */ "./src/app/models/games.model.ts");
/* harmony import */ var _services_developers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/developers.service */ "./src/app/services/developers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameEditComponent = /** @class */ (function () {
    function GameEditComponent(router, route, gameService, developerService) {
        this.router = router;
        this.route = route;
        this.gameService = gameService;
        this.developerService = developerService;
        this.developers = [];
        this.editMode = false;
    }
    GameEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.developerService.getDevelopers()
            .then(function (developers) {
            _this.developers = developers;
        });
        this.subscription = this.gameService.startedEditing
            .subscribe(function (id) {
            _this.editedItemId = id;
            _this.editMode = true;
            _this.gameService.getGame(id)
                .then(function (games) {
                _this.editedItem = games;
                _this.gameForm.setValue({
                    imageUrl: _this.editedItem.imageUrl,
                    name: _this.editedItem.name,
                    releaseDate: _this.editedItem.releaseDate,
                    genre: _this.editedItem.genre,
                    description: _this.editedItem.description,
                    developer: _this.editedItem.developer
                });
            })
                .catch(function (error) { return console.log(error); });
        });
    };
    GameEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newGame = new _models_games_model__WEBPACK_IMPORTED_MODULE_3__["Game"](value.imageUrl, value.name, value.releaseDate, value.genre, value.description, value.developer);
        if (this.editMode) {
            this.gameService.updateGames(this.editedItemId, newGame);
        }
        else {
            this.gameService.addGame(newGame);
        }
        this.editMode = false;
        form.reset();
    };
    GameEditComponent.prototype.onDelete = function () {
        this.gameService.deleteGame(this.editedItemId);
        this.onClear();
    };
    GameEditComponent.prototype.onClear = function () {
        this.gameForm.reset();
        this.editMode = false;
    };
    GameEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GameEditComponent.prototype.onEditItem = function (id) {
        console.log("dit id klik je aan : " + id);
        this.developerService.startedEditing.next(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], GameEditComponent.prototype, "gameForm", void 0);
    GameEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-edit',
            template: __webpack_require__(/*! ./games-edit.component.html */ "./src/app/components/games/games-edit/games-edit.component.html"),
            styles: [__webpack_require__(/*! ./games-edit.component.css */ "./src/app/components/games/games-edit/games-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _services_developers_service__WEBPACK_IMPORTED_MODULE_4__["DeveloperService"]])
    ], GameEditComponent);
    return GameEditComponent;
}());



/***/ }),

/***/ "./src/app/components/games/games.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/games/games.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row text-left\">\n  <ng-template [ngIf]=\"!loginService.isAuth()\">\n    <div class=\"col-xs-12\">\n      <ul class=\"list-group\">\n        <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let game of games; let i = index\" (click)=\"onEditItem(i)\">\n          <img [src]=\"game.imageUrl\" alt=\"{{ game.imageUrl }}\" class=\"img-responsive\" style=\"max-height: 100px; max-width: 150px\">\n          <label>Naam:</label> {{ game.name }} <br>\n          <label>ReleaseDate:</label> {{game.releaseDate}} <br>\n          <label>Genre:</label> {{game.genre}} <br>\n          <label>Description:</label> {{game.description}} <br>\n          <label>Developer:</label> {{game.developer._id}}\n        </a>\n      </ul>\n    </div>\n  </ng-template>\n  <ng-template [ngIf]=\"loginService.isAuth()\">\n      <div class=\"col-xs-6\">\n          <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let game of games; let i = index\" (click)=\"onEditItem(i)\">\n              <img [src]=\"game.imageUrl\" alt=\"{{ game.imageUrl }}\" class=\"img-responsive\" style=\"max-height: 100px; max-width: 150px\">\n              <label>Naam:</label> {{ game.name }} <br>\n              <label>ReleaseDate:</label> {{game.releaseDate}} <br>\n              <label>Genre:</label> {{game.genre}} <br>\n              <label>Description:</label> {{game.description}} <br>\n              <label>Developer:</label> {{game.developer._id}}\n            </a>\n          </ul>\n        </div>\n  </ng-template>\n  <div class=\"col-xs-6\">\n    <ng-template [ngIf]=\"loginService.isAuth()\">\n      <app-game-edit></app-game-edit>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/games/games.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/games/games.component.ts ***!
  \*****************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesComponent = /** @class */ (function () {
    function GamesComponent(gamesService, loginService) {
        this.gamesService = gamesService;
        this.loginService = loginService;
        this.games = [];
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gamesService.getGames()
            .then(function (games) {
            _this.games = games;
        });
        this.subscription = this.gamesService.gamesChanged
            .subscribe(function (games) {
            _this.games = games;
        });
    };
    GamesComponent.prototype.onEditItem = function (id) {
        console.log("dit id klik je aan : " + id);
        this.gamesService.startedEditing.next(id);
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/components/games/games.component.html")
        }),
        __metadata("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Games</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive='active'><a routerLink='/'>Home</a></li>\n                <li routerLinkActive='active'><a routerLink='/games'>Games</a></li>\n                <li routerLinkActive='active'><a routerLink='/developers'>Developers</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <ng-template [ngIf]=\"!loginService.isAuth()\">\n                    <li routerLinkActive='active'><a routerLink='/login'>Log In</a></li>\n                    <li routerLinkActive='active'><a routerLink='/signup'>Register</a></li>\n                </ng-template>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <ng-template [ngIf]=\"loginService.isAuth()\">\n                <li><a style=\"cursor: pointer;\" (click)=\"onLogout()\">Log out</a></li>\n            </ng-template>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.signOut();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#WelkomTekst{\n    font-family: American Typewriter, serif;\n}\n\nlabel{\n    max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztDQUMzQzs7QUFFRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1dlbGtvbVRla3N0e1xuICAgIGZvbnQtZmFtaWx5OiBBbWVyaWNhbiBUeXBld3JpdGVyLCBzZXJpZjtcbn1cblxubGFiZWx7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row text-center\">\n  <div class=\"col-xs-12\">\n    <h1 id=\"WelkomTekst\">Welcome to our game website!</h1>\n    <br>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-6 text-center\">\n    <label>Take a look at our collection of games! All games are linked to their developer and genre.</label>\n  </div>\n  <div class=\"col-xs-6 text-center\">\n    <label>Take a look at our developers, each developer has at least developt one game. You can search for a specific\n      game or developer in the search area.</label>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-6 text-center\">\n    <a routerLink='/games'><button type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Games</button></a>\n  </div>\n  <div class=\"col-xs-6 text-center\">\n    <a routerLink='/developers'><button type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Developer</button></a>\n  </div>\n</div>"

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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logged-in.gaurd.ts":
/*!************************************!*\
  !*** ./src/app/logged-in.gaurd.ts ***!
  \************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(loginService) {
        this.loginService = loginService;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        var is = this.loginService.isAuth();
        console.log(is);
        return is;
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/models/developers.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/developers.model.ts ***!
  \********************************************/
/*! exports provided: Developer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Developer", function() { return Developer; });
var Developer = /** @class */ (function () {
    function Developer(name, age, games) {
        this.name = name;
        this.age = age;
        this.games = games;
    }
    return Developer;
}());



/***/ }),

/***/ "./src/app/models/games.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/games.model.ts ***!
  \***************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(imageUrl, name, releaseDate, genre, description, developer) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.description = description;
        this.imageUrl = imageUrl;
        this.developer = developer;
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/models/login.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstname, lastname) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/developers.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/developers.service.ts ***!
  \************************************************/
/*! exports provided: DeveloperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperService", function() { return DeveloperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 ///Subject
var DeveloperService = /** @class */ (function () {
    //
    //
    //
    function DeveloperService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/developer'; // URL to web api
        this.postServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl;
        this.developers = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.developersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // this.readDeveloper();
    }
    //
    //
    //
    DeveloperService.prototype.getDevelopers = function () {
        var _this = this;
        console.log('Developer ophalen van server');
        return this.http.get(this.serverUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            _this.developers = response.json();
            return _this.developers;
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    DeveloperService.prototype.getDeveloper = function (index) {
        var _this = this;
        console.log('Developer ophalen met id');
        return this.http.get(this.serverUrl + '/' + this.developers[index]._id, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    DeveloperService.prototype.updateDevelopers = function (index, newDeveloper) {
        var _this = this;
        console.log("Developer updaten");
        this.http.put(this.serverUrl + "/" + this.developers[index]._id, { name: newDeveloper.name, age: newDeveloper.age, games: newDeveloper.games })
            .toPromise()
            .then(function () {
            console.log("Developer veranderd");
            _this.getDevelopers()
                .then(function (developers) {
                _this.developers = developers;
                _this.developersChanged.next(_this.developers.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    DeveloperService.prototype.deleteDeveloper = function (index) {
        var _this = this;
        console.log("Developer verwijderen");
        this.http.delete(this.serverUrl + "/" + this.developers[index]._id)
            .toPromise()
            .then(function () {
            console.log("developers verwijderd");
            _this.getDevelopers()
                .then(function (developers) {
                _this.developers = developers;
                _this.developersChanged.next(_this.developers.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    DeveloperService.prototype.addDeveloper = function (developers) {
        var _this = this;
        console.log('developers opslaan');
        this.http.post(this.postServerUrl + '/game/' + developers.games._id + '/developer', { name: developers.name, age: developers.age, games: developers.games })
            .toPromise()
            .then(function () {
            console.log("developers toegevoegd");
            _this.getDevelopers()
                .then(function (developers) {
                _this.developers = developers;
                _this.developersChanged.next(_this.developers.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //
    //
    //
    DeveloperService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    DeveloperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DeveloperService);
    return DeveloperService;
}());



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 ///Subject;
var GameService = /** @class */ (function () {
    //
    //
    //
    function GameService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/game'; // URL to web api
        this.games = [];
        this.PostserverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl; //URL to game post endpoint
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.gamesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // this.readGame();
    }
    //
    //
    //
    GameService.prototype.getGames = function () {
        var _this = this;
        console.log('Game ophalen van server');
        return this.http.get(this.serverUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            _this.games = response.json();
            return _this.games;
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    GameService.prototype.getGame = function (index) {
        var _this = this;
        console.log('Game ophalen met id');
        return this.http.get(this.serverUrl + '/' + this.games[index]._id, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    GameService.prototype.updateGames = function (index, newGame) {
        var _this = this;
        console.log("Game updaten");
        this.http.put(this.serverUrl + "/" + this.games[index]._id, { imageUrl: newGame.imageUrl, name: newGame.name, releaseDate: newGame.releaseDate, genre: newGame.genre, description: newGame.description, developer: newGame.developer })
            .toPromise()
            .then(function () {
            console.log("Game veranderd");
            _this.getGames()
                .then(function (games) {
                _this.games = games;
                _this.gamesChanged.next(_this.games.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    GameService.prototype.deleteGame = function (index) {
        var _this = this;
        console.log("Game verwijderen");
        this.http.delete(this.serverUrl + "/" + this.games[index]._id)
            .toPromise()
            .then(function () {
            console.log("game verwijderd");
            _this.getGames()
                .then(function (games) {
                _this.games = games;
                _this.gamesChanged.next(_this.games.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    GameService.prototype.addGame = function (games) {
        var _this = this;
        console.log('game opslaan');
        console.log(games.developer);
        this.http.post(this.PostserverUrl + '/developer/' + games.developer + '/game', { imageUrl: games.imageUrl, name: games.name, releaseDate: games.releaseDate, genre: games.genre, description: games.description, developer: games.developer })
            .toPromise()
            .then(function () {
            console.log("game toegevoegd");
            _this.getGames()
                .then(function (games) {
                _this.games = games;
                _this.gamesChanged.next(_this.games.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //
    //
    //
    GameService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 ///Subject


var LoginService = /** @class */ (function () {
    function LoginService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/authenticate'; // URL to web api
        this.users = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.usersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.token = null;
    }
    LoginService.prototype.getUsers = function () {
        var _this = this;
        console.log('user ophalen van de server');
        return this.http.get(this.serverUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            _this.users = response.json();
            return _this.users;
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    LoginService.prototype.getUser = function (index) {
        var _this = this;
        console.log('User ophalen met id');
        return this.http.get(this.serverUrl + '/' + this.users[index]._id, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    LoginService.prototype.authenticateUser = function (user) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.serverUrl, user, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    LoginService.prototype.loginUser = function (logins) {
        var _this = this;
        return this.httpClient.post(this.serverUrl, { username: logins.username, password: logins.password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (logins) {
            _this.token = logins.data.token;
            // // login successful if there's a jwt token in the response
            // if (logins && logins.token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     localStorage.setItem('currentUser', JSON.stringify(logins));
            // }
        }));
    };
    LoginService.prototype.isAuth = function () {
        return this.token != null;
    };
    LoginService.prototype.signOut = function () {
        this.token = null;
    };
    LoginService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 ///Subject
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/register'; // URL to web api
        this.userUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/user';
        this.users = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.usersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RegisterService.prototype.getUsers = function () {
        var _this = this;
        console.log('user ophalen van de server');
        return this.http.get(this.userUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            _this.users = response.json();
            return _this.users;
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    RegisterService.prototype.getUser = function (index) {
        var _this = this;
        console.log('User ophalen met id');
        return this.http.get(this.userUrl + '/' + this.users[index]._id, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.dir(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    // public getGames(): Promise<Game[]> {
    //     console.log('Game ophalen van server');
    //     return this.http.get(this.serverUrl, { headers: this.headers })
    //         .toPromise()
    //         .then(response => {
    //             console.dir(response.json());
    //             this.games = response.json() as Game[];
    //             return this.games
    //         })
    //         .catch(error => {
    //             return this.handleError(error);
    //         });
    // }
    RegisterService.prototype.addUser = function (users) {
        var _this = this;
        console.log('user aanmaken');
        this.http.post(this.serverUrl, { username: users.username, password: users.password, firstname: users.firstname, lastname: users.lastname })
            .toPromise()
            .then(function () {
            console.log("user toegevoegd");
            _this.getUsers()
                .then(function (users) {
                _this.users = users;
                _this.usersChanged.next(_this.users.slice());
            })
                .catch(function (error) { return console.log(error); });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // public addGame(games: Game) {
    //     console.log('games opslaan');
    //     this.http.post(this.serverUrl, { imageUrl: games.imageUrl, name: games.name, releaseDate: games.releaseDate, genre: games.genre, description: games.description })
    //         .toPromise()
    //         .then(() => {
    //             console.log("games toegevoegd")
    //             this.getGames()
    //                 .then(
    //                     games => {
    //                         this.games = games
    //                         this.gamesChanged.next(this.games.slice());
    //                     }
    //                 )
    //                 .catch(error => console.log(error));
    //         })
    //         .catch(error => { return this.handleError(error) });
    // }
    RegisterService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegisterService);
    return RegisterService;
}());



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
var environment = {
    production: false,
    serverUrl: 'http://localhost:3000/api/v1'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stan/Documents/Angular Projects/Games-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map