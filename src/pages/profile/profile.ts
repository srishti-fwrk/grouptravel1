import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { GetstartedPage } from '../getstarted/getstarted';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [HttpModule,CommonProvider,Facebook,GooglePlus]
})

export class ProfilePage {
  
  log: string;
  image: any;
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.viewProfile();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
    data: any = '';
    user: any;
    status: any;
    id: any;
    
	constructor(public navCtrl: NavController,public http: Http, public common: CommonProvider,
    public toastCtrl: ToastController,
    public loadingCtrl:LoadingController,
    public viewCtrl: ViewController,
    private facebook: Facebook, private googlePlus: GooglePlus) {
                        
      this.id = localStorage.getItem('ID');
      
      this.status = localStorage.getItem('Status');
       this.viewProfile();     
                  
  }
  public event = {}

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  viewProfile(){

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/user', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
          this.user = data.data.User;
          console.log(this.user);
          Loading.dismiss();
          localStorage.setItem('Userdata',JSON.stringify(data.data.User));
          localStorage.setItem('DP',this.user.image);
          this.image = data.data.User.image;
          
          if(this.user.phone == null || this.user.phone == ''){
            this.user.phone = 'Contact Number';
        }
        
        if(this.user.email == null || this.user.email == 'undefined' || this.user.email == ''){
            this.user.email = 'Email';
      }

          let toast = this.toastCtrl.create({
            message: data.msg,
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
          message: "Check your Network Connection",
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });
    });

  }

  edit(){
    this.navCtrl.push(EditprofilePage);
  }

  change(){
    this.navCtrl.push(ChangepasswordPage);
  }

  reset(){
    this.navCtrl.push(ResetpasswordPage);
  }

  
}
