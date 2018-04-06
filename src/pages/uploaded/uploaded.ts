import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the UploadedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uploaded',
  templateUrl: 'uploaded.html',
})
export class UploadedPage {
    
  image: any;
  id: string;
  trip_id: any;
  images: any;
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.viewallImages();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public common: CommonProvider,public http: Http,
      public toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public viewCtrl: ViewController) {
  
    this.id = localStorage.getItem('ID');
    this.viewProfile();
    this.trip_id = localStorage.getItem('TripID');
    this.viewallImages();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadedPage');
  }
  
  viewallImages(){

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id      
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
//            let toast = this.toastCtrl.create({
//              message: "",
//              duration: 3000,
//              position: 'middle'
//            });
//            toast.present();

          } else {

            let toast = this.toastCtrl.create({
              message: "No photos uploaded",
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


  viewProfile(){

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
          
          
        }else {
                        
        }
      }, error => {
              
      });
    
  
  }


}
