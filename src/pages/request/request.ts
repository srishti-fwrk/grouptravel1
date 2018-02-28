import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { AddtripPage } from '../addtrip/addtrip';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
    
    id: any;
    msg: any;
    trip_id: any;
    destination: any;
    startdate: any;
    enddate: any; 
    source: any;   
    tripcover: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider,public http: Http,
  public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  
  this.id = localStorage.getItem('ID');
  this.msg = this.navParams.get('message');
  if(this.msg){
      this.trip_id = this.msg.trip_id; 
  }       
  this.viewTrip();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }
  
  viewTrip(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      tripid: this.trip_id
   }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
   // alert(JSON.stringify(Serialized));
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'trips/singletrip', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        //alert(JSON.stringify(data));

        if (data.status == 0) { 
            
          this.tripcover = data.data.Trip.image;
          console.log(this.tripcover);  
          this.source = data.data.Trip.start_location;
          console.log(data.data.Trip.end_location);
          this.destination = data.data.Trip.end_location;
          console.log(data.data.Trip.trip_startdate);
          this.startdate = data.data.Trip.trip_startdate;           
          console.log(data.data.Trip.trip_enddate);
          this.enddate = data.data.Trip.trip_enddate;         
         
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
  
  rejectTrip(){
      
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
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    //alert(JSON.stringify(Serialized));
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'invites/reject', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 0) {
            
            this.navCtrl.push(TabsPage);            
         
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
  
  acceptTrip(){
      
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
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    //alert(JSON.stringify(Serialized));
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'invites/accpect', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 0) {
            
            localStorage.setItem('TripID',this.trip_id);
            this.navCtrl.push(AddtripPage);
            
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

}
