import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { SigninPage } from '../signin/signin';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [HttpModule,CommonProvider,Firebase]
})
export class SignupPage {
  public type = 'password';
  public showPass = false;
    data: any = '';

  constructor(public navCtrl: NavController, public http: Http,
      public common: CommonProvider, public toastCtrl: ToastController,
      public loadingCtrl:LoadingController, public viewCtrl: ViewController,
      private firebase: Firebase
      ) {

  }

  signIn(){
    this.navCtrl.push(SigninPage)
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  showPassword() {
    
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  
  home(){
	  this.navCtrl.push(TabsPage)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  signUp(signup) {
      
      this.firebase.getToken()
  .then(token => {
  console.log(`The token is ${token}`);
  //alert(JSON.stringify(token));
  
  var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      name: signup.value.fullname,
      email: signup.value.email,
      password: signup.value.password,
      tokenid: token
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/registration', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == 0) {
          localStorage.setItem('ID',data.data.User.id);
          localStorage.setItem('Userdata', JSON.stringify(data.data.User));
          localStorage.setItem('Status','0');
          
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
          this.navCtrl.push(TabsPage);
       
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
  
  }) // save the token server-side and use it to push notifications to this device
  .catch(error => {
  console.error('Error getting token', error);
  //alert(JSON.stringify(error));
  });
  
  }

}
