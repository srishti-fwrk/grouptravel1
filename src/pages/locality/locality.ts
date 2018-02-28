import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {googlemaps} from 'googlemaps';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProvider } from "../../providers/common/common";
import { EditphotoPage } from '../editphoto/editphoto';

/**
 * Generated class for the LocalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locality',
  templateUrl: 'locality.html',
  providers: [HttpModule,CommonProvider,Geolocation,NativeGeocoder]
})
export class LocalityPage implements OnInit{
    
    get: any;
    public autocomplete;
    public acService: any;
    public autocompleteItems;    
    trip_id: any;
    location: any;

    @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public alertCtrl: AlertController, public geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,public common: CommonProvider,
    public toastCtrl: ToastController, public viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {
      
      this.get = this.navParams.get('locationpage');
      console.log(this.get);      
      this.trip_id = localStorage.getItem('TripID');
  }
  
  back(){
 	//this.navCtrl.push(EditphotoPage);
        this.viewCtrl.dismiss({});
 }
 
 backData(){
    
    // console.log(location);
     /*this.navCtrl.push(EditphotoPage,{
         location: location
     });*/
     
     if(this.location == undefined){
        let toast = this.toastCtrl.create({
            message: "Select any Location",
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
    var options = this.common.options;

    var data_form = {
      image_id: this.get.Gallery.id,
      trip_id: this.trip_id,
      location: this.location
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'galleries/gallerylocation', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == 0) {
                        
            this.navCtrl.push(EditphotoPage,{                
                location: data.data[0].Gallery.location,
                send: data.data[0]
            });
          
          /*let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();*/        

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

//  dismiss(){
//    this.viewCtrl.dismiss({});
//  }
  
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
                this.location = data.results[0].formatted_address;
               // this.lat = data.results[0].geometry.location.lat;
               // this.long = data.results[0].geometry.location.lng;
                this.autocomplete.location = data.results[0].geometry.location;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalityPage');
  }

}
