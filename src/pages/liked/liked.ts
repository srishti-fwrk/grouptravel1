import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LikedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liked',
  templateUrl: 'liked.html',
})
export class LikedPage {
    
  image: any;
  id: string;
  images: any;
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.viewImages();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public common: CommonProvider,public http: Http,
      public toastCtrl: ToastController) {
    this.id = localStorage.getItem('ID');
    this.viewProfile();
    this.viewImages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikedPage');
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
  
  viewImages(){
      var options = this.common.options;
  
    var data_form = {
      user_id: this.id      
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'galleries/favouriteslist', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
         
           this.images = data.data; 
           console.log(this.images);   
          
          
        }else {
           let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();             
        }
      }, error => {
             let toast = this.toastCtrl.create({
            message: "Check your Network Connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present(); 
      });
  }
  
  unlikeImage(imgid){
      console.log(imgid);
      var options = this.common.options;
  
    var data_form = {
         user_id: this.id,
         image: imgid,
         //trip_id: this.trip_id  
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'galleries/addtofavourite', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {    
                    
            this.viewImages();
            
            let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          
            
        }else {
        
           let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();             
        }
      }, error => {
         let toast = this.toastCtrl.create({
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
        
  }

}
