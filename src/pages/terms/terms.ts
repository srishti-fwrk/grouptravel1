import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
    
    showdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider,public http: Http,
      public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
      
      this.show();
  }
  
  back(){
      this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }
  
  show(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
      });
     
    var options = this.common.options;
    
    var data_form = {
        title: 'Terms and conditions'
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
