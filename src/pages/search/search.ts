import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { HoteldetailPage } from '../hoteldetail/hoteldetail';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { TabsPage } from '../tabs/tabs';
import { DiscoverPage } from '../discover/discover';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
    
  data: any = {
      filter: ''
  };
  to: any;
  from: any;
  city: any;
  currency: any;
  nationality: any;
  hotels: any;
  optionss: RequestOptions;
  detail: any;
  occupancies: any;
  tasks = [1,2,3,3,4,7];
  filterbit: any = 0;
  dcity: any;
  dcountry: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController,
    public viewCtrl: ViewController) {

    this.detail = navParams.get('detail');
    console.log(this.detail);
    
    if(this.detail){
       this.occupancies = this.detail.occupancies;
    console.log(this.occupancies);
    
    this.hotels= this.detail.hotels;
    console.log(this.hotels);
    
//    let curren = this.hotels.price.price_details.net[0].currency;
//    console.log(curren);

    this.city= this.detail.city;
    console.log(this.city);
    
    this.currency= this.detail.currency;
    console.log(this.currency);
    
    this.nationality= this.detail.nationality;
    console.log(this.nationality);

    this.from = this.detail.from;
    this.to = this.detail.to; 
    console.log(this.from+'-'+this.to); 
    
    this.dcity = this.detail.dcity;
    this.dcountry = this.detail.dcountry;
    }
  }
  
  back(){
      this.navCtrl.push(DiscoverPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
  filterSelect(chose){
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    Loading.present().then(() => {
      if(chose == 'lowest'){
          Loading.dismiss();
          this.filterbit = 0;
      }else if(chose == 'highest'){
          Loading.dismiss();
          this.filterbit = 1;
      }
     
     }); 
  }

 hotel(ht){
   console.log(ht);
   
    /*this.navCtrl.push(HoteldetailPage,{
      detail: ht,
      to: this.to,
      from: this.from,
      city: this.city
    });*/
    
    
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
     
        HotelCodes: ht.HotelCode, 
        FromDate: this.from, 
        ToDate: this.to, 
        Currency: this.currency, 
        Occupancies: this.occupancies, 
        ClientNationality: this.nationality 
      
   }
    console.log(data_form);
    
    //var Serialized = this.common.serializeObj(data_form);
    //console.log(Serialized);
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/stays/v1/properties', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.errors.length <= 0) {
           console.log(data);
           this.hotel = data.hotel;
           this.to = data.checkin;
           this.from = data.checkout;
           
           let detailed = {
              hotel: this.hotel,
              to: this.to,
              from: this.from,
              search_id: data.search_id,
              dcity: this.dcity,
              dcountry: this.dcountry              
           }
           console.log(detailed);

           this.navCtrl.push(HoteldetailPage,{
            detailed: detailed,
            detail: this.detail
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
