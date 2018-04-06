import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { RatingPage } from '../rating/rating';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { DiscoverPage } from '../discover/discover';

/**
 * Generated class for the MytripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytrip',
  templateUrl: 'mytrip.html',
  providers: [HttpModule, CommonProvider]
})
export class MytripPage {
    
    user_id: any;
    trips: any;
    community: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController) {
      
      this.user_id = this.navParams.get('userid');
      console.log(this.user_id);
      this.community = this.navParams.get('community');
      console.log(this.community);
      this.viewTrips();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytripPage');
  }

  rating(){
    this.navCtrl.push(RatingPage);
  }
  
  back(){
    this.navCtrl.push(DiscoverPage,{
        fcommunity: this.community        
    });  
  }
  
  viewTrips(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
      
       var options = this.common.options;
      
            var data_form = {
                user_id: this.user_id                
            }
            console.log(data_form);
            
            var Serialized = this.common.serializeObj(data_form);
      Loading.present().then(() => {     
      this.http.post(this.common.base_url + 'trips/tripdetail', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        
        if (data.status == 0) {
            
               this.trips = data.data;
               console.log(this.trips); 
            
        }else {
                let toast = this.toastCtrl.create({
                  message: "No public Trips",
                  duration: 3000
                });
                toast.present();         
        }
      }, error => {
      Loading.dismiss();
              let toast = this.toastCtrl.create({
                  message: "Check your Network Connection",
                  duration: 3000
                });
                toast.present();
      });
     });       
  }

}
