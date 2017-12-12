webpackJsonp([6],{

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.page.module": [
		343,
		5
	],
	"../pages/chat/chat.page.module": [
		344,
		4
	],
	"../pages/home/home.page.module": [
		345,
		3
	],
	"../pages/login/login.page.module": [
		346,
		0
	],
	"../pages/settings/settings.page.module": [
		347,
		2
	],
	"../pages/travel/travel.page.module": [
		348,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page;
(function (Page) {
    Page["About"] = "AboutPage";
    Page["Chat"] = "ChatPage";
    Page["Home"] = "HomePage";
    Page["Login"] = "LoginPage";
    Page["Settings"] = "SettingsPage";
    Page["Travel"] = "TravelPage";
})(Page || (Page = {}));
//# sourceMappingURL=page.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatType; });
var ChatType;
(function (ChatType) {
    ChatType["Text"] = "text";
    ChatType["Image"] = "image";
    ChatType["Location"] = "location";
})(ChatType || (ChatType = {}));
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_concat__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_mergeMap__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_zip__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_chat__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__env_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ConversationService = (function () {
    function ConversationService(http, env, store) {
        this.http = http;
        this.env = env;
        this.store = store;
        this.endpoint = this.env.backend + '/api/conversation';
    }
    ConversationService.prototype.message = function (entry) {
        var _this = this;
        var uri = this.endpoint + '/message';
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/json')
            .set('Authorization', "Bearer " + this.store.getState().auth);
        var params = { text: entry && entry.text };
        var request$ = this.http
            .post(uri, params, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share__["share"])());
        return request$.pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_mergeMap__["mergeMap"])(function (message) { return _this.toChatEntries(message); }));
    };
    ConversationService.prototype.toChatEntries = function (message) {
        if (message.profile)
            console.table([message.profile.scores]);
        var text$ = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(message.text).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["map"])(function (text) {
            var entry = {
                type: __WEBPACK_IMPORTED_MODULE_11__models_chat__["a" /* ChatType */].Text,
                timestamp: new Date(),
                from: 'Watson',
                text: text
            };
            return entry;
        }));
        // Cheating..
        var latMap = (_a = {},
            _a[52.0705] = 'assets/imgs/map-den-haag.png',
            _a[52.1601] = 'assets/imgs/map-leiden.png',
            _a[52.0907] = 'assets/imgs/map-utrecht.png',
            _a);
        var location$ = message.location
            ? Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])({
                type: __WEBPACK_IMPORTED_MODULE_11__models_chat__["a" /* ChatType */].Image,
                timestamp: new Date(),
                from: 'Watson',
                image: latMap[message.location[0]],
                title: latMap[message.location[0]]
            })
            : Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__["empty"])();
        return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_concat__["concat"])(location$), Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_zip__["zip"])(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(200, 800), function (item) { return item; }));
        var _a;
    };
    ConversationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_12__env_service__["a" /* EnvService */],
            __WEBPACK_IMPORTED_MODULE_13__store_service__["a" /* StoreService */]])
    ], ConversationService);
    return ConversationService;
}());

//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_share__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TOKEN_KEY = 'wi-2017-t5-token';
var LoginService = (function () {
    function LoginService(http, env, store) {
        this.http = http;
        this.env = env;
        this.store = store;
        this.endpoint = this.env.backend + '/api/login';
    }
    LoginService.prototype.login = function (params) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Accept', 'plain/text');
        var data = new FormData();
        data.append('name', params.name);
        data.append('deviceId', this.env.deviceId);
        params.post.forEach(function (p) { return data.append('post', p); });
        params.image.forEach(function (i) { return data.append('image', i); });
        var request$ = this.http
            .post(this.endpoint, data, { headers: headers, responseType: 'text' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_share__["share"])());
        request$.subscribe(function (token) {
            _this.store.dispatch('AUTH_SET_TOKEN', token);
        });
        return request$;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__env_service__["a" /* EnvService */],
            __WEBPACK_IMPORTED_MODULE_4__store_service__["a" /* StoreService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_conversation_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_env_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_mocking_device_mock__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_mocking_google_maps_mock__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_mocking_keyboard_mock__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_mocking_splash_screen_mock__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_mocking_status_bar_mock__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_store_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// tslint:disable only-arrow-functions
function withMock(actual, mock) {
    return !(document.URL.startsWith('https://') ||
        document.URL.startsWith('http://'))
        ? actual
        : { provide: actual, useClass: mock };
}
// tslint:enable only-arrow-functions
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]],
            imports: [
                // Angular
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                // Ionic
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.page.module#AboutPageModule', name: 'AboutPage', segment: 'about.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.page.module#ChatPageModule', name: 'ChatPage', segment: 'chat.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.page.module#HomePageModule', name: 'HomePage', segment: 'home.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.page.module#LoginPageModule', name: 'LoginPage', segment: 'login.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.page.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/travel/travel.page.module#TravelPageModule', name: 'TravelPage', segment: 'travel.page', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            providers: [
                // Ionic
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicErrorHandler */] },
                // Native
                withMock(__WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_12__services_mocking_device_mock__["a" /* DeviceMock */]),
                withMock(__WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_16__services_mocking_status_bar_mock__["a" /* StatusBarMock */]),
                withMock(__WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_15__services_mocking_splash_screen_mock__["a" /* SplashScreenMock */]),
                withMock(__WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_14__services_mocking_keyboard_mock__["a" /* KeyboardMock */]),
                withMock(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_13__services_mocking_google_maps_mock__["a" /* GoogleMapsMock */]),
                // Custom
                __WEBPACK_IMPORTED_MODULE_10__services_env_service__["a" /* EnvService */],
                __WEBPACK_IMPORTED_MODULE_17__services_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_9__services_conversation_service__["a" /* ConversationService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_state__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_state__ = __webpack_require__(330);



var reducer = Object(__WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__["combineReducers"])({
    auth: __WEBPACK_IMPORTED_MODULE_1__auth_state__["a" /* authReducer */],
    chat: __WEBPACK_IMPORTED_MODULE_2__chat_state__["a" /* chatReducer */]
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__);

var authReducer = Object(__WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__["createReducer"])('', {
    AUTH_SET_TOKEN: function (_, payload) { return payload; },
    AUTH_DEL_TOKEN: function () { return ''; }
});
//# sourceMappingURL=auth.state.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__);

var initial = [];
var chatReducer = Object(__WEBPACK_IMPORTED_MODULE_0__ngfk_ts_redux__["createReducer"])(initial, {
    CHAT_APPEND: function (state, payload) { return state.concat([payload]); },
    CHAT_CLEAR: function () { return []; }
});
//# sourceMappingURL=chat.state.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(72);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DeviceMock = (function (_super) {
    __extends(DeviceMock, _super);
    function DeviceMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceMock.prototype, "uuid", {
        get: function () {
            return 'mock';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceMock.prototype, "version", {
        get: function () {
            return 'mock';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceMock.prototype, "platform", {
        get: function () {
            return 'mock';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceMock.prototype, "model", {
        get: function () {
            return 'mock';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceMock.prototype, "isVirtual", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    DeviceMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DeviceMock);
    return DeviceMock;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */]));

//# sourceMappingURL=device.mock.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__ = __webpack_require__(119);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var URI = 'https://maps.googleapis.com/maps/api/js';
var KEY = 'AIzaSyBF-BJrlC0cW_MPUQVI-mtgeO5una5mGM8';
var GoogleMapsMock = (function (_super) {
    __extends(GoogleMapsMock, _super);
    function GoogleMapsMock() {
        var _this = _super.call(this) || this;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = URI + "?key=" + KEY;
        document.body.appendChild(script);
        return _this;
    }
    GoogleMapsMock.prototype.create = function (element, options) {
        var jsApiOptions = options
            ? __assign({}, options, options.camera, { center: (options.camera || {}).target, disableDefaultUI: true }) : undefined;
        return this.waitForGoogleApi().then(function (google) {
            return new google.maps.Map(element, jsApiOptions);
        });
    };
    GoogleMapsMock.prototype.waitForGoogleApi = function () {
        return new Promise(function (resolve) {
            var wait = function () {
                if (window.google)
                    resolve(window.google);
                else
                    setTimeout(function () { return wait(); }, 200);
            };
            wait();
        });
    };
    return GoogleMapsMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["a" /* GoogleMaps */]));

//# sourceMappingURL=google-maps.mock.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_EmptyObservable__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_EmptyObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_EmptyObservable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var KeyboardMock = (function (_super) {
    __extends(KeyboardMock, _super);
    function KeyboardMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyboardMock.prototype.onKeyboardShow = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_EmptyObservable__["EmptyObservable"]();
    };
    KeyboardMock.prototype.onKeyboardHide = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_EmptyObservable__["EmptyObservable"]();
    };
    return KeyboardMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__["a" /* Keyboard */]));

//# sourceMappingURL=keyboard.mock.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SplashScreenMock = (function (_super) {
    __extends(SplashScreenMock, _super);
    function SplashScreenMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreenMock.prototype.hide = function () {
        // Do nothing, prevents warning when in a browser.
    };
    SplashScreenMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SplashScreenMock);
    return SplashScreenMock;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]));

//# sourceMappingURL=splash-screen.mock.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBarMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(75);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StatusBarMock = (function (_super) {
    __extends(StatusBarMock, _super);
    function StatusBarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarMock.prototype.overlaysWebView = function (overlay) {
        // Do nothing, prevents warning when in a browser.
    };
    StatusBarMock.prototype.styleBlackOpaque = function () {
        // Do nothing, prevents warning when in a browser.
    };
    StatusBarMock.prototype.styleBlackTranslucent = function () {
        // Do nothing, prevents warning when in a browser.
    };
    StatusBarMock.prototype.styleDefault = function () {
        // Do nothing, prevents warning when in a browser.
    };
    StatusBarMock.prototype.styleLightContent = function () {
        // Do nothing, prevents warning when in a browser.
    };
    StatusBarMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StatusBarMock);
    return StatusBarMock;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */]));

//# sourceMappingURL=status-bar.mock.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ion_icon__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_page__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_env_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_store_service__ = __webpack_require__(44);
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








var MyApp = (function () {
    function MyApp(cd, platform, statusBar, env, store, splashScreen) {
        this.cd = cd;
        this.platform = platform;
        this.statusBar = statusBar;
        this.env = env;
        this.store = store;
        this.splashScreen = splashScreen;
    }
    MyApp.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.initializeMenu();
                        return [4 /*yield*/, this.env.initialize()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.store.initialize()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.statusBar.styleDefault()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.splashScreen.hide()];
                    case 5:
                        _a.sent();
                        this.rootPage = this.store.getState().auth ? __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Home : __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Login;
                        this.cd.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openMenu = function (entry) {
        if (entry.page === __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Login) {
            this.store.dispatch('AUTH_DEL_TOKEN');
            this.store.dispatch('CHAT_CLEAR');
        }
        this.nav.setRoot(entry.page);
    };
    MyApp.prototype.initializeMenu = function () {
        this.menu = [
            {
                page: __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Home,
                icon: __WEBPACK_IMPORTED_MODULE_4__models_ion_icon__["a" /* IonIcon */].Home,
                title: 'Home'
            },
            {
                page: __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Chat,
                icon: __WEBPACK_IMPORTED_MODULE_4__models_ion_icon__["a" /* IonIcon */].Chatboxes,
                title: 'Chat'
            },
            {
                page: __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Travel,
                icon: __WEBPACK_IMPORTED_MODULE_4__models_ion_icon__["a" /* IonIcon */].Navigate,
                title: 'Travel'
            },
            {
                page: __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Settings,
                icon: __WEBPACK_IMPORTED_MODULE_4__models_ion_icon__["a" /* IonIcon */].Settings,
                title: 'Settings'
            },
            {
                page: __WEBPACK_IMPORTED_MODULE_5__models_page__["a" /* Page */].Login,
                icon: __WEBPACK_IMPORTED_MODULE_4__models_ion_icon__["a" /* IonIcon */].LogOut,
                title: 'Logout'
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/travis/build/ngfk/wi-2017-t5-app/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <div class="profile">\n                <img\n                    class="profile__avatar"\n                    src="https://avatars.io/facebook/account@facebook.com/medium"\n                >\n                <div class="profile__data">\n                    <h3>Profile name</h3>\n                    <p>status message</p>\n                </div>\n            </div>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button\n                ion-item\n                detail-none\n                menuClose\n                *ngFor="let m of menu"\n                (click)="openMenu(m)"\n            >\n                <ion-icon item-start [name]="m.icon"></ion-icon>\n                {{m.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n  \n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/travis/build/ngfk/wi-2017-t5-app/src/app/app.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__services_env_service__["a" /* EnvService */],
            __WEBPACK_IMPORTED_MODULE_7__services_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonIcon; });
var IonIcon;
(function (IonIcon) {
    IonIcon["Add"] = "add";
    IonIcon["AddCircle"] = "add-circle";
    IonIcon["Alarm"] = "alarm";
    IonIcon["Albums"] = "albums";
    IonIcon["Alert"] = "alert";
    IonIcon["AmericanFootball"] = "american-football";
    IonIcon["Analytics"] = "analytics";
    IonIcon["Android"] = "android";
    IonIcon["Angular"] = "angular";
    IonIcon["Aperture"] = "aperture";
    IonIcon["Apple"] = "apple";
    IonIcon["Apps"] = "apps";
    IonIcon["Appstore"] = "appstore";
    IonIcon["Archive"] = "archive";
    IonIcon["ArrowBack"] = "arrow-back";
    IonIcon["ArrowDown"] = "arrow-down";
    IonIcon["ArrowDropdown"] = "arrow-dropdown";
    IonIcon["ArrowDropdownCircle"] = "arrow-dropdown-circle";
    IonIcon["ArrowDropleft"] = "arrow-dropleft";
    IonIcon["ArrowDropleftCircle"] = "arrow-dropleft-circle";
    IonIcon["ArrowDropright"] = "arrow-dropright";
    IonIcon["ArrowDroprightCircle"] = "arrow-dropright-circle";
    IonIcon["ArrowDropup"] = "arrow-dropup";
    IonIcon["ArrowDropupCircle"] = "arrow-dropup-circle";
    IonIcon["ArrowForward"] = "arrow-forward";
    IonIcon["ArrowRoundBack"] = "arrow-round-back";
    IonIcon["ArrowRoundDown"] = "arrow-round-down";
    IonIcon["ArrowRoundForward"] = "arrow-round-forward";
    IonIcon["ArrowRoundUp"] = "arrow-round-up";
    IonIcon["ArrowUp"] = "arrow-up";
    IonIcon["At"] = "at";
    IonIcon["Attach"] = "attach";
    IonIcon["Backspace"] = "backspace";
    IonIcon["Barcode"] = "barcode";
    IonIcon["Baseball"] = "baseball";
    IonIcon["Basket"] = "basket";
    IonIcon["Basketball"] = "basketball";
    IonIcon["BatteryCharging"] = "battery-charging";
    IonIcon["BatteryDead"] = "battery-dead";
    IonIcon["BatteryFull"] = "battery-full";
    IonIcon["Beaker"] = "beaker";
    IonIcon["Beer"] = "beer";
    IonIcon["Bicycle"] = "bicycle";
    IonIcon["Bitcoin"] = "bitcoin";
    IonIcon["Bluetooth"] = "bluetooth";
    IonIcon["Boat"] = "boat";
    IonIcon["Body"] = "body";
    IonIcon["Bonfire"] = "bonfire";
    IonIcon["Book"] = "book";
    IonIcon["Bookmark"] = "bookmark";
    IonIcon["Bookmarks"] = "bookmarks";
    IonIcon["Bowtie"] = "bowtie";
    IonIcon["Briefcase"] = "briefcase";
    IonIcon["Browsers"] = "browsers";
    IonIcon["Brush"] = "brush";
    IonIcon["Buffer"] = "buffer";
    IonIcon["Bug"] = "bug";
    IonIcon["Build"] = "build";
    IonIcon["Bulb"] = "bulb";
    IonIcon["Bus"] = "bus";
    IonIcon["Cafe"] = "cafe";
    IonIcon["Calculator"] = "calculator";
    IonIcon["Calendar"] = "calendar";
    IonIcon["Call"] = "call";
    IonIcon["Camera"] = "camera";
    IonIcon["Car"] = "car";
    IonIcon["Card"] = "card";
    IonIcon["Cart"] = "cart";
    IonIcon["Cash"] = "cash";
    IonIcon["Chatboxes"] = "chatboxes";
    IonIcon["Chatbubbles"] = "chatbubbles";
    IonIcon["Checkbox"] = "checkbox";
    IonIcon["CheckboxOutline"] = "checkbox-outline";
    IonIcon["Checkmark"] = "checkmark";
    IonIcon["CheckmarkCircle"] = "checkmark-circle";
    IonIcon["CheckmarkCircleOutline"] = "checkmark-circle-outline";
    IonIcon["Chrome"] = "chrome";
    IonIcon["Clipboard"] = "clipboard";
    IonIcon["Clock"] = "clock";
    IonIcon["Close"] = "close";
    IonIcon["CloseCircle"] = "close-circle";
    IonIcon["ClosedCaptioning"] = "closed-captioning";
    IonIcon["Cloud"] = "cloud";
    IonIcon["CloudCircle"] = "cloud-circle";
    IonIcon["CloudDone"] = "cloud-done";
    IonIcon["CloudDownload"] = "cloud-download";
    IonIcon["CloudOutline"] = "cloud-outline";
    IonIcon["CloudUpload"] = "cloud-upload";
    IonIcon["Cloudy"] = "cloudy";
    IonIcon["CloudyNight"] = "cloudy-night";
    IonIcon["Code"] = "code";
    IonIcon["CodeDownload"] = "code-download";
    IonIcon["CodeWorking"] = "code-working";
    IonIcon["Codepen"] = "codepen";
    IonIcon["Cog"] = "cog";
    IonIcon["ColorFill"] = "color-fill";
    IonIcon["ColorFilter"] = "color-filter";
    IonIcon["ColorPalette"] = "color-palette";
    IonIcon["ColorWand"] = "color-wand";
    IonIcon["Compass"] = "compass";
    IonIcon["Construct"] = "construct";
    IonIcon["Contact"] = "contact";
    IonIcon["Contacts"] = "contacts";
    IonIcon["Contract"] = "contract";
    IonIcon["Contrast"] = "contrast";
    IonIcon["Copy"] = "copy";
    IonIcon["Create"] = "create";
    IonIcon["Crop"] = "crop";
    IonIcon["Css3"] = "css3";
    IonIcon["Cube"] = "cube";
    IonIcon["Cut"] = "cut";
    IonIcon["Designernews"] = "designernews";
    IonIcon["Desktop"] = "desktop";
    IonIcon["Disc"] = "disc";
    IonIcon["Document"] = "document";
    IonIcon["DoneAll"] = "done-all";
    IonIcon["Download"] = "download";
    IonIcon["Dribbble"] = "dribbble";
    IonIcon["Dropbox"] = "dropbox";
    IonIcon["Easel"] = "easel";
    IonIcon["Egg"] = "egg";
    IonIcon["Euro"] = "euro";
    IonIcon["Exit"] = "exit";
    IonIcon["Expand"] = "expand";
    IonIcon["Eye"] = "eye";
    IonIcon["EyeOff"] = "eye-off";
    IonIcon["Facebook"] = "facebook";
    IonIcon["Fastforward"] = "fastforward";
    IonIcon["Female"] = "female";
    IonIcon["Filing"] = "filing";
    IonIcon["Film"] = "film";
    IonIcon["FingerPrint"] = "finger-print";
    IonIcon["Flag"] = "flag";
    IonIcon["Flame"] = "flame";
    IonIcon["Flash"] = "flash";
    IonIcon["Flask"] = "flask";
    IonIcon["Flower"] = "flower";
    IonIcon["Folder"] = "folder";
    IonIcon["FolderOpen"] = "folder-open";
    IonIcon["Football"] = "football";
    IonIcon["Foursquare"] = "foursquare";
    IonIcon["FreebsdDevil"] = "freebsd-devil";
    IonIcon["Funnel"] = "funnel";
    IonIcon["GameControllerA"] = "game-controller-a";
    IonIcon["GameControllerB"] = "game-controller-b";
    IonIcon["GitBranch"] = "git-branch";
    IonIcon["GitCommit"] = "git-commit";
    IonIcon["GitCompare"] = "git-compare";
    IonIcon["GitMerge"] = "git-merge";
    IonIcon["GitNetwork"] = "git-network";
    IonIcon["GitPullRequest"] = "git-pull-request";
    IonIcon["Github"] = "github";
    IonIcon["Glasses"] = "glasses";
    IonIcon["Globe"] = "globe";
    IonIcon["Google"] = "google";
    IonIcon["Googleplus"] = "googleplus";
    IonIcon["Grid"] = "grid";
    IonIcon["Hackernews"] = "hackernews";
    IonIcon["Hammer"] = "hammer";
    IonIcon["Hand"] = "hand";
    IonIcon["Happy"] = "happy";
    IonIcon["Headset"] = "headset";
    IonIcon["Heart"] = "heart";
    IonIcon["HeartOutline"] = "heart-outline";
    IonIcon["Help"] = "help";
    IonIcon["HelpBuoy"] = "help-buoy";
    IonIcon["HelpCircle"] = "help-circle";
    IonIcon["Home"] = "home";
    IonIcon["Html5"] = "html5";
    IonIcon["IceCream"] = "ice-cream";
    IonIcon["Image"] = "image";
    IonIcon["Images"] = "images";
    IonIcon["Infinite"] = "infinite";
    IonIcon["Information"] = "information";
    IonIcon["InformationCircle"] = "information-circle";
    IonIcon["Instagram"] = "instagram";
    IonIcon["Ionic"] = "ionic";
    IonIcon["Ionitron"] = "ionitron";
    IonIcon["Javascript"] = "javascript";
    IonIcon["Jet"] = "jet";
    IonIcon["Key"] = "key";
    IonIcon["Keypad"] = "keypad";
    IonIcon["Laptop"] = "laptop";
    IonIcon["Leaf"] = "leaf";
    IonIcon["Link"] = "link";
    IonIcon["Linkedin"] = "linkedin";
    IonIcon["List"] = "list";
    IonIcon["ListBox"] = "list-box";
    IonIcon["Locate"] = "locate";
    IonIcon["Lock"] = "lock";
    IonIcon["LogIn"] = "log-in";
    IonIcon["LogOut"] = "log-out";
    IonIcon["Magnet"] = "magnet";
    IonIcon["Mail"] = "mail";
    IonIcon["MailOpen"] = "mail-open";
    IonIcon["Male"] = "male";
    IonIcon["Man"] = "man";
    IonIcon["Map"] = "map";
    IonIcon["Markdown"] = "markdown";
    IonIcon["Medal"] = "medal";
    IonIcon["Medical"] = "medical";
    IonIcon["Medkit"] = "medkit";
    IonIcon["Megaphone"] = "megaphone";
    IonIcon["Menu"] = "menu";
    IonIcon["Mic"] = "mic";
    IonIcon["MicOff"] = "mic-off";
    IonIcon["Microphone"] = "microphone";
    IonIcon["Moon"] = "moon";
    IonIcon["More"] = "more";
    IonIcon["Move"] = "move";
    IonIcon["MusicalNote"] = "musical-note";
    IonIcon["MusicalNotes"] = "musical-notes";
    IonIcon["Navigate"] = "navigate";
    IonIcon["NoSmoking"] = "no-smoking";
    IonIcon["Nodejs"] = "nodejs";
    IonIcon["Notifications"] = "notifications";
    IonIcon["NotificationsOff"] = "notifications-off";
    IonIcon["NotificationsOutline"] = "notifications-outline";
    IonIcon["Nuclear"] = "nuclear";
    IonIcon["Nutrition"] = "nutrition";
    IonIcon["Octocat"] = "octocat";
    IonIcon["Open"] = "open";
    IonIcon["Options"] = "options";
    IonIcon["Outlet"] = "outlet";
    IonIcon["Paper"] = "paper";
    IonIcon["PaperPlane"] = "paper-plane";
    IonIcon["PartlySunny"] = "partly-sunny";
    IonIcon["Pause"] = "pause";
    IonIcon["Paw"] = "paw";
    IonIcon["People"] = "people";
    IonIcon["Person"] = "person";
    IonIcon["PersonAdd"] = "person-add";
    IonIcon["PhoneLandscape"] = "phone-landscape";
    IonIcon["PhonePortrait"] = "phone-portrait";
    IonIcon["Photos"] = "photos";
    IonIcon["Pie"] = "pie";
    IonIcon["Pin"] = "pin";
    IonIcon["Pint"] = "pint";
    IonIcon["Pinterest"] = "pinterest";
    IonIcon["Pizza"] = "pizza";
    IonIcon["Plane"] = "plane";
    IonIcon["Planet"] = "planet";
    IonIcon["Play"] = "play";
    IonIcon["Playstation"] = "playstation";
    IonIcon["Podium"] = "podium";
    IonIcon["Power"] = "power";
    IonIcon["Pricetag"] = "pricetag";
    IonIcon["Pricetags"] = "pricetags";
    IonIcon["Print"] = "print";
    IonIcon["Pulse"] = "pulse";
    IonIcon["Python"] = "python";
    IonIcon["QrScanner"] = "qr-scanner";
    IonIcon["Quote"] = "quote";
    IonIcon["Radio"] = "radio";
    IonIcon["RadioButtonOff"] = "radio-button-off";
    IonIcon["RadioButtonOn"] = "radio-button-on";
    IonIcon["Rainy"] = "rainy";
    IonIcon["Recording"] = "recording";
    IonIcon["Reddit"] = "reddit";
    IonIcon["Redo"] = "redo";
    IonIcon["Refresh"] = "refresh";
    IonIcon["RefreshCircle"] = "refresh-circle";
    IonIcon["Remove"] = "remove";
    IonIcon["RemoveCircle"] = "remove-circle";
    IonIcon["Reorder"] = "reorder";
    IonIcon["Repeat"] = "repeat";
    IonIcon["Resize"] = "resize";
    IonIcon["Restaurant"] = "restaurant";
    IonIcon["ReturnLeft"] = "return-left";
    IonIcon["ReturnRight"] = "return-right";
    IonIcon["ReverseCamera"] = "reverse-camera";
    IonIcon["Rewind"] = "rewind";
    IonIcon["Ribbon"] = "ribbon";
    IonIcon["Rose"] = "rose";
    IonIcon["Rss"] = "rss";
    IonIcon["Sad"] = "sad";
    IonIcon["Sass"] = "sass";
    IonIcon["School"] = "school";
    IonIcon["Search"] = "search";
    IonIcon["Send"] = "send";
    IonIcon["Settings"] = "settings";
    IonIcon["Share"] = "share";
    IonIcon["ShareAlt"] = "share-alt";
    IonIcon["Shirt"] = "shirt";
    IonIcon["Shuffle"] = "shuffle";
    IonIcon["SkipBackward"] = "skip-backward";
    IonIcon["SkipForward"] = "skip-forward";
    IonIcon["Skype"] = "skype";
    IonIcon["Snapchat"] = "snapchat";
    IonIcon["Snow"] = "snow";
    IonIcon["Speedometer"] = "speedometer";
    IonIcon["Square"] = "square";
    IonIcon["SquareOutline"] = "square-outline";
    IonIcon["Star"] = "star";
    IonIcon["StarHalf"] = "star-half";
    IonIcon["StarOutline"] = "star-outline";
    IonIcon["Stats"] = "stats";
    IonIcon["Steam"] = "steam";
    IonIcon["Stopwatch"] = "stopwatch";
    IonIcon["Subway"] = "subway";
    IonIcon["Sunny"] = "sunny";
    IonIcon["Swap"] = "swap";
    IonIcon["Switch"] = "switch";
    IonIcon["Sync"] = "sync";
    IonIcon["TabletLandscape"] = "tablet-landscape";
    IonIcon["TabletPortrait"] = "tablet-portrait";
    IonIcon["Tennisball"] = "tennisball";
    IonIcon["Text"] = "text";
    IonIcon["Thermometer"] = "thermometer";
    IonIcon["ThumbsDown"] = "thumbs-down";
    IonIcon["ThumbsUp"] = "thumbs-up";
    IonIcon["Thunderstorm"] = "thunderstorm";
    IonIcon["Time"] = "time";
    IonIcon["Timer"] = "timer";
    IonIcon["Train"] = "train";
    IonIcon["Transgender"] = "transgender";
    IonIcon["Trash"] = "trash";
    IonIcon["TrendingDown"] = "trending-down";
    IonIcon["TrendingUp"] = "trending-up";
    IonIcon["Trophy"] = "trophy";
    IonIcon["Tumblr"] = "tumblr";
    IonIcon["Tux"] = "tux";
    IonIcon["Twitch"] = "twitch";
    IonIcon["Twitter"] = "twitter";
    IonIcon["Umbrella"] = "umbrella";
    IonIcon["Undo"] = "undo";
    IonIcon["Unlock"] = "unlock";
    IonIcon["Usd"] = "usd";
    IonIcon["Videocam"] = "videocam";
    IonIcon["Vimeo"] = "vimeo";
    IonIcon["VolumeDown"] = "volume-down";
    IonIcon["VolumeMute"] = "volume-mute";
    IonIcon["VolumeOff"] = "volume-off";
    IonIcon["VolumeUp"] = "volume-up";
    IonIcon["Walk"] = "walk";
    IonIcon["Warning"] = "warning";
    IonIcon["Watch"] = "watch";
    IonIcon["Water"] = "water";
    IonIcon["Whatsapp"] = "whatsapp";
    IonIcon["Wifi"] = "wifi";
    IonIcon["Windows"] = "windows";
    IonIcon["Wine"] = "wine";
    IonIcon["Woman"] = "woman";
    IonIcon["Wordpress"] = "wordpress";
    IonIcon["Xbox"] = "xbox";
    IonIcon["Yahoo"] = "yahoo";
    IonIcon["Yen"] = "yen";
    IonIcon["Youtube"] = "youtube";
})(IonIcon || (IonIcon = {}));
//# sourceMappingURL=ion-icon.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
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



var EnvService = (function () {
    function EnvService(ionPlatform, device) {
        this.ionPlatform = ionPlatform;
        this.device = device;
        this.backend = 'https://wi-2017-t5.eu-gb.mybluemix.net';
        this.native = !(document.URL.startsWith('https://') ||
            document.URL.startsWith('http://'));
    }
    Object.defineProperty(EnvService.prototype, "deviceId", {
        get: function () {
            return this._deviceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnvService.prototype, "deviceVersion", {
        get: function () {
            return this._deviceVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnvService.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnvService.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnvService.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        enumerable: true,
        configurable: true
    });
    EnvService.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ionPlatform.ready()];
                    case 1:
                        _a.sent();
                        this._deviceId = this.device.uuid;
                        this._deviceVersion = this.device.version;
                        this._platform = this.device.platform;
                        this._model = this.device.model;
                        this._virtual = this.device.isVirtual;
                        return [2 /*return*/];
                }
            });
        });
    };
    EnvService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */]])
    ], EnvService);
    return EnvService;
}());

//# sourceMappingURL=env.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngfk_ts_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngfk_ts_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ngfk_ts_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_debounceTime__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state__ = __webpack_require__(328);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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







var STATE_KEY = 'wi-2017-t5-state';
var StoreService = (function (_super) {
    __extends(StoreService, _super);
    function StoreService() {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_6__state__["a" /* reducer */], window['__REDUX_DEVTOOLS_EXTENSION__'] &&
            window['__REDUX_DEVTOOLS_EXTENSION__']()) || this;
        // Forward redux state updates to an observable stream
        var stateSubj = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](_this.getState());
        _this.state$ = stateSubj.asObservable();
        _this.subscribe(function () { return stateSubj.next(_this.getState()); });
        return _this;
    }
    StoreService.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var storedState;
            return __generator(this, function (_a) {
                // Save the state whenever a change happens
                this.state$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_debounceTime__["debounceTime"])(500)).subscribe(function () { return _this.store(); });
                storedState = this.load();
                this.initial = storedState || Object(__WEBPACK_IMPORTED_MODULE_6__state__["a" /* reducer */])();
                this.reset(this.initial);
                return [2 /*return*/];
            });
        });
    };
    StoreService.prototype.select = function (selector) {
        return this.state$.pipe(
        // Map using the provided selector
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["map"])(selector), 
        // Only emit updates when the selected property change
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged__["distinctUntilChanged"])());
    };
    StoreService.prototype.store = function () {
        var state = JSON.stringify(this.getState());
        window.localStorage.setItem(STATE_KEY, state);
    };
    StoreService.prototype.load = function () {
        var storedState = window.localStorage.getItem(STATE_KEY);
        if (!storedState)
            return undefined;
        return JSON.parse(storedState);
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}(__WEBPACK_IMPORTED_MODULE_1__ngfk_ts_redux__["Store"]));

//# sourceMappingURL=store.service.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map