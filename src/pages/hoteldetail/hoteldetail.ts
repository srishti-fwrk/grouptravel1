import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { FlightPage } from '../flight/flight';
import { SearchPage } from '../search/search';
import { HotelPage } from '../hotel/hotel';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
/**
 * Generated class for the HoteldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoteldetail',
  templateUrl: 'hoteldetail.html',
})
export class HoteldetailPage {
  detailed: any;
  detail: any;
  to: any;
  from: any;
  city: any;
  street: any;
  ratingg: any;
  description: any;
  symbol: any;
  total: any;
  gst: any;
  price: any;
  type: any;
  roomtype: any;
  name: any;
  address: any;
  rooms: any;
  n3: any;
  search_id: any;
  optionss: RequestOptions;
  dcity: any;
  dcountry: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController) {
    
    this.detailed = navParams.get('detailed');
    console.log(this.detailed);
    
    if(this.detailed){
        
    this.dcity = this.detailed.dcity; 
    this.dcountry = this.detailed.dcountry;
    this.from = this.detailed.from;
    this.to = this.detailed.to;
    this.search_id = this.detailed.search_id;
    console.log(this.search_id);
    this.city = this.detailed.hotel.hotelinfo.cityname;
    this.name = this.detailed.hotel.hotelinfo.fullName;
    this.street = this.detailed.hotel.hotelinfo.hotelAddresss.street;
    this.ratingg = this.detailed.hotel.hotelinfo.starCategory;
    this.description = this.detailed.hotel.hotelinfo.hotelDescription[0].description;
    this.symbol = this.detailed.hotel.ratetype.bundledRates[0].currsymbol;
    this.total = this.detailed.hotel.ratetype.bundledRates[0].convertedPrice;
    
    if(this.detailed.hotel.ratetype.bundledRates[0].price_details.GST.length > 0){
        console.log('gst');
        this.gst = this.detailed.hotel.ratetype.bundledRates[0].price_details.GST[0].amount;
    }else{
    console.log('0');
      this.gst = this.detailed.hotel.ratetype.bundledRates[0].price_details.Netprice[1].amount;  
    }
    this.price = this.detailed.hotel.ratetype.bundledRates[0].price_details.Netprice[0].amount;
    this.rooms = this.detailed.hotel.ratetype.bundledRates;
    console.log(this.rooms);
    
    this.n3 = this.detailed.hotel.hotelinfo.country;
    }
    this.detail = navParams.get('detail'); ///back data
    console.log(this.detail);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoteldetailPage');
  }

  flight(){
    this.navCtrl.push(FlightPage);
  }
  
  back(){
      this.navCtrl.push(SearchPage,{
          detail: this.detail
      });
  }
  
  select(detail){
      console.log(detail);
      //this.navCtrl.push(HotelPage);
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    //var options = this.common.options;
    let headers = new Headers();
    headers.append('apikey',  'f391cf76-be55-4');
    headers.append('mode',  'sandbox');
    headers.append('Content-Type',  'application/json');
    this.optionss= new RequestOptions({ headers: headers });

    var data_form = {
     
        apiref: detail.apiref,
        groupcode: detail.group_code,
        rateKey:[detail.rate_key], 
        search_id: this.search_id
      
   }
    console.log(data_form);
    
    //var Serialized = this.common.serializeObj(data_form);
    //console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/price', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.errors.length <= 0) {
           console.log(data);
                      
           let hdetail = {
              sellRequestId: data.sellRequestId,
              detail: data.dbstay,
              dcity: this.dcity,
              dcountry: this.dcountry              
           }
           console.log(hdetail);

           this.navCtrl.push(HotelPage,{
            hdetail: hdetail,  
            rooms: this.detailed,
            back: this.detail          
           });

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
