import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController, LoadingController, ViewController, ActionSheetController } from 'ionic-angular';
import { InvitePage } from '../invite/invite';
import { LocationPage } from '../location/location';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { GalleryPage } from '../gallery/gallery';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { DatePipe } from '@angular/common'
import { AddeventPage } from '../../pages/addevent/addevent';
import { OpenWeatherMapModule } from 'ionic-openweathermap';
import { My_tripPage } from '../my_trip/my_trip';
import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from "@ionic-native/camera";
/**
 * Generated class for the AddtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtrip',
  templateUrl: 'addtrip.html',
  providers: [HttpModule, CommonProvider, DatePipe, Camera]
})
export class AddtripPage {
  image: any;
  ndate: string;
  date: Date;
  enddate: any;
  startdate: any;
  destination: any;
  id: string;
  trip_id: any;
  day: any;
  night: any;
  current: any;
  send: any;
  tripimage: any;
  tripcover: any;
  attendees: any;
  status: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public events: Events,public http: Http, public common: CommonProvider,
  public toastCtrl: ToastController,public datepipe: DatePipe, 
  public loadingCtrl:LoadingController, public viewCtrl: ViewController,
  public actionSheetCtrl: ActionSheetController, public camera: Camera) {
    
    this.trip_id = localStorage.getItem('TripID');
    console.log(this.trip_id);
    this.id = localStorage.getItem('ID');
    this.viewProfile();
    this.viewSingleTrip();
    this.viewAttendees();
  }
  
  back(){
      this.navCtrl.push(TabsPage);
  }

  openNext(){
    this.navCtrl.push(AddeventPage);
  }
  
  edit(){
      let edit={
          bit: 1,
          tripid: this.trip_id,
          send: this.send
      }
      this.navCtrl.push(My_tripPage,{
          edit: edit
      });
  }
  
  editImage(){        
    
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
            this.tripimage = 'data:image/jpeg;base64,' + imageData;
            
            this.tripimage = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = ({
              trip_id: this.trip_id,
              img: this.tripimage              
            })

            var serialized_img = this.common.serializeObj(data_img);
            //alert(JSON.stringify(serialized_img));

            let options = this.common.options;

            var url: string = this.common.base_url + 'trips/tripimage';
            Loading.present().then(() => {
            this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              
              if (data.isSucess == true) {
              
              } else if (data.error == 0) {
                this.tripcover = data.img;
                localStorage.setItem("TripCover", this.tripimage);
                
                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000
                });
                toast.present();
              } else {
                
                let toast = this.toastCtrl.create({
                  message: "Trip Cover has not been uploaded",
                  duration: 3000
                });
                toast.present();
              }
            })
          }, (err) => {
            Loading.dismiss();
            
            let toast = this.toastCtrl.create({
              message: "Server not Working,Please Check your Internet Connection and try again!",
              duration: 3000
            });
            toast.present();
          });
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
            this.tripimage = 'data:image/jpeg;base64,' + imageData;
            
            this.tripimage = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = ({
              trip_id: this.trip_id,
              img: this.tripimage  
            })
            
            var serialized_img = this.common.serializeObj(data_img);
            //alert(JSON.stringify(serialized_img));

            let options = this.common.options;

            var url: string = this.common.base_url + 'trips/tripimage';
            Loading.present().then(() => {
            this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              
              if (data.isSucess == true) {
              } else if (data.error == 0) {
                this.tripcover = data.img;
                localStorage.setItem("TripCover", this.tripimage);
                
                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000
                });
                toast.present();
              } else {
                
                let toast = this.toastCtrl.create({
                  message: "Trip Cover has not been uploaded",
                  duration: 3000
                });
                toast.present();
              }

            })
          }, (error) => {
            Loading.dismiss();
            
            let toast = this.toastCtrl.create({
              message: "Server not Working,Please Check your Internet Connection and try again!",
              duration: 3000
            });
            toast.present();
          });
        });
        }
      },
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
  
  viewAttendees(){
      console.log('attendees');
   
    var options = this.common.options;
  
    var data_form = {
      trip_id: this.trip_id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'invites/attendese', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
           
           this.attendees = data.data; 
           console.log(this.attendees);           
          
        }else {
             this.status = data.status;         
        }
      }, error => {
              
      });
             
  }
  
  weather(){
      var options = this.common.options;
  //http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.destination+'&appid=7756a5add72128537d61c8fccb203817&units=metric
   //http://api.openweathermap.org/data/2.5/weather?q=Toronto,Canada&units=metric&lang=en&appid=e5f927c07f432e0ecace59d75c482af3
      this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.destination+'&appid=7756a5add72128537d61c8fccb203817&units=metric', options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.list.length > 0) {
         this.day = data.list[0].temp.day;
         this.night = data.list[0].temp.night;
          console.log('day='+this.day+'&night='+this.night);
        }else {
                        
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

  itinerary(){
    this.navCtrl.push(AddtripPage);
  }

  payments(){
    this.navCtrl.push(ContactPage);
  }

  chat(){
    this.navCtrl.push(AboutPage);
  }

  gallery(){
    this.navCtrl.push(GalleryPage);
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtripPage');
  }

  invite(){
    this.navCtrl.push(InvitePage);
  }

  location(){
    this.navCtrl.push(LocationPage);
  }

  viewSingleTrip() {

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      tripid: this.trip_id
   }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'trips/singletrip', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 0) {
            
          this.tripcover = data.data.Trip.image;
          console.log(this.tripcover);
          this.send = data.data.Trip;
          console.log(data.data.Trip.end_location);
          this.destination = data.data.Trip.end_location;
          localStorage.setItem('destination',this.destination);
          console.log(data.data.Trip.trip_startdate);
          this.startdate = data.data.Trip.trip_startdate;           
          console.log(data.data.Trip.trip_enddate);
          this.enddate = data.data.Trip.trip_enddate;
          this.weather();
         
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


}