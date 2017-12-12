webpackJsonp([2],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_page__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__settings_page__["a" /* SettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings_page__["a" /* SettingsPage */]), __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.page.module.js.map

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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_page__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    SettingsPage.prototype.facebook = function () {
        // this.nav.push(Page.About);
    };
    SettingsPage.prototype.twitter = function () {
        // this.nav.push(Page.About);
    };
    SettingsPage.prototype.about = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__models_page__["a" /* Page */].About);
    };
    SettingsPage.prototype.chat = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__models_page__["a" /* Page */].Chat);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/travis/build/ngfk/wi-2017-t5-app/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar [color]="\'primary\' | platform:\'md\'">\n        <button ion-button menuToggle [color]="\'primary\' | platform:\'ios\'">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Settings</ion-title>\n        <ion-buttons end>\n            <button ion-button>Edit</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <div class="profile">\n                <ion-avatar class="profile__avatar">\n                    <img src="https://avatars.io/facebook/account@facebook.com/medium">\n                </ion-avatar>\n                <div class="profile__data">\n                    <h2>Profile name</h2>\n                    <p>status message</p>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item-divider>Accounts</ion-item-divider>\n        <button ion-item detail-none (tap)="facebook()">\n            <ion-icon name="logo-facebook" item-start></ion-icon>\n            <h2>Facebook</h2>\n            <p item-end>account@facebook.com</p>\n        </button>\n        <button ion-item detail-none (tap)="twitter()">\n            <ion-icon name="logo-twitter" item-start></ion-icon>\n            <h2>Twitter</h2>\n            <p item-end>twitter-handler</p>\n        </button>\n    </ion-list>\n    <ion-list>\n        <ion-item-divider>General</ion-item-divider>\n        <ion-item>\n            <ion-icon name="construct" item-start></ion-icon>\n            Version\n            <ion-badge item-end>0.0.1</ion-badge>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ionic" item-start></ion-icon>\n            Ionic\n            <ion-badge item-end>0.0.1</ion-badge>\n        </ion-item>\n        <button ion-item (tap)="about()">\n            <ion-icon name="information-circle" item-start></ion-icon>\n            About\n        </button>\n    </ion-list>\n    <ion-fab right bottom (tap)="chat()">\n        <button ion-fab>\n            <ion-icon name="chatboxes"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/travis/build/ngfk/wi-2017-t5-app/src/pages/settings/settings.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.page.js.map

/***/ })

});
//# sourceMappingURL=2.js.map