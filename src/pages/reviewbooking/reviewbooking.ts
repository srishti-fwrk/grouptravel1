import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { PassengerPage } from '../passenger/passenger';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { ThankyouPage } from '../thankyou/thankyou';
import { HomePage } from '../home/home';

/**
 * Generated class for the ReviewbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewbooking',
  templateUrl: 'reviewbooking.html',
  providers: [HttpModule, CommonProvider]
})
export class ReviewbookingPage {
    
    id: any;
    bid: any;
    fid: any;
    bookingDetaill: any;
    fbookingDetaill: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http, public common: CommonProvider, 
    public toastCtrl: ToastController,  
    public loadingCtrl:LoadingController, public viewCtrl: ViewController) {
    
      this.id = localStorage.getItem('ID');
      console.log(this.id);
    
      this.bid = this.navParams.get('id');
      console.log(this.bid);
      if(this.bid){
          this.viewBooking();
      }
      
      this.fid = this.navParams.get('fid');
      console.log(this.fid);
      if(this.fid){
          this.viewFlightbooking();
      }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewbookingPage');
  }

  passenger(){
    this.navCtrl.push(PassengerPage);
  }
  
  back(){
      this.navCtrl.push(HomePage);
  }
  
  viewBooking(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      id: this.bid
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'bookings/hoteldetail', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
            
            this.bookingDetaill = data.data.Hotel_booking;
            console.log(this.bookingDetaill);
          
//          let toast = this.toastCtrl.create({
//            message: data.msg,
//            duration: 3000,
//            position: 'middle'
//          });
//          toast.present();
          
       
        }else {
        
//          let toast = this.toastCtrl.create({
//            message: data.msg,
//            duration: 3000,
//            position: 'middle'
//          });
//          toast.present();
          
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
  
  viewFlightbooking(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      id: this.fid   
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'bookings/flightdetail', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
            
            this.fbookingDetaill = data.data.Booking;
            console.log(this.fbookingDetaill);
          
//          let toast = this.toastCtrl.create({
//            message: data.msg,
//            duration: 3000,
//            position: 'middle'
//          });
//          toast.present();
          
       
        }else {
        
//          let toast = this.toastCtrl.create({
//            message: data.msg,
//            duration: 3000,
//            position: 'middle'
//          });
//          toast.present();
          
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
