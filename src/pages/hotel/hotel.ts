import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { HoteldetailPage } from '../hoteldetail/hoteldetail';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DatePipe } from '@angular/common';
import { ReviewbookingPage } from '../reviewbooking/reviewbooking';
import { ThankyouPage } from '../thankyou/thankyou';

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
  providers: [InAppBrowser]
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
        pcountry: "",
        adults : [],
        childs: [],
    };
    passengerDetails = [];
    countries = [];    
    rooms_data =[];
    optionss: RequestOptions;
    sellrequestid: any;
    backk: any;
    currency: any;
    dPipe = new DatePipe('en-US');
    bookk: any = 1;
    lastForm: any;
    pdata: any;
    codes = [];
    booked: any;
    id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController,private iab: InAppBrowser) {
        
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
      this.countrylist();
      this.phonecodeList();
 
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
  
  scountrySelect(s_c){
  console.log(s_c);
  
  var options = this.common.options;
    var data_form = {
      code: s_c      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

      this.http.post(this.common.base_url + 'users/phonecode', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
            
//        this.codes = data.data;
//        console.log(this.codes);
        this.data.countrycode = data.data[0].Phonecode.phonecode;
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

  
    typeSelect(type){
        console.log(type);
    }
  
    titleSelect(title){
        console.log(title);
        console.log(this.data.title);
    }
    
    /*bookHotel(lastForm){
       
        
        
    }*/
    
    bookHotel(lastForm){
        this.lastForm = lastForm;
        this.bookk = 1;
        console.log(this.rooms_data);
        for(let i=0; i < this.rooms_data.length; i++){
            for(let j=0; j < this.rooms_data[i].passengerDetails.length; j++){
              if(this.rooms_data[i].passengerDetails[j].age == '' || this.rooms_data[i].passengerDetails[j].name == ''
                || this.rooms_data[i].passengerDetails[j].surname == '' || this.rooms_data[i].passengerDetails[j].title == ''){
                
                this.bookk = 0;
                    let toast = this.toastCtrl.create({
                    message: "Fill the details of each person to continue",
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
                  break;
            }
            }
        }
        
        if(this.bookk == 1){
        
        let userid = localStorage.getItem('ID');
        let pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd'); 
        
        this.pdata = {
            type: 'Hotel',
            user_id: userid,
            //price: this.hdetail.detail.totalprice,
            price: '2',
            from: this.hdetail.detail.checkIn,
            to: this.hdetail.detail.checkOut,
            created: pDate,
            rooms: this.hdetail.detail.rooms.length,
            hname: this.hdetail.detail.name,
            city: this.hdetail.dcity,
            country: this.hdetail.dcountry
        }
        
        console.log(this.pdata);
        let options={};       let target="_blank";
        const browser = this.iab.create('http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data='+encodeURIComponent(JSON.stringify(this.pdata)),target,options);
        /*browser.executeScript();
        browser.insertCSS();*/
        //browser.close();
         /*alert(browser);   
         alert(JSON.stringify(browser));*/
         
         browser.on('loadstart').subscribe((e) => {
         
           var redirect_uri = e.url.split('cess');
          
           console.log(redirect_uri);
         
           console.log(redirect_uri[0]);
//           if(redirect_uri[0] == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/corepay?execution=e2s2'){
//               redirect_uri[0] = 'http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/suc';
           if (redirect_uri[0] == 'http://rakesh.crystalbiltech.com/paypal-adaptive/chained-payment/suc') {
              //alert('close');
               browser.close();
//               this.navCtrl.push(HotelPage)
               this.book();
            
             }
        // }
         }, err => {
          //alert(JSON.stringify(err));
         });
        }
        
    }
    
    book(){
        //alert('book');
        
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
                name: this.lastForm.value.name, 
                surname: this.lastForm.value.surname, 
                email: this.lastForm.value.email, 
                countryCode: this.lastForm.value.countrycode, 
                phoneNumber: this.lastForm.value.contact 
                },
         rooms: this.rooms_data
          
      
   }
    console.log(data_form);
    
    //alert(JSON.stringify(data_form));
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/issue', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        
        //alert(JSON.stringify(data));
        if (data.status == 'CONFIRMED') {
           //alert(JSON.stringify(data));
           
           this.booked = {
              reference: data.reference,
              sellRequestId: data.sellRequestId,
              bookingId: data.bookingId,
              status: data.status
           };
          //alert(JSON.stringify(this.booked));
          
          this.dbHotel(); 
          
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

    dbHotel(){
        //alert('dbHotel');
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
        
        var options = this.common.options;
    
    //console.log(this.pdata);
        
        let userid = localStorage.getItem('ID');
        let pDate = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        
    let data_form = {            
            user_id: userid,
            price: this.hdetail.detail.totalprice,
            //price: '2',
            check_in: this.hdetail.detail.checkIn,
            check_out: this.hdetail.detail.checkOut,
            created: pDate,
            rooms: this.hdetail.detail.rooms.length,
            hname: this.hdetail.detail.name,
            city: this.hdetail.dcity,
            country: this.hdetail.dcountry,
            status: this.booked.status,
            booking_id: this.booked.bookingId
    }

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'bookings/hotel_booking', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        //alert(JSON.stringify(data));
        if (data.status == 0) {
            
            this.id = data.data.Hotel_booking.id;
            console.log(this.id);
            
            this.navCtrl.push(ThankyouPage,{
              id: this.id
          });
            
            let toast = this.toastCtrl.create({
            message: 'Hotel Booked successfully',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
          
            
        }else {
        }
      }, error => {
        Loading.dismiss();
      });        
       }); 
    }

}
