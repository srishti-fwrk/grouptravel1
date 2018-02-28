import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
  providers: [HttpModule, CommonProvider, Camera]
})
export class EditprofilePage {

  data: any = '';
  id: any;
  user: any;
  image: any;
  dpimage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public common: CommonProvider,
    public toastCtrl: ToastController, public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl:LoadingController, public viewCtrl: ViewController
  ) {
    this.id = localStorage.getItem('ID');
    
    this.viewProfile();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EditprofilePage');

  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  viewProfile() {

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/user', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 0) {
          this.user = data.data.User;
          console.log(this.user);
          localStorage.setItem('Userdata', JSON.stringify(data.data.User));
          localStorage.setItem('DP',this.user.image);

          if(this.user.name == null || this.user.name == 'undefined' || this.user.name == ''){
            this.user.name = '';
      }

          if(this.user.phone == null || this.user.phone == '' || this.user.phone == 'undefined'){
            this.user.phone = '';
        }
        
        if(this.user.email == null || this.user.email == 'undefined' || this.user.email == ''){
            this.user.email = '';
      }
          this.data = {
            name: this.user.name,
            phone: this.user.phone,
            email: this.user.email,
          }
          this.image = this.user.image;
          console.log(this.image);
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

  editProfile(edit) {

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
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/editprofile', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.sucess == 0) {
          
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          localStorage.setItem('Userdata', JSON.stringify(data.data.User));
          localStorage.setItem('DP',data.data.User.image);
          this.navCtrl.push(ProfilePage);

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

  openActionSheet() {
    
    this.id = localStorage.getItem("ID");
    
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
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
          }
          
          this.camera.getPicture(options).then((imageData) => {
            this.dpimage = 'data:image/jpeg;base64,' + imageData;
            
            this.dpimage = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = ({
              id: this.id,
              img: this.dpimage
            })

            var serialized_img = this.common.serializeObj(data_img);
            console.log(serialized_img);

            let options = this.common.options;

            var url: string = this.common.base_url + 'users/saveimage';
            Loading.present().then(() => {
            this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              
              if (data.isSucess == true) {
              
              } else if (data.error == 0) {
                this.image = data.img;
                localStorage.setItem("DP", this.dpimage);
                
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
            targetWidth: 500,
            targetHeight: 500,
          }
          
          this.camera.getPicture(options).then((imageData) => {
            this.dpimage = 'data:image/jpeg;base64,' + imageData;
            
            this.dpimage = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = ({
              id: this.id,
              img: this.dpimage
            })
            
            var serialized_img = this.common.serializeObj(data_img);
            console.log(serialized_img);

            let options = this.common.options;

            var url: string = this.common.base_url + 'users/saveimage';
            Loading.present().then(() => {
            this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              
              if (data.isSucess == true) {
              } else if (data.error == 0) {
                this.image = data.img;
                localStorage.setItem("DP", this.dpimage);
                
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

}
