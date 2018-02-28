import { Component } from '@angular/core';
import { NavController, ToastController, ViewController, LoadingController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
  providers: [HttpModule,CommonProvider]
})
export class ChangepasswordPage {
  public type = 'password';
  public showPass = false;

  public typee = 'password';
  public showPasss = false;
    data: any = '';
    user: any;

  constructor(public navCtrl: NavController, public http: Http,
      public common: CommonProvider, public toastCtrl: ToastController,
      public viewCtrl: ViewController, public loadingCtrl:LoadingController) {
      
      this.user = JSON.parse(localStorage.getItem('Userdata'));
      console.log(this.user);
      console.log(this.user.email);

  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  showPasswordd(){
    this.showPasss = !this.showPasss;
 
    if(this.showPasss){
      this.typee = 'text';
    } else {
      this.typee = 'password';
    }
  }
  showPassword() {
    
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  
  openmytripPage(){
	  this.navCtrl.push(TabsPage)
  }
  
  changePass(change){

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
      var options = this.common.options;

    var data_form = {
      
      email: this.user.email,
      new_password: change.value.npassword,
      old_password: change.value.password
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/changepassword', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
        if (data.status == 1) {

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
  }

}
