import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { AddtripPage } from '../addtrip/addtrip';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ImagePicker } from '@ionic-native/image-picker';

import { ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";
import { CalendarModule } from "ion2-calendar";

/**
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addevent',
  templateUrl: 'addevent.html',
  providers: [HttpModule, CommonProvider, Camera]
})
export class AddeventPage {

  event: any = {
    dateStarts: '',
    dateEnds: '' 
  }
  
  data: any = {
      flist: '',
      hlist: '',
      etype: '',
      dadd: '',
      notes: '',
      restaurant: '',
      activity: '',
      loc: ''
  }
  id: any;
  hotels = [];
  flights = [];
  op: any;
  tripid: any;
  title: any;
  type: any;
  attachments = [];
  images: any;
  sattachments = [];
  simage: any;
  eventdate: any = '';
  start: any;
  end: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public camera: Camera, public actionSheetCtrl: ActionSheetController,
    public imagePicker: ImagePicker, public modalCtrl: ModalController
    ) {
    
    this.id = localStorage.getItem('ID');
    this.tripid = localStorage.getItem('TripID');
    this.start = this.navParams.get('startd');
    this.end = this.navParams.get('endd');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }
  
  back(){
      this.navCtrl.push(AddtripPage);
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
          this.eventdate = date.string; 
          console.log(this.eventdate);
      }
      
    })
      
  }
  
  typeSelect(type){
      this.type = type;
      
      if(type == 'flight'){
          
          this.op = 1;
          this.flightListing();
          
      }else if(type == 'hotel'){
      
         this.data.loc = '';
         this.op = 2;
         this.hotelListing(); 
         
      }
      else if(type == 'activity'){
          
          this.data.loc = '';
          this.op = 3;   
          
      }else if(type == 'restaurant'){
      
          this.data.loc = '';
          this.op = 4;  
          
      }
  }
  
  hotelListing(){
      
    var options = this.common.options;
  
    var data_form = {
      user_id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'bookings/bookedhotel', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
         
            this.hotels = data.data;
            console.log(this.hotels);
            
        }else {
                        
        }
      }, error => {
              
      });
      
  }
  
  flightListing(){
    
    var options = this.common.options;
  
    var data_form = {
      user_id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'bookings/flighthotel', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
         
            this.flights = data.data;
            console.log(this.flights);
            
        }else {
                        
        }
      }, error => {
              
      });
      
  }
  
  flightSelect(f){
    
    let f1=f.split("_");
    this.title = f1[0];
    console.log(this.title);
    console.log(this.flights[f1[1]]);
    
    this.data = {
        dadd: this.flights[f1[1]].Booking.start_location,
        aadd: this.flights[f1[1]].Booking.end_location        
    } 
    
    this.event = {
        dateStarts: this.flights[f1[1]].Booking.departure_time,
        dateEnds: this.flights[f1[1]].Booking.arrival_time
    } 
  }
  
  hotelSelect(h){
      
    let f1=h.split("_");
    this.title = f1[0];
    console.log(this.title);
    console.log(this.hotels[f1[1]]);
    
    this.data = {
        loc: this.hotels[f1[1]].Hotel_booking.city+' '+this.hotels[f1[1]].Hotel_booking.country               
    } 
    
//    this.event = {
//        dateStarts: this.hotels[f1[1]].Hotel_booking.departure_time,
//        dateEnds: this.hotels[f1[1]].Hotel_booking.arrival_time
//    }
  }
  
  addAttachment(){
      
       let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          
          const options: CameraOptions = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
          }
          
          this.camera.getPicture(options).then((imageData) => {
              this.simage = 'data:image/jpeg;base64,' + imageData;
              this.sattachments.push(this.simage);
              console.log(this.sattachments);
              //alert(JSON.stringify(this.sattachments));
              this.attachments.push(imageData);
              //alert(JSON.stringify(this.attachments));
              console.log(this.attachments);
          
        });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          
          const options: CameraOptions = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
          }
          
          this.camera.getPicture(options).then((imageData) => {
            this.simage = 'data:image/jpeg;base64,' + imageData;
              this.sattachments.push(this.simage);
              console.log(this.sattachments);
              //alert(JSON.stringify(this.sattachments));
              this.attachments.push(imageData);
              //alert(JSON.stringify(this.attachments));
              console.log(this.attachments);
            
           
        });
        }
      }
      /*,{
        text: 'Add multiple images',
        handler: () => {
          let options = {
            maximumImagesCount: 5,
            outputType: 1,
            quality: 10      
          }
          this.attachments = [];
          this.imagePicker.getPictures(options)
            .then((results) => {

              for (var i = 0; i < results.length; i++) {

                this.attachments.push(results[i]);

              }
              alert(JSON.stringify(this.attachments));

              var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
              });

              var options = this.common.options;

              var data_form = {
                user_id: this.id,
                trip_id: this.tripid,
                //event_id: ,
                attechment: this.attachments
              }
              alert(JSON.stringify(data_form));
              console.log(data_form);

              var Serialized = this.common.serializeObj(data_form);
              console.log(Serialized);

              Loading.present().then(() => {
                this.http.post(this.common.base_url + 'bookings/attechment', Serialized, options)
                  .map(res => res.json())
                  .subscribe(data => {
                    Loading.dismiss();
                    alert(JSON.stringify(data));

                    console.log(data);
                    if (data.status == 0) {
                        //this.viewallImages();
                      this.images = data.image;
                      alert(JSON.stringify(this.images));

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
                    message: "Server not Working,Please Check your Internet Connection and try again!",
                    duration: 3000
                  });
                  toast.present();
                  });
              });


            }, (err) => {
             console.log(err) 
             });
              }  
      }*/
      ,
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
                 
        }
      }
      ]
    });
    actionsheet.present();  
      
  }
  
  adddEvent(hero){
      
      console.log(hero.value);
      console.log(hero.value.dateStarts);
      
      var options = this.common.options;
      
      if(this.op == 3){
          this.title = this.data.activity;
             
      }else if(this.op == 4){
          this.title = this.data.restaurant;
          
      }
      
      if (this.eventdate > this.end || this.eventdate < this.start){
          
                let toast = this.toastCtrl.create({
                  message: "Invalid Date",
                  duration: 3000
                });
                toast.present();
      }else{
      
      if(this.op == 1){
          
          var data_form = {
                user_id: this.id,
                trip_id: this.tripid,
                event_type: this.type,
                title: this.title,
                d_add: hero.value.dadd,
                a_add: hero.value.aadd,
                d_time: hero.value.dateEnds,
                a_time: hero.value.dateStarts,
                note: hero.value.notes,
                location: '',
                eventdate: this.eventdate,
                file: JSON.stringify(this.attachments)    
            }
            console.log(data_form);
            
            var Serialized = this.common.serializeObj(data_form);
            //alert(JSON.stringify(data_form));            
            
      }else if(this.op != 1){
      
        var data_formm = {
                user_id: this.id,
                trip_id: this.tripid,
                event_type: this.type,
                title: this.title,
                d_add: '',
                a_add: '',
                d_time: hero.value.dateEnds,
                a_time: hero.value.dateStarts,
                note: hero.value.notes,
                location: this.data.loc,
                file: JSON.stringify(this.attachments)        
            }
            console.log(data_formm);
            
            var Serialized = this.common.serializeObj(data_formm);
            //alert(JSON.stringify(data_formm));            
      }
      
      this.http.post(this.common.base_url + 'bookings/addevent', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        
        
        if (data.status == 0) {
            //alert(JSON.stringify(data));
            this.navCtrl.push(AddtripPage,{
                event: data.data.Event
            });
            
                let toast = this.toastCtrl.create({
                  message: "Event added Successfully to Itinerary",
                  duration: 3000
                });
                toast.present();
            
        }else {
                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000
                });
                toast.present();         
        }
      }, error => {
              let toast = this.toastCtrl.create({
                  message: "Check your Network Connection",
                  duration: 3000
                });
                toast.present();
      });
      }
      
  }

}
