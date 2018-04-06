import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {
    
    showdata: any;
    title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider,public http: Http,
      public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
      
      this.show();
      
  }
  
  back(){
      this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }
  
  show(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
      });
     
    var options = this.common.options;
    
    var data_form = {
        title: 'Privacy & policy'
    }
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
  
    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'staticpages/staticpage', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          Loading.dismiss();
          console.log(data);
          
        if (data.status == 0) {
            this.title = data.data.Staticpage.title;
            this.showdata = data.data.Staticpage.detail; 
            
        }else {
        Loading.dismiss();
                      
        }
      }, error => {
      Loading.dismiss();
              
      });    
      });
  }

}
