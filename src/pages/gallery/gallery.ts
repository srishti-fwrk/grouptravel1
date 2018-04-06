import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ImagePicker } from '@ionic-native/image-picker';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { AddtripPage } from '../addtrip/addtrip';
import { GaldetailPage } from '../galdetail/galdetail';
import { GallerytwoPage } from '../gallerytwo/gallerytwo';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [Camera]
})
export class GalleryPage {
    
  profile_image: any;
  img: string;
  srcImage: string;
  re = new Array<string>();
  imagebase64: any;
  base64Image: string;
  pics: any;
  trip_id: string;
  //photos: string[];
  image: any;
  id: string;
  images: any;
  im: any;
  public picImag = [];
  public cam = [];
  str: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider, public http: Http,
    public camera: Camera, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public viewCtrl: ViewController, public imagePicker: ImagePicker) {

    this.id = localStorage.getItem('ID');
    this.trip_id = localStorage.getItem('TripID');
    this.viewProfile();
    this.viewallImages();
  }
  
  imagedetail(img){
      
//      this.navCtrl.push(GaldetailPage,{
//          send: img
//      });
  }

  gallery() {
    this.navCtrl.push(GalleryPage);
  }

//  payments() {
//    this.navCtrl.push(ContactPage);
//  }

  chat() {
    this.navCtrl.push(AboutPage);
  }

  itinerary() {
    this.navCtrl.push(AddtripPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  viewallImages(){

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      trip_id: this.trip_id      
    }
    //alert(JSON.stringify(data_form));
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'galleries/viewimage', Serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loading.dismiss();
         // alert(JSON.stringify(data));
          console.log(data);
          if (data.status == 0) {

            this.images = data.data;
            console.log(this.images);
           //alert(JSON.stringify(this.images));
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

  }
  
  openPage(){
      this.navCtrl.push(GallerytwoPage);
  }

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

  addImages() {

    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {

          const options: CameraOptions = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          }

          this.camera.getPicture(options).then((imageData) => {

            this.srcImage = 'data:image/jpeg;base64,' + imageData;

            /*this.picImag.push(this.srcImage);
            console.log(this.picImag.length);
            
            console.log(this.picImag.toString());
          
            this.img = this.picImag.toString();
      
                    
            this.profile_image =  imageData; 
            this.cam.push(this.profile_image);
            console.log(this.cam.toString());
          
            this.str = this.cam.toString();
        
            this.images = this.cam.join('harman');*/
            this.images = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = ({

              user_id: this.id,
              trip_id: this.trip_id,
              img: this.images

            })

            var serialized_img = this.common.serializeObj(data_img);
            console.log(serialized_img);

            let options = this.common.options;

            var url: string = this.common.base_url + 'galleries/uploadgallery';
            Loading.present().then(() => {
              this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
                Loading.dismiss();

                if (data.isSucess == true) {

                } else if (data.status == 0) {
                  this.images = data.data.image;
                  //localStorage.setItem("DP", this.dpimage);

                  let toast = this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000
                  });
                  toast.present();
                } else {

                  let toast = this.toastCtrl.create({
                    message: "Profile Picture has not been uploaded",
                    duration: 3000
                  });
                  toast.present();
                }
              })
            }, (err) => {
              Loading.dismiss();

              let toast = this.toastCtrl.create({
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
        handler: () => {

          const options: CameraOptions = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,

          }

          this.camera.getPicture(options).then((imageData) => {
            //this.images = 'data:image/jpeg;base64,' + imageData;
            this.srcImage = 'data:image/jpeg;base64,' + imageData;
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
            this.images = imageData;
            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = ({

              /*user_id: this.id,
              tripid: this.trip_id,
              gallery: this.images*/

              user_id: this.id,
              img: imageData,
              trip_id: this.trip_id
            })
           // alert(JSON.stringify(data_img));
            var serialized_img = this.common.serializeObj(data_img);
            console.log(serialized_img);

            let options = this.common.options;

            var url: string = this.common.base_url + 'galleries/uploadgallery';
            Loading.present().then(() => {
              this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
                Loading.dismiss();
                //alert('api');
                //alert(JSON.stringify(data));
                if (data.isSucess == true) {
                } else if (data.status == 0) {
                  this.images = data.image;
                  //localStorage.setItem("DP", this.dpimage);

                  let toast = this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000
                  });
                  toast.present();
                } else {

                  let toast = this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000
                  });
                  toast.present();
                }

              })
            }, (error) => {
              Loading.dismiss();

              let toast = this.toastCtrl.create({
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
        handler: () => {
          console.log('Cancel clicked');

        }
      }
      ]
    });
    actionsheet.present();

  }

  viewProfile() {

    var options = this.common.options;

    var data_form = {
      id: this.id
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    this.http.post(this.common.base_url + 'users/user', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {

          this.image = data.data.User.image;
          console.log(this.image);


        } else {

        }
      }, error => {

      });


  }


}
