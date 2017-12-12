webpackJsonp([0],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_page__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_page__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login_page__["a" /* LoginPage */]), __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.page.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_pipe__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__platform_pipe__["a" /* PlatformPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__platform_pipe__["a" /* PlatformPipe */]]
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlatformPipe = (function () {
    function PlatformPipe(platform) {
        this.platform = platform;
        window.platform = platform;
    }
    PlatformPipe.prototype.transform = function (value, platforms) {
        var _this = this;
        if (platforms === void 0) { platforms = ''; }
        var support = platforms
            .split(',')
            .map(function (p) {
            switch (p) {
                case 'md':
                    return 'android';
                case 'wp':
                    return 'windows';
                default:
                    return p;
            }
        })
            .filter(function (p) { return !!p; });
        return support.some(function (p) { return _this.platform.is(p); }) ? value : undefined;
    };
    PlatformPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'platform' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], PlatformPipe);
    return PlatformPipe;
}());

//# sourceMappingURL=platform.pipe.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_user1_posts_json__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_user1_posts_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_user1_posts_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_user2_posts_json__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_user2_posts_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_user2_posts_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_page__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = (function () {
    function LoginPage(nav, login, http) {
        this.nav = nav;
        this.login = login;
        this.http = http;
    }
    LoginPage.prototype.facebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var images, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        images = [];
                        param = {
                            name: '<name>',
                            post: __WEBPACK_IMPORTED_MODULE_3__assets_user1_posts_json__["slice"](),
                            image: images.slice()
                        };
                        return [4 /*yield*/, this.login.login(param).toPromise()];
                    case 1:
                        _a.sent();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Home);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.twitter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var images, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        images = [];
                        param = {
                            name: '<name>',
                            post: __WEBPACK_IMPORTED_MODULE_4__assets_user2_posts_json__["slice"](),
                            image: images.slice()
                        };
                        return [4 /*yield*/, this.login.login(param).toPromise()];
                    case 1:
                        _a.sent();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Home);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.skip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            name: '<name>',
                            post: [],
                            image: []
                        };
                        return [4 /*yield*/, this.login.login(param).toPromise()];
                    case 1:
                        _a.sent();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Home);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getImages = function (user, imageCount) {
        var blobs = [];
        for (var i = 1; i <= imageCount; i++)
            blobs.push(this.getImage("/assets/user" + user + "/image" + i + ".png"));
        return Promise.all(blobs);
    };
    LoginPage.prototype.getImage = function (url) {
        return this.http.get(url, { responseType: 'blob' }).toPromise();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/travis/build/ngfk/wi-2017-t5-app/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar [color]="\'primary\' | platform:\'md\'">\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list no-lines>\n        <button ion-item detail-none (click)="facebook()">\n            <ion-icon name="logo-facebook" item-start></ion-icon>\n            <h2>Facebook</h2>\n        </button>\n        <button ion-item detail-none (click)="twitter()">\n            <ion-icon name="logo-twitter" item-start></ion-icon>\n            <h2>Twitter</h2>\n        </button>\n        <button ion-item detail-none (click)="skip()">\n            <ion-icon name="contact" item-start></ion-icon>\n            <h2>Skip</h2>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/travis/build/ngfk/wi-2017-t5-app/src/pages/login/login.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.page.js.map

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = ["The beautiful scenery of Tuscany, Italy","No filter needed!!! The untouched west coast of Australia is simply stunning!! ","Hi guys! My friend Justine and I are in surfers paradise and we would like to go to Killarney glen tomorrow to see the heart shaped pool and go for a walk, anyone going that way with spare seats? We will chip in for gas :)","Just had the most amazing sri lankian dish","Luckily Adams Peack is open again","Yes, I'm a celebrity stalker!!","Kinabatangan river it's pretty nice or in Kalimantan maratua Island. ;)","Hi everyone! I'm planning to go to Kalimantan doing a boat tour through Tanjung Puting National Park around the 18/19th December. Anyone here planning on doing the same? Doing it solo is quite expensive, and as it is low season it is unsure to find a group once I'm there. If someone plans on doing it around that time as well, please contact me :)","I'm keen to go explore the city of BUENOS AIRES","Great concert last night in London with the Dublin Legends","And now it's time for a nice cold beer at a terrace","Watching soccer","The tickets for \"the dubliners\" came today :D"]

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = ["Drinks on the beach #beachparty","Biggest hangover today, maybe a few drinks to many","Time to explore Barcelona!","Amazing this view from the top of Empire State Building","Couldn't sleep :) Designed an ironic t-shirt and matching throw pillow. ","Ill probably be needing this with my reckless ways and all. #wedding #rehearsaldinner #firstaid #hangovers","Business never sleeps, but sometimes you wish it did lol ","We rollin well with another debut @KUATO_PARTYGUY is on till 4pm est yeaaaa","Patong's nightlife can seem pretty insane to a first-timer.","Anybody knows a good hairdresser in Bombay?","Udawalawe national park or yala national park? And why? ;)","Hired a tuktuk and traveled around Sri Lanka for three weeks, what an amazing sights :)"]

/***/ })

});
//# sourceMappingURL=0.js.map