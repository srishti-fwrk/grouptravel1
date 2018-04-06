import { Component } from '@angular/core';
import { NavController, Events, App, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { My_tripPage } from '../my_trip/my_trip';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { AddtripPage } from '../addtrip/addtrip';
import { RatingPage } from '../rating/rating';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  show: any;
  trips: any;
  image: any;
  id: string;
  public trip = 'upcoming';
  pasttrips: any;
  optionss: RequestOptions;
  choose: any;
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.viewTrip();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  constructor(public navCtrl: NavController,public common: CommonProvider,public http: Http,
  public events: Events, public app: App, public loadingCtrl: LoadingController,
  public toastCtrl: ToastController, public navParams: NavParams) {
  //this.trip = "upcoming";
  
  localStorage.setItem('bit','1');

  this.id = localStorage.getItem('ID');
  this.viewProfile();
  this.viewTrip();
  events.publish('user:login'); 
  
  this.choose = this.navParams.get('choose'); 
  if(this.choose == 2){
    this.trip = 'past'; 
    this.pastTrips(); 
  }  
  
  }
  opentripPage(){
    this.navCtrl.push(My_tripPage)
    //this.app.getRootNav().setRoot(My_tripPage);
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

  viewTrip(){
      
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
      this.http.post(this.common.base_url + 'trips/upcomingtrip', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          
          Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
          this.show = 1;
          this.trips = data.data;
          console.log(this.trips);           
          
        }else {
            Loading.dismiss();
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

  cLick(id){
    
    localStorage.setItem('TripID',id);
    this.app.getRootNav().setRoot(AddtripPage);

  }
  
  pastTrips(){
      
      console.log('past');
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
      this.http.post(this.common.base_url + 'trips/pasttrip', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          
          Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
          
          this.pasttrips = data.data;
          console.log(this.pasttrips);           
          
        }else {
            Loading.dismiss();
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
  
  openFeedback(trip){
      console.log(trip);
      this.navCtrl.push(RatingPage,{
          tripData: trip
      });
  }

}
