webpackJsonp([4],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_page__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__chat_page__["a" /* ChatPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__chat_page__["a" /* ChatPage */]), __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.page.module.js.map

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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_chat__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_conversation_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_store_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatPage = (function () {
    function ChatPage(cd, renderer, platform, navParams, keyboard, store, conversation) {
        var _this = this;
        this.cd = cd;
        this.renderer = renderer;
        this.platform = platform;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.store = store;
        this.conversation = conversation;
        this.subscriptions = [];
        this.onKeyboardShow = function (event) {
            if (_this.platform.is('ios')) {
                var keyboardHeight = event.keyboardHeight;
                var header = _this.headerField.getNativeElement();
                var content = _this.contentField.getNativeElement();
                _this.renderer.setElementStyle(header, 'top', keyboardHeight + 'px');
                _this.renderer.setElementStyle(content, 'marginTop', keyboardHeight);
                _this.cd.detectChanges();
            }
            // For some reason a timeout is required to completely scroll to the
            // bottom of the chat.
            setTimeout(function () { return _this.contentField.scrollToBottom(100); }, 200);
        };
        this.onKeyboardHide = function () {
            if (_this.platform.is('ios')) {
                var content = _this.contentField.getNativeElement();
                var header = _this.headerField.getNativeElement();
                _this.renderer.setElementStyle(content, 'marginTop', '0px');
                _this.renderer.setElementStyle(header, 'top', '0');
                _this.cd.detectChanges();
            }
        };
    }
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.chat = this.store.select(function (state) { return state.chat; });
        this.subscriptions = [
            this.keyboard.onKeyboardShow().subscribe(this.onKeyboardShow),
            this.keyboard.onKeyboardHide().subscribe(this.onKeyboardHide)
        ];
        if (this.store.getState().chat.length === 0) {
            this.conversation.message().subscribe(function (entry) {
                _this.store.dispatch('CHAT_APPEND', entry);
                _this.cd.detectChanges();
                _this.contentField.scrollToBottom(400);
            });
        }
    };
    ChatPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // For some reason a timeout is required to completely scroll to the
        // bottom of the chat.
        setTimeout(function () { return _this.contentField.scrollToBottom(0); }, 0);
    };
    ChatPage.prototype.sendAttachment = function () { };
    ChatPage.prototype.sendAudio = function () { };
    ChatPage.prototype.sendText = function (text) {
        var _this = this;
        text = text.trim();
        if (text) {
            var newEntry = {
                timestamp: new Date(),
                type: __WEBPACK_IMPORTED_MODULE_3__models_chat__["a" /* ChatType */].Text,
                text: text
            };
            this.store.dispatch('CHAT_APPEND', newEntry);
            this.conversation.message(newEntry).subscribe(function (response) {
                _this.store.dispatch('CHAT_APPEND', response);
                _this.cd.detectChanges();
                _this.contentField.scrollToBottom(400);
            });
        }
        this.inputField.value = '';
        this.inputField.setFocus();
        this.cd.detectChanges();
        this.contentField.scrollToBottom(400);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Header */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Header */])
    ], ChatPage.prototype, "headerField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */])
    ], ChatPage.prototype, "contentField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* TextInput */])
    ], ChatPage.prototype, "inputField", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/travis/build/ngfk/wi-2017-t5-app/src/pages/chat/chat.html"*/'<ion-header>\n    <ion-navbar [color]="\'primary\' | platform:\'md\'">\n        <button ion-button menuToggle [color]="\'primary\' | platform:\'ios\'">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Watson</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines no-padding class="chat">\n        <ion-item\n            *ngFor="let entry of chat | async"\n            class="chat-entry chat-entry--{{entry.type}}"\n            [class.chat-entry--alt]="!entry.from"\n        >\n            <div *ngIf="entry.type === \'text\'">\n                <div *ngIf="entry.from" class="chat-entry__from">{{entry.from}}</div>\n                <div class="chat-entry__content">{{entry.text}}</div>\n                <div class="chat-entry__timestamp">{{entry.timestamp | date:\'hh:mm a\'}}</div>\n            </div>\n            <div *ngIf="entry.type === \'image\'">\n                <div *ngIf="entry.from" class="chat-entry__from">{{entry.from}}</div>\n                <div class="chat-entry__content">\n                    <img [src]="entry.image" [alt]="entry.title">\n                </div>\n                <div class="chat-entry__timestamp">{{entry.timestamp | date:\'hh:mm a\'}}</div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-buttons left>\n            <button\n                ion-button\n                icon-only\n                color="primary"\n                (click)="sendAttachment()"\n            >\n                <ion-icon name="attach"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-textarea\n            #input\n            placeholder="Write a message..."\n            spellcheck="true"\n            aria-autocomplete="on"\n            autocorrect="on"\n        >\n        </ion-textarea>\n        <ion-buttons right>\n            <button\n                ion-button\n                icon-only\n                color="primary"\n                (click)="sendAudio()"\n                *ngIf="!input.value"\n            >\n                <ion-icon name="mic"></ion-icon>\n            </button>\n            <button\n                ion-button\n                icon-only\n                color="primary"\n                (click)="sendText(input.value)"\n                *ngIf="!!input.value"\n            >\n                <ion-icon name="send"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/travis/build/ngfk/wi-2017-t5-app/src/pages/chat/chat.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__services_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_4__services_conversation_service__["a" /* ConversationService */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.page.js.map

/***/ })

});
//# sourceMappingURL=4.js.map