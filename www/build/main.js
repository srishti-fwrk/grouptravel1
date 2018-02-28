webpackJsonp([31],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(231);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerytwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editphoto_editphoto__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_streaming_media__ = __webpack_require__(234);
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
    function GallerytwoPage(navCtrl, navParams, common, http, camera, actionSheetCtrl, toastCtrl, loadingCtrl, viewCtrl, imagePicker, modalCtrl, transfer, streamingMedia) {
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
        this.pet = 'library';
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');
        this.viewallImages();
    }
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
        var _this = this;
        alert('video');
        //let video = this.myVideo.nativeElement;
        alert('here');
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
                    alert(JSON.stringify(error));
                });
            });
        });
    };
    GallerytwoPage.prototype.videoListing = function () {
        //alert('listing');
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
                    //            console.log(this.images);
                    alert(JSON.stringify(_this.videos));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myVideo'),
        __metadata("design:type", Object)
    ], GallerytwoPage.prototype, "myVideo", void 0);
    GallerytwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gallerytwo',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/gallerytwo/gallerytwo.html"*/`<!--<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Gallery</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr"><img src="assets/imgs/a.png"></div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Gallery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n	<div>\n	  <ion-segment [(ngModel)]="pet">\n		<ion-segment-button value="library" (click)="viewallImages()">\n		  Library\n		</ion-segment-button>\n		<ion-segment-button value="camera" (click)="viewallImages()">\n		  Camera\n		</ion-segment-button>\n		<ion-segment-button value="video" (click)="videoListing()">\n		  Video\n		</ion-segment-button>\n	  </ion-segment>\n	</div>\n	\n	<div [ngSwitch]="pet">\n	  <div *ngSwitchCase="\'library\'">	  \n		  <div class="full">\n			\n			<span class="icon-sc"><ion-icon (click)="openImagePicker()" ios="ios-image" md="md-image"></ion-icon></span>\n		  </div>\n		  <h3 class="title">Select Photos</h3>\n                  \n                  <div class="middle">\n                       <div class="half" *ngFor="let img of images">\n                          <img src="{{img.Gallery.image}}" (click)="opensingleImage(img)"/>\n                      </div>\n                  </div>\n		  <!--<div class="middle">\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count select">1</span></div>\n			<div class="half"><img src="assets/imgs/a.png" /> <span class="count select">2</span></div>\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count">3</span></div>			\n		  </div>-->\n	  </div>\n	  <div *ngSwitchCase="\'camera\'">	  \n		  <div class="full">\n			\n			<span class="icon-sc"><ion-icon (click)="openCamera()" ios="ios-image" md="md-image"></ion-icon></span>\n		  </div>\n		  <h3 class="title">Select Photos</h3>\n                  \n                   <div class="middle">\n                       <div class="half" *ngFor="let img of images">\n                          <img src="{{img.Gallery.image}}" (click)="opensingleImage(img)"/>\n                      </div>\n                  </div>\n		 <!-- <div class="middle">\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count select">1</span></div>\n			<div class="half"><img src="assets/imgs/a.png" /> <span class="count select">2</span></div>\n			<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count">3</span></div>			\n		  </div>-->\n	  </div>\n	  <div *ngSwitchCase="\'video\'">	  \n		  <div class="full">\n			\n			<span class="icon-sc"><ion-icon ios="ios-image" md="md-image" (click)="selectVideo()"></ion-icon></span>\n		  </div>\n		  <h3 class="title">Select Videos</h3>\n		  <div class="middle">\n			<div class="half" *ngFor="let vi of videos">\n                           \n<!--                            <video src="{{vi.Video.video}}" controls="controls" (click)="videoPlayy(vi.Video.video)">\n                               \n                            </video>-->\n                             <ion-thumbnail (click)="videoPlayy(vi.Video.video)">\n                            <video>\n                              <source [src]="vi.Video.video" type="video/quicktime">\n                            </video>\n                          </ion-thumbnail>\n                        </div>\n                      <!--                            <video controls="controls" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer">\n                            <source src="{{vi.Video.video}}" type="video/mov" />\n                           </video>-->\n                      \n                      \n<!--                      <ion-content overflow-scroll="true">\n  \n</ion-content>-->\n			<!--<div class="half"><img src="assets/imgs/a.png" /> <span class="count select">2</span></div>-->\n			<!--<div class="half"><img src="assets/imgs/b.jpg" /> <span class="count">3</span></div>-->\n			\n		  </div>\n	  </div>\n	</div>\n  <!--<ion-fab bottom right edge>\n			<button ion-fab mini color="theme"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>-->\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/gallerytwo/gallerytwo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_streaming_media__["a" /* StreamingMedia */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], GallerytwoPage);
    return GallerytwoPage;
}());

//# sourceMappingURL=gallerytwo.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_tripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(32);
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
    function My_tripPage(navCtrl, navParams, http, alertCtrl, geolocation, nativeGeocoder, common, toastCtrl, calendar, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.calendar = calendar;
        this.app = app;
        this.longitude1 = '';
        this.lattitude1 = '';
        this.data = '';
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]('en-US');
        this.event = {};
        this.user_id = localStorage.getItem('ID');
        console.log(this.user_id);
        this.editt = this.navParams.get('edit');
        console.log(this.editt);
        if (this.editt != undefined) {
            this.bit = this.editt.bit;
            console.log(this.bit);
            this.trip_id = this.editt.tripid;
            console.log(this.trip_id);
            this.show = this.editt.send;
            console.log(this.show);
            this.so = this.show.start_location;
            this.de = this.show.end_location;
            this.sd = this.show.trip_startdate;
            this.dd = this.show.trip_enddate;
            console.log(this.so);
        }
        this.viewProfile();
        this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
    }
    My_tripPage.prototype.back = function () {
        if (this.editt != undefined) {
            if (this.bit == 1) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */]);
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */]);
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
        this.autocomplete = {
            query: ''
        };
        this.autocompleteItemss = [];
        this.autocompletee = {
            queryy: ''
        };
    };
    My_tripPage.prototype.add = function () {
        localStorage.setItem('bit', '2');
        console.log(localStorage.getItem('bit'));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    My_tripPage.prototype.updateSearch = function () {
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
    My_tripPage.prototype.updateeSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocompletee.queryy == '') {
            this.autocompleteItemss = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocompletee.queryy,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItemss = [];
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItemss.push(prediction);
                    console.log(self.autocompleteItemss);
                    console.log();
                });
            }
        });
    };
    My_tripPage.prototype.chooseeItem = function (itemm) {
        var _this = this;
        this.autocompleteItemss = [];
        this.autocompletee.queryy = itemm.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.autocompletee.queryy + '&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            console.log('22222');
            console.log(data.results[0].geometry.location);
            console.log('addresss:' + data.results[0].formatted_address);
            _this.d_add = data.results[0].formatted_address;
            _this.des_lat = data.results[0].geometry.location.lat;
            _this.des_long = data.results[0].geometry.location.lng;
            _this.autocompletee.location = data.results[0].geometry.location;
        });
    };
    My_tripPage.prototype.chooseItem = function (item) {
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
            _this.s_add = data.results[0].formatted_address;
            _this.lat = data.results[0].geometry.location.lat;
            _this.long = data.results[0].geometry.location.lng;
            _this.autocomplete.location = data.results[0].geometry.location;
        });
    };
    My_tripPage.prototype.search = function (searchform) {
        var _this = this;
        console.log(this.lat + '-' + this.long);
        console.log(this.common.options);
        var options = this.common.options;
        var data_form = {
            user_id: this.user_id,
            trip_startdate: searchform.value.dateStarts,
            trip_enddate: searchform.value.dateEnds,
            start_location: this.s_add,
            end_location: this.d_add,
            start_lat: this.lat,
            start_long: this.long,
            end_lat: this.des_lat,
            end_long: this.des_long
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
        console.log(this.lat + '-' + this.long);
        console.log(this.common.options);
        var options = this.common.options;
        var data_form = {
            id: this.trip_id,
            trip_startdate: heroForm.value.dateStarts,
            trip_enddate: heroForm.value.dateEnds,
            start_location: this.s_add,
            end_location: this.d_add,
            start_lat: this.lat,
            start_long: this.long,
            end_lat: this.des_lat,
            end_long: this.des_long
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], My_tripPage.prototype, "mapElement", void 0);
    My_tripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_trip',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/my_trip/my_trip.html"*/`<ion-header>\n  \n  <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n		<ion-title class="header_title" color="text">my trips</ion-title>\n		<ion-buttons end>\n		  <button ion-button icon-only menuToggle>\n			  <div class="app_usr">\n				  \n				  <img *ngIf="image" src="{{image}}">\n						  \n				  <img *ngIf="!image" src="assets/imgs/user.png">\n			  </div>\n			</button>\n		</ion-buttons>\n	\n	  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="top_sec">\n			<h1>Give us what you\'ve got.</h1>\n			<p>Whether you\'re already booked or still deciding, let us help you plan!</p>\n		</div>\n		<form #heroForm="ngForm">\n		<div class="form_sec">\n			<div class="location_sec">\n				<h5>Source Location</h5>\n				<ion-list>\n					<ion-item *ngIf="bit == \'1\'">\n						<ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>                                                \n                                                  <ion-input type="text" name="query" [(ngModel)]="autocomplete.query" (input)="updateSearch()" #query="ngModel" placeholder="{{so}}" required></ion-input>                                                 \n					</ion-item>\n                                        <ion-item *ngIf="bit != \'1\'">\n                                            <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                            <ion-input type="text" name="query" [(ngModel)]="autocomplete.query" (input)="updateSearch()" #query="ngModel" required></ion-input>\n                                        </ion-item>\n					<div class="dropdown">\n						<ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">{{ item.description }} </ion-item>\n					</div>\n				</ion-list>\n\n				<h5>Destination Location</h5>\n				<ion-list>\n                                    <ion-item *ngIf="bit == \'1\'">\n                                        <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                        <ion-input  type="text" name="queryy" [(ngModel)]="autocompletee.queryy" (input)="updateeSearch()" #queryy="ngModel" placeholder="{{de}}" required></ion-input>\n                                    </ion-item>\n                                    <ion-item *ngIf="bit != \'1\'">\n                                        <ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n                                        <ion-input  type="text" name="queryy" [(ngModel)]="autocompletee.queryy" (input)="updateeSearch()" #queryy="ngModel" required></ion-input>\n                                    </ion-item>	\n					<div class="dropdown">\n						<ion-item *ngFor="let itemm of autocompleteItemss" (click)="chooseeItem(itemm)">{{ itemm.description }} </ion-item>\n					</div>\n				</ion-list>\n			</div>\n			<div class="date_sec">\n				<h5>Dates</h5>\n				<ion-list>\n                                    <ion-item *ngIf="bit == \'1\'">\n                                        <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                        <ion-datetime  name="dateStarts" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateStarts" id="dateStarts" #dateStarts="ngModel" required placeholder="{{sd}}"></ion-datetime>\n                                    </ion-item>\n                                    <ion-item *ngIf="bit != \'1\'">\n                                        <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                        <ion-datetime  name="dateStarts" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateStarts" id="dateStarts" #dateStarts="ngModel" required placeholder="Select date"></ion-datetime>\n                                    </ion-item>\n					<ion-item *ngIf="bit == \'1\'">\n                                            <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                            <ion-datetime name="dateEnds" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateEnds" id="dateEnds" #dateEnds="ngModel" required placeholder="{{dd}}"></ion-datetime>\n                                        </ion-item>\n                                    <ion-item *ngIf="bit != \'1\'">\n                                        <ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n                                        <ion-datetime name="dateEnds" displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" max="2050-12-31" min="{{minDate}}" [(ngModel)]="event.dateEnds" id="dateEnds" #dateEnds="ngModel" required placeholder="Select date"></ion-datetime>\n                                    </ion-item>\n				</ion-list>\n				<div class="btn-sec">\n					<button ion-button clear>add another location for this trip</button>\n				</div>\n			</div>\n			<button ion-button *ngIf="bit == \'1\'" color="theme" type="submit" [disabled]="!heroForm.form.valid" (click)="edit(heroForm)">Submit</button>\n			<button ion-button *ngIf="bit != \'1\'" color="theme" type="submit" [disabled]="!heroForm.form.valid" (click)="search(heroForm)">Add Trip</button>\n		</div>\n		</form>\n	</div>\n</ion-content>\n\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/my_trip/my_trip.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__["a" /* Calendar */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */]])
    ], My_tripPage);
    return My_tripPage;
}());

//# sourceMappingURL=my_trip.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(74);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/profile/profile.html"*/`<ion-header>\n		<ion-toolbar color="theme">\n			<ion-title class="header_title" color="text">My Account</ion-title>\n			<ion-buttons end>\n				<button ion-button icon-only menuToggle>\n					<div class="app_usr">\n							<img *ngIf="image" src="{{image}}">\n						\n							<img *ngIf="!image" src="assets/imgs/user.png">\n					</div>\n				</button>\n				</ion-buttons>\n	  \n		</ion-toolbar>\n	  </ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="page_wrapper">\n		<div class="top_sec" *ngIf = "user">\n			<div class="avatar_sec">\n				<figure>\n					<!--<img src="{{user.image}}">-->\n					\n					<img *ngIf="user.image" src="{{user.image}}">\n						\n					<img *ngIf="!user.image" src="assets/imgs/user.png">\n				\n				</figure>\n			</div>\n			<div class="detail_sec">\n				<h5>{{user.name}}</h5>\n				<div class="contact_details">\n					<p><span><ion-icon ios="ios-call" md="md-call"></ion-icon></span>{{user.phone}}</p>\n					<p><span><ion-icon ios="ios-mail" md="md-mail"></ion-icon></span>{{user.email}}</p>\n				</div>\n			</div>\n		</div>\n		<div class="bottom_sec">\n		<ion-list>\n            <div *ngIf = "status == 0">        \n			<ion-item (click)="change();">\n				<ion-icon ios="ios-lock" md="ios-lock"></ion-icon>\n				Change Password\n				<ion-icon name="arrow-forward" item-end></ion-icon>\n			</ion-item>\n                   \n			<ion-item (click)="edit();">\n				<ion-icon ios="ios-create" md="ios-create"></ion-icon>\n				Edit Profile\n				<ion-icon name="arrow-forward" item-end ></ion-icon>\n			</ion-item>\n\n			\n			</div>\n			<div *ngIf = "status == 1">\n					<ion-item (click)="edit();">\n							<ion-icon ios="ios-create" md="ios-create"></ion-icon>\n							Edit Profile\n							<ion-icon name="arrow-forward" item-end ></ion-icon>\n						</ion-item>\n\n						\n				</div>\n		</ion-list>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/profile/profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/changepassword/changepassword.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="page_wrapper">\n    <div class="logo_sec">\n      <img src="assets/imgs/logo.png">\n    </div>\n    <div class="form_sec">\n      <form #change="ngForm">\n        <ion-list>\n          <ion-item>\n            <ion-label fixed>\n              <ion-icon ios="ios-key-outline" md="md-key"></ion-icon>\n            </ion-label>\n            <ion-input type="{{type}}" name="password" [(ngModel)]="data.password" id="password" #password="ngModel" minlength="8" placeholder="Enter Old Password"\n              required></ion-input>\n\n            <button *ngIf="!showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()">\n              <ion-icon name="eye" name="eye"></ion-icon>\n            </button>\n            <button *ngIf="showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()">\n              <ion-icon name="eye-off"></ion-icon>\n            </button>\n\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="password.errors && (password.dirty || password.touched)">\n\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n              <div [hidden]="!password.errors.minlength">\n                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n              </div>\n            </div>\n\n          </ion-label>\n          <ion-item>\n            <ion-label fixed>\n              <ion-icon ios="ios-key-outline" md="md-key"></ion-icon>\n            </ion-label>\n            <ion-input type="{{typee}}" name="npassword" [(ngModel)]="data.npassword" id="npassword" #npassword="ngModel" minlength="8"\n              placeholder="Enter New Password" required></ion-input>\n\n            <button *ngIf="!showPasss" ion-button clear color="light" type="button" item-right (click)="showPasswordd()">\n              <ion-icon name="eye" name="eye"></ion-icon>\n            </button>\n            <button *ngIf="showPasss" ion-button clear color="light" type="button" item-right (click)="showPasswordd()">\n              <ion-icon name="eye-off"></ion-icon>\n            </button>\n\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="npassword.errors && (npassword.dirty || npassword.touched)">\n\n              <div [hidden]="!npassword.errors.required">\n                Password is required\n              </div>\n              <div [hidden]="!npassword.errors.minlength">\n                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n              </div>\n            </div>\n\n          </ion-label>\n\n        </ion-list>\n        <div class="btn_sec">\n          <button ion-button color="theme" round (click)="changePass(change)" [disabled]="!change.form.valid">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/changepassword/changepassword.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(79);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/signup/signup.html"*/`<ion-header hidden>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Get Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n			<p class="page_head">Create Account</p>\n		</div>\n		<div class="form_sec">\n			<form #signup="ngForm">\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-person-outline" md="md-person"></ion-icon></ion-label>\n						<ion-input type="text" name="fullname" pattern="[a-zA-Z ]+" [(ngModel)]="data.fullname" id="fullname" #fullname="ngModel" placeholder="Full Name" required></ion-input>\n					</ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="fullname.errors && (fullname.dirty || fullname.touched)">\n                                              <div [hidden]="!fullname.errors.required">\n                                                Full Name is required\n                                              </div>\n                                              <div [hidden]="!fullname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n                                            </div>\n                                          </ion-label>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-mail-outline" md="md-mail"></ion-icon></ion-label>\n						<ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Email" required></ion-input>\n					</ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                              \n                                              <div [hidden]="!email.errors.required">\n                                                Email is required\n                                              </div>\n                                              <div [hidden]="!email.errors.pattern">\n                                                In-valid email\n                                              </div>\n                                            </div>\n                                            <!--<div *ngIf="!email.errors && (!email.dirty || !email.touched)">\n                                              <img class="tick" item-right src="assets/imgs/tickryt.png">\n                                            </div>-->\n                                        </ion-label>\n					<ion-item>\n						<ion-label fixed> <ion-icon ios="ios-key-outline" md="md-key"></ion-icon></ion-label>\n						<ion-input type="{{type}}" name="password" [(ngModel)]="data.password" id="password" #password="ngModel" minlength="8" placeholder="Password" required></ion-input>\n            <button *ngIf="!showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n							<ion-icon name="eye" name="eye"></ion-icon>\n							</button>\n				<button *ngIf="showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n					<ion-icon name="eye-off"></ion-icon>\n					</button>	\n          </ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="password.errors && (password.dirty || password.touched)">\n                                              \n                                              <div [hidden]="!password.errors.required">\n                                                Password is required\n                                              </div>\n                                              <div [hidden]="!password.errors.minlength">\n                                                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n                                              </div>\n                                            </div>\n                                            \n                                          </ion-label>\n					\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" (click)="signUp(signup)" [disabled]="!signup.form.valid" round>Sign Up</button>\n        </div>\n       </form>\n       <div class="btn-sec">\n         <p>Already registered? <button ion-button clear (click)="signIn()"> Sign In</button></p>\n       </div>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/signup/signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function AddeventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
    }
    AddeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddeventPage');
    };
    AddeventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-addevent',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/addevent/addevent.html"*/`\n<ion-header>\n\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">add event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="add_event">\n\n  <ion-list class="slt">\n    <ion-item no-padding>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes" selected="true">Transport</ion-option>\n        <ion-option value="hot">Hotel</ion-option>\n        <ion-option value="n64">Activity</ion-option>\n        <ion-option value="ps">Room</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="inpt">\n      <ion-item no-padding>\n        <ion-label stacked>Title</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    \n      <ion-item no-padding>\n        <ion-label stacked>Departure Address</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding>\n          <ion-label stacked>Arrival Address</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n  </ion-list>\n\n  <div class="date_sec">\n      <ion-list>\n        <ion-item no-padding>\n            <ion-label stacked>Departure Time</ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.dateStarts"></ion-datetime>\n        </ion-item>\n\n        \n        <ion-item no-padding>\n            <ion-label stacked>Arrival Time</ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.dateEnds"></ion-datetime>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-label stacked>Notes</ion-label>\n            <ion-textarea elastic placeholder="United Airlines"></ion-textarea>\n        </ion-item>\n\n        <ion-item no-padding>\n            <input type="file" (change)="fileUpload($event)" id="file-input" #fileInp>\n            <button ion-button (click)="onClick()">Add Attachments</button>\n          </ion-item>\n      </ion-list>\n    </div>\n\n    <div class="gallery">\n        <ul>\n          <li>\n              <img src="assets/imgs/getstartback.jpeg">\n              <ion-icon ios="ios-close-circle" md="ios-close-circle"></ion-icon>\n          </li>\n\n          <li>\n                <img src="assets/imgs/getstartback.jpeg">\n                <ion-icon ios="ios-close-circle" md="ios-close-circle"></ion-icon>\n            </li>\n\n        </ul>\n      </div>\n    <button ion-button small no-margin color="theme">Add Event</button>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/addevent/addevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AddeventPage);
    return AddeventPage;
}());

//# sourceMappingURL=addevent.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(11);
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
    }
    InvitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitePage');
    };
    InvitePage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-invite',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/invite/invite.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Invite</ion-title>\n    </ion-navbar>\n</ion-header>\n  \n\n\n<ion-content padding class="invite">\n  <h3>Who\'s coming to {{destination}}</h3>\n  <div class="subhead">Recent Travel Friends</div>\n  <ion-scroll scrollX="true" padding>\n			<ion-card>\n				<div class="product-img">\n					<img src="assets/imgs/getstartback.jpeg">\n			\n				</div>\n        <span>Name</span>\n			</ion-card>\n			<ion-card>\n				<div class="product-img">\n            <img src="assets/imgs/getstartback.jpeg">\n      \n				</div>\n        <span>Name</span>\n			</ion-card>\n			<ion-card>\n				<div class="product-img">\n            <img src="assets/imgs/getstartback.jpeg">\n            \n				</div>\n        <span>Name</span>\n			</ion-card>\n			<ion-card>\n				<div class="product-img">\n            <img src="assets/imgs/getstartback.jpeg">\n          \n				</div>\n        <span>Name</span>\n			</ion-card>\n			<ion-card>\n				<div class="product-img">\n            <img src="assets/imgs/getstartback.jpeg">\n           \n				</div>\n        <span>Name</span>\n			</ion-card>\n		\n    </ion-scroll>\n    <div class="subhead" style="margin: 30px 0 15px;">Search Grouptrip</div>\n    <form #searchu="ngForm">\n    <ion-list class="list-bottom">\n<!--        <ion-label fixed>  <ion-icon name="person"></ion-icon></ion-label>-->\n          <ion-item style="border: 1px solid #ccc;border-radius: 3px;padding: 0 5px;">\n            <ion-input type="text" name="userr" id="userr" [(ngModel)]="data.userr" (input)="search(data.userr)" #userr="ngModel" required></ion-input>            \n          </ion-item>\n                \n        <ion-item *ngFor="let us of user" (click)="chooseItem(us.User.name,us.User.id)">{{ us.User.name }} </ion-item>\n        \n          <button ion-button small no-margin color="theme" (click)="sendInvite(searchu)" [disabled]="!searchu.form.valid">Send Invite</button>\n          \n         \n    </ion-list>\n    </form>\n<span class="or">or send link via</span>\n    <div class="social">\n        <button class="a" (click)="fb()"><ion-icon>f</ion-icon></button>\n        <button class="a" (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n        <button class="a" (click)="msging()"> <ion-icon ios="ios-chatbubbles" ios="ios-chatbubbles"></ion-icon></button>\n      </div>\n    \n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/invite/invite.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], InvitePage);
    return InvitePage;
}());

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchitinerary_searchitinerary__ = __webpack_require__(83);
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
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__searchitinerary_searchitinerary__["a" /* SearchitineraryPage */]);
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/location/location.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Sao Paulo Sa</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <div class="card-background-page">\n        <ion-card no-margin>\n        <img src="assets/imgs/getstartback.jpeg"/>\n      </ion-card>\n      </div>\n\n    <div class="things">\n        <div class="top">\n          <h3>Top things to do</h3>\n          <button>View all activities</button>\n        </div>\n      <ion-scroll scrollX="true" padding>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n           \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star-outline"></ion-icon></li>\n                <li><span>3,789</span></li>\n              </ul>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n              \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star-outline"></ion-icon></li>\n                  <li><ion-icon name="star-outline"></ion-icon></li>\n                </ul>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n             \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star-outline"></ion-icon></li>\n                </ul>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n              \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star-outline"></ion-icon></li>\n                </ul>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n            \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star-outline"></ion-icon></li>\n                </ul>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg"/>\n            \n            </div>\n            <ion-card-content>\n              <ion-title>Product One</ion-title>\n              <p class="price">$130.00</p>\n              <ul>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star"></ion-icon></li>\n                  <li><ion-icon name="star-outline"></ion-icon></li>\n                </ul>\n            </ion-card-content>\n          </ion-card>\n          \n        </ion-scroll>\n      </div>\n\n      <div class="things">\n        <div class="top">\n            <h3>view friend\'s itinerary</h3>\n            <button (click)="search();">Search all Sao Paulo itineraries</button>\n        </div>\n\n        <ion-scroll scrollX="true" padding class="scrl">\n          <ion-card>\n            <div class="product-img">\n              <img src="assets/imgs/getstartback.jpeg">\n          \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n          \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n                \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n              \n            </div>\n            <span>Name</span>\n          </ion-card>\n          <ion-card>\n            <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg">\n               \n            </div>\n            <span>Name</span>\n          </ion-card>\n        \n        </ion-scroll>\n      </div>\n\n        <div class="top">\n          <h3>recent pictures</h3>\n          <button>view gallery</button>\n      </div>\n\n     <div class="gallery">\n        <div class="a">\n          <img src="assets/imgs/getstartback.jpeg" />\n        </div>\n        <div class="a">\n          <img src="assets/imgs/getstartback.jpeg" />\n        </div>\n     </div> \n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/location/location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/comments/comments.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Comments</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card class="group">\n        <ion-item (click)="comments();">\n          <ion-avatar item-start>\n             <img src="assets/imgs/user.png">\n          </ion-avatar>\n          <h6>12/12/2017</h6>\n          <h2>You Paid</h2>\n          <h2>Melanie <span>$45.00</span></h2>\n          <span>Money for ATVing</span>\n          <ion-note item-end="" class="note note-ios">\n              <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n              <button ion-button clear small>3 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon></button>\n          </ion-note>\n        </ion-item>\n        </ion-card>\n\n        <span class="heart"><ion-icon name="heart"></ion-icon> by melanie and naddia</span>\n\n        <div class="main">\n          <span>Meliane</span>\n          <p no-margin>Thanks for money gift</p>\n          <div class="outer"><div class="pic"><img src="assets/imgs/a.png" /></div></div>\n          <ion-icon name="heart-outline"></ion-icon>\n          \n        </div>\n\n      <ion-footer>\n        <ion-toolbar>\n            <ion-input type="text" placeholder="Username"></ion-input>\n            <ion-buttons end>\n                <button ion-button>Send</button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-footer>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editphoto_editphoto__ = __webpack_require__(85);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LocalityPage.prototype, "mapElement", void 0);
    LocalityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-locality',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/locality/locality.html"*/`\n<ion-header>\n    <ion-toolbar color="theme">\n      <ion-title class="header_title" color="text">Locality</ion-title>\n     <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-buttons end (click)="backData()">\n      <button ion-button clear>\n        Save\n      </button>\n    </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n	<ion-searchbar \n    [(ngModel)]="autocomplete.query" \n    [showCancelButton]="true" \n    (ionInput)="updateSearch()" \n    (ionCancel)="dismiss()"\n    placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="chooseItem(item)">\n      {{item.description}}\n      </ion-item>\n      </ion-list>\n    \n</ion-content>\n\n\n                                          \n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/locality/locality.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], LocalityPage);
    return LocalityPage;
}());

//# sourceMappingURL=locality.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewactivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function ViewactivitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewactivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewactivitiesPage');
    };
    ViewactivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewactivities',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/viewactivities/viewactivities.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Discover</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="viewall">\n  \n\n  <ion-item class="filter" no-padding>\n    <ion-label><span>Filter</span></ion-label>\n    <ion-select [(ngModel)]="gaming">\n      <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n      <ion-option value="n64">Highest Price</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n<ion-card class="waterfall">\n\n      <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/a.png">\n        </ion-avatar>\n        <h2>My Neighbor Totoro</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <span>Waterfall</span>\n        <ul>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li> <ion-icon name="star-outline"></ion-icon></li>\n            <li><span>3,789</span></li>\n          </ul>\n\n          <ion-note item-end="" class="note note-ios">$35<span>and up</span></ion-note>\n      </ion-item>\n\n\n      </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/viewactivities/viewactivities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ViewactivitiesPage);
    return ViewactivitiesPage;
}());

//# sourceMappingURL=viewactivities.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoteldetail_hoteldetail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
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
 * Generated class for the HotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelPage = (function () {
    function HotelPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
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
            adults: [],
            childs: [],
        };
        this.passengerDetails = [];
        this.rooms_data = [];
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
    HotelPage.prototype.typeSelect = function (type) {
        console.log(type);
    };
    HotelPage.prototype.titleSelect = function (title) {
        console.log(title);
        console.log(this.data.title);
    };
    HotelPage.prototype.bookHotel = function (lastForm) {
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
                name: lastForm.value.name,
                surname: lastForm.value.surname,
                email: lastForm.value.email,
                countryCode: lastForm.value.countrycode,
                phoneNumber: lastForm.value.contact
            },
            rooms: this.rooms_data
        };
        console.log(data_form);
        Loading.present().then(function () {
            _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/issue', data_form, _this.optionss)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 'CONFIRMED') {
                    console.log(data);
                    var booked = {
                        reference: data.reference,
                        sellRequestId: data.sellRequestId,
                        bookingId: data.bookingId
                    };
                    console.log(booked);
                    var toast = _this.toastCtrl.create({
                        message: 'Booking done successfully',
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
    };
    HotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hotel',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/hotel/hotel.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Hotel</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="hotel_detail">\n  <ion-list>\n      <ion-item-divider color="light">Room Details</ion-item-divider>\n    <ion-item>\n        Hotel name\n      <ion-note item-end="" class="note">{{hdetail.detail.name}}</ion-note>\n    </ion-item>\n      <div *ngFor="let room of hdetail.detail.rooms; let i=index">\n          <span class="green">Room {{i+1}}</span>\n    <ion-item>\n        Room name\n      <ion-note item-end="" class="note">{{room.roomname}}</ion-note>\n    </ion-item>\n    <ion-item>\n        No of adult\n      <ion-note item-end="" class="note">{{room.adultCount}}</ion-note>\n    </ion-item>\n    <ion-item>\n        No of children\n      <ion-note item-end="" class="note">{{room.childCount}}</ion-note>\n    </ion-item>\n      </div>\n    <ion-item>\n        Amount\n      <ion-note item-end="" class="note">{{hdetail.detail.totalprice}}</ion-note>\n    </ion-item>\n    <ion-item>\n        Check-in-date\n      <ion-note item-end="" class="note">{{hdetail.detail.checkIn  | date: \'MMM d, yyyy\'}}</ion-note>\n    </ion-item>\n    <ion-item>\n        Check-out-date\n      <ion-note item-end="" class="note">{{hdetail.detail.checkOut  | date: \'MMM d, yyyy\'}}</ion-note>\n    </ion-item>\n\n    <ion-item-divider color="light">Lead Passenger Details</ion-item-divider>\n    <form #lastForm="ngForm">\n    <ion-item>\n        <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="data.name" id="name" #name="ngModel" pattern="[a-zA-Z ]+" required></ion-input>\n        \n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="name.errors && (name.dirty || name.touched)">\n                                              <div [hidden]="!name.errors.required">\n                                                Name is required\n                                              </div>\n                                              <div [hidden]="!name.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n                                            </div>\n                                          </ion-label>\n    <ion-item>\n        <ion-input type="text" placeholder="Surname" name="surname" [(ngModel)]="data.surname" id="surname" #surname="ngModel" pattern="[a-zA-Z ]+" required></ion-input>\n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="surname.errors && (surname.dirty || surname.touched)">\n                                              <div [hidden]="!surname.errors.required">\n                                                Surname is required\n                                              </div>\n                                              <div [hidden]="!surname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n                                            </div>\n                                          </ion-label>\n    <ion-item>\n        <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n         <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                              \n           <div [hidden]="!email.errors.required">\n             Email is required\n          </div>\n      <div [hidden]="!email.errors.pattern">\n          In-valid email\n    </div>\n     </div>                                            \n    </ion-label>\n    <ion-item>\n        <ion-input type="text" placeholder="Country code" name="countrycode" [(ngModel)]="data.countrycode" id="countrycode" #countrycode="ngModel" required></ion-input>\n    </ion-item>\n        \n    <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="countrycode.errors && (countrycode.dirty || countrycode.touched)">\n						<div [hidden]="!countrycode.errors.required">\n							Country code is required\n						</div>						\n					</div>\n				</ion-label>\n        \n    <ion-item>\n        <ion-input type="tel" placeholder="Phone number" name="contact" [(ngModel)]="data.contact" id="contact" #contact="ngModel" pattern=\'[0-9]+\' minlength="10" maxlength="10" required></ion-input>\n    </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="contact.errors && (contact.dirty || contact.touched)">\n						<div [hidden]="!contact.errors.required">\n							Contact Number is required\n						</div>\n						<div [hidden]="!contact.errors.pattern">\n							Invalid Format\n						</div>\n						<div [hidden]="!contact.errors.maxlength">\n							Maximum 10 number\n						</div>\n						<div [hidden]="!contact.errors.minlength">\n							Minimum 10 number\n						</div>\n					</div>\n				</ion-label>\n\n    <ion-item-divider color="light">Other Passenger Details</ion-item-divider>\n    <div *ngFor="let room of rooms_data; let i=index">\n        <span style="padding: 0 8px;" class="green">Room {{i+1}}</span>\n        <div *ngIf="room.passengerDetails.length != \'0\'">\n            <div *ngFor="let pass_detail of room.passengerDetails; let j= index">\n                <div *ngIf="room.passengerDetails[j].type==\'AD\'">\n                    <span style="padding: 0 8px;" class="green">Details of Adult {{room.passengerDetails[j].count}}</span>\n                    <ion-list class="extras">\n                    <ion-item>                       \n                                                \n                        <ion-input type="number" placeholder="Age" name="age{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].age" id="age" #age="ngModel" required></ion-input>\n                    \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="age.errors && (age.dirty || age.touched)">\n						<div [hidden]="!age.errors.required">\n							Age is required\n						</div>\n						<div [hidden]="!age.errors.type">\n							Invalid Format\n						</div>						\n					</div>\n				</ion-label>\n                        </ion-item>\n                        <ion-item> \n                        \n                        <ion-select name="title{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].title" id="title" #title="ngModel" placeholder="Title" required>\n                        <ion-option value="Mr." selected="true">Mr.</ion-option>\n                        <ion-option value="Mrs.">Mrs.</ion-option>\n                        </ion-select>\n                        \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="title.errors && (title.dirty || title.touched)">\n						<div [hidden]="!title.errors.required">\n							Title is required\n						</div>                                            \n					</div>\n				</ion-label>\n                        </ion-item>\n                    <ion-item> \n                        <ion-input type="text" placeholder="Name" name="name{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].name" id="name" #name="ngModel" pattern="[a-zA-Z ]+" required></ion-input>                        \n                   \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="name.errors && (name.dirty || name.touched)">\n						<div [hidden]="!name.errors.required">\n							Name is required\n						</div>\n                                            <div [hidden]="!name.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>\n                         </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Surname" name="surname{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].surname" id="surname" #surname="ngModel" pattern="[a-zA-Z ]+" required></ion-input>\n                       \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="surname.errors && (surname.dirty || surname.touched)">\n						<div [hidden]="!surname.errors.required">\n							Surname is required\n						</div>\n                                            <div [hidden]="!surname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>\n                         </ion-item> \n                    </ion-list>\n                </div>\n                \n                \n                \n                <div *ngIf="room.passengerDetails[j].type==\'CH\'">\n                    <span style="padding: 0 8px;" class="green"> Details of Child {{room.passengerDetails[j].count}}</span>  \n                    <ion-list class="extras">\n                    <ion-item>                        \n                                             \n                        <ion-input type="number" placeholder="Age" name="age{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].age" id="age" #age="ngModel" required></ion-input>\n                        <!--<ion-input type="text" placeholder="Title" name="title{{j}}" [(ngModel)]="rooms_data[i].passenger_details[j].title" id="title" #title="ngModel" required></ion-input> -->\n                    \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="age.errors && (age.dirty || age.touched)">\n						<div [hidden]="!age.errors.required">\n							Age is required\n						</div>\n						<div [hidden]="!age.errors.type">\n							Invalid Format\n						</div>						\n					</div>\n				</ion-label>\n                        </ion-item>\n                    <ion-item>          \n                        <ion-select name="title{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].title" id="title" #title="ngModel" placeholder="Title" required>\n                        <ion-option value="Mstr." selected="true">Mstr.</ion-option>\n                        <ion-option value="Ms.">Ms.</ion-option>\n                        </ion-select>\n                        \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="title.errors && (title.dirty || title.touched)">\n						<div [hidden]="!title.errors.required">\n							Title is required\n						</div>                                            \n					</div>\n				</ion-label>\n                        </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Name" name="name{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].name" id="name" #name="ngModel" required></ion-input>                        \n                    \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="name.errors && (name.dirty || name.touched)">\n						<div [hidden]="!name.errors.required">\n							Name is required\n						</div>\n                                            <div [hidden]="!name.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>\n                        </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Surname" name="surname{{j}}" [(ngModel)]="rooms_data[i].passengerDetails[j].surname" id="surname" #surname="ngModel" required></ion-input>\n                         \n                        <ion-label class="alert alert-danger" color="danger">\n\n					<div *ngIf="surname.errors && (surname.dirty || surname.touched)">\n						<div [hidden]="!surname.errors.required">\n							Surname is required\n						</div>\n                                            <div [hidden]="!surname.errors.pattern">\n                                                Only alphabets are allowed\n                                              </div>\n					</div>\n				</ion-label>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                \n            </div>\n             \n            \n            \n            \n<!--            <div *ngFor="let count of counter[i]; let j=index">\n            <h6>Type {{j}}</h6>\n    <ion-item>        \n        <ion-select name="type" [(ngModel)]="data.adults[i][j].type" (ionChange)="typeSelect($event)">\n                    <ion-option value="AD" selected="true">Adult</ion-option>                    \n        </ion-select>\n    </ion-item>\n            <ion-item>\n        <ion-input type="text" placeholder="Age" name="age" [(ngModel)]="data.adults[i][j].age" id="age" #age="ngModel" required></ion-input>\n    </ion-item>\n    <h6>Title</h6>\n    <ion-item>        \n        <ion-select name="title" [(ngModel)]="data.adults[i][j].title" (ionChange)="titleSelect($event)">\n                    <ion-option value="Mr." selected="true">Mr.</ion-option>\n                    <ion-option value="Mrs.">Mrs.</ion-option>\n        </ion-select>\n    </ion-item>    \n    <ion-item>\n        <ion-input type="text" placeholder="Name" name="pname" [(ngModel)]="data.adults[i][j].pname" id="pname" #pname="ngModel" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="Surname" name="spname" [(ngModel)]="data.adults[i][j].spname" id="spname" #spname="ngModel" required></ion-input>\n    </ion-item>\n        </div>-->\n        </div>\n        \n        \n    \n    \n    </div>\n    <button color="theme" ion-button class="search" (click)="bookHotel(lastForm)" [disabled]="!lastForm.form.valid">Book</button>\n    \n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/hotel/hotel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], HotelPage);
    return HotelPage;
}());

//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_rating__ = __webpack_require__(86);
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
    function MytripPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MytripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MytripPage');
    };
    MytripPage.prototype.rating = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rating_rating__["a" /* RatingPage */]);
    };
    MytripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mytrip',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/mytrip/mytrip.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">My trip</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-list class="card_sec">\n				<ion-item>\n						<ion-card (click)="rating();">\n							<img src="assets/imgs/getstartback.jpeg"/>\n							<ion-card-content>\n								<ion-card-title>\n									Nine Inch Nails Live\n								</ion-card-title>\n								<p>Mar 16 - Mar 25, 2017</p>\n							</ion-card-content>\n						</ion-card>\n						<ion-card>\n							<img src="assets/imgs/getstartback.jpeg"/>\n							<ion-card-content>\n								<ion-card-title>\n									Nine Inch Nails Live\n								</ion-card-title>\n								<p>Mar 16 - Mar 25, 2017</p>\n							</ion-card-content>\n						</ion-card>\n				</ion-item>\n				\n			</ion-list><!-- Second Case End Here -->\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/mytrip/mytrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], MytripPage);
    return MytripPage;
}());

//# sourceMappingURL=mytrip.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewbookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_passenger__ = __webpack_require__(168);
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
    function ReviewbookingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReviewbookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewbookingPage');
    };
    ReviewbookingPage.prototype.passenger = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__passenger_passenger__["a" /* PassengerPage */]);
    };
    ReviewbookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reviewbooking',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/reviewbooking/reviewbooking.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Review booking</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n  <div class="sum">\n    <h2>Your trip summary</h2>\n    <h1>$367</h1>\n    <span>per person<sup>*include taxes and carrier imposed fees</sup></span>\n  </div>\n\n  <ion-card class="depart">\n      <ion-card-header>\n        Depart <span>BWI to MBJ</span>\n      </ion-card-header>\n      <ion-card-content>\n        <span>Wesnesday,February 2,2018</span>\n        <ion-row>\n            <ion-col col-6>5:25 AM &#x279D; 8:30 PM</ion-col>\n            <ion-col col-3>0 Stops</ion-col>\n            <ion-col col-3>3h 30m</ion-col>\n          </ion-row>\n        <span>Main Cabin</span>\n\n        <div class="btm">\n          <h3>AA 2466 <span>738-Boeing 737</span></h3>\n          <h3>AA 1920 <span>320-Airbus 737</span></h3>\n          <button ion-button clear no-margin no-padding>Details</button>\n          <button ion-button clear no-margin no-padding>Change</button>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="depart">\n        <ion-card-header>\n          Return <span>BWI to MBJ</span>\n        </ion-card-header>\n        <ion-card-content>\n          <span>Wesnesday,February 2,2018</span>\n          <ion-row>\n              <ion-col col-6>5:25 AM &#x279D; 8:30 PM</ion-col>\n              <ion-col col-3>0 Stops</ion-col>\n              <ion-col col-3>3h 30m</ion-col>\n            </ion-row>\n          <span>Main Cabin</span>\n  \n          <div class="btm">\n            <h3>AA 2466 <span>738-Boeing 737</span></h3>\n            <h3>AA 1920 <span>320-Airbus 737</span></h3>\n            <button ion-button clear no-margin no-padding>Details</button>\n            <button ion-button clear no-margin no-padding>Change</button>\n          </div>\n  \n        </ion-card-content>\n      </ion-card>\n      <button ion-button block color="theme" class="cont" (click)="passenger();">Continue</button>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/reviewbooking/reviewbooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ReviewbookingPage);
    return ReviewbookingPage;
}());

//# sourceMappingURL=reviewbooking.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__ = __webpack_require__(169);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-passenger',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/passenger/passenger.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Passenger</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <div class="sum">\n        <h2>Your trip summary</h2>\n        <h1>$367</h1>\n        <span>price for all passengers</span>\n        <span>price and tax information<sup>*include taxes and carrier imposed fees</sup></span>\n      </div>\n\n      <div class="form">\n        <h3>Passenger details</h3>\n        <p>Please enter all passenger names as they appear on the passenger\'s government-issued photo identification.</p>\n          <ion-list>\n\n              <ion-label>First Name</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Middle Name</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Last Name</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n\n                <ion-label>Date of birth</ion-label>\n                <ion-item>\n                    <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="eventz.month" placeholder="Date of birth"></ion-datetime>\n                </ion-item>\n             \n\n                <ion-label>Gender</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Frequent Flyer Program</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Redress Number</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Known Traveler Number</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Country of residence</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              \n                <div class="line"></div>\n\n                <h3>Trip Contact</h3>\n\n                <ion-label>Primary Email</ion-label>\n                <ion-item>\n                  <ion-input type="mail"></ion-input>\n                </ion-item>\n\n                <ion-label>Confirm Primary Email</ion-label>\n                <ion-item>\n                  <ion-input type="mail"></ion-input>\n                </ion-item>\n\n                <ion-label>Primary Phone Type</ion-label>\n                <ion-item>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n\n                <ion-label>Primary Phone</ion-label>\n                <ion-item class="plus">\n                  <ion-input type="number" placeholder="+1"></ion-input>\n                  <ion-input type="number"></ion-input>\n                </ion-item>\n              </ion-list>\n              <button ion-button block color="theme" class="cont" (click)="thankyou();">Continue</button>\n      </div>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/passenger/passenger.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PassengerPage);
    return PassengerPage;
}());

//# sourceMappingURL=passenger.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/thankyou/thankyou.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Thank you</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/thankyou/thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
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
        this.id = localStorage.getItem('ID');
        this.viewProfile();
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
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booking',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/booking/booking.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">My Booking</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n    \n </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="page_wrapper">\n        <!-- Ion Segment Button Start Here -->\n        <div class="top_segment-sec" padding>\n          <ion-segment [(ngModel)]="trip">\n            <ion-segment-button  class="segment-button segment-activated" value="upcoming">\n              Upcoming\n            </ion-segment-button>\n            <ion-segment-button value="past">\n              Past\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n        <!-- Ion Segment Button End Here Here -->\n        <div class="bottom_sec" [ngSwitch]="trip">\n        \n          <ion-list *ngSwitchCase="\'upcoming\'">\n            <ion-card>\n                <ion-item class="bw">\n                    <ion-icon item-start><img src="assets/imgs/plane.png" /></ion-icon>\n                    <div>\n                      <h3>BWI <sub>Baltimore</sub></h3>\n                      <h3>BKK <sub>Bangkok</sub></h3>\n                    </div>\n                    <h2>8/28/18 - 9/02/18</h2>\n                    <p>Confirmation #:12345678</p>\n                  </ion-item>\n            </ion-card>\n\n            <ion-card>\n                <ion-item class="bw city">\n                    <ion-icon item-start><img src="assets/imgs/hotel.png" /></ion-icon>\n                      <h3>Room Mate Boutique Hotel</h3>\n                      <span>New York City</span>\n                    <h2>8/28/18 - 9/02/18</h2>\n                    <p>Confirmation #:12345678</p>\n                  </ion-item>\n            </ion-card>\n\n            <ion-card>\n             <ion-item class="bw bwb">\n                <div class="plane">\n                <ion-icon item-start style="margin-bottom: 7px;"><img src="assets/imgs/plane.png" /></ion-icon>\n                 <ion-icon item-start><img src="assets/imgs/hotel.png" /></ion-icon>\n                </div>\n                 <div class="hotel">\n                    <h3>BWI <sub>Baltimore</sub></h3>\n                    <h3>BKK <sub>Bangkok</sub></h3>\n                  <h2>8/28/18 - 9/02/18</h2>\n                  <p>Confirmation #:12345678</p>\n                </div>\n              </ion-item>\n            </ion-card>\n\n\n          </ion-list><!-- First Case End Here -->\n          \n          <ion-list *ngSwitchCase="\'past\'">\n            <ion-card>\n              \n            </ion-card>\n            \n          </ion-list><!-- Second Case End Here -->\n          \n        </div>\n      </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/booking/booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(129);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/editprofile/editprofile.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Edit profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="page_wrapper">\n		<div class="top_sec">\n			<div class="avatar_sec">\n				<figure>\n          <!--<img src="{{image}}">-->\n\n          <img *ngIf="image" src="{{image}}">\n						\n					<img *ngIf="!image" src="assets/imgs/user.png">\n				\n        </figure>\n        <div class="camera"> <ion-icon ios="ios-camera" md="ios-camera" (click)="openActionSheet()"></ion-icon></div>\n			</div>\n			\n    </div>\n    <form #edit="ngForm">\n		<div class="bottom_sec">\n      <ion-list>\n        \n          <ion-item>\n            <ion-input type="text" name="name" pattern="[a-zA-Z ]+" [(ngModel)]="data.name" id="name" #name="ngModel" placeholder="Name" required></ion-input>\n            <ion-icon name="create" item-end color="theme"></ion-icon>\n          </ion-item>\n        \n          <ion-item>\n            <ion-input type="tel" name="phone" [(ngModel)]="data.phone" id="phone" #phone="ngModel" pattern=\'[0-9]+\' placeholder="Mobile Number" required></ion-input>\n            <ion-icon name="create" item-end color="theme"></ion-icon>\n          </ion-item>\n\n          <ion-item>\n              <ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Email" required></ion-input>\n              <ion-icon name="create" item-end color="theme"></ion-icon>\n            </ion-item>\n\n        	<button ion-button color="theme" (click)="editProfile(edit)" [disabled]="!edit.form.valid">Save</button>\n        </ion-list>\n    </div>\n  </form>\n	</div>\n</ion-content>`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/editprofile/editprofile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-liked',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/liked/liked.html"*/`<ion-header>\n    <ion-toolbar color="theme">\n      <ion-title class="header_title" color="text">Liked Photos</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <div class="app_usr">\n              <img *ngIf="image" src="{{image}}">\n						\n              <img *ngIf="!image" src="assets/imgs/user.png">\n          </div>\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n    </ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n    <div class="middle">\n        <div class="half" *ngFor="let img of images">\n            <img src="{{img.Gallery.image}}" />\n            <ion-icon ios="ios-heart" md="ios-heart" style="color:#f00;" (click)="unlikeImage(img.Gallery.id)"></ion-icon>\n        </div>\n      </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/liked/liked.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], LikedPage);
    return LikedPage;
}());

//# sourceMappingURL=liked.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/privacy/privacy.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n            \n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="header_title" color="text">Privacy Policy</ion-title>\n    \n	</ion-toolbar>\n</ion-header>\n\n<!--<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Privacy</ion-title>\n    </ion-navbar>\n  </ion-header>-->\n<ion-content>\n  <div class="privacy_outer"> \n      {{showdata}}\n\n    <!--<div class="privacy_inner">\n      <h3>Lorem Ipsum</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n      Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n    </div>\n\n    <div class="privacy_inner"><h3>Lorem Ipsum</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n      Lorem Ipsum has <span class="color">been the industry\'s</span> standard dummy text ever since the 1500s,when an unknown printer took a \n      galley of type and scrambled it to make a type specimen book</p>\n      </div>-->\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(32);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/request/request.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Request</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>    \n      \n      <img *ngIf="tripcover" src="{{tripcover}}">\n						\n      <img *ngIf="!tripcover" src="assets/imgs/s.jpeg">\n    \n    <ion-card-content>\n      <ion-card-title>\n        Invite\n        </ion-card-title>\n        <ion-list>\n          <ion-item>\n            <ion-label>\n                <span>Source:</span> <ion-note>{{source}}</ion-note>\n            </ion-label>\n              </ion-item>\n            \n            <ion-item>\n            <ion-label>\n              <span>Destination:</span> <ion-note>{{destination}}</ion-note>\n            </ion-label>\n            </ion-item>\n          \n          <ion-item>\n            <ion-label>\n              <span>Trip Start:</span> <ion-note>{{startdate| date: \'MMM d, yyyy\'}}</ion-note>\n            </ion-label>\n           </ion-item>\n            \n            <ion-item>\n            <ion-label>\n              <span>Trip End:</span> <ion-note>{{enddate| date: \'MMM d, yyyy\'}}</ion-note>\n            </ion-label>\n          </ion-item>\n       <div class="btns">\n           <button ion-button clear (click)="acceptTrip()">Accept</button>\n           <button ion-button clear (click)="rejectTrip()">Reject</button>                \n          </div>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/terms/terms.html"*/`<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Terms and Conditions</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <div class="privacy_outer">\n        \n        {{showdata}}\n  \n      <!--<div class="privacy_inner">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </div>\n  \n      <div class="privacy_inner">\n        <p style="font-weight:bold;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n          Lorem Ipsum has <span class="color">been the industry\'s</span> standard dummy text ever since the 1500s,when an unknown printer took a \n          galley of type and scrambled it to make a type specimen book</p>\n      </div>\n\n      <div class="privacy_inner">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n\n      <div class="privacy_inner">\n         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n              Lorem Ipsum has been the industry\'s standard</p>\n      </div>-->\n\n  \n    </div>\n  </ion-content>\n  \n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-uploaded',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/uploaded/uploaded.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Uploaded Photos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="middle">\n\n    <!--<h3 class="city_name">Bankok</h3>-->\n\n    <div class="half" *ngFor="let img of images">\n        <img src="{{img.Gallery.image}}" />\n    </div>\n    <!--<div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>-->\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/uploaded/uploaded.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], UploadedPage);
    return UploadedPage;
}());

//# sourceMappingURL=uploaded.js.map

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addevent/addevent.module": [
		474,
		30
	],
	"../pages/addtrip/addtrip.module": [
		475,
		29
	],
	"../pages/arival/arival.module": [
		476,
		28
	],
	"../pages/booking/booking.module": [
		477,
		27
	],
	"../pages/comments/comments.module": [
		478,
		26
	],
	"../pages/discover/discover.module": [
		479,
		25
	],
	"../pages/editphoto/editphoto.module": [
		481,
		24
	],
	"../pages/editprofile/editprofile.module": [
		480,
		23
	],
	"../pages/flight/flight.module": [
		484,
		22
	],
	"../pages/galdetail/galdetail.module": [
		482,
		21
	],
	"../pages/gallery/gallery.module": [
		483,
		20
	],
	"../pages/hotel/hotel.module": [
		485,
		19
	],
	"../pages/hoteldetail/hoteldetail.module": [
		486,
		18
	],
	"../pages/invite/invite.module": [
		487,
		17
	],
	"../pages/invitefriends/invitefriends.module": [
		488,
		16
	],
	"../pages/liked/liked.module": [
		489,
		15
	],
	"../pages/locality/locality.module": [
		490,
		14
	],
	"../pages/location/location.module": [
		491,
		13
	],
	"../pages/mytrip/mytrip.module": [
		492,
		12
	],
	"../pages/passenger/passenger.module": [
		496,
		11
	],
	"../pages/privacy/privacy.module": [
		493,
		10
	],
	"../pages/rating/rating.module": [
		494,
		9
	],
	"../pages/request/request.module": [
		495,
		8
	],
	"../pages/reviewbooking/reviewbooking.module": [
		497,
		7
	],
	"../pages/search/search.module": [
		498,
		6
	],
	"../pages/searchitinerary/searchitinerary.module": [
		499,
		5
	],
	"../pages/splash/splash.module": [
		500,
		4
	],
	"../pages/terms/terms.module": [
		501,
		3
	],
	"../pages/thankyou/thankyou.module": [
		502,
		2
	],
	"../pages/uploaded/uploaded.module": [
		504,
		1
	],
	"../pages/viewactivities/viewactivities.module": [
		503,
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
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_trip_my_trip__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rating_rating__ = __webpack_require__(86);
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
    function HomePage(navCtrl, common, http, events, app, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.events = events;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.trip = "upcoming";
        localStorage.setItem('bit', '1');
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.viewTrip();
        events.publish('user:login');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/home/home.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n	  <ion-title class="header_title" color="text">my trips</ion-title>\n	  <ion-buttons end>\n		<button ion-button icon-only menuToggle>\n			<div class="app_usr">\n				\n				<img *ngIf="image" src="{{image}}">\n						\n				<img *ngIf="!image" src="assets/imgs/user.png">\n			</div>\n		  </button>\n	  </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      >\n    </ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="page_wrapper">\n		<!-- Ion Segment Button Start Here -->\n		<div class="top_segment-sec" padding>\n			<ion-segment [(ngModel)]="trip">\n				<ion-segment-button  class="segment-button segment-activated" value="upcoming" (click)="viewTrip()">\n					Upcoming\n				</ion-segment-button>\n				<ion-segment-button value="past" (click)="pastTrips()">\n					Past\n				</ion-segment-button>\n			</ion-segment>\n		</div>\n		<!-- Ion Segment Button End Here Here -->\n		<div class="bottom_sec" [ngSwitch]="trip">\n		\n			<ion-list *ngSwitchCase="\'upcoming\'">\n				<ion-item>\n					<div class="top_sec" *ngIf="!show">\n						<h1>Let\'s get away!</h1>\n						<p>You have no upcoming trips.</p>\n						<button ion-button clear (click)="opentripPage()">Plan your next vacation.</button>\n						<figure>\n							<img src="assets/imgs/my_trip.jpg">\n						</figure>\n					</div>\n					<div *ngIf="show">\n					<div class="card_sec" *ngFor = "let tr of trips">\n							<ion-card (click)="cLick(tr.trip.id)">\n									<!--<img src="assets/imgs/getstartback.jpeg"/>-->                                                                        \n                                                                        <img *ngIf="tr.trip.image" src="{{tr.trip.image}}">\n                                                                        <img *ngIf="!tr.trip.image" src="assets/imgs/getstartback.jpeg">\n                                                                     \n									<ion-card-content>\n										<ion-card-title>\n											{{tr.trip.end_location}}\n										</ion-card-title>\n										<p>{{tr.trip.trip_startdate | date: \'MMM d\'}} - {{tr.trip.trip_enddate | date: \'MMM d, yyyy\'}}</p>\n										<!--<p>Mar 16 - Mar 25, 2017</p>-->\n									</ion-card-content>\n								</ion-card>\n					</div>\n					</div>\n<!-- 					<div class="add_button">\n						<button ion-button color="theme">\n							<ion-icon ios="ios-add" md="md-add"></ion-icon>\n						</button>\n					</div> -->\n				</ion-item>\n			</ion-list><!-- First Case End Here -->\n			\n			<ion-list *ngSwitchCase="\'past\'">\n				<ion-item>\n					<div class="card_sec" *ngFor="let past of pasttrips">\n						<ion-card (click)="openFeedback(past.Trip)">\n							<img *ngIf="past.Trip.image" src="{{past.Trip.image}}">\n                                                        <img *ngIf="!past.Trip.image" src="assets/imgs/getstartback.jpeg">\n                                                                     \n							<ion-card-content>\n								<ion-card-title>\n								{{past.Trip.end_location}}\n								</ion-card-title>\n								<p>{{past.Trip.trip_startdate | date: \'MMM d\'}} - {{past.Trip.trip_enddate | date: \'MMM d, yyyy\'}}</p>\n										\n							</ion-card-content>\n						</ion-card>\n						\n					</div>\n				</ion-item>\n				\n			</ion-list><!-- Second Case End Here -->\n			\n		</div>\n	</div>\n\n	\n	<ion-fab bottom right edge>\n			<button ion-fab color="theme" (click)="opentripPage()"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>	\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(130);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/resetpassword/resetpassword.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n		</div>\n		<div class="form_sec">\n			<form>\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-key-outline" md="md-key"></ion-icon></ion-label>\n						<ion-input type="password" value="" placeholder="Enter New Password"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-lock-outline" md="md-lock"></ion-icon></ion-label>\n						<ion-input type="password" placeholder="Confirm Password"></ion-input>\n					</ion-item>\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" round (click)="openchangepassword()">Submit</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/resetpassword/resetpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstartedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(61);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-getstarted',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/getstarted/getstarted.html"*/`<ion-header>\n  <ion-navbar color="theme" hideBackButton="true">\n    <ion-title class="header_title" color="text">Getting Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="title_sec">\n			<h2 class="page_title">Get your Travel Party Started!</h2>\n			<p>Grouptrip helps you to do the following:</p>\n		</div>\n		<div class="list_sec">\n			<ion-list>\n				<ion-item>\n					<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Plan It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n				<ion-item>\n						<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Book It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n				<ion-item>\n						<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Split It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n				<ion-item>\n						<ion-icon item-start><img src="assets/imgs/check.png" /></ion-icon>\n					<h2>Post It</h2>\n					<p>Organize and communicate trip details with friends in one central location</p>\n				</ion-item>\n			</ion-list>\n		</div>\n		<div class="account_sec">\n			<div class="btn-center">\n				<button ion-button color="theme" (click)="opensignuppage()">Create an Account</button>\n			</div>\n			<p>Already have an account? <button ion-button (click)="login()">Log in</button> </p>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/getstarted/getstarted.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], GetstartedPage);
    return GetstartedPage;
}());

//# sourceMappingURL=getstarted.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/forgot/forgot.html"*/`<ion-header hidden>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Get Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n		</div>\n		<div class="form_sec">\n			<form #forgot="ngForm">\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-mail-outline" md="md-mail"></ion-icon></ion-label>\n						<ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Enter Your Email" required></ion-input>\n					</ion-item>\n					<ion-label class="alert alert-danger" color="danger">\n						<div *ngIf="email.errors && (email.dirty || email.touched)">\n							\n							<div [hidden]="!email.errors.required">\n								Email is required\n							</div>\n							<div [hidden]="!email.errors.pattern">\n								In-valid email\n							</div>\n						</div>\n						<!--<div *ngIf="!email.errors && (!email.dirty || !email.touched)">\n							<img class="tick" item-right src="assets/imgs/tickryt.png">\n						</div>-->\n				</ion-label>\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" round (click)="forgotPass(forgot)" [disabled]="!forgot.form.valid">Submit</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/forgot/forgot.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArivalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviewbooking_reviewbooking__ = __webpack_require__(167);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-arival',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/arival/arival.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Arrival</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n      \n      <div class="plane">\n      \n        <div class="fst">\n        <h2>Bankok</h2>\n      </div>\n      \n      <div class="icon1">\n        <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n      </div>\n      \n      <div class="last">\n          <h2>Bankok</h2>\n        </div>\n        \n      </div>\n      \n        <span class="date">18/7/2017-20/7/2017 <ion-icon ios="md-calendar" md="md-calendar"></ion-icon></span>\n      \n          <ion-item class="filter" no-padding>\n              <ion-label><span>Filter</span></ion-label>\n              <ion-select [(ngModel)]="gaming">\n                <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n                <ion-option value="n64">Highest Price</ion-option>\n              </ion-select>\n            </ion-item>\n          \n          \n          <h3 class="head">Departing Flight</h3>\n          <ion-card class="waterfall">\n          \n                <ion-item (click)="arival();">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <h2>My Neighbor Totoro</h2>\n                  <div class="us">\n                    <p>IAD &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; bKK</p>\n                    <span>United Airlines</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <li>27h 55m</li>\n                      <li>1 stop in IST</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">$35<span>roundtrip</span></ion-note>\n                </ion-item>\n\n                </ion-card>\n\n                <h3 class="head">arrival</h3>\n                <ion-card class="waterfall">\n                \n                      <ion-item (click)="review();">\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/a.png">\n                        </ion-avatar>\n                        <h2>My Neighbor Totoro</h2>\n                        <div class="us">\n                          <p>IAD &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; bKK</p>\n                          <span>United Airlines</span>\n                        </div>\n                        <div class="rt">\n                          <ul>\n                            <li>27h 55m</li>\n                            <li>1 stop in IST</li>\n                          </ul>\n                        </div>\n                       \n                          <ion-note item-end="" class="note note-ios" style="padding: 0 6px;">+ $0</ion-note>\n                      </ion-item>\n      \n                      </ion-card>\n\n\n\n      </ion-content>`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/arival/arival.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ArivalPage);
    return ArivalPage;
}());

//# sourceMappingURL=arival.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitefriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(70);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-invitefriends',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/invitefriends/invitefriends.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Invite Friends</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n  </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/b.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <button ion-button small item-end color="theme">Invite</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/a.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <button ion-button small item-end color="light">Invited</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/invitefriends/invitefriends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], InvitefriendsPage);
    return InvitefriendsPage;
}());

//# sourceMappingURL=invitefriends.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(131);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/splash/splash.html"*/`<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!--<ion-content padding>\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n    <defs>\n        <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n    </defs>\n    <title>jmlogo</title>\n    <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n    <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n    <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n    <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n    <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n    <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n</svg>\n</ion-content>-->\n\n<ion-header hidden>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Get Started</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="page_wrapper">\n      <div class="logo_sec">\n        <img src="assets/imgs/logo.png" >\n      </div>\n      <div class="text">\n        <h2>Plan It. Book It. Split It. Post It</h2>\n        <p>The best way to plan a group trip</p>\n      </div>\n  \n  <div class="progress_wrapper">\n    <div class="progress_outer">\n      <div class="progress-bar">\n      </div>\n    </div>\n    <div class="counter">\n      Loading:\n    </div>\n  </div>\n  \n      </div>\n  \n      \n  </ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_trip_my_trip__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_attendees_attendees__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_invite_invite__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_location_location__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_searchitinerary_searchitinerary__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_discover_discover__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_galdetail_galdetail__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_viewactivities_viewactivities__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_hoteldetail_hoteldetail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_flight_flight__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_arival_arival__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_reviewbooking_reviewbooking__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_passenger_passenger__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_comments_comments__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_gallery_gallery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_thankyou_thankyou__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_mytrip_mytrip__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_editprofile_editprofile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_booking_booking__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_uploaded_uploaded__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_liked_liked__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_invitefriends_invitefriends__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_addevent_addevent__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_hotel_hotel__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_request_request__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_privacy_privacy__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_gallerytwo_gallerytwo__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_editphoto_editphoto__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_locality_locality__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_common_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_splash_splash__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_native_geocoder__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ionic_img_viewer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_image_picker__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_social_sharing__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ionic2_rating__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_ionic_openweathermap__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_file_transfer__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_streaming_media__ = __webpack_require__(234);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_56__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_addevent_addevent__["a" /* AddeventPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_hotel_hotel__["a" /* HotelPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_gallerytwo_gallerytwo__["a" /* GallerytwoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_editphoto_editphoto__["a" /* EditphotoPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_locality_locality__["a" /* LocalityPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addevent/addevent.module#AddeventPageModule', name: 'AddeventPage', segment: 'addevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addtrip/addtrip.module#AddtripPageModule', name: 'AddtripPage', segment: 'addtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arival/arival.module#ArivalPageModule', name: 'ArivalPage', segment: 'arival', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discover/discover.module#DiscoverPageModule', name: 'DiscoverPage', segment: 'discover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editphoto/editphoto.module#EditphotoPageModule', name: 'EditphotoPage', segment: 'editphoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galdetail/galdetail.module#GaldetailPageModule', name: 'GaldetailPage', segment: 'galdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/flight.module#FlightPageModule', name: 'FlightPage', segment: 'flight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel.module#HotelPageModule', name: 'HotelPage', segment: 'hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hoteldetail/hoteldetail.module#HoteldetailPageModule', name: 'HoteldetailPage', segment: 'hoteldetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invite/invite.module#InvitePageModule', name: 'InvitePage', segment: 'invite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitefriends/invitefriends.module#InvitefriendsPageModule', name: 'InvitefriendsPage', segment: 'invitefriends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/liked/liked.module#LikedPageModule', name: 'LikedPage', segment: 'liked', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/locality/locality.module#LocalityPageModule', name: 'LocalityPage', segment: 'locality', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytrip/mytrip.module#MytripPageModule', name: 'MytripPage', segment: 'mytrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passenger/passenger.module#PassengerPageModule', name: 'PassengerPage', segment: 'passenger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviewbooking/reviewbooking.module#ReviewbookingPageModule', name: 'ReviewbookingPage', segment: 'reviewbooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchitinerary/searchitinerary.module#SearchitineraryPageModule', name: 'SearchitineraryPage', segment: 'searchitinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewactivities/viewactivities.module#ViewactivitiesPageModule', name: 'ViewactivitiesPage', segment: 'viewactivities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploaded/uploaded.module#UploadedPageModule', name: 'UploadedPage', segment: 'uploaded', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_51__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_52__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_59_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_62_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_63_ionic_openweathermap__["a" /* OpenWeatherMapModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_56__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_addevent_addevent__["a" /* AddeventPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_hotel_hotel__["a" /* HotelPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_gallerytwo_gallerytwo__["a" /* GallerytwoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_editphoto_editphoto__["a" /* EditphotoPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_locality_locality__["a" /* LocalityPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_50__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_streaming_media__["a" /* StreamingMedia */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_discover__ = __webpack_require__(87);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="My trips" tabIcon="home"></ion-tab>\n  <!--<ion-tab [root]="tab2Root" tabTitle="Chat" tabIcon="ios-chatbubbles-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Payment" tabIcon="ios-cash"></ion-tab>-->\n  <ion-tab [root]="tab4Root" tabTitle="Discover" tabIcon="globe"></ion-tab>\n  <!--<ion-tab [root]="tab5Root" tabTitle="Gallery" tabIcon="ios-camera-outline"></ion-tab>-->     \n</ion-tabs>`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_booking_booking__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_uploaded_uploaded__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_liked_liked__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_request_request__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_firebase__ = __webpack_require__(79);
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
    function MyApp(platform, statusBar, splashScreen, menu, common, http, toastCtrl, loadingCtrl, events, facebook, googlePlus, modalCtrl, config, firebase, alertCtrl, socialSharing) {
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
            //this.hideSplashScreen();
            /*let splash = modalCtrl.create(SplashPage);
                    splash.present();*/
            _this.config.set("scrollPadding", false);
            _this.config.set("scrollAssist", false);
            _this.config.set("autoFocusAssist", true);
            _this.config.set("android", "scrollAssist", true);
            _this.config.set("android", "autoFocusAssist", "delay");
            if (localStorage.getItem('ID')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                //this.rootPage = GalleryPage; 
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */];
            }
            _this.initializeFireBaseIos();
        });
        this.events.subscribe('user:login', function () {
            _this.viewProfile();
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
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
                            }
                            else {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_request_request__["a" /* RequestPage */], { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
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
    MyApp.prototype.logOut = function () {
        var _this = this;
        this.log = localStorage.getItem('Status');
        if (this.log == '0') {
            localStorage.clear();
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
        }
        else if (this.log == '1') {
            if (localStorage.getItem('fb')) {
                this.facebook.logout().then(function (sucess) {
                    localStorage.clear();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else if (localStorage.getItem('google')) {
                this.googlePlus.logout().then(function (response) {
                    localStorage.clear();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
                }).catch(function (error) {
                    localStorage.clear();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
                });
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_getstarted_getstarted__["a" /* GetstartedPage */]);
            }
        }
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        console.log(page.index);
        // return false;
        if (page.index == 0) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */]);
    };
    MyApp.prototype.ppolicy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__["a" /* PrivacyPage */]);
    };
    MyApp.prototype.book = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_booking_booking__["a" /* BookingPage */]);
    };
    MyApp.prototype.upload = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_uploaded_uploaded__["a" /* UploadedPage */]);
    };
    MyApp.prototype.liked = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_liked_liked__["a" /* LikedPage */]);
    };
    MyApp.prototype.profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/app/app.html"*/`<ion-menu [content]="content" side="right">\n    <ion-content>\n\n    <ion-list class="mnu">\n\n    <ion-item>\n      <ion-avatar item-start>\n\n          <img *ngIf="image" src="{{image}}">\n						\n					<img *ngIf="!image" src="assets/imgs/user.png">\n          \n      </ion-avatar>\n      <button ion-button clear color="dark" (click)="dismiss();" item-end class="cls"><ion-icon name="close"></ion-icon></button>\n      <h2>150</h2>\n      <p>Miles Travelled</p>\n   </ion-item>\n\n   <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" >\n      {{p.title}}\n    </button> \n\n     <h3 class="menu_heading">SETTINGS</h3>\n     <button ion-item menuClose (click)="profile()">\n       Account Information\n     </button>\n      <button ion-item menuClose (click)="termsnc()">\n       Terms and Conditions\n     </button>\n      <button ion-item menuClose (click)="ppolicy()">\n       Privacy Policy\n     </button>\n\n    <h3 class="menu_heading">BOOKINGS</h3>\n     <button ion-item menuClose (click)="book()" >\n      My Booking\n     </button>\n\n     <h3 class="menu_heading">ACTIVITY</h3>\n      <button ion-item menuClose (click)="upload()">\n        My Uploaded Photos\n      </button> \n\n      <button ion-item menuClose (click)="liked()">\n          Pics I\'ve liked\n      </button>\n\n      <h3 class="menu_heading">INVITE</h3>\n      <button ion-item menuClose (click)="friend()">\n          Invite Friends\n      </button>\n\n      <!--<h3 class="menu_heading">LOGOUT</h3>-->\n      <button ion-item menuClose (click)="logOut()">\n          <h3 class="menu_heading logout">LOGOUT</h3>\n      </button> \n\n    </ion-list>\n </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_17__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_firebase__["a" /* Firebase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_17__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-attendees',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/attendees/attendees.html"*/`<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">My Trips</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="top_sec">\n			<h1>Give us what you\'ve got.</h1>\n			<p>Whether you\'re already booked or still deciding, let us help you plan!</p>\n		</div>\n		<div class="form_sec">\n			<div class="location_sec">\n				<h5>Location</h5>\n				<ion-list>\n					<ion-item>\n						<ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n						<ion-input type="text" value=""></ion-input>\n					</ion-item>\n				</ion-list>\n			</div>\n			<div class="date_sec">\n				<h5>Dates</h5>\n				<ion-list>\n					<ion-item>\n						<ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n						<ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" [(ngModel)]="event.dateStarts"></ion-datetime>\n					</ion-item>\n					<ion-item>\n						<ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n						<ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM DD YYYY" [(ngModel)]="event.dateEnds"></ion-datetime>\n					</ion-item>\n				</ion-list>\n				<div class="btn-sec">\n					<button ion-button clear>add another location for this trip</button>\n				</div>\n			</div>\n			<button ion-button color="theme">Add Trip</button>\n		</div>\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/attendees/attendees.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], AttendeesPage);
    return AttendeesPage;
}());

//# sourceMappingURL=attendees.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_invite__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_addevent_addevent__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_trip_my_trip__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(52);
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
        this.status = 0;
        this.trip_id = localStorage.getItem('TripID');
        console.log(this.trip_id);
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.viewSingleTrip();
        this.viewAttendees();
    }
    AddtripPage_1 = AddtripPage;
    AddtripPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__tabs_tabs__["a" /* TabsPage */]);
    };
    AddtripPage.prototype.openNext = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_addevent_addevent__["a" /* AddeventPage */]);
    };
    AddtripPage.prototype.edit = function () {
        var edit = {
            bit: 1,
            tripid: this.trip_id,
            send: this.send
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__my_trip_my_trip__["a" /* My_tripPage */], {
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
        var _this = this;
        console.log('attendees');
        var options = this.common.options;
        var data_form = {
            trip_id: this.trip_id
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'invites/attendese', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                _this.attendees = data.data;
                console.log(_this.attendees);
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
            console.log(data);
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
    AddtripPage.prototype.itinerary = function () {
        this.navCtrl.push(AddtripPage_1);
    };
    AddtripPage.prototype.payments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__contact_contact__["a" /* ContactPage */]);
    };
    AddtripPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__about_about__["a" /* AboutPage */]);
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
    AddtripPage.prototype.location = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
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
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        Loading.present().then(function () {
            _this.http.post(_this.common.base_url + 'trips/singletrip', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == 0) {
                    _this.tripcover = data.data.Trip.image;
                    console.log(_this.tripcover);
                    _this.send = data.data.Trip;
                    console.log(data.data.Trip.end_location);
                    _this.destination = data.data.Trip.end_location;
                    localStorage.setItem('destination', _this.destination);
                    console.log(data.data.Trip.trip_startdate);
                    _this.startdate = data.data.Trip.trip_startdate;
                    console.log(data.data.Trip.trip_enddate);
                    _this.enddate = data.data.Trip.trip_enddate;
                    _this.weather();
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
    AddtripPage = AddtripPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-addtrip',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/addtrip/addtrip.html"*/`<!--<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Add Trips</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Trip Detail</ion-title>\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    <!--<openweathermap [options]="options"></openweathermap>-->\n  <div class="card-background-page">\n    <ion-card no-margin>\n    <button ion-button color="light" clear (click)="editImage()" style="z-index: 9;"><ion-icon ios="ios-camera" md="md-camera"></ion-icon></button>\n    \n    <img *ngIf="tripcover" src="{{tripcover}}">\n    <img *ngIf="!tripcover" src="assets/imgs/getstartback.jpeg">\n    \n    <!--<img src="assets/imgs/getstartback.jpeg"/>-->\n    <div class="card-subtitleb">Vacation starts in</div>\n    <div class="card-title">{{destination}}</div>\n    <div class="card-subtitle">{{startdate | date: \'MMM d\'}} - {{enddate | date: \'MMM d, yyyy\'}}</div>\n    <button ion-button color="light" clear (click)="edit()"><ion-icon ios="md-create" md="md-create"></ion-icon> Edit</button>\n  </ion-card>\n  </div>\n\n  <div padding class="attend">\n    <ion-list>\n\n      <h6 no-margin class="subhead">ATTENDEES</h6>\n      <div *ngIf="status == \'0\'">\n      <ion-item no-padding>\n        <ion-avatar item-start *ngFor="let att of attendees">          \n          <img *ngIf="att.User.image" src="{{att.User.image}}">\n          <img *ngIf="!att.User.image" src="assets/imgs/user.png">\n        </ion-avatar>\n      </ion-item>\n      </div>\n      <div *ngIf="status == \'1\'">\n      <ion-item no-padding>\n        <p>No Attendees Yet</p>\n      </ion-item>\n      </div>\n      <button ion-button small no-margin color="theme" (click)="invite()">Invite</button>\n   \n\n    <h6 class="subhead">ITINERARY</h6>\n    <ion-item no-padding class="itin">\n          <span>{{startdate | date: \'EEEE MMM d\'}}</span>          \n        <ion-icon ios="ios-cloudy-night-outline" md="ios-cloudy-night-outline" item-end><span>{{day}}<sup>&#9675;</sup></span></ion-icon>\n        <ion-icon ios="ios-partly-sunny-outline" md="ios-partly-sunny-outline" item-end><span>{{night}}<sup>&#9675;</sup></span></ion-icon>\n      </ion-item>\n      <h5>Location:<button color="theme" (click)="location();">{{destination}}</button></h5>\n      <p>Who\'s ready for some fun? Click the teal button to add to your Itinerary</p>\n  </ion-list>\n\n  </div>\n  <ion-fab bottom right edge>\n    <button ion-fab mini color="theme" (click)="openNext()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n</ion-content>\n<ion-footer>\n  <a href="#" (click)="itinerary()" class="active"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <a href="#" (click)="payments()"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>\n  <a href="#" (click)="gallery()"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>  \n</ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/addtrip/addtrip.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */]])
    ], AddtripPage);
    return AddtripPage;
    var AddtripPage_1;
}());

//# sourceMappingURL=addtrip.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__galdetail_galdetail__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gallerytwo_gallerytwo__ = __webpack_require__(127);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__galdetail_galdetail__["a" /* GaldetailPage */], {
            send: img
        });
    };
    GalleryPage.prototype.gallery = function () {
        this.navCtrl.push(GalleryPage_1);
    };
    GalleryPage.prototype.payments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */]);
    };
    GalleryPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    GalleryPage.prototype.itinerary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__addtrip_addtrip__["a" /* AddtripPage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__gallerytwo_gallerytwo__["a" /* GallerytwoPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/gallery/gallery.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Gallery</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n\n\n<!--<ion-content>\n  <div class="full">\n    <img src="assets/imgs/a.png" />\n  </div>\n  <div class="full">\n      <img src="assets/imgs/b.jpg" />\n  </div>\n  <div class="middle">\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n    <div class="half"><img src="assets/imgs/b.jpg" /></div>\n    <div class="half"><img src="assets/imgs/a.png" /></div>\n  </div>\n  <ion-fab bottom right edge>\n			<button ion-fab mini color="theme"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>\n</ion-content>-->\n\n<ion-content>\n  <!--<ion-slides class="image-slider" loop="true" slidesPerView="2">-->\n    <!--<ion-slide *ngFor="let img of images">-->\n        <div class="middle">\n        <div class="half">\n      \n            <ul>\n                <li *ngFor="let img of images">\n                    <img src="{{img.Gallery.image}}" (click)="imagedetail(img)" class="thumb-img"/>\n                </li>\n            </ul>\n    </div>\n  </div>\n   <!-- </ion-slide>-->\n  <!--</ion-slides>-->\n  <ion-fab bottom right edge>\n			<button ion-fab mini color="theme" (click)="openPage()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n \n</ion-content>\n\n<ion-footer>\n  <a href="#" (click)="itinerary()"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <a href="#" (click)="payments()"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>\n  <a href="#" (click)="gallery()" class="active"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>    \n</ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/gallery/gallery.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], GalleryPage);
    return GalleryPage;
    var GalleryPage_1;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__ = __webpack_require__(79);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/signin/signin.html"*/`<ion-header hidden>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Get Started</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="page_wrapper">\n		<div class="logo_sec">\n			<img src="assets/imgs/logo.png" >\n		</div>\n		<div class="form_sec">\n			<form #signin="ngForm">\n				<ion-list>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-person-outline" md="md-person"></ion-icon></ion-label>\n						<ion-input type="email" name="email" [(ngModel)]="data.email" id="email" #email="ngModel" pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' placeholder="Email" required></ion-input>\n					</ion-item>\n                                        <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                              \n                                              <div [hidden]="!email.errors.required">\n                                                Email is required\n                                              </div>\n                                              <div [hidden]="!email.errors.pattern">\n                                                In-valid email\n                                              </div>\n                                            </div>\n                                            <!--<div *ngIf="!email.errors && (!email.dirty || !email.touched)">\n                                              <img class="tick" item-right src="assets/imgs/tickryt.png">\n                                            </div>-->\n                                        </ion-label>\n					<ion-item>\n						<ion-label fixed><ion-icon ios="ios-lock-outline" md="md-lock"></ion-icon></ion-label>\n						<ion-input type="{{type}}" name="password" [(ngModel)]="data.password" id="password" #password="ngModel" minlength="8" placeholder="Password" required></ion-input>\n						<button *ngIf="!showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n							<ion-icon name="eye" name="eye"></ion-icon>\n							</button>\n				<button *ngIf="showPass" ion-button clear color="light" type="button" item-right (click)="showPassword()"> \n					<ion-icon name="eye-off"></ion-icon>\n					</button>						\n					</ion-item>\n					\n                                    <ion-label class="alert alert-danger" color="danger">\n                                            <div *ngIf="password.errors && (password.dirty || password.touched)">\n                                              \n                                              <div [hidden]="!password.errors.required">\n                                                Password is required\n                                              </div>\n                                              <div [hidden]="!password.errors.minlength">\n                                                <h6 style="font-size : 12px;"> Password Minlength 8 Character </h6>\n                                              </div>\n                                            </div>\n                                            \n                                          </ion-label>\n				</ion-list>\n				<div class="btn_sec">\n					<button ion-button color="theme" round (click)="signIn(signin)" [disabled]="!signin.form.valid">Sign In</button>\n				</div>\n			</form>\n		</div>\n		<div class="social_sec">\n			<button ion-button class="fb-btn" block (click)="faceBook()"><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> Log in with facebook</button>\n			<button ion-button class="gm-btn" block (click)="gooGle()"><ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon> Log in with Gmail</button>\n		</div>\n		<div class="forgot">\n			<button ion-button clear (click)="openforgotPage()">Forgot Password?</button>\n			<p>Not registered? <button ion-button clear (click)="signUp()">Sign Up</button></p>\n		</div>\n		\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/signin/signin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__["a" /* Firebase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__["a" /* Firebase */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_comments__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery__ = __webpack_require__(49);
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
    function ContactPage(navCtrl, common, http) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.http = http;
        this.pet = "group";
        this.id = localStorage.getItem('ID');
        this.viewProfile();
    }
    ContactPage_1 = ContactPage;
    ContactPage.prototype.payments = function () {
        this.navCtrl.push(ContactPage_1);
    };
    ContactPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]);
    };
    ContactPage.prototype.itinerary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addtrip_addtrip__["a" /* AddtripPage */]);
    };
    ContactPage.prototype.gallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__gallery_gallery__["a" /* GalleryPage */]);
    };
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
    ContactPage = ContactPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/contact/contact.html"*/`<ion-header>\n      <ion-toolbar color="theme">\n\n        <ion-title class="header_title" color="text">Payments</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <div class="app_usr">\n                <img *ngIf="image" src="{{image}}">\n						\n                <img *ngIf="!image" src="assets/imgs/user.png">\n            </div>\n          </button>\n          </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n\n<ion-content>\n\n    <div class="blue">\n        <h4>Just got paid</h4>\n        <p>A total of $15 is waiting in your account</p>\n        <button ion-button color="theme" small no-margin>Cash Out</button>\n      </div>\n\n    <div class="top_segment-sec" padding>\n        <ion-segment [(ngModel)]="pet">\n          <ion-segment-button value="group">\n            Group\n          </ion-segment-button>\n          <ion-segment-button value="payment">\n            My payment\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="pet">\n        <ion-list *ngSwitchCase="\'group\'">\n\n          <ion-card class="group">\n          <ion-item (click)="comments();">\n            <ion-avatar item-start>\n               <img src="assets/imgs/a.png">\n            </ion-avatar>\n            <h6>12/12/2017</h6>\n            <h2>You Paid</h2>\n            <h2>Melanie <span>$45.00</span></h2>\n            <span>Money for ATVing</span>\n            <ion-note item-end="" class="note note-ios">\n                <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n                <button ion-button clear small>3 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon></button>\n            </ion-note>\n          </ion-item>\n\n          </ion-card>\n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'payment\'">\n            <ion-card class="group">\n                <ion-item>\n                  <ion-avatar item-start>\n                     <img src="assets/imgs/b.jpg">\n                  </ion-avatar>\n                  <h6>12/12/2017</h6>\n                  <h2>You Paid</h2>\n                  <h2>Melanie <span>$45.00</span></h2>\n                  <span>Money for ATVing</span>\n                  <ion-note item-end="" class="note note-ios">\n                      <button ion-button clear small>2 <ion-icon ios="ios-heart-outline" md="ios-heart-outline"></ion-icon></button>\n                      <button ion-button clear small>3 <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon></button>\n                  </ion-note>\n                </ion-item>\n      \n                </ion-card>\n        </ion-list>\n      </div>\n\n      <ion-fab bottom right edge>\n          <button ion-fab mini color="theme"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n    \n\n</ion-content>\n<ion-footer>\n  <a href="#" (click)="itinerary()"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <a href="#" (click)="payments()" class="active"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>\n  <a href="#" (click)="gallery()"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>    \n</ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ContactPage);
    return ContactPage;
    var ContactPage_1;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addtrip_addtrip__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(52);
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
    AboutPage.prototype.payments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_contact__["a" /* ContactPage */]);
        clearInterval(this.interval);
    };
    AboutPage.prototype.itinerary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addtrip_addtrip__["a" /* AddtripPage */]);
        clearInterval(this.interval);
    };
    AboutPage.prototype.gallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__gallery_gallery__["a" /* GalleryPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AboutPage.prototype, "content", void 0);
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/about/about.html"*/`<ion-header>\n	<ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Chat</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n      </ion-buttons>\n  \n	</ion-toolbar>\n  </ion-header>\n<ion-content>\n  <div class="friday">\n<!--      <h4>Friday</h4>-->\n  </div>\n\n  <div class="main green" *ngFor="let msg of msgs">\n      <span>{{msg.User.name}}</span>      \n      \n      <div *ngIf="msg.Groupchat.type == \'text\'">          \n          <p *ngIf="msg.User.id == id" class="user" no-margin>{{msg.Groupchat.message}}</p>\n          <p *ngIf="msg.User.id != id" no-margin>{{msg.Groupchat.message}}</p>\n      </div>\n      <div *ngIf="msg.Groupchat.type == \'image\'">\n          <p *ngIf="msg.User.id == id" class="user" no-margin><img src="{{msg.Groupchat.message}}"/></p>\n          <p *ngIf="msg.User.id != id" no-margin><img src="{{msg.Groupchat.message}}"/></p>\n      </div>\n      \n      <div class="outer">\n          <div class="pic" *ngIf="!msg.User.image">\n              <img src="assets/imgs/user.png" />\n          </div>\n          <div class="pic" *ngIf="msg.User.image">\n              <img src="{{msg.User.image}}" />\n          </div>  \n      </div>\n      \n      <ion-icon name="heart" *ngIf="msg.Groupchat.status == 0" style="color:#ccc;" (click)="favorite(msg.Groupchat.id,msg.Groupchat.sender_id)"></ion-icon>\n      \n      <ion-icon name="heart" *ngIf="msg.Groupchat.status == 1" style="color:#f00;" (click)="favorite(msg.Groupchat.id,msg.Groupchat.sender_id)"></ion-icon>\n      \n    </div>\n\n  <!--<div class="main">\n    <span>Meliane</span>\n    <p no-margin>Yes,me too!Ready for a vacay</p>\n    <div class="outer"><div class="pic"><img src="assets/imgs/a.png" /></div></div>\n    <ion-icon name="heart-outline"></ion-icon>\n  </div>-->\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="demo" style="padding-top:  0;padding-bottom: 0;">\n<form #chatForm="ngForm">  \n    <ion-buttons start>\n        <button (click)="sendImg()">\n            <ion-icon ios="ios-add" md="md-add"></ion-icon>\n        </button>\n    </ion-buttons>\n      <ion-input type="text" name="msg" [(ngModel)]="data.msg" id="msg" #msg="ngModel" placeholder="Type message" required></ion-input>\n      <ion-buttons end>\n          <button ion-button small no-margin color="theme" (click)="sendMsg(chatForm)" [disabled]="!chatForm.form.valid">Send</button>\n      </ion-buttons>\n       </form>\n    </ion-toolbar>\n    <ion-toolbar style="padding-top:  0;padding-bottom: 0;">\n  <a href="#" (click)="itinerary()"><ion-icon ios="ios-paper-outline" md="md-paper"></ion-icon><span>Itinerary</span></a>\n  <a href="#" (click)="chat()" class="active"><ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon><span>Chat</span></a>\n  <a href="#" (click)="payments()"><ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon><span>Payments</span></a>\n  <a href="#" (click)="gallery()"><ion-icon ios="ios-camera-outline" md="md-camera"></ion-icon><span>Gallery</span></a>\n</ion-toolbar>  \n</ion-footer>\n<!--<ion-footer>\n      \n</ion-footer>-->\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/about/about.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchitineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(11);
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
    }
    SearchitineraryPage.prototype.choose = function (val) {
        console.log(val.value);
        this.chose = val.value;
    };
    SearchitineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchitineraryPage');
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
        var options = this.common.options;
        var data_form = {
            location: loc
        };
        console.log(data_form);
        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);
        this.http.post(this.common.base_url + 'galleries/itinerary', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
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
    SearchitineraryPage.prototype.userSearch = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SearchitineraryPage.prototype, "mapElement", void 0);
    SearchitineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-searchitinerary',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/searchitinerary/searchitinerary.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">travel community</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n\n<ion-content padding>\n    <div class="location_sec">\n	<h5>Search</h5>\n				<!--<ion-list>\n					<ion-item>\n						<ion-label fixed>  <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n						<ion-input type="text" value=""></ion-input>\n					</ion-item>\n				</ion-list>-->\n                                <div *ngIf="chose == \'location\'">\n                                   <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" \n                                        (ionCancel)="dismiss()" placeholder="Start typing and select ..."></ion-searchbar>\n                                            <ion-list>\n                                                <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                                                    {{item.description}}\n                                                </ion-item>\n                                            </ion-list>   \n                                </div>   \n                                <div *ngIf="chose == \'people\'">\n                                    <ion-searchbar [(ngModel)]="data.people" [showCancelButton]="true" (ionInput)="userSearch()" \n                                        (ionCancel)="dismiss()" placeholder="Start typing and select ..."></ion-searchbar>\n                                            <ion-list>\n                                                <!--<ion-item *ngFor="let us of users" (click)="">\n                                                    \n                                                </ion-item>-->\n                                            </ion-list>                                     \n                                </div> \n            \n      </div>\n      \n      <div class="loc">\n          <ion-segment name="searchh" id="searchh" [(ngModel)]="data.searchh" (ionChange)="choose($event)">\n            <ion-segment-button value="location">\n              Location\n            </ion-segment-button>\n            <ion-segment-button value="people">\n              People\n            </ion-segment-button>\n          </ion-segment>\n       \n        <div [ngSwitch]="pet">\n          <ion-list *ngSwitchCase="\'location\'">\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/getstartback.jpeg">\n              </ion-avatar>\n              <h2>Cher</h2>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>\n              <span>Traveled to sao paulo: Feb 2017</span>\n            </ion-item>\n         \n          </ion-list>\n        \n          <ion-list *ngSwitchCase="\'people\'">\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/getstartback.jpeg">\n                  </ion-avatar>\n              <h2>Cher</h2>\n              <p>Lorem Ipsum is simply dummy text</p>\n            </ion-item>\n      \n          </ion-list>\n        </div>\n\n      </div>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/searchitinerary/searchitinerary.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], SearchitineraryPage);
    return SearchitineraryPage;
}());

//# sourceMappingURL=searchitinerary.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery__ = __webpack_require__(49);
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
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');
        //      this.commentList();
    }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-galdetail',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/galdetail/galdetail.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Detail</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="gallery">\n    <ion-card>\n        \n          <div class="opt">\n            <h2 *ngIf="location">{{location}}</h2>\n            <h2 *ngIf="!location">{{location}}</h2>\n            <button  (click)="presentActionSheet();" ion-button color="dark" clear><ion-icon ios="ios-more" md="ios-more"></ion-icon></button>\n          </div>\n        \n          <div class="pc"><img src="{{image}}"></div>\n      \n         <div class="like">\n              <button *ngIf="bit == \'0\'" (click)="likeImage()" ion-button icon-left clear small>\n                  <ion-icon ios="ios-heart" md="ios-heart" style="color:#ccc;"></ion-icon>\n                 </button> \n                <button *ngIf="bit == \'1\'" (click)="likeImage()" ion-button icon-left clear small>\n                  <ion-icon ios="ios-heart" md="ios-heart" style="color:#f00;"></ion-icon>\n             </button>   \n            \n              <button ion-button icon-left clear small (click)="postComment()">\n                  <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline" style="color: #333;"></ion-icon>\n              </button>\n             \n             <div class="post">\n                <p>Posted by<span> @{{username}}</span></p>\n               <span>{{tym | date: \'MMM d, yyyy\'}}</span>\n              </div> \n        </div>\n          \n         \n        </ion-card>\n    \n    \n     <ion-list class="coment">\n         <h2 *ngIf="len != \'0\'">Comments:</h2>\n                <ion-item *ngFor="let com of comments">\n                  <ion-avatar item-start *ngIf="!com.User.image">\n                    <img src="assets/imgs/user.png">\n                  </ion-avatar>\n                    <ion-avatar item-start *ngIf="com.User.image">\n                    <img src="{{com.User.image}}">\n                  </ion-avatar>\n                  <h2>{{com.User.name}}</h2>\n                  <p>{{com.Comment.comment}}</p>\n                </ion-item>\n              </ion-list>\n</ion-content>\n\n <ion-footer *ngIf="buttonClicked" style="background: #fff;border-top: 1px solid #ccc;">              \n             \n              \n                 <form #commentForm="ngForm">\n                    <ion-input type="text" name="commentt" [(ngModel)]="data.commentt" id="commentt" #commentt="ngModel" placeholder="Type comment" required></ion-input>\n                        <ion-buttons end>\n                            <button ion-button small no-margin color="theme" (click)="comment(commentForm)" [disabled]="!commentForm.form.valid">Comment</button>\n                        </ion-buttons>\n                 </form>\n                 </ion-footer>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/galdetail/galdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], GaldetailPage);
    return GaldetailPage;
}());

//# sourceMappingURL=galdetail.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditphotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallerytwo_gallerytwo__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locality_locality__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(11);
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
                this.bit = 1;
                console.log(this.bit);
            }
        }
    }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editphoto',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/editphoto/editphoto.html"*/`<!--<ion-header>\n    <ion-toolbar color="theme">\n      <ion-title class="header_title" color="text">Edit Photo</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <div class="app_usr"><img src="assets/imgs/a.png"></div>\n        </button>\n        </ion-buttons>\n    \n    </ion-toolbar>\n    </ion-header>-->\n\n<ion-header>\n    <ion-toolbar color="theme">\n        <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title class="header_title" color="text">Edit Photo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div class="edit_main">\n    <div class="pic">\n        <img src="{{showimg}}">\n    </div>\n	\n	<div style="padding:8px;">\n    <h4>TAG LOCATION</h4>\n    <div *ngIf="bit == \'0\'">\n    <button ion-button clear color="theme" (click)="addLocation()">+ Add Location</button>\n    </div>\n    \n    <div *ngIf="bit == \'1\'">\n        <p>{{location}}</p>\n    </div>\n    \n	 <ion-row class="edit_outer">\n		<!-- <ion-col col-5 style="padding-left:0px;">\n			<ion-label>SELECT LAYOUT</ion-label>\n			<ion-list class="aud">\n			  <ion-item>\n				<ion-select [(ngModel)]="gaming">\n				  <ion-option value="nes" selected="true">NES</ion-option>\n				  <ion-option value="n64">Nintendo64</ion-option>\n				</ion-select>\n			  </ion-item>\n			</ion-list>\n		 </ion-col>-->\n		 <ion-col col-10 style="padding-right:0px;">\n			<ion-label>CHOOSE AUDIENCE</ion-label>\n			<ion-row class="pub">\n				<ion-col col-2 style="padding: 5px 0px;"> <span>Public</span></ion-col>\n                                \n				<ion-col col-3 style="padding: 0px 5px;">\n                                               \n                          <ion-toggle name="audience" id="audience" [(ngModel)]="data.audience" (ionChange)="notify()" [checked]="data.audience"></ion-toggle>\n                        \n                              </ion-col>\n                                \n				<ion-col col-5 style="padding: 5px 0px;"> <span>Group Only</span></ion-col>\n			</ion-row>\n                        \n		 </ion-col>\n	 </ion-row>\n	</div>\n   \n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/editphoto/editphoto.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], EditphotoPage);
    return EditphotoPage;
}());

//# sourceMappingURL=editphoto.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function RatingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trip = this.navParams.get('tripData');
        console.log(this.trip);
    }
    RatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingPage');
    };
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rating',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/rating/rating.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Rating</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n  <div class="card-background-page" *ngIf="trip">\n      <ion-card>\n          <img src="assets/imgs/a.png"/>\n          <div class="card-title">{{trip.end_location}}</div>\n          <div class="card-subtitle">{{trip.trip_startdate | date: \'MMM d\'}} - {{trip.trip_enddate | date: \'MMM d, yyyy\'}}</div>\n        </ion-card>\n      <div class="descrp">\n        <h3>ITINERARY</h3>\n        <p>{{trip.trip_startdate | date: \'EEEE MMM d\'}}</p>\n        <h4>Location: <span>{{trip.end_location}}</span></h4>\n      </div>\n\n      <ion-card class="waterfall">\n          \n                <ion-item (click)="hotel();">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <h2>My Neighbor Totoro</h2>\n                  <p>Hayao Miyazaki • 1988</p>\n                  <ul>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li><ion-icon name="star"></ion-icon></li>\n                      <li> <ion-icon name="star-outline"></ion-icon></li>\n                    </ul>\n                </ion-item>\n          \n          \n                </ion-card>\n\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/rating/rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galdetail_galdetail__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewactivities_viewactivities__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flight_flight__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mytrip_mytrip__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchitinerary_searchitinerary__ = __webpack_require__(83);
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
    function DiscoverPage(navCtrl, navParams, common, http, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.countries = [];
        this.longitude1 = '';
        this.lattitude1 = '';
        this.data = {
            query: '',
            queryy: '',
            city: '',
            country: '',
            dmonth: '',
            amonth: '',
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
        this.roomselected = [];
        /*for calender*/
        this.eventt = {
            dmonth: '',
            amonth: '',
        };
        this.events = {};
        this.id = localStorage.getItem('ID');
        this.viewProfile();
        this.countrylist();
        /*this.bool = 'true';
        console.log(this.bool);*/
        this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        //this.minDate = this.dPipe.transform(new Date(), 'MM-dd-yyyy');
        console.log(this.minDate);
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
    DiscoverPage.prototype.roundtrip = function () {
        console.log('roundtrip');
        this.trip = 1;
    };
    DiscoverPage.prototype.oneway = function () {
        console.log('oneway');
        this.trip = 2;
    };
    DiscoverPage.prototype.flights_hotels = function (value) {
        if (value == 'flights') {
            console.log('flights');
            this.bit = 1;
            this.bool = 'true';
        }
        else if (value == 'hotels') {
            console.log('hotels');
            this.bit = 2;
            this.trip = 1;
        }
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
        console.log('hotelView');
        console.log(heroForm.value.city);
        console.log(heroForm.value.country);
        this.from = heroForm.value.dmonth;
        this.to = heroForm.value.amonth;
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
            FromDate: heroForm.value.dmonth,
            ToDate: heroForm.value.amonth,
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
                        occupancies: _this.roomselected
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
    };
    DiscoverPage.prototype.flightView = function (heroForm) {
        var _this = this;
        console.log('flightView');
        if (this.trip == '1') {
            console.log('round');
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            var ddatee = this.eventt.dmonth.split("-");
            var format = ddatee[1] + "/" + ddatee[2] + "/" + ddatee[0];
            var ddateee = this.eventt.amonth.split("-");
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
                OriginDestination: [{ "Origin": this.source_code, "Destination": this.destination_code, "TravelDate": format },
                    { "Origin": this.destination_code, "Destination": this.source_code, "TravelDate": formatt }],
                Currency: this.a_currency
            };
            console.log(data_form);
            //var Serialized = this.common.serializeObj(data_form);
            //console.log(Serialized);
            Loading.present().then(function () {
                _this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search', data_form, _this.optionss)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loading.dismiss();
                    console.log(data);
                    if (data.ErrorMessage == null) {
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
                    else {
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
        else if (this.trip == '2') {
            console.log('oneway');
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
            var ddatee = this.eventt.dmonth.split("-");
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewactivities_viewactivities__["a" /* ViewactivitiesPage */]);
    };
    DiscoverPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    DiscoverPage.prototype.mytrip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mytrip_mytrip__["a" /* MytripPage */]);
    };
    DiscoverPage.prototype.activitiesListing = function () {
        var _this = this;
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
            currency: this.currency,
            fromDate: '2018-04-23',
            toDate: '2018-04-23',
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
                if (data.ErrorMessage == null) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DiscoverPage.prototype, "mapElement", void 0);
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-discover',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/discover/discover.html"*/`<ion-header>\n  <ion-toolbar color="theme">\n    <ion-title class="header_title" color="text">Discover</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <div class="app_usr">\n            <img *ngIf="image" src="{{image}}">\n						\n            <img *ngIf="!image" src="assets/imgs/user.png">\n        </div>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="discover">\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="hotels">\n        Flights & Hotels\n      </ion-segment-button>\n      <ion-segment-button value="activities">\n        Activities\n      </ion-segment-button>\n      <ion-segment-button value="deals">\n        Deals\n      </ion-segment-button>\n      <ion-segment-button value="travel">\n        community\n      </ion-segment-button>\n    </ion-segment>\n\n\n    <div [ngSwitch]="pet">\n      <form #heroForm="ngForm">\n        <ion-list *ngSwitchCase="\'hotels\'">\n          <div class="card-background-page">\n            <ion-card>\n              <img src="assets/imgs/a.png" />\n\n              <div class="check">\n                <ion-list radio-group name="ch" [(ngModel)]="data.relationship">\n                  <ion-item item-left>\n                     <ion-label>Flights</ion-label>\n                    <ion-radio item-left value="flights" checked="{{bool}}" (ionSelect)="flights_hotels(\'flights\')"></ion-radio>                   \n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Hotels</ion-label>\n                    <ion-radio item-left value="hotels" (ionSelect)="flights_hotels(\'hotels\')"></ion-radio>\n                  </ion-item>\n                </ion-list>\n              </div>\n              <div *ngIf="bit == \'1\'" class="rad" radio-group>\n                <ion-item>\n                  <ion-label>Roundtrip</ion-label>\n                  <ion-radio name="rtrip"  checked="true" value="round" (ionSelect)="roundtrip()"></ion-radio>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label>One Way</ion-label>\n                  <ion-radio name="owtrip" value="way" (ionSelect)="oneway()"></ion-radio>\n                </ion-item>\n\n                <!--<ion-item>\n                          <ion-label>Multi-city</ion-label>\n                          <ion-radio value="city"></ion-radio>\n                        </ion-item>-->\n              </div>\n              <div class="dest" *ngIf="bit == \'1\'">\n                <h1>Start</h1>\n\n                <ion-list>\n                  <ion-item>\n                    <ion-input type="text" name="query" [(ngModel)]="data.query" (input)="updateSearch(data.query)" #query="ngModel" placeholder="Enter City" required></ion-input>\n                    \n                    <ion-select name="scountry" placeholder="Select Country" [(ngModel)]="data.scountry" (ionChange)="scountrySelect($event)">\n                    <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n                  </ion-select>\n                  </ion-item>\n                 \n                    <!--<ion-item>\n                  \n                </ion-item>  -->                \n                    \n                </ion-list>\n\n                <h1>Destination</h1>\n\n                <ion-list>\n                  <ion-item>\n                    <ion-input type="text" name="queryy" [(ngModel)]="data.queryy" (input)="updateeSearch(data.queryy)" #query="ngModel" placeholder="Enter City" required></ion-input>\n                    \n                    <ion-select name="dcountry" placeholder="Select Country" [(ngModel)]="data.dcountry" (ionChange)="dcountrySelect($event)">\n                    <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n                  </ion-select>\n                  </ion-item>                 \n                    \n                </ion-list>\n\n              </div>\n              <div *ngIf="bit == \'2\'" class="dest dest_b">\n                <h1>Destination City</h1>\n                <ion-input type="text" name="city" [(ngModel)]="data.city" id="city" #city="ngModel" required></ion-input>\n\n\n\n                <h1>Destination Country</h1>\n                <ion-input type="text" name="country" (input)="getData(data.country)" [(ngModel)]="data.country" id="country" #country="ngModel" required></ion-input>\n              </div>\n            </ion-card>\n\n\n\n            <ion-card class="time-date">\n              <ion-row>\n                <ion-col col-6>\n                  <div *ngIf="trip == \'1\' || trip == \'2\'" class="depart" style="border-right: 1px solid #ccc;">\n                    <h5>ARRIVAL</h5>                    \n\n                    <ion-datetime name="dmonth"  displayFormat="MM/DD/YYYY" max="2050-31-12" min="{{minDate}}" [(ngModel)]="eventt.dmonth" placeholder="Change Date"\n                      id="dmonth" #dmonth="ngModel" required></ion-datetime>\n                  </div>\n                </ion-col>\n                <ion-col col-6>\n                  <div *ngIf="trip == \'1\'" class="depart arrival">\n                    <h5>DEPARTURE</h5>\n                    <ion-datetime name="amonth" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" max="2050-31-12" min="{{minDate}}" [(ngModel)]="eventt.amonth" placeholder="Change Date"\n                      id="amonth" #amonth="ngModel" required></ion-datetime>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <div *ngIf="bit == \'2\'" class="room">\n               \n                <h5>ROOMS & GUESTS</h5>\n                <h6>Rooms</h6>\n                <ion-item>\n                  <ion-select name="rooom" [(ngModel)]="data.rooom" (ionChange)="roomSelect($event)">\n                    <ion-option value="1" selected="true">1</ion-option>\n                    <ion-option value="2">2</ion-option>\n                  </ion-select>\n                </ion-item> \n                <div class="count" *ngFor="let rooms of roomselected; let i=index">\n                    \n                     <h6>Room {{i+1}}</h6>\n                <div class="count_lft" float-left>\n                    <h6>Adults</h6>\n  \n                    <ion-icon name="add" item-start (click)="add_a(i)"></ion-icon>\n                        <!--<ion-input type="text" name="adults" [(ngModel)]="data.adults" id="adults" #adults="ngModel" max=4 required></ion-input>-->\n                        <span>{{rooms.NoOfAdults}}</span>\n                    <ion-icon name="remove" item-end (click)="minus_a(i)"></ion-icon>\n                  \n                </div>\n            \n                <div class="count_lft" float-right>\n                    <h6>Children</h6>\n                  \n                    <ion-icon name="add" item-start (click)="add_c(i)"></ion-icon>\n                        <!--<ion-input type="text" name="children" [(ngModel)]="data.children" id="children" #children="ngModel" max=2 required></ion-input>-->\n                        <span>{{rooms.child}}</span>\n                    <ion-icon name="remove" item-end (click)="minus_c(i)"></ion-icon>\n                    \n                </div>\n                \n                </div>\n\n              </div>\n                \n            </ion-card>\n              \n            <button *ngIf="bit == \'1\'" color="theme" ion-button class="search" (click)="flightView(heroForm)" [disabled]="!heroForm.form.valid">Search</button>\n            <button *ngIf="bit == \'2\'" color="theme" ion-button class="search" (click)="hotelView(heroForm)">Search</button>\n          </div>\n        </ion-list>\n      </form>\n\n      <ion-list *ngSwitchCase="\'activities\'">\n        <div padding class="location_sec">\n          <h5>Search</h5>\n          <ion-item>\n              <ion-input type="text" name="activityl" [(ngModel)]="data.activityl" (input)="activitySearch(data.activityl)" #activityl="ngModel" placeholder="Enter City"></ion-input>\n                <ion-select name="acountry" placeholder="Select Country" [(ngModel)]="data.acountry" (ionChange)="dcountrySelect($event)">\n                 <ion-option *ngFor="let cn of countries" value="{{cn.Country.name}}">{{cn.Country.name}}</ion-option>                    \n               </ion-select>\n              <ion-icon ios="ios-search" md="md-search" class="sr" (click)="activitiesListing()" item-end></ion-icon>\n          </ion-item>\n         \n\n          \n        </div>\n\n        <div class="things">\n          <div class="top">\n            <h3>Top things to do</h3>\n            <button (click)="view()">View all activities</button>\n          </div>\n          <ion-scroll scrollX="true" padding>\n            <ion-card>\n              <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>Product One</ion-title>\n                <p class="price">$130.00</p>\n                <ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                  <li><span>3,789</span></li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>Product One</ion-title>\n                <p class="price">$130.00</p>\n                <ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>Product One</ion-title>\n                <p class="price">$130.00</p>\n                <ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>Product One</ion-title>\n                <p class="price">$130.00</p>\n                <ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>Product One</ion-title>\n                <p class="price">$130.00</p>\n                <ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <div class="product-img">\n                <img src="assets/imgs/getstartback.jpeg" />\n\n              </div>\n              <ion-card-content>\n                <ion-title>Product One</ion-title>\n                <p class="price">$130.00</p>\n                <ul>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star"></ion-icon>\n                  </li>\n                  <li>\n                    <ion-icon name="star-outline"></ion-icon>\n                  </li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n\n          </ion-scroll>\n        </div>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'deals\'">\n        <div padding class="location_sec">\n          <h5>Flights & vacation packages leaving from</h5>\n          <ion-item>\n            <ion-label fixed>\n              <ion-icon ios="ios-locate" md="md-locate"></ion-icon>\n            </ion-label>\n            <ion-input type="text" value=""></ion-input>\n          </ion-item>\n        </div>\n\n\n        <ion-item class="filter" no-padding>\n          <ion-label><span>Filter</span></ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n            <ion-option value="n64">Highest Price</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n        <ion-item class="disc">\n          <div class="card_sec">\n            <ion-card>\n              <img src="assets/imgs/getstartback.jpeg" />\n              <span>999</span>\n              <ion-card-content>\n                <ion-card-title>\n                  Nine Inch Nails Live\n                </ion-card-title>\n                <p>Mar 16 - Mar 25, 2017</p>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <img src="assets/imgs/getstartback.jpeg" />\n              <span>999</span>\n              <ion-card-content>\n                <ion-card-title>\n                  Nine Inch Nails Live\n                </ion-card-title>\n                <p>Mar 16 - Mar 25, 2017</p>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'travel\'" no-margin>\n        <h3 class="sub">Search</h3>\n        <div class="trav">\n          <ion-card (click)="openItinerary()">\n            <img src="assets/imgs/getstartback.jpeg" />\n            <div class="overlay"></div>\n            <div class="card-title">Itineraries</div>\n          </ion-card>\n\n          <ion-card>\n            <img src="assets/imgs/getstartback.jpeg" />\n            <div class="overlay"></div>\n            <div class="card-title">Galleries</div>\n          </ion-card>\n        </div>\n        <h3 class="sub">news feed</h3>\n        <ion-item no-padding class="nam">\n          <ion-avatar item-start>\n            <img src="assets/imgs/getstartback.jpeg" />\n          </ion-avatar>\n          <h2 (click)="mytrip();">Name</h2>\n          <p>Place</p>\n        </ion-item>\n\n\n        <ion-row>\n          <ion-col col-6 style="padding-right: 1px;" no-padding>\n            <div class="news" (click)="galdetail();"><img src="assets/imgs/getstartback.jpeg" /></div>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <div class="newsa"><img src="assets/imgs/getstartback.jpeg" /></div>\n            <div class="newsb">\n              <div class="a"><img src="assets/imgs/a.png" /></div>\n              <div class="a"><img src="assets/imgs/b.jpg" />\n                <div class="overlay"></div>\n                <button>+10 more photos</button>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-item no-padding class="nam">\n          <ion-avatar item-start>\n            <img src="assets/imgs/getstartback.jpeg" />\n          </ion-avatar>\n          <h2>Name</h2>\n          <p>Place</p>\n        </ion-item>\n\n        <div class="opens">\n          <ion-row>\n            <ion-col col-4 no-padding>\n              <div class="news opn"><img src="assets/imgs/getstartback.jpeg" /></div>\n            </ion-col>\n            <ion-col col-4 no-padding>\n              <div class="news opn"><img src="assets/imgs/a.png" /></div>\n            </ion-col>\n            <ion-col col-4 no-padding>\n              <div class="news opn"><img src="assets/imgs/b.jpg" /></div>\n            </ion-col>\n          </ion-row>\n          <div class="overlay"></div>\n          <button>Open Itinerary</button>\n        </div>\n\n      </ion-list>\n    </div>\n\n  </div>\n</ion-content>`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/discover/discover.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__["a" /* NativeGeocoder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoteldetail_hoteldetail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover__ = __webpack_require__(87);
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
        this.detail = navParams.get('detail');
        console.log(this.detail);
        this.occupancies = this.detail.occupancies;
        console.log(this.occupancies);
        this.hotels = this.detail.hotels;
        console.log(this.hotels);
        this.city = this.detail.city;
        console.log(this.city);
        this.currency = this.detail.currency;
        console.log(this.currency);
        this.nationality = this.detail.nationality;
        console.log(this.nationality);
        this.from = this.detail.from;
        this.to = this.detail.to;
        console.log(this.from + '-' + this.to);
    }
    SearchPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__discover_discover__["a" /* DiscoverPage */]);
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
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
                        search_id: data.search_id
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/search/search.html"*/`<ion-header>\n    \n    <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="header_title" color="text">Search</ion-title>\n  </ion-toolbar>    \n  </ion-header>\n\n<ion-content>\n\n<!--<div class="plane">\n\n  <div class="fst">\n  <h2>Bankok</h2>\n</div>\n\n<div class="icon1">\n  <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n</div>\n\n<div class="last">\n    <h2>{{city}}</h2>\n  </div>\n  \n</div>-->\n\n  <span class="date">{{from | date: \'MMM d, yyyy\'}} -> {{to | date: \'MMM d, yyyy\'}}</span>\n\n    <ion-item class="filter" no-padding>\n        <ion-label><span>Filter</span></ion-label>\n        <ion-select [(ngModel)]="gaming">\n          <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n          <ion-option value="n64">Highest Price</ion-option>\n        </ion-select>\n      </ion-item>\n    \n    \n    \n    <ion-card class="waterfall" *ngFor="let ht of hotels">\n    \n          <ion-item (click)="hotel(ht)">\n            <ion-thumbnail item-start>\n                <img src="assets/imgs/abc.jpg">\n            </ion-thumbnail>\n            <h2>{{ht.fullName}}</h2>\n            <p>{{city}}</p> \n            <ul>\n            <li>\n            <rating [(ngModel)]="ht.starCategory" \n              #ht.starCategory="ngModel"\n              readOnly="true"\n              max="5" \n              emptyStarIconName="star-outline" \n              halfStarIconName="star-half" \n              starIconName="star" \n              nullable="false"></rating> \n              \n              </li>\n            </ul>\n                       \n            <!--<ul>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li><ion-icon name="star"></ion-icon></li>\n                <li> <ion-icon name="star-outline"></ion-icon></li>\n                <li><span>3,789</span></li>\n              </ul>-->\n    \n              <ion-note item-end="" class="note note-ios">{{ht.minprice}}</ion-note>\n          </ion-item>\n    \n    \n          </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoteldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_flight__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotel_hotel__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(10);
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
        this.detail = navParams.get('detail'); ///back data
        console.log(this.detail);
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
        //this.gst = this.detailed.hotel.ratetype.bundledRates[0].price_details.GST[0].amount;
        //this.gst = this.detailed.hotel.ratetype.bundledRates[0].price_details.Netprice[1].amount;
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
                        detail: data.dbstay
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hoteldetail',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/hoteldetail/hoteldetail.html"*/`<!--<ion-header>\n  <ion-navbar color="theme">\n    <ion-title class="header_title" color="text">Hotel detail</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-header>\n  <ion-toolbar color="theme">\n    <ion-buttons start (click)="back()">\n      <button ion-button icon-only >\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="header_title" color="text">Hotel detail</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!--<div class="plane">\n    \n      <div class="fst">\n      <h2>Bankok</h2>\n    </div>\n    \n    <div class="icon1">\n      <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n    </div>\n    \n    <div class="last">\n        <h2>{{city}}</h2>\n      </div>\n      \n    </div>-->\n    \n      <span class="date">{{to | date: \'MMM d, yyyy\'}} -> {{from | date: \'MMM d, yyyy\'}}</span>\n\n      <div class="river">\n      <h3>{{name}}</h3>\n      <ul>\n            <li>\n            <rating [(ngModel)]="ratingg" \n              #ht.starCategory="ngModel"\n              readOnly="true" \n              max="5" \n              emptyStarIconName="star-outline" \n              halfStarIconName="star-half" \n              starIconName="star" \n              nullable="false"></rating> \n              \n              </li>\n            \n        <li><button ion-button clear color="theme">View All Reviews</button></li>\n      </ul>\n      <span>{{name}}, {{city}}, {{n3}}</span>\n    </div>\n\n    <div class="slide">\n      <!--<ion-slides pager >\n          <ion-slide style="background:url(assets/imgs/a.png) center center / cover no-repeat;">\n          </ion-slide>\n        \n          <ion-slide style="background:url(assets/imgs/b.jpg) center center / cover no-repeat;">\n          </ion-slide>\n        \n          <ion-slide style="background:url(assets/imgs/getstartback.jpeg) center center / cover no-repeat;">\n          </ion-slide>\n      </ion-slides>-->\n      <h3>HOTEL DETAILS</h3>\n      <h3>{{description}}</h3>\n      <!--<div *ngFor="let room of rooms">-->\n        <ul>\n          <li>Hotel - {{price}}</li>\n          <li>GST - {{gst}}</li>\n          <li></li>\n        </ul>\n      <h2>{{symbol}}{{total}}</h2>\n     <!-- </div>-->\n      <h3>ROOM TYPE</h3>\n\n      <ion-card class="waterfall">\n          \n                <ion-item *ngFor="let room of rooms">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/abc.jpg">\n                  </ion-avatar>\n                  <h3>{{room.rooms[0].room_type}} {{room.rooms[0].bed_types[0].type}}</h3>\n                  <p>Non-Refundable</p>\n                  <!--<button ion-button clear>View room details</button>-->        \n                  <ion-note item-end="" class="note note-ios"> {{symbol}}{{room.convertedPrice}}\n                  <button ion-button color="theme" small (click)="select(room)">Select</button>\n                  </ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/hoteldetail/hoteldetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], HoteldetailPage);
    return HoteldetailPage;
}());

//# sourceMappingURL=hoteldetail.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(11);
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
        this.info = [];
        this.info1 = [];
        this.info2 = [];
        this.origin = [];
        this.des = [];
        this.flightdetail = this.navParams.get('fdetail');
        console.log(this.flightdetail);
        this.source = this.flightdetail.source;
        this.destination = this.flightdetail.destination;
        this.flights = this.flightdetail.flights;
        this.track_id = this.flightdetail.track_id;
        console.log(this.track_id);
        console.log(this.flightdetail.flights.length);
        /*for(let i =0; i < this.flightdetail.flights.length; i++){
            for(let j =0; j < this.flightdetail.flights[i].FlightDetails.length; j++){
                this.origin['origin' + j]=this.flightdetail.flights[i].FlightDetails[j].Origin;
                this.des['destination' +j]=this.flightdetail.flights[i].FlightDetails[j].Destination;
                //this.flightdetail.flights[i].push({stops: this.des['destination' +j]});
            }
                     
        }
        console.log(this.flightdetail.flights);
        console.log(this.des);*/
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
    FlightPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    FlightPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlightPage');
    };
    FlightPage.prototype.arival = function (flight, item) {
        var _this = this;
        console.log(flight);
        console.log(item);
        //this.navCtrl.push(ArivalPage);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        //var options = this.common.options;
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
                        item: [item[0]]
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
        /*if(flight.FlightDetails.length == 2){
            console.log('2');
            var data_form = {
        TrackId: this.track_id,
         ItinearyDetails: {
            Segments: [ {
                ValidatingCarrier: flight.ValidatingCarrier,
                Price: flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
                item: [ {
                     FlightID: flight.FlightDetails[0].FlightID,
                     FlightNum: flight.FlightDetails[0].FlightNum,
                     CarrierId: flight.FlightDetails[0].CarrierCode,
                    AircraftType: flight.FlightDetails[0].AirCraftType,
                    Origin: flight.FlightDetails[0].Origin,
                    Destination: flight.FlightDetails[1].Destination,
                    DepartureDateTime: flight.FlightDetails[0].DepartureDateTime,
                    ArrivalDateTime: flight.FlightDetails[1].ArrivalDateTime,
                    ClassCode: flight.FlightDetails[0].ClassCode,
                    EquipmentType: flight.FlightDetails[0].AirEquipType,
                    OperatingCarrierId: flight.FlightDetails[0].CarrierCode,
                    Meal: flight.FlightDetails[0].MealCode.MealCode,
                    OrgTerminal: flight.FlightDetails[0].OrgTerminal,
                    DestTerminal: flight.FlightDetails[1].DesTerminal,
                    MajorClassCode: flight.FlightDetails[0].MajorClassCode,
                    Baggage: flight.FlightDetails[0].Baggage,
                    Duration: flight.FlightDetails[0].Duration + flight.FlightDetails[1].Duration,
                    ApiProvider: flight.ApiProvider,
                    MarriageGroup: flight.FlightDetails[0].MarriageGroup,
                    IsStopAirport: flight.FlightDetails[0].IsStopAirport
                }
                ]
            }
            ]
            }
        }
            
        }*/
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
    FlightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flight',template:/*ion-inline-start:"/Volumes/D/isha/latest/grouptravel/src/pages/flight/flight.html"*/`<ion-header>\n    <ion-navbar color="theme">\n      <ion-title class="header_title" color="text">Flight</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n      \n      <div class="plane">\n      \n        <div class="fst">\n        <h2>{{source}}</h2>\n      </div>\n      \n      <div class="icon1">\n        <ion-icon ios="ios-plane" md="ios-plane"></ion-icon>\n      </div>\n      \n      <div class="last">\n          <h2>{{destination}}</h2>\n        </div>\n        \n      </div>\n      \n        <!--<span class="date">18/7/2017-20/7/2017 <ion-icon ios="md-calendar" md="md-calendar"></ion-icon></span>-->\n      \n          <ion-item class="filter" no-padding>\n              <ion-label><span>Filter</span></ion-label>\n              <ion-select [(ngModel)]="gaming">\n                <ion-option value="nes" [selected]="true">Lowest Price</ion-option>\n                <ion-option value="n64">Highest Price</ion-option>\n              </ion-select>\n            </ion-item>\n          \n          \n          <h3 class="head">Departure</h3>\n          <!--<div *ngFor="let flight of flights">\n          <!--<ion-card class="waterfall" *ngFor="let fl of flight.FlightDetails">-->\n          <!--<ion-card class="waterfall" *ngFor="let fl of flights">\n                <ion-item (click)="arival()">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                 \n                  <div>\n                      <p>{{fl.ArrivalDateTime}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.DepartureDateTime}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fl.Origin}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.Destination}}</p>\n                    <span>{{fl.AirlineName}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <li>{{fl.Duration}}</li>\n                      <!--<li>{{flight.Connection.Onward.NoOfStops}} stop in IST</li>\n                    </ul>\n                  </div>\n                 \n                    <!--<ion-note item-end="" class="note note-ios">{{flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>-->\n          \n          \n          \n          <ion-card class="waterfall" *ngFor="let fl of info">\n                <ion-item (click)="arival(fl.flights,fl.dates)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  -->\n                  <div>\n                      <p>{{fl.s_date}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.d_date}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fl.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fl.d}}</p>\n                    <span>{{fl.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{fl.Duration}}</li>-->\n                     <li>{{fl.n}} stops</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{fl.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n                    \n                    <!--<ion-card class="waterfall" *ngFor="let fli of info1">\n                <ion-item (click)="arival(fli.flights,fli.dates)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  \n                  <div>\n                      <p>{{fli.s_date}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fli.d_date2}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{fli.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{fli.d}}</p>\n                    <span>{{fli.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{fli.Duration}}</li>\n                     <li>{{fli.n}} stop in {{fli.stop}}</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{fli.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>\n                    \n                    <ion-card class="waterfall" *ngFor="let flig of info2">\n                <ion-item (click)="arival(flig.flights)">\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/a.png">\n                  </ion-avatar>\n                  <!--<h2>My Neighbor Totoro</h2>\n                  \n                  <div>\n                      <p>{{flig.s_date}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{flig.d_date2}}</p>\n                  </div>\n                  <div class="us">\n                      \n                    <p>{{flig.s}} &#x25CB; 	&#x25cf; 	&#x25cf; 	&#x25cf; &#x25CB; {{flig.d}}</p>\n                    <span>{{flig.airline}}</span>\n                  </div>\n                  <div class="rt">\n                    <ul>\n                      <!--<li>{{flig.Duration}}</li>\n                     <li>{{flig.n}} stop in {{flig.stop1}}, {{flig.stop2}}</li>\n                    </ul>\n                  </div>\n                 \n                    <ion-note item-end="" class="note note-ios">{{flig.price}}</ion-note>\n                </ion-item>\n          \n          \n                </ion-card>-->\n          <!--</div>-->\n      </ion-content>\n`/*ion-inline-end:"/Volumes/D/isha/latest/grouptravel/src/pages/flight/flight.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], FlightPage);
    return FlightPage;
}());

//# sourceMappingURL=flight.js.map

/***/ })

},[304]);
//# sourceMappingURL=main.js.map