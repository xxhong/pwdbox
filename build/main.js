webpackJsonp([1],{

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addaccount/addaccount.module": [
		536,
		0
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nebulas__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nebulas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nebulas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nebpay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_info_add_info__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toast, menu, pop, modal) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.menu = menu;
        this.pop = pop;
        this.modal = modal;
        this.toAddr = 'n1yAgxfX4uFbwyZKpMckdxccmNHMNMdiX1X';
        this.title = "密码保险箱";
        this.inputItems = [
            { title: "数字货币", one: "标题", two: "钱包地址", three: "钱包密码", four: "备注", type: 1, icon: "assets/icon/icon_1.png" },
            { title: "银行卡号", one: "标题", two: "银行卡号", three: "银行卡密码", four: "备注", type: 2, icon: "assets/icon/icon_2.png" },
            { title: "电子邮件", one: "标题", two: "邮箱帐号", three: "邮箱密码", four: "备注", type: 3, icon: "assets/icon/icon_3.png" },
            { title: "QQ帐号", one: "标题", two: "QQ帐号", three: "QQ密码", four: "备注", type: 4, icon: "assets/icon/icon_4.png" },
            { title: "微信帐号", one: "标题", two: "微信帐号", three: "微信密码", four: "备注", type: 5, icon: "assets/icon/icon_5.png" },
            { title: "微博帐号", one: "标题", two: "微博帐号", three: "微博密码", four: "备注", type: 6, icon: "assets/icon/icon_6.png" },
            { title: "电脑/Pad", one: "标题", two: "用户名", three: "密码", four: "备注", type: 7, icon: "assets/icon/icon_7.png" },
            { title: "会员卡", one: "标题", two: "卡号", three: "密码", four: "备注", type: 8, icon: "assets/icon/icon_8.png" },
            { title: "备忘", one: "标题", two: "", three: "", four: "备注", type: 9, icon: "assets/icon/icon_9.png" }
        ];
        this.menuItems = [
            { name: "数字货币", type: 1, icon: "assets/icon/icon_1.png" },
            { name: "银行卡号", type: 2, icon: "assets/icon/icon_2.png" },
            { name: "电子邮件", type: 3, icon: "assets/icon/icon_3.png" },
            { name: "QQ帐号", type: 4, icon: "assets/icon/icon_4.png" },
            { name: "微信帐号", type: 5, icon: "assets/icon/icon_5.png" },
            { name: "微博帐号", type: 6, icon: "assets/icon/icon_6.png" },
            { name: "电脑/Pad密码", type: 7, icon: "assets/icon/icon_7.png" },
            { name: "会员卡号", type: 8, icon: "assets/icon/icon_8.png" },
            { name: "备忘", type: 9, icon: "assets/icon/icon_9.png" },
        ];
        this.itemType = -1;
        this.getWallectInfo();
    }
    HomePage.prototype.onItemClick = function (item) {
        this.itemType = item.type;
        this.title = item.name;
        this.menu.toggle();
    };
    HomePage.prototype.goToAddAccountPage = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_4__components_add_info_add_info__["a" /* AddInfoComponent */], { title: "添加" + this.title, type: this.itemType }).present();
        // this.navCtrl.push(AddaccountPage)
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        var nebulas = __webpack_require__(252), Account = nebulas.Account, neb = new __WEBPACK_IMPORTED_MODULE_2_nebulas__["Neb"]();
        neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));
        var value = "0";
        var nonce = "0";
        var gas_price = "1000000";
        var gas_limit = "2000000";
        var callFunction = "get";
        var callArgs = "";
        var contract = {
            "function": callFunction,
            "args": callArgs
        };
        neb.api.call(this.account, this.toAddr, value, nonce, gas_price, gas_limit, contract)
            .then(function (resp) {
            _this.cbPush(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.cbPush = function (resp) {
        console.log(resp);
        this.items = JSON.parse(resp.result);
    };
    HomePage.prototype.getWallectInfo = function () {
        var _this = this;
        window.postMessage({
            "target": "contentscript",
            "data": {},
            "method": "getAccount",
        }, "*");
        window.addEventListener('message', function (e) {
            if (e.data && e.data.data) {
                if (e.data.data.account) {
                    _this.account = e.data.data.account;
                    _this.getData();
                }
            }
        });
    };
    HomePage.prototype.editItem = function (item) {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_4__components_add_info_add_info__["a" /* AddInfoComponent */], { title: "修改" + item.type_name, type: item.type, mode: 1, one: item.one, two: item.two, three: item.three, four: item.four, uid: item.uid }).present(); //mode 0添加 1修改
    };
    HomePage.prototype.deleteItem = function (item) {
        var ebPay = new __WEBPACK_IMPORTED_MODULE_3_nebpay___default.a();
        var value = "0";
        var callFunction = "delete";
        var arr = [];
        arr.push(item.uid);
        var serialNumber = nebPay.call(this.toAddr, value, callFunction, JSON.stringify(arr), {
            listener: this.callback
        });
        this.removeItem(item);
    };
    HomePage.prototype.callback = function (resp) {
        console.log(resp);
    };
    HomePage.prototype.removeItem = function (item) {
        for (var i = 0; i < this.items.length; i++) {
            if (item.uid == this.items[i].uid) {
                this.items.splice(i, 1);
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/pages/home/home.html"*/'<ion-menu [content]="mycontent"  [enabled]="true"  [type]="push" >\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title>密码保险箱</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor="let item of menuItems"  (click)="onItemClick(item)">\n          <img  item-start  src="{{item.icon}}" style="width: 30px;height: 30px">\n      <button style="font-size: 16px">{{item.name}}\n        </button>\n      </ion-item>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"> </ion-nav>\n\n<ion-header>\n\n  <ion-toolbar >\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center="">\n     {{title}}\n    </ion-title>\n    <ion-buttons end *ngIf="itemType !=-1">\n      <button ion-button (click)="goToAddAccountPage()">\n        <ion-icon name="add" style="font-size: 30px" ></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n<ion-content >\n\n  <ion-list  *ngFor="let item of items" style="margin-top: 10px" >\n    <ion-item-sliding *ngIf="item.type == itemType||itemType==-1"  >\n      <ion-item  style="margin-right: 30px">\n        <img item-start src="{{inputItems[item.type-1].icon}}" style="margin-right: 25px;margin-left: 30px">\n       <p icon-start style="font-size: 20px"> {{inputItems[item.type-1].one}}:&nbsp;&nbsp;{{item.one}}</p>\n        <p icon-start style="font-size: 16px">{{inputItems[item.type-1].two }}:&nbsp;&nbsp;{{item.two}}\n          &nbsp;&nbsp;{{inputItems[item.type-1].three }}:&nbsp;&nbsp;{{item.three}}\n          &nbsp;&nbsp;{{inputItems[item.type-1].four }}:&nbsp;&nbsp;{{item.four}}\n        </p>\n      </ion-item>\n      <ion-item-options side="right">\n        <!--<button ion-button color="primary" (click)="editItem(item)">-->\n          <!--<ion-icon name="text"></ion-icon>-->\n          <!--编辑-->\n        <!--</button>-->\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          <ion-icon name="ios-trash" style="font-size: 25px"></ion-icon>\n          删除\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-footer no-border >\n    <button ion-button color="light" block *ngIf="account!=null" (click)="getData()">当前帐号:{{account}},&nbsp;点击同步数据</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nebpay__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nebpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nebpay__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddInfoComponent = /** @class */ (function () {
    function AddInfoComponent(params, ctrl, toast, loadingCtrl, modal) {
        this.ctrl = ctrl;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.toAddr = 'n1yAgxfX4uFbwyZKpMckdxccmNHMNMdiX1X';
        this.mode = 0;
        this.inputItems = [
            { title: "数字货币", one: "标题", two: "钱包地址", three: "钱包密码", four: "备注", type: 1 },
            { title: "银行卡号", one: "标题", two: "银行卡号", three: "银行卡密码", four: "备注", type: 2 },
            { title: "电子邮件", one: "标题", two: "邮箱帐号", three: "邮箱密码", four: "备注", type: 3 },
            { title: "QQ帐号", one: "标题", two: "QQ帐号", three: "QQ密码", four: "备注", type: 4 },
            { title: "微信帐号", one: "标题", two: "微信帐号", three: "微信密码", four: "备注", type: 5 },
            { title: "微博帐号", one: "标题", two: "微博帐号", three: "微博密码", four: "备注", type: 6 },
            { title: "电脑/Pad", one: "标题", two: "用户名", three: "密码", four: "备注", type: 7 },
            { title: "会员卡", one: "标题", two: "卡号", three: "密码", four: "备注", type: 8 },
            { title: "备忘", one: "标题", two: "", three: "", four: "备注", type: 9 },
        ];
        this.title = params.get('title');
        this.type = params.get("type") - 1;
        this.mode = params.get("mode");
        this.item = this.inputItems[this.type];
        if (this.mode == 1) {
            this.one = params.get("one");
            this.two = params.get("two");
            this.three = params.get("three");
            this.four = params.get("four");
            this.uid = params.get("uid");
        }
    }
    AddInfoComponent.prototype.add = function () {
        if (this.mode == 1) {
            if (this.type != 8) {
                if (this.one == null) {
                    this.showToast(this.item.one + "不能为空");
                    return;
                }
                if (this.two == null) {
                    this.showToast(this.item.two + "不能为空");
                    return;
                }
            }
            else {
                if (this.one == null) {
                    this.showToast(this.item.one + "不能为空");
                    return;
                }
                if (this.four == null) {
                    this.showToast(this.item.four + "不能为空");
                    return;
                }
            }
            this.updateToNas();
            this.ctrl.pop();
            // this.presentLoadingCustom();
        }
        else {
            if (this.type != 8) {
                if (this.one == null) {
                    this.showToast(this.item.one + "不能为空");
                    return;
                }
                if (this.two == null) {
                    this.showToast(this.item.two + "不能为空");
                    return;
                }
            }
            else {
                if (this.one == null) {
                    this.showToast(this.item.one + "不能为空");
                    return;
                }
                if (this.four == null) {
                    this.showToast(this.item.four + "不能为空");
                    return;
                }
            }
            this.saveToNas();
            this.ctrl.pop();
        }
    };
    AddInfoComponent.prototype.showToast = function (msg) {
        this.toast.create({
            message: msg,
            duration: 3000,
            showCloseButton: true,
            position: "middle",
            closeButtonText: "关闭"
        }).present();
    };
    AddInfoComponent.prototype.updateToNas = function () {
        var nebPay = new __WEBPACK_IMPORTED_MODULE_2_nebpay___default.a();
        var value = "0";
        var callFunction = "set";
        var arr = [];
        arr.push(this.one);
        arr.push(this.two);
        arr.push(this.three);
        arr.push(this.four);
        arr.push(this.uid);
        var serialNumber = nebPay.call(this.toAddr, value, callFunction, JSON.stringify(arr), {
            listener: this.callback //设置listener, 处理交易返回信息
        });
    };
    AddInfoComponent.prototype.saveToNas = function () {
        var nebPay = new __WEBPACK_IMPORTED_MODULE_2_nebpay___default.a();
        var value = "0";
        var callFunction = "set";
        var arr = [];
        arr.push(this.one);
        arr.push(this.two);
        arr.push(this.three);
        arr.push(this.four);
        arr.push(this.type + 1);
        arr.push(new Date().getTime());
        arr.push(this.item.title);
        var serialNumber = nebPay.call(this.toAddr, value, callFunction, JSON.stringify(arr), {
            listener: this.callback //设置listener, 处理交易返回信息
        });
    };
    AddInfoComponent.prototype.callback = function (resp) {
        console.log(resp);
    };
    AddInfoComponent.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>",
            duration: 5000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    AddInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-info',template:/*ion-inline-start:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/components/add-info/add-info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>{{item.one}}</ion-label>\n      <ion-input type="text" [(ngModel)]="one" ></ion-input>\n    </ion-item>\n\n    <ion-item  *ngIf="item.two">\n      <ion-label floating>{{item.two}}</ion-label>\n      <ion-input type="text" [(ngModel)]="two"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="item.three">\n      <ion-label floating>{{item.three}}</ion-label>\n      <ion-input type="text" [(ngModel)]="three"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>{{item.four}}</ion-label>\n      <ion-textarea type="text" [(ngModel)]="four" ></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-footer padding no-border="">\n    <button ion-button block (click)="add()">保存</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/components/add-info/add-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AddInfoComponent);
    return AddInfoComponent;
}());

//# sourceMappingURL=add-info.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nebpay__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nebpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nebpay__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddaccountPage = /** @class */ (function () {
    function AddaccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddaccountPage');
    };
    AddaccountPage.prototype.saveToNas = function () {
        var toAddr = 'n1jAcRGAgp2TSQGejUh3EhT9Kr6xXRWvsbf';
        var nebPay = new __WEBPACK_IMPORTED_MODULE_2_nebpay___default.a();
        var value = "0";
        var callFunction = "set";
        var arr = [];
        arr.push("绿牛");
        arr.push("lvniu.com");
        arr.push("ln");
        arr.push("123455");
        var serialNumber = nebPay.call(toAddr, value, callFunction, JSON.stringify(arr), {});
    };
    AddaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaccount',template:/*ion-inline-start:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/pages/addaccount/addaccount.html"*/'<!--\n  Generated template for the AddaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>添加帐号</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n    <ion-item>  <button ion-button  (click)="saveToNas()">保存</button>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/pages/addaccount/addaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddaccountPage);
    return AddaccountPage;
}());

//# sourceMappingURL=addaccount.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(334);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addaccount_addaccount__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_info_add_info__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_addaccount_addaccount__["a" /* AddaccountPage */], __WEBPACK_IMPORTED_MODULE_8__components_add_info_add_info__["a" /* AddInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addaccount/addaccount.module#AddaccountPageModule', name: 'AddaccountPage', segment: 'addaccount', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_addaccount_addaccount__["a" /* AddaccountPage */], __WEBPACK_IMPORTED_MODULE_8__components_add_info_add_info__["a" /* AddInfoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/xxhong/Documents/xxhong/workspace/ionic/PwdBoxNormal/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[311]);
//# sourceMappingURL=main.js.map