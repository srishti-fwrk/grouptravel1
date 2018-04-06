import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';

import { ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";
import { CalendarModule } from "ion2-calendar";
import { DatePipe } from '@angular/common';
import { FlightdetailPage } from '../flightdetail/flightdetail';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ReviewbookingPage } from '../reviewbooking/reviewbooking';
import { ThankyouPage } from '../thankyou/thankyou';

/**
 * Generated class for the FlightformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flightform',
  templateUrl: 'flightform.html',
  providers: [InAppBrowser]
})
export class FlightformPage {
    
    optionss: RequestOptions;
    data: any = {
        dob: '',
        passdob: '',
        ccode: '',
        phone: '',
        mail: '',
        ptype: '',
        title: '',
        fname: '',
        lname: '',
        scountry: '',
        pno: '',
        pcountry: ''        
    };
    countries = [];
    nationalityCountry: any;
    passissuecountry: any;
    requestId: any;
    get: any;
    flight: any;
    item: any;
    trackid: any;
    minDate: any;
    send: any;
    price: any;
    pdata: any;
    dPipe = new DatePipe('en-US');
    codes = [];
    detail: any;
    bstatus: any;
    link: any;
    fid: any;
    request: any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public common: CommonProvider, private iab: InAppBrowser,
    public toastCtrl: ToastController, public modalCtrl: ModalController, 
    public loadingCtrl:LoadingController, public viewCtrl: ViewController) {
    
    this.countrylist();
    this.minDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');    
    console.log(this.minDate);
    this.get = this.navParams.get('send');
    if(this.get){
       this.flight = this.get.flight;
       console.log(this.flight);
       this.item = this.get.item;
       this.trackid = this.get.trackid;
       this.send = this.get.get;
       this.price = this.get.price;
       this.request = this.get.request;
        
    }
    /*this.requestId = this.navParams.get('requestId');
    console.log(this.requestId);*/
    this.phonecodeList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightformPage');
  }
  
  back(){
      this.navCtrl.push(FlightdetailPage,{
          send: this.send
      });
  }
  
  phonecodeList(){
      var options = this.common.options;
      
      this.http.get(this.common.base_url + 'users/phone_code', options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            
        this.codes = data.data;
        console.log(this.codes);
        
        }else if (data.status == 1){
        
        }
      }, error => {
        
      });    
    }
    
    codeSelect(code){
       console.log(code); 
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
  
  dcountrySelect(type,keys){
      console.log(keys);
      
      if(type == 'Nationality'){
          
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
        this.nationalityCountry = data.data[0].Countrycode.iso_code_2;
        console.log(this.nationalityCountry);
        }else {
          
        }
      }, error => {
        
      });   
          
      }else if(type == 'passissuecountry'){
      
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
        this.passissuecountry = data.data[0].Countrycode.iso_code_2;
        console.log(this.passissuecountry);
        }else {
          
        }
      }, error => {
        
      });
          
      }      
    
  }
  
   openCalendar(mssgg) {
       
      console.log(mssgg);
      if(mssgg == 'dob'){
          
      const options: CalendarModalOptions = {
      title: 'Calendar',
      from: new Date(1930),
      to: 0      
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.data.dob = date.string;           
          console.log(this.data.dob);
      }
      
    })
          
      }else if(mssgg == 'passdob'){
         
      const options: CalendarModalOptions = {
      title: 'Calendar',
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });
 
    myCalendar.present();
 
    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      if(date){
          this.data.passdob = date.string; 
          console.log(this.data.passdob);
      }
      
    })
       
      }
    
  }
  
  arival(detail){
      this.detail = detail;
      
        let userid = localStorage.getItem('ID');
        let pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd'); 
        
        this.pdata = {
            type: 'Flight',
            user_id: userid,
//            price: this.price,
            price: '2',
            from: this.flight.FlightDetails[0].DepartureDateTime,
            to: this.flight.FlightDetails[0].ArrivalDateTime,
            created: pDate,
            flight: this.flight.FlightDetails[0].FlightID,            
            origin: this.flight.FlightDetails[0].OriginAirportCity,
            destination: this.flight.FlightDetails[0].DestinationAirportCity,
            city: this.flight.FlightDetails[0].OriginAirportCity,
            country: this.flight.FlightDetails[0].OriginAirportCountry,
            sourcecode: this.flight.FlightDetails[0].Origin,
            destinationcode: this.flight.FlightDetails[0].Destination
        }
        
        console.log(this.pdata);
      
     let options={};       let target="_blank";
     const browser = this.iab.create('http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data='+encodeURIComponent(JSON.stringify(this.pdata)),target,options);
      
     browser.on('loadstart').subscribe((e) => {
         
     var redirect_uri = e.url.split('cess');
          
     console.log(redirect_uri);
         
     console.log(redirect_uri[0]);
           if (redirect_uri[0] == 'http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/suc') {
              //alert('close');
               browser.close();
//               this.navCtrl.push(HotelPage)
               this.book();
            
             }
         }, err => {
          //alert(JSON.stringify(err));
         });
      
  }
  
  book(){
      console.log('book');
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    /*let headers = new Headers();
    headers.append('apikey',  'f391cf76-be55-4');
    headers.append('mode',  'sandbox');
    headers.append('Content-Type',  'application/json');
    this.optionss= new RequestOptions({ headers: headers });

    var data_form = { 
        TrackId: this.trackid,
         ItinearyDetails: { 
            Segments: [ { 
                ValidatingCarrier: this.flight.ValidatingCarrier,
                Price: this.flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount, 
                item: this.item                 
            } 
            ] 
            } 
        }
     
    console.log(data_form);
    
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/look', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {        
        console.log(data);

        if (data.Message == 'success') {
            
          let sellrequest = data.SellRequestId;*/
          
          console.log(this.detail.value);
        
        let ddatee=this.data.passdob.split("-");       

        let ddateee=this.data.dob.split("-");
    
            let headers = new Headers();
            headers.append('apikey',  'f391cf76-be55-4');
            headers.append('mode',  'sandbox');
            headers.append('Content-Type',  'application/json');
            this.optionss= new RequestOptions({ headers: headers });

            var data_form = { 
                sellRequestId: this.request,
                 customer: {
                     PhoneNumber: this.detail.value.phone,
                     CountryCode: this.detail.value.ccode,
                     Email: this.detail.value.mail,
                     CustomerDetails:
                        [ {
                          PassengerType: this.detail.value.ptype,                   
                          Title: this.detail.value.title,
                          FirstName: this.detail.value.fname,
                          LastName: this.detail.value.lname,
                          NationalityCountry: this.nationalityCountry,
                          DOB: { Day: ddateee[2], Month: ddateee[1], Year: ddateee[0] },
                          PassportNumber: this.detail.value.pno,
                          IssueCountry: this.passissuecountry,
                          PassportExpiryDay: ddatee[2],
                          PassportExpiryMonth: ddatee[1],
                          PassportExpiryYear: ddatee[0] 
                        } ] 
                  }
            }
          
            console.log(data_form); 
            Loading.present().then(() => {
            this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/price', data_form, this.optionss)
              .map(res => res.json())
              .subscribe(data => {
                Loading.dismiss(); 
                console.log(data);

                //if (data.Message == 'success') {
                if (data.IsTicketSuccess == true) {
                    
                    this.bstatus = data.IsTicketSuccess;
                    this.link = data.ReferralLink;
                    //alert('success');
                    this.dbFlight();

                  let toast = this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();

                } else if (data.IsTicketSuccess == false){

                  let toast = this.toastCtrl.create({
                    message: data.Message,
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
         
//        } else {
//         
//        }
//      }, error => {
//        
//    });
    });
  }
  
  dbFlight(){
    console.log('dbFlight');
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
        
        var options = this.common.options;
    
        let userid = localStorage.getItem('ID');
        let pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        
    let data_form = { 
            user_id: userid,
            start_date: this.flight.FlightDetails[0].DepartureDateTime,
            last_date: this.flight.FlightDetails[0].ArrivalDateTime,
            flight: this.flight.FlightDetails[0].FlightID,
            hotel: 'test',
            start_location: this.flight.FlightDetails[0].OriginAirportCity,
            end_location: this.flight.FlightDetails[0].DestinationAirportCity,
            airline: this.flight.FlightDetails[0].AirlineName,
            status: this.bstatus,
            booking_id: this.link,
            amount: this.price, 
//            amount: '2',  
            sourcecode: this.flight.FlightDetails[0].Origin,
            destination_code: this.flight.FlightDetails[0].Destination            
    }

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'bookings/flightbooking', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
            
            this.fid = data.data.Booking.id;
            console.log(this.fid);
            
            this.navCtrl.push(ThankyouPage,{
              fid: this.fid
          });
            
            let toast = this.toastCtrl.create({
            message: 'Flight Booked successfully',
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
            message: 'Check your Network Connection',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
      });        
       }); 
         
  }

}
