import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { FlightformPage } from '../flightform/flightform';
import { FlightPage } from '../flight/flight';

/**
 * Generated class for the FlightdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flightdetail',
  templateUrl: 'flightdetail.html',
  providers: [HttpModule, CommonProvider]
})
export class FlightdetailPage {
    
    optionss: RequestOptions;
    send: any;
    get: any;
    flight: any;
    item: any;
    trackid: any;
    flightdetail: any;
    price: any;
    bit: any;
    currency: any;
    request: any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public common: CommonProvider,
    public toastCtrl: ToastController,  
    public loadingCtrl:LoadingController, public viewCtrl: ViewController) {
      
      this.get = this.navParams.get('send');
      console.log(this.get);
      if(this.get){
       this.send = this.get.get;
       console.log(this.send);
       
       
       this.flight = this.get.flight;
       console.log(this.flight);
       this.item = this.get.item;
       this.trackid = this.get.trackid;
       this.flightdetail = this.get.fdetail;
      console.log(this.flightdetail);
      
      this.price = this.get.price;
      console.log(this.price);
      
      this.currency = this.get.currency;
      this.bit = this.get.bit;
      this.request = this.get.request;
         
      }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightdetailPage');
  }
  
  back(){
      if(this.bit == 0){
          this.navCtrl.push(FlightPage,{
        fdetail: this.flightdetail 
      });
      }else if(this.bit == 1){
          this.navCtrl.push(FlightPage,{
        f2detail: this.flightdetail 
      });
      }
      
  }
  
  getDetail(){
      let send = {
          flight: this.flight,
          item: this.item,
          trackid: this.trackid,
          get: this.get,
          price: this.price,
          request: this.request          
      }
//      this.navCtrl.push(FlightformPage,{
//          requestId: this.send.SellRequestId
//      });
      this.navCtrl.push(FlightformPage,{
          send: send
      });
      
  }
  
  
  /*flightDetail(detail){
        
        console.log(detail.value);        
      
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
        
    "sellRequestId": this.send.SellRequestId,
    "customer": {
        "PhoneNumber": "999999999",
        "CountryCode": "91",
        "Email": "youremail@mail.com",
        "CustomerDetails": [
            {
                "PassengerType": "ADT",
                "Title": "Mr",
                "FirstName": "John",
                "LastName": "Doe",
                "NationalityCountry": "US",
                "DOB": {
                    "Day": "12",
                    "Month": "09",
                    "Year": "1990"
                },
                "PassportNumber": "31195856",
                "IssueCountry": "US",
                "PassportExpiryDay": "23",
                "PassportExpiryMonth": "09",
                "PassportExpiryYear": "2021"
            }
        ]
    }
}

    console.log(data_form);    
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/price', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.Message == 'success') {
            
          
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
      
  }*/

}
