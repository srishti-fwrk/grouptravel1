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
import { CalendarModule } from "ion2-calendar";
import { DatePipe } from '@angular/common';
import { TabsPage } from '../tabs/tabs';

import { ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";

declare var google;

@Component({
  selector: 'page-my_trip',
  templateUrl: 'my_trip.html',
  providers: [HttpModule,CommonProvider,Geolocation,NativeGeocoder]
})

export class My_tripPage implements OnInit{
    
    date: string;
  type: 'string';
    
  minDate: string;
  trip_id: any;
  image: any;
  d_add: any;
  //s_add: any;
  des_long: any;
  des_lat: any;
  editt: any;
  longitude1:any='';
  lattitude1:any='';
  public autocompleteItems;
  public autocomplete={
      query: '',
      location: ''
  };
  public acService:any;
  public placesService: any;
  map: any;
  bit: any;
  public lat:any;
  public long:any;
  public resp:any;
  public data: any = {
      audience: '',
      iaudience: ''
  };
  public user_id:any;
  public autocompleteItemss;
  public autocompleteItems2;
  public sautocomplete={
      squery: '',
      location: ''
  };
  public autocompleteItemss2;
  public sautocompletee={
      squeryy: '',
      location: ''
  };
  public autocompletee={
      queryy: '',
      location: ''
  };
  dPipe = new DatePipe('en-US');
  show: any; 
  aud: any = 0; iaud: any = 0;
  public buttonClicked: boolean = false;
  addanotherbit: any = 0;
  //s2_add: any;  s2_lat: any;  s2_long: any;
  d2_add: any;  d2_lat: any;  d2_long: any; 
  photoreference: any;
  des2: any = '';
  dstart: any; dend: any;  d2lat: any; d2lon: any;
    
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public alertCtrl: AlertController, public geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder, public common: CommonProvider,
    public toastCtrl: ToastController, public app: App, public modalCtrl: ModalController) {

      this.user_id = localStorage.getItem('ID');
      console.log(this.user_id);
      
      this.data.audience = false;
      this.data.iaudience = false;
      
      this.editt = this.navParams.get('edit');
      console.log(this.editt);      
      
      if(this.editt != undefined){
          
          this.bit = this.editt.bit;
          console.log(this.bit);
            
          this.trip_id = this.editt.tripid;
          console.log(this.trip_id);
          this.show = this.editt.send;
          console.log(this.show);
          this.autocomplete.query = this.show.start_location;         
          this.autocompletee.queryy = this.show.end_location;           
          this.event.dateStarts = this.show.trip_startdate; 
          this.event.dateEnds = this.show.trip_enddate;
          this.des2 = this.show.end_location1;
          
          if(this.des2){
             this.sautocompletee.squeryy = this.show.end_location1;
             this.event.source2dateStarts = this.show.trip_startdate1;
             this.event.destination2dateEnds = this.show.trip_enddate1;
             
             this.dstart = this.show.trip_startdate1;
             this.dend = this.show.trip_enddate1;
             this.d2lat = this.show.end_lat1;
             this.d2lon = this.show.end_long1; 
          }
          
          
          //this.data.audience = this.show.status;
          if(this.show.status == 0){
              this.data.audience = false;
          }else if(this.show.status == 1){
              this.data.audience = true;
          }
          console.log(this.data.audience);
          
          if(this.show.i_status == 0){
              this.data.iaudience = false;
          }else if(this.show.i_status == 1){
              this.data.iaudience = true;
          }
          console.log(this.data.iaudience);
          
          //this.s_add = this.show.start_location;
          this.d_add = this.show.end_location;
          
           this.lat = this.show.latitude;
           this.long = this.show.longitude;
           this.des_lat = this.show.end_lat;
           this.des_long = this.show.end_long;
          
      }
      
      this.viewProfile();      
      
      this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
      
  }
  
  anotherLocation(){
      this.buttonClicked = !this.buttonClicked;
      if(this.buttonClicked == true){
           this.addanotherbit = 1;
      }else{
          this.addanotherbit = 0;
      }
  }
    
  openCalendar(mssgg) {
      
      console.log(mssgg);
      if(mssgg == 'dateStarts'){
          
      const options: CalendarModalOptions = {
      title: 'Calendar',
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.event.dateStarts = date.string;
          console.log(this.event.dateStarts);
      }
      
    })
          
      }else if(mssgg == 'dateEnds'){
         
      const options: CalendarModalOptions = {
      title: 'Calendar',
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.event.dateEnds = date.string;
          console.log(this.event.dateEnds);
      }
      
    })
       
      }else if(mssgg == 'source2dateStarts'){
      
      const options: CalendarModalOptions = {
      title: 'Calendar',
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.event.source2dateStarts = date.string;
          console.log(this.event.source2dateStarts);
      }
      
    })
          
      }else if(mssgg == 'destination2dateEnds'){
          
      const options: CalendarModalOptions = {
      title: 'Calendar',
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.event.destination2dateEnds = date.string;
          console.log(this.event.destination2dateEnds);
      }
      
    })
      
      }
    
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

    notify(check){
        console.log(check);
        
        if(check == 'trip'){
            
            console.log(this.data.audience);
            if(this.data.audience == true){
                this.aud = 1;
            }else if(this.data.audience == false){
                this.aud = 0;
            }
            console.log('audience'+this.aud);            
            
        }else if(check == 'itinerary'){
            
            console.log(this.data.iaudience);
            if(this.data.iaudience == true){
                this.iaud = 1;
            }else if(this.data.iaudience == false){
                this.iaud = 0;
            }
            console.log('audience'+this.iaud);
        
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
      /*this.autocomplete = {
      query: '',
      location: ''
      };  
      this.autocompleteItemss = [];
      this.autocompletee = {
      queryy: '',
      location: ''
      };*/       
  }

  public event = {
      dateStarts: '',
      dateEnds: '',
      source2dateStarts: '',
      destination2dateEnds: ''
  }

 add(){
   localStorage.setItem('bit','2');
   console.log(localStorage.getItem('bit'));
    this.navCtrl.push(AddtripPage);
  }


  updateSearch(place) {
      
      console.log(place);
//      if(place == 'source'){
//          
//          console.log('modal > updateSearch');
//    if (this.autocomplete.query == '') {
//    this.autocompleteItems = [];
//    return;
//    }
//    let self = this; 
//    let config = { 
//    
//    input: this.autocomplete.query, 
//    componentRestrictions: {  } 
//    }
//    this.acService.getPlacePredictions(config, function (predictions, status) {
//    console.log('modal > getPlacePredictions > status > ', status);
//    self.autocompleteItems = []; 
//    console.log(status); 
//    
//    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
//    predictions.forEach(function (prediction) { 
//    
//    self.autocompleteItems.push(prediction);
//    console.log(self.autocompleteItems);
//    console.log();
//    
//    });
//              
//    }
//    });
//          
//      }else
       if(place == 'destination'){
      
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
    //console.log(self.autocompleteItemss[0].reference);
    
    });
              
    }
    });
    
      }else 
//      if(place == 'source2'){
//      
//      console.log('modal > updateSearch');
//    if (this.sautocomplete.squery == '') {
//    this.autocompleteItems2 = [];
//    return;
//    }
//    let self = this; 
//    let config = { 
//    
//    input: this.sautocomplete.squery, 
//    componentRestrictions: {  } 
//    }
//    this.acService.getPlacePredictions(config, function (predictions, status) {
//    console.log('modal > getPlacePredictions > status > ', status);
//    self.autocompleteItems2 = []; 
//    console.log(status); 
//    
//    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
//    predictions.forEach(function (prediction) { 
//    
//    self.autocompleteItems2.push(prediction);
//    console.log(self.autocompleteItems2);
//    console.log();
//    
//    });
//              
//    }
//    });
//          
//      }else 
      if(place == 'destination2'){
          
      console.log('modal > updateSearch');
    if (this.sautocompletee.squeryy == '') {
    this.autocompleteItemss2 = [];
    return;
    }
    let self = this; 
    let config = { 
    
    input: this.sautocompletee.squeryy, 
    componentRestrictions: {  } 
    }
    this.acService.getPlacePredictions(config, function (predictions, status) {
    console.log('modal > getPlacePredictions > status > ', status);
    self.autocompleteItemss2 = []; 
    console.log(status); 
    
    if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
    predictions.forEach(function (prediction) { 
    
    self.autocompleteItemss2.push(prediction);
    console.log(self.autocompleteItemss2);
    console.log();
    
    });
              
    }
    });
      
      }
    
    }

    chooseItem(item,place){
        
//        if(place == 'source'){
//            this.autocompleteItems = [];
//      this.autocomplete.query = item.description;
//    
//      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocomplete.query+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
//      this.http.get(url)
//              .map(res => res.json())
//              .subscribe(data => {
//                console.log(data);
//                
//                console.log(data.results[0].geometry.location);
//                console.log('addresss:'+data.results[0].formatted_address);
//                this.s_add = data.results[0].formatted_address;
//                this.lat = data.results[0].geometry.location.lat;
//                this.long = data.results[0].geometry.location.lng;
//                this.autocomplete.location = data.results[0].geometry.location;
//      })
//        }else 
        if(place == 'destination'){
            this.autocompleteItemss = [];
      this.autocompletee.queryy = item.description;
      this.photoreference = item.reference;
      console.log(this.photoreference);
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocompletee.queryy+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
      this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data);
                
                console.log(data.results[0].geometry.location);
                console.log('addresss:'+data.results[0].formatted_address);
                this.d_add = data.results[0].formatted_address;
                this.des_lat = data.results[0].geometry.location.lat;
                this.des_long = data.results[0].geometry.location.lng;
                this.autocompletee.location = data.results[0].geometry.location;
      })
        }else 
//        if(place == 'source2'){
//        
//        this.autocompleteItems2 = [];
//      this.sautocomplete.squery = item.description;
//    
//      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.sautocomplete.squery+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
//      this.http.get(url)
//              .map(res => res.json())
//              .subscribe(data => {
//                console.log(data);
//                
//                console.log(data.results[0].geometry.location);
//                console.log('addresss:'+data.results[0].formatted_address);
//                this.s2_add = data.results[0].formatted_address;
//                this.s2_lat = data.results[0].geometry.location.lat;
//                this.s2_long = data.results[0].geometry.location.lng;
//                this.sautocomplete.location = data.results[0].geometry.location;
//      })
//            
//        }else 
        if(place == 'destination2'){
        
        this.autocompleteItemss2 = [];
      this.sautocompletee.squeryy = item.description;
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.sautocompletee.squeryy+'&key=AIzaSyD59OsMu3HHnMIY2FmbLCoCguC7NujtiTs';
      this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data);
                
                console.log(data.results[0].geometry.location);
                console.log('addresss:'+data.results[0].formatted_address);
                this.d2_add = data.results[0].formatted_address;
                this.d2_lat = data.results[0].geometry.location.lat;
                this.d2_long = data.results[0].geometry.location.lng;
                this.sautocompletee.location = data.results[0].geometry.location;
      })
            
        }
      
  }


  search(searchform)
  {  
      if(this.event.dateStarts > this.event.dateEnds){
          
          let toast = this.toastCtrl.create({
            message: 'Invalid Trip Start date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
      }else if(this.event.dateStarts == '' && this.event.dateEnds == ''){
      
            let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start and End date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
      }else if(this.event.dateStarts == ''){
      
      let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
     }else if(this.event.dateEnds == ''){
     
     let toast = this.toastCtrl.create({
            message: 'Enter the Trip End date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        
     }else{
        
      console.log(this.common.options);
    var options = this.common.options;
    
    var data_form = {
      user_id: this.user_id,
      trip_startdate: this.event.dateStarts,
      trip_enddate: this.event.dateEnds,
      start_location: this.photoreference,
      end_location: this.d_add,
      //start_lat: this.lat,
      //start_long: this.long,
      end_lat: this.des_lat,
      end_long: this.des_long,      
      trip_startdate1: '',
      trip_enddate1: '',
      //start_location1: '',
      end_location1: '',
      //start_lat1: '',
      //start_long1: '',
      end_lat1: '',
      end_long1: '',     
      status: this.aud,
      i_status: 0
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
            message: "Your trip has been saved successfully",
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
  
  searchAdd(searchForm){
      
      if(this.event.dateStarts > this.event.dateEnds){
          
          let toast = this.toastCtrl.create({
            message: 'Invalid Trip Start date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
      }else if(this.event.dateStarts == '' && this.event.dateEnds == ''){
      
            let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start and End date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
      }else if(this.event.dateStarts == ''){
      
      let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
     }else if(this.event.dateEnds == ''){
     
     let toast = this.toastCtrl.create({
            message: 'Enter the Trip End date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        
     }else if(this.event.dateEnds > this.event.source2dateStarts){
         
        let toast = this.toastCtrl.create({
            message: 'Invalid dates',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
     
     }else if(this.event.source2dateStarts > this.event.destination2dateEnds){
         
        let toast = this.toastCtrl.create({
            message: 'Invalid dates',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
     
     }else if(this.event.source2dateStarts == ''){
      
      let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
     }else if(this.event.destination2dateEnds == ''){
     
     let toast = this.toastCtrl.create({
            message: 'Enter the Trip End date to Add Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        
     }else{
      
      
    console.log(this.common.options);
    var options = this.common.options;
    
    var data_form = {
      user_id: this.user_id,
      trip_startdate: this.event.dateStarts,
      trip_enddate: this.event.dateEnds,
      start_location: this.photoreference,
      end_location: this.d_add,
      //start_lat: this.lat,
      //start_long: this.long,
      end_lat: this.des_lat,
      end_long: this.des_long,      
      trip_startdate1: this.event.source2dateStarts,
      trip_enddate1: this.event.destination2dateEnds,
      //start_location1: this.s2_add,
      end_location1: this.d2_add,
      //start_lat1: this.s2_lat,
      //start_long1: this.s2_long,
      end_lat1: this.d2_lat,
      end_long1: this.d2_long,     
      status: this.aud,
      i_status: 0
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
            message: "Your trip has been saved successfully",
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
      
      if(this.event.dateStarts > this.event.dateEnds){
          
          let toast = this.toastCtrl.create({
            message: 'Invalid Trip Start date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
      }else if(this.event.dateStarts == '' && this.event.dateEnds == ''){
      
        let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start and End date to Edit Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
      }else if(this.event.dateStarts == ''){
      
        let toast = this.toastCtrl.create({
            message: 'Enter the Trip Start date to Edit Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
     }else if(this.event.dateEnds == ''){
     
        let toast = this.toastCtrl.create({
            message: 'Enter the Trip End date to Edit Trip',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
     }else{
    
     console.log(this.common.options);
    var options = this.common.options;

    var data_form = {     
      id: this.trip_id,
      trip_startdate: this.event.dateStarts,
      trip_enddate: this.event.dateEnds,
      start_location: this.photoreference,
      end_location: this.d_add,
      //start_lat: this.lat,
      //start_long: this.long,
      end_lat: this.des_lat,
      end_long: this.des_long,
      status: this.aud,
      i_status: this.iaud  
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
  
  editAdd(h){
     console.log(h); 
  }

}
