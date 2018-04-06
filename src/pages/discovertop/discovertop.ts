import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import { ViewactivitiesPage } from '../viewactivities/viewactivities';
import { DiscoverPage } from '../discover/discover';

/**
 * Generated class for the DiscovertopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discovertop',
  templateUrl: 'discovertop.html',
})
export class DiscovertopPage {
    
    dPipe = new DatePipe('en-US');
    optionss: RequestOptions;
    loc: any;
    id: any;
    minDate: any;
    activity_source: any;
    community: any;
    friends: any;
    activities: any;
    images: any;
    bit1: any = 0;
    bit2: any = 0;
    bit3: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController) {
    
      this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');    
      console.log(this.minDate);
      
      this.id = localStorage.getItem('ID');
      this.loc = this.navParams.get('location');
      console.log(this.loc);
      
      this.community = this.navParams.get('community');
      console.log(this.community);
            
      this.activitySearch();
      this.friendsitineraries();
      this.recentImages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscovertopPage');
  }
  
  back(){
      console.log(this.community);
      this.navCtrl.push(DiscoverPage,{
          fcommunity: this.community
      });
  }
  
  view(){
    let send = {
        activities: this.activities,
        location: this.loc,
        back: '3'
    }
  this.navCtrl.push(ViewactivitiesPage,{
      send: send
  });
}
  
  
activitySearch(){     
   
   var options = this.common.options;
    var data_form = {
      city: this.loc      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

      this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            
        this.activity_source = data.data[0].Airportcode.airportcode;
        console.log(this.activity_source);
        this.activitiesListing();
        
        }else if (data.status == 1){
        
        this.bit1 = 1;
        /*let toast = this.toastCtrl.create({
          message: "Enter the city name",
          duration: 3000,
          position: 'middle'
        });
        toast.present();*/
        
        }
      }, error => {
        
      });
}
  
  activitiesListing(){
    
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    let headers = new Headers();
    headers.append('apikey',  'f391cf76-be55-4');
    headers.append('mode',  'sandbox');
    headers.append('Content-Type',  'application/json');
    this.optionss= new RequestOptions({ headers: headers });

    var data_form = { 
         currency: 'USD',
         fromDate: this.minDate,
         toDate: this.minDate,
         searchFilterItems: [ { 
         type: 'destination', 
         value: this.activity_source
         } ] 
         }
    console.log(data_form);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/activities/v1/search', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.ProductErrors.ErrorCode == null) {
            
            this.bit1 = 0;
        
            this.activities = data.activities;
            console.log(this.activities);
            
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        } else if(data.ProductErrors.ErrorCode != null){
        
            this.bit1 = 1;
            
//          let toast = this.toastCtrl.create({
//            message: data.ProductErrors.Message,
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
  
  friendsitineraries(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      end_location: this.loc      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'trips/recentfrd_intinery', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);        
        
        if (data.status == 0) {
            
            this.bit2 = 0;
            
            this.friends = data.data;
            console.log(this.friends);
           
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          

        } else {
        
        this.bit2 = 1;

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
  
  recentImages(){
      
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {  
      user_id: this.id,     
      end_location: this.loc      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'trips/recent_images_of_location', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);        
        
        if (data.status == 0) {
            
            this.bit3 = 0;
            
            this.images = data.data;
            console.log(this.images); 
            
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          

        } else {
        
        this.bit3 = 1;

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
