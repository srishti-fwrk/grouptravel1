import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { GaldetailPage } from '../galdetail/galdetail';
import { ViewactivitiesPage } from '../viewactivities/viewactivities';
import { SearchPage } from '../search/search';
import { FlightPage } from '../flight/flight';
import { MytripPage } from '../mytrip/mytrip';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import {googlemaps} from 'googlemaps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { SearchitineraryPage } from '../searchitinerary/searchitinerary';
import { DiscovertopPage } from '../discovertop/discovertop';

import { ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";
import { CalendarModule } from "ion2-calendar";

/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
  providers: [Geolocation,NativeGeocoder]
})
export class DiscoverPage implements OnInit{
    
    date: string;
  type: 'string';
    
  destination : any;  
  source : any;
  flightdetail: any;
  f_destination: any;  
  f_source: any;  
  countries= [];  
  a_currency: any;  
  source_code: any;
  destination_code: any;  
  currency: any;
  country: any;
  to: any;
  from: any;
  city: any;
  hoteldetail: Promise<any>;
  s_add: any;
  des_long: any;
  des_lat: any;
  d_add: any;
  activities: any;
  community: any;
  fcommunity = [];

  ngOnInit(){

    /*this.acService = new google.maps.places.AutocompleteService();        
      this.autocompleteItems = [];
      this.autocomplete = {
      query: ''
      };  
      this.autocompleteItemss = [];
      this.autocompletee = {
      queryy: ''
      };*/
    
  }

  longitude1:any='';
  lattitude1:any='';
  public autocompleteItems;
  public autocomplete;
  public acService:any;
  public placesService: any;
  map: any;
  public lat:any;
  public long:any;
  public resp:any;
  public data: any = {
    query: '',
    queryy: '',
    city: '',
    country: ''    
  };
  public user_id:any;
  public autocompleteItemss;
  public autocompletee;

  rooms: any;
  minDate: any;
  image: any;
    id: string;
    pet: string= "hotels";
    bit: any= 1;
    trip: any= 2;
    ra: any='true';
    
    optionss: RequestOptions;
     dPipe = new DatePipe('en-US');
     
     loop = [];
     i: any = 1;
     j: any = 0;
     children = [];
     occupancies = [];
     bool: any;
     activity_source: any;
     dmonth: any = '';
     amonth: any = '';
     
//     public eventt = {
//        dmonth: '',
//        amonth: '',
//        }

     @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController, public modalCtrl: ModalController) {
    
    this.id = localStorage.getItem('ID');
    this.viewProfile();
    this.countrylist();    
  
    this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');    
    console.log(this.minDate);
    
    this.activities = this.navParams.get('activities');
    console.log('activities '+this.activities);
    if(this.activities){
        this.pet = 'activitiess';
        console.log(this.pet);
    }
    
    this.fcommunity = this.navParams.get('fcommunity');
    console.log('fcommunity '+this.fcommunity);
    if(this.fcommunity){
        this.pet = 'travel';
        console.log(this.pet);
    }
  }
  
  ionViewWillEnter(){
     this.bool = 'true';
    console.log(this.bool); 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverPage');    
  }  
  
  roundt(){
    //alert('roundtrip');
      this.trip = 1;
      console.log(this.trip);  
  }
  
  onet(){
   //alert('oneway');
      this.trip = 2;
      console.log(this.trip);   
  }  
  
  openCalendarr(){
      const options: CalendarModalOptions = {
      title: 'Calendar',
    };
   let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.dmonth = date.string;           
          console.log(this.dmonth);
      }
      
    })
  }
  
  openCalendar(){
      
       const options: CalendarModalOptions = {
      title: 'Calendar',
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.amonth = date.string; 
          console.log(this.amonth);
      }
      
    })
      
  }
  
   flights(){
  console.log('flights');
          this.bit = 1;
          this.bool = 'true';
          this.trip = 2;
  }
  
  hotels(){
  console.log('hotels');
          this.bit = 2; 
          this.trip = 1;
  }

  openItinerary(){
      this.navCtrl.push(SearchitineraryPage);
  }
  
  add_a(index){
      console.log(index);      
      if(this.roomselected[index].NoOfAdults < 4){
      this.roomselected[index].NoOfAdults=parseInt(this.roomselected[index].NoOfAdults)+1;    
      }      
      console.log(this.roomselected);   
  }
  
  minus_a(index){
      console.log(index);
      if(this.roomselected[index].NoOfAdults > 1){
          this.roomselected[index].NoOfAdults=parseInt(this.roomselected[index].NoOfAdults)-1;
      }      
      console.log(this.roomselected);
  }
  
  add_c(index){
      console.log(index);
      if(this.roomselected[index].child < 2){
          this.roomselected[index].child=parseInt(this.roomselected[index].child)+1;          
          this.roomselected[index].ChildrenAges.push(12);
      }
    console.log(this.roomselected);
  }
  
  minus_c(index){
      console.log(index)
      if(this.roomselected[index].child > 0){
          this.roomselected[index].child=parseInt(this.roomselected[index].child)-1;
          this.roomselected[index].ChildrenAges.splice(1,1);
      }      
      if(this.roomselected[index].child == 0){
          this.roomselected[index].ChildrenAges = [];
      }      
      console.log(this.roomselected);  
  }


public roomselected=[];

  roomSelect(e){    
   
      this.roomselected=[]
      for(let i=0; i<parseInt(e); i++){
         this.roomselected.push({NoOfAdults:1, child:0, ChildrenAges:[]}) 
      }       
   this.rooms = e;
   console.log(this.rooms);
   
  }

  getData(keys){    
            
      console.log(keys);
      
    var options = this.common.options;
    var data_form = {
      code: keys      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    this.http.post(this.common.base_url + 'users/countrysearch', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
        this.country = data.data[0].Countrycode.iso_code_2;
        console.log(this.country);
        }else {
          
        }
      }, error => {
        
      });

      this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
        this.currency = data.data[0].Currencycode.currency_code;
        console.log(this.currency);
        }else {
        }
      }, error => {
        
      });
   
  }

  hotelView(heroForm){
      
      if(this.dmonth == '' && this.amonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select dates to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.dmonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Arrival date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.amonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Departure date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.dmonth > this.amonth){
        
          let toast = this.toastCtrl.create({
            message: 'Invalid dates',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
    }else{
     console.log(heroForm.value.city);
    console.log(heroForm.value.country);
    this.from=this.dmonth;
    this.to=this.amonth;  
    

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
     City: heroForm.value.city,
     Country: heroForm.value.country,
     "Latitude": "",
     "Longitude": "",
     FromDate: this.dmonth, 
     ToDate: this.amonth, 
     ClientNationality: this.country, 
     Currency: this.currency, 
     Occupancies: this.roomselected
      
   }
    console.log(data_form);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/search', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.ErrorMessage == null) {
           console.log(data);
           this.hoteldetail = data.hotelData;
           this.city = data.City;
           console.log(this.hoteldetail);
           console.log(this.city);
           
           let detail ={
            hotels: this.hoteldetail,
            city: this.city,
            from: this.from,
            to: this.to,
            currency: this.currency,
            nationality: this.country,
            occupancies: this.roomselected,
            dcity: heroForm.value.city,
            dcountry: heroForm.value.country
           };

           this.navCtrl.push(SearchPage,{
            detail: detail
           });

          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        } else {

          let toast = this.toastCtrl.create({
            message: data.ErrorMessage,
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
  
  flightView(heroForm){
      
      console.log('flightView');
      
      if(this.trip == '1'){
          console.log('round');
          
          if(this.dmonth > this.amonth){
        
          let toast = this.toastCtrl.create({
            message: 'Invalid dates',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
    }else if(this.dmonth == '' && this.amonth == ''){
        
        let toast = this.toastCtrl.create({
            message: 'Select dates to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.dmonth == ''){
        
        let toast = this.toastCtrl.create({
            message: 'Select Arrival date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.amonth == ''){
        
            let toast = this.toastCtrl.create({
                message: 'Select Departure date',
                duration: 3000,
                position: 'middle'
              });
              toast.present();
    
    }else{
          
          var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
          });
    
    let ddatee=this.dmonth.split("-");
    let format=ddatee[1]+"/"+ddatee[2]+"/"+ddatee[0];
    
    let ddateee=this.amonth.split("-");
    let formatt=ddateee[1]+"/"+ddateee[2]+"/"+ddateee[0];
    
    let headers = new Headers();
    headers.append('apikey',  'f391cf76-be55-4');
    headers.append('mode',  'sandbox');
    headers.append('Content-Type',  'application/json');
    this.optionss= new RequestOptions({ headers: headers });

    var data_form = {
        TripType: "R", 
        NoOfAdults: 1,         
        ClassType: "Economy",
         OriginDestination: [ {
//          Origin: this.source_code, 
//          Destination: this.destination_code,
             Origin: 'BOM', 
          Destination: 'JFK', 
          TravelDate: format 
          }, 
         {
//          Origin: this.destination_code, 
//          Destination: this.source_code,
             Origin: 'JFK', 
          Destination: 'BOM', 
          TravelDate: formatt 
          } ], 
//        Currency: this.a_currency
          Currency: 'USD' 
      
   }
    console.log(data_form);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.OneWayAvailabilityResponse.TrackId != null) {
           console.log(data);        
    
            this.flightdetail = data.OneWayAvailabilityResponse.ItinearyDetails[0].Items;
            console.log(this.flightdetail);   
            this.f_source = this.flightdetail[0].FlightDetails[0].OriginAirportCity;
            console.log(this.f_source);
//            this.f_destination = this.flightdetail[0].FlightDetails[1].DestinationAirportCity;
//            console.log(this.f_destination);
          
         let f2detail ={
                flights: this.flightdetail,
                source: this.f_source,
                //destination: this.destination_code,
                destination: 'JFK',
                track_id: data.OneWayAvailabilityResponse.TrackId
            };      
           console.log(f2detail);    
           
           this.navCtrl.push(FlightPage,{
               f2detail: f2detail
           });

          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        } else if(data.ProductErrors.ErrorCode != 'null'){

          let toast = this.toastCtrl.create({
            message: data.ProductErrors.Message,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        }else if(data.ProductErrors.ErrorCode == 'null'){

          let toast = this.toastCtrl.create({
            message: "Search only international flights",
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        }else if(data.ExpMsg == null){

          let toast = this.toastCtrl.create({
            message: "Search only international flights",
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
          
      }else if(this.trip == '2'){
      console.log('oneway');
      
      if(this.dmonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Arrival date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else{
      
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
    
    let ddatee=this.dmonth.split("-");
    let format=ddatee[1]+"/"+ddatee[2]+"/"+ddatee[0];

    var data_formm = {
      TripType: "O",
      NoOfAdults: 1,      
      ClassType: "Economy", 
      OriginDestination: [ { Origin: this.source_code, Destination: this.destination_code, TravelDate: format} ], 
      Currency: this.a_currency 
      
   }
    console.log(data_formm);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search', data_formm, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
//data.ProductErrors.ErrorCode == 'null' && 
        if (data.OneWayAvailabilityResponse.TrackId != null) {
           console.log('true');
           
           this.flightdetail = data.OneWayAvailabilityResponse.ItinearyDetails[0].Items;
           
           this.f_source = this.flightdetail[0].FlightDetails[0].OriginAirportCity;
           this.f_destination = this.flightdetail[0].FlightDetails[0].DestinationAirportCity;
           
           console.log(this.flightdetail);           
           console.log(this.f_source);
           console.log(this.f_destination);
           console.log(data.OneWayAvailabilityResponse.TrackId);
           
           let fdetail ={
            flights: this.flightdetail,
            source: this.f_source,
            destination: this.f_destination,
            track_id: data.OneWayAvailabilityResponse.TrackId
           };      
           console.log(fdetail);    
           
           this.navCtrl.push(FlightPage,{
               fdetail: fdetail
           });

          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        } else if(data.ProductErrors.ErrorCode != 'null'){
console.log('else');
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
       }   
      }
    /*console.log(heroForm.value.city);
    console.log(heroForm.value.country);
    this.from=heroForm.value.dmonth;
    this.to=heroForm.value.amonth;*/

      
  }
  
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  
  scountrySelect(s_c){
  console.log(s_c);    
  }
  
  dcountrySelect(d_c){
      console.log(d_c);
      
      var options = this.common.options;
    var data_form = {
      code: d_c      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

      this.http.post(this.common.base_url + 'users/currencycode', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
        this.a_currency = data.data[0].Currencycode.currency_code;
        console.log(this.a_currency);
        }else {
        }
      }, error => {
        
      });
  }
  
  countrylist(){
      var options = this.common.options;
      
      this.http.get(this.common.base_url + 'users/country', options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
        this.countries = data.data;
        console.log(this.countries);
        }else if (data.status == 1){
        
        let toast = this.toastCtrl.create({
          message: "Enter the city name",
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        
        }
      }, error => {
        
      });  
  }

  updateSearch(source){
   console.log(source);     
   
   var options = this.common.options;
    var data_form = {
      city: source      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

      this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            
        this.source_code = data.data[0].Airportcode.airportcode;
        console.log(this.source_code);
        
        }else if (data.status == 1){
        
        let toast = this.toastCtrl.create({
          message: "Enter the city name",
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        
        }
      }, error => {
        
      });
    }

  updateeSearch(destination){
   console.log(destination);
   
      var options = this.common.options;
      
      var data_formm = {
      city: destination      
    }
    console.log(data_formm);

    var Serialized = this.common.serializeObj(data_formm);
    console.log(Serialized);

      this.http.post(this.common.base_url + 'users/airportcode', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            
        this.destination_code = data.data[0].Airportcode.airportcode;
        console.log(this.destination_code);
        
        }else if (data.status == 1){
        
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

  galdetail(){
    this.navCtrl.push(GaldetailPage);
  }

view(){
    let send = {
        activities: this.activities,
        back: '1'
    }
  this.navCtrl.push(ViewactivitiesPage,{
      send: send
  });
}

search(){
  this.navCtrl.push(SearchPage);
}

mytrip(uid){
  this.navCtrl.push(MytripPage,{
      userid: uid,
      community: this.fcommunity
  });
}

activitiesListing(){
    
     if(this.dmonth == '' && this.amonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select dates to search',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.amonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Arrival date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.dmonth == ''){
        
    let toast = this.toastCtrl.create({
            message: 'Select Departure date',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
    
    }else if(this.amonth > this.dmonth){
        
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
          
    }else{
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
         fromDate: this.amonth,
         toDate: this.dmonth,
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
    }
    
   
    
}

activitySearch(loc){
    console.log(loc);     
   
   var options = this.common.options;
    var data_form = {
      city: loc      
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
        
        }else if (data.status == 1){
        
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

viewNewsfeed(){
    
    this.fcommunity = [];
  
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
    this.http.post(this.common.base_url + 'trips/newsfeed', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);        
        
        if (data.status == 0) {
            
            this.community = data.data;
            console.log(this.community);
            
            for(let i = 0; i < this.community.length ; i++){
               if(this.community[i].User.Trips.length > 0){
                   for(let j = 0; j < this.community[i].User.Trips.length ; j++){
                     if(this.community[i].User.Trips[j].Gallery.length > 0){
                         this.fcommunity.push(this.community[i]);  
                     }  
                   }
               } 
            }
            
            console.log(this.fcommunity);
          
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

locationActivity(location){
    console.log(location);
    
    this.navCtrl.push(DiscovertopPage,{
        location: location,
        community: this.fcommunity
    });
    
}

viewImagedetail(gal){
    console.log(gal);
    this.navCtrl.push(GaldetailPage,{
          dis: gal,
          community: this.fcommunity
      });
}

}
