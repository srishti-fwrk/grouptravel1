import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
  providers: [HttpModule,CommonProvider]
})
export class ForgotPage {

  data: any = '';
  id: any;

  constructor(public navCtrl: NavController, public http: Http,
    public common: CommonProvider, public toastCtrl: ToastController,
    public loadingCtrl:LoadingController,
    public viewCtrl: ViewController) {

      this.id = localStorage.getItem('ID');

  }
  
  back(){
      this.navCtrl.push(SigninPage);
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  login(){
	  this.navCtrl.push(SigninPage);
  }

  forgotPass(forgot){

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      
      email: forgot.value.email
      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/forgetpwd', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == 1) {

          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
                
        }else if(data.isSucess == true){
        
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
        }else{
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
