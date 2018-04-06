webpackJsonp([35],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(81);
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
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingPage = (function () {
    function RatingPage(navCtrl, navParams, http, common, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = {
            ratingg: []
        };
        this.dataform = [];
        this.trip = this.navParams.get('tripData');
        console.log(this.trip);
        this.trip_id = this.trip.id;
        console.log(this.trip_id);
        this.id = localStorage.getItem('ID');
        this.viewItinerary();
    }
    RatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingPage');
    };
    RatingPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], {
            choose: 2
        });
    };
    RatingPage.prototype.rate = function (j, eid, ratting) {
        console.log(j);
        this.dataform.push({
            user_id: this.id,
            trip_id: this.trip_id,
            event_id: eid,
            rating: ratting
        });
        console.log(this.dataform);
    };
    RatingPage.prototype.skipp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    RatingPage.prototype.subRate = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'galleries/additineraryy', _this.dataform, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                }
                else {
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    RatingPage.prototype.viewItinerary = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/eventlist', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.eventss = data.data;
                    console.log(_this.eventss);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "No events added",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rating',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/rating/rating.html"*/`<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Rating</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Rating</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content >\n  <div class="card-background-page" *ngIf="trip">\n      <ion-card>\n          <img *ngIf="!trip.image" src="assets/imgs/a.png"/>\n          <img *ngIf="trip.image" src="{{trip.image}}">\n          <div class="cardtitle">\n            <div class="card-title">{{trip.end_location}}</div>\n            <div class="card-subtitle">{{trip.trip_startdate | date: \'MMM d\'}} - {{trip.trip_enddate | date: \'MMM d, yyyy\'}}</div>\n          </div> \n          <div class="overlay"></div>\n      </ion-card>\n      <div class="descrp">\n        <h3>ITINERARY</h3>\n        <p>{{trip.trip_startdate | date: \'EEEE MMM d\'}}</p>\n        <h4>Location: <span>{{trip.end_location}}</span></h4>\n      </div>\n\n<!--      <ion-card class="waterfall">\n          \n                <ion-item (click)="hotel()">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <h2>My Neighbor Totoro</h2>\n                  <p>Hayao Miyazaki • 1988</p>\n                  <ul>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li> <ion-icon name="star-outline"></ion-icon></li>\n                    </ul>\n                </ion-item>\n          \n          \n                </ion-card>-->\n      <div *ngFor="let ett of eventss">\n          \n          <p>{{ett[0].Event.eventdate | date: \'EEEE MMM d, yyyy\'}}</p>\n        <h4>Location: <span>{{ett[0].Event.location}}</span></h4>\n        \n      <ion-card class="waterfall" *ngFor="let et of ett; let j=index">\n                   \n          <ion-item>\n            <ion-avatar item-start>\n               <img src="assets/imgs/a.png">\n            </ion-avatar>\n            \n            <h2>{{et.Event.title}}</h2>\n           \n            <p>{{trip.end_location}}</p>\n            <ul>                \n                <li>\n                <rating name="ratingg{{j}}" \n                  [(ngModel)]="data.ratingg[j]" \n                  #ht.starCategory="ngModel"              \n                  max="5" \n                  emptyStarIconName="star-outline" \n                  halfStarIconName="star-half" \n                  starIconName="star" \n                  nullable="false"\n                  (click)="rate(j,et.Event.id,data.ratingg[j])"\n                  >                  \n                </rating>               \n                </li>\n            </ul>            \n            \n          </ion-item>\n\n          </ion-card>\n  </div>\n  </div>\n    <button *ngIf="eventss" color="theme" ion-button class="search" (click)="skipp()">Skip</button>\n    <button *ngIf="eventss" color="theme" ion-button class="search" (click)="subRate()">Submit</button>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/rating/rating.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_gallery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = (function () {
    function AboutPage(navCtrl, common, http, toastCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.data = {
            msg: ''
        };
        this.msgs = [];
        this.fav = 0;
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.trip_id = localStorage.getItem('TripID');
        this.firstfullChat();
        this.showChat();
    }
    AboutPage_1 = AboutPage;
    AboutPage.prototype.showChat = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.fullChat();
        }, 5000);
    };
    AboutPage.prototype.chat = function () {
        this.navCtrl.push(AboutPage_1);
    };
    //  payments(){
    //    this.navCtrl.push(ContactPage);
    //    clearInterval(this.interval);
    //  }
    AboutPage.prototype.itinerary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__["a" /* AddtripPage */]);
        clearInterval(this.interval);
    };
    AboutPage.prototype.gallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__gallery_gallery__["a" /* GalleryPage */]);
        clearInterval(this.interval);
    };
    AboutPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    AboutPage.prototype.favorite = function (msgid, userid) {
        var _this = this;
        console.log(msgid);
        console.log(userid);
        var options = this.common.options;
        var data_form = {
            user_id: userid,
            msg_id: msgid
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'invites/addtofavourite', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                /*let toast = this.toastCtrl.create({
                message: data.msg,
                duration: 3000,
                position: 'middle'
              });
              toast.present();*/
                _this.fullChat();
            }
            else {
                /*let toast = this.toastCtrl.create({
                 message: data.msg,
                 duration: 3000,
                 position: 'middle'
               });
               toast.present();*/
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    AboutPage.prototype.sendMsg = function (chatForm) {
        var _this = this;
        console.log(chatForm.value.msg);
        var options = this.common.options;
        var data_form = {
            sender_id: this.id,
            trip_id: this.trip_id,
            message: chatForm.value.msg,
            type: 'text'
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'invites/groupchat', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.data.msg = '';
                _this.fullChat();
            }
            else {
            }
        }, function (error) {
        });
    };
    AboutPage.prototype.fullChat = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            trip_id: this.trip_id,
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'invites/chatview', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.msgs = data.data;
                console.log(_this.msgs);
                //        this.bottom=setInterval(()=>{
                //                        this.content.scrollToBottom(300);
                //                    },1000);
            }
            else {
            }
        }, function (error) {
        });
    };
    AboutPage.prototype.firstfullChat = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            trip_id: this.trip_id,
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'invites/chatview', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.msgs = data.data;
                console.log(_this.msgs);
                _this.bottom = setInterval(function () {
                    _this.content.scrollToBottom(300);
                }, 1000);
            }
            else {
            }
        }, function (error) {
        });
    };
    AboutPage.prototype.sendImg = function () {
        var _this = this;
        var options = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
        };
        this.camera.getPicture(options).then(function (imageData) {
            //this.dpimage = 'data:image/jpeg;base64,' + imageData;
            //this.dpimage = imageData;
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var data_img = {
                sender_id: _this.id,
                trip_id: _this.trip_id,
                message: imageData,
                type: 'image'
            };
            var serialized_img = _this.common.serializeObj(data_img);
            console.log(serialized_img);
            var options = _this.common.options;
            var url = _this.common.base_url + 'invites/groupchat';
            Loading.present().then(function () {
                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    Loading.dismiss();
                    if (data.status == 0) {
                        _this.fullChat();
                        var toast = _this.toastCtrl.create({
                            message: "Image sent",
                            duration: 3000
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000
                        });
                        toast.present();
                    }
                });
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Server not Working,Please Check your Internet Connection and try again!",
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], AboutPage.prototype, "content", void 0);
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/about/about.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Chat</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n<ion-content>\n  <div class="friday">\n<!--      <h4>Friday</h4>-->\n  </div>\n\n  <div class="main green" *ngFor="let msg of msgs">\n      <span>{{msg.User.name}}</span>      \n      \n      <div *ngIf="msg.Groupchat.type == \'text\'">          \n          <p *ngIf="msg.User.id == id" class="user" no-margin>{{msg.Groupchat.message}}</p>\n          <p *ngIf="msg.User.id != id" no-margin>{{msg.Groupchat.message}}</p>\n      </div>\n      <div *ngIf="msg.Groupchat.type == \'image\'">\n          <p *ngIf="msg.User.id == id" class="user" no-margin><img src="{{msg.Groupchat.message}}"/></p>\n          <p *ngIf="msg.User.id != id" no-margin><img src="{{msg.Groupchat.message}}"/></p>\n      </div>\n      \n      <div class="outer">\n          <div class="pic" *ngIf="!msg.User.image">\n              <img src="assets/imgs/user.png" />\n          </div>\n          <div class="pic" *ngIf="msg.User.image">\n              <img src="{{msg.User.image}}" />\n          </div>  \n      </div>\n      \n      <ion-icon name="heart" *ngIf="msg.Groupchat.status == 0" style="color:#ccc;" (click)="favorite(msg.Groupchat.id,msg.Groupchat.sender_id)"></ion-icon>\n      \n      <ion-icon name="heart" *ngIf="msg.Groupchat.status == 1" style="color:#f00;" (click)="favorite(msg.Groupchat.id,msg.Groupchat.sender_id)"></ion-icon>\n      \n    </div>\n\n  <!--<div class="main">\n    <span>Meliane</span>\n    <p no-margin>Yes,me too!Ready for a vacay</p>\n    <div class="outer"><div class="pic"><img src="assets/imgs/a.png" /></div></div>\n    <ion-icon name="heart-outline"></ion-icon>\n  </div>-->\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="demo" style="padding-top:  0;padding-bottom: 0;">\n<form #chatForm="ngForm">  \n    <ion-buttons start>\n        <button (click)="sendImg()">\n            <ion-icon ios="ios-add" md="md-add"></ion-icon>\n        </button>\n    </ion-buttons>\n      <ion-input type="text" name="msg" [(ngModel)]="data.msg" id="msg" #msg="ngModel" placeholder="Type message" required></ion-input>\n      <ion-buttons end>\n          <button ion-button small no-margin color="theme" (click)="sendMsg(chatForm)" [disabled]="!chatForm.form.valid">Send</button>\n      </ion-buttons>\n       </form>\n    </ion-toolbar>\n    <ion-toolbar style="padding-top:  0;padding-bottom: 0;">\n  <a href="#" (click)="itinerary()"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()" class="active"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <!--<a href="#" (click)="payments()"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>-->\n  <a href="#" (click)="gallery()"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>\n</ion-toolbar>  \n</ion-footer>\n<!--<ion-footer>\n      \n</ion-footer>-->\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/about/about.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerytwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editphoto_editphoto__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_streaming_media__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GallerytwoPage = (function () {
    function GallerytwoPage(navCtrl, navParams, common, http, camera, actionSheetCtrl, toastCtrl, loadingCtrl, viewCtrl, imagePicker, modalCtrl, transfer, streamingMedia, mediaCapture) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.streamingMedia = streamingMedia;
        this.mediaCapture = mediaCapture;
        this.pet = 'library';
        if (this.pet == 'library') {
            this.viewallImages();
        }
        else if (this.pet == 'camera') {
            this.viewallImages();
        }
        else if (this.pet == 'video') {
            this.videoListing();
        }
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');
        this.viewallImages();
    }
    GallerytwoPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        if (this.pet == 'library') {
            this.viewallImages();
        }
        else if (this.pet == 'camera') {
            this.viewallImages();
        }
        else if (this.pet == 'video') {
            this.videoListing();
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    GallerytwoPage.prototype.videoCapture = function () {
        var _this = this;
        var options = {
            limit: 1
        };
        this.mediaCapture.captureVideo(options)
            .then(function (data) {
            //alert(JSON.stringify(data));
            //alert(JSON.stringify(data[0].fullPath));
            _this.vid = data[0].fullPath;
            var fileTransfer = _this.transfer.create();
            var currentName = _this.vid.substring(_this.vid.lastIndexOf('/') + 1);
            var options1 = {
                fileKey: 'file',
                fileName: currentName,
                headers: {},
                params: {
                    user_id: _this.id,
                    trip_id: _this.trip_id
                },
                chunkedMode: false,
                mimeType: 'video/quicktime'
            };
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                fileTransfer.upload(_this.vid, _this.common.base_url + 'galleries/videoupload', options1)
                    .then(function (data) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Video Uploaded successfully',
                        duration: 3000,
                        cssClass: 'toastCss',
                        position: 'middle',
                    });
                    toast.present();
                    _this.videoListing();
                }).catch(function (error) {
                    Loading.dismiss();
                    //alert(JSON.stringify(error));
                });
            });
        }, function (err) {
            _this.videoListing();
        });
    };
    GallerytwoPage.prototype.videoPlayy = function (url) {
        console.log(url);
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape'
        };
        //https://path/to/video/stream
        this.streamingMedia.playVideo(url, options);
    };
    GallerytwoPage.prototype.selectVideo = function () {
        //let video = this.myVideo.nativeElement;
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            mediaType: this.camera.MediaType.VIDEO,
        };
        this.camera.getPicture(options).then(function (data) {
            _this.vid = data;
            var fileTransfer = _this.transfer.create();
            var currentName = _this.vid.substring(_this.vid.lastIndexOf('/') + 1);
            var options1 = {
                fileKey: 'file',
                fileName: currentName,
                headers: {},
                params: {
                    user_id: _this.id,
                    trip_id: _this.trip_id
                },
                chunkedMode: false,
                mimeType: 'video/quicktime'
            };
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                fileTransfer.upload(_this.vid, _this.common.base_url + 'galleries/videoupload', options1)
                    .then(function (data) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Video Uploaded successfully',
                        duration: 3000,
                        cssClass: 'toastCss',
                        position: 'middle',
                    });
                    toast.present();
                    _this.videoListing();
                }).catch(function (error) {
                    Loading.dismiss();
                    //alert(JSON.stringify(error));
                });
            });
        });
    };
    GallerytwoPage.prototype.videoListing = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'galleries/videolisting', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                //alert(JSON.stringify(data));
                console.log(data);
                if (data.status == 0) {
                    _this.videos = data.data;
                    //alert(JSON.stringify(this.videos));
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    GallerytwoPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gallery_gallery__["a" /* GalleryPage */]);
    };
    GallerytwoPage.prototype.opensingleImage = function (imgdata) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__editphoto_editphoto__["a" /* EditphotoPage */], {
            send: imgdata
        });
    };
    GallerytwoPage.prototype.viewallImages = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'galleries/viewimage', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.images = data.data;
                    console.log(_this.images);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    GallerytwoPage.prototype.openImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 5,
            outputType: 1,
            quality: 10
        };
        this.photos = [];
        this.imagePicker.getPictures(options)
            .then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.photos.push(results[i]);
            }
            console.log(_this.photos);
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var options = _this.common.options;
            var data_form = {
                user_id: _this.id,
                trip_id: _this.trip_id,
                img: _this.photos
            };
            //alert(JSON.stringify(data_form));
            console.log(data_form);
            var Serialized = _this.common.serializeObj(data_form);
            console.log(Serialized);
            Loading.present().then(function () {
                _this.http.post(_this.common.base_url + 'galleries/uploadgallery', Serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loading.dismiss();
                    console.log(data);
                    if (data.status == 0) {
                        _this.viewallImages();
                        //this.images = data.image;
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (error) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your Network Connection",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                });
            });
        }, function (err) { console.log(err); });
    };
    GallerytwoPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.dpimage = 'data:image/jpeg;base64,' + imageData;
            //this.dpimage = imageData;
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var data_img = {
                user_id: _this.id,
                trip_id: _this.trip_id,
                img: imageData
            };
            var serialized_img = _this.common.serializeObj(data_img);
            console.log(serialized_img);
            var options = _this.common.options;
            var url = _this.common.base_url + 'galleries/uploadgallery';
            Loading.present().then(function () {
                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    Loading.dismiss();
                    console.log(data);
                    if (data.status == 0) {
                        _this.viewallImages();
                        //this.images = data.image;
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                });
            }, function (err) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Server not Working,Please Check your Internet Connection and try again!",
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myVideo'),
        __metadata("design:type", Object)
    ], GallerytwoPage.prototype, "myVideo", void 0);
    GallerytwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallerytwo',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/gallerytwo/gallerytwo.html"*/`<!--<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Gallery</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr"><img src="assets/imgs/a.png"></div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Gallery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n	<div>\n	  <ion-segment [(ngModel)]="pet">\n		<ion-segment-button value="library" (click)="openImagePicker()">\n		  Library\n		</ion-segment-button>\n		<ion-segment-button value="camera" (click)="openCamera()">\n		  Camera\n		</ion-segment-button>\n		<ion-segment-button value="video" (click)="videoCapture()">\n		  Video\n		</ion-segment-button>\n	  </ion-segment>\n	</div>\n	\n	<div [ngSwitch]="pet">\n	  <div *ngSwitchCase="\'library\'">	  \n		  <div class="full">\n			\n			<span class="icon-sc"><ion-icon (click)="openImagePicker()" ios="ios-image" md="md-image"></ion-icon></span>\n		  </div>\n		  <h3 class="title">Select Photos</h3>\n                  \n                  <div class="middle">\n                       <div class="half" *ngFor="let img of images">\n                          <img src="{{img.Gallery.image}}" (click)="opensingleImage(img)"/>\n                      </div>\n                  </div>\n		  <!--<div class="middle">\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count select">1</span></div>\n			<div class="half"><img src="assets/imgs/a.png" /> <span class="count select">2</span></div>\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count">3</span></div>			\n		  </div>-->\n	  </div>\n	  <div *ngSwitchCase="\'camera\'">	  \n		  <div class="full">\n			\n			<span class="icon-sc"><ion-icon (click)="openCamera()" ios="ios-image" md="md-image"></ion-icon></span>\n		  </div>\n		  <h3 class="title">Select Photos</h3>\n                  \n                   <div class="middle">\n                       <div class="half" *ngFor="let img of images">\n                          <img src="{{img.Gallery.image}}" (click)="opensingleImage(img)"/>\n                      </div>\n                  </div>\n		 <!-- <div class="middle">\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count select">1</span></div>\n			<div class="half"><img src="assets/imgs/a.png" /> <span class="count select">2</span></div>\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count">3</span></div>			\n		  </div>-->\n	  </div>\n	  <div *ngSwitchCase="\'video\'">	  \n		  <div class="full">\n			\n			<span class="icon-sc"><ion-icon ios="ios-image" md="md-image" (click)="selectVideo()"></ion-icon></span>\n		  </div>\n		  <h3 class="title">Select Videos</h3>\n		  <div class="middle">\n			<div class="half" *ngFor="let vi of videos">\n                           \n                            <video src="{{vi.Video.video}}" controls (click)="videoPlayy(vi.Video.video)">\n                               \n                            </video>\n<!--                             <ion-thumbnail (click)="videoPlayy(vi.Video.video)">\n                            <video>\n                              <source [src]="vi.Video.video" type="video/quicktime">\n                            </video>\n                          </ion-thumbnail>-->\n                        </div>\n                      <!--                            <video controls="controls" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer">\n                            <source src="{{vi.Video.video}}" type="video/mov" />\n                           </video>-->\n                      \n                      \n<!--                      <ion-content overflow-scroll="true">\n  \n</ion-content>-->\n			<!--<div class="half"><img src="assets/imgs/a.png" /> <span class="count select">2</span></div>-->\n			<!--<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count">3</span></div>-->\n			\n		  </div>\n	  </div>\n	</div>\n  <!--<ion-fab bottom right edge>\n			<button ion-fab mini color="theme"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>-->\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/gallerytwo/gallerytwo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__["a" /* MediaCapture */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], GallerytwoPage);
    return GallerytwoPage;
}());

//# sourceMappingURL=gallerytwo.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_tripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ion2_calendar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var My_tripPage = (function () {
    function My_tripPage(navCtrl, navParams, http, alertCtrl, geolocation, nativeGeocoder, common, toastCtrl, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.longitude1 = '';
        this.lattitude1 = '';
        this.autocomplete = {
            query: '',
            location: ''
        };
        this.data = {
            audience: '',
            iaudience: ''
        };
        this.sautocomplete = {
            squery: '',
            location: ''
        };
        this.sautocompletee = {
            squeryy: '',
            location: ''
        };
        this.autocompletee = {
            queryy: '',
            location: ''
        };
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]('en-US');
        this.aud = 0;
        this.iaud = 0;
        this.buttonClicked = false;
        this.addanotherbit = 0;
        this.des2 = '';
        this.event = {
            dateStarts: '',
            dateEnds: '',
            source2dateStarts: '',
            destination2dateEnds: ''
        };
        this.user_id = localStorage.getItem('ID');
        console.log(this.user_id);
        this.data.audience = false;
        this.data.iaudience = false;
        this.editt = this.navParams.get('edit');
        console.log(this.editt);
        if (this.editt != undefined) {
            this.bit = this.editt.bit;
            console.log(this.bit);
            this.trip_id = this.editt.tripid;
            console.log(this.trip_id);
            this.show = this.editt.send;
            console.log(this.show);
            this.autocomplete.query = this.show.start_location;
            this.autocompletee.queryy = this.show.end_location;
            this.event.dateStarts = this.show.trip_startdate;
            this.event.dateEnds = this.show.trip_enddate;
            this.des2 = this.show.end_location1;
            if (this.des2) {
                this.sautocompletee.squeryy = this.show.end_location1;
                this.event.source2dateStarts = this.show.trip_startdate1;
                this.event.destination2dateEnds = this.show.trip_enddate1;
                this.dstart = this.show.trip_startdate1;
                this.dend = this.show.trip_enddate1;
                this.d2lat = this.show.end_lat1;
                this.d2lon = this.show.end_long1;
            }
            //this.data.audience = this.show.status;
            if (this.show.status == 0) {
                this.data.audience = false;
            }
            else if (this.show.status == 1) {
                this.data.audience = true;
            }
            console.log(this.data.audience);
            if (this.show.i_status == 0) {
                this.data.iaudience = false;
            }
            else if (this.show.i_status == 1) {
                this.data.iaudience = true;
            }
            console.log(this.data.iaudience);
            //this.s_add = this.show.start_location;
            this.d_add = this.show.end_location;
            this.lat = this.show.latitude;
            this.long = this.show.longitude;
            this.des_lat = this.show.end_lat;
            this.des_long = this.show.end_long;
        }
        this.viewProfile();
        this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
    }
    My_tripPage.prototype.anotherLocation = function () {
        this.buttonClicked = !this.buttonClicked;
        if (this.buttonClicked == true) {
            this.addanotherbit = 1;
        }
        else {
            this.addanotherbit = 0;
        }
    };
    My_tripPage.prototype.openCalendar = function (mssgg) {
        var _this = this;
        console.log(mssgg);
        if (mssgg == 'dateStarts') {
            var options = {
                title: 'Calendar',
            };
            var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10_ion2_calendar__["CalendarModal"], {
                options: options
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date, type) {
                if (date) {
                    _this.event.dateStarts = date.string;
                    console.log(_this.event.dateStarts);
                }
            });
        }
        else if (mssgg == 'dateEnds') {
            var options = {
                title: 'Calendar',
            };
            var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10_ion2_calendar__["CalendarModal"], {
                options: options
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date, type) {
                if (date) {
                    _this.event.dateEnds = date.string;
                    console.log(_this.event.dateEnds);
                }
            });
        }
        else if (mssgg == 'source2dateStarts') {
            var options = {
                title: 'Calendar',
            };
            var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10_ion2_calendar__["CalendarModal"], {
                options: options
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date, type) {
                if (date) {
                    _this.event.source2dateStarts = date.string;
                    console.log(_this.event.source2dateStarts);
                }
            });
        }
        else if (mssgg == 'destination2dateEnds') {
            var options = {
                title: 'Calendar',
            };
            var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10_ion2_calendar__["CalendarModal"], {
                options: options
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date, type) {
                if (date) {
                    _this.event.destination2dateEnds = date.string;
                    console.log(_this.event.destination2dateEnds);
                }
            });
        }
    };
    My_tripPage.prototype.back = function () {
        if (this.editt != undefined) {
            if (this.bit == 1) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */]);
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    My_tripPage.prototype.notify = function (check) {
        console.log(check);
        if (check == 'trip') {
            console.log(this.data.audience);
            if (this.data.audience == true) {
                this.aud = 1;
            }
            else if (this.data.audience == false) {
                this.aud = 0;
            }
            console.log('audience' + this.aud);
        }
        else if (check == 'itinerary') {
            console.log(this.data.iaudience);
            if (this.data.iaudience == true) {
                this.iaud = 1;
            }
            else if (this.data.iaudience == false) {
                this.iaud = 0;
            }
            console.log('audience' + this.iaud);
        }
    };
    My_tripPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.user_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    My_tripPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        /*this.autocomplete = {
        query: '',
        location: ''
        };
        this.autocompleteItemss = [];
        this.autocompletee = {
        queryy: '',
        location: ''
        };*/
    };
    My_tripPage.prototype.add = function () {
        localStorage.setItem('bit', '2');
        console.log(localStorage.getItem('bit'));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    My_tripPage.prototype.updateSearch = function (place) {
        console.log(place);
        //      if(place == 'source'){
        //          
        //          console.log('modal > updateSearch');
        //    if (this.autocomplete.query == '') {
        //    this.autocompleteItems = [];
        //    return;
        //    }
        //    let self = this; 
        //    let config = { 
        //    
        //    input: this.autocomplete.query, 
        //    componentRestrictions: {  } 
        //    }
        //    this.acService.getPlacePredictions(config, function (predictions, status) {
        //    console.log('modal > getPlacePredictions > status > ', status);
        //    self.autocompleteItems = []; 
        //    console.log(status); 
        //    
        //    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
        //    predictions.forEach(function (prediction) { 
        //    
        //    self.autocompleteItems.push(prediction);
        //    console.log(self.autocompleteItems);
        //    console.log();
        //    
        //    });
        //              
        //    }
        //    });
        //          
        //      }else
        if (place == 'destination') {
            console.log('modal > updateSearch');
            if (this.autocompletee.queryy == '') {
                this.autocompleteItemss = [];
                return;
            }
            var self_1 = this;
            var config = {
                input: this.autocompletee.queryy,
                componentRestrictions: {}
            };
            this.acService.getPlacePredictions(config, function (predictions, status) {
                console.log('modal > getPlacePredictions > status > ', status);
                self_1.autocompleteItemss = [];
                console.log(status);
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    predictions.forEach(function (prediction) {
                        self_1.autocompleteItemss.push(prediction);
                        console.log(self_1.autocompleteItemss);
                        //console.log(self.autocompleteItemss[0].reference);
                    });
                }
            });
        }
        else 
        //      if(place == 'source2'){
        //      
        //      console.log('modal > updateSearch');
        //    if (this.sautocomplete.squery == '') {
        //    this.autocompleteItems2 = [];
        //    return;
        //    }
        //    let self = this; 
        //    let config = { 
        //    
        //    input: this.sautocomplete.squery, 
        //    componentRestrictions: {  } 
        //    }
        //    this.acService.getPlacePredictions(config, function (predictions, status) {
        //    console.log('modal > getPlacePredictions > status > ', status);
        //    self.autocompleteItems2 = []; 
        //    console.log(status); 
        //    
        //    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
        //    predictions.forEach(function (prediction) { 
        //    
        //    self.autocompleteItems2.push(prediction);
        //    console.log(self.autocompleteItems2);
        //    console.log();
        //    
        //    });
        //              
        //    }
        //    });
        //          
        //      }else 
        if (place == 'destination2') {
            console.log('modal > updateSearch');
            if (this.sautocompletee.squeryy == '') {
                this.autocompleteItemss2 = [];
                return;
            }
            var self_2 = this;
            var config = {
                input: this.sautocompletee.squeryy,
                componentRestrictions: {}
            };
            this.acService.getPlacePredictions(config, function (predictions, status) {
                console.log('modal > getPlacePredictions > status > ', status);
                self_2.autocompleteItemss2 = [];
                console.log(status);
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    predictions.forEach(function (prediction) {
                        self_2.autocompleteItemss2.push(prediction);
                        console.log(self_2.autocompleteItemss2);
                        console.log();
                    });
                }
            });
        }
    };
    My_tripPage.prototype.chooseItem = function (item, place) {
        var _this = this;
        //        if(place == 'source'){
        //            this.autocompleteItems = [];
        //      this.autocomplete.query = item.description;
        //    
        //      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocomplete.query+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
        //      this.http.get(url)
        //              .map(res => res.json())
        //              .subscribe(data => {
        //                console.log(data);
        //                
        //                console.log(data.results[0].geometry.location);
        //                console.log('addresss:'+data.results[0].formatted_address);
        //                this.s_add = data.results[0].formatted_address;
        //                this.lat = data.results[0].geometry.location.lat;
        //                this.long = data.results[0].geometry.location.lng;
        //                this.autocomplete.location = data.results[0].geometry.location;
        //      })
        //        }else 
        if (place == 'destination') {
            this.autocompleteItemss = [];
            this.autocompletee.queryy = item.description;
            this.photoreference = item.reference;
            console.log(this.photoreference);
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.autocompletee.queryy + '&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
            this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                console.log(data.results[0].geometry.location);
                console.log('addresss:' + data.results[0].formatted_address);
                _this.d_add = data.results[0].formatted_address;
                _this.des_lat = data.results[0].geometry.location.lat;
                _this.des_long = data.results[0].geometry.location.lng;
                _this.autocompletee.location = data.results[0].geometry.location;
            });
        }
        else 
        //        if(place == 'source2'){
        //        
        //        this.autocompleteItems2 = [];
        //      this.sautocomplete.squery = item.description;
        //    
        //      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.sautocomplete.squery+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
        //      this.http.get(url)
        //              .map(res => res.json())
        //              .subscribe(data => {
        //                console.log(data);
        //                
        //                console.log(data.results[0].geometry.location);
        //                console.log('addresss:'+data.results[0].formatted_address);
        //                this.s2_add = data.results[0].formatted_address;
        //                this.s2_lat = data.results[0].geometry.location.lat;
        //                this.s2_long = data.results[0].geometry.location.lng;
        //                this.sautocomplete.location = data.results[0].geometry.location;
        //      })
        //            
        //        }else 
        if (place == 'destination2') {
            this.autocompleteItemss2 = [];
            this.sautocompletee.squeryy = item.description;
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.sautocompletee.squeryy + '&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
            this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                console.log(data.results[0].geometry.location);
                console.log('addresss:' + data.results[0].formatted_address);
                _this.d2_add = data.results[0].formatted_address;
                _this.d2_lat = data.results[0].geometry.location.lat;
                _this.d2_long = data.results[0].geometry.location.lng;
                _this.sautocompletee.location = data.results[0].geometry.location;
            });
        }
    };
    My_tripPage.prototype.search = function (searchform) {
        var _this = this;
        if (this.event.dateStarts > this.event.dateEnds) {
            var toast = this.toastCtrl.create({
                message: 'Invalid Trip Start date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateStarts == '' && this.event.dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start and End date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateStarts == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip End date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            console.log(this.common.options);
            var options = this.common.options;
            var data_form = {
                user_id: this.user_id,
                trip_startdate: this.event.dateStarts,
                trip_enddate: this.event.dateEnds,
                start_location: this.photoreference,
                end_location: this.d_add,
                //start_lat: this.lat,
                //start_long: this.long,
                end_lat: this.des_lat,
                end_long: this.des_long,
                trip_startdate1: '',
                trip_enddate1: '',
                //start_location1: '',
                end_location1: '',
                //start_lat1: '',
                //start_long1: '',
                end_lat1: '',
                end_long1: '',
                status: this.aud,
                i_status: 0
            };
            console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            console.log(Serialized);
            console.log(data_form);
            this.http.post(this.common.base_url + 'trips/tripadd', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    console.log(data.data.Trip.id);
                    _this.trip_id = data.data.Trip.id;
                    console.log(_this.trip_id);
                    console.log('true');
                    localStorage.setItem('TripID', _this.trip_id);
                    /*this.navCtrl.push(AddtripPage,{
                      trip_id: this.trip_id
                    });*/
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */], {
                        trip_id: _this.trip_id
                    });
                    var toast = _this.toastCtrl.create({
                        message: "Your trip has been saved successfully",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    console.log(data.msg);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        }
    };
    My_tripPage.prototype.searchAdd = function (searchForm) {
        var _this = this;
        if (this.event.dateStarts > this.event.dateEnds) {
            var toast = this.toastCtrl.create({
                message: 'Invalid Trip Start date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateStarts == '' && this.event.dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start and End date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateStarts == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip End date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateEnds > this.event.source2dateStarts) {
            var toast = this.toastCtrl.create({
                message: 'Invalid dates',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.source2dateStarts > this.event.destination2dateEnds) {
            var toast = this.toastCtrl.create({
                message: 'Invalid dates',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.source2dateStarts == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.destination2dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip End date to Add Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            console.log(this.common.options);
            var options = this.common.options;
            var data_form = {
                user_id: this.user_id,
                trip_startdate: this.event.dateStarts,
                trip_enddate: this.event.dateEnds,
                start_location: this.photoreference,
                end_location: this.d_add,
                //start_lat: this.lat,
                //start_long: this.long,
                end_lat: this.des_lat,
                end_long: this.des_long,
                trip_startdate1: this.event.source2dateStarts,
                trip_enddate1: this.event.destination2dateEnds,
                //start_location1: this.s2_add,
                end_location1: this.d2_add,
                //start_lat1: this.s2_lat,
                //start_long1: this.s2_long,
                end_lat1: this.d2_lat,
                end_long1: this.d2_long,
                status: this.aud,
                i_status: 0
            };
            console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            console.log(Serialized);
            console.log(data_form);
            this.http.post(this.common.base_url + 'trips/tripadd', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    console.log(data.data.Trip.id);
                    _this.trip_id = data.data.Trip.id;
                    console.log(_this.trip_id);
                    console.log('true');
                    localStorage.setItem('TripID', _this.trip_id);
                    /*this.navCtrl.push(AddtripPage,{
                      trip_id: this.trip_id
                    });*/
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */], {
                        trip_id: _this.trip_id
                    });
                    var toast = _this.toastCtrl.create({
                        message: "Your trip has been saved successfully",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    console.log(data.msg);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        }
    };
    My_tripPage.prototype.getCurrentLocation = function () {
        var _this = this;
        console.log('My current location');
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.lattitude1 = resp.coords.latitude;
            _this.longitude1 = resp.coords.longitude;
            //localStorage.setItem('lat',this.lattitude1);
            //localStorage.setItem('long',this.longitude1);
            localStorage.setItem('location', _this.autocomplete.query);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    My_tripPage.prototype.edit = function (heroForm) {
        var _this = this;
        if (this.event.dateStarts > this.event.dateEnds) {
            var toast = this.toastCtrl.create({
                message: 'Invalid Trip Start date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateStarts == '' && this.event.dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start and End date to Edit Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateStarts == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip Start date to Edit Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.event.dateEnds == '') {
            var toast = this.toastCtrl.create({
                message: 'Enter the Trip End date to Edit Trip',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            console.log(this.common.options);
            var options = this.common.options;
            var data_form = {
                id: this.trip_id,
                trip_startdate: this.event.dateStarts,
                trip_enddate: this.event.dateEnds,
                start_location: this.photoreference,
                end_location: this.d_add,
                //start_lat: this.lat,
                //start_long: this.long,
                end_lat: this.des_lat,
                end_long: this.des_long,
                status: this.aud,
                i_status: this.iaud
            };
            console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            console.log(Serialized);
            console.log(data_form);
            this.http.post(this.common.base_url + 'trips/edittrip', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    console.log(data.data.Trip.id);
                    _this.trip_id = data.data.Trip.id;
                    console.log(_this.trip_id);
                    console.log('true');
                    localStorage.setItem('TripID', _this.trip_id);
                    /*this.navCtrl.push(AddtripPage,{
                      trip_id: this.trip_id
                    });*/
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */], {
                        trip_id: _this.trip_id
                    });
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    console.log(data.msg);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        }
    };
    My_tripPage.prototype.editAdd = function (h) {
        console.log(h);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], My_tripPage.prototype, "mapElement", void 0);
    My_tripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my_trip',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/my_trip/my_trip.html"*/`<ion-header>\n  \n  <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n		<ion-title class="header_title" color="text">my trips</ion-title>\n		<ion-buttons end>\n		  <button ion-button icon-only menuToggle>\n			  <div class="app_usr">\n				  \n				  <img *ngIf="image" src="{{image}}">\n						  \n				  <img *ngIf="!image" src="assets/imgs/user.png">\n			  </div>\n			</button>\n		</ion-buttons>\n	\n	  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="top_sec">\n			<h1>Give us what you\'ve got.</h1>\n			<p>Whether you\'re already booked or still deciding, let us help you plan!</p>\n		</div>\n		<form #heroForm="ngForm">\n		<div class="form_sec">\n			<div class="location_sec">\n<!--				<h5>Source</h5>\n				<ion-list>\n					\n                                        <ion-item>\n                                            <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                            <ion-input type="text" name="query" [(ngModel)]="autocomplete.query" (input)="updateSearch(\'source\')" #query="ngModel" required></ion-input>\n                                        </ion-item>\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item,\'source\')">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>-->\n\n				<h5>Destination</h5>\n				<ion-list>\n                                   \n                                    <ion-item>\n                                        <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                        <ion-input  type="text" name="queryy" [(ngModel)]="autocompletee.queryy" (input)="updateSearch(\'destination\')" #queryy="ngModel" required></ion-input>\n                                    </ion-item>	\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItemss" (click)="chooseItem(item,\'destination\')">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>\n			</div>\n			<div class="date_sec">\n				<h5>Dates</h5>\n				<ion-list>\n                                   \n                                    <ion-item (click)="openCalendar(\'dateStarts\')">\n                                       <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                       <ion-label class="datetimez" *ngIf="event.dateStarts == \'\'">Select Date</ion-label>\n                                       <ion-label class="datetimez" *ngIf="event.dateStarts != \'\'">{{event.dateStarts}}</ion-label>\n                                       <!--  <ion-datetime  name="dateStarts" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateStarts" id="dateStarts" #dateStarts="ngModel" required placeholder="Select date"></ion-datetime>-->\n                                    </ion-item>\n					\n                                    <ion-item (click)="openCalendar(\'dateEnds\')">\n                                        <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                        <ion-label class="datetimez" *ngIf="event.dateEnds == \'\'">Select Date</ion-label>\n                                        <ion-label class="datetimez" *ngIf="event.dateEnds != \'\'">{{event.dateEnds}}</ion-label>\n                                        <!--<ion-datetime name="dateEnds" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateEnds" id="dateEnds" #dateEnds="ngModel" required placeholder="Select date"></ion-datetime>-->\n<!--                                      <ion-calendar [(ngModel)]="date"\n                                                    (onChange)="onChangee($event)"\n                                                    [type]="type"\n                                                    [format]="\'YYYY-MM-DD\'">\n                                      </ion-calendar>-->\n                                    </ion-item>\n				</ion-list>\n                                </div>\n                    \n        <ion-row class="edit_outer">\n		\n		 <ion-col col-12 style="padding:5px 0px;">\n			<ion-label>CHOOSE AUDIENCE</ion-label>\n			<ion-row class="pub">\n				<ion-col col-2 style="padding: 5px 0px;"> <span>Public</span></ion-col>\n                                \n				<ion-col col-3 style="padding: 0px 5px;">\n                                               \n                          <ion-toggle name="audience" id="audience" [(ngModel)]="data.audience" (ionChange)="notify(\'trip\')" [checked]="data.audience"></ion-toggle>\n                        \n                              </ion-col>\n                                \n				<ion-col col-5 style="padding: 5px 0px;"> <span>Private</span></ion-col>\n			</ion-row>\n                        \n		 </ion-col>\n	</ion-row>\n                    \n        <ion-row class="edit_outer" *ngIf="bit == \'1\'">\n		\n		 <ion-col col-12 style="padding:5px 0px;">\n			<ion-label>CHOOSE ITINERARY AUDIENCE</ion-label>\n			<ion-row class="pub">\n				<ion-col col-2 style="padding: 5px 0px;"> <span>Public</span></ion-col>\n                                \n				<ion-col col-3 style="padding: 0px 5px;">\n                                               \n                          <ion-toggle name="iaudience" id="iaudience" [(ngModel)]="data.iaudience" (ionChange)="notify(\'itinerary\')" [checked]="data.iaudience"></ion-toggle>\n                        \n                              </ion-col>\n                                \n				<ion-col col-5 style="padding: 5px 0px;"> <span>Private</span></ion-col>\n			</ion-row>\n                        \n		 </ion-col>\n	</ion-row>\n                    \n                    <div class="btn-sec" *ngIf="bit == \'1\'">\n                        <div *ngIf="des2 != \'\'">\n                                           <div class="location_sec">\n<!--				<h5>Source</h5>\n				<ion-list>\n					\n                                        <ion-item>\n                                            <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                            <ion-input type="text" name="squery" [(ngModel)]="sautocomplete.squery" (input)="updateSearch(\'source2\')" #squery="ngModel" required></ion-input>\n                                        </ion-item>\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItems2" (click)="chooseItem(item,\'source2\')">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>-->\n\n				<h5>Destination</h5>\n				<ion-list>\n                                   \n                                    <ion-item>\n                                        <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                        <ion-input  type="text" name="squeryy" [(ngModel)]="sautocompletee.squeryy" (input)="updateSearch(\'destination2\')" #squeryy="ngModel" required></ion-input>\n                                    </ion-item>	\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItemss2" (click)="chooseItem(item,\'destination2\')">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>\n			</div>\n			<div class="date_sec">\n				<h5>Dates</h5>\n				<ion-list>\n                                   \n                                    <ion-item (click)="openCalendar(\'source2dateStarts\')">\n                                       <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                       <ion-label class="datetimez" *ngIf="event.source2dateStarts == \'\'">Select Date</ion-label>\n                                       <ion-label class="datetimez" *ngIf="event.source2dateStarts != \'\'">{{event.source2dateStarts}}</ion-label>\n                                       <!--  <ion-datetime  name="dateStarts" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateStarts" id="dateStarts" #dateStarts="ngModel" required placeholder="Select date"></ion-datetime>-->\n                                    </ion-item>\n					\n                                    <ion-item (click)="openCalendar(\'destination2dateEnds\')">\n                                        <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                        <ion-label class="datetimez" *ngIf="event.destination2dateEnds == \'\'">Select Date</ion-label>\n                                        <ion-label class="datetimez" *ngIf="event.destination2dateEnds != \'\'">{{event.destination2dateEnds}}</ion-label>\n                                        <!--<ion-datetime name="dateEnds" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateEnds" id="dateEnds" #dateEnds="ngModel" required placeholder="Select date"></ion-datetime>-->\n<!--                                      <ion-calendar [(ngModel)]="date"\n                                                    (onChange)="onChangee($event)"\n                                                    [type]="type"\n                                                    [format]="\'YYYY-MM-DD\'">\n                                      </ion-calendar>-->\n                                    </ion-item>\n				</ion-list>\n                                </div> \n                        </div>    \n				</div>\n                                        \n				<div class="btn-sec" *ngIf="bit != \'1\'">\n					<button ion-button clear (click)="anotherLocation()">add another location for this trip</button>\n                                        \n                                        <div *ngIf="addanotherbit != \'0\'">\n                                            \n                                            \n                                           <div class="location_sec">\n<!--				<h5>Source</h5>\n				<ion-list>\n					\n                                        <ion-item>\n                                            <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                            <ion-input type="text" name="squery" [(ngModel)]="sautocomplete.squery" (input)="updateSearch(\'source2\')" #squery="ngModel" required></ion-input>\n                                        </ion-item>\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItems2" (click)="chooseItem(item,\'source2\')">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>-->\n\n				<h5>Destination</h5>\n				<ion-list>\n                                   \n                                    <ion-item>\n                                        <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                        <ion-input  type="text" name="squeryy" [(ngModel)]="sautocompletee.squeryy" (input)="updateSearch(\'destination2\')" #squeryy="ngModel" required></ion-input>\n                                    </ion-item>	\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItemss2" (click)="chooseItem(item,\'destination2\')">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>\n			</div>\n			<div class="date_sec">\n				<h5>Dates</h5>\n				<ion-list>\n                                   \n                                    <ion-item (click)="openCalendar(\'source2dateStarts\')">\n                                       <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                       <ion-label class="datetimez" *ngIf="event.source2dateStarts == \'\'">Select Date</ion-label>\n                                       <ion-label class="datetimez" *ngIf="event.source2dateStarts != \'\'">{{event.source2dateStarts}}</ion-label>\n                                       <!--  <ion-datetime  name="dateStarts" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateStarts" id="dateStarts" #dateStarts="ngModel" required placeholder="Select date"></ion-datetime>-->\n                                    </ion-item>\n					\n                                    <ion-item (click)="openCalendar(\'destination2dateEnds\')">\n                                        <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                        <ion-label class="datetimez" *ngIf="event.destination2dateEnds == \'\'">Select Date</ion-label>\n                                        <ion-label class="datetimez" *ngIf="event.destination2dateEnds != \'\'">{{event.destination2dateEnds}}</ion-label>\n                                        <!--<ion-datetime name="dateEnds" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateEnds" id="dateEnds" #dateEnds="ngModel" required placeholder="Select date"></ion-datetime>-->\n<!--                                      <ion-calendar [(ngModel)]="date"\n                                                    (onChange)="onChangee($event)"\n                                                    [type]="type"\n                                                    [format]="\'YYYY-MM-DD\'">\n                                      </ion-calendar>-->\n                                    </ion-item>\n				</ion-list>\n                                </div> \n                                        </div>\n				</div>\n	\n			<button ion-button *ngIf="bit == \'1\' && addanotherbit == \'0\' && des2 == \'\'" color="theme" type="submit" [disabled]="!heroForm.form.valid" (click)="edit(heroForm)">Submit</button>\n                        <button ion-button *ngIf="bit == \'1\' && addanotherbit == \'1\' && des2 != \'\'" color="theme" type="submit" [disabled]="!heroForm.form.valid" (click)="editAdd(heroForm)">Submit</button>\n			<button ion-button *ngIf="bit != \'1\' && addanotherbit == \'0\'" color="theme" type="submit" [disabled]="!heroForm.form.valid" (click)="search(heroForm)">Add Trip</button>\n                        <button ion-button *ngIf="bit != \'1\' && addanotherbit == \'1\'" color="theme" type="submit" [disabled]="!heroForm.form.valid" (click)="searchAdd(heroForm)">Add Trips</button>\n		</div>\n		</form>\n	</div>\n</ion-content>\n\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/my_trip/my_trip.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], My_tripPage);
    return My_tripPage;
}());

//# sourceMappingURL=my_trip.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfilePage = (function () {
    function ProfilePage(navCtrl, http, common, toastCtrl, loadingCtrl, viewCtrl, facebook, googlePlus) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.data = '';
        this.event = {};
        this.id = localStorage.getItem('ID');
        this.status = localStorage.getItem('Status');
        this.viewProfile();
    }
    ProfilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.viewProfile();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ProfilePage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ProfilePage.prototype.viewProfile = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'users/user', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    _this.user = data.data.User;
                    console.log(_this.user);
                    Loading.dismiss();
                    localStorage.setItem('Userdata', JSON.stringify(data.data.User));
                    localStorage.setItem('DP', _this.user.image);
                    _this.image = data.data.User.image;
                    if (_this.user.phone == null || _this.user.phone == '') {
                        _this.user.phone = 'Contact Number';
                    }
                    if (_this.user.email == null || _this.user.email == 'undefined' || _this.user.email == '') {
                        _this.user.email = 'Email';
                    }
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    ProfilePage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.change = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    ProfilePage.prototype.reset = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/profile/profile.html"*/`<ion-header>\n		<ion-toolbar color="theme">\n			<ion-title class="header_title" color="text">My Account</ion-title>\n			<ion-buttons end>\n				<button ion-button icon-only menuToggle>\n					<div class="app_usr">\n							<img *ngIf="image" src="{{image}}">\n						\n							<img *ngIf="!image" src="assets/imgs/user.png">\n					</div>\n				</button>\n				</ion-buttons>\n	  \n		</ion-toolbar>\n	  </ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="page_wrapper">\n		<div class="top_sec" *ngIf = "user">\n			<div class="avatar_sec">\n				<figure>\n					<!--<img src="{{user.image}}">-->\n					\n					<img *ngIf="user.image" src="{{user.image}}">\n						\n					<img *ngIf="!user.image" src="assets/imgs/user.png">\n				\n				</figure>\n			</div>\n			<div class="detail_sec">\n				<h5>{{user.name}}</h5>\n				<div class="contact_details">\n					<p><span><ion-icon ios="ios-call" md="md-call"></ion-icon></span>{{user.phone}}</p>\n					<p><span><ion-icon ios="ios-mail" md="md-mail"></ion-icon></span>{{user.email}}</p>\n				</div>\n			</div>\n		</div>\n		<div class="bottom_sec">\n		<ion-list>\n            <div *ngIf = "status == 0">        \n			<ion-item (click)="change();">\n				<ion-icon ios="ios-lock" md="ios-lock"></ion-icon>\n				Change Password\n				<ion-icon name="arrow-forward" item-end></ion-icon>\n			</ion-item>\n                   \n			<ion-item (click)="edit();">\n				<ion-icon ios="ios-create" md="ios-create"></ion-icon>\n				Edit Profile\n				<ion-icon name="arrow-forward" item-end ></ion-icon>\n			</ion-item>\n\n			\n			</div>\n			<div *ngIf = "status == 1">\n					<ion-item (click)="edit();">\n							<ion-icon ios="ios-create" md="ios-create"></ion-icon>\n							Edit Profile\n							<ion-icon name="arrow-forward" item-end ></ion-icon>\n						</ion-item>\n\n						\n				</div>\n		</ion-list>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/profile/profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, http, common, toastCtrl, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.type = 'password';
        this.showPass = false;
        this.typee = 'password';
        this.showPasss = false;
        this.data = '';
        this.user = JSON.parse(localStorage.getItem('Userdata'));
        console.log(this.user);
        console.log(this.user.email);
    }
    ChangepasswordPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ChangepasswordPage.prototype.showPasswordd = function () {
        this.showPasss = !this.showPasss;
        if (this.showPasss) {
            this.typee = 'text';
        }
        else {
            this.typee = 'password';
        }
    };
    ChangepasswordPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    ChangepasswordPage.prototype.openmytripPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    ChangepasswordPage.prototype.changePass = function (change) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            email: this.user.email,
            new_password: change.value.npassword,
            old_password: change.value.password
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'users/changepassword', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 1) {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/changepassword/changepassword.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="page_wrapper">\n    <div class="logo_sec">\n      <img src="assets/imgs/logo.png">\n    </div>\n    <div class="form_sec">\n      <form #change="ngForm">\n        <ion-list>\n          <ion-item>\n            <ion-label fixed>\n              <ion-icon ios="ios-key-outline" md="md-key"></ion-icon>\n            </ion-label>\n            <ion-input type="{{type}}" name="password" [(ngModel)]="data.password" id="password" #password="ngModel" minlength="8" placeholder="Enter Old Password"\n              required></ion-input>\n\n            <button *ngIf="!showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()">\n              <ion-icon name="eye" name="eye"></ion-icon>\n            </button>\n            <button *ngIf="showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()">\n              <ion-icon name="eye-off"></ion-icon>\n            </button>\n\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="password.errors && (password.dirty || password.touched)">\n\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n              <div [hidden]="!password.errors.minlength">\n                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n              </div>\n            </div>\n\n          </ion-label>\n          <ion-item>\n            <ion-label fixed>\n              <ion-icon ios="ios-key-outline" md="md-key"></ion-icon>\n            </ion-label>\n            <ion-input type="{{typee}}" name="npassword" [(ngModel)]="data.npassword" id="npassword" #npassword="ngModel" minlength="8"\n              placeholder="Enter New Password" required></ion-input>\n\n            <button *ngIf="!showPasss" ion-button clear color="light" type="button" item-right (click)="showPasswordd()">\n              <ion-icon name="eye" name="eye"></ion-icon>\n            </button>\n            <button *ngIf="showPasss" ion-button clear color="light" type="button" item-right (click)="showPasswordd()">\n              <ion-icon name="eye-off"></ion-icon>\n            </button>\n\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="npassword.errors && (npassword.dirty || npassword.touched)">\n\n              <div [hidden]="!npassword.errors.required">\n                Password is required\n              </div>\n              <div [hidden]="!npassword.errors.minlength">\n                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n              </div>\n            </div>\n\n          </ion-label>\n\n        </ion-list>\n        <div class="btn_sec">\n          <button ion-button color="theme" round (click)="changePass(change)" [disabled]="!change.form.valid">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/changepassword/changepassword.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, http, common, toastCtrl, loadingCtrl, viewCtrl, firebase) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.firebase = firebase;
        this.type = 'password';
        this.showPass = false;
        this.data = '';
    }
    SignupPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    SignupPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    SignupPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signUp = function (signup) {
        var _this = this;
        this.firebase.getToken()
            .then(function (token) {
            console.log("The token is " + token);
            //alert(JSON.stringify(token));
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var options = _this.common.options;
            var data_form = {
                name: signup.value.fullname,
                email: signup.value.email,
                password: signup.value.password,
                tokenid: token
            };
            console.log(data_form);
            var Serialized = _this.common.serializeObj(data_form);
            console.log(Serialized);
            Loading.present().then(function () {
                _this.http.post(_this.common.base_url + 'users/registration', Serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    Loading.dismiss();
                    if (data.status == 0) {
                        localStorage.setItem('ID', data.data.User.id);
                        localStorage.setItem('Userdata', JSON.stringify(data.data.User));
                        localStorage.setItem('Status', '0');
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (error) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your Network Connection",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                });
            });
        }) // save the token server-side and use it to push notifications to this device
            .catch(function (error) {
            console.error('Error getting token', error);
            //alert(JSON.stringify(error));
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/signup/signup.html"*/`<ion-header hidden>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Get Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n			<p class="page_head">Create Account</p>\n		</div>\n		<div class="form_sec">\n			<form #signup="ngForm">\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-person-outline" md="md-person"></ion-icon></ion-label>\n						<ion-input type="text" name="fullname" pattern="[a-zA-Z ]+" [(ngModel)]="data.fullname" id="fullname" #fullname="ngModel" placeholder="Full Name" required></ion-input>\n					</ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="fullname.errors && (fullname.dirty || fullname.touched)">\n                                              <div [hidden]="!fullname.errors.required">\n                                                Full Name is required\n                                              </div>\n                                              <div [hidden]="!fullname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n                                            </div>\n                                          </ion-label>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-mail-outline" md="md-mail"></ion-icon></ion-label>\n						<ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Email" required></ion-input>\n					</ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                              \n                                              <div [hidden]="!email.errors.required">\n                                                Email is required\n                                              </div>\n                                              <div [hidden]="!email.errors.pattern">\n                                                In-valid email\n                                              </div>\n                                            </div>\n                                            <!--<div *ngIf="!email.errors && (!email.dirty || !email.touched)">\n                                              <img class="tick" item-right src="assets/imgs/tickryt.png">\n                                            </div>-->\n                                        </ion-label>\n					<ion-item>\n						<ion-label fixed> <ion-icon ios="ios-key-outline" md="md-key"></ion-icon></ion-label>\n						<ion-input type="{{type}}" name="password" [(ngModel)]="data.password" id="password" #password="ngModel" minlength="8" placeholder="Password" required></ion-input>\n            <button *ngIf="!showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n							<ion-icon name="eye" name="eye"></ion-icon>\n							</button>\n				<button *ngIf="showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n					<ion-icon name="eye-off"></ion-icon>\n					</button>	\n          </ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="password.errors && (password.dirty || password.touched)">\n                                              \n                                              <div [hidden]="!password.errors.required">\n                                                Password is required\n                                              </div>\n                                              <div [hidden]="!password.errors.minlength">\n                                                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n                                              </div>\n                                            </div>\n                                            \n                                          </ion-label>\n					\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" (click)="signUp(signup)" [disabled]="!signup.form.valid" round>Sign Up</button>\n        </div>\n       </form>\n       <div class="btn-sec">\n         <p>Already registered? <button ion-button clear (click)="signIn()"> Sign In</button></p>\n       </div>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/signup/signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ion2_calendar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ion2_calendar__);
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
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddeventPage = (function () {
    function AddeventPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, camera, actionSheetCtrl, imagePicker, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagePicker = imagePicker;
        this.modalCtrl = modalCtrl;
        this.event = {
            dateStarts: '',
            dateEnds: ''
        };
        this.data = {
            flist: '',
            hlist: '',
            etype: '',
            dadd: '',
            notes: '',
            restaurant: '',
            activity: '',
            loc: ''
        };
        this.hotels = [];
        this.flights = [];
        this.attachments = [];
        this.sattachments = [];
        this.eventdate = '';
        this.id = localStorage.getItem('ID');
        this.tripid = localStorage.getItem('TripID');
        this.start = this.navParams.get('startd');
        this.end = this.navParams.get('endd');
    }
    AddeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddeventPage');
    };
    AddeventPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    AddeventPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            title: 'Calendar',
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (date) {
                _this.eventdate = date.string;
                console.log(_this.eventdate);
            }
        });
    };
    AddeventPage.prototype.typeSelect = function (type) {
        this.type = type;
        if (type == 'flight') {
            this.op = 1;
            this.flightListing();
        }
        else if (type == 'hotel') {
            this.data.loc = '';
            this.op = 2;
            this.hotelListing();
        }
        else if (type == 'activity') {
            this.data.loc = '';
            this.op = 3;
        }
        else if (type == 'restaurant') {
            this.data.loc = '';
            this.op = 4;
        }
    };
    AddeventPage.prototype.hotelListing = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'bookings/bookedhotel', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.hotels = data.data;
                console.log(_this.hotels);
            }
            else {
            }
        }, function (error) {
        });
    };
    AddeventPage.prototype.flightListing = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'bookings/flighthotel', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.flights = data.data;
                console.log(_this.flights);
            }
            else {
            }
        }, function (error) {
        });
    };
    AddeventPage.prototype.flightSelect = function (f) {
        var f1 = f.split("_");
        this.title = f1[0];
        console.log(this.title);
        console.log(this.flights[f1[1]]);
        this.data = {
            dadd: this.flights[f1[1]].Booking.start_location,
            aadd: this.flights[f1[1]].Booking.end_location
        };
        this.event = {
            dateStarts: this.flights[f1[1]].Booking.departure_time,
            dateEnds: this.flights[f1[1]].Booking.arrival_time
        };
    };
    AddeventPage.prototype.hotelSelect = function (h) {
        var f1 = h.split("_");
        this.title = f1[0];
        console.log(this.title);
        console.log(this.hotels[f1[1]]);
        this.data = {
            loc: this.hotels[f1[1]].Hotel_booking.city + ' ' + this.hotels[f1[1]].Hotel_booking.country
        };
        //    this.event = {
        //        dateStarts: this.hotels[f1[1]].Hotel_booking.departure_time,
        //        dateEnds: this.hotels[f1[1]].Hotel_booking.arrival_time
        //    }
    };
    AddeventPage.prototype.addAttachment = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.simage = 'data:image/jpeg;base64,' + imageData;
                            _this.sattachments.push(_this.simage);
                            console.log(_this.sattachments);
                            //alert(JSON.stringify(this.sattachments));
                            _this.attachments.push(imageData);
                            //alert(JSON.stringify(this.attachments));
                            console.log(_this.attachments);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.simage = 'data:image/jpeg;base64,' + imageData;
                            _this.sattachments.push(_this.simage);
                            console.log(_this.sattachments);
                            //alert(JSON.stringify(this.sattachments));
                            _this.attachments.push(imageData);
                            //alert(JSON.stringify(this.attachments));
                            console.log(_this.attachments);
                        });
                    }
                }
                /*,{
                  text: 'Add multiple images',
                  handler: () => {
                    let options = {
                      maximumImagesCount: 5,
                      outputType: 1,
                      quality: 10
                    }
                    this.attachments = [];
                    this.imagePicker.getPictures(options)
                      .then((results) => {
          
                        for (var i = 0; i < results.length; i++) {
          
                          this.attachments.push(results[i]);
          
                        }
                        alert(JSON.stringify(this.attachments));
          
                        var Loading = this.loadingCtrl.create({
                          spinner: 'bubbles',
                          showBackdrop: false,
                          cssClass: 'loader'
                        });
          
                        var options = this.common.options;
          
                        var data_form = {
                          user_id: this.id,
                          trip_id: this.tripid,
                          //event_id: ,
                          attechment: this.attachments
                        }
                        alert(JSON.stringify(data_form));
                        console.log(data_form);
          
                        var Serialized = this.common.serializeObj(data_form);
                        console.log(Serialized);
          
                        Loading.present().then(() => {
                          this.http.post(this.common.base_url + 'bookings/attechment', Serialized, options)
                            .map(res => res.json())
                            .subscribe(data => {
                              Loading.dismiss();
                              alert(JSON.stringify(data));
          
                              console.log(data);
                              if (data.status == 0) {
                                  //this.viewallImages();
                                this.images = data.image;
                                alert(JSON.stringify(this.images));
          
                                let toast = this.toastCtrl.create({
                                  message: data.msg,
                                  duration: 3000,
                                  position: 'middle'
                                });
                                toast.present();
          
                              } else {
          
                                let toast = this.toastCtrl.create({
                                  message: data.msg,
                                  duration: 3000,
                                  position: 'middle'
                                });
                                toast.present();
          
                              }
                            }, error => {
                              Loading.dismiss();
                              let toast = this.toastCtrl.create({
                              message: "Server not Working,Please Check your Internet Connection and try again!",
                              duration: 3000
                            });
                            toast.present();
                            });
                        });
          
          
                      }, (err) => {
                       console.log(err)
                       });
                        }
                }*/
                ,
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    AddeventPage.prototype.adddEvent = function (hero) {
        var _this = this;
        console.log(hero.value);
        console.log(hero.value.dateStarts);
        var options = this.common.options;
        if (this.op == 3) {
            this.title = this.data.activity;
        }
        else if (this.op == 4) {
            this.title = this.data.restaurant;
        }
        if (this.eventdate > this.end || this.eventdate < this.start) {
            var toast = this.toastCtrl.create({
                message: "Invalid Date",
                duration: 3000
            });
            toast.present();
        }
        else {
            if (this.op == 1) {
                var data_form = {
                    user_id: this.id,
                    trip_id: this.tripid,
                    event_type: this.type,
                    title: this.title,
                    d_add: hero.value.dadd,
                    a_add: hero.value.aadd,
                    d_time: hero.value.dateEnds,
                    a_time: hero.value.dateStarts,
                    note: hero.value.notes,
                    location: '',
                    eventdate: this.eventdate,
                    file: JSON.stringify(this.attachments)
                };
                console.log(data_form);
                var Serialized = this.common.serializeObj(data_form);
                //alert(JSON.stringify(data_form));            
            }
            else if (this.op != 1) {
                var data_formm = {
                    user_id: this.id,
                    trip_id: this.tripid,
                    event_type: this.type,
                    title: this.title,
                    d_add: '',
                    a_add: '',
                    d_time: hero.value.dateEnds,
                    a_time: hero.value.dateStarts,
                    note: hero.value.notes,
                    location: this.data.loc,
                    file: JSON.stringify(this.attachments)
                };
                console.log(data_formm);
                var Serialized = this.common.serializeObj(data_formm);
                //alert(JSON.stringify(data_formm));            
            }
            this.http.post(this.common.base_url + 'bookings/addevent', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    //alert(JSON.stringify(data));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__["a" /* AddtripPage */], {
                        event: data.data.Event
                    });
                    var toast = _this.toastCtrl.create({
                        message: "Event added Successfully to Itinerary",
                        duration: 3000
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000
                    });
                    toast.present();
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000
                });
                toast.present();
            });
        }
    };
    AddeventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addevent',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/addevent/addevent.html"*/`\n<!--<ion-header>\n\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text"></ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Add Event</ion-title>\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding class="add_event">\n    <form #heroForm="ngForm">\n  <ion-list class="slt">\n    <ion-item no-padding>\n      <ion-select name="etype" [(ngModel)]="data.etype" (ionChange)="typeSelect($event)">\n        <ion-option value="flight" selected="true">\n<!--        <ion-icon ios="ios-plane" md="md-plane"></ion-icon>-->\n            Flight\n        </ion-option>\n        <ion-option value="hotel">Hotel</ion-option>\n        <ion-option value="activity">Activity</ion-option>\n        <ion-option value="restaurant">Restaurant</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="inpt">\n      <ion-label>Title</ion-label>\n      <ion-item *ngIf="op == \'2\'">\n            <ion-select id="hlist" name="hlist" placeholder="Select Hotel" [(ngModel)]="data.hlist" #hlist="ngModel" (ionChange)="hotelSelect(data.hlist)">\n                <ion-option *ngFor="let ht of hotels; let i=index" [value]="ht.Hotel_booking.hname+\'_\'+i">{{ht.Hotel_booking.hname}}</ion-option>                    \n            </ion-select>\n      </ion-item>\n      \n      <ion-item *ngIf="op == \'1\'">\n            <ion-select id="flist" name="flist" placeholder="Select Flight" [(ngModel)]="data.flist" #flist="ngModel" (ionChange)="flightSelect(data.flist)">\n                <ion-option *ngFor="let gl of flights; let i=index" [value]="gl.Booking.airline+\'_\'+i">{{gl.Booking.airline}} ({{gl.Booking.start_location}} to {{gl.Booking.end_location}})</ion-option>                    \n            </ion-select>\n      </ion-item>\n\n      <ion-item no-padding *ngIf="op == \'3\'">         \n        <ion-input type="text" name="activity" [(ngModel)]="data.activity" #activity="ngModel" required></ion-input>\n      </ion-item>\n      \n      <ion-item no-padding *ngIf="op == \'4\'">          \n        <ion-input type="text" name="restaurant" [(ngModel)]="data.restaurant" #restaurant="ngModel" required></ion-input>\n      </ion-item>\n      \n    <div *ngIf="op == \'1\'">\n      <ion-item no-padding>\n        <ion-label stacked>Departure Address</ion-label>        \n        <ion-input type="text" name="dadd" [(ngModel)]="data.dadd" #dadd="ngModel" required></ion-input>        \n      </ion-item>\n\n      <ion-item no-padding>\n          <ion-label stacked>Arrival Address</ion-label>\n          <ion-input type="text" name="aadd" [(ngModel)]="data.aadd" #aadd="ngModel" required></ion-input> \n        </ion-item>\n  </div>\n      \n      <div *ngIf="op == \'2\' || op == \'3\' || op == \'4\'">\n      <ion-item no-padding>\n        <ion-label stacked>Location</ion-label>        \n        <ion-input type="text" name="loc" [(ngModel)]="data.loc" #loc="ngModel" required></ion-input>        \n      </ion-item>\n      </div>\n      \n      <ion-item (click)="openCalendar()">\n          <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                <ion-label class="datetimez" *ngIf="eventdate == \'\'">Event Date</ion-label>\n                <ion-label class="datetimez" *ngIf="eventdate != \'\'">{{eventdate}}</ion-label>\n        </ion-item>\n      \n  </ion-list>\n\n  <div class="date_sec">\n      <ion-list>\n          \n        <ion-item no-padding>\n            <ion-label stacked>Departure Time</ion-label>\n            <ion-datetime name="dateStarts" displayFormat="h:mm A" pickerFormat="h mm a" [(ngModel)]="event.dateStarts" id="dateStarts" #dateStarts="ngModel" required></ion-datetime>\n            \n        </ion-item>\n\n        \n        <ion-item no-padding>\n            <ion-label stacked>Arrival Time</ion-label>\n            <ion-datetime name="dateEnds" displayFormat="h:mm A" pickerFormat="h mm a" [(ngModel)]="event.dateEnds" id="dateEnds" #dateEnds="ngModel" required></ion-datetime>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-label stacked>Notes</ion-label>\n            <ion-textarea elastic name="notes" id="notes" [(ngModel)]="data.notes" #notes="ngModel" required></ion-textarea>\n        </ion-item>\n\n        <ion-item no-padding>\n            <!--<input type="file" (change)="fileUpload($event)" id="file-input" #fileInp>-->\n            <button ion-button (click)="addAttachment()">Add Attachments</button>\n          </ion-item>\n      </ion-list>\n    </div>\n\n    <div class="gallery">\n        <ul>\n          <li *ngFor="let im of sattachments">\n              <img src="{{im}}">\n              <ion-icon ios="ios-close-circle" md="ios-close-circle"></ion-icon>\n          </li>\n\n<!--          <li>\n                <img src="assets/imgs/getstartback.jpeg">\n                <ion-icon ios="ios-close-circle" md="ios-close-circle"></ion-icon>\n            </li>-->\n\n        </ul>\n      </div>\n    <button ion-button small no-margin float-right color="theme" (click)="adddEvent(heroForm)" [disabled]="!heroForm.form.valid">Add Event</button>\n    </form>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/addevent/addevent.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], AddeventPage);
    return AddeventPage;
}());

//# sourceMappingURL=addevent.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(7);
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
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitePage = (function () {
    function InvitePage(navCtrl, navParams, socialSharing, http, common, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = {
            userr: ''
        };
        this.destination = localStorage.getItem('destination');
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');
        this.recentTravel();
    }
    InvitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitePage');
    };
    InvitePage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    InvitePage.prototype.recentTravel = function () {
        var _this = this;
        console.log('recent');
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'trips/recenttravelfrd', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.recentfrnds = data.data;
                console.log(_this.recentfrnds);
            }
            else {
            }
        }, function (error) {
        });
    };
    InvitePage.prototype.search = function (keys) {
        var _this = this;
        console.log("dxd");
        this.code = keys;
        console.log(this.code);
        /*var Loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        showBackdrop: false,
        cssClass: 'loader'
      });*/
        var options = this.common.options;
        var data_form = {
            code: this.code,
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        //Loading.present().then(() => {
        this.http.post(this.common.base_url + 'users/namesearch', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //Loading.dismiss();
            console.log(data);
            if (data.status == 0) {
                _this.user = data.data;
                console.log(_this.user);
            }
            else {
                /*let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();*/
            }
        }, function (error) {
            //Loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "Check your Network Connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
        //});
    };
    InvitePage.prototype.chooseItem = function (i_user, i_id) {
        console.log(i_user);
        console.log(i_id);
        this.fid = i_id;
        this.user = [];
        this.data.userr = i_user;
    };
    InvitePage.prototype.sendInvite = function (searchu) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            frd_id: this.fid,
            trip_id: this.trip_id,
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'invites/invitefrd', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    //this.user = data.data;
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    //console.log(this.user);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    InvitePage.prototype.fb = function () {
        this.socialSharing.shareViaFacebook('hi', 'image', 'url')
            .then(function () {
            // alert('Sharing via fb is possible'); 
        }).catch(function () {
            //alert('Sharing via fb is not possible');      
        });
    };
    InvitePage.prototype.twitter = function () {
        this.socialSharing.shareViaTwitter('hi', 'image', 'url')
            .then(function () {
            // alert('Sharing via twitter is possible'); 
        }).catch(function () {
            //alert('Sharing via twitter is not possible');      
        });
    };
    InvitePage.prototype.msging = function () {
        this.socialSharing.shareViaSMS('hi', '')
            .then(function () {
            // alert('Message sent'); 
        }).catch(function () {
            // alert('Sharing via msging is not possible');      
        });
    };
    InvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invite',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/invite/invite.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Invite</ion-title>\n    </ion-navbar>\n</ion-header>\n  \n\n\n<ion-content padding class="invite">\n  <h3>Who\'s coming to {{destination}}</h3>\n  <div class="subhead">Recent Travel Friends</div>\n  <ion-scroll scrollX="true" padding *ngIf="!recentfrnds">\n              <p>No Recent Friends Yet</p>\n    </ion-scroll>\n  <ion-scroll scrollX="true" padding *ngIf="recentfrnds">\n			<ion-card *ngFor="let rfrnds of recentfrnds">\n				<div class="product-img">\n					<img *ngIf="rfrnds.user.image" src="{{rfrnds.user.image}}">\n                                        <img *ngIf="!rfrnds.user.image" src="assets/imgs/user.png">\n				</div>\n                                    <span>{{rfrnds.user.name}}</span>\n			</ion-card>\n	\n	\n		\n    </ion-scroll>\n    <div class="subhead" style="margin: 30px 0 15px;">Search Grouptrip</div>\n    <form #searchu="ngForm">\n    <ion-list class="list-bottom">\n<!--        <ion-label fixed>  <ion-icon name="person"></ion-icon></ion-label>-->\n          <ion-item style="border: 1px solid #ccc;border-radius: 3px;padding: 0 5px;">\n            <ion-input type="text" name="userr" id="userr" [(ngModel)]="data.userr" (input)="search(data.userr)" #userr="ngModel" required></ion-input>            \n          </ion-item>\n                \n        <ion-item *ngFor="let us of user" (click)="chooseItem(us.User.name,us.User.id)">                        \n            \n            <ion-avatar item-start>          \n                <img *ngIf="us.User.image" src="{{us.User.image}}">\n						\n                <img *ngIf="!us.User.image" src="assets/imgs/user.png">\n            </ion-avatar>\n            {{ us.User.name }} \n        </ion-item>\n        \n          <button ion-button small no-margin color="theme" (click)="sendInvite(searchu)" [disabled]="!searchu.form.valid">Send Invite</button>\n          \n         \n    </ion-list>\n    </form>\n<span class="or">or send link via</span>\n    <div class="social">\n        <button class="a" (click)="fb()"><ion-icon>f</ion-icon></button>\n        <button class="a" (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n        <button class="a" (click)="msging()"> <ion-icon ios="ios-chatbubbles" ios="ios-chatbubbles"></ion-icon></button>\n      </div>\n    \n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/invite/invite.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], InvitePage);
    return InvitePage;
}());

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editphoto_editphoto__ = __webpack_require__(66);
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
 * Generated class for the LocalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalityPage = (function () {
    function LocalityPage(navCtrl, navParams, http, alertCtrl, geolocation, nativeGeocoder, common, toastCtrl, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.get = this.navParams.get('locationpage');
        console.log(this.get);
        this.trip_id = localStorage.getItem('TripID');
    }
    LocalityPage.prototype.back = function () {
        //this.navCtrl.push(EditphotoPage);
        this.viewCtrl.dismiss({});
    };
    LocalityPage.prototype.backData = function () {
        // console.log(location);
        /*this.navCtrl.push(EditphotoPage,{
            location: location
        });*/
        var _this = this;
        if (this.location == undefined) {
            var toast = this.toastCtrl.create({
                message: "Select any Location",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var options = this.common.options;
            var data_form = {
                image_id: this.get.Gallery.id,
                trip_id: this.trip_id,
                location: this.location
            };
            console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            console.log(Serialized);
            Loading.present().then(function () {
                _this.http.post(_this.common.base_url + 'galleries/gallerylocation', Serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    Loading.dismiss();
                    if (data.status == 0) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__editphoto_editphoto__["a" /* EditphotoPage */], {
                            location: data.data[0].Gallery.location,
                            send: data.data[0]
                        });
                        /*let toast = this.toastCtrl.create({
                          message: data.msg,
                          duration: 3000,
                          position: 'middle'
                        });
                        toast.present();*/
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (error) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your Network Connection",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                });
            });
        }
    };
    //  dismiss(){
    //    this.viewCtrl.dismiss({});
    //  }
    LocalityPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    LocalityPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                    console.log(self.autocompleteItems);
                    console.log();
                });
            }
        });
    };
    LocalityPage.prototype.chooseItem = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.autocomplete.query + '&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            console.log('here');
            console.log(data.results[0].geometry.location);
            console.log('addresss:' + data.results[0].formatted_address);
            _this.location = data.results[0].formatted_address;
            // this.lat = data.results[0].geometry.location.lat;
            // this.long = data.results[0].geometry.location.lng;
            _this.autocomplete.location = data.results[0].geometry.location;
        });
    };
    LocalityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalityPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LocalityPage.prototype, "mapElement", void 0);
    LocalityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-locality',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/locality/locality.html"*/`\n<ion-header>\n    <ion-toolbar color="theme">\n      <ion-title class="header_title" color="text">Locality</ion-title>\n     <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-buttons end (click)="backData()">\n      <button ion-button clear>\n        Save\n      </button>\n    </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n	<ion-searchbar \n    [(ngModel)]="autocomplete.query" \n    [showCancelButton]="true" \n    (ionInput)="updateSearch()" \n    (ionCancel)="dismiss()"\n    placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="chooseItem(item)">\n      {{item.description}}\n      </ion-item>\n      </ion-list>\n    \n</ion-content>\n\n\n                                          \n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/locality/locality.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], LocalityPage);
    return LocalityPage;
}());

//# sourceMappingURL=locality.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flightdetail_flightdetail__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__thankyou_thankyou__ = __webpack_require__(69);
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
 * Generated class for the FlightformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlightformPage = (function () {
    function FlightformPage(navCtrl, navParams, http, common, iab, toastCtrl, modalCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = {
            dob: '',
            passdob: '',
            ccode: '',
            phone: '',
            mail: '',
            ptype: '',
            title: '',
            fname: '',
            lname: '',
            scountry: '',
            pno: '',
            pcountry: ''
        };
        this.countries = [];
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]('en-US');
        this.codes = [];
        this.countrylist();
        this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.minDate);
        this.get = this.navParams.get('send');
        if (this.get) {
            this.flight = this.get.flight;
            console.log(this.flight);
            this.item = this.get.item;
            this.trackid = this.get.trackid;
            this.send = this.get.get;
            this.price = this.get.price;
            this.request = this.get.request;
        }
        /*this.requestId = this.navParams.get('requestId');
        console.log(this.requestId);*/
        this.phonecodeList();
    }
    FlightformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlightformPage');
    };
    FlightformPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__flightdetail_flightdetail__["a" /* FlightdetailPage */], {
            send: this.send
        });
    };
    FlightformPage.prototype.phonecodeList = function () {
        var _this = this;
        var options = this.common.options;
        this.http.get(this.common.base_url + 'users/phone_code', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.codes = data.data;
                console.log(_this.codes);
            }
            else if (data.status == 1) {
            }
        }, function (error) {
        });
    };
    FlightformPage.prototype.codeSelect = function (code) {
        console.log(code);
    };
    FlightformPage.prototype.countrylist = function () {
        var _this = this;
        var options = this.common.options;
        this.http.get(this.common.base_url + 'users/country', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.countries = data.data;
                console.log(_this.countries);
            }
            else if (data.status == 1) {
                var toast = _this.toastCtrl.create({
                    message: "Enter the city name",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
        });
    };
    FlightformPage.prototype.dcountrySelect = function (type, keys) {
        var _this = this;
        console.log(keys);
        if (type == 'Nationality') {
            var options = this.common.options;
            var data_form = {
                code: keys
            };
            console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            console.log(Serialized);
            this.http.post(this.common.base_url + 'users/countrysearch', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    _this.nationalityCountry = data.data[0].Countrycode.iso_code_2;
                    console.log(_this.nationalityCountry);
                }
                else {
                }
            }, function (error) {
            });
        }
        else if (type == 'passissuecountry') {
            var options = this.common.options;
            var data_form = {
                code: keys
            };
            console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            console.log(Serialized);
            this.http.post(this.common.base_url + 'users/countrysearch', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    _this.passissuecountry = data.data[0].Countrycode.iso_code_2;
                    console.log(_this.passissuecountry);
                }
                else {
                }
            }, function (error) {
            });
        }
    };
    FlightformPage.prototype.openCalendar = function (mssgg) {
        var _this = this;
        console.log(mssgg);
        if (mssgg == 'dob') {
            var options = {
                title: 'Calendar',
                from: new Date(1930),
                to: 0
            };
            var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModal"], {
                options: options
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date, type) {
                if (date) {
                    _this.data.dob = date.string;
                    console.log(_this.data.dob);
                }
            });
        }
        else if (mssgg == 'passdob') {
            var options = {
                title: 'Calendar',
            };
            var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModal"], {
                options: options
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date, type) {
                if (date) {
                    _this.data.passdob = date.string;
                    console.log(_this.data.passdob);
                }
            });
        }
    };
    FlightformPage.prototype.arival = function (detail) {
        var _this = this;
        this.detail = detail;
        var userid = localStorage.getItem('ID');
        var pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        this.pdata = {
            type: 'Flight',
            user_id: userid,
            //            price: this.price,
            price: '2',
            from: this.flight.FlightDetails[0].DepartureDateTime,
            to: this.flight.FlightDetails[0].ArrivalDateTime,
            created: pDate,
            flight: this.flight.FlightDetails[0].FlightID,
            origin: this.flight.FlightDetails[0].OriginAirportCity,
            destination: this.flight.FlightDetails[0].DestinationAirportCity,
            city: this.flight.FlightDetails[0].OriginAirportCity,
            country: this.flight.FlightDetails[0].OriginAirportCountry,
            sourcecode: this.flight.FlightDetails[0].Origin,
            destinationcode: this.flight.FlightDetails[0].Destination
        };
        console.log(this.pdata);
        var options = {};
        var target = "_blank";
        var browser = this.iab.create('http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data=' + encodeURIComponent(JSON.stringify(this.pdata)), target, options);
        browser.on('loadstart').subscribe(function (e) {
            var redirect_uri = e.url.split('cess');
            console.log(redirect_uri);
            console.log(redirect_uri[0]);
            if (redirect_uri[0] == 'http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/suc') {
                //alert('close');
                browser.close();
                //               this.navCtrl.push(HotelPage)
                _this.book();
            }
        }, function (err) {
            //alert(JSON.stringify(err));
        });
    };
    FlightformPage.prototype.book = function () {
        var _this = this;
        console.log('book');
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        /*let headers = new Headers();
        headers.append('apikey',  'f391cf76-be55-4');
        headers.append('mode',  'sandbox');
        headers.append('Content-Type',  'application/json');
        this.optionss= new RequestOptions({ headers: headers });
    
        var data_form = {
            TrackId: this.trackid,
             ItinearyDetails: {
                Segments: [ {
                    ValidatingCarrier: this.flight.ValidatingCarrier,
                    Price: this.flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
                    item: this.item
                }
                ]
                }
            }
         
        console.log(data_form);
        
        this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/look', data_form, this.optionss)
          .map(res => res.json())
          .subscribe(data => {
            console.log(data);
    
            if (data.Message == 'success') {
                
              let sellrequest = data.SellRequestId;*/
        console.log(this.detail.value);
        var ddatee = this.data.passdob.split("-");
        var ddateee = this.data.dob.split("-");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            sellRequestId: this.request,
            customer: {
                PhoneNumber: this.detail.value.phone,
                CountryCode: this.detail.value.ccode,
                Email: this.detail.value.mail,
                CustomerDetails: [{
                        PassengerType: this.detail.value.ptype,
                        Title: this.detail.value.title,
                        FirstName: this.detail.value.fname,
                        LastName: this.detail.value.lname,
                        NationalityCountry: this.nationalityCountry,
                        DOB: { Day: ddateee[2], Month: ddateee[1], Year: ddateee[0] },
                        PassportNumber: this.detail.value.pno,
                        IssueCountry: this.passissuecountry,
                        PassportExpiryDay: ddatee[2],
                        PassportExpiryMonth: ddatee[1],
                        PassportExpiryYear: ddatee[0]
                    }]
            }
        };
        console.log(data_form);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/price', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                //if (data.Message == 'success') {
                if (data.IsTicketSuccess == true) {
                    _this.bstatus = data.IsTicketSuccess;
                    _this.link = data.ReferralLink;
                    //alert('success');
                    _this.dbFlight();
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else if (data.IsTicketSuccess == false) {
                    var toast = _this.toastCtrl.create({
                        message: data.Message,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
            //        } else {
            //         
            //        }
            //      }, error => {
            //        
            //    });
        });
    };
    FlightformPage.prototype.dbFlight = function () {
        var _this = this;
        console.log('dbFlight');
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var userid = localStorage.getItem('ID');
        var pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        var data_form = {
            user_id: userid,
            start_date: this.flight.FlightDetails[0].DepartureDateTime,
            last_date: this.flight.FlightDetails[0].ArrivalDateTime,
            flight: this.flight.FlightDetails[0].FlightID,
            hotel: 'test',
            start_location: this.flight.FlightDetails[0].OriginAirportCity,
            end_location: this.flight.FlightDetails[0].DestinationAirportCity,
            airline: this.flight.FlightDetails[0].AirlineName,
            status: this.bstatus,
            booking_id: this.link,
            amount: this.price,
            //            amount: '2',  
            sourcecode: this.flight.FlightDetails[0].Origin,
            destination_code: this.flight.FlightDetails[0].Destination
        };
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'bookings/flightbooking', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.fid = data.data.Booking.id;
                    console.log(_this.fid);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__thankyou_thankyou__["a" /* ThankyouPage */], {
                        fid: _this.fid
                    });
                    var toast = _this.toastCtrl.create({
                        message: 'Flight Booked successfully',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Check your Network Connection',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    FlightformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flightform',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/flightform/flightform.html"*/`<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Flight</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n\n<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Flight</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <h3 class="subhead">Please Enter Your Detais Below:</h3>\n  <form #detailForm="ngForm">\n    <ion-list class="frm">\n\n<!--          <ion-item class="space" style="border-right: 1px solid #f1f1f1 !important;">\n              <ion-input type="number" name="ccode" [(ngModel)]="data.ccode" id="ccode" #ccode="ngModel" placeholder="Country Code" required></ion-input>\n          </ion-item>-->\n        \n        <ion-item class="space" style="border-right: 1px solid #f1f1f1 !important;">\n        <!--<ion-input type="text" placeholder="Country code" name="countrycode" [(ngModel)]="data.countrycode" id="countrycode" #countrycode="ngModel" required></ion-input>-->\n        <ion-select name="ccode" placeholder="Country code" [(ngModel)]="data.ccode" (ionChange)="codeSelect($event)" required>\n                <ion-option *ngFor="let cd of codes" value="{{cd.Phonecode.phonecode}}">{{cd.Phonecode.phonecode}} ({{cd.Phonecode.nicename}})</ion-option>                    \n        </ion-select>\n    </ion-item>\n        \n<!--            <ion-label class="alert alert-danger" color="danger">\n                <div *ngIf="ccode.errors && (ccode.dirty || ccode.touched)">\n                    <div [hidden]="!ccode.errors.required">\n                          Country Code is required\n                    </div>                 \n                  </div>\n            </ion-label>-->\n        \n          <ion-item class="space">\n              <ion-input type="number" name="phone" [(ngModel)]="data.phone" id="phone" #phone="ngModel" placeholder="Phone Number" required></ion-input>            \n          </ion-item>\n\n\n          <ion-item>\n              <ion-input type="email" name="mail" [(ngModel)]="data.mail" id="mail" #mail="ngModel" placeholder="Enter Your Email" required></ion-input>        \n          </ion-item>\n        \n        <ion-item>\n            <ion-select name="ptype" [(ngModel)]="data.ptype" id="ptype" #ptype="ngModel" placeholder="Passenger Type" required>\n                    <ion-option value="ADT" selected="true">Adult</ion-option>\n                    <ion-option value="CNN">Child</ion-option>\n                    <ion-option value="INF">Infant</ion-option>                    \n              </ion-select>\n        </ion-item>\n\n          <ion-item class="in" style="border-right: 1px solid #f1f1f1 !important;">\n              <ion-select name="title" [(ngModel)]="data.title" id="title" #title="ngModel" placeholder="Title" required>\n                    <ion-option value="Mr" selected="true">Mr.</ion-option>\n                    <ion-option value="Mrs">Mrs.</ion-option>\n                    <ion-option value="Miss">Miss.</ion-option>\n                    <ion-option value="Mstr">Mstr.</ion-option>\n                    <ion-option value="Ms">Ms.</ion-option>                    \n              </ion-select>\n          </ion-item>\n\n          <ion-item class="in" style="border-right: 1px solid #f1f1f1 !important;">\n              <ion-input type="text" name="fname" [(ngModel)]="data.fname" id="fname" #fname="ngModel" placeholder="First Name" required></ion-input>        \n          </ion-item>\n\n          <ion-item class="in">\n              <ion-input type="text" name="lname" [(ngModel)]="data.lname" id="lname" #lname="ngModel" placeholder="Last Name" required></ion-input>        \n          </ion-item>\n\n<!--          <ion-item>\n            <ion-input type="mail" placeholder="Enter Your Email"></ion-input>\n          </ion-item>-->\n          \n          <ion-item>\n            <ion-select name="scountry" placeholder="Nationality" [(ngModel)]="data.scountry" (ionChange)="dcountrySelect(\'Nationality\',$event)" required>\n                <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n            </ion-select>\n          </ion-item>\n\n<!--           <ion-item>\n          <ion-datetime name="dob"  displayFormat="MM/DD/YYYY" max="{{minDate}}" [(ngModel)]="data.dob" placeholder="Change Date"\n                      id="dob" #dob="ngModel" required></ion-datetime> \n                 </ion-item>-->\n              <ion-item (click)="openCalendar(\'dob\')">\n                        <ion-label style="color: #a3a3a3;" *ngIf="data.dob == \'\'">Date Of Birth</ion-label>\n                        <ion-label style="color: #000;" *ngIf="data.dob != \'\'">{{data.dob}}</ion-label>\n              </ion-item>\n          \n\n          <ion-item>\n              <ion-input type="text" name="pno" [(ngModel)]="data.pno" id="pno" #pno="ngModel" placeholder="Passport Number" required></ion-input>   \n          </ion-item>\n\n          <ion-item>\n              <ion-select name="pcountry" placeholder="Passport Issuing Country" [(ngModel)]="data.pcountry" (ionChange)="dcountrySelect(\'passissuecountry\',$event)" required>\n                <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n            </ion-select>            \n          </ion-item>\n                     \n            <ion-item (click)="openCalendar(\'passdob\')">\n                        <ion-label style="color: #a3a3a3;" *ngIf="data.passdob == \'\'">Passport Expiry</ion-label>\n                        <ion-label style="color: #000;" *ngIf="data.passdob != \'\'">{{data.passdob}}</ion-label>\n            </ion-item>       \n        <button color="theme" ion-button class="search" (click)="arival(detailForm)" [disabled]="!detailForm.form.valid">Submit</button>\n        </ion-list>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/flightform/flightform.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], FlightformPage);
    return FlightformPage;
}());

//# sourceMappingURL=flightform.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__ = __webpack_require__(69);
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
 * Generated class for the PassengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassengerPage = (function () {
    function PassengerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventz = {};
    }
    PassengerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PassengerPage');
    };
    PassengerPage.prototype.thankyou = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__["a" /* ThankyouPage */]);
    };
    PassengerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-passenger',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/passenger/passenger.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Passenger</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <div class="sum">\n        <h2>Your trip summary</h2>\n        <h1>$367</h1>\n        <span>price for all passengers</span>\n        <span>price and tax information<sup>*include taxes and carrier imposed fees</sup></span>\n      </div>\n\n      <div class="form">\n        <h3>Passenger details</h3>\n        <p>Please enter all passenger names as they appear on the passenger\'s government-issued photo identification.</p>\n          <ion-list>\n\n              <ion-label>First Name</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Middle Name</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Last Name</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n\n                <ion-label>Date of birth</ion-label>\n                <ion-item>\n                    <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="eventz.month" placeholder="Date of birth"></ion-datetime>\n                </ion-item>\n             \n\n                <ion-label>Gender</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Frequent Flyer Program</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Redress Number</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Known Traveler Number</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Country of residence</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              \n                <div class="line"></div>\n\n                <h3>Trip Contact</h3>\n\n                <ion-label>Primary Email</ion-label>\n                <ion-item>\n                  <ion-input type="mail"></ion-input>\n                </ion-item>\n\n                <ion-label>Confirm Primary Email</ion-label>\n                <ion-item>\n                  <ion-input type="mail"></ion-input>\n                </ion-item>\n\n                <ion-label>Primary Phone Type</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Primary Phone</ion-label>\n                <ion-item class="plus">\n                  <ion-input type="number" placeholder="+1"></ion-input>\n                  <ion-input type="number"></ion-input>\n                </ion-item>\n              </ion-list>\n              <button ion-button block color="theme" class="cont" (click)="thankyou();">Continue</button>\n      </div>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/passenger/passenger.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PassengerPage);
    return PassengerPage;
}());

//# sourceMappingURL=passenger.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoteldetail_hoteldetail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thankyou_thankyou__ = __webpack_require__(69);
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
 * Generated class for the HotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelPage = (function () {
    function HotelPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.data = {
            name: "",
            surname: "",
            email: "",
            countrycode: "",
            contact: "",
            age: "",
            title: "",
            pname: "",
            spname: "",
            type: "",
            pcountry: "",
            adults: [],
            childs: [],
        };
        this.passengerDetails = [];
        this.countries = [];
        this.rooms_data = [];
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]('en-US');
        this.bookk = 1;
        this.codes = [];
        this.backk = this.navParams.get('back');
        this.rooms = this.navParams.get('rooms');
        console.log(this.rooms);
        this.hdetail = this.navParams.get('hdetail');
        this.sellrequestid = this.hdetail.sellRequestId;
        var x = this.hdetail.detail.rooms;
        console.log(x);
        for (var i in x) {
            var passenger_details = [];
            var room_id = x[i].roomid;
            var adult_count = 1;
            var child_count = 1;
            for (var j = 0; j < parseInt(x[i].adultCount); j++) {
                passenger_details.push({
                    age: '',
                    title: '',
                    name: '',
                    surname: '',
                    type: 'AD',
                    count: adult_count++,
                });
            }
            for (var j = 0; j < parseInt(x[i].childCount); j++) {
                passenger_details.push({
                    age: '',
                    title: '',
                    name: '',
                    surname: '',
                    type: 'CH',
                    count: child_count++,
                });
            }
            this.rooms_data.push({ roomid: room_id, passengerDetails: passenger_details });
        }
        console.log(this.rooms_data);
        this.countrylist();
        this.phonecodeList();
    }
    HotelPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hoteldetail_hoteldetail__["a" /* HoteldetailPage */], {
            detailed: this.rooms,
            detail: this.backk
        });
    };
    HotelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotelPage');
    };
    HotelPage.prototype.phonecodeList = function () {
        var _this = this;
        var options = this.common.options;
        this.http.get(this.common.base_url + 'users/phone_code', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.codes = data.data;
                console.log(_this.codes);
            }
            else if (data.status == 1) {
            }
        }, function (error) {
        });
    };
    HotelPage.prototype.codeSelect = function (code) {
        console.log(code);
    };
    HotelPage.prototype.countrylist = function () {
        var _this = this;
        var options = this.common.options;
        this.http.get(this.common.base_url + 'users/country', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.countries = data.data;
                console.log(_this.countries);
            }
            else if (data.status == 1) {
                var toast = _this.toastCtrl.create({
                    message: "Enter the city name",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
        });
    };
    HotelPage.prototype.scountrySelect = function (s_c) {
        var _this = this;
        console.log(s_c);
        var options = this.common.options;
        var data_form = {
            code: s_c
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/phonecode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                //        this.codes = data.data;
                //        console.log(this.codes);
                _this.data.countrycode = data.data[0].Phonecode.phonecode;
            }
            else {
            }
        }, function (error) {
        });
        this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.currency = data.data[0].Currencycode.currency_code;
                console.log(_this.currency);
            }
            else {
            }
        }, function (error) {
        });
    };
    HotelPage.prototype.typeSelect = function (type) {
        console.log(type);
    };
    HotelPage.prototype.titleSelect = function (title) {
        console.log(title);
        console.log(this.data.title);
    };
    /*bookHotel(lastForm){
       
        
        
    }*/
    HotelPage.prototype.bookHotel = function (lastForm) {
        var _this = this;
        this.lastForm = lastForm;
        this.bookk = 1;
        console.log(this.rooms_data);
        for (var i = 0; i < this.rooms_data.length; i++) {
            for (var j = 0; j < this.rooms_data[i].passengerDetails.length; j++) {
                if (this.rooms_data[i].passengerDetails[j].age == '' || this.rooms_data[i].passengerDetails[j].name == ''
                    || this.rooms_data[i].passengerDetails[j].surname == '' || this.rooms_data[i].passengerDetails[j].title == '') {
                    this.bookk = 0;
                    var toast = this.toastCtrl.create({
                        message: "Fill the details of each person to continue",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    break;
                }
            }
        }
        if (this.bookk == 1) {
            var userid = localStorage.getItem('ID');
            var pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
            this.pdata = {
                type: 'Hotel',
                user_id: userid,
                //price: this.hdetail.detail.totalprice,
                price: '2',
                from: this.hdetail.detail.checkIn,
                to: this.hdetail.detail.checkOut,
                created: pDate,
                rooms: this.hdetail.detail.rooms.length,
                hname: this.hdetail.detail.name,
                city: this.hdetail.dcity,
                country: this.hdetail.dcountry
            };
            console.log(this.pdata);
            var options = {};
            var target = "_blank";
            var browser_1 = this.iab.create('http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data=' + encodeURIComponent(JSON.stringify(this.pdata)), target, options);
            /*browser.executeScript();
            browser.insertCSS();*/
            //browser.close();
            /*alert(browser);
            alert(JSON.stringify(browser));*/
            browser_1.on('loadstart').subscribe(function (e) {
                var redirect_uri = e.url.split('cess');
                console.log(redirect_uri);
                console.log(redirect_uri[0]);
                //           if(redirect_uri[0] == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/corepay?execution=e2s2'){
                //               redirect_uri[0] = 'http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/suc';
                if (redirect_uri[0] == 'http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/suc') {
                    //alert('close');
                    browser_1.close();
                    //               this.navCtrl.push(HotelPage)
                    _this.book();
                }
                // }
            }, function (err) {
                //alert(JSON.stringify(err));
            });
        }
    };
    HotelPage.prototype.book = function () {
        //alert('book');
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            sellRequestId: this.sellrequestid,
            holder: {
                name: this.lastForm.value.name,
                surname: this.lastForm.value.surname,
                email: this.lastForm.value.email,
                countryCode: this.lastForm.value.countrycode,
                phoneNumber: this.lastForm.value.contact
            },
            rooms: this.rooms_data
        };
        console.log(data_form);
        //alert(JSON.stringify(data_form));
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/issue', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                //alert(JSON.stringify(data));
                if (data.status == 'CONFIRMED') {
                    //alert(JSON.stringify(data));
                    _this.booked = {
                        reference: data.reference,
                        sellRequestId: data.sellRequestId,
                        bookingId: data.bookingId,
                        status: data.status
                    };
                    //alert(JSON.stringify(this.booked));
                    _this.dbHotel();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.ErrorMessage,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    HotelPage.prototype.dbHotel = function () {
        var _this = this;
        //alert('dbHotel');
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        //console.log(this.pdata);
        var userid = localStorage.getItem('ID');
        var pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        var data_form = {
            user_id: userid,
            price: this.hdetail.detail.totalprice,
            //price: '2',
            check_in: this.hdetail.detail.checkIn,
            check_out: this.hdetail.detail.checkOut,
            created: pDate,
            rooms: this.hdetail.detail.rooms.length,
            hname: this.hdetail.detail.name,
            city: this.hdetail.dcity,
            country: this.hdetail.dcountry,
            status: this.booked.status,
            booking_id: this.booked.bookingId
        };
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'bookings/hotel_booking', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                //alert(JSON.stringify(data));
                if (data.status == 0) {
                    _this.id = data.data.Hotel_booking.id;
                    console.log(_this.id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__thankyou_thankyou__["a" /* ThankyouPage */], {
                        id: _this.id
                    });
                    var toast = _this.toastCtrl.create({
                        message: 'Hotel Booked successfully',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                }
            }, function (error) {
                Loading.dismiss();
            });
        });
    };
    HotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hotel',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/hotel/hotel.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Hotel</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="hotel_detail">\n  <ion-list>\n      <ion-item-divider color="light">Room Details</ion-item-divider>\n    <ion-item>\n        Hotel name\n      <ion-note item-end="" class="note">{{hdetail.detail.name}}</ion-note>\n    </ion-item>\n      <div *ngFor="let room of hdetail.detail.rooms; let i=index">\n          <span class="green">Room {{i+1}}</span>\n    <ion-item>\n        Room name\n      <ion-note item-end="" class="note">{{room.roomname}}</ion-note>\n    </ion-item>\n    <ion-item>\n        No of adult\n      <ion-note item-end="" class="note">{{room.adultCount}}</ion-note>\n    </ion-item>\n    <ion-item>\n        No of children\n      <ion-note item-end="" class="note">{{room.childCount}}</ion-note>\n    </ion-item>\n      </div>\n    <ion-item>\n        Amount\n      <ion-note item-end="" class="note">{{hdetail.detail.totalprice}}</ion-note>\n    </ion-item>\n    <ion-item>\n        Check-in-date\n      <ion-note item-end="" class="note">{{hdetail.detail.checkIn  | date: \'MMM d, yyyy\'}}</ion-note>\n    </ion-item>\n    <ion-item>\n        Check-out-date\n      <ion-note item-end="" class="note">{{hdetail.detail.checkOut  | date: \'MMM d, yyyy\'}}</ion-note>\n    </ion-item>\n\n    <ion-item-divider color="light">Lead Passenger Details</ion-item-divider>\n    <form #lastForm="ngForm">\n    <ion-item>\n        <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="data.name" id="name" #name="ngModel" pattern="[a-zA-Z ]+" required></ion-input>\n        \n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="name.errors && (name.dirty || name.touched)">\n                                              <div [hidden]="!name.errors.required">\n                                                Name is required\n                                              </div>\n                                              <div [hidden]="!name.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n                                            </div>\n                                          </ion-label>\n    <ion-item>\n        <ion-input type="text" placeholder="Surname" name="surname" [(ngModel)]="data.surname" id="surname" #surname="ngModel" pattern="[a-zA-Z ]+" required></ion-input>\n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="surname.errors && (surname.dirty || surname.touched)">\n                                              <div [hidden]="!surname.errors.required">\n                                                Surname is required\n                                              </div>\n                                              <div [hidden]="!surname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n                                            </div>\n                                          </ion-label>\n    <ion-item>\n        <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n         <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                              \n           <div [hidden]="!email.errors.required">\n             Email is required\n          </div>\n      <div [hidden]="!email.errors.pattern">\n          In-valid email\n    </div>\n     </div>                                            \n    </ion-label>\n        \n        <ion-item>\n            <ion-select name="pcountry" placeholder="Select Country" [(ngModel)]="data.scountry" (ionChange)="scountrySelect($event)" required>\n                <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n            </ion-select>\n        </ion-item>\n        \n        \n    <ion-item>\n        <!--<ion-input type="text" placeholder="Country code" name="countrycode" [(ngModel)]="data.countrycode" id="countrycode" #countrycode="ngModel" required></ion-input>-->\n        <ion-select name="countrycode" placeholder="Select Country code" [(ngModel)]="data.countrycode" (ionChange)="codeSelect($event)" required>\n                <ion-option *ngFor="let cd of codes" value="{{cd.Phonecode.phonecode}}">{{cd.Phonecode.phonecode}} ({{cd.Phonecode.nicename}})</ion-option>                    \n        </ion-select>\n    </ion-item>\n        \n<!--    <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="countrycode.errors && (countrycode.dirty || countrycode.touched)">\n						<div [hidden]="!countrycode.errors.required">\n							Country code is required\n						</div>						\n					</div>\n				</ion-label>-->\n        \n    <ion-item>\n        <ion-input type="tel" placeholder="Phone number" name="contact" [(ngModel)]="data.contact" id="contact" #contact="ngModel" pattern=\'[0-9]+\' minlength="10" maxlength="10" required></ion-input>\n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="contact.errors && (contact.dirty || contact.touched)">\n						<div [hidden]="!contact.errors.required">\n							Contact Number is required\n						</div>\n						<div [hidden]="!contact.errors.pattern">\n							Invalid Format\n						</div>\n						<div [hidden]="!contact.errors.maxlength">\n							Maximum 10 number\n						</div>\n						<div [hidden]="!contact.errors.minlength">\n							Minimum 10 number\n						</div>\n					</div>\n				</ion-label>\n\n    <ion-item-divider color="light">Other Passenger Details</ion-item-divider>\n    <div *ngFor="let room of rooms_data; let i=index">\n        <span style="padding: 0 8px;" class="green">Room {{i+1}}</span>\n        <div *ngIf="room.passengerDetails.length != \'0\'">\n            <div *ngFor="let pass_detail of room.passengerDetails; let j= index">\n                <div *ngIf="room.passengerDetails[j].type==\'AD\'">\n                    <span style="padding: 0 8px;" class="green">Details of Adult {{room.passengerDetails[j].count}}</span>\n                    <ion-list class="extras">\n                    <ion-item>                       \n                                                \n                        <ion-input type="number" placeholder="Age" name="age{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].age" id="age" #age="ngModel" required></ion-input>\n                    \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="age.errors && (age.dirty || age.touched)">\n						<div [hidden]="!age.errors.required">\n							Age is required\n						</div>\n						<div [hidden]="!age.errors.type">\n							Invalid Format\n						</div>						\n					</div>\n				</ion-label>-->\n                        </ion-item>\n                        <ion-item> \n                        \n                        <ion-select name="title{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].title" id="title" #title="ngModel" placeholder="Title" required>\n                        <ion-option value="Mr." selected="true">Mr.</ion-option>\n                        <ion-option value="Mrs.">Mrs.</ion-option>\n                        </ion-select>\n                        \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="title.errors && (title.dirty || title.touched)">\n						<div [hidden]="!title.errors.required">\n							Title is required\n						</div>                                            \n					</div>\n				</ion-label>-->\n                        </ion-item>\n                    <ion-item> \n                        <ion-input type="text" placeholder="Name" name="name{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].name" id="name" #name="ngModel" pattern="[a-zA-Z ]+" required></ion-input>                        \n                   \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="name.errors && (name.dirty || name.touched)">\n						\n                                            <div [hidden]="!name.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>-->\n                         </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Surname" name="surname{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].surname" id="surname" #surname="ngModel" pattern="[a-zA-Z ]+" required></ion-input>\n                       \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="surname.errors && (surname.dirty || surname.touched)">\n						\n                                            <div [hidden]="!surname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>-->\n                         </ion-item> \n                    </ion-list>\n                </div>\n                \n                \n                \n                <div *ngIf="room.passengerDetails[j].type==\'CH\'">\n                    <span style="padding: 0 8px;" class="green"> Details of Child {{room.passengerDetails[j].count}}</span>  \n                    <ion-list class="extras">\n                    <ion-item>                        \n                                             \n                        <ion-input type="number" placeholder="Age" name="age{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].age" id="age" #age="ngModel" required></ion-input>\n                        <!--<ion-input type="text" placeholder="Title" name="title{{j}}" [(ngModel)]="rooms_data[i].passenger_details[j].title" id="title" #title="ngModel" required></ion-input> -->\n                    \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="age.errors && (age.dirty || age.touched)">\n						<div [hidden]="!age.errors.required">\n							Age is required\n						</div>\n						<div [hidden]="!age.errors.type">\n							Invalid Format\n						</div>						\n					</div>\n				</ion-label>-->\n                        </ion-item>\n                    <ion-item>          \n                        <ion-select name="title{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].title" id="title" #title="ngModel" placeholder="Title" required>\n                        <ion-option value="Mstr." selected="true">Mstr.</ion-option>\n                        <ion-option value="Ms.">Ms.</ion-option>\n                        </ion-select>\n                        \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="title.errors && (title.dirty || title.touched)">\n						<div [hidden]="!title.errors.required">\n							Title is required\n						</div>                                            \n					</div>\n				</ion-label>-->\n                        </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Name" name="name{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].name" id="name" #name="ngModel" required></ion-input>                        \n                    \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="name.errors && (name.dirty || name.touched)">\n						\n                                            <div [hidden]="!name.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>-->\n                        </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Surname" name="surname{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].surname" id="surname" #surname="ngModel" required></ion-input>\n                         \n<!--                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="surname.errors && (surname.dirty || surname.touched)">\n						\n                                            <div [hidden]="!surname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>-->\n                        </ion-item>\n                    </ion-list>\n                </div>\n                \n            </div>\n             \n            \n            \n            \n<!--            <div *ngFor="let count of counter[i]; let j=index">\n            <h6>Type {{j}}</h6>\n    <ion-item>        \n        <ion-select name="type" [(ngModel)]="data.adults[i][j].type" (ionChange)="typeSelect($event)">\n                    <ion-option value="AD" selected="true">Adult</ion-option>                    \n        </ion-select>\n    </ion-item>\n            <ion-item>\n        <ion-input type="text" placeholder="Age" name="age" [(ngModel)]="data.adults[i][j].age" id="age" #age="ngModel" required></ion-input>\n    </ion-item>\n    <h6>Title</h6>\n    <ion-item>        \n        <ion-select name="title" [(ngModel)]="data.adults[i][j].title" (ionChange)="titleSelect($event)">\n                    <ion-option value="Mr." selected="true">Mr.</ion-option>\n                    <ion-option value="Mrs.">Mrs.</ion-option>\n        </ion-select>\n    </ion-item>    \n    <ion-item>\n        <ion-input type="text" placeholder="Name" name="pname" [(ngModel)]="data.adults[i][j].pname" id="pname" #pname="ngModel" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="Surname" name="spname" [(ngModel)]="data.adults[i][j].spname" id="spname" #spname="ngModel" required></ion-input>\n    </ion-item>\n        </div>-->\n        </div>\n        \n        \n    \n    \n    </div>\n    <button color="theme" ion-button class="search" (click)="bookHotel(lastForm)" [disabled]="!lastForm.form.valid">Book</button>\n    <!--<button color="theme" ion-button (click)="book()">here</button>-->\n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/hotel/hotel.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HotelPage);
    return HotelPage;
}());

//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_rating__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover__ = __webpack_require__(36);
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
 * Generated class for the MytripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MytripPage = (function () {
    function MytripPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user_id = this.navParams.get('userid');
        console.log(this.user_id);
        this.community = this.navParams.get('community');
        console.log(this.community);
        this.viewTrips();
    }
    MytripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MytripPage');
    };
    MytripPage.prototype.rating = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rating_rating__["a" /* RatingPage */]);
    };
    MytripPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__discover_discover__["a" /* DiscoverPage */], {
            fcommunity: this.community
        });
    };
    MytripPage.prototype.viewTrips = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.user_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/tripdetail', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.status == 0) {
                    _this.trips = data.data;
                    console.log(_this.trips);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "No public Trips",
                        duration: 3000
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    MytripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mytrip',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/mytrip/mytrip.html"*/`<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">My trip</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">My trip</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-list class="card_sec">\n				<ion-item>\n                                    \n                                    <div *ngFor = "let tr of trips">\n							<ion-card>                                                                       \n                                                            <img *ngIf="tr.Trip.image" src="{{tr.Trip.image}}">\n                                                            <img *ngIf="!tr.Trip.image" src="assets/imgs/getstartback.jpeg">\n                                                                     \n								<ion-card-content>\n									<ion-card-title>\n										{{tr.Trip.end_location}}\n									</ion-card-title>\n                                                                    <p>{{tr.Trip.trip_startdate | date: \'MMM d\'}} - {{tr.Trip.trip_enddate | date: \'MMM d, yyyy\'}}</p>\n								</ion-card-content>\n							</ion-card>\n					</div>\n<!--						<ion-card>\n							<img src="assets/imgs/getstartback.jpeg"/>\n							<ion-card-content>\n								<ion-card-title>\n									Nine Inch Nails Live\n								</ion-card-title>\n								<p>Mar 16 - Mar 25, 2017</p>\n							</ion-card-content>\n						</ion-card>-->\n<!--						<ion-card (click)="rating();">\n							<img src="assets/imgs/getstartback.jpeg"/>\n							<ion-card-content>\n								<ion-card-title>\n									Nine Inch Nails Live\n								</ion-card-title>\n								<p>Mar 16 - Mar 25, 2017</p>\n							</ion-card-content>\n						</ion-card>-->\n				</ion-item>\n				\n			</ion-list><!-- Second Case End Here -->\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/mytrip/mytrip.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], MytripPage);
    return MytripPage;
}());

//# sourceMappingURL=mytrip.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the IcommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IcommentsPage = (function () {
    function IcommentsPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {
            ccomment: ''
        };
        this.len = 0;
        this.bit = 0;
        this.comment_count = 0;
        this.likecount = 0;
        this.trip_id = localStorage.getItem('TripID');
        console.log(this.trip_id);
        this.id = localStorage.getItem('ID');
        this.eid = this.navParams.get('etid');
        console.log(this.eid);
        this.viewCard();
        this.commentList();
    }
    IcommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IcommentsPage');
    };
    IcommentsPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    IcommentsPage.prototype.viewCard = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            id: this.eid
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/singleevent', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                if (data.status == 0) {
                    console.log(data);
                    _this.event_title = data.data.Event.title;
                    console.log(_this.event_title);
                    _this.location = data.data.Event.location;
                    console.log(_this.location);
                    _this.likecount = data.data.Eventfavourite.length;
                    console.log(_this.likecount);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    IcommentsPage.prototype.comMent = function (commentForm) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            event_id: this.eid,
            trip_id: this.trip_id,
            comment: commentForm.value.ccomment,
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'bookings/commentonevent', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.data.ccomment = '';
                    _this.commentList();
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    IcommentsPage.prototype.commentList = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            event_id: this.eid,
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'bookings/commentlist', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.comments = data.data;
                    console.log(_this.comments);
                    _this.len = 1;
                    _this.comment_count = _this.comments.length;
                    //            let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();          
                }
                else if (data.status == 1) {
                    _this.len = 0;
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    IcommentsPage.prototype.likeEvent = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            event_id: this.eid,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'bookings/addtofavourite', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.bit = data.bit;
                _this.viewCard();
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                //this.status = data.data.Favourite.status;
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    IcommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-icomments',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/icomments/icomments.html"*/`<!--\n  Generated template for the IcommentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Itinerary</ion-title>\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    \n          <ion-card class="group">\n              \n          <ion-item>\n            <ion-avatar item-start>\n               <img src="assets/imgs/a.png">\n            </ion-avatar>\n            <h2>{{event_title}}</h2>\n            <span>{{location}}</span>\n            <ion-note item-end="" class="note note-ios">\n<!--                <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n                -->\n            \n            <button *ngIf="likecount == \'0\'" (click)="likeEvent()" ion-button clear small>\n                <span *ngIf="likecount != 0">{{likecount}}</span> \n                  <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon>\n                 </button> \n                <button *ngIf="likecount != \'0\'" (click)="likeEvent()" ion-button clear small>\n                    <span *ngIf="likecount != 0">{{likecount}}</span>\n                  <ion-icon ios="ios-heart-outline" md="ios-heart-outline" style="color:#f00;"></ion-icon>\n             </button>\n                \n             <button ion-button clear small>\n                 <span *ngIf="comment_count != 0">{{comment_count}}</span> \n                 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n             </button>\n            </ion-note>\n          </ion-item>\n\n          </ion-card>\n      \n        <ion-list class="coment">\n         <h2 *ngIf="len != \'0\'">Comments:</h2>\n<!--                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/imgs/user.png">\n                  </ion-avatar>\n                   <h2>Joseph</h2>\n                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n                </ion-item>-->\n         \n                <ion-item *ngFor="let com of comments">\n                  <ion-avatar item-start *ngIf="!com.User.image">\n                    <img src="assets/imgs/user.png">\n                  </ion-avatar>\n                    <ion-avatar item-start *ngIf="com.User.image">\n                    <img src="{{com.User.image}}">\n                  </ion-avatar>\n                  <h2>{{com.User.name}}</h2>\n                  <p>{{com.Event_comment.comment}}</p>\n                </ion-item>\n              </ion-list>\n    \n</ion-content>\n\n<ion-footer>\n    <form #commentForm="ngForm">\n        <ion-toolbar>\n                    <ion-input type="text" name="ccomment" [(ngModel)]="data.ccomment" id="ccomment" #ccomment="ngModel" placeholder="Type comment" required></ion-input>\n                        <ion-buttons end>\n                            <button ion-button small no-margin color="theme" (click)="comMent(commentForm)" [disabled]="!commentForm.form.valid">Comment</button>\n                        </ion-buttons>\n                    </ion-toolbar>\n                 </form>\n</ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/icomments/icomments.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], IcommentsPage);
    return IcommentsPage;
}());

//# sourceMappingURL=icomments.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingPage = (function () {
    function BookingPage(navCtrl, navParams, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.trip = 'upcoming';
        this.uflights = [];
        this.uhotels = [];
        this.pflights = [];
        this.photels = [];
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        if (this.trip == 'upcoming') {
            this.upcomingBookings();
        }
        else if (this.trip == 'past') {
            this.pastBookings();
        }
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingPage');
    };
    BookingPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    BookingPage.prototype.upcomingBookings = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'bookings/upcomingbooking', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.uflights = data.data.flight;
                _this.uhotels = data.data.hotel;
            }
            else {
            }
        }, function (error) {
        });
    };
    BookingPage.prototype.pastBookings = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'bookings/pastbooking', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.pflights = data.data.flight;
                _this.photels = data.data.hotel;
            }
            else {
            }
        }, function (error) {
        });
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/booking/booking.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">My Booking</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n    \n </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="page_wrapper">\n        <!-- Ion Segment Button Start Here -->\n        <div class="top_segment-sec" padding>\n          <ion-segment [(ngModel)]="trip">\n            <ion-segment-button  class="segment-button segment-activated" value="upcoming" (click)="upcomingBookings()">\n              Upcoming\n            </ion-segment-button>\n            <ion-segment-button value="past" (click)="pastBookings()">\n              Past\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n        <!-- Ion Segment Button End Here Here -->\n        <div class="bottom_sec" [ngSwitch]="trip">\n        \n          <ion-list *ngSwitchCase="\'upcoming\'">\n            <ion-card *ngFor="let fl of uflights">\n                <ion-item class="bw">\n                    <ion-icon item-start><img src="assets/imgs/plane.png" /></ion-icon>\n                    <div>\n                      <h3>BWI <sub>{{fl.Booking.start_location}}</sub></h3>\n                      <h3>BKK <sub>{{fl.Booking.end_location}}</sub></h3>\n                    </div>\n                    <h2>{{fl.Booking.start_date}} - {{fl.Booking.last_date}}</h2>\n                    <p>Confirmation #:12345678</p>\n                  </ion-item>\n            </ion-card>\n\n            <ion-card *ngFor="let ht of uhotels">\n                <ion-item class="bw city">\n                    <ion-icon item-start><img src="assets/imgs/hotel.png" /></ion-icon>\n                      <h3>{{ht.Hotel_booking.hname}}</h3>\n                      <span>{{ht.Hotel_booking.city}}, {{ht.Hotel_booking.country}}</span>\n                    <h2>{{ht.Hotel_booking.check_in}} - {{ht.Hotel_booking.check_out}}</h2>\n                    <p>Confirmation #:12345678</p>\n                  </ion-item>\n            </ion-card>\n\n<!--            <ion-card>\n             <ion-item class="bw bwb">\n                <div class="plane">\n                <ion-icon item-start style="margin-bottom: 7px;"><img src="assets/imgs/plane.png" /></ion-icon>\n                 <ion-icon item-start><img src="assets/imgs/hotel.png" /></ion-icon>\n                </div>\n                 <div class="hotel">\n                    <h3>BWI <sub>Baltimore</sub></h3>\n                    <h3>BKK <sub>Bangkok</sub></h3>\n                  <h2>8/28/18 - 9/02/18</h2>\n                  <p>Confirmation #:12345678</p>\n                </div>\n              </ion-item>\n            </ion-card>-->\n\n\n          </ion-list><!-- First Case End Here -->\n          \n          <ion-list *ngSwitchCase="\'past\'">\n           <ion-card *ngFor="let fl of pflights">\n                <ion-item class="bw">\n                    <ion-icon item-start><img src="assets/imgs/plane.png" /></ion-icon>\n                    <div>\n                      <h3>BWI <sub>{{fl.Booking.start_location}}</sub></h3>\n                      <h3>BKK <sub>{{fl.Booking.end_location}}</sub></h3>\n                    </div>\n                    <h2>{{fl.Booking.start_date}} - {{fl.Booking.last_date}}</h2>\n                    <p>Confirmation #:12345678</p>\n                  </ion-item>\n            </ion-card>\n\n            <ion-card *ngFor="let ht of photels">\n                <ion-item class="bw city">\n                    <ion-icon item-start><img src="assets/imgs/hotel.png" /></ion-icon>\n                      <h3>{{ht.Hotel_booking.hname}}</h3>\n                      <span>{{ht.Hotel_booking.city}}, {{ht.Hotel_booking.country}}</span>\n                    <h2>{{ht.Hotel_booking.check_in}} - {{ht.Hotel_booking.check_out}}</h2>\n                    <p>Confirmation #:12345678</p>\n                  </ion-item>\n            </ion-card>\n            \n          </ion-list><!-- Second Case End Here -->\n          \n        </div>\n      </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/booking/booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentsPage = (function () {
    function CommentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comments',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/comments/comments.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Comments</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card class="group">\n        <ion-item (click)="comments();">\n          <ion-avatar item-start>\n             <img src="assets/imgs/user.png">\n          </ion-avatar>\n          <h6>12/12/2017</h6>\n          <h2>You Paid</h2>\n          <h2>Melanie <span>$45.00</span></h2>\n          <span>Money for ATVing</span>\n          <ion-note item-end="" class="note note-ios">\n              <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n              <button ion-button clear small>3 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon></button>\n          </ion-note>\n        </ion-item>\n        </ion-card>\n\n        <span class="heart"><ion-icon name="heart"></ion-icon> by melanie and naddia</span>\n\n        <div class="main">\n          <span>Meliane</span>\n          <p no-margin>Thanks for money gift</p>\n          <div class="outer"><div class="pic"><img src="assets/imgs/a.png" /></div></div>\n          <ion-icon name="heart-outline"></ion-icon>\n          \n        </div>\n\n      <ion-footer>\n        <ion-toolbar>\n            <ion-input type="text" placeholder="Username"></ion-input>\n            <ion-buttons end>\n                <button ion-button>Send</button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-footer>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(141);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, http, common, toastCtrl, camera, actionSheetCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = '';
        this.id = localStorage.getItem('ID');
        this.viewProfile();
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    EditprofilePage.prototype.viewProfile = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'users/user', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.user = data.data.User;
                    console.log(_this.user);
                    localStorage.setItem('Userdata', JSON.stringify(data.data.User));
                    localStorage.setItem('DP', _this.user.image);
                    if (_this.user.name == null || _this.user.name == 'undefined' || _this.user.name == '') {
                        _this.user.name = '';
                    }
                    if (_this.user.phone == null || _this.user.phone == '' || _this.user.phone == 'undefined') {
                        _this.user.phone = '';
                    }
                    if (_this.user.email == null || _this.user.email == 'undefined' || _this.user.email == '') {
                        _this.user.email = '';
                    }
                    _this.data = {
                        name: _this.user.name,
                        phone: _this.user.phone,
                        email: _this.user.email,
                    };
                    _this.image = _this.user.image;
                    console.log(_this.image);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    EditprofilePage.prototype.editProfile = function (edit) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            id: this.id,
            name: edit.value.name,
            email: edit.value.email,
            phone: edit.value.phone
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'users/editprofile', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.sucess == 0) {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    localStorage.setItem('Userdata', JSON.stringify(data.data.User));
                    localStorage.setItem('DP', data.data.User.image);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    EditprofilePage.prototype.openActionSheet = function () {
        var _this = this;
        this.id = localStorage.getItem("ID");
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.dpimage = 'data:image/jpeg;base64,' + imageData;
                            _this.dpimage = imageData;
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                showBackdrop: false,
                                cssClass: 'loader'
                            });
                            var data_img = ({
                                id: _this.id,
                                img: _this.dpimage
                            });
                            var serialized_img = _this.common.serializeObj(data_img);
                            console.log(serialized_img);
                            var options = _this.common.options;
                            var url = _this.common.base_url + 'users/saveimage';
                            Loading.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    if (data.isSucess == true) {
                                    }
                                    else if (data.error == 0) {
                                        _this.image = data.img;
                                        localStorage.setItem("DP", _this.dpimage);
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: "Profile Picture has not been uploaded",
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                });
                            }, function (err) {
                                Loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Server not Working,Please Check your Internet Connection and try again!",
                                    duration: 3000
                                });
                                toast.present();
                            });
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.dpimage = 'data:image/jpeg;base64,' + imageData;
                            _this.dpimage = imageData;
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                showBackdrop: false,
                                cssClass: 'loader'
                            });
                            var data_img = ({
                                id: _this.id,
                                img: _this.dpimage
                            });
                            var serialized_img = _this.common.serializeObj(data_img);
                            console.log(serialized_img);
                            var options = _this.common.options;
                            var url = _this.common.base_url + 'users/saveimage';
                            Loading.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    if (data.isSucess == true) {
                                    }
                                    else if (data.error == 0) {
                                        _this.image = data.img;
                                        localStorage.setItem("DP", _this.dpimage);
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                });
                            }, function (error) {
                                Loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Server not Working,Please Check your Internet Connection and try again!",
                                    duration: 3000
                                });
                                toast.present();
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/editprofile/editprofile.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Edit profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="page_wrapper">\n		<div class="top_sec">\n			<div class="avatar_sec">\n				<figure>\n          <!--<img src="{{image}}">-->\n\n          <img *ngIf="image" src="{{image}}">\n						\n					<img *ngIf="!image" src="assets/imgs/user.png">\n				\n        </figure>\n        <div class="camera"> <ion-icon ios="ios-camera" md="ios-camera" (click)="openActionSheet()"></ion-icon></div>\n			</div>\n			\n    </div>\n    <form #edit="ngForm">\n		<div class="bottom_sec">\n      <ion-list>\n        \n          <ion-item>\n            <ion-input type="text" name="name" pattern="[a-zA-Z ]+" [(ngModel)]="data.name" id="name" #name="ngModel" placeholder="Name" required></ion-input>\n            <ion-icon name="create" item-end color="theme"></ion-icon>\n          </ion-item>\n        \n          <ion-item>\n            <ion-input type="tel" name="phone" [(ngModel)]="data.phone" id="phone" #phone="ngModel" pattern=\'[0-9]+\' placeholder="Mobile Number" required></ion-input>\n            <ion-icon name="create" item-end color="theme"></ion-icon>\n          </ion-item>\n\n          <ion-item>\n              <ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Email" required></ion-input>\n              <ion-icon name="create" item-end color="theme"></ion-icon>\n            </ion-item>\n\n        	<button ion-button color="theme" (click)="editProfile(edit)" [disabled]="!edit.form.valid">Save</button>\n        </ion-list>\n    </div>\n  </form>\n	</div>\n</ion-content>`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/editprofile/editprofile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the LikedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LikedPage = (function () {
    function LikedPage(navCtrl, navParams, common, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.viewImages();
    }
    LikedPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.viewImages();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    LikedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LikedPage');
    };
    LikedPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    LikedPage.prototype.viewImages = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'galleries/favouriteslist', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.images = data.data;
                console.log(_this.images);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your Network Connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    LikedPage.prototype.unlikeImage = function (imgid) {
        var _this = this;
        console.log(imgid);
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            image: imgid,
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'galleries/addtofavourite', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.viewImages();
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    LikedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-liked',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/liked/liked.html"*/`<ion-header>\n    <ion-toolbar color="theme">\n      <ion-title class="header_title" color="text">Liked Photos</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <div class="app_usr">\n              <img *ngIf="image" src="{{image}}">\n						\n              <img *ngIf="!image" src="assets/imgs/user.png">\n          </div>\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n    </ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n    <div class="middle">\n        <div class="half" *ngFor="let img of images">\n            <img src="{{img.Gallery.image}}" />\n            <ion-icon ios="ios-heart" md="ios-heart" style="color:#f00;" (click)="unlikeImage(img.Gallery.id)"></ion-icon>\n        </div>\n      </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/liked/liked.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], LikedPage);
    return LikedPage;
}());

//# sourceMappingURL=liked.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacyPage = (function () {
    function PrivacyPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.show();
    }
    PrivacyPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPage');
    };
    PrivacyPage.prototype.show = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            title: 'Privacy & policy'
        };
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'staticpages/staticpage', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.title = data.data.Staticpage.title;
                    _this.showdata = data.data.Staticpage.detail;
                }
                else {
                    Loading.dismiss();
                }
            }, function (error) {
                Loading.dismiss();
            });
        });
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/privacy/privacy.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n            \n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="header_title" color="text">{{title}}</ion-title>\n    \n	</ion-toolbar>\n</ion-header>\n\n<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Privacy</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n<ion-content>\n    \n  <div class="privacy_outer"> \n      {{showdata}}\n\n    <!--<div class="privacy_inner">\n      <h3>Lorem Ipsum</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n      Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n    </div>\n\n    <div class="privacy_inner"><h3>Lorem Ipsum</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n      Lorem Ipsum has <span class="color">been the industry\'s</span> standard dummy text ever since the 1500s,when an unknown printer took a \n      galley of type and scrambled it to make a type specimen book</p>\n      </div>-->\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = (function () {
    function RequestPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.id = localStorage.getItem('ID');
        this.msg = this.navParams.get('message');
        if (this.msg) {
            this.trip_id = this.msg.trip_id;
        }
        this.viewTrip();
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    RequestPage.prototype.viewTrip = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            tripid: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        // alert(JSON.stringify(Serialized));
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/singletrip', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                //alert(JSON.stringify(data));
                if (data.status == 0) {
                    _this.tripcover = data.data.Trip.image;
                    console.log(_this.tripcover);
                    _this.source = data.data.Trip.start_location;
                    console.log(data.data.Trip.end_location);
                    _this.destination = data.data.Trip.end_location;
                    console.log(data.data.Trip.trip_startdate);
                    _this.startdate = data.data.Trip.trip_startdate;
                    console.log(data.data.Trip.trip_enddate);
                    _this.enddate = data.data.Trip.trip_enddate;
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    RequestPage.prototype.rejectTrip = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        //alert(JSON.stringify(Serialized));
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'invites/reject', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    RequestPage.prototype.acceptTrip = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        //alert(JSON.stringify(Serialized));
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'invites/accpect', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    localStorage.setItem('TripID', _this.trip_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__["a" /* AddtripPage */]);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-request',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/request/request.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Request</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>    \n      \n      <img *ngIf="tripcover" src="{{tripcover}}">\n						\n      <img *ngIf="!tripcover" src="assets/imgs/s.jpeg">\n    \n    <ion-card-content>\n      <ion-card-title>\n        Invite\n        </ion-card-title>\n        <ion-list>\n          <ion-item>\n            <ion-label>\n                <span>Source:</span> <ion-note>{{source}}</ion-note>\n            </ion-label>\n              </ion-item>\n            \n            <ion-item>\n            <ion-label>\n              <span>Destination:</span> <ion-note>{{destination}}</ion-note>\n            </ion-label>\n            </ion-item>\n          \n          <ion-item>\n            <ion-label>\n              <span>Trip Start:</span> <ion-note>{{startdate| date: \'MMM d, yyyy\'}}</ion-note>\n            </ion-label>\n           </ion-item>\n            \n            <ion-item>\n            <ion-label>\n              <span>Trip End:</span> <ion-note>{{enddate| date: \'MMM d, yyyy\'}}</ion-note>\n            </ion-label>\n          </ion-item>\n       <div class="btns">\n           <button ion-button clear (click)="acceptTrip()">Accept</button>\n           <button ion-button clear (click)="rejectTrip()">Reject</button>                \n          </div>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.show();
    }
    TermsPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.show = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            title: 'Terms and conditions'
        };
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'staticpages/staticpage', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.title = data.data.Staticpage.title;
                    _this.showdata = data.data.Staticpage.detail;
                }
                else {
                    Loading.dismiss();
                }
            }, function (error) {
                Loading.dismiss();
            });
        });
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/terms/terms.html"*/`<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">{{title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n     \n    <div class="privacy_outer">\n        \n        {{showdata}}\n  \n      <!--<div class="privacy_inner">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </div>\n  \n      <div class="privacy_inner">\n        <p style="font-weight:bold;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n          Lorem Ipsum has <span class="color">been the industry\'s</span> standard dummy text ever since the 1500s,when an unknown printer took a \n          galley of type and scrambled it to make a type specimen book</p>\n      </div>\n\n      <div class="privacy_inner">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n\n      <div class="privacy_inner">\n         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n              Lorem Ipsum has been the industry\'s standard</p>\n      </div>-->\n\n  \n    </div>\n  </ion-content>\n  \n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the UploadedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadedPage = (function () {
    function UploadedPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.trip_id = localStorage.getItem('TripID');
        this.viewallImages();
    }
    UploadedPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.viewallImages();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    UploadedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadedPage');
    };
    UploadedPage.prototype.viewallImages = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        //alert(JSON.stringify(data_form));
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'galleries/viewimage', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                // alert(JSON.stringify(data));
                console.log(data);
                if (data.status == 0) {
                    _this.images = data.data;
                    console.log(_this.images);
                    //alert(JSON.stringify(this.images));
                    //            let toast = this.toastCtrl.create({
                    //              message: "",
                    //              duration: 3000,
                    //              position: 'middle'
                    //            });
                    //            toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "No photos uploaded",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    UploadedPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    UploadedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-uploaded',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/uploaded/uploaded.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Uploaded Photos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="middle">\n\n    <!--<h3 class="city_name">Bankok</h3>-->\n\n    <div class="half" *ngFor="let img of images">\n        <img src="{{img.Gallery.image}}" />\n    </div>\n    <!--<div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>-->\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/uploaded/uploaded.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], UploadedPage);
    return UploadedPage;
}());

//# sourceMappingURL=uploaded.js.map

/***/ }),

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addevent/addevent.module": [
		617,
		34
	],
	"../pages/addtrip/addtrip.module": [
		618,
		33
	],
	"../pages/arival/arival.module": [
		619,
		32
	],
	"../pages/booking/booking.module": [
		620,
		31
	],
	"../pages/comments/comments.module": [
		621,
		30
	],
	"../pages/discover/discover.module": [
		622,
		29
	],
	"../pages/discovertop/discovertop.module": [
		623,
		28
	],
	"../pages/editphoto/editphoto.module": [
		624,
		27
	],
	"../pages/editprofile/editprofile.module": [
		630,
		26
	],
	"../pages/flight/flight.module": [
		625,
		25
	],
	"../pages/flightdetail/flightdetail.module": [
		626,
		24
	],
	"../pages/flightform/flightform.module": [
		627,
		23
	],
	"../pages/galdetail/galdetail.module": [
		628,
		22
	],
	"../pages/gallery/gallery.module": [
		629,
		21
	],
	"../pages/hotel/hotel.module": [
		631,
		20
	],
	"../pages/hoteldetail/hoteldetail.module": [
		632,
		19
	],
	"../pages/icomments/icomments.module": [
		633,
		18
	],
	"../pages/invite/invite.module": [
		634,
		17
	],
	"../pages/invitefriends/invitefriends.module": [
		635,
		16
	],
	"../pages/liked/liked.module": [
		636,
		15
	],
	"../pages/locality/locality.module": [
		637,
		14
	],
	"../pages/location/location.module": [
		638,
		13
	],
	"../pages/mytrip/mytrip.module": [
		639,
		12
	],
	"../pages/passenger/passenger.module": [
		640,
		11
	],
	"../pages/privacy/privacy.module": [
		641,
		10
	],
	"../pages/rating/rating.module": [
		642,
		9
	],
	"../pages/request/request.module": [
		643,
		8
	],
	"../pages/reviewbooking/reviewbooking.module": [
		644,
		7
	],
	"../pages/search/search.module": [
		645,
		6
	],
	"../pages/searchitinerary/searchitinerary.module": [
		646,
		5
	],
	"../pages/splash/splash.module": [
		647,
		4
	],
	"../pages/terms/terms.module": [
		648,
		3
	],
	"../pages/thankyou/thankyou.module": [
		649,
		2
	],
	"../pages/uploaded/uploaded.module": [
		650,
		1
	],
	"../pages/viewactivities/viewactivities.module": [
		651,
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
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_discover__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    //tab5Root = GalleryPage;
    function TabsPage(events) {
        this.events = events;
        this.bit = '0';
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        //tab2Root = AboutPage;
        //tab3Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__discover_discover__["a" /* DiscoverPage */];
        this.bit = localStorage.getItem('bit');
        console.log(this.bit);
        if (__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]) {
            console.log('home');
            this.bit = 1;
        }
    }
    TabsPage.prototype.tabIs = function (tab) {
        var br = tab._btnId.split('-');
        console.log(tab);
        console.log(br);
        console.log(br[2]);
        console.log(br[1]);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="My trips" tabIcon="home"></ion-tab>\n  <!--<ion-tab [root]="tab2Root" tabTitle="Chat" tabIcon="ios-chatbubbles-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Payment" tabIcon="ios-cash"></ion-tab>-->\n  <ion-tab [root]="tab4Root" tabTitle="Discover" tabIcon="globe"></ion-tab>\n  <!--<ion-tab [root]="tab5Root" tabTitle="Gallery" tabIcon="ios-camera-outline"></ion-tab>-->     \n</ion-tabs>`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_invite__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_addevent_addevent__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_trip_my_trip__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__icomments_icomments__ = __webpack_require__(178);
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
 * Generated class for the AddtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtripPage = (function () {
    //  bitt: any = 0;
    function AddtripPage(navCtrl, navParams, events, http, common, toastCtrl, datepipe, loadingCtrl, viewCtrl, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.datepipe = datepipe;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.destination2 = '';
        this.status = 0;
        this.bit = 0;
        this.trip_id = localStorage.getItem('TripID');
        console.log(this.trip_id);
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.viewSingleTrip();
        this.viewAttendees();
        this.event = this.navParams.get('event');
        console.log(this.event);
        this.viewItinerary();
    }
    AddtripPage_1 = AddtripPage;
    AddtripPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */]);
    };
    AddtripPage.prototype.viewTripCover = function () {
        var options = this.common.options;
        this.http.get('https://maps.googleapis.com/maps/api/place/photo?maxheight=400&maxwidth=400&photoreference=' + this.photoreference + '&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            //        if (data.list.length > 0) {
            //         this.day = data.list[0].temp.day;
            //         this.night = data.list[0].temp.night;
            //          console.log('day='+this.day+'&night='+this.night);
            //        }else {
            //                        
            //        }
        }, function (error) {
            console.log(error);
        });
    };
    AddtripPage.prototype.openNext = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_addevent_addevent__["a" /* AddeventPage */], {
            startd: this.startdate,
            endd: this.enddate
        });
    };
    AddtripPage.prototype.comments = function (eid) {
        //console.log(eid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__icomments_icomments__["a" /* IcommentsPage */], {
            etid: eid
        });
    };
    AddtripPage.prototype.edit = function () {
        var edit = {
            bit: 1,
            tripid: this.trip_id,
            send: this.send
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__my_trip_my_trip__["a" /* My_tripPage */], {
            edit: edit
        });
    };
    AddtripPage.prototype.editImage = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.tripimage = 'data:image/jpeg;base64,' + imageData;
                            _this.tripimage = imageData;
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                showBackdrop: false,
                                cssClass: 'loader'
                            });
                            var data_img = ({
                                trip_id: _this.trip_id,
                                img: _this.tripimage
                            });
                            var serialized_img = _this.common.serializeObj(data_img);
                            //alert(JSON.stringify(serialized_img));
                            var options = _this.common.options;
                            var url = _this.common.base_url + 'trips/tripimage';
                            Loading.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    if (data.isSucess == true) {
                                    }
                                    else if (data.error == 0) {
                                        _this.tripcover = data.img;
                                        localStorage.setItem("TripCover", _this.tripimage);
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: "Trip Cover has not been uploaded",
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                });
                            }, function (err) {
                                Loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Server not Working,Please Check your Internet Connection and try again!",
                                    duration: 3000
                                });
                                toast.present();
                            });
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            targetWidth: 500,
                            targetHeight: 500,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.tripimage = 'data:image/jpeg;base64,' + imageData;
                            _this.tripimage = imageData;
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                showBackdrop: false,
                                cssClass: 'loader'
                            });
                            var data_img = ({
                                trip_id: _this.trip_id,
                                img: _this.tripimage
                            });
                            var serialized_img = _this.common.serializeObj(data_img);
                            //alert(JSON.stringify(serialized_img));
                            var options = _this.common.options;
                            var url = _this.common.base_url + 'trips/tripimage';
                            Loading.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    if (data.isSucess == true) {
                                    }
                                    else if (data.error == 0) {
                                        _this.tripcover = data.img;
                                        localStorage.setItem("TripCover", _this.tripimage);
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: "Trip Cover has not been uploaded",
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                });
                            }, function (error) {
                                Loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Server not Working,Please Check your Internet Connection and try again!",
                                    duration: 3000
                                });
                                toast.present();
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    AddtripPage.prototype.viewAttendees = function () {
        //console.log('attendees');
        var _this = this;
        var options = this.common.options;
        var data_form = {
            trip_id: this.trip_id
        };
        //console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        //console.log(Serialized);
        this.http.post(this.common.base_url + 'invites/attendese', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.attendees = data.data;
                //console.log(this.attendees);           
            }
            else {
                _this.status = data.status;
            }
        }, function (error) {
        });
    };
    AddtripPage.prototype.weather = function () {
        var _this = this;
        var options = this.common.options;
        //http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.destination+'&appid=7756a5add72128537d61c8fccb203817&units=metric
        //http://api.openweathermap.org/data/2.5/weather?q=Toronto,Canada&units=metric&lang=en&appid=e5f927c07f432e0ecace59d75c482af3
        this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.destination + '&appid=7756a5add72128537d61c8fccb203817&units=metric', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data);
            if (data.list.length > 0) {
                _this.day = data.list[0].temp.day;
                _this.night = data.list[0].temp.night;
                console.log('day=' + _this.day + '&night=' + _this.night);
            }
            else {
            }
        }, function (error) {
        });
    };
    AddtripPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        //console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        //console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                //console.log(this.image);   
            }
            else {
            }
        }, function (error) {
        });
    };
    AddtripPage.prototype.itinerary = function () {
        this.navCtrl.push(AddtripPage_1);
    };
    //
    //  payments(){
    //    
    //  }
    AddtripPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    AddtripPage.prototype.gallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__gallery_gallery__["a" /* GalleryPage */]);
    };
    AddtripPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    AddtripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddtripPage');
    };
    AddtripPage.prototype.invite = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invite_invite__["a" /* InvitePage */]);
    };
    AddtripPage.prototype.location = function (get) {
        var _this = this;
        if (get == this.destination) {
            var keys = get.substring(get.lastIndexOf(' ') + 1);
            //console.log(keys);
            var options = this.common.options;
            var data_form = {
                code: keys
            };
            //console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            //console.log(Serialized);
            this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    _this.currency = data.data[0].Currencycode.currency_code;
                    //console.log(this.currency);
                    var tosend = {
                        currency: _this.currency,
                        fromDate: _this.send.trip_startdate,
                        toDate: _this.send.trip_enddate,
                        destination: get
                    };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */], {
                        send: tosend
                    });
                }
                else {
                }
            }, function (error) {
            });
        }
        else if (get == this.destination2) {
            var keys = get.substring(get.lastIndexOf(' ') + 1);
            //console.log(keys);
            var options = this.common.options;
            var data_form = {
                code: keys
            };
            //console.log(data_form);
            var Serialized = this.common.serializeObj(data_form);
            //console.log(Serialized);
            this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == 0) {
                    _this.currency = data.data[0].Currencycode.currency_code;
                    //console.log(this.currency);
                    var tosend = {
                        currency: _this.currency,
                        fromDate: _this.send.trip_startdate1,
                        toDate: _this.send.trip_enddate1,
                        destination: get
                    };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */], {
                        send: tosend
                    });
                }
                else {
                }
            }, function (error) {
            });
        }
    };
    AddtripPage.prototype.viewSingleTrip = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            tripid: this.trip_id
        };
        //console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        // console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/singletrip', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.tripcover = data.data.Trip.image;
                    //console.log(this.tripcover);
                    _this.send = data.data.Trip;
                    //console.log(data.data.Trip.end_location);
                    _this.photoreference = data.data.Trip.start_location;
                    _this.destination = data.data.Trip.end_location;
                    if (data.data.Trip.end_location1) {
                        _this.destination2 = data.data.Trip.end_location1;
                        //console.log(this.destination2);
                    }
                    localStorage.setItem('destination', _this.destination);
                    //console.log(data.data.Trip.trip_startdate);
                    _this.startdate = data.data.Trip.trip_startdate;
                    //console.log(data.data.Trip.trip_enddate);
                    _this.enddate = data.data.Trip.trip_enddate;
                    _this.weather();
                    _this.viewTripCover();
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    AddtripPage.prototype.viewItinerary = function () {
        //    var Loading = this.loadingCtrl.create({
        //      spinner: 'bubbles',
        //      showBackdrop: false,
        //      cssClass: 'loader'
        //    });
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        //console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        //console.log(Serialized);
        //    Loading.present().then(() => {
        this.http.post(this.common.base_url + 'trips/eventlist', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //        Loading.dismiss();
            if (data.status == 0) {
                console.log(data);
                _this.eventss = data.data;
                //console.log(this.eventss);
                //          let toast = this.toastCtrl.create({
                //            message: data.msg,
                //            duration: 3000,
                //            position: 'middle'
                //          });
                //          toast.present();
            }
            else {
                //          let toast = this.toastCtrl.create({
                //            message: data.msg,
                //            duration: 3000,
                //            position: 'middle'
                //          });
                //          toast.present();
            }
        }, function (error) {
            //        Loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "Check your Network Connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
        //    });
    };
    AddtripPage.prototype.likeItinerary = function (eid) {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            event_id: eid,
            trip_id: this.trip_id
        };
        //console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        //console.log(Serialized);
        this.http.post(this.common.base_url + 'bookings/addtofavourite', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                //            this.bitt = data.bit;
                _this.viewItinerary();
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                //this.status = data.data.Favourite.status;
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    AddtripPage = AddtripPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addtrip',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/addtrip/addtrip.html"*/`<!--<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Add Trips</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Trip Detail</ion-title>\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    <!--<openweathermap [options]="options"></openweathermap>-->\n  <div class="card-background-page">\n    <ion-card no-margin>\n    <button ion-button color="light" clear (click)="editImage()" style="z-index: 9;"><ion-icon ios="ios-camera" md="md-camera"></ion-icon></button>\n    \n    <img *ngIf="tripcover" src="{{tripcover}}">\n    <img *ngIf="!tripcover" src="assets/imgs/getstartback.jpeg">\n    \n    <!--<img src="assets/imgs/getstartback.jpeg"/>-->\n    <div class="cardtitle">\n        <div class="card-subtitleb" *ngIf="destination2 != \'\'">Vacation starts in</div>\n        <div class="card-title">{{destination}}</div>\n        <div class="card-subtitle">{{startdate | date: \'MMM d\'}} - {{enddate | date: \'MMM d, yyyy\'}}</div>\n    </div>\n    <button ion-button color="light" clear (click)="edit()"><ion-icon ios="md-create" md="md-create"></ion-icon> Edit</button>\n    <div class="overlay"></div>\n    </ion-card>\n  </div>\n\n  <div padding class="attend">\n    <ion-list>\n\n      <h6 no-margin class="subhead">ATTENDEES</h6>\n      <div *ngIf="status == \'0\'">\n      <ion-item no-padding>\n        <ion-avatar item-start *ngFor="let att of attendees">          \n          <img *ngIf="att.User.image" src="{{att.User.image}}">\n          <img *ngIf="!att.User.image" src="assets/imgs/user.png">\n        </ion-avatar>\n      </ion-item>\n      </div>\n      <div *ngIf="status == \'1\'">\n      <ion-item no-padding>\n        <p>No Attendees Yet</p>\n      </ion-item>\n      </div>\n      <button ion-button small no-margin color="theme" (click)="invite()">Invite</button>\n   \n\n    <h6 class="subhead">ITINERARY</h6>\n    <ion-item no-padding class="itin">\n          <span>{{startdate | date: \'EEEE MMM d\'}}</span>          \n        <ion-icon ios="ios-cloudy-night-outline" md="ios-cloudy-night-outline" item-end><span>{{day}}<sup>&#9675;</sup></span></ion-icon>\n        <ion-icon ios="ios-partly-sunny-outline" md="ios-partly-sunny-outline" item-end><span>{{night}}<sup>&#9675;</sup></span></ion-icon>\n      </ion-item>\n      <h5>Location:<button color="theme" (click)="location(destination)">{{destination}} |</button><button color="theme" (click)="location(destination2)">{{destination2}}</button></h5>\n      <p>Who\'s ready for some fun? Click the teal button to add to your Itinerary</p>\n  </ion-list>\n\n  </div>\n    <ion-list>\n        <ion-card class="group" *ngFor="let et of eventss">\n            <span class="time">{{et.Event.d_time}}</span>\n          <ion-item>\n            <ion-avatar item-start>\n               <img src="assets/imgs/a.png">\n            </ion-avatar>\n            \n            <h2>{{et.Event.title}}</h2>\n           \n            <span>{{destination}}</span>\n            <ion-note item-end="" class="note note-ios">\n<!--                <button ion-button clear small (click)="likeItinerary()">2 \n                        <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon>\n                </button>-->\n                \n                <button *ngIf="et.likecount == \'0\'" (click)="likeItinerary(et.Event.id)" ion-button clear small>\n                    <span *ngIf="et.likecount != \'0\'">{{et.likecount}}</span>\n                  <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon>\n                 </button> \n                <button *ngIf="et.likecount != \'0\'" (click)="likeItinerary(et.Event.id)" ion-button clear small>\n                    <span *ngIf="et.likecount != \'0\'">{{et.likecount}}</span>\n                  <ion-icon ios="ios-heart-outline" md="ios-heart-outline" style="color:#f00;"></ion-icon>\n             </button>\n                \n                \n                <button ion-button clear small (click)="comments(et.Event.id)">\n                        <span *ngIf="et.commentcount != 0">{{et.commentcount}}</span> \n                    <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n                </button>\n            </ion-note>\n          </ion-item>\n\n          </ion-card>\n    </ion-list>\n    \n  <ion-fab bottom right edge>\n    <button ion-fab mini color="theme" (click)="openNext()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n</ion-content>\n<ion-footer>\n  <a href="#" (click)="itinerary()" class="active"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <!--<a href="#" (click)="payments()"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>-->\n  <a href="#" (click)="gallery()"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>  \n</ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/addtrip/addtrip.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]])
    ], AddtripPage);
    return AddtripPage;
    var AddtripPage_1;
}());

//# sourceMappingURL=addtrip.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galdetail_galdetail__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewactivities_viewactivities__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flight_flight__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mytrip_mytrip__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchitinerary_searchitinerary__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__discovertop_discovertop__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ion2_calendar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ion2_calendar__);
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
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiscoverPage = (function () {
    function DiscoverPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.countries = [];
        this.fcommunity = [];
        this.longitude1 = '';
        this.lattitude1 = '';
        this.data = {
            query: '',
            queryy: '',
            city: '',
            country: ''
        };
        this.pet = "hotels";
        this.bit = 1;
        this.trip = 1;
        this.ra = 'true';
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */]('en-US');
        this.loop = [];
        this.i = 1;
        this.j = 0;
        this.children = [];
        this.occupancies = [];
        this.dmonth = '';
        this.amonth = '';
        this.c = 0;
        this.roomselected = [];
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.countrylist();
        this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.minDate);
        this.activities = this.navParams.get('activities');
        console.log('activities ' + this.activities);
        if (this.activities) {
            this.pet = 'activitiess';
            console.log(this.pet);
        }
        this.fcommunity = this.navParams.get('fcommunity');
        console.log('fcommunity ' + this.fcommunity);
        if (this.fcommunity) {
            this.pet = 'travel';
            console.log(this.pet);
        }
        this.c = this.navParams.get('bit');
        if (this.c == 4) {
            this.pet = 'travel';
            console.log(this.pet);
        }
    }
    DiscoverPage.prototype.ngOnInit = function () {
        /*this.acService = new google.maps.places.AutocompleteService();
          this.autocompleteItems = [];
          this.autocomplete = {
          query: ''
          };
          this.autocompleteItemss = [];
          this.autocompletee = {
          queryy: ''
          };*/
    };
    DiscoverPage.prototype.ionViewWillEnter = function () {
        this.bool = 'true';
        console.log(this.bool);
    };
    DiscoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiscoverPage');
    };
    DiscoverPage.prototype.roundt = function () {
        //alert('roundtrip');
        this.trip = 1;
        console.log(this.trip);
    };
    DiscoverPage.prototype.onet = function () {
        //alert('oneway');
        this.trip = 2;
        console.log(this.trip);
    };
    DiscoverPage.prototype.openCalendarr = function () {
        var _this = this;
        var options = {
            title: 'Calendar',
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (date) {
                _this.dmonth = date.string;
                console.log(_this.dmonth);
            }
        });
    };
    DiscoverPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            title: 'Calendar',
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (date) {
                _this.amonth = date.string;
                console.log(_this.amonth);
            }
        });
    };
    DiscoverPage.prototype.flights = function () {
        console.log('flights');
        this.bit = 1;
        this.bool = 'true';
        this.trip = 1;
    };
    DiscoverPage.prototype.hotels = function () {
        console.log('hotels');
        this.bit = 2;
        this.trip = 1;
    };
    DiscoverPage.prototype.openItinerary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__searchitinerary_searchitinerary__["a" /* SearchitineraryPage */]);
    };
    DiscoverPage.prototype.add_a = function (index) {
        console.log(index);
        if (this.roomselected[index].NoOfAdults < 4) {
            this.roomselected[index].NoOfAdults = parseInt(this.roomselected[index].NoOfAdults) + 1;
        }
        console.log(this.roomselected);
    };
    DiscoverPage.prototype.minus_a = function (index) {
        console.log(index);
        if (this.roomselected[index].NoOfAdults > 1) {
            this.roomselected[index].NoOfAdults = parseInt(this.roomselected[index].NoOfAdults) - 1;
        }
        console.log(this.roomselected);
    };
    DiscoverPage.prototype.add_c = function (index) {
        console.log(index);
        if (this.roomselected[index].child < 2) {
            this.roomselected[index].child = parseInt(this.roomselected[index].child) + 1;
            this.roomselected[index].ChildrenAges.push(12);
        }
        console.log(this.roomselected);
    };
    DiscoverPage.prototype.minus_c = function (index) {
        console.log(index);
        if (this.roomselected[index].child > 0) {
            this.roomselected[index].child = parseInt(this.roomselected[index].child) - 1;
            this.roomselected[index].ChildrenAges.splice(1, 1);
        }
        if (this.roomselected[index].child == 0) {
            this.roomselected[index].ChildrenAges = [];
        }
        console.log(this.roomselected);
    };
    DiscoverPage.prototype.roomSelect = function (e) {
        this.roomselected = [];
        for (var i = 0; i < parseInt(e); i++) {
            this.roomselected.push({ NoOfAdults: 1, child: 0, ChildrenAges: [] });
        }
        this.rooms = e;
        console.log(this.rooms);
    };
    DiscoverPage.prototype.getData = function (keys) {
        var _this = this;
        console.log(keys);
        var options = this.common.options;
        var data_form = {
            code: keys
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/countrysearch', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.country = data.data[0].Countrycode.iso_code_2;
                console.log(_this.country);
            }
            else {
            }
        }, function (error) {
        });
        this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.currency = data.data[0].Currencycode.currency_code;
                console.log(_this.currency);
            }
            else {
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.hotelView = function (heroForm) {
        var _this = this;
        if (this.dmonth == '' && this.amonth == '') {
            var toast = this.toastCtrl.create({
                message: 'Select dates to search',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.dmonth == '') {
            var toast = this.toastCtrl.create({
                message: 'Select Arrival date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.amonth == '') {
            var toast = this.toastCtrl.create({
                message: 'Select Departure date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.dmonth > this.amonth) {
            var toast = this.toastCtrl.create({
                message: 'Invalid dates',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            console.log(heroForm.value.city);
            console.log(heroForm.value.country);
            this.from = this.dmonth;
            this.to = this.amonth;
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            headers.append('apikey', 'f391cf76-be55-4');
            headers.append('mode', 'sandbox');
            headers.append('Content-Type', 'application/json');
            this.optionss = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_form = {
                City: heroForm.value.city,
                Country: heroForm.value.country,
                "Latitude": "",
                "Longitude": "",
                FromDate: this.dmonth,
                ToDate: this.amonth,
                ClientNationality: this.country,
                Currency: this.currency,
                Occupancies: this.roomselected
            };
            console.log(data_form);
            Loading.present().then(function () {
                _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/search', data_form, _this.optionss)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loading.dismiss();
                    console.log(data);
                    if (data.ErrorMessage == null) {
                        console.log(data);
                        _this.hoteldetail = data.hotelData;
                        _this.city = data.City;
                        console.log(_this.hoteldetail);
                        console.log(_this.city);
                        var detail = {
                            hotels: _this.hoteldetail,
                            city: _this.city,
                            from: _this.from,
                            to: _this.to,
                            currency: _this.currency,
                            nationality: _this.country,
                            occupancies: _this.roomselected,
                            dcity: heroForm.value.city,
                            dcountry: heroForm.value.country
                        };
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], {
                            detail: detail
                        });
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.ErrorMessage,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (error) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your Network Connection",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                });
            });
        }
    };
    DiscoverPage.prototype.flightView = function (heroForm) {
        var _this = this;
        console.log('flightView');
        if (this.trip == '1') {
            console.log('round');
            if (this.dmonth > this.amonth) {
                var toast = this.toastCtrl.create({
                    message: 'Invalid dates',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else if (this.dmonth == '' && this.amonth == '') {
                var toast = this.toastCtrl.create({
                    message: 'Select dates to search',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else if (this.dmonth == '') {
                var toast = this.toastCtrl.create({
                    message: 'Select Arrival date',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else if (this.amonth == '') {
                var toast = this.toastCtrl.create({
                    message: 'Select Departure date',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                var ddatee = this.dmonth.split("-");
                var format = ddatee[1] + "/" + ddatee[2] + "/" + ddatee[0];
                var ddateee = this.amonth.split("-");
                var formatt = ddateee[1] + "/" + ddateee[2] + "/" + ddateee[0];
                var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
                headers.append('apikey', 'f391cf76-be55-4');
                headers.append('mode', 'sandbox');
                headers.append('Content-Type', 'application/json');
                this.optionss = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var data_form = {
                    TripType: "R",
                    NoOfAdults: 1,
                    ClassType: "Economy",
                    OriginDestination: [{
                            //          Origin: this.source_code, 
                            //          Destination: this.destination_code,
                            Origin: 'BOM',
                            Destination: 'JFK',
                            TravelDate: format
                        },
                        {
                            //          Origin: this.destination_code, 
                            //          Destination: this.source_code,
                            Origin: 'JFK',
                            Destination: 'BOM',
                            TravelDate: formatt
                        }],
                    //        Currency: this.a_currency
                    Currency: 'USD'
                };
                console.log(data_form);
                Loading.present().then(function () {
                    _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search', data_form, _this.optionss)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        Loading.dismiss();
                        console.log(data);
                        if (data.OneWayAvailabilityResponse.TrackId != null && data.ExpMsg != null) {
                            console.log(data);
                            /* this.flightdetail = data.OneWayAvailabilityResponse.ItinearyDetails[0].Items;
                             console.log(this.flightdetail);
                             this.f_source = this.flightdetail[0].FlightDetails[0].OriginAirportCity;
                             console.log(this.f_source);
                             this.f_destination = this.flightdetail[0].FlightDetails[1].DestinationAirportCity;
                             console.log(this.f_destination);*/
                            var fdetail = {
                                flights: _this.flightdetail,
                                source: _this.f_source,
                                destination: _this.f_destination,
                                track_id: data.OneWayAvailabilityResponse.TrackId
                            };
                            console.log(fdetail);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__flight_flight__["a" /* FlightPage */], {
                                fdetail: fdetail
                            });
                            var toast = _this.toastCtrl.create({
                                message: data.msg,
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                        else if (data.ProductErrors.ErrorCode != 'null') {
                            var toast = _this.toastCtrl.create({
                                message: data.ProductErrors.Message,
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                        else if (data.ProductErrors.ErrorCode == 'null') {
                            var toast = _this.toastCtrl.create({
                                message: "Search only international flights",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                        else if (data.ExpMsg == null) {
                            var toast = _this.toastCtrl.create({
                                message: "Search only international flights",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                    }, function (error) {
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Check your Network Connection",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    });
                });
            }
        }
        else if (this.trip == '2') {
            console.log('oneway');
            if (this.dmonth == '') {
                var toast = this.toastCtrl.create({
                    message: 'Select Arrival date',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
                headers.append('apikey', 'f391cf76-be55-4');
                headers.append('mode', 'sandbox');
                headers.append('Content-Type', 'application/json');
                this.optionss = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var ddatee = this.dmonth.split("-");
                var format = ddatee[1] + "/" + ddatee[2] + "/" + ddatee[0];
                var data_formm = {
                    TripType: "O",
                    NoOfAdults: 1,
                    ClassType: "Economy",
                    OriginDestination: [{ Origin: this.source_code, Destination: this.destination_code, TravelDate: format }],
                    Currency: this.a_currency
                };
                console.log(data_formm);
                Loading.present().then(function () {
                    _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search', data_formm, _this.optionss)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        Loading.dismiss();
                        console.log(data);
                        //data.ProductErrors.ErrorCode == 'null' && 
                        if (data.OneWayAvailabilityResponse.TrackId != null) {
                            console.log('true');
                            _this.flightdetail = data.OneWayAvailabilityResponse.ItinearyDetails[0].Items;
                            _this.f_source = _this.flightdetail[0].FlightDetails[0].OriginAirportCity;
                            _this.f_destination = _this.flightdetail[0].FlightDetails[0].DestinationAirportCity;
                            console.log(_this.flightdetail);
                            console.log(_this.f_source);
                            console.log(_this.f_destination);
                            console.log(data.OneWayAvailabilityResponse.TrackId);
                            var fdetail = {
                                flights: _this.flightdetail,
                                source: _this.f_source,
                                destination: _this.f_destination,
                                track_id: data.OneWayAvailabilityResponse.TrackId
                            };
                            console.log(fdetail);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__flight_flight__["a" /* FlightPage */], {
                                fdetail: fdetail
                            });
                            var toast = _this.toastCtrl.create({
                                message: data.msg,
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                        else if (data.ProductErrors.ErrorCode != 'null') {
                            console.log('else');
                            var toast = _this.toastCtrl.create({
                                message: data.ProductErrors.Message,
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                    }, function (error) {
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Check your Network Connection",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    });
                });
            }
        }
        /*console.log(heroForm.value.city);
        console.log(heroForm.value.country);
        this.from=heroForm.value.dmonth;
        this.to=heroForm.value.amonth;*/
    };
    DiscoverPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    DiscoverPage.prototype.scountrySelect = function (s_c) {
        console.log(s_c);
    };
    DiscoverPage.prototype.dcountrySelect = function (d_c) {
        var _this = this;
        console.log(d_c);
        var options = this.common.options;
        var data_form = {
            code: d_c
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.a_currency = data.data[0].Currencycode.currency_code;
                console.log(_this.a_currency);
            }
            else {
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.countrylist = function () {
        var _this = this;
        var options = this.common.options;
        this.http.get(this.common.base_url + 'users/country', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.countries = data.data;
                console.log(_this.countries);
            }
            else if (data.status == 1) {
                var toast = _this.toastCtrl.create({
                    message: "Enter the city name",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.updateSearch = function (source) {
        var _this = this;
        console.log(source);
        var options = this.common.options;
        var data_form = {
            city: source
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.source_code = data.data[0].Airportcode.airportcode;
                console.log(_this.source_code);
            }
            else if (data.status == 1) {
                var toast = _this.toastCtrl.create({
                    message: "Enter the city name",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.updateeSearch = function (destination) {
        var _this = this;
        console.log(destination);
        var options = this.common.options;
        var data_formm = {
            city: destination
        };
        console.log(data_formm);
        var Serialized = this.common.serializeObj(data_formm);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.destination_code = data.data[0].Airportcode.airportcode;
                console.log(_this.destination_code);
            }
            else if (data.status == 1) {
                /*let toast = this.toastCtrl.create({
                  message: "Enter the city name",
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();*/
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.galdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__galdetail_galdetail__["a" /* GaldetailPage */]);
    };
    DiscoverPage.prototype.view = function () {
        var send = {
            activities: this.activities,
            back: '1'
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewactivities_viewactivities__["a" /* ViewactivitiesPage */], {
            send: send
        });
    };
    DiscoverPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    DiscoverPage.prototype.mytrip = function (uid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mytrip_mytrip__["a" /* MytripPage */], {
            userid: uid,
            community: this.fcommunity
        });
    };
    DiscoverPage.prototype.activitiesListing = function () {
        var _this = this;
        if (this.dmonth == '' && this.amonth == '') {
            var toast = this.toastCtrl.create({
                message: 'Select dates to search',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.amonth == '') {
            var toast = this.toastCtrl.create({
                message: 'Select Arrival date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.dmonth == '') {
            var toast = this.toastCtrl.create({
                message: 'Select Departure date',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.amonth > this.dmonth) {
            var toast = this.toastCtrl.create({
                message: 'Invalid dates',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.a_currency == undefined && this.activity_source == undefined) {
            var toast = this.toastCtrl.create({
                message: 'Fill City and country to search',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.a_currency == undefined) {
            var toast = this.toastCtrl.create({
                message: 'Select country to search',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.activity_source == undefined) {
            var toast = this.toastCtrl.create({
                message: 'Enter city to search',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            headers.append('apikey', 'f391cf76-be55-4');
            headers.append('mode', 'sandbox');
            headers.append('Content-Type', 'application/json');
            this.optionss = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_form = {
                currency: this.a_currency,
                fromDate: this.amonth,
                toDate: this.dmonth,
                searchFilterItems: [{
                        type: 'destination',
                        value: this.activity_source
                    }]
            };
            console.log(data_form);
            Loading.present().then(function () {
                _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/activities/v1/search', data_form, _this.optionss)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loading.dismiss();
                    console.log(data);
                    if (data.ProductErrors.ErrorCode == null) {
                        _this.activities = data.activities;
                        console.log(_this.activities);
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                    else if (data.ProductErrors.ErrorCode != null) {
                        var toast = _this.toastCtrl.create({
                            message: data.ProductErrors.Message,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (error) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your Network Connection",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                });
            });
        }
    };
    DiscoverPage.prototype.activitySearch = function (loc) {
        var _this = this;
        console.log(loc);
        var options = this.common.options;
        var data_form = {
            city: loc
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.activity_source = data.data[0].Airportcode.airportcode;
                console.log(_this.activity_source);
            }
            else if (data.status == 1) {
                /*let toast = this.toastCtrl.create({
                  message: "Enter the city name",
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();*/
            }
        }, function (error) {
        });
    };
    DiscoverPage.prototype.viewNewsfeed = function () {
        var _this = this;
        this.fcommunity = [];
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/newsfeed', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.community = data.data;
                    console.log(_this.community);
                    for (var i = 0; i < _this.community.length; i++) {
                        if (_this.community[i].User.id != null) {
                            if (_this.community[i].User.Trips.length > 0) {
                                for (var j = 0; j < _this.community[i].User.Trips.length; j++) {
                                    if (_this.community[i].User.Trips[j].Gallery.length > 0) {
                                        _this.fcommunity.push(_this.community[i]);
                                    }
                                }
                            }
                        }
                    }
                    console.log(_this.fcommunity);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    DiscoverPage.prototype.locationActivity = function (location) {
        console.log(location);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__discovertop_discovertop__["a" /* DiscovertopPage */], {
            location: location,
            community: this.fcommunity
        });
    };
    DiscoverPage.prototype.viewImagedetail = function (gal) {
        console.log(gal);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__galdetail_galdetail__["a" /* GaldetailPage */], {
            dis: gal,
            community: this.fcommunity
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DiscoverPage.prototype, "mapElement", void 0);
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-discover',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/discover/discover.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Discover</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="discover">\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="hotels">\n        Flights & Hotels\n      </ion-segment-button>\n      <ion-segment-button value="activitiess">\n        Activities\n      </ion-segment-button>\n      <ion-segment-button value="deals">\n        Deals\n      </ion-segment-button>\n      <ion-segment-button value="travel" (click)="viewNewsfeed()">\n        Community\n      </ion-segment-button>\n    </ion-segment>\n\n\n    <div [ngSwitch]="pet">\n      <form #heroForm="ngForm">\n        <ion-list *ngSwitchCase="\'hotels\'">\n          <div class="card-background-page">\n            <ion-card>\n              <img src="assets/imgs/a.png" />\n              <div class="main-div">\n              <div class="check">\n                <ion-list radio-group name="ch" [(ngModel)]="data.relationship">\n                  <ion-item item-left>\n                     <ion-label>Flights</ion-label>\n                    <ion-radio item-left value="flights" checked="{{bool}}" (ionSelect)="flights()"></ion-radio>                   \n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Hotels</ion-label>\n                    <ion-radio item-left value="hotels" (ionSelect)="hotels()"></ion-radio>\n                  </ion-item>\n                </ion-list>\n              </div>\n              \n              \n              <div *ngIf="bit == \'1\'" class="rad" radio-group>\n                  <ion-list>\n                <ion-item>\n                  <ion-label>Roundtrip</ion-label>\n                  <ion-radio name="rtrip"  checked="true" value="round" (ionSelect)="roundt()"></ion-radio>\n                </ion-item>\n               <ion-item>\n                  <ion-label>One Way</ion-label>\n                  <ion-radio name="owtrip" value="way" (ionSelect)="onet()"></ion-radio>\n                </ion-item>\n                \n                  </ion-list>\n              </div>\n              <div class="dest" *ngIf="bit == \'1\'">\n                <h1>Start</h1>\n\n                <ion-list>\n                  <ion-item>\n                    <ion-input type="text" name="query" [(ngModel)]="data.query" (input)="updateSearch(data.query)" #query="ngModel" placeholder="Enter City" required></ion-input>\n                    \n                    <ion-select name="scountry" placeholder="Enter Country" [(ngModel)]="data.scountry" (ionChange)="scountrySelect($event)" required>\n                    <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n                  </ion-select>\n                  </ion-item>\n                 \n                    <!--<ion-item>\n                  \n                </ion-item>  -->                \n                    \n                </ion-list>\n\n                <h1>Destination</h1>\n\n                <ion-list>\n                  <ion-item>\n                    <ion-input type="text" name="queryy" [(ngModel)]="data.queryy" (input)="updateeSearch(data.queryy)" #query="ngModel" placeholder="Enter City" required></ion-input>\n                    \n                    <ion-select name="dcountry" placeholder="Enter Country" [(ngModel)]="data.dcountry" (ionChange)="dcountrySelect($event)" required>\n                    <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n                  </ion-select>\n                  </ion-item>                 \n                    \n                </ion-list>\n\n              </div>\n           <div *ngIf="bit == \'2\'" class="dest dest_b">\n                <h1>Destination City</h1>\n                <ion-input type="text" name="city" [(ngModel)]="data.city" id="city" #city="ngModel" required></ion-input>\n\n\n\n                <h1>Destination Country</h1>\n                <ion-input type="text" name="country" (input)="getData(data.country)" [(ngModel)]="data.country" id="country" #country="ngModel" required></ion-input>\n              </div>\n          </div>\n              \n              \n              \n              \n\n            </ion-card>\n\n\n\n            <ion-card class="time-date">\n              <ion-row>\n                <ion-col col-6>\n                  <div *ngIf="trip == \'1\' || trip == \'2\'" class="depart" style="border-right: 1px solid #ccc;">\n                    <h5>ARRIVAL</h5>                    \n                    <ion-item (click)="openCalendarr()">\n                        <ion-label class="datetimez" *ngIf="dmonth == \'\'">Change Date</ion-label>\n                        <ion-label class="datetimez" *ngIf="dmonth != \'\'">{{dmonth}}</ion-label>\n                    </ion-item>\n<!--                    <ion-datetime name="dmonth"  displayFormat="MM/DD/YYYY" max="2050-31-12" min="{{minDate}}" [(ngModel)]="eventt.dmonth" placeholder="Change Date"\n                      id="dmonth" #dmonth="ngModel" required></ion-datetime>-->\n                  </div>\n                </ion-col>\n                <ion-col col-6>\n                  <div *ngIf="trip == \'1\'" class="depart arrival">\n                    <h5>DEPARTURE</h5>\n                    <ion-item (click)="openCalendar()">\n                        <ion-label class="datetimez" *ngIf="amonth == \'\'">Change Date</ion-label>\n                        <ion-label class="datetimez" *ngIf="amonth != \'\'">{{amonth}}</ion-label>\n                    </ion-item>\n<!--                    <ion-datetime name="amonth" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" max="2050-31-12" min="{{minDate}}" [(ngModel)]="eventt.amonth" placeholder="Change Date"\n                      id="amonth" #amonth="ngModel" required></ion-datetime>-->\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <div *ngIf="bit == \'2\'" class="room">\n               \n                <h5>ROOMS & GUESTS</h5>\n                <h6>Rooms</h6>\n                <ion-item>\n                  <ion-select name="rooom" [(ngModel)]="data.rooom" (ionChange)="roomSelect($event)" required>\n                    <ion-option value="1" selected="true">1</ion-option>\n                    <ion-option value="2">2</ion-option>\n                  </ion-select>\n                </ion-item> \n                <div class="count" *ngFor="let rooms of roomselected; let i=index">\n                    \n                     <h6>Room {{i+1}}</h6>\n                <div class="count_lft" float-left>\n                    <h6>Adults</h6>\n  \n                    <ion-icon name="add" item-start (click)="add_a(i)"></ion-icon>\n                        <!--<ion-input type="text" name="adults" [(ngModel)]="data.adults" id="adults" #adults="ngModel" max=4 required></ion-input>-->\n                        <span>{{rooms.NoOfAdults}}</span>\n                    <ion-icon name="remove" item-end (click)="minus_a(i)"></ion-icon>\n                  \n                </div>\n            \n                <div class="count_lft" float-right>\n                    <h6>Children</h6>\n                  \n                    <ion-icon name="add" item-start (click)="add_c(i)"></ion-icon>\n                        <!--<ion-input type="text" name="children" [(ngModel)]="data.children" id="children" #children="ngModel" max=2 required></ion-input>-->\n                        <span>{{rooms.child}}</span>\n                    <ion-icon name="remove" item-end (click)="minus_c(i)"></ion-icon>\n                    \n                </div>\n                \n                </div>\n\n              </div>\n                \n            </ion-card>\n              \n            <button *ngIf="bit == \'1\'" color="theme" ion-button class="search" (click)="flightView(heroForm)" [disabled]="!heroForm.form.valid">Search</button>\n            <button *ngIf="bit == \'2\'" color="theme" ion-button class="search" (click)="hotelView(heroForm)" [disabled]="!heroForm.form.valid">Search</button>\n          </div>\n        </ion-list>\n      </form>\n\n      <ion-list *ngSwitchCase="\'activitiess\'">\n        <div class="location_sec">\n          <h5>Search</h5>\n          <ion-item>\n              <ion-input type="text" name="activityl" [(ngModel)]="data.activityl" (input)="activitySearch(data.activityl)" #activityl="ngModel" placeholder="Enter City"></ion-input>\n                <ion-select name="acountry" placeholder="Enter Country" [(ngModel)]="data.acountry" (ionChange)="dcountrySelect($event)">\n                 <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n               </ion-select>\n              <ion-icon ios="ios-search" md="md-search" class="sr" (click)="activitiesListing()" item-end></ion-icon>\n          </ion-item>\n          \n              <ion-item (click)="openCalendar()">\n                        <ion-label class="datetimez" *ngIf="amonth == \'\'">From Date</ion-label>\n                        <ion-label style="color: #131313;" class="datetimez" *ngIf="amonth != \'\'">{{amonth}}</ion-label>\n                    </ion-item>\n<!--           <ion-datetime name="dmonth"  displayFormat="MM/DD/YYYY" max="2050-31-12" min="{{minDate}}" [(ngModel)]="eventt.dmonth" placeholder="From Date"\n                      id="dmonth" #dmonth="ngModel" required></ion-datetime>   -->\n          \n           \n               <ion-item (click)="openCalendarr()">\n                        <ion-label class="datetimez" *ngIf="dmonth == \'\'">To Date</ion-label>\n                        <ion-label style="color: #131313;" class="datetimez" *ngIf="dmonth != \'\'">{{dmonth}}</ion-label>\n                    </ion-item>\n<!--              <ion-datetime name="amonth" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" max="2050-31-12" min="{{minDate}}" [(ngModel)]="eventt.amonth" placeholder="To Date"\n                      id="amonth" #amonth="ngModel" required></ion-datetime>-->\n          \n          \n        </div>\n\n        <div class="things">\n          <div class="top">\n            <h3>Top things to do</h3>\n            <button *ngIf="activities" (click)="view()">View all activities</button>\n          </div>\n          <ion-scroll scrollX="true" padding>\n            <ion-card *ngFor="let act of activities">\n              <div class="product-img">\n                <img src="{{act.content.media.images[0].urls[0].resource}}" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>{{act.name}}</ion-title>\n                <p class="price">{{act.amountsFrom[0].convertedAmount}}</p>\n                <!--<ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                  <li><span>3,789</span></li>\n                </ul>-->\n              </ion-card-content>\n            </ion-card>  \n          </ion-scroll>\n        </div>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'deals\'">\n        <div padding class="location_sec">\n          <h5>Flights & vacation packages leaving from</h5>\n          <ion-item>\n            <ion-label fixed>\n              <ion-icon ios="ios-locate" md="md-locate"></ion-icon>\n            </ion-label>\n            <ion-input type="text" value=""></ion-input>\n          </ion-item>\n        </div>\n\n\n        <ion-item class="filter" no-padding>\n          <ion-label><span>Filter</span></ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n            <ion-option value="n64">Highest Price</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n        <ion-item class="disc">\n          <div class="card_sec">\n            <ion-card>\n              <img src="assets/imgs/getstartback.jpeg" />\n              <span>999</span>\n              <ion-card-content>\n                <ion-card-title>\n                  Nine Inch Nails Live\n                </ion-card-title>\n                <p>Mar 16 - Mar 25, 2017</p>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <img src="assets/imgs/getstartback.jpeg" />\n              <span>999</span>\n              <ion-card-content>\n                <ion-card-title>\n                  Nine Inch Nails Live\n                </ion-card-title>\n                <p>Mar 16 - Mar 25, 2017</p>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'travel\'" no-margin>\n        <h3 class="sub">Search</h3>\n        <div class="trav">\n          <ion-card (click)="openItinerary()">\n            <img src="assets/imgs/getstartback.jpeg" />\n            <div class="overlay"></div>\n            <div class="card-title">Itineraries</div>\n          </ion-card>\n\n          <ion-card (click)="viewNewsfeed()">\n            <img src="assets/imgs/getstartback.jpeg" />\n            <div class="overlay"></div>\n            <div class="card-title">Galleries</div>\n          </ion-card>\n        </div>\n        <h3 class="sub">news feed</h3>\n        \n       <div class="demo" *ngFor="let com of fcommunity">\n        <ion-item no-padding class="nam">\n          <ion-avatar item-start>\n            <img *ngIf="com.User.image" src="{{com.User.image}}">\n            <img *ngIf="!com.User.image" src="assets/imgs/user.png">\n          </ion-avatar>\n          <h2 (click)="mytrip(com.User.id)">{{com.User.name}}</h2>\n          \n          <div *ngFor="let trips of com.User.Trips">\n              <p (click)="locationActivity(trips.end_location)">{{trips.end_location}}</p>\n              <p (click)="locationActivity(trips.end_location1)" *ngIf="trips.end_location1">| {{trips.end_location1}}</p>\n              \n              <ion-row *ngFor="let gal of trips.Gallery">\n                  <div (click)="viewImagedetail(gal)">\n              <img src="{{gal.image}}" />\n              </div>\n<!--          <ion-col col-6 style="padding-right: 1px;" no-padding>\n            <div class="news" (click)="galdetail()"><img src="assets/imgs/getstartback.jpeg" /></div>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <div class="newsa"><img src="assets/imgs/getstartback.jpeg" /></div>\n            <div class="newsb">\n              <div class="a"><img src="assets/imgs/a.png" /></div>\n              <div class="a"><img src="assets/imgs/b.jpg" />\n                <div class="overlay"></div>\n                <button>+10 more photos</button>\n              </div>\n            </div>\n          </ion-col>-->\n        </ion-row>\n          </div>\n        </ion-item>\n        \n    </div>\n        \n<!--        <ion-row>\n          <ion-col col-6 style="padding-right: 1px;" no-padding>\n            <div class="news" (click)="galdetail()"><img src="assets/imgs/getstartback.jpeg" /></div>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <div class="newsa"><img src="assets/imgs/getstartback.jpeg" /></div>\n            <div class="newsb">\n              <div class="a"><img src="assets/imgs/a.png" /></div>\n              <div class="a"><img src="assets/imgs/b.jpg" />\n                <div class="overlay"></div>\n                <button>+10 more photos</button>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>-->\n\n        \n\n<!--        <ion-item no-padding class="nam">\n          <ion-avatar item-start>\n            <img src="assets/imgs/getstartback.jpeg" />\n          </ion-avatar>\n          <h2>Name</h2>\n          <p>Place</p>\n        </ion-item>\n\n        <div class="opens">\n          <ion-row>\n            <ion-col col-4 no-padding>\n              <div class="news opn"><img src="assets/imgs/getstartback.jpeg" /></div>\n            </ion-col>\n            <ion-col col-4 no-padding>\n              <div class="news opn"><img src="assets/imgs/a.png" /></div>\n            </ion-col>\n            <ion-col col-4 no-padding>\n              <div class="news opn"><img src="assets/imgs/b.jpg" /></div>\n            </ion-col>\n          </ion-row>\n          <div class="overlay"></div>\n          <button>Open Itinerary</button>\n        </div>-->\n\n      </ion-list>\n    </div>\n\n  </div>\n</ion-content>`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/discover/discover.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetpasswordPage = (function () {
    function ResetpasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResetpasswordPage.prototype.openchangepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/resetpassword/resetpassword.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n		</div>\n		<div class="form_sec">\n			<form>\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-key-outline" md="md-key"></ion-icon></ion-label>\n						<ion-input type="password" value="" placeholder="Enter New Password"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-lock-outline" md="md-lock"></ion-icon></ion-label>\n						<ion-input type="password" placeholder="Confirm Password"></ion-input>\n					</ion-item>\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" round (click)="openchangepassword()">Submit</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/resetpassword/resetpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstartedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetstartedPage = (function () {
    function GetstartedPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    GetstartedPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    GetstartedPage.prototype.opensignuppage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    GetstartedPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    GetstartedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-getstarted',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/getstarted/getstarted.html"*/`<ion-header>\n  <ion-navbar color="theme" hideBackButton="true">\n    <ion-title class="header_title" color="text">Getting Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="title_sec">\n			<h2 class="page_title">Get your Travel Party Started!</h2>\n			<p>Grouptrip helps you to do the following:</p>\n		</div>\n		<div class="list_sec">\n			<ion-list>\n				<ion-item>\n					<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Plan It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n				<ion-item>\n						<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Book It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n				<ion-item>\n						<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Split It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n				<ion-item>\n						<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Post It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n			</ion-list>\n		</div>\n		<div class="account_sec">\n			<div class="btn-center">\n				<button ion-button color="theme" (click)="opensignuppage()">Create an Account</button>\n			</div>\n			<p>Already have an account? <button ion-button (click)="login()">Log in</button> </p>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/getstarted/getstarted.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], GetstartedPage);
    return GetstartedPage;
}());

//# sourceMappingURL=getstarted.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPage = (function () {
    function ForgotPage(navCtrl, http, common, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = '';
        this.id = localStorage.getItem('ID');
    }
    ForgotPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    ForgotPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ForgotPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    ForgotPage.prototype.forgotPass = function (forgot) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            email: forgot.value.email
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'users/forgetpwd', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.status == 1) {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else if (data.isSucess == true) {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/forgot/forgot.html"*/`\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Forgot Password</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n		</div>\n		<div class="form_sec">\n			<form #forgot="ngForm">\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-mail-outline" md="md-mail"></ion-icon></ion-label>\n						<ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Enter Your Email" required></ion-input>\n					</ion-item>\n					<ion-label class="alert alert-danger" color="danger">\n						<div *ngIf="email.errors && (email.dirty || email.touched)">\n							\n							<div [hidden]="!email.errors.required">\n								Email is required\n							</div>\n							<div [hidden]="!email.errors.pattern">\n								In-valid email\n							</div>\n						</div>\n						<!--<div *ngIf="!email.errors && (!email.dirty || !email.touched)">\n							<img class="tick" item-right src="assets/imgs/tickryt.png">\n						</div>-->\n				</ion-label>\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" round (click)="forgotPass(forgot)" [disabled]="!forgot.form.valid">Submit</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/forgot/forgot.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_comments__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = (function () {
    function ContactPage(navCtrl, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.pet = "group";
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.viewPayments();
    }
    //  payments(){
    //    this.navCtrl.push(ContactPage);
    //  }
    //  
    //  chat(){
    //    this.navCtrl.push(AboutPage);
    //  }
    //
    //  itinerary(){
    //    this.navCtrl.push(AddtripPage);
    //  }
    //
    //  gallery(){
    //    this.navCtrl.push(GalleryPage);
    //  }
    ContactPage.prototype.comments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comments_comments__["a" /* CommentsPage */]);
    };
    ContactPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    ContactPage.prototype.viewPayments = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'users/paymenthistory', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.status == 0) {
                    _this.hpayments = data.data;
                    console.log(_this.hpayments);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/contact/contact.html"*/`<ion-header>\n      <ion-toolbar color="theme">\n\n        <ion-title class="header_title" color="text">Payments</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <div class="app_usr">\n                <img *ngIf="image" src="{{image}}">\n						\n                <img *ngIf="!image" src="assets/imgs/user.png">\n            </div>\n          </button>\n          </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n\n<ion-content>\n\n<!--    <div class="blue">\n        <h4>Just got paid</h4>\n        <p>A total of $15 is waiting in your account</p>\n        <button ion-button color="theme" small no-margin>Cash Out</button>\n      </div>-->\n\n<!--    <div class="top_segment-sec" padding>\n        <ion-segment [(ngModel)]="pet">\n          <ion-segment-button value="group">\n            Group\n          </ion-segment-button>\n          <ion-segment-button value="payment">\n            My payment\n          </ion-segment-button>\n        </ion-segment>\n      </div>-->\n      \n      <!--<div [ngSwitch]="pet">-->\n        <!--<ion-list *ngSwitchCase="\'group\'">-->\n\n          <ion-card class="group" *ngFor="let pay of hpayments">\n          <ion-item>\n            <ion-avatar item-start>\n               <img *ngIf="pay.User.image" src="{{pay.User.image}}">\n               <img *ngIf="!pay.User.image" src="assets/imgs/user.png">\n            </ion-avatar>\n            <h6>{{pay.Payment.created| date: \'MMM d, yyyy\'}}</h6>\n            <h2>{{pay.User.name}}</h2>\n            <h2>You Paid <span>{{pay.Payment.totalamount}}</span></h2>\n            <span>Money for {{pay.Payment.type}}</span>\n<!--            <ion-note item-end="" class="note note-ios">\n                <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n                <button ion-button clear small>3 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon></button>\n            </ion-note>-->\n          </ion-item>\n\n          </ion-card>\n        <!--</ion-list>-->\n      \n        <!--<ion-list *ngSwitchCase="\'payment\'">-->\n<!--            <ion-card class="group">\n                <ion-item>\n                  <ion-avatar item-start>\n                     <img src="assets/imgs/b.jpg">\n                  </ion-avatar>\n                  <h6>12/12/2017</h6>\n                  <h2>You Paid</h2>\n                  <h2>Melanie <span>$45.00</span></h2>\n                  <span>Money for ATVing</span>\n                  <ion-note item-end="" class="note note-ios">\n                      <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n                      <button ion-button clear small>3 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon></button>\n                  </ion-note>\n                </ion-item>\n      \n                </ion-card>-->\n        <!--</ion-list>-->\n      <!--</div>-->\n\n<!--      <ion-fab bottom right edge>\n          <button ion-fab mini color="theme"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>-->\n    \n\n</ion-content>\n<!--<ion-footer>\n  <a href="#" (click)="itinerary()"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <a href="#" (click)="payments()" class="active"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>\n  <a href="#" (click)="gallery()"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>    \n</ion-footer>-->\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/contact/contact.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArivalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviewbooking_reviewbooking__ = __webpack_require__(99);
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
 * Generated class for the ArivalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArivalPage = (function () {
    function ArivalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArivalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArivalPage');
    };
    ArivalPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reviewbooking_reviewbooking__["a" /* ReviewbookingPage */]);
    };
    ArivalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-arival',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/arival/arival.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Arrival</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n      \n      <div class="plane">\n      \n        <div class="fst">\n        <h2>Bankok</h2>\n      </div>\n      \n      <div class="icon1">\n        <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n      </div>\n      \n      <div class="last">\n          <h2>Bankok</h2>\n        </div>\n        \n      </div>\n      \n        <span class="date">18/7/2017-20/7/2017 <ion-icon ios="md-calendar" md="md-calendar"></ion-icon></span>\n      \n          <ion-item class="filter" no-padding>\n              <ion-label><span>Filter</span></ion-label>\n              <ion-select [(ngModel)]="gaming">\n                <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n                <ion-option value="n64">Highest Price</ion-option>\n              </ion-select>\n            </ion-item>\n          \n          \n          <h3 class="head">Departing Flight</h3>\n          <ion-card class="waterfall">\n          \n                <ion-item (click)="arival();">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <h2>My Neighbor Totoro</h2>\n                  <div class="us">\n                    <p>IAD &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; bKK</p>\n                    <span>United Airlines</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <li>27h 55m</li>\n                      <li>1 stop in IST</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">$35<span>roundtrip</span></ion-note>\n                </ion-item>\n\n                </ion-card>\n\n                <h3 class="head">arrival</h3>\n                <ion-card class="waterfall">\n                \n                      <ion-item (click)="review();">\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/a.png">\n                        </ion-avatar>\n                        <h2>My Neighbor Totoro</h2>\n                        <div class="us">\n                          <p>IAD &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; bKK</p>\n                          <span>United Airlines</span>\n                        </div>\n                        <div class="rt">\n                          <ul>\n                            <li>27h 55m</li>\n                            <li>1 stop in IST</li>\n                          </ul>\n                        </div>\n                       \n                          <ion-note item-end="" class="note note-ios" style="padding: 0 6px;">+ $0</ion-note>\n                      </ion-item>\n      \n                      </ion-card>\n\n\n\n      </ion-content>`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/arival/arival.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ArivalPage);
    return ArivalPage;
}());

//# sourceMappingURL=arival.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitefriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(78);
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
 * Generated class for the InvitefriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitefriendsPage = (function () {
    function InvitefriendsPage(navCtrl, navParams, common, http, socialSharing, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.id = localStorage.getItem('ID');
        this.viewProfile();
    }
    InvitefriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitefriendsPage');
    };
    InvitefriendsPage.prototype.socialsharing = function () {
        var _this = this;
        this.socialSharing.share("Invite friend", null, null, "http://google.com")
            .then(function () {
        }, function () {
            var toast = _this.toastCtrl.create({
                message: "failed",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    InvitefriendsPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    InvitefriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invitefriends',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/invitefriends/invitefriends.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Invite Friends</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n  </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/b.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <button ion-button small item-end color="theme">Invite</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/a.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <button ion-button small item-end color="light">Invited</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/invitefriends/invitefriends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], InvitefriendsPage);
    return InvitefriendsPage;
}());

//# sourceMappingURL=invitefriends.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(143);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = (function () {
    function SplashPage(navCtrl, navParams, viewCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 10000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splash',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/splash/splash.html"*/`<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!--<ion-content padding>\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n    <defs>\n        <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n    </defs>\n    <title>jmlogo</title>\n    <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n    <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n    <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n    <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n    <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n    <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n</svg>\n</ion-content>-->\n\n<ion-header hidden>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Get Started</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="page_wrapper">\n      <div class="logo_sec">\n        <img src="assets/imgs/logo.png" >\n      </div>\n      <div class="text">\n        <h2>Plan It. Book It. Split It. Post It</h2>\n        <p>The best way to plan a group trip</p>\n      </div>\n  \n  <div class="progress_wrapper">\n    <div class="progress_outer">\n      <div class="progress-bar">\n      </div>\n    </div>\n    <div class="counter">\n      Loading:\n    </div>\n  </div>\n  \n      </div>\n  \n      \n  </ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(452);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_trip_my_trip__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_attendees_attendees__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_invite_invite__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_location_location__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_searchitinerary_searchitinerary__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_discover_discover__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_galdetail_galdetail__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_viewactivities_viewactivities__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_search__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_hoteldetail_hoteldetail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_flight_flight__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_arival_arival__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_reviewbooking_reviewbooking__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_passenger_passenger__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_comments_comments__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_gallery_gallery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_thankyou_thankyou__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_mytrip_mytrip__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_editprofile_editprofile__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_booking_booking__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_uploaded_uploaded__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_liked_liked__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_invitefriends_invitefriends__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_addevent_addevent__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_hotel_hotel__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_request_request__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_privacy_privacy__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_terms_terms__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_gallerytwo_gallerytwo__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_editphoto_editphoto__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_locality_locality__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_flightdetail_flightdetail__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_flightform_flightform__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_icomments_icomments__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_discovertop_discovertop__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_common_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_google_plus__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_splash_splash__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_native_geocoder__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_ionic_img_viewer__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_image_picker__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_media_capture__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_social_sharing__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_ionic2_rating__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_ionic_openweathermap__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_firebase__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ionic_native_file_transfer__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_streaming_media__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_ion2_calendar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_72_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_keyboard__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_trip_my_trip__["a" /* My_tripPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_attendees_attendees__["a" /* AttendeesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addtrip_addtrip__["a" /* AddtripPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_searchitinerary_searchitinerary__["a" /* SearchitineraryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_galdetail_galdetail__["a" /* GaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_viewactivities_viewactivities__["a" /* ViewactivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hoteldetail_hoteldetail__["a" /* HoteldetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_flight_flight__["a" /* FlightPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_arival_arival__["a" /* ArivalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reviewbooking_reviewbooking__["a" /* ReviewbookingPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_passenger_passenger__["a" /* PassengerPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_mytrip_mytrip__["a" /* MytripPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_uploaded_uploaded__["a" /* UploadedPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_liked_liked__["a" /* LikedPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_invitefriends_invitefriends__["a" /* InvitefriendsPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_addevent_addevent__["a" /* AddeventPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_hotel_hotel__["a" /* HotelPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_gallerytwo_gallerytwo__["a" /* GallerytwoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_editphoto_editphoto__["a" /* EditphotoPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_locality_locality__["a" /* LocalityPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_flightdetail_flightdetail__["a" /* FlightdetailPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_flightform_flightform__["a" /* FlightformPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_icomments_icomments__["a" /* IcommentsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_discovertop_discovertop__["a" /* DiscovertopPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addevent/addevent.module#AddeventPageModule', name: 'AddeventPage', segment: 'addevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addtrip/addtrip.module#AddtripPageModule', name: 'AddtripPage', segment: 'addtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arival/arival.module#ArivalPageModule', name: 'ArivalPage', segment: 'arival', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discover/discover.module#DiscoverPageModule', name: 'DiscoverPage', segment: 'discover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discovertop/discovertop.module#DiscovertopPageModule', name: 'DiscovertopPage', segment: 'discovertop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editphoto/editphoto.module#EditphotoPageModule', name: 'EditphotoPage', segment: 'editphoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/flight.module#FlightPageModule', name: 'FlightPage', segment: 'flight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flightdetail/flightdetail.module#FlightdetailPageModule', name: 'FlightdetailPage', segment: 'flightdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flightform/flightform.module#FlightformPageModule', name: 'FlightformPage', segment: 'flightform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galdetail/galdetail.module#GaldetailPageModule', name: 'GaldetailPage', segment: 'galdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel.module#HotelPageModule', name: 'HotelPage', segment: 'hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hoteldetail/hoteldetail.module#HoteldetailPageModule', name: 'HoteldetailPage', segment: 'hoteldetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icomments/icomments.module#IcommentsPageModule', name: 'IcommentsPage', segment: 'icomments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invite/invite.module#InvitePageModule', name: 'InvitePage', segment: 'invite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitefriends/invitefriends.module#InvitefriendsPageModule', name: 'InvitefriendsPage', segment: 'invitefriends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/liked/liked.module#LikedPageModule', name: 'LikedPage', segment: 'liked', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/locality/locality.module#LocalityPageModule', name: 'LocalityPage', segment: 'locality', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytrip/mytrip.module#MytripPageModule', name: 'MytripPage', segment: 'mytrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passenger/passenger.module#PassengerPageModule', name: 'PassengerPage', segment: 'passenger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviewbooking/reviewbooking.module#ReviewbookingPageModule', name: 'ReviewbookingPage', segment: 'reviewbooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchitinerary/searchitinerary.module#SearchitineraryPageModule', name: 'SearchitineraryPage', segment: 'searchitinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploaded/uploaded.module#UploadedPageModule', name: 'UploadedPage', segment: 'uploaded', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewactivities/viewactivities.module#ViewactivitiesPageModule', name: 'ViewactivitiesPage', segment: 'viewactivities', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_55__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_56__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_63_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_67_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_68_ionic_openweathermap__["a" /* OpenWeatherMapModule */],
                __WEBPACK_IMPORTED_MODULE_72_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_trip_my_trip__["a" /* My_tripPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_attendees_attendees__["a" /* AttendeesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addtrip_addtrip__["a" /* AddtripPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_searchitinerary_searchitinerary__["a" /* SearchitineraryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_galdetail_galdetail__["a" /* GaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_viewactivities_viewactivities__["a" /* ViewactivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hoteldetail_hoteldetail__["a" /* HoteldetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_flight_flight__["a" /* FlightPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_arival_arival__["a" /* ArivalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reviewbooking_reviewbooking__["a" /* ReviewbookingPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_passenger_passenger__["a" /* PassengerPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_mytrip_mytrip__["a" /* MytripPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_uploaded_uploaded__["a" /* UploadedPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_liked_liked__["a" /* LikedPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_invitefriends_invitefriends__["a" /* InvitefriendsPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_addevent_addevent__["a" /* AddeventPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_hotel_hotel__["a" /* HotelPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_gallerytwo_gallerytwo__["a" /* GallerytwoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_editphoto_editphoto__["a" /* EditphotoPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_locality_locality__["a" /* LocalityPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_flightdetail_flightdetail__["a" /* FlightdetailPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_flightform_flightform__["a" /* FlightformPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_icomments_icomments__["a" /* IcommentsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_discovertop_discovertop__["a" /* DiscovertopPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_54__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_70__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_74__ionic_native_keyboard__["a" /* Keyboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 246,
	"./af.js": 246,
	"./ar": 247,
	"./ar-dz": 248,
	"./ar-dz.js": 248,
	"./ar-kw": 249,
	"./ar-kw.js": 249,
	"./ar-ly": 250,
	"./ar-ly.js": 250,
	"./ar-ma": 251,
	"./ar-ma.js": 251,
	"./ar-sa": 252,
	"./ar-sa.js": 252,
	"./ar-tn": 253,
	"./ar-tn.js": 253,
	"./ar.js": 247,
	"./az": 254,
	"./az.js": 254,
	"./be": 255,
	"./be.js": 255,
	"./bg": 256,
	"./bg.js": 256,
	"./bm": 257,
	"./bm.js": 257,
	"./bn": 258,
	"./bn.js": 258,
	"./bo": 259,
	"./bo.js": 259,
	"./br": 260,
	"./br.js": 260,
	"./bs": 261,
	"./bs.js": 261,
	"./ca": 262,
	"./ca.js": 262,
	"./cs": 263,
	"./cs.js": 263,
	"./cv": 264,
	"./cv.js": 264,
	"./cy": 265,
	"./cy.js": 265,
	"./da": 266,
	"./da.js": 266,
	"./de": 267,
	"./de-at": 268,
	"./de-at.js": 268,
	"./de-ch": 269,
	"./de-ch.js": 269,
	"./de.js": 267,
	"./dv": 270,
	"./dv.js": 270,
	"./el": 271,
	"./el.js": 271,
	"./en-au": 272,
	"./en-au.js": 272,
	"./en-ca": 273,
	"./en-ca.js": 273,
	"./en-gb": 274,
	"./en-gb.js": 274,
	"./en-ie": 275,
	"./en-ie.js": 275,
	"./en-il": 276,
	"./en-il.js": 276,
	"./en-nz": 277,
	"./en-nz.js": 277,
	"./eo": 278,
	"./eo.js": 278,
	"./es": 279,
	"./es-do": 280,
	"./es-do.js": 280,
	"./es-us": 281,
	"./es-us.js": 281,
	"./es.js": 279,
	"./et": 282,
	"./et.js": 282,
	"./eu": 283,
	"./eu.js": 283,
	"./fa": 284,
	"./fa.js": 284,
	"./fi": 285,
	"./fi.js": 285,
	"./fo": 286,
	"./fo.js": 286,
	"./fr": 287,
	"./fr-ca": 288,
	"./fr-ca.js": 288,
	"./fr-ch": 289,
	"./fr-ch.js": 289,
	"./fr.js": 287,
	"./fy": 290,
	"./fy.js": 290,
	"./gd": 291,
	"./gd.js": 291,
	"./gl": 292,
	"./gl.js": 292,
	"./gom-latn": 293,
	"./gom-latn.js": 293,
	"./gu": 294,
	"./gu.js": 294,
	"./he": 295,
	"./he.js": 295,
	"./hi": 296,
	"./hi.js": 296,
	"./hr": 297,
	"./hr.js": 297,
	"./hu": 298,
	"./hu.js": 298,
	"./hy-am": 299,
	"./hy-am.js": 299,
	"./id": 300,
	"./id.js": 300,
	"./is": 301,
	"./is.js": 301,
	"./it": 302,
	"./it.js": 302,
	"./ja": 303,
	"./ja.js": 303,
	"./jv": 304,
	"./jv.js": 304,
	"./ka": 305,
	"./ka.js": 305,
	"./kk": 306,
	"./kk.js": 306,
	"./km": 307,
	"./km.js": 307,
	"./kn": 308,
	"./kn.js": 308,
	"./ko": 309,
	"./ko.js": 309,
	"./ky": 310,
	"./ky.js": 310,
	"./lb": 311,
	"./lb.js": 311,
	"./lo": 312,
	"./lo.js": 312,
	"./lt": 313,
	"./lt.js": 313,
	"./lv": 314,
	"./lv.js": 314,
	"./me": 315,
	"./me.js": 315,
	"./mi": 316,
	"./mi.js": 316,
	"./mk": 317,
	"./mk.js": 317,
	"./ml": 318,
	"./ml.js": 318,
	"./mr": 319,
	"./mr.js": 319,
	"./ms": 320,
	"./ms-my": 321,
	"./ms-my.js": 321,
	"./ms.js": 320,
	"./mt": 322,
	"./mt.js": 322,
	"./my": 323,
	"./my.js": 323,
	"./nb": 324,
	"./nb.js": 324,
	"./ne": 325,
	"./ne.js": 325,
	"./nl": 326,
	"./nl-be": 327,
	"./nl-be.js": 327,
	"./nl.js": 326,
	"./nn": 328,
	"./nn.js": 328,
	"./pa-in": 329,
	"./pa-in.js": 329,
	"./pl": 330,
	"./pl.js": 330,
	"./pt": 331,
	"./pt-br": 332,
	"./pt-br.js": 332,
	"./pt.js": 331,
	"./ro": 333,
	"./ro.js": 333,
	"./ru": 334,
	"./ru.js": 334,
	"./sd": 335,
	"./sd.js": 335,
	"./se": 336,
	"./se.js": 336,
	"./si": 337,
	"./si.js": 337,
	"./sk": 338,
	"./sk.js": 338,
	"./sl": 339,
	"./sl.js": 339,
	"./sq": 340,
	"./sq.js": 340,
	"./sr": 341,
	"./sr-cyrl": 342,
	"./sr-cyrl.js": 342,
	"./sr.js": 341,
	"./ss": 343,
	"./ss.js": 343,
	"./sv": 344,
	"./sv.js": 344,
	"./sw": 345,
	"./sw.js": 345,
	"./ta": 346,
	"./ta.js": 346,
	"./te": 347,
	"./te.js": 347,
	"./tet": 348,
	"./tet.js": 348,
	"./tg": 349,
	"./tg.js": 349,
	"./th": 350,
	"./th.js": 350,
	"./tl-ph": 351,
	"./tl-ph.js": 351,
	"./tlh": 352,
	"./tlh.js": 352,
	"./tr": 353,
	"./tr.js": 353,
	"./tzl": 354,
	"./tzl.js": 354,
	"./tzm": 355,
	"./tzm-latn": 356,
	"./tzm-latn.js": 356,
	"./tzm.js": 355,
	"./ug-cn": 357,
	"./ug-cn.js": 357,
	"./uk": 358,
	"./uk.js": 358,
	"./ur": 359,
	"./ur.js": 359,
	"./uz": 360,
	"./uz-latn": 361,
	"./uz-latn.js": 361,
	"./uz.js": 360,
	"./vi": 362,
	"./vi.js": 362,
	"./x-pseudo": 363,
	"./x-pseudo.js": 363,
	"./yo": 364,
	"./yo.js": 364,
	"./zh-cn": 365,
	"./zh-cn.js": 365,
	"./zh-hk": 366,
	"./zh-hk.js": 366,
	"./zh-tw": 367,
	"./zh-tw.js": 367
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 486;

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_uploaded_uploaded__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_liked_liked__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_request_request__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_terms_terms__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_firebase__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var NotificationModel = (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, common, http, toastCtrl, loadingCtrl, events, facebook, googlePlus, modalCtrl, config, firebase, alertCtrl, socialSharing, keyboard) {
        var _this = this;
        this.menu = menu;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.firebase = firebase;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.keyboard = keyboard;
        this.data = '';
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0 },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
            setTimeout(function () {
                splashScreen.hide();
            }, 100);
            _this.keyboard.hideKeyboardAccessoryBar(false);
            //this.hideSplashScreen();
            /*let splash = modalCtrl.create(SplashPage);
                    splash.present();*/
            _this.config.set("scrollPadding", false);
            _this.config.set("scrollAssist", false);
            _this.config.set("autoFocusAssist", true);
            _this.config.set("android", "scrollAssist", true);
            _this.config.set("android", "autoFocusAssist", "delay");
            if (localStorage.getItem('ID')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
                //this.rootPage = GalleryPage; 
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__["a" /* GetstartedPage */];
            }
            _this.initializeFireBaseIos();
        });
        this.events.subscribe('user:login', function () {
            _this.viewProfile();
            _this.viewCount();
        });
    }
    MyApp.prototype.initializeFireBaseIos = function () {
        var _this = this;
        return this.firebase.grantPermission()
            .catch(function (error) { return console.error('Error getting permission', error); })
            .then(function () {
            _this.firebase.getToken()
                .catch(function (error) { return console.error('Error getting token', error); })
                .then(function (token) {
                console.log("The token is " + token);
                Promise.all([
                    _this.firebase.subscribe('firebase-app'),
                    _this.firebase.subscribe('ios'),
                    _this.firebase.subscribe('userid-2')
                ]).then(function (result) {
                    if (result[0])
                        console.log("Subscribed to FirebaseDemo");
                    if (result[1])
                        console.log("Subscribed to iOS");
                    if (result[2])
                        console.log("Subscribed as User");
                    _this.subscribeToPushNotificationEvents();
                });
            });
        });
    };
    //this.firebase.grantPermission();
    MyApp.prototype.saveToken = function (token) {
        // Send the token to the server
        console.log('Sending token to the server...');
        return Promise.resolve(true);
    };
    MyApp.prototype.subscribeToPushNotificationEvents = function () {
        var _this = this;
        //alert("hello everyone");
        // Handle token refresh
        this.firebase.onTokenRefresh().subscribe(function (token) {
            console.log("The new token is " + token);
            _this.saveToken(token);
        }, function (error) {
            console.error('Error refreshing token', error);
        });
        // Handle incoming notifications
        this.firebase.onNotificationOpen().subscribe(function (notification) {
            //alert('alert - > '+ JSON.stringify(notification))
            !notification.tap
                ? console.log('The user was using the app when the notification arrived...')
                : console.log('The app was closed when the notification arrived...');
            // alert starts
            var notificationAlert = _this.alertCtrl.create({
                title: '<center>' + notification.title + '</center>',
                message: notification.body,
                buttons: [{
                        text: 'Ignore',
                        role: 'cancel'
                    }, {
                        text: 'View',
                        handler: function () {
                            //TODO: Your logic here
                            _this.guser = localStorage.getItem('ID');
                            //alert('user' + this.user)
                            if (_this.guser == undefined || _this.guser == null) {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */]);
                            }
                            else {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_request_request__["a" /* RequestPage */], { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
                            }
                        }
                    }]
            });
            if (notification.title != undefined) {
                notificationAlert.present();
            }
        }, function (error) {
            console.error('Error getting the notification', error);
            //alert(JSON.stringify(error));
        });
    };
    /*hideSplashScreen() {
      if (splashScreen) {
        setTimeout(() => {
          splashScreen.hide();
        }, 100);
       }
      }*/
    MyApp.prototype.viewProfile = function () {
        var _this = this;
        this.id = localStorage.getItem('ID');
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
            }
            else {
            }
        }, function (error) {
        });
    };
    MyApp.prototype.viewCount = function () {
        var _this = this;
        this.id = localStorage.getItem('ID');
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'trips/tripcount', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.count = data.data;
                console.log(_this.count);
            }
            else {
            }
        }, function (error) {
        });
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        this.log = localStorage.getItem('Status');
        if (this.log == '0') {
            localStorage.clear();
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
        }
        else if (this.log == '1') {
            if (localStorage.getItem('fb')) {
                this.facebook.logout().then(function (sucess) {
                    localStorage.clear();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else if (localStorage.getItem('google')) {
                this.googlePlus.logout().then(function (response) {
                    localStorage.clear();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
                }).catch(function (error) {
                    localStorage.clear();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
                });
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
            }
        }
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        console.log(page.index);
        // return false;
        if (page.index == 0) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]);
        }
        else {
            if (page.index) {
                console.log('00000');
                console.log(page.index);
                params = {
                    tabIndex: page.index
                };
            }
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            console.log('77');
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    MyApp.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(false, 'menu1');
    };
    MyApp.prototype.ionViewDidLeave = function () {
        // Don't forget to return the swipe to normal, otherwise 
        // the rest of the pages won't be able to swipe to open menu
        this.menu.swipeEnable(true);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(true, 'menu1');
    };
    MyApp.prototype.termsnc = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_terms_terms__["a" /* TermsPage */]);
    };
    MyApp.prototype.ppolicy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__["a" /* PrivacyPage */]);
    };
    MyApp.prototype.book = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__["a" /* BookingPage */]);
    };
    MyApp.prototype.upload = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_uploaded_uploaded__["a" /* UploadedPage */]);
    };
    MyApp.prototype.liked = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_liked_liked__["a" /* LikedPage */]);
    };
    MyApp.prototype.profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.friend = function () {
        var _this = this;
        this.socialSharing.share("Invite friend", null, null, "http://google.com")
            .then(function () {
        }, function () {
            var toast = _this.toastCtrl.create({
                message: "Invite not sent",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
        //this.nav.push(InvitefriendsPage);
    };
    MyApp.prototype.dismiss = function () {
        this.menu.toggle();
    };
    MyApp.prototype.payment = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/app/app.html"*/`<ion-menu [content]="content" side="right">\n    <ion-content>\n\n    <ion-list class="mnu">\n\n    <ion-item>\n      <ion-avatar item-start>\n\n          <img *ngIf="image" src="{{image}}">\n						\n					<img *ngIf="!image" src="assets/imgs/user.png">\n          \n      </ion-avatar>\n      <button ion-button clear color="dark" (click)="dismiss();" item-end class="cls"><ion-icon name="close"></ion-icon></button>\n      <h2>{{count}}</h2>\n      <p>Trips</p>\n   </ion-item>\n\n   <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" >\n      {{p.title}}\n    </button> \n\n     <h3 class="menu_heading">SETTINGS</h3>\n     <button ion-item menuClose (click)="profile()">\n       Account Information\n     </button>\n      <button ion-item menuClose (click)="termsnc()">\n       Terms and Conditions\n     </button>\n      <button ion-item menuClose (click)="ppolicy()">\n       Privacy Policy\n     </button>\n\n    <h3 class="menu_heading">BOOKINGS</h3>\n     <button ion-item menuClose (click)="book()" >\n      My Bookings\n     </button>\n    \n    <h3 class="menu_heading">PAYMENT</h3>\n     <button ion-item menuClose (click)="payment()" >\n      Payment History\n     </button>\n\n     <h3 class="menu_heading">ACTIVITY</h3>\n      <button ion-item menuClose (click)="upload()">\n        My Uploaded Photos\n      </button> \n\n      <button ion-item menuClose (click)="liked()">\n          Pics I\'ve liked\n      </button>\n\n      <h3 class="menu_heading">INVITE</h3>\n      <button ion-item menuClose (click)="friend()">\n          Invite Friends\n      </button>\n\n      <!--<h3 class="menu_heading">LOGOUT</h3>-->\n      <button ion-item menuClose (click)="logOut()">\n          <h3 class="menu_heading logout">LOGOUT</h3>\n      </button> \n\n    </ion-list>\n </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_19__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_firebase__["a" /* Firebase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_19__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Config"],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttendeesPage = (function () {
    function AttendeesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.event = {};
    }
    AttendeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-attendees',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/attendees/attendees.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">My Trips</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="top_sec">\n			<h1>Give us what you\'ve got.</h1>\n			<p>Whether you\'re already booked or still deciding, let us help you plan!</p>\n		</div>\n		<div class="form_sec">\n			<div class="location_sec">\n				<h5>Location</h5>\n				<ion-list>\n					<ion-item>\n						<ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n						<ion-input type="text" value=""></ion-input>\n					</ion-item>\n				</ion-list>\n			</div>\n			<div class="date_sec">\n				<h5>Dates</h5>\n				<ion-list>\n					<ion-item>\n						<ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n						<ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" [(ngModel)]="event.dateStarts"></ion-datetime>\n					</ion-item>\n					<ion-item>\n						<ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n						<ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" [(ngModel)]="event.dateEnds"></ion-datetime>\n					</ion-item>\n				</ion-list>\n				<div class="btn-sec">\n					<button ion-button clear>add another location for this trip</button>\n				</div>\n			</div>\n			<button ion-button color="theme">Add Trip</button>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/attendees/attendees.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AttendeesPage);
    return AttendeesPage;
}());

//# sourceMappingURL=attendees.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gallerytwo_gallerytwo__ = __webpack_require__(137);
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
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryPage = (function () {
    function GalleryPage(navCtrl, navParams, common, http, camera, actionSheetCtrl, toastCtrl, loadingCtrl, viewCtrl, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.re = new Array();
        this.picImag = [];
        this.cam = [];
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');
        this.viewProfile();
        this.viewallImages();
    }
    GalleryPage_1 = GalleryPage;
    GalleryPage.prototype.imagedetail = function (img) {
        //      this.navCtrl.push(GaldetailPage,{
        //          send: img
        //      });
    };
    GalleryPage.prototype.gallery = function () {
        this.navCtrl.push(GalleryPage_1);
    };
    //  payments() {
    //    this.navCtrl.push(ContactPage);
    //  }
    GalleryPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    GalleryPage.prototype.itinerary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    GalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryPage');
    };
    GalleryPage.prototype.viewallImages = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            trip_id: this.trip_id
        };
        //alert(JSON.stringify(data_form));
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'galleries/viewimage', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                // alert(JSON.stringify(data));
                console.log(data);
                if (data.status == 0) {
                    _this.images = data.data;
                    console.log(_this.images);
                    //alert(JSON.stringify(this.images));
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    GalleryPage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__gallerytwo_gallerytwo__["a" /* GallerytwoPage */]);
    };
    /*openImagePicker() {
      let options = {
        maximumImagesCount: 5,
        outputType: 1,
        quality: 10
      }
      this.photos = [];
      this.imagePicker.getPictures(options)
        .then((results) => {
  
          for (var i = 0; i < results.length; i++) {
  
            this.photos.push(results[i]);
  
          }
          console.log(this.photos);
  
          var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
          });
  
          var options = this.common.options;
  
          var data_form = {
            user_id: this.id,
            trip_id: this.trip_id,
            img: this.photos
          }
          alert(JSON.stringify(data_form));
          console.log(data_form);
  
          var Serialized = this.common.serializeObj(data_form);
          console.log(Serialized);
  
          Loading.present().then(() => {
            this.http.post(this.common.base_url + 'galleries/uploadgallery', Serialized, options)
              .map(res => res.json())
              .subscribe(data => {
                Loading.dismiss();
  
                console.log(data);
                if (data.status == 0) {
                    this.viewallImages();
                  //this.images = data.image;
  
                  let toast = this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
  
                } else {
  
                  let toast = this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
  
                }
              }, error => {
                Loading.dismiss();
                let toast = this.toastCtrl.create({
                  message: "Check your Network Connection",
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
              });
          });
  
  
        }, (err) => { console.log(err) });
    }*/
    /* takePicture(){
       let options =
       {
         quality: 100,
         correctOrientation: true
       };
       this.camera.getPicture(options)
       .then((data) => {
         this.photos = new Array<string>();
         
       }, function(error) {
         console.log(error);
       });
     }*/
    GalleryPage.prototype.addImages = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            /*this.picImag.push(this.srcImage);
                            console.log(this.picImag.length);
                            
                            console.log(this.picImag.toString());
                          
                            this.img = this.picImag.toString();
                      
                                    
                            this.profile_image =  imageData;
                            this.cam.push(this.profile_image);
                            console.log(this.cam.toString());
                          
                            this.str = this.cam.toString();
                        
                            this.images = this.cam.join('harman');*/
                            _this.images = imageData;
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                showBackdrop: false,
                                cssClass: 'loader'
                            });
                            var data_img = ({
                                user_id: _this.id,
                                trip_id: _this.trip_id,
                                img: _this.images
                            });
                            var serialized_img = _this.common.serializeObj(data_img);
                            console.log(serialized_img);
                            var options = _this.common.options;
                            var url = _this.common.base_url + 'galleries/uploadgallery';
                            Loading.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    if (data.isSucess == true) {
                                    }
                                    else if (data.status == 0) {
                                        _this.images = data.data.image;
                                        //localStorage.setItem("DP", this.dpimage);
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: "Profile Picture has not been uploaded",
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                });
                            }, function (err) {
                                Loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Server not Working,Please Check your Internet Connection and try again!",
                                    duration: 3000
                                });
                                toast.present();
                            });
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 10,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //this.images = 'data:image/jpeg;base64,' + imageData;
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            //this.images = imageData;
                            /*this.picImag.push(this.srcImage);
                                        console.log(this.picImag.length);
                                       
                                        console.log(this.picImag.toString());
                                      
                                        this.img = this.picImag.toString();
                                  
                                                
                                        this.profile_image =  imageData;
                                        this.cam.push(this.profile_image);
                                        console.log(this.cam.toString());
                                      
                                        this.str = this.cam.toString();
                                    
                                        this.images = this.cam.join('harman');*/
                            _this.images = imageData;
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                showBackdrop: false,
                                cssClass: 'loader'
                            });
                            var data_img = ({
                                /*user_id: this.id,
                                tripid: this.trip_id,
                                gallery: this.images*/
                                user_id: _this.id,
                                img: imageData,
                                trip_id: _this.trip_id
                            });
                            // alert(JSON.stringify(data_img));
                            var serialized_img = _this.common.serializeObj(data_img);
                            console.log(serialized_img);
                            var options = _this.common.options;
                            var url = _this.common.base_url + 'galleries/uploadgallery';
                            Loading.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    //alert('api');
                                    //alert(JSON.stringify(data));
                                    if (data.isSucess == true) {
                                    }
                                    else if (data.status == 0) {
                                        _this.images = data.image;
                                        //localStorage.setItem("DP", this.dpimage);
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: data.msg,
                                            duration: 3000
                                        });
                                        toast.present();
                                    }
                                });
                            }, function (error) {
                                Loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Server not Working,Please Check your Internet Connection and try again!",
                                    duration: 3000
                                });
                                toast.present();
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    GalleryPage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    GalleryPage = GalleryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallery',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/gallery/gallery.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Gallery</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n\n<!--<ion-content>\n  <div class="full">\n    <img src="assets/imgs/a.png" />\n  </div>\n  <div class="full">\n      <img src="assets/imgs/b.jpg" />\n  </div>\n  <div class="middle">\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n  </div>\n  <ion-fab bottom right edge>\n			<button ion-fab mini color="theme"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>\n</ion-content>-->\n\n<ion-content>\n  <!--<ion-slides class="image-slider" loop="true" slidesPerView="2">-->\n    <!--<ion-slide *ngFor="let img of images">-->\n        <div class="middle">\n        <div class="half">\n      \n            <ul>\n                <li *ngFor="let img of images">\n                    <img src="{{img.Gallery.image}}" (click)="imagedetail(img)" class="thumb-img"/>\n                </li>\n            </ul>\n    </div>\n  </div>\n   <!-- </ion-slide>-->\n  <!--</ion-slides>-->\n  <ion-fab bottom right edge>\n			<button ion-fab mini color="theme" (click)="openPage()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n \n</ion-content>\n\n<ion-footer>\n  <a href="#" (click)="itinerary()"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <!--<a href="#" (click)="payments()"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>-->\n  <a href="#" (click)="gallery()" class="active"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>    \n</ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/gallery/gallery.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], GalleryPage);
    return GalleryPage;
    var GalleryPage_1;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SigninPage = (function () {
    function SigninPage(navCtrl, http, common, toastCtrl, facebook, googlePlus, loadingCtrl, viewCtrl, firebase) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.firebase = firebase;
        this.type = 'password';
        this.showPass = false;
        this.data = '';
    }
    SigninPage.prototype.viewProfile = function () {
        /* this.id = localStorage.getItem('ID');
         alert('view');
           var options = this.common.options;
         
           var data_form = {
             id: this.id
           }
           alert(JSON.stringify(data_form));
           
           var Serialized = this.common.serializeObj(data_form);
           console.log(Serialized);
          
             this.http.post(this.common.base_url + 'users/user', Serialized, options)
             .map(res => res.json())
             .subscribe(data => {
               console.log(data);
               alert('api');
               if (data.status == 0) {
                
                  this.image = data.data.User.image;
                  alert(JSON.stringify(this.image));
                         
               }else {
                               
               }
             }, error => {
                     
             });
           */
    };
    SigninPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    SigninPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    SigninPage.prototype.openforgotPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_forgot__["a" /* ForgotPage */]);
    };
    SigninPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.signIn = function (signin) {
        var _this = this;
        this.firebase.getToken()
            .then(function (token) {
            console.log("The token is " + token);
            //alert(JSON.stringify(token));       
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var options = _this.common.options;
            var data_form = {
                email: signin.value.email,
                password: signin.value.password,
                tokenid: token
            };
            console.log(data_form);
            var Serialized = _this.common.serializeObj(data_form);
            console.log(Serialized);
            Loading.present().then(function () {
                _this.http.post(_this.common.base_url + 'users/login', Serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loading.dismiss();
                    console.log(data);
                    if (data.status == 0) {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        console.log(data.data.User.id);
                        localStorage.setItem('ID', data.data.User.id);
                        localStorage.setItem('Userdata', JSON.stringify(data.data.User));
                        localStorage.setItem('Status', '0');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: data.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (error) {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your Network Connection",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                });
            });
        }) // save the token server-side and use it to push notifications to this device
            .catch(function (error) {
            console.error('Error getting token', error);
            //alert(JSON.stringify(error));
        });
    };
    SigninPage.prototype.faceBook = function () {
        var _this = this;
        this.firebase.getToken()
            .then(function (token) {
            console.log("The token is " + token);
            //alert(JSON.stringify(token));
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var permissions = new Array();
            var nav = _this.navCtrl;
            permissions = ['public_profile', 'user_friends', 'email'];
            _this.facebook.login(permissions)
                .then(function (response) {
                var userId = response.authResponse.userID;
                var params = new Array();
                _this.facebook.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
                    .then(function (user) {
                    user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                    var fdata = {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        name: user.name,
                        email: user.email,
                        fb_id: user.id,
                        phone: '',
                        dob: '',
                        address: '',
                        image: user.picture,
                        gender: '',
                        tokenid: token
                    };
                    var Serialized = _this.common.serializeObj(fdata);
                    console.log(Serialized);
                    var options = _this.common.options;
                    Loading.present().then(function () {
                        _this.http.post(_this.common.base_url + 'users/fblogin', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (datafb) {
                            Loading.dismiss();
                            if (datafb.status == 0) {
                                localStorage.setItem('ID', datafb.data.User.id);
                                localStorage.setItem('Userdata', JSON.stringify(datafb.data.User));
                                localStorage.setItem('Status', '1');
                                localStorage.setItem('fb', '1');
                                var toast = _this.toastCtrl.create({
                                    message: datafb.msg,
                                    duration: 3000,
                                    position: 'middle'
                                });
                                toast.present();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                            }
                        }, function (error) {
                            Loading.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "Check your Network Connection",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        });
                    });
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }) // save the token server-side and use it to push notifications to this device
            .catch(function (error) {
            console.error('Error getting token', error);
            //alert(JSON.stringify(error));
        });
    };
    SigninPage.prototype.gooGle = function () {
        var _this = this;
        this.firebase.getToken()
            .then(function (token) {
            console.log("The token is " + token);
            //alert(JSON.stringify(token));
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            _this.googlePlus.login({
                'webClientId': '419942336620-r59elsvpmk4fr1t64hbb4mlus6f9pe35.apps.googleusercontent.com',
                'offline': true
            }).then(function (res) {
                var data_google = {
                    name: res.displayName,
                    google_id: res.userId,
                    email: res.email,
                    image: res.imageUrl,
                    tokenid: token
                };
                console.log(_this.common.options);
                var options = _this.common.options;
                var Serialized = _this.common.serializeObj(data_google);
                console.log(Serialized);
                var options = _this.common.options;
                Loading.present().then(function () {
                    _this.http.post(_this.common.base_url + 'users/googlelogin', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (datag) {
                        Loading.dismiss();
                        if (datag.status == 0) {
                            localStorage.setItem('ID', datag.data.User.id);
                            localStorage.setItem('Userdata', JSON.stringify(datag.data.User));
                            localStorage.setItem('Status', '1');
                            localStorage.setItem('google', '1');
                            var toast = _this.toastCtrl.create({
                                message: datag.msg,
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: datag.message,
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                    }, function (error) {
                        Loading.dismiss();
                        //alert(JSON.stringify(error));
                        //alert(error);
                    });
                });
            }, function (error) {
                //alert(JSON.stringify(error));
            });
        }) // save the token server-side and use it to push notifications to this device
            .catch(function (error) {
            console.error('Error getting token', error);
            //alert(JSON.stringify(error));
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/signin/signin.html"*/`<ion-header hidden>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Get Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n		</div>\n		<div class="form_sec">\n			<form #signin="ngForm">\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-person-outline" md="md-person"></ion-icon></ion-label>\n						<ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Email" required></ion-input>\n					</ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                              \n                                              <div [hidden]="!email.errors.required">\n                                                Email is required\n                                              </div>\n                                              <div [hidden]="!email.errors.pattern">\n                                                In-valid email\n                                              </div>\n                                            </div>\n                                            <!--<div *ngIf="!email.errors && (!email.dirty || !email.touched)">\n                                              <img class="tick" item-right src="assets/imgs/tickryt.png">\n                                            </div>-->\n                                        </ion-label>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-lock-outline" md="md-lock"></ion-icon></ion-label>\n						<ion-input type="{{type}}" name="password" [(ngModel)]="data.password" id="password" #password="ngModel" minlength="8" placeholder="Password" required></ion-input>\n						<button *ngIf="!showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n							<ion-icon name="eye" name="eye"></ion-icon>\n							</button>\n				<button *ngIf="showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n					<ion-icon name="eye-off"></ion-icon>\n					</button>						\n					</ion-item>\n					\n                                    <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="password.errors && (password.dirty || password.touched)">\n                                              \n                                              <div [hidden]="!password.errors.required">\n                                                Password is required\n                                              </div>\n                                              <div [hidden]="!password.errors.minlength">\n                                                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n                                              </div>\n                                            </div>\n                                            \n                                          </ion-label>\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" round (click)="signIn(signin)" [disabled]="!signin.form.valid">Sign In</button>\n				</div>\n			</form>\n		</div>\n		<div class="social_sec">\n			<button ion-button class="fb-btn" block (click)="faceBook()"><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> Log in with facebook</button>\n			<button ion-button class="gm-btn" block (click)="gooGle()"><ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon> Log in with Gmail</button>\n		</div>\n		<div class="forgot">\n			<button ion-button clear (click)="openforgotPage()">Forgot Password?</button>\n			<p>Not registered? <button ion-button clear (click)="signUp()">Sign Up</button></p>\n		</div>\n		\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/signin/signin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__["a" /* Firebase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__["a" /* Firebase */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditphotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallerytwo_gallerytwo__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locality_locality__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__galdetail_galdetail__ = __webpack_require__(94);
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
 * Generated class for the EditphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditphotoPage = (function () {
    function EditphotoPage(navCtrl, navParams, modalCtrl, http, alertCtrl, common, toastCtrl, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bit = 0;
        this.data = {
            audience: ''
        };
        this.check = false;
        this.trip_id = localStorage.getItem('TripID');
        this.imgdata = this.navParams.get('send');
        console.log(this.imgdata);
        if (this.imgdata) {
            this.showimg = this.imgdata.Gallery.image;
            this.location = this.imgdata.Gallery.location;
            if (this.location) {
                this.data.audience = true;
                this.bit = 1;
                console.log(this.bit);
            }
            else {
                this.data.audience = false;
            }
        }
    }
    EditphotoPage.prototype.edit = function () {
        console.log('edit');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__galdetail_galdetail__["a" /* GaldetailPage */], {
            send: this.imgdata
        });
    };
    EditphotoPage.prototype.ionViewWillEnter = function () {
        this.imgdata = this.navParams.get('send');
        if (this.imgdata) {
            if (this.imgdata.Gallery.imagestatus == 1) {
                //this.check = true;
                this.data.audience = true;
            }
            else {
                //this.check = false;
                this.data.audience = false;
            }
        }
    };
    EditphotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditphotoPage');
    };
    EditphotoPage.prototype.notify = function () {
        var _this = this;
        console.log(this.data.audience);
        if (this.data.audience == true) {
            this.aud = 1;
        }
        else if (this.data.audience == false) {
            this.aud = 0;
        }
        console.log('audience' + this.aud);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            imageid: this.imgdata.Gallery.id,
            trip_id: this.trip_id,
            status: this.aud
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'galleries/setimagestatus', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.status == 0) {
                    if (data.data.Gallery.imagestatus == 0) {
                        /*let toast = this.toastCtrl.create({
                      message: "Public Selected",
                      duration: 3000,
                      position: 'middle'
                    });
                    toast.present();*/
                    }
                    else if (data.data.Gallery.imagestatus == 1) {
                        /*let toast = this.toastCtrl.create({
                    message: "GroupOnly Selected",
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present(); */
                    }
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    EditphotoPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gallerytwo_gallerytwo__["a" /* GallerytwoPage */]);
    };
    EditphotoPage.prototype.addLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__locality_locality__["a" /* LocalityPage */], {
            locationpage: this.imgdata
        });
    };
    EditphotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editphoto',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/editphoto/editphoto.html"*/`<!--<ion-header>\n    <ion-toolbar color="theme">\n      <ion-title class="header_title" color="text">Edit Photo</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <div class="app_usr"><img src="assets/imgs/a.png"></div>\n        </button>\n        </ion-buttons>\n    \n    </ion-toolbar>\n    </ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Edit Photo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div class="edit_main">\n      \n    <div class="pic">\n        <ion-card no-margin>\n        <img src="{{showimg}}">\n        <button ion-button color="light" clear (click)="edit()"><ion-icon ios="md-create" md="md-create"></ion-icon> Edit</button>\n        </ion-card>\n    </div>\n      \n    <div style="padding:8px;">\n        <h4>TAG LOCATION</h4>\n        <div *ngIf="bit == \'0\'">\n        <button ion-button clear color="theme" (click)="addLocation()" style="height: 14px;font-size: 12px;margin: 2px 0;padding: 0;">+ Add Location</button>\n    </div>\n    \n    <div *ngIf="bit == \'1\'">\n        <p>{{location}}</p>\n    </div>\n    \n	 <ion-row class="edit_outer">\n		<!-- <ion-col col-5 style="padding-left:0px;">\n			<ion-label>SELECT LAYOUT</ion-label>\n			<ion-list class="aud">\n			  <ion-item>\n				<ion-select [(ngModel)]="gaming">\n				  <ion-option value="nes" selected="true">NES</ion-option>\n				  <ion-option value="n64">Nintendo64</ion-option>\n				</ion-select>\n			  </ion-item>\n			</ion-list>\n		 </ion-col>-->\n		 <ion-col col-12 style="padding:5px 0px;">\n			<ion-label>CHOOSE AUDIENCE</ion-label>\n			<ion-row class="pub">\n				<ion-col col-2 style="padding: 5px 0px;"> <span>Public</span></ion-col>\n                                \n				<ion-col col-3 style="padding: 0px 5px;">\n                                               \n                          <ion-toggle name="audience" id="audience" [(ngModel)]="data.audience" (ionChange)="notify()" [checked]="data.audience"></ion-toggle>\n                        \n                              </ion-col>\n                                \n				<ion-col col-5 style="padding: 5px 0px;"> <span>Group Only</span></ion-col>\n			</ion-row>\n                        \n		 </ion-col>\n	 </ion-row>\n	</div>\n   \n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/editphoto/editphoto.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], EditphotoPage);
    return EditphotoPage;
}());

//# sourceMappingURL=editphoto.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewactivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discovertop_discovertop__ = __webpack_require__(95);
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
 * Generated class for the ViewactivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewactivitiesPage = (function () {
    function ViewactivitiesPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.filterbit = 0;
        this.data = {
            filter: ''
        };
        this.infolow = [];
        this.send = this.navParams.get('send');
        if (this.send) {
            this.activities = this.send.activities;
            console.log(this.activities);
            this.redirect = this.send.back;
            console.log(this.redirect);
            if (this.redirect == '2') {
                this.title = this.send.title;
                console.log(this.title);
                this.front = this.send.front;
                console.log(this.front);
            }
            if (this.redirect == '3') {
                this.location = this.send.location;
                console.log(this.location);
            }
        }
    }
    ViewactivitiesPage.prototype.back = function () {
        if (this.redirect == '1') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__discover_discover__["a" /* DiscoverPage */], {
                activities: this.activities
            });
        }
        else if (this.redirect == '2') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */], {
                activities: this.activities,
                title: this.title,
                send: this.front
            });
        }
        else if (this.redirect == '3') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__discovertop_discovertop__["a" /* DiscovertopPage */], {
                activities: this.activities,
                location: this.location
            });
        }
    };
    ViewactivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewactivitiesPage');
    };
    ViewactivitiesPage.prototype.filterSelect = function (chose) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            if (chose == 'lowest') {
                Loading.dismiss();
                _this.filterbit = 0;
                console.log(_this.activities.length);
                var n = _this.activities.length;
                var temp = 0;
                for (var i = 0; i < n; i++) {
                    for (var j = 1; j < (n - i); j++) {
                        if (_this.activities[j - 1].amountsFrom[0].convertedAmount > _this.activities[j].amountsFrom[0].convertedAmount) {
                            temp = _this.activities[j - 1];
                            _this.activities[j - 1] = _this.activities[j];
                            _this.activities[j] = temp;
                        }
                    }
                }
                console.log(_this.activities);
            }
            else if (chose == 'highest') {
                Loading.dismiss();
                _this.filterbit = 1;
                var n = _this.activities.length;
                var temp = 0;
                for (var i = 0; i < n; i++) {
                    for (var j = 1; j < (n - i); j++) {
                        if (_this.activities[j - 1].amountsFrom[0].convertedAmount < _this.activities[j].amountsFrom[0].convertedAmount) {
                            temp = _this.activities[j - 1];
                            _this.activities[j - 1] = _this.activities[j];
                            _this.activities[j] = temp;
                        }
                    }
                }
                console.log(_this.activities);
            }
        });
    };
    ViewactivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewactivities',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/viewactivities/viewactivities.html"*/`<!--<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Discover</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Discover</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content class="viewall">\n  \n\n  <ion-item class="filter" no-padding>\n    <ion-label><span>Filter</span></ion-label>\n    <ion-select name="filter" id="filter" #filter="ngModel" [(ngModel)]="data.filter" (ionChange)="filterSelect($event)" placeholder="Price">\n          <ion-option value="lowest" selected="true">Lowest Price</ion-option>\n          <ion-option value="highest">Highest Price</ion-option>\n        </ion-select>\n  </ion-item>\n\n\n    <div *ngIf="filterbit == \'0\'">\n<ion-card class="waterfall" *ngFor="let act of activities">\n\n      <ion-item>\n        <ion-avatar item-start>\n            <img src="{{act.content.media.images[0].urls[0].resource}}">\n        </ion-avatar>\n        <h2>{{act.name}}</h2>       \n        <!--<p>{{act.content.description}}</p>-->\n<!--        <p [innerHTML]="act.content.description"></p>-->\n            <div class="wrap">\n              <div class="read-more">\n                <div class="content">\n                  <h3 [innerHTML]="act.content.description"></h3>\n                </div>\n                <span data-read-more="+ read more" data-read-less="- show less" class="trigger" onclick="this.parentElement.classList.toggle(\'expanded\')"></span>\n              </div>\n            </div>\n      \n         <p>{{act.country.name}}</p>\n        <!--<span>Waterfall</span>-->\n<!--        <ul>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li> <ion-icon name="star-outline"></ion-icon></li>\n            <li><span>3,789</span></li>\n          </ul>-->\n\n          <ion-note item-end="" class="note note-ios">{{act.amountsFrom[0].convertedAmount}}<span>and up</span></ion-note>\n      </ion-item>\n\n\n      </ion-card>\n        </div>\n    \n    <div *ngIf="filterbit == \'1\'">\n        <ion-card class="waterfall" *ngFor="let act of activities">\n\n      <ion-item>\n        <ion-avatar item-start>\n            <img src="{{act.content.media.images[0].urls[0].resource}}">\n        </ion-avatar>\n        <h2>{{act.name}}</h2>       \n        <div class="wrap">\n              <div class="read-more">\n                <div class="content">\n                  <h3 [innerHTML]="act.content.description"></h3>\n                </div>\n                <span data-read-more="+ read more" data-read-less="- show less" class="trigger" onclick="this.parentElement.classList.toggle(\'expanded\')"></span>\n              </div>\n            </div>\n         <p>{{act.country.name}}</p>\n        <!--<span>Waterfall</span>-->\n<!--        <ul>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li> <ion-icon name="star-outline"></ion-icon></li>\n            <li><span>3,789</span></li>\n          </ul>-->\n\n          <ion-note item-end="" class="note note-ios">{{act.amountsFrom[0].convertedAmount}}<span>and up</span></ion-note>\n      </ion-item>\n\n\n      </ion-card>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/viewactivities/viewactivities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], ViewactivitiesPage);
    return ViewactivitiesPage;
}());

//# sourceMappingURL=viewactivities.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flightdetail_flightdetail__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover__ = __webpack_require__(36);
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
 * Generated class for the FlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlightPage = (function () {
    function FlightPage(navCtrl, navParams, http, common, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = {
            filter: ''
        };
        this.info = [];
        this.info1 = [];
        this.info2 = [];
        this.origin = [];
        this.des = [];
        this.filterbit = 0;
        this.result = [];
        this.flightdetail = this.navParams.get('fdetail');
        console.log(this.flightdetail);
        if (this.flightdetail) {
            this.source = this.flightdetail.source;
            this.destination = this.flightdetail.destination;
            this.flights = this.flightdetail.flights;
            this.track_id = this.flightdetail.track_id;
            console.log(this.track_id);
            console.log(this.flightdetail.flights.length);
            for (var i = 0; i < this.flightdetail.flights.length; i++) {
                //this.no = this.flightdetail.flights[i].Connection.Onward.NoOfStops;
                this.info1 = [];
                this.no = (this.flightdetail.flights[i].FlightDetails.length) - 1;
                for (var j = 0; j < this.flightdetail.flights[i].FlightDetails.length; j++) {
                    this.info1.push({
                        FlightID: this.flightdetail.flights[i].FlightDetails[j].FlightID,
                        FlightNum: this.flightdetail.flights[i].FlightDetails[j].FlightNum,
                        CarrierId: this.flightdetail.flights[i].FlightDetails[j].CarrierCode,
                        AircraftType: this.flightdetail.flights[i].FlightDetails[j].AirCraftType,
                        Origin: this.flightdetail.flights[i].FlightDetails[j].Origin,
                        Destination: this.flightdetail.flights[i].FlightDetails[j].Destination,
                        DepartureDateTime: this.flightdetail.flights[i].FlightDetails[j].DepartureDateTime,
                        ArrivalDateTime: this.flightdetail.flights[i].FlightDetails[j].ArrivalDateTime,
                        ClassCode: this.flightdetail.flights[i].FlightDetails[j].ClassCode,
                        EquipmentType: this.flightdetail.flights[i].FlightDetails[j].AirEquipType,
                        OperatingCarrierId: this.flightdetail.flights[i].FlightDetails[j].CarrierCode,
                        Meal: this.flightdetail.flights[i].FlightDetails[j].MealCode.MealCode,
                        OrgTerminal: this.flightdetail.flights[i].FlightDetails[j].OrgTerminal,
                        DestTerminal: this.flightdetail.flights[i].FlightDetails[j].DesTerminal,
                        MajorClassCode: this.flightdetail.flights[i].FlightDetails[j].MajorClassCode,
                        Baggage: this.flightdetail.flights[i].FlightDetails[j].Baggage,
                        Duration: this.flightdetail.flights[i].FlightDetails[j].Duration,
                        ApiProvider: this.flightdetail.flights[i].ApiProvider,
                        MarriageGroup: this.flightdetail.flights[i].FlightDetails[j].MarriageGroup,
                        IsStopAirport: this.flightdetail.flights[i].FlightDetails[j].IsStopAirport
                    });
                }
                this.info.push({
                    n: this.no,
                    s: this.flightdetail.flights[i].FlightDetails[0].Origin,
                    d: this.flightdetail.flights[i].FlightDetails[this.no].Destination,
                    s_date: this.flightdetail.flights[i].FlightDetails[0].DepartureDateTime,
                    d_date: this.flightdetail.flights[i].FlightDetails[this.no].ArrivalDateTime,
                    airline: this.flightdetail.flights[i].FlightDetails[0].AirlineName,
                    price: this.flightdetail.flights[i].FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
                    flights: this.flightdetail.flights[i],
                    dates: this.info1
                });
            }
            console.log(this.info);
        }
        this.flightdetail2 = this.navParams.get('f2detail');
        console.log(this.flightdetail2);
        if (this.flightdetail2) {
            this.source = this.flightdetail2.source;
            this.destination = this.flightdetail2.destination;
            console.log(this.destination);
            this.flights = this.flightdetail2.flights;
            this.track_id = this.flightdetail2.track_id;
            console.log(this.track_id);
            console.log(this.flightdetail2.flights.length);
            for (var i = 0; i < this.flightdetail2.flights.length; i++) {
                //this.no = this.flightdetail.flights[i].Connection.Onward.NoOfStops;
                this.info1 = [];
                console.log(this.flightdetail2.flights[i].FlightDetails);
                this.no = (this.flightdetail2.flights[i].FlightDetails.length) - 4;
                //          this.d = (this.flightdetail2.flights[i].FlightDetails.length - 1) - 2;           
                for (var j = 0; j < this.flightdetail2.flights[i].FlightDetails.length; j++) {
                    this.info1.push({
                        FlightID: this.flightdetail2.flights[i].FlightDetails[j].FlightID,
                        FlightNum: this.flightdetail2.flights[i].FlightDetails[j].FlightNum,
                        CarrierId: this.flightdetail2.flights[i].FlightDetails[j].CarrierCode,
                        AircraftType: this.flightdetail2.flights[i].FlightDetails[j].AirCraftType,
                        Origin: this.flightdetail2.flights[i].FlightDetails[j].Origin,
                        Destination: this.flightdetail2.flights[i].FlightDetails[j].Destination,
                        DepartureDateTime: this.flightdetail2.flights[i].FlightDetails[j].DepartureDateTime,
                        ArrivalDateTime: this.flightdetail2.flights[i].FlightDetails[j].ArrivalDateTime,
                        ClassCode: this.flightdetail2.flights[i].FlightDetails[j].ClassCode,
                        EquipmentType: this.flightdetail2.flights[i].FlightDetails[j].AirEquipType,
                        OperatingCarrierId: this.flightdetail2.flights[i].FlightDetails[j].CarrierCode,
                        Meal: this.flightdetail2.flights[i].FlightDetails[j].MealCode.MealCode,
                        OrgTerminal: this.flightdetail2.flights[i].FlightDetails[j].OrgTerminal,
                        DestTerminal: this.flightdetail2.flights[i].FlightDetails[j].DesTerminal,
                        MajorClassCode: this.flightdetail2.flights[i].FlightDetails[j].MajorClassCode,
                        Baggage: this.flightdetail2.flights[i].FlightDetails[j].Baggage,
                        Duration: this.flightdetail2.flights[i].FlightDetails[j].Duration,
                        ApiProvider: this.flightdetail2.flights[i].ApiProvider,
                        MarriageGroup: this.flightdetail2.flights[i].FlightDetails[j].MarriageGroup,
                        IsStopAirport: this.flightdetail2.flights[i].FlightDetails[j].IsStopAirport
                    });
                    if (this.flightdetail2.flights[i].FlightDetails[j].Destination == this.destination) {
                        //console.log(this.flightdetail2.flights[i].FlightDetails[j].Destination);
                        this.d = j;
                        //console.log(this.d);                    
                    }
                }
                this.info.push({
                    n: this.no,
                    s: this.flightdetail2.flights[i].FlightDetails[0].Origin,
                    d: this.flightdetail2.flights[i].FlightDetails[this.d].Destination,
                    s_date: this.flightdetail2.flights[i].FlightDetails[0].DepartureDateTime,
                    d_date: this.flightdetail2.flights[i].FlightDetails[this.d].ArrivalDateTime,
                    airline: this.flightdetail2.flights[i].FlightDetails[0].AirlineName,
                    price: this.flightdetail2.flights[i].FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
                    flights: this.flightdetail2.flights[i],
                    dates: this.info1
                });
                //this.destination = this.flightdetail2.flights[i].FlightDetails[this.d].DestinationAirportCity;
            }
            console.log(this.info);
        }
    }
    FlightPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    FlightPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlightPage');
    };
    FlightPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__discover_discover__["a" /* DiscoverPage */]);
    };
    FlightPage.prototype.filterSelect = function (chose) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            if (chose == 'lowest') {
                Loading.dismiss();
                _this.filterbit = 0;
            }
            else if (chose == 'highest') {
                Loading.dismiss();
                _this.filterbit = 1;
            }
        });
    };
    FlightPage.prototype.arival = function (flight, item, price) {
        var _this = this;
        console.log(flight);
        console.log(item);
        console.log(item.length);
        console.log(price);
        //       for(let i = 0; i < item.length; i++){
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            TrackId: this.track_id,
            ItinearyDetails: {
                Segments: [{
                        ValidatingCarrier: flight.ValidatingCarrier,
                        Price: flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
                        item: item
                        /*[ {
                            FlightID: flight.FlightDetails[0].FlightID,
                            FlightNum: flight.FlightDetails[0].FlightNum,
                            CarrierId: flight.FlightDetails[0].CarrierCode,
                           AircraftType: flight.FlightDetails[0].AirCraftType,
                           Origin: flight.FlightDetails[0].Origin,
                           Destination: flight.FlightDetails[0].Destination,
                           DepartureDateTime: flight.FlightDetails[0].DepartureDateTime,
                           ArrivalDateTime: flight.FlightDetails[0].ArrivalDateTime,
                           ClassCode: flight.FlightDetails[0].ClassCode,
                           EquipmentType: flight.FlightDetails[0].AirEquipType,
                           OperatingCarrierId: flight.FlightDetails[0].CarrierCode,
                           Meal: flight.FlightDetails[0].MealCode.MealCode,
                           OrgTerminal: flight.FlightDetails[0].OrgTerminal,
                           DestTerminal: flight.FlightDetails[0].DesTerminal,
                           MajorClassCode: flight.FlightDetails[0].MajorClassCode,
                           Baggage: flight.FlightDetails[0].Baggage,
                           Duration: flight.FlightDetails[0].Duration,
                           ApiProvider: flight.ApiProvider,
                           MarriageGroup: flight.FlightDetails[0].MarriageGroup,
                           IsStopAirport: flight.FlightDetails[0].IsStopAirport
                       }
                       ]*/
                    }
                ]
            }
        };
        console.log(data_form);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/look', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.Message == 'success') {
                    _this.sellrequest = data.SellRequestId;
                    console.log(_this.sellrequest);
                    console.log(data.FlightTimesAndDuration[0].Duration);
                    console.log(data.ItinearyDetails.Segments[0].item);
                    if (_this.flightdetail) {
                        var send = {
                            get: data,
                            flight: flight,
                            item: item,
                            trackid: _this.track_id,
                            fdetail: _this.flightdetail,
                            price: data.PricingInfo[0].GrossAmount,
                            currency: data.PricingInfo[0].CurrencyCode,
                            bit: 0,
                            request: data.SellRequestId
                        };
                    }
                    else if (_this.flightdetail2) {
                        var send = {
                            get: data,
                            flight: flight,
                            item: item,
                            trackid: _this.track_id,
                            fdetail: _this.flightdetail2,
                            price: data.PricingInfo[0].GrossAmount,
                            currency: data.PricingInfo[0].CurrencyCode,
                            bit: 1,
                            request: data.SellRequestId
                        };
                    }
                    _this.result.push(send);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__flightdetail_flightdetail__["a" /* FlightdetailPage */], {
                        send: send
                    });
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
        //  }
        //  this.navCtrl.push(FlightdetailPage,{
        //              send: this.result
        //          });
    };
    FlightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flight',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/flight/flight.html"*/`<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Flight</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n\n<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Flight</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content>\n      \n      <div class="plane">\n      \n        <div class="fst">\n        <h2>{{source}}</h2>\n      </div>\n      \n      <div class="icon1">\n        <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n      </div>\n      \n      <div class="last">\n          <h2>{{destination}}</h2>\n        </div>\n        \n      </div>\n      \n        <!--<span class="date">18/7/2017-20/7/2017 <ion-icon ios="md-calendar" md="md-calendar"></ion-icon></span>-->\n      \n          <ion-item class="filter" no-padding>\n              <ion-label><span>Filter</span></ion-label>\n              <ion-select name="filter" id="filter" #filter="ngModel" [(ngModel)]="data.filter" (ionChange)="filterSelect($event)" placeholder="Price">\n          <ion-option value="lowest" selected="true">Lowest Price</ion-option>\n          <ion-option value="highest">Highest Price</ion-option>\n        </ion-select>\n            </ion-item>\n          \n          \n          <h3 class="head">Departure</h3>\n          <!--<div *ngFor="let flight of flights">\n          <!--<ion-card class="waterfall" *ngFor="let fl of flight.FlightDetails">-->\n          <!--<ion-card class="waterfall" *ngFor="let fl of flights">\n                <ion-item (click)="arival()">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/plane2.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                 \n                  <div>\n                      <p>{{fl.ArrivalDateTime}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.DepartureDateTime}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fl.Origin}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.Destination}}</p>\n                    <span>{{fl.AirlineName}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <li>{{fl.Duration}}</li>\n                      <!--<li>{{flight.Connection.Onward.NoOfStops}} stop in IST</li>\n                    </ul>\n                  </div>\n                 \n                    <!--<ion-note item-end="" class="note note-ios">{{flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>-->\n          \n          \n                    <div *ngIf="filterbit == \'0\'">\n                         <ion-card class="waterfall" *ngFor="let fl of info">\n                <ion-item (click)="arival(fl.flights,fl.dates,fl.price)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/plane2.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  -->\n                  <div>\n                      <p>{{fl.s_date | date: \'HH:mm a\'}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.d_date | date: \'HH:mm a\'}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fl.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.d}}</p>\n                    <span>{{fl.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{fl.Duration}}</li>-->\n                     <li>{{fl.n}} stops</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{fl.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n                    </div>\n                    \n                    <div *ngIf="filterbit == \'1\'">\n                         <ion-card class="waterfall" *ngFor="let fl of info.slice().reverse()">\n                <ion-item (click)="arival(fl.flights,fl.dates,fl.price)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/plane2.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  -->\n                  <div>\n                      <p>{{fl.s_date | date: \'HH:mm a\'}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.d_date | date: \'HH:mm a\'}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fl.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.d}}</p>\n                    <span>{{fl.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{fl.Duration}}</li>-->\n                     <li>{{fl.n}} stops</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{fl.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n                    </div>\n         \n                    \n                    <!--<ion-card class="waterfall" *ngFor="let fli of info1">\n                <ion-item (click)="arival(fli.flights,fli.dates)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/plane2.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  \n                  <div>\n                      <p>{{fli.s_date}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fli.d_date2}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fli.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fli.d}}</p>\n                    <span>{{fli.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{fli.Duration}}</li>\n                     <li>{{fli.n}} stop in {{fli.stop}}</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{fli.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n                    \n                    <ion-card class="waterfall" *ngFor="let flig of info2">\n                <ion-item (click)="arival(flig.flights)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/plane2.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  \n                  <div>\n                      <p>{{flig.s_date}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{flig.d_date2}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{flig.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{flig.d}}</p>\n                    <span>{{flig.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{flig.Duration}}</li>\n                     <li>{{flig.n}} stop in {{flig.stop1}}, {{flig.stop2}}</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{flig.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>-->\n          <!--</div>-->\n      </ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/flight/flight.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], FlightPage);
    return FlightPage;
}());

//# sourceMappingURL=flight.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviewbooking_reviewbooking__ = __webpack_require__(99);
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
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankyouPage = (function () {
    function ThankyouPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fid = this.navParams.get('fid');
        this.id = this.navParams.get('id');
        this.interval = setInterval(function () {
            _this.showDetail();
        }, 5000);
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    //  back(){
    //      this.navCtrl.push(HomePage);
    //  }
    ThankyouPage.prototype.showDetail = function () {
        if (this.fid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reviewbooking_reviewbooking__["a" /* ReviewbookingPage */], {
                fid: this.fid
            });
            clearInterval(this.interval);
        }
        else if (this.id) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reviewbooking_reviewbooking__["a" /* ReviewbookingPage */], {
                id: this.id
            });
            clearInterval(this.interval);
        }
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-thankyou',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/thankyou/thankyou.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n<!--    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>-->\n\n    <ion-title class="header_title" color="text">Thank you</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/thankyou/thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonProvider = (function () {
    function CommonProvider(http) {
        this.http = http;
        this.base_url = "http://rakesh.crystalbiltech.com/grouptrip/api/";
        console.log('Hello CommonProvider Provider');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    CommonProvider.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_trip_my_trip__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addtrip_addtrip__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rating_rating__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, common, http, events, app, loadingCtrl, toastCtrl, navParams) {
        //this.trip = "upcoming";
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.events = events;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.trip = 'upcoming';
        localStorage.setItem('bit', '1');
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.viewTrip();
        events.publish('user:login');
        this.choose = this.navParams.get('choose');
        if (this.choose == 2) {
            this.trip = 'past';
            this.pastTrips();
        }
    }
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.viewTrip();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.opentripPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_trip_my_trip__["a" /* My_tripPage */]);
        //this.app.getRootNav().setRoot(My_tripPage);
    };
    HomePage.prototype.viewProfile = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.image = data.data.User.image;
                console.log(_this.image);
            }
            else {
            }
        }, function (error) {
        });
    };
    HomePage.prototype.viewTrip = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/upcomingtrip', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.show = 1;
                    _this.trips = data.data;
                    console.log(_this.trips);
                }
                else {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    HomePage.prototype.cLick = function (id) {
        localStorage.setItem('TripID', id);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    HomePage.prototype.pastTrips = function () {
        var _this = this;
        console.log('past');
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/pasttrip', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.pasttrips = data.data;
                    console.log(_this.pasttrips);
                }
                else {
                    Loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    HomePage.prototype.openFeedback = function (trip) {
        console.log(trip);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__rating_rating__["a" /* RatingPage */], {
            tripData: trip
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/home/home.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n	  <ion-title class="header_title" color="text">my trips</ion-title>\n	  <ion-buttons end>\n		<button ion-button icon-only menuToggle>\n			<div class="app_usr">\n				\n				<img *ngIf="image" src="{{image}}">\n						\n				<img *ngIf="!image" src="assets/imgs/user.png">\n			</div>\n		  </button>\n	  </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="page_wrapper">\n		<!-- Ion Segment Button Start Here -->\n		<div class="top_segment-sec" padding>\n			<ion-segment [(ngModel)]="trip">\n				<ion-segment-button  class="segment-button segment-activated" value="upcoming" (click)="viewTrip()">\n					Upcoming\n				</ion-segment-button>\n				<ion-segment-button value="past" (click)="pastTrips()">\n					Past\n				</ion-segment-button>\n			</ion-segment>\n		</div>\n		<!-- Ion Segment Button End Here Here -->\n		<div class="bottom_sec" [ngSwitch]="trip">\n		\n			<ion-list *ngSwitchCase="\'upcoming\'">\n				<ion-item>\n					<div class="top_sec" *ngIf="!show">\n						<h1>Let\'s get away!</h1>\n						<p>You have no upcoming trips.</p>\n						<button ion-button clear (click)="opentripPage()">Plan your next vacation.</button>\n						<figure>\n							<img src="assets/imgs/my_trip.jpg">\n						</figure>\n					</div>\n					<div *ngIf="show">\n					<div class="card_sec" *ngFor = "let tr of trips">\n							<ion-card (click)="cLick(tr.trip.id)">\n									<!--<img src="assets/imgs/getstartback.jpeg"/>-->                                                                        \n                                                                        <img *ngIf="tr.trip.image" src="{{tr.trip.image}}">\n                                                                        <img *ngIf="!tr.trip.image" src="assets/imgs/getstartback.jpeg">\n                                                                     \n									<ion-card-content>\n										<ion-card-title>\n											{{tr.trip.end_location}}\n										</ion-card-title>\n										<p>{{tr.trip.trip_startdate | date: \'MMM d\'}} - {{tr.trip.trip_enddate | date: \'MMM d, yyyy\'}}</p>\n										<!--<p>Mar 16 - Mar 25, 2017</p>-->\n									</ion-card-content>\n								</ion-card>\n					</div>\n					</div>\n<!-- 					<div class="add_button">\n						<button ion-button color="theme">\n							<ion-icon ios="ios-add" md="md-add"></ion-icon>\n						</button>\n					</div> -->\n				</ion-item>\n			</ion-list><!-- First Case End Here -->\n			\n			<ion-list *ngSwitchCase="\'past\'">\n				<ion-item>\n					<div class="card_sec" *ngFor="let past of pasttrips">\n						<ion-card (click)="openFeedback(past.trip)">\n							<img *ngIf="past.trip.image" src="{{past.trip.image}}">\n                                                        <img *ngIf="!past.trip.image" src="assets/imgs/getstartback.jpeg">\n                                                                     \n							<ion-card-content>\n								<ion-card-title>\n								{{past.trip.end_location}}\n								</ion-card-title>\n								<p>{{past.trip.trip_startdate | date: \'MMM d\'}} - {{past.trip.trip_enddate | date: \'MMM d, yyyy\'}}</p>\n										\n							</ion-card-content>\n						</ion-card>\n						\n					</div>\n				</ion-item>\n				\n			</ion-list><!-- Second Case End Here -->\n			\n		</div>\n	</div>\n\n	\n	<ion-fab bottom right edge>\n			<button ion-fab color="theme" (click)="opentripPage()"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>	\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchitinerary_searchitinerary__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewactivities_viewactivities__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addtrip_addtrip__ = __webpack_require__(35);
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
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.title = this.navParams.get('title');
        this.ldata = this.navParams.get('send');
        console.log(this.ldata);
        if (this.ldata) {
            this.a_currency = this.ldata.currency;
            this.from = this.ldata.fromDate;
            this.to = this.ldata.toDate;
            var d = this.ldata.destination.split(",");
            this.title = d[0];
            this.cityCode(d);
        }
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    LocationPage.prototype.cityCode = function (d) {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            city: d[0]
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.activity_source = data.data[0].Airportcode.airportcode;
                console.log(_this.activity_source);
                _this.activitiesListing();
            }
            else if (data.status == 1) {
            }
        }, function (error) {
        });
    };
    LocationPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__searchitinerary_searchitinerary__["a" /* SearchitineraryPage */]);
    };
    LocationPage.prototype.activitiesListing = function () {
        var _this = this;
        /* if(this.eventt.dmonth == '' && this.eventt.amonth == ''){
            
        let toast = this.toastCtrl.create({
                message: 'Select dates to search',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
        
        }else if(this.eventt.dmonth == ''){
            
        let toast = this.toastCtrl.create({
                message: 'Select Arrival date',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
        
        }else if(this.eventt.amonth == ''){
            
        let toast = this.toastCtrl.create({
                message: 'Select Departure date',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
        
        }else if(this.eventt.dmonth > this.eventt.amonth){
            
              let toast = this.toastCtrl.create({
                message: 'Invalid dates',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
              
        }else if(this.a_currency == undefined && this.activity_source == undefined){
        
            let toast = this.toastCtrl.create({
                message: 'Fill City and country to search',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
              
        }else if(this.a_currency == undefined){
            
            let toast = this.toastCtrl.create({
                message: 'Select country to search',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
              
        }else if(this.activity_source == undefined){
        
            let toast = this.toastCtrl.create({
                message: 'Enter city to search',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
              
        }else{*/
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            currency: this.a_currency,
            fromDate: this.from,
            toDate: this.to,
            searchFilterItems: [{
                    type: 'destination',
                    value: this.activity_source
                }]
        };
        console.log(data_form);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/activities/v1/search', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.ProductErrors.ErrorCode == null) {
                    _this.activities = data.activities;
                    console.log(_this.activities);
                    _this.activityCover = _this.activities[0].content.media.images["0"].urls["0"].resource;
                    console.log(_this.activityCover);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else if (data.ProductErrors.ErrorCode != null) {
                    var toast = _this.toastCtrl.create({
                        message: data.ProductErrors.Message,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
        // }
    };
    LocationPage.prototype.view = function () {
        var send = {
            activities: this.activities,
            back: '2',
            title: this.title,
            front: this.ldata
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__viewactivities_viewactivities__["a" /* ViewactivitiesPage */], {
            send: send
        });
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-location',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/location/location.html"*/`<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n\n<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">{{title}}</ion-title>\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      \n	</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class="card-background-page">\n        <ion-card no-margin>\n        <img *ngIf="activities" src="{{activityCover}}"/>\n        <img *ngIf="!activities" src="assets/imgs/getstartback.jpeg"/>\n      </ion-card>\n      </div>\n\n    <div class="things">\n        <div class="top">\n          <h3>Top things to do</h3>\n          <button *ngIf="activities" (click)="view()">View all activities</button>\n        </div>\n      <ion-scroll scrollX="true" padding>\n          <ion-card *ngFor="let act of activities">\n              <div class="product-img">\n                <img src="{{act.content.media.images[0].urls[0].resource}}" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>{{act.name}}</ion-title>\n                <p class="price">{{act.amountsFrom[0].convertedAmount}}</p>            \n              </ion-card-content>\n            </ion-card>  \n<!--          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n           \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star-outline"></ion-icon></li>\n                <li><span>3,789</span></li>\n              </ul>\n            </ion-card-content>\n          </ion-card>-->\n        </ion-scroll>\n      </div>\n\n      <div class="things">\n        <div class="top">\n            <h3>view friend\'s itinerary</h3>\n            <button (click)="search();">Search all Sao Paulo itineraries</button>\n        </div>\n\n        <ion-scroll scrollX="true" padding class="scrl">\n          <ion-card>\n            <div class="product-img">\n              <img src="assets/imgs/getstartback.jpeg">\n          \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n          \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n                \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n              \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n               \n            </div>\n            <span>Name</span>\n          </ion-card>\n        \n        </ion-scroll>\n      </div>\n\n        <div class="top">\n          <h3>recent pictures</h3>\n          <button>view gallery</button>\n      </div>\n\n     <div class="gallery">\n        <div class="a">\n          <img src="assets/imgs/getstartback.jpeg" />\n        </div>\n        <div class="a">\n          <img src="assets/imgs/getstartback.jpeg" />\n        </div>\n     </div> \n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/location/location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchitineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discover_discover__ = __webpack_require__(36);
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
 * Generated class for the SearchitineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchitineraryPage = (function () {
    function SearchitineraryPage(navCtrl, navParams, http, alertCtrl, geolocation, nativeGeocoder, common, toastCtrl, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pet = "location";
        this.data = {
            searchh: '',
            people: ''
        };
        this.chose = 'location';
        console.log('segment' + this.chose);
        this.id = localStorage.getItem('ID');
    }
    SearchitineraryPage.prototype.choose = function (val) {
        this.pet = val.value;
        console.log('pet' + this.pet);
        console.log(val.value);
        this.chose = val.value;
    };
    SearchitineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchitineraryPage');
    };
    SearchitineraryPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__discover_discover__["a" /* DiscoverPage */], {
            bit: 4
        });
    };
    SearchitineraryPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    SearchitineraryPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                    console.log(self.autocompleteItems);
                    console.log();
                });
            }
        });
    };
    SearchitineraryPage.prototype.chooseItem = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.autocomplete.query + '&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            console.log('here');
            console.log(data.results[0].geometry.location);
            console.log('addresss:' + data.results[0].formatted_address);
            _this.locationn = data.results[0].formatted_address;
            console.log('location' + _this.locationn);
            //this.autocomplete.location = data.results[0].geometry.location;
            _this.searchByLocation(_this.locationn);
        });
    };
    SearchitineraryPage.prototype.searchByLocation = function (loc) {
        var _this = this;
        console.log(loc);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            end_location: loc
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/itinerary_acc_to_location', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.status == true) {
                    _this.u_acc_loc = data.data;
                    console.log(_this.u_acc_loc);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    SearchitineraryPage.prototype.userListing = function (keys) {
        var _this = this;
        console.log(keys);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            code: keys
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/itinerary_acc_to_user', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                if (data.status == 0) {
                    _this.users = data.data;
                    console.log(_this.users);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your network connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    SearchitineraryPage.prototype.userSearch = function (keys) {
        var _this = this;
        this.users = [];
        this.data.people = keys;
        console.log(keys);
        var options = this.common.options;
        var data_form = {
            code: keys
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'trips/itinerary_acc_to_user', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.u_acc_name = data.data;
                console.log(_this.u_acc_name);
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SearchitineraryPage.prototype, "mapElement", void 0);
    SearchitineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-searchitinerary',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/searchitinerary/searchitinerary.html"*/`<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Travel Community</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n\n<ion-content padding>\n    <div class="location_sec">\n	<h5>Search</h5>\n				<!--<ion-list>\n					<ion-item>\n						<ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n						<ion-input type="text" value=""></ion-input>\n					</ion-item>\n				</ion-list>-->\n                                <div *ngIf="chose == \'location\'">\n                                   <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" \n                                        (ionCancel)="dismiss()" placeholder="Start typing and select ..."></ion-searchbar>\n                                            <ion-list>\n                                                <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                                                    {{item.description}}\n                                                </ion-item>\n                                            </ion-list>   \n                                </div>   \n                                <div *ngIf="chose == \'acc\'">\n                                    <ion-searchbar [(ngModel)]="data.people" [showCancelButton]="true" (ionInput)="userListing(data.people)" \n                                        (ionCancel)="dismiss()" placeholder="Start typing and select ..."></ion-searchbar>\n                                            <ion-list>\n                                                <ion-item *ngFor="let u of users" (click)="userSearch(u.User.name)">\n                                                    <ion-avatar item-start>                \n                                                        <img *ngIf="u.User.image" src="{{u.User.image}}">\n                                                        <img *ngIf="!u.User.image" src="assets/imgs/user.png">\n                                                      </ion-avatar>\n                                                    {{u.User.name}}\n                                                </ion-item>\n                                            </ion-list>                                     \n                                </div> \n            \n      </div>\n      \n      <div class="loc">\n          <ion-segment name="searchh" id="searchh" [(ngModel)]="data.searchh" (ionChange)="choose($event)">\n            <ion-segment-button value="location">\n              Location\n            </ion-segment-button>\n            <ion-segment-button value="acc">\n              People\n            </ion-segment-button>\n          </ion-segment>\n       \n        <div [ngSwitch]="pet">\n          <ion-list *ngSwitchCase="\'location\'">\n              \n            <ion-item *ngFor="let us of u_acc_loc">\n              <ion-avatar item-start>                \n                <img *ngIf="us.User.image" src="{{us.User.image}}">\n                <img *ngIf="!us.User.image" src="assets/imgs/user.png">\n              </ion-avatar>\n              <h2>{{us.User.name}}</h2>\n                <div *ngFor="let at of us.Event">\n              <p *ngIf="us.Event.length <= 1">{{at.title}} </p>\n              <p *ngIf="us.Event.length > 1">{{at.title}}, </p>\n              </div>\n              <span>Traveled to {{us.Trip.end_location}}: {{us.Trip.trip_startdate| date: \'MMM yyyy\'}}</span>\n            </ion-item>\n              \n<!--              <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/getstartback.jpeg">\n              </ion-avatar>\n              <h2>Cher</h2>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>\n              <span>Traveled to sao paulo: Feb 2017</span>\n            </ion-item>-->\n         \n          </ion-list>\n        \n          <ion-list *ngSwitchCase="\'acc\'">              \n            <ion-item *ngFor="let usr of u_acc_name">\n                \n                <ion-avatar item-start>\n                    <img *ngIf="usr.User.image" src="{{usr.User.image}}">\n                <img *ngIf="!usr.User.image" src="assets/imgs/user.png">\n                  </ion-avatar>\n              <h2>{{usr.User.name}}</h2>\n                <div *ngFor="let tr of usr.Trips">              \n              <p *ngIf="usr.Trips.length <= 1">| {{tr.end_location}} |</p>\n              <p *ngIf="usr.Trips.length > 1">{{tr.end_location}} | </p>\n              </div>\n            </ion-item>\n      \n          </ion-list>\n        </div>\n\n      </div>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/searchitinerary/searchitinerary.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], SearchitineraryPage);
    return SearchitineraryPage;
}());

//# sourceMappingURL=searchitinerary.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editphoto_editphoto__ = __webpack_require__(66);
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
 * Generated class for the GaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GaldetailPage = (function () {
    function GaldetailPage(navCtrl, navParams, actionSheetCtrl, common, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.data = {
            commentt: ''
        };
        this.buttonClicked = false;
        this.len = 0;
        this.get = this.navParams.get('send');
        if (this.get) {
            this.imgid = this.get.Gallery.id;
            this.bit = this.get.Gallery.status;
            this.image = this.get.Gallery.image;
            this.location = this.get.Gallery.location;
            if (!this.location) {
                this.location = 'Location';
            }
            this.username = this.get.User.name;
            this.tym = this.get.Gallery.created;
            console.log(this.tym);
        }
        this.dis = this.navParams.get('dis');
        console.log(this.dis);
        if (this.dis) {
            this.imgid = this.dis.id;
            this.bit = this.dis.status;
            this.image = this.dis.image;
            this.location = this.dis.location;
            if (!this.location) {
                this.location = 'Location';
            }
            this.username = this.dis.User.name;
            this.tym = this.dis.created;
            console.log(this.tym);
        }
        this.community = this.navParams.get('community');
        console.log(this.community);
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');
        //      this.commentList();
    }
    GaldetailPage.prototype.back = function () {
        if (this.dis) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__discover_discover__["a" /* DiscoverPage */], {
                fcommunity: this.community
            });
        }
        else if (this.get) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__editphoto_editphoto__["a" /* EditphotoPage */]);
        }
    };
    GaldetailPage.prototype.commentList = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            image_id: this.imgid
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'galleries/commentlist', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.comments = data.data;
                console.log(_this.comments);
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    GaldetailPage.prototype.postComment = function () {
        console.log('comments');
        this.buttonClicked = !this.buttonClicked;
        if (this.buttonClicked == true) {
            this.commentList();
            this.len = 1;
        }
        else {
            this.comments = [];
            this.len = 0;
        }
    };
    GaldetailPage.prototype.comment = function (commentForm) {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            image_id: this.imgid,
            trip_id: this.trip_id,
            comment: commentForm.value.commentt
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'galleries/commentonimage', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.data.commentt = '';
                _this.commentList();
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    GaldetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GaldetailPage');
    };
    GaldetailPage.prototype.likeImage = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            image: this.imgid,
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'galleries/addtofavourite', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.bit = data.bit;
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                //this.status = data.data.Favourite.status;
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Check your network connection",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    GaldetailPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: function () {
                        console.log('Destructive clicked');
                        var options = _this.common.options;
                        var data_form = {
                            image_id: _this.imgid,
                            trip_id: _this.trip_id
                        };
                        console.log(data_form);
                        var Serialized = _this.common.serializeObj(data_form);
                        console.log(Serialized);
                        _this.http.post(_this.common.base_url + 'galleries/removeimage', Serialized, options)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log(data);
                            if (data.status == 0) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__gallery_gallery__["a" /* GalleryPage */]);
                                var toast = _this.toastCtrl.create({
                                    message: data.msg,
                                    duration: 3000,
                                    position: 'middle'
                                });
                                toast.present();
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: data.msg,
                                    duration: 3000,
                                    position: 'middle'
                                });
                                toast.present();
                            }
                        }, function (error) {
                            var toast = _this.toastCtrl.create({
                                message: "Check your network connection",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        });
                    }
                }
                /*,{
                  text: 'Archive',
                  handler: () => {
                    console.log('Archive clicked');
                  }
                }*/
                ,
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    GaldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-galdetail',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/galdetail/galdetail.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Detail</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="gallery">\n    <ion-card>\n        \n          <div class="opt">\n            <h2 *ngIf="location">{{location}}</h2>\n            <h2 *ngIf="!location">{{location}}</h2>\n            <button *ngIf="get" (click)="presentActionSheet();" ion-button color="dark" clear><ion-icon ios="ios-more" md="ios-more"></ion-icon></button>\n          </div>\n        \n          <div class="pc"><img src="{{image}}"></div>\n      \n         <div class="like">\n              <button *ngIf="bit == \'0\'" (click)="likeImage()" ion-button icon-left clear small>\n                  <ion-icon ios="ios-heart" md="ios-heart" style="color:#ccc;"></ion-icon>\n                 </button> \n                <button *ngIf="bit == \'1\'" (click)="likeImage()" ion-button icon-left clear small>\n                  <ion-icon ios="ios-heart" md="ios-heart" style="color:#f00;"></ion-icon>\n             </button>   \n            \n              <button ion-button icon-left clear small (click)="postComment()">\n                  <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline" style="color: #333;"></ion-icon>\n              </button>\n             \n             <div class="post">\n                <p>Posted by<span> @{{username}}</span></p>\n               <span>{{tym | date: \'MMM d, yyyy\'}}</span>\n              </div> \n        </div>\n          \n         \n        </ion-card>\n    \n    \n     <ion-list class="coment">\n         <h2 *ngIf="len != \'0\'">Comments:</h2>\n                <ion-item *ngFor="let com of comments">\n                  <ion-avatar item-start *ngIf="!com.User.image">\n                    <img src="assets/imgs/user.png">\n                  </ion-avatar>\n                    <ion-avatar item-start *ngIf="com.User.image">\n                    <img src="{{com.User.image}}">\n                  </ion-avatar>\n                  <h2>{{com.User.name}}</h2>\n                  <p>{{com.Comment.comment}}</p>\n                </ion-item>\n              </ion-list>\n</ion-content>\n\n <ion-footer *ngIf="buttonClicked" style="background: #fff;border-top: 1px solid #ccc;">              \n             \n              \n                 <form #commentForm="ngForm">\n                    <ion-input type="text" name="commentt" [(ngModel)]="data.commentt" id="commentt" #commentt="ngModel" placeholder="Type comment" required></ion-input>\n                        <ion-buttons end>\n                            <button ion-button small no-margin color="theme" (click)="comment(commentForm)" [disabled]="!commentForm.form.valid">Comment</button>\n                        </ion-buttons>\n                 </form>\n                 </ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/galdetail/galdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], GaldetailPage);
    return GaldetailPage;
}());

//# sourceMappingURL=galdetail.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscovertopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewactivities_viewactivities__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discover_discover__ = __webpack_require__(36);
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
 * Generated class for the DiscovertopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiscovertopPage = (function () {
    function DiscovertopPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-US');
        this.bit1 = 0;
        this.bit2 = 0;
        this.bit3 = 0;
        this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.minDate);
        this.id = localStorage.getItem('ID');
        this.loc = this.navParams.get('location');
        console.log(this.loc);
        this.community = this.navParams.get('community');
        console.log(this.community);
        this.activitySearch();
        this.friendsitineraries();
        this.recentImages();
    }
    DiscovertopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiscovertopPage');
    };
    DiscovertopPage.prototype.back = function () {
        console.log(this.community);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__discover_discover__["a" /* DiscoverPage */], {
            fcommunity: this.community
        });
    };
    DiscovertopPage.prototype.view = function () {
        var send = {
            activities: this.activities,
            location: this.loc,
            back: '3'
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__viewactivities_viewactivities__["a" /* ViewactivitiesPage */], {
            send: send
        });
    };
    DiscovertopPage.prototype.activitySearch = function () {
        var _this = this;
        var options = this.common.options;
        var data_form = {
            city: this.loc
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.activity_source = data.data[0].Airportcode.airportcode;
                console.log(_this.activity_source);
                _this.activitiesListing();
            }
            else if (data.status == 1) {
                _this.bit1 = 1;
                /*let toast = this.toastCtrl.create({
                  message: "Enter the city name",
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();*/
            }
        }, function (error) {
        });
    };
    DiscovertopPage.prototype.activitiesListing = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            currency: 'USD',
            fromDate: this.minDate,
            toDate: this.minDate,
            searchFilterItems: [{
                    type: 'destination',
                    value: this.activity_source
                }]
        };
        console.log(data_form);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/activities/v1/search', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.ProductErrors.ErrorCode == null) {
                    _this.bit1 = 0;
                    _this.activities = data.activities;
                    console.log(_this.activities);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else if (data.ProductErrors.ErrorCode != null) {
                    _this.bit1 = 1;
                    //          let toast = this.toastCtrl.create({
                    //            message: data.ProductErrors.Message,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    DiscovertopPage.prototype.friendsitineraries = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            end_location: this.loc
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/recentfrd_intinery', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.bit2 = 0;
                    _this.friends = data.data;
                    console.log(_this.friends);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    _this.bit2 = 1;
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    DiscovertopPage.prototype.recentImages = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            end_location: this.loc
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/recent_images_of_location', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.bit3 = 0;
                    _this.images = data.data;
                    console.log(_this.images);
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    _this.bit3 = 1;
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    DiscovertopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-discovertop',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/discovertop/discovertop.html"*/`<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Discover</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n	\n    \n    <div class="things">\n        <div *ngIf="bit1 == \'0\'">\n            <div class="top">\n            <h3>Top things to do</h3>\n            <button *ngIf="activities" (click)="view()">View all activities</button>\n          </div>\n          <ion-scroll scrollX="true" padding>\n            <ion-card *ngFor="let act of activities">\n              <div class="product-img">\n                <img src="{{act.content.media.images[0].urls[0].resource}}" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>{{act.name}}</ion-title>\n                <p class="price">{{act.amountsFrom[0].convertedAmount}}</p>\n                <!--<ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                  <li><span>3,789</span></li>\n                </ul>-->\n              </ion-card-content>\n            </ion-card>  \n          </ion-scroll>\n        </div>\n        <div *ngIf="bit1 == \'1\'">\n            <div class="top">\n            <h3>Top things to do</h3>\n            <p>No Activities Found</p>\n          </div>\n        </div>\n          \n        </div> \n\n	<div class="things second">\n              <div class="top">\n                  <h3>View Friends Itinerary</h3>\n                  <!--<button (click)="view()">Search all ocho rios</button>-->\n                </div>\n            <div *ngIf="bit2 == \'0\'">\n                <ion-scroll scrollX="true" padding>\n                  <ion-card *ngFor="let fr of friends">\n                    <div class="product-img">\n                        <img *ngIf="fr.User.image" src="{{fr.User.image}}">\n                        <img *ngIf="!fr.User.image" src="assets/imgs/user.png">\n                    </div>\n                    <ion-card-content>\n                      <ion-title>{{fr.User.name}}</ion-title>\n                     \n                    </ion-card-content>\n                  </ion-card>\n\n                </ion-scroll>\n            </div>\n            <div *ngIf="bit2 == \'1\'">\n                <p>No Friends Itinerary found for this Location</p>\n            </div>\n              \n                </div>\n				\n    \n	<div class="trav">\n		<div class="top">\n                  <h3>Recent Pictures</h3>\n                  <!--<button (click)="view()">View Gallery</button>-->\n                </div>\n            <div *ngIf="bit3 == \'0\'">\n                <div *ngFor="let img of images">\n                <ion-card *ngFor="let im of img.Gallery">\n                    <img src="{{im.image}}"/>\n<!--                    <div class="overlay"></div>-->\n<!--                    <div class="card-title">Itineraries</div>-->\n                  </ion-card>\n            </div> \n            </div>\n            <div *ngIf="bit3 == \'1\'">\n                <p>No Recent Images found for this Location</p>\n            </div>\n               \n<!--                  <ion-card>\n                    <img src="assets/imgs/getstartback.jpeg"/>\n                    <div class="overlay"></div>\n                    <div class="card-title">Galleries</div>\n                  </ion-card>-->\n        </div>\n	\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/discovertop/discovertop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], DiscovertopPage);
    return DiscovertopPage;
}());

//# sourceMappingURL=discovertop.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoteldetail_hoteldetail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover__ = __webpack_require__(36);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.data = {
            filter: ''
        };
        this.tasks = [1, 2, 3, 3, 4, 7];
        this.filterbit = 0;
        this.detail = navParams.get('detail');
        console.log(this.detail);
        if (this.detail) {
            this.occupancies = this.detail.occupancies;
            console.log(this.occupancies);
            this.hotels = this.detail.hotels;
            console.log(this.hotels);
            //    let curren = this.hotels.price.price_details.net[0].currency;
            //    console.log(curren);
            this.city = this.detail.city;
            console.log(this.city);
            this.currency = this.detail.currency;
            console.log(this.currency);
            this.nationality = this.detail.nationality;
            console.log(this.nationality);
            this.from = this.detail.from;
            this.to = this.detail.to;
            console.log(this.from + '-' + this.to);
            this.dcity = this.detail.dcity;
            this.dcountry = this.detail.dcountry;
        }
    }
    SearchPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__discover_discover__["a" /* DiscoverPage */]);
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.filterSelect = function (chose) {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            if (chose == 'lowest') {
                Loading.dismiss();
                _this.filterbit = 0;
            }
            else if (chose == 'highest') {
                Loading.dismiss();
                _this.filterbit = 1;
            }
        });
    };
    SearchPage.prototype.hotel = function (ht) {
        var _this = this;
        console.log(ht);
        /*this.navCtrl.push(HoteldetailPage,{
          detail: ht,
          to: this.to,
          from: this.from,
          city: this.city
        });*/
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        //var options = this.common.options;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            HotelCodes: ht.HotelCode,
            FromDate: this.from,
            ToDate: this.to,
            Currency: this.currency,
            Occupancies: this.occupancies,
            ClientNationality: this.nationality
        };
        console.log(data_form);
        //var Serialized = this.common.serializeObj(data_form);
        //console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/properties', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.errors.length <= 0) {
                    console.log(data);
                    _this.hotel = data.hotel;
                    _this.to = data.checkin;
                    _this.from = data.checkout;
                    var detailed = {
                        hotel: _this.hotel,
                        to: _this.to,
                        from: _this.from,
                        search_id: data.search_id,
                        dcity: _this.dcity,
                        dcountry: _this.dcountry
                    };
                    console.log(detailed);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hoteldetail_hoteldetail__["a" /* HoteldetailPage */], {
                        detailed: detailed,
                        detail: _this.detail
                    });
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/search/search.html"*/`<ion-header>\n    \n    <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="header_title" color="text">Search</ion-title>\n  </ion-toolbar>    \n  </ion-header>\n\n<ion-content>\n\n<!--<div class="plane">\n\n  <div class="fst">\n  <h2>Bankok</h2>\n</div>\n\n<div class="icon1">\n  <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n</div>\n\n<div class="last">\n    <h2>{{city}}</h2>\n  </div>\n  \n</div>-->\n\n  <span class="date">{{from | date: \'MMM d, yyyy\'}} -> {{to | date: \'MMM d, yyyy\'}}</span>\n\n    <ion-item class="filter" no-padding>\n        <ion-label><span>Filter</span></ion-label>\n        <ion-select name="filter" id="filter" #filter="ngModel" [(ngModel)]="data.filter" (ionChange)="filterSelect($event)" placeholder="Price">\n          <ion-option value="lowest" selected="true">Lowest Price</ion-option>\n          <ion-option value="highest">Highest Price</ion-option>\n        </ion-select>\n      </ion-item>\n    \n    \n    <div *ngIf="filterbit == \'0\'">\n    <ion-card class="waterfall" *ngFor="let ht of hotels">\n    \n          <ion-item (click)="hotel(ht)">\n            <ion-thumbnail item-start>\n                <img src="assets/imgs/abc.jpg">\n            </ion-thumbnail>\n            <h2>{{ht.fullName}}</h2>\n            <p>{{city}}</p> \n            <ul>\n            <li>\n            <rating [(ngModel)]="ht.starCategory" \n              #ht.starCategory="ngModel"\n              readOnly="true"\n              max="5" \n              emptyStarIconName="star-outline" \n              halfStarIconName="star-half" \n              starIconName="star" \n              nullable="false"></rating> \n              \n              </li>\n            </ul>\n                       \n            <!--<ul>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li> <ion-icon name="star-outline"></ion-icon></li>\n                <li><span>3,789</span></li>\n              </ul>-->\n    \n              <ion-note item-end="" class="note note-ios">{{ht.minprice}}</ion-note>\n          </ion-item>\n    \n    \n          </ion-card>\n  </div>\n  <div *ngIf="filterbit == \'1\'">\n  <ion-card class="waterfall" *ngFor="let ht of hotels.slice().reverse()">\n    \n          <ion-item (click)="hotel(ht)">\n            <ion-thumbnail item-start>\n                <img src="assets/imgs/abc.jpg">\n            </ion-thumbnail>\n            <h2>{{ht.fullName}}</h2>\n            <p>{{city}}</p> \n            <ul>\n            <li>\n            <rating [(ngModel)]="ht.starCategory" \n              #ht.starCategory="ngModel"\n              readOnly="true"\n              max="5" \n              emptyStarIconName="star-outline" \n              halfStarIconName="star-half" \n              starIconName="star" \n              nullable="false"></rating> \n              \n              </li>\n            </ul>\n                       \n            <!--<ul>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li> <ion-icon name="star-outline"></ion-icon></li>\n                <li><span>3,789</span></li>\n              </ul>-->\n    \n              <ion-note item-end="" class="note note-ios">{{ht.minprice}}</ion-note>\n          </ion-item>\n    \n    \n          </ion-card>\n      </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoteldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_flight__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotel_hotel__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
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
 * Generated class for the HoteldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HoteldetailPage = (function () {
    function HoteldetailPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.detailed = navParams.get('detailed');
        console.log(this.detailed);
        if (this.detailed) {
            this.dcity = this.detailed.dcity;
            this.dcountry = this.detailed.dcountry;
            this.from = this.detailed.from;
            this.to = this.detailed.to;
            this.search_id = this.detailed.search_id;
            console.log(this.search_id);
            this.city = this.detailed.hotel.hotelinfo.cityname;
            this.name = this.detailed.hotel.hotelinfo.fullName;
            this.street = this.detailed.hotel.hotelinfo.hotelAddresss.street;
            this.ratingg = this.detailed.hotel.hotelinfo.starCategory;
            this.description = this.detailed.hotel.hotelinfo.hotelDescription[0].description;
            this.symbol = this.detailed.hotel.ratetype.bundledRates[0].currsymbol;
            this.total = this.detailed.hotel.ratetype.bundledRates[0].convertedPrice;
            if (this.detailed.hotel.ratetype.bundledRates[0].price_details.GST.length > 0) {
                console.log('gst');
                this.gst = this.detailed.hotel.ratetype.bundledRates[0].price_details.GST[0].amount;
            }
            else {
                console.log('0');
                this.gst = this.detailed.hotel.ratetype.bundledRates[0].price_details.Netprice[1].amount;
            }
            this.price = this.detailed.hotel.ratetype.bundledRates[0].price_details.Netprice[0].amount;
            this.rooms = this.detailed.hotel.ratetype.bundledRates;
            console.log(this.rooms);
            this.n3 = this.detailed.hotel.hotelinfo.country;
        }
        this.detail = navParams.get('detail'); ///back data
        console.log(this.detail);
    }
    HoteldetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HoteldetailPage');
    };
    HoteldetailPage.prototype.flight = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__flight_flight__["a" /* FlightPage */]);
    };
    HoteldetailPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], {
            detail: this.detail
        });
    };
    HoteldetailPage.prototype.select = function (detail) {
        var _this = this;
        console.log(detail);
        //this.navCtrl.push(HotelPage);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        //var options = this.common.options;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('apikey', 'f391cf76-be55-4');
        headers.append('mode', 'sandbox');
        headers.append('Content-Type', 'application/json');
        this.optionss = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            apiref: detail.apiref,
            groupcode: detail.group_code,
            rateKey: [detail.rate_key],
            search_id: this.search_id
        };
        console.log(data_form);
        //var Serialized = this.common.serializeObj(data_form);
        //console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/price', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.errors.length <= 0) {
                    console.log(data);
                    var hdetail = {
                        sellRequestId: data.sellRequestId,
                        detail: data.dbstay,
                        dcity: _this.dcity,
                        dcountry: _this.dcountry
                    };
                    console.log(hdetail);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hotel_hotel__["a" /* HotelPage */], {
                        hdetail: hdetail,
                        rooms: _this.detailed,
                        back: _this.detail
                    });
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    HoteldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hoteldetail',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/hoteldetail/hoteldetail.html"*/`<!--<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Hotel detail</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Hotel detail</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    \n    \n    \n  <!--<div class="plane">\n    \n      <div class="fst">\n      <h2>Bankok</h2>\n    </div>\n    \n    <div class="icon1">\n      <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n    </div>\n    \n    <div class="last">\n        <h2>{{city}}</h2>\n      </div>\n      \n    </div>-->\n    \n      <span class="date">{{to | date: \'MMM d, yyyy\'}} -> {{from | date: \'MMM d, yyyy\'}}</span>\n\n      <div class="river">\n      <h3>{{name}}</h3>\n      <ul>\n            <li>\n            <rating [(ngModel)]="ratingg" \n              #ht.starCategory="ngModel"\n              readOnly="true" \n              max="5" \n              emptyStarIconName="star-outline" \n              halfStarIconName="star-half" \n              starIconName="star" \n              nullable="false"></rating> \n              \n              </li>\n            \n        <li><button ion-button clear color="theme">View All Reviews</button></li>\n      </ul>\n      <span>{{name}}, {{city}}, {{n3}}</span>\n      <img src="assets/imgs/abc.jpg" />\n    </div>\n\n    <div class="slide">\n      <!--<ion-slides pager >\n          <ion-slide style="background:url(assets/imgs/a.png) center center / cover no-repeat;">\n          </ion-slide>\n        \n          <ion-slide style="background:url(assets/imgs/b.jpg) center center / cover no-repeat;">\n          </ion-slide>\n        \n          <ion-slide style="background:url(assets/imgs/getstartback.jpeg) center center / cover no-repeat;">\n          </ion-slide>\n      </ion-slides>-->\n      <h3>HOTEL DETAILS</h3>\n      \n      <div class="wrap">\n  <div class="read-more">\n    <div class="content">\n      <h3>{{description}}</h3>\n    </div>\n    <span data-read-more="+ read more" data-read-less="- show less" class="trigger" onclick="this.parentElement.classList.toggle(\'expanded\')"></span>\n  </div>\n</div>\n      \n      \n      <!--<div *ngFor="let room of rooms">-->\n        <ul>\n          <li>Hotel - {{price}}</li>\n          <li>GST - {{gst}}</li>\n          <li></li>\n        </ul>\n      <h2>{{symbol}}{{total}}</h2>\n     <!-- </div>-->\n      <h3>ROOM TYPE</h3>\n\n      <ion-card class="waterfall">\n          \n                <ion-item *ngFor="let room of rooms">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/abc.jpg">\n                  </ion-avatar>\n                  <!--<h3>{{room.rooms[0].room_type}} {{room.rooms[0].bed_types[0].type}}</h3>-->\n                  <h3>{{room.rooms[0].description}}</h3>\n                  <p>Non-Refundable</p>\n                  <!--<button ion-button clear>View room details</button>-->        \n                  <ion-note item-end="" class="note note-ios"> {{symbol}}{{room.convertedPrice}}\n                  <button ion-button color="theme" small (click)="select(room)">Select</button>\n                  </ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/hoteldetail/hoteldetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], HoteldetailPage);
    return HoteldetailPage;
}());

//# sourceMappingURL=hoteldetail.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flightform_flightform__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flight_flight__ = __webpack_require__(68);
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
 * Generated class for the FlightdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlightdetailPage = (function () {
    function FlightdetailPage(navCtrl, navParams, http, common, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.get = this.navParams.get('send');
        console.log(this.get);
        if (this.get) {
            this.send = this.get.get;
            console.log(this.send);
            this.flight = this.get.flight;
            console.log(this.flight);
            this.item = this.get.item;
            this.trackid = this.get.trackid;
            this.flightdetail = this.get.fdetail;
            console.log(this.flightdetail);
            this.price = this.get.price;
            console.log(this.price);
            this.currency = this.get.currency;
            this.bit = this.get.bit;
            this.request = this.get.request;
        }
    }
    FlightdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlightdetailPage');
    };
    FlightdetailPage.prototype.back = function () {
        if (this.bit == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__flight_flight__["a" /* FlightPage */], {
                fdetail: this.flightdetail
            });
        }
        else if (this.bit == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__flight_flight__["a" /* FlightPage */], {
                f2detail: this.flightdetail
            });
        }
    };
    FlightdetailPage.prototype.getDetail = function () {
        var send = {
            flight: this.flight,
            item: this.item,
            trackid: this.trackid,
            get: this.get,
            price: this.price,
            request: this.request
        };
        //      this.navCtrl.push(FlightformPage,{
        //          requestId: this.send.SellRequestId
        //      });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__flightform_flightform__["a" /* FlightformPage */], {
            send: send
        });
    };
    FlightdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flightdetail',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/flightdetail/flightdetail.html"*/`<!--<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Flight</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Flight</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf="send">\n\n    <ion-list class="divider">\n      <ion-item>\n        <h2>{{send.Origin}} -> {{send.Destination}}</h2>\n        <p>{{send.OnwardFlightDate | date: \'EEE, MMM d\'}}</p>\n         <ion-note item-end class="note">{{send.FlightTimesAndDuration[0].Duration}}<span>Non Stop</span></ion-note>\n      </ion-item>\n    </ion-list>\n \n<!--<div padding>\n  <div class="wallet">\n      <span>{{flight.FlightDetails[0].DepartureDateTime| date: \'HH:mm\'}}<br> <ion-note class="note">{{send.OnwardFlightDate | date: \'MMM d\'}}</ion-note></span>\n      <span>{{send.FlightTimesAndDuration[0].Duration}}</span>\n      <span>{{flight.FlightDetails[0].ArrivalDateTime| date: \'HH:mm\'}}<br> <ion-note class="note">{{send.OnwardFlightDate | date: \'MMM d\'}}</ion-note></span>\n      \n      <div class="content" *ngIf="flight">\n         <div class="top">\n            <h3>{{flight.FlightDetails[0].OriginAirportName}}</h3>\n            <h4>{{flight.FlightDetails[0].Origin}}, {{flight.FlightDetails[0].OriginAirportCity}}, {{flight.FlightDetails[0].OriginAirportCountry}}</h4>\n         </div>\n\n         <ion-item class="waterfall">\n            <h2>{{flight.FlightDetails[0].AirlineName}}</h2>\n            <p>{{flight.FlightDetails[0].AirlineCategory}} {{flight.FlightDetails[0].FlightNum}}</p>\n            <ion-note item-end class="note"><ion-icon ios="md-plane" md="md-plane"></ion-icon></ion-note>\n        </ion-item>\n\n         <div class="bottom">\n          <h3>{{flight.FlightDetails[0].DestinationAirportName}}</h3>\n          <h4>{{flight.FlightDetails[0].Destination}}, {{flight.FlightDetails[0].DestinationAirportCity}}, {{flight.FlightDetails[0].DestinationAirportCountry}}</h4>\n       </div>\n      </div>\n  </div>\n</div>-->\n    \n    \n    \n    <div padding *ngFor="let sd of send.ItinearyDetails.Segments">\n  <div class="wallet" *ngFor="let itm of sd.item">\n      <span>{{itm.DepartureDateTime| date: \'HH:mm\'}}<br> <ion-note class="note">{{itm.DepartureDateTime | date: \'MMM d\'}}</ion-note></span>\n      <!--<span>{{send.FlightTimesAndDuration[0].Duration}}</span>-->\n      <span>{{itm.ArrivalDateTime| date: \'HH:mm\'}}<br> <ion-note class="note">{{itm.ArrivalDateTime | date: \'MMM d\'}}</ion-note></span>\n      \n      <div class="content">\n         <div class="top">\n            <h3>{{itm.OriginAirportName}}</h3>\n            <h4>{{itm.Origin}}, {{itm.OriginAirportCity}}, {{itm.OriginAirportCountry}}</h4>\n         </div>\n\n         <ion-item class="waterfall">\n            <h2>{{itm.AirlineName}}</h2>\n            <p>{{itm.FlightNum}}</p>\n            <ion-note item-end class="note"><ion-icon ios="md-plane" md="md-plane"></ion-icon></ion-note>\n        </ion-item>\n\n         <div class="bottom">\n          <h3>{{itm.DestinationAirportName}}</h3>\n          <h4>{{itm.Destination}}, {{itm.DestinationAirportCity}}, {{itm.DestinationAirportCountry}}</h4>\n       </div>\n      </div>\n  </div>\n</div>\n    <button ion-button color="theme" (click)="getDetail()" class="cont">Pay {{price}} {{currency}}</button>    \n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/flightdetail/flightdetail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], FlightdetailPage);
    return FlightdetailPage;
}());

//# sourceMappingURL=flightdetail.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewbookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_passenger__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(81);
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
 * Generated class for the ReviewbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewbookingPage = (function () {
    function ReviewbookingPage(navCtrl, navParams, http, common, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.id = localStorage.getItem('ID');
        console.log(this.id);
        this.bid = this.navParams.get('id');
        console.log(this.bid);
        if (this.bid) {
            this.viewBooking();
        }
        this.fid = this.navParams.get('fid');
        console.log(this.fid);
        if (this.fid) {
            this.viewFlightbooking();
        }
    }
    ReviewbookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewbookingPage');
    };
    ReviewbookingPage.prototype.passenger = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__passenger_passenger__["a" /* PassengerPage */]);
    };
    ReviewbookingPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    ReviewbookingPage.prototype.viewBooking = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            id: this.bid
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'bookings/hoteldetail', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.bookingDetaill = data.data.Hotel_booking;
                    console.log(_this.bookingDetaill);
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
                else {
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    ReviewbookingPage.prototype.viewFlightbooking = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var options = this.common.options;
        var data_form = {
            user_id: this.id,
            id: this.fid
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'bookings/flightdetail', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.fbookingDetaill = data.data.Booking;
                    console.log(_this.fbookingDetaill);
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
                else {
                    //          let toast = this.toastCtrl.create({
                    //            message: data.msg,
                    //            duration: 3000,
                    //            position: 'middle'
                    //          });
                    //          toast.present();
                }
            }, function (error) {
                Loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Check your Network Connection",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            });
        });
    };
    ReviewbookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reviewbooking',template:/*ion-inline-start:"/Volumes/D/isha/grouptravel 2/src/pages/reviewbooking/reviewbooking.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Booking</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n   <div *ngIf="bookingDetaill"> \n<div class="sum">\n    <h2>Your hotel booking summary</h2>\n    <h1>{{bookingDetaill.price}}</h1>\n    <span>per person<sup>*include taxes and carrier imposed fees</sup></span>\n  </div>\n\n  <ion-card class="depart">\n      <ion-card-header>\n        Hotel <span>{{bookingDetaill.hname}}</span>\n      </ion-card-header>\n      <ion-card-content>\n        <span>{{bookingDetaill.check_in | date: \'MMM d, yyyy\'}}</span>\n        <ion-row>\n            <ion-col col-6>{{bookingDetaill.check_out | date: \'MMM d, yyyy\'}}</ion-col>\n            <ion-col col-6>{{bookingDetaill.city}}, {{bookingDetaill.country}}</ion-col>\n<!--            <ion-col col-3></ion-col>-->\n          </ion-row>\n        <!--<span>Main Cabin</span>-->\n\n<!--        <div class="btm">\n          <h3>AA 2466 <span>738-Boeing 737</span></h3>\n          <h3>AA 1920 <span>320-Airbus 737</span></h3>\n          <button ion-button clear no-margin no-padding>Details</button>\n          <button ion-button clear no-margin no-padding>Change</button>\n        </div>-->\n\n      </ion-card-content>\n    </ion-card>\n\n<!--    -->\n      <!--<button ion-button block color="theme" class="cont" (click)="passenger();">Continue</button>-->\n   </div>\n    <div *ngIf="fbookingDetaill">\n        <div class="sum">\n    <h2>Your flight booking summary</h2>    \n  </div>\n        <ion-card class="depart">\n        <ion-card-header>\n           <span>{{fbookingDetaill.sourcecode}} to {{fbookingDetaill.destination_code}}</span>\n       <div class="icon1">\n        <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n      </div>\n        </ion-card-header>\n        <ion-card-content>\n          <span>{{fbookingDetaill.start_date| date: \'EEE, MMM d, yyyy\'}}</span>\n          <!--<span>{{fbookingDetaill.last_date| date: \'EEE, MMM d, yyyy\'}}</span>-->\n          <ion-row>\n              <ion-col col-12>{{fbookingDetaill.start_date| date: \'HH:mm\'}}&#x279D; {{fbookingDetaill.last_date| date: \'HH:mm\'}}</ion-col>\n              \n            </ion-row>\n          <span>{{fbookingDetaill.flight}}</span>\n          <span>{{fbookingDetaill.airline}}</span>\n          <span>{{fbookingDetaill.amount}}</span>\n  \n<!--          <div class="btm">\n            <h3>AA 2466 <span>738-Boeing 737</span></h3>\n            <h3>AA 1920 <span>320-Airbus 737</span></h3>\n            <button ion-button clear no-margin no-padding>Details</button>\n            <button ion-button clear no-margin no-padding>Change</button>\n          </div>-->\n  \n        </ion-card-content>\n      </ion-card>\n    </div>\n</ion-content>\n\n\n`/*ion-inline-end:"/Volumes/D/isha/grouptravel 2/src/pages/reviewbooking/reviewbooking.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ReviewbookingPage);
    return ReviewbookingPage;
}());

//# sourceMappingURL=reviewbooking.js.map

/***/ })

},[442]);
//# sourceMappingURL=main.js.map