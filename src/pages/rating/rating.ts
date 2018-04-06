import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { HomePage } from '../home/home';

/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
  providers: [HttpModule, CommonProvider]
})
export class RatingPage {
    arry: any;
    
    trip: any;
    eventss: any;
    trip_id: any;
    id: any;
    data: any = {
        ratingg: []
    }
    dataform:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http, public common: CommonProvider,
  public toastCtrl: ToastController, public loadingCtrl:LoadingController,
  public viewCtrl: ViewController) {
      
      this.trip = this.navParams.get('tripData');
      console.log(this.trip);
      this.trip_id = this.trip.id;
      console.log(this.trip_id);
      this.id = localStorage.getItem('ID');
      
      this.viewItinerary();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingPage');
  }
  
  back(){
      this.navCtrl.push(HomePage,{
          choose: 2
      });
  }
  
  rate(j,eid,ratting){
      console.log(j);
      this.dataform.push({
                  user_id: this.id,
                  trip_id: this.trip_id,
                  event_id: eid,
                  rating: ratting                  
              });
              console.log(this.dataform);
     
  }
  
  skipp(){
      this.navCtrl.push(HomePage); 
  }
  
  subRate(){
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

  
    let headers = new Headers();
    headers.append('Content-Type',  'application/json');
    let options= new RequestOptions({ headers: headers });

    Loading.present().then(() => {
        this.http.post(this.common.base_url + 'galleries/additineraryy', this.dataform, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 0) { 

        } else {

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
  
    viewItinerary(){
     
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
    console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'trips/eventlist', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 0) { 
         
         this.eventss = data.data;
         console.log(this.eventss);

        } else {

          let toast = this.toastCtrl.create({
            message: "No events added",
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
