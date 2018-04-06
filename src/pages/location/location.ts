import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { SearchitineraryPage } from '../searchitinerary/searchitinerary';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { ViewactivitiesPage } from '../viewactivities/viewactivities';
import { AddtripPage } from '../addtrip/addtrip';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
    
    ldata: any;
    optionss: RequestOptions;
    a_currency: any;
    from: any;
    to : any;
    activity_source: any;
    activities: any;
    activityCover: any;
    title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController) {
      
      this.title = this.navParams.get('title');
      this.ldata = this.navParams.get('send');
      console.log(this.ldata);
      if(this.ldata){
          this.a_currency = this.ldata.currency;
          this.from = this.ldata.fromDate;
          this.to = this.ldata.toDate;
          let d = this.ldata.destination.split(",");
          this.title = d[0];
          this.cityCode(d);          
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  
  back(){
      this.navCtrl.push(AddtripPage);
  }
  
  cityCode(d){
      
    var options = this.common.options;
    var data_form = {
      city: d[0]      
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
        
        }
      }, error => {
        
      });
  }

  search(){
    this.navCtrl.push(SearchitineraryPage);
  }
  
  activitiesListing(){
    
    /* if(this.eventt.dmonth == '' && this.eventt.amonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select dates to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.eventt.dmonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Arrival date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.eventt.amonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Departure date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.eventt.dmonth > this.eventt.amonth){
        
          let toast = this.toastCtrl.create({
            message: 'Invalid dates',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
    }else if(this.a_currency == undefined && this.activity_source == undefined){
    
        let toast = this.toastCtrl.create({
            message: 'Fill City and country to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
    }else if(this.a_currency == undefined){
        
        let toast = this.toastCtrl.create({
            message: 'Select country to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
    }else if(this.activity_source == undefined){
    
        let toast = this.toastCtrl.create({
            message: 'Enter city to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
    }else{*/
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
         currency: this.a_currency,
         fromDate: this.from,
         toDate: this.to,
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
        
            this.activities = data.activities;
            console.log(this.activities);
            this.activityCover = this.activities[0].content.media.images["0"].urls["0"].resource;
            console.log(this.activityCover);
            
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        } else if(data.ProductErrors.ErrorCode != null){

          let toast = this.toastCtrl.create({
            message: data.ProductErrors.Message,
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
   // }
  
}

view(){
    
    let send = {
      activities: this.activities,
      back: '2',
      title: this.title,
      front: this.ldata
    }
    this.navCtrl.push(ViewactivitiesPage,{
      send: send
  });
}

}
