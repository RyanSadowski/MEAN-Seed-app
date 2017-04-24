webpackJsonp([0,3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.adm == "false") {
            this.router.navigateByUrl('/');
        }
        else {
            this.userService.getUsers()
                .subscribe(function (users) {
                console.log(users);
                _this.users = users;
                console.log(_this.users[0]);
            }, function (error) {
                _this.errorMessage = error;
                console.log(error);
            });
        }
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(387),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/admin.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_octavian__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_octavian___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_octavian__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.volume = 0;
        this.oscType = 'sine';
        this.note = new __WEBPACK_IMPORTED_MODULE_2_octavian__["Note"]('A4');
        this.audioCtx = new window.AudioContext();
        this.oscillator = this.audioCtx.createOscillator();
        this.gainNode = this.audioCtx.createGain();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.ChangeVolume(0); //start it silent
        this.oscillator.type = this.oscType;
        this.oscillator.frequency.value = this.note.frequency; // value in hertz
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.audioCtx.destination);
        this.oscillator.start();
    };
    HomeComponent.prototype.ChangeVolume = function (value) {
        this.gain = (value / 10);
        this.gainNode.gain.value = this.gain;
        console.log("Volume changed to:" + this.volume);
    };
    HomeComponent.prototype.ChangeNote = function (value) {
        this.note = new __WEBPACK_IMPORTED_MODULE_2_octavian__["Note"](value);
        this.oscillator.frequency.value = this.note.frequency;
    };
    HomeComponent.prototype.ChangeWaveForm = function (value) {
        this.oscType = value;
        this.oscillator.type = this.oscType;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(389),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/home.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.mode = 'Observable';
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        username = username.trim();
        if (!username) {
            return;
        }
        this.userService.login(username, password)
            .subscribe(function (res) {
            _this.registerSuccess = res.success;
            _this.res = res;
            localStorage.setItem('token', res.token);
            localStorage.setItem('username', res.username);
            localStorage.setItem('userId', res.userId);
            localStorage.setItem('admin', res.admin);
            _this.userService.checkLogin();
            _this.router.navigateByUrl('/');
        }, function (error) { return _this.errorMessage = error; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(390),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/login.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('token');
        this.checkUser();
    };
    ProfileComponent.prototype.checkUser = function () {
        var _this = this;
        this.username = localStorage.getItem('username');
        if (!this.username) {
            alert('need to login');
            this.router.navigateByUrl("/login");
        }
        this.userService.checkUser(this.username)
            .subscribe(function (res) {
            _this.userService.user = res.user;
        }, function (error) { return _this.errorMessage = error; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(392),
        styles: [__webpack_require__(375)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/profile.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.mode = 'Observable';
    }
    RegisterComponent.prototype.add = function (username, password, firstName, lastName, email) {
        var _this = this;
        username = username.trim();
        if (!username) {
            return;
        }
        this.userService.register(username, password, firstName, lastName, email)
            .subscribe(function (res) {
            console.log(res);
            _this.registerSuccess = res.success;
            _this.res = res;
        }, function (error) { return _this.errorMessage = error; });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(393),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/register.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: "dev",
    apiUrlBase: "http://localhost:3000/api/"
};
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/environment.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 206;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(214);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/user.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Dank Swag';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(388),
        styles: [__webpack_require__(371)]
    })
], AppComponent);

//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/app.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rxjs_extensions__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__["a" /* AdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/app.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
// app.routes.ts





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__["a" /* AdminComponent */] }
];
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/app.routes.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(userService) {
        this.userService = userService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.userService.checkLogin();
    };
    NavbarComponent.prototype.logout = function () {
        this.userService.logout();
    };
    NavbarComponent.prototype.loggedIn = function (success) {
        console.log(success + " logged in ");
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__(391),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/navbar.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
// Observable class extensions


// Observable operators







//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/rxjs-extensions.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/polyfills.js.map

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "app-root{\n  margin:0;\n  padding: 0;\n}\nbody {\n  margin:0;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, ".key{\n  border : 1px solid black;\n  width: 40px;\n  height: 100px;\n  margin: 0;\n  padding:8px;\n  display: inline;\n}\n.key:hover{\n  border : 1px solid blue;\n}\n.key:active{\nbackground-color: #000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <h1>Admin</h1>\n</div>\n\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Users</div>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Username</th>\n      <th>Email</th>\n      <th>First</th>\n      <th>Last</th>\n      <th>Active?</th>\n      <th>Admin?</th>\n    </tr>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.username}}</td>\n      <td>{{user.email}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.active}}</td>\n      <td>{{user.admin}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container body-container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 *ngIf=\"!userService.authenticated\">Welcome!</h1>\n  <h1 *ngIf=\"userService.authenticated\">Hello, {{userService.user.username}}!</h1>\n  <p>This is a basic template made by <a href=\"http://www.ryansadowski.xyz\">Ryan Sadowski</a></p>\n  <p><a class=\"btn btn-primary btn-lg\" href=\"http://github.com/RyanSadowski/MEAN2Seed\" role=\"button\">Learn more</a></p>\n</div>\n\n<h3> Slider changes volume</h3>\n<input type=\"range\" min=\"0\" max=\"10\" value=\"0\" [(ngModel)]=\"volume\" (change)=\"ChangeVolume($event.target.value)\">\n<!-- <input type=\"text\" [(ngModel)]=\"tone\" placeholder=\"A4\" (change)=\"ChangeNote($event.target.value)\"> -->\n<ul id=\"waveFormList\">\n  <li><input type=\"radio\" [(ngModel)]=\"oscType\" (change)=\"ChangeWaveForm($event.target.value)\" value=\"sine\" id=\"sine\"><span>  sine</span></li>\n  <li><input type=\"radio\" [(ngModel)]=\"oscType\" (change)=\"ChangeWaveForm($event.target.value)\" value=\"square\" id=\"square\"><span>  square</span></li>\n  <li><input type=\"radio\" [(ngModel)]=\"oscType\" (change)=\"ChangeWaveForm($event.target.value)\" value=\"sawtooth\" id=\"sawtooth\"><span>  saw</span></li>\n  <li><input type=\"radio\" [(ngModel)]=\"oscType\" (change)=\"ChangeWaveForm($event.target.value)\" value=\"triangle\" id=\"triangle\"><span>  triangle</span></li>\n</ul>\n\n<div id=\"keyboard\">\n  <div (click)=\"ChangeNote('C3')\" class=\"key\">C3</div>\n  <div (click)=\"ChangeNote('D3')\" class=\"key\">D3</div>\n  <div (click)=\"ChangeNote('E3')\" class=\"key\">E3</div>\n  <div (click)=\"ChangeNote('F3')\" class=\"key\">F3</div>\n  <div (click)=\"ChangeNote('G3')\" class=\"key\">G3</div>\n  <div (click)=\"ChangeNote('A3')\" class=\"key\">A3</div>\n  <div (click)=\"ChangeNote('B3')\" class=\"key\">B3</div>\n  <div (click)=\"ChangeNote('C4')\" class=\"key\">C4</div>\n  <div (click)=\"ChangeNote('D4')\" class=\"key\">D4</div>\n  <div (click)=\"ChangeNote('E4')\" class=\"key\">E4</div>\n  <div (click)=\"ChangeNote('F4')\" class=\"key\">F4</div>\n  <div (click)=\"ChangeNote('G4')\" class=\"key\">G4</div>\n  <div (click)=\"ChangeNote('A4')\" class=\"key\">A4</div>\n  <div (click)=\"ChangeNote('B4')\" class=\"key\">B4</div>\n  <div (click)=\"ChangeNote('C5')\" class=\"key\">C5</div>\n  <div (click)=\"ChangeNote('D5')\" class=\"key\">D5</div>\n  <div (click)=\"ChangeNote('E5')\" class=\"key\">E5</div>\n  <div (click)=\"ChangeNote('F5')\" class=\"key\">F5</div>\n  <div (click)=\"ChangeNote('G5')\" class=\"key\">G5</div>\n  <div (click)=\"ChangeNote('A5')\" class=\"key\">A5</div>\n  <div (click)=\"ChangeNote('B5')\" class=\"key\">B5</div>\n</div>\n\n<!-- <p class=\"muted\">Try values like \"A4,B5,G2\"</p>-->\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"registerSuccess\">\n  <strong>Success!</strong>\n</div>\n<div class=\"page-header\">\n  <h1>Login</h1>\n</div>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" id=\"username_register\" aria-describedby=\"username\" #username placeholder=\"Enter username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password_register\" #password placeholder=\"Password\">\n  </div>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"login(username.value, password.value); username.value=''; password.value=''\">Login!</button>\n</form>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <span class=\"glyphicon glyphicon-glass\"> Mean2 Seed</span>\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-right navbar-nav\" *ngIf=\"!userService.authenticated\">\n        <li><a routerLink=\"/login\">Login</a></li>\n        <li><a routerLink=\"/register\">Register</a></li>\n      </ul>\n      <ul class=\"nav navbar-right navbar-nav\" *ngIf=\"userService.authenticated\">\n        <li *ngIf=\"userService.adm == 'true'\"><a routerLink=\"/admin\"><span class=\"glyphicon glyphicon-cog\"></span></a></li>\n        <li><a routerLink=\"/profile\">Profile</a></li>\n        <li><a (click)=\"logout();\"><span>Logout</span></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label>UserName</label>\n    <input value=\"{{userService.user.username}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input value=\"{{userService.user.email}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label>First</label>\n    <input value=\"{{userService.user.firstName}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label>Last</label>\n    <input value=\"{{userService.user.lastName}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label>PassHash</label>\n    <input value=\"{{userService.user.password}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label>Created</label>\n    <input value=\"{{userService.user.updated_at}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label>id</label>\n    <input value=\"{{userService.user._id}}\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleTextarea\">Token</label>\n    <textarea class=\"form-control\" rows=\"6\" disabled>{{token}}</textarea>\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label>Admin</label>\n    <input type=\"checkbox\" class=\"form-check-input\" *ngIf=\"userService.user.admin\" checked=\"checked\" disabled>\n    <input type=\"checkbox\" class=\"form-check-input\" *ngIf=\"!userService.user.admin\" disabled>\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label>Active</label>\n    <input type=\"checkbox\" class=\"form-check-input\" *ngIf=\"userService.user.active\" checked=\"checked\" disabled>\n    <input type=\"checkbox\" class=\"form-check-input\" *ngIf=\"!userService.user.active\" disabled>\n  </div>\n</form>\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"registerSuccess\">\n    <strong>Success!</strong>\n</div>\n<div class=\"page-header\">\n  <h1>Register</h1>\n</div>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" id=\"username_register\" aria-describedby=\"username\" #username placeholder=\"Enter username\">\n    <small id=\"usernameHelp\" class=\"form-text text-muted\">Pick a good one</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password_register\" #password placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"firstName_register\" aria-describedby=\"firstName\" #firstName placeholder=\"Enter firstName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lastName\">Last Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"lastName_register\" aria-describedby=\"lastName\" #lastName placeholder=\"Enter lastName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"email_register\" aria-describedby=\"email\" #email placeholder=\"Enter Email\">\n  </div>\n   <button type=\"button\" class=\"btn btn-primary\" (click)=\"add(username.value, password.value, firstName.value, lastName.value, email.value); username.value=''; password.value=''; firstName.value=''; lastName.value=''; email.value='';\">Register!</button>\n</form>\n"

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */];
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrlBase;
    }
    UserService.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    UserService.prototype.register = function (username, password, firstName, lastName, email) {
        console.log("make");
        return this.http
            .post(this.url + "setup", JSON.stringify({ username: username, password: password, firstName: firstName, lastName: lastName, email: email }), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.login = function (username, password) {
        return this.http
            .post(this.url + "auth", JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.checkUser = function (username) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token') : '';
        if (this.authenticated) {
            return this.http
                .post(this.url + "user" + token, JSON.stringify({ username: username }), { headers: this.headers })
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            alert("Please login");
            this.router.navigateByUrl("/login");
            return;
        }
    };
    UserService.prototype.getUsers = function () {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token') : '';
        return this.http
            .get(this.url + "users" + token, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.clear();
        this.checkLogin();
        this.router.navigateByUrl('/');
    };
    UserService.prototype.checkLogin = function () {
        if (localStorage.getItem('token')) {
            this.authenticated = true;
            this.user.username = localStorage.getItem("username");
            this.checkAdmin();
        }
        else {
            this.authenticated = false;
        }
    };
    UserService.prototype.checkAdmin = function () {
        this.adm = localStorage.getItem("admin");
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        //console.log(body || {});
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=/Users/namo/Dropbox/dev/MEAN2Seed/src/user.service.js.map

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);


/***/ })

},[650]);
//# sourceMappingURL=main.bundle.js.map