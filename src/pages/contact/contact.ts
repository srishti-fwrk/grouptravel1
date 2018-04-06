import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { AboutPage } from '../about/about';
import { AddtripPage } from '../addtrip/addtrip';
import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [HttpModule,CommonProvider]
})
export class ContactPage {
    
  image: any;
  id: string;
  pet: string= "group";
  hpayments: any;
  
  constructor(public navCtrl: NavController,public common: CommonProvider,public http: Http, 
    public toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public viewCtrl: ViewController) {

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

  comments(){
    this.navCtrl.push(CommentsPage);
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
  
  viewPayments(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/paymenthistory', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == 0) {
            
            this.hpayments = data.data;
            console.log(this.hpayments);

          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
                
        }else{
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

}
