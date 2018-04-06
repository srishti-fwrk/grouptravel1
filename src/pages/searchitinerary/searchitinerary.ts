import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {googlemaps} from 'googlemaps';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProvider } from "../../providers/common/common";
import { DiscoverPage } from '../discover/discover';

/**
 * Generated class for the SearchitineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchitinerary',
  templateUrl: 'searchitinerary.html',
  providers: [HttpModule,CommonProvider,Geolocation,NativeGeocoder]
})
export class SearchitineraryPage implements OnInit{
  pet: string = "location";
  
  public autocomplete;
  public acService: any;
  public autocompleteItems;
  locationn: any;
  chose: any;
  data: any = {
      searchh: '',
      people: ''
  }
  id: any;
  u_acc_loc: any;
  u_acc_name: any;
  users: any;
  
   @ViewChild('map') mapElement: ElementRef;
     
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public alertCtrl: AlertController, public geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,public common: CommonProvider,
    public toastCtrl: ToastController, public viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {
    
    this.chose = 'location';
    console.log('segment'+this.chose);
    this.id = localStorage.getItem('ID');
    
  }
  
  choose(val){
      this.pet = val.value;   
      console.log('pet'+this.pet);   
      console.log(val.value);
      this.chose = val.value;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchitineraryPage');
  }
  
  back(){
      this.navCtrl.push(DiscoverPage,{
          bit: 4
      });
  }
  
  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();        
      this.autocompleteItems = [];
      this.autocomplete = {
      query: ''
      };               
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
                this.locationn = data.results[0].formatted_address;
                console.log('location'+this.locationn);                
                //this.autocomplete.location = data.results[0].geometry.location;
                
                this.searchByLocation(this.locationn);                
      })
  }
  
  searchByLocation(loc){
     console.log(loc);
     
     var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    }); 
     
     var options = this.common.options;
  
    var data_form = {        
        end_location: loc          
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
   Loading.present().then(() => {
      this.http.post(this.common.base_url + 'trips/itinerary_acc_to_location', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        
        if (data.status == true) { 
            
            this.u_acc_loc = data.data;
            console.log(this.u_acc_loc);
            
            let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          
            
        }else {
        
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
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      }); 
      });   
  }
  
  userListing(keys){      
      
     console.log(keys);
     
     var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    }); 
      
      var options = this.common.options;
  
    var data_form = {        
        code: keys          
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   Loading.present().then(() => {
      this.http.post(this.common.base_url + 'trips/itinerary_acc_to_user', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == 0) { 
            
            this.users = data.data;
            console.log(this.users);
                        
            let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          
            
        }else {
        
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
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });
      }); 
  }
  
  userSearch(keys){
      
      this.users = [];
      this.data.people = keys;
      console.log(keys);
      
      var options = this.common.options;
  
    var data_form = {        
        code: keys          
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'trips/itinerary_acc_to_user', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) { 
            
            this.u_acc_name = data.data;          
            console.log(this.u_acc_name);
                        
            let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          
            
        }else {
        
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
