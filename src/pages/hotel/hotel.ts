import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { HoteldetailPage } from '../hoteldetail/hoteldetail';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {
    
    hdetail: any;
    rooms: any;
    data = {
        name: "",
        surname: "",
        email: "",
        countrycode: "",
        contact: "",
        age: "",
        title: "",
        pname: "",
        spname: "",
        type: "",
        adults : [],
        childs: [],
    };
    passengerDetails = [];    
    rooms_data=[];
    optionss: RequestOptions;
    sellrequestid: any;
    backk: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController) {
        
      this.backk = this.navParams.get('back');
        
      this.rooms = this.navParams.get('rooms');
      console.log(this.rooms);
        
      this.hdetail = this.navParams.get('hdetail');
      this.sellrequestid = this.hdetail.sellRequestId;
      
      let x = this.hdetail.detail.rooms;      
      console.log(x);
      
      for(let i in x){
          
         let passenger_details=[]
          let room_id = x[i].roomid;
          let adult_count=1;
          let child_count=1;
          
          for(let j=0; j<parseInt(x[i].adultCount); j++){
              passenger_details.push({
                  age: '',
                  title:'',
                  name: '',
                  surname: '',
                  type: 'AD',
                  count: adult_count++,
              })
          }
          for(let j=0; j<parseInt(x[i].childCount); j++){
             passenger_details.push({
                  age: '',
                  title:'',
                  name: '',
                  surname: '',
                  type: 'CH', 
                  count: child_count++,
              })
          }
          this.rooms_data.push({roomid: room_id, passengerDetails: passenger_details})
      }
      console.log(this.rooms_data);
 
  }
  
    back(){
        this.navCtrl.push(HoteldetailPage,{
            detailed: this.rooms,
            detail: this.backk
        });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad HotelPage');
    }
  
    typeSelect(type){
        console.log(type);
    }
  
    titleSelect(title){
        console.log(title);
        console.log(this.data.title);
    }
    
    bookHotel(lastForm){
       
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
     
         sellRequestId: this.sellrequestid, 
         holder: { 
                name: lastForm.value.name, 
                surname: lastForm.value.surname, 
                email: lastForm.value.email, 
                countryCode: lastForm.value.countrycode, 
                phoneNumber: lastForm.value.contact 
                },
         rooms: this.rooms_data
          
      
   }
    console.log(data_form);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/issue', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.status == 'CONFIRMED') {
           console.log(data);
           
           let booked = {
              reference: data.reference,
              sellRequestId: data.sellRequestId,
              bookingId: data.bookingId
           };
          console.log(booked); 

          let toast = this.toastCtrl.create({
            message: 'Booking done successfully',
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
