import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { AddtripPage } from '../addtrip/addtrip';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {googlemaps} from 'googlemaps';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProvider } from "../../providers/common/common";
import { HomePage } from '../home/home';
import { Calendar } from '@ionic-native/calendar';
import { DatePipe } from '@angular/common';
import { TabsPage } from '../tabs/tabs';

declare var google;

@Component({
  selector: 'page-my_trip',
  templateUrl: 'my_trip.html',
  providers: [HttpModule,CommonProvider,Geolocation,NativeGeocoder,Calendar]
})

export class My_tripPage implements OnInit{
  minDate: string;
  trip_id: any;
  image: any;
  d_add: any;
  s_add: any;
  des_long: any;
  des_lat: any;
  editt: any;

  longitude1:any='';
  lattitude1:any='';
  public autocompleteItems;
  public autocomplete;
  public acService:any;
  public placesService: any;
  map: any;
  bit: any;
  public lat:any;
  public long:any;
  public resp:any;
  public data: any = '';
  public user_id:any;
  public autocompleteItemss;
  public autocompletee;
  dPipe = new DatePipe('en-US');
  show: any;
  so: any; de: any; sd: any; dd: any;
    
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
    public alertCtrl: AlertController, public geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,public common: CommonProvider,
    public toastCtrl: ToastController,private calendar: Calendar, public app: App) {

      this.user_id = localStorage.getItem('ID');
      console.log(this.user_id);
      this.editt = this.navParams.get('edit');
      console.log(this.editt);
      
      
      if(this.editt != undefined){
          
          this.bit = this.editt.bit;
            console.log(this.bit);
            
          this.trip_id = this.editt.tripid;
          console.log(this.trip_id);
          this.show = this.editt.send;
          console.log(this.show);
          this.so = this.show.start_location;
          this.de = this.show.end_location;
          this.sd = this.show.trip_startdate;
          this.dd = this.show.trip_enddate;
          console.log(this.so);
      }
      
      this.viewProfile();      

      this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
  }
  
  back(){
      if(this.editt != undefined){
          if(this.bit == 1){
            this.navCtrl.push(AddtripPage);  
          }
      }else{
        this.navCtrl.push(TabsPage);  
      }
  }



  viewProfile(){

    var options = this.common.options;
  
    var data_form = {
      id: this.user_id
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

  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();        
      this.autocompleteItems = [];
      this.autocomplete = {
      query: ''
      };  
      this.autocompleteItemss = [];
      this.autocompletee = {
      queryy: ''
      };       
  }

  public event = {
  }

 add(){
   localStorage.setItem('bit','2');
   console.log(localStorage.getItem('bit'));
    this.navCtrl.push(AddtripPage);
  }


  updateSearch() {
    console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
    return;
    }
    let self = this; 
    let config = { 
    
    input: this.autocomplete.query, 
    componentRestrictions: {  } 
    }
    this.acService.getPlacePredictions(config, function (predictions, status) {
    console.log('modal > getPlacePredictions > status > ', status);
    self.autocompleteItems = []; 
    console.log(status); 
    
    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
    predictions.forEach(function (prediction) { 
    
    self.autocompleteItems.push(prediction);
    console.log(self.autocompleteItems);
    console.log();
    
    });
              
    }
    });
    }

    updateeSearch(){
      console.log('modal > updateSearch');
    if (this.autocompletee.queryy == '') {
    this.autocompleteItemss = [];
    return;
    }
    let self = this; 
    let config = { 
    
    input: this.autocompletee.queryy, 
    componentRestrictions: {  } 
    }
    this.acService.getPlacePredictions(config, function (predictions, status) {
    console.log('modal > getPlacePredictions > status > ', status);
    self.autocompleteItemss = []; 
    console.log(status); 
    
    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
    predictions.forEach(function (prediction) { 
    
    self.autocompleteItemss.push(prediction);
    console.log(self.autocompleteItemss);
    console.log();
    
    });
              
    }
    });
    }
    chooseeItem(itemm){
      this.autocompleteItemss = [];
      this.autocompletee.queryy = itemm.description;
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocompletee.queryy+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
      this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data);
                console.log('22222');
                console.log(data.results[0].geometry.location);
                console.log('addresss:'+data.results[0].formatted_address);
                this.d_add = data.results[0].formatted_address;
                this.des_lat = data.results[0].geometry.location.lat;
                this.des_long = data.results[0].geometry.location.lng;
                this.autocompletee.location = data.results[0].geometry.location;
      })
  }

    chooseItem(item){
      this.autocompleteItems = [];
      this.autocomplete.query = item.description;
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocomplete.query+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
      this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data);
                console.log('here');
                console.log(data.results[0].geometry.location);
                console.log('addresss:'+data.results[0].formatted_address);
                this.s_add = data.results[0].formatted_address;
                this.lat = data.results[0].geometry.location.lat;
                this.long = data.results[0].geometry.location.lng;
                this.autocomplete.location = data.results[0].geometry.location;
      })
  }


  search(searchform)
  {    
    console.log(this.lat+'-'+this.long);
     
     console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      user_id: this.user_id,
      trip_startdate: searchform.value.dateStarts,
      trip_enddate: searchform.value.dateEnds,
      start_location: this.s_add,
      end_location: this.d_add,
      start_lat: this.lat,
      start_long: this.long,
      end_lat: this.des_lat,
      end_long: this.des_long
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    console.log(data_form);

    this.http.post(this.common.base_url + 'trips/tripadd', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            console.log(data.data.Trip.id);
            this.trip_id = data.data.Trip.id;
            console.log(this.trip_id);
            console.log('true');
            localStorage.setItem('TripID',this.trip_id);
           
            /*this.navCtrl.push(AddtripPage,{
              trip_id: this.trip_id
            });*/
            this.app.getRootNav().setRoot(AddtripPage,{
              trip_id: this.trip_id
            });
            
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
        }
        else {
          console.log(data.msg);

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

  getCurrentLocation(){
    console.log('My current location');
  this.geolocation.getCurrentPosition().then((resp) => {
    console.log(resp);
   console.log(resp.coords.latitude);
   console.log(resp.coords.longitude);  
   this.lattitude1=resp.coords.latitude;
   this.longitude1=resp.coords.longitude;
   //localStorage.setItem('lat',this.lattitude1);
   //localStorage.setItem('long',this.longitude1);
  
       localStorage.setItem('location',this.autocomplete.query);
 
   
  }).catch((error) => {
    console.log('Error getting location', error);
  });
  }
  
  edit(heroForm){
    
      console.log(this.lat+'-'+this.long);
     
     console.log(this.common.options);
    var options = this.common.options;

    var data_form = {     
      id: this.trip_id,
      trip_startdate: heroForm.value.dateStarts,
      trip_enddate: heroForm.value.dateEnds,
      start_location: this.s_add,
      end_location: this.d_add,
      start_lat: this.lat,
      start_long: this.long,
      end_lat: this.des_lat,
      end_long: this.des_long  
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    console.log(data_form);

    this.http.post(this.common.base_url + 'trips/edittrip', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            console.log(data.data.Trip.id);
            this.trip_id = data.data.Trip.id;
            console.log(this.trip_id);
            console.log('true');
            localStorage.setItem('TripID',this.trip_id);
           
            /*this.navCtrl.push(AddtripPage,{
              trip_id: this.trip_id
            });*/
            this.app.getRootNav().setRoot(AddtripPage,{
              trip_id: this.trip_id
            });
            
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
        }
        else {
          console.log(data.msg);

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
