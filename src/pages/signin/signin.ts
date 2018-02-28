import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController} from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';
import { TabsPage } from '../tabs/tabs';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from '@ionic-native/google-plus';
import { SignupPage } from '../signup/signup';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [HttpModule,CommonProvider,Facebook,GooglePlus,Firebase]
})
export class SigninPage {
  image: any;
  id: string;
  
  public type = 'password';
  public showPass = false;
    
    data: any = '';

  constructor(public navCtrl: NavController, public http: Http,
      public common: CommonProvider, public toastCtrl: ToastController,
      private facebook: Facebook, private googlePlus: GooglePlus,
      public loadingCtrl:LoadingController, public viewCtrl: ViewController,
      private firebase: Firebase
      ) {

  }

  viewProfile(){
   /* this.id = localStorage.getItem('ID');
    alert('view');
      var options = this.common.options;
    
      var data_form = {
        id: this.id
      }
      alert(JSON.stringify(data_form));
      
      var Serialized = this.common.serializeObj(data_form);
      console.log(Serialized);
     
        this.http.post(this.common.base_url + 'users/user', Serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          alert('api');
          if (data.status == 0) {
           
             this.image = data.data.User.image; 
             alert(JSON.stringify(this.image));   
                    
          }else {
                          
          }
        }, error => {
                
        });
      */
    
    }
    

  signUp(){
    this.navCtrl.push(SignupPage)
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
  
  openforgotPage(){
	  this.navCtrl.push(ForgotPage)
  }

  home(){
	  this.navCtrl.push(TabsPage)
  }
  
  signIn(signin){
           
      this.firebase.getToken()
        .then(token => {
        console.log(`The token is ${token}`)
        //alert(JSON.stringify(token));       
        
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      email: signin.value.email,
      password: signin.value.password,
      tokenid: token
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/login', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
        if (data.status == 0) {

          
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          console.log(data.data.User.id);
          localStorage.setItem('ID',data.data.User.id);
          localStorage.setItem('Userdata', JSON.stringify(data.data.User));
          localStorage.setItem('Status','0');
          
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
        ) // save the token server-side and use it to push notifications to this device
        .catch(error =>
        { 
        console.error('Error getting token', error);
        //alert(JSON.stringify(error));
        }
        );


      
  }
  
  faceBook(){
      
      this.firebase.getToken()
  .then(token => { 
  console.log(`The token is ${token}`);
  //alert(JSON.stringify(token));
  
  var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    let permissions = new Array<string>();
    let nav = this.navCtrl;

    permissions = ['public_profile', 'user_friends', 'email'];

    this.facebook.login(permissions)
      .then((response) => {

        let userId = response.authResponse.userID;
        let params = new Array<string>();

        this.facebook.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
          .then((user) => {

            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";

           var fdata={
             first_name: user.first_name,
             last_name: user.last_name,
             name: user.name,
             email: user.email,
             fb_id: user.id,
             phone: '',
             dob: '',
             address: '',
             image: user.picture,
             gender: '',
             tokenid: token
           }
            
            var Serialized = this.common.serializeObj(fdata);
            console.log(Serialized);
            var options = this.common.options;
            Loading.present().then(() => {
            this.http.post(this.common.base_url + 'users/fblogin', Serialized, options).map(res => res.json()).subscribe(datafb => {
              Loading.dismiss();
                            
              if (datafb.status == 0) {
                   
                 localStorage.setItem('ID', datafb.data.User.id);
                 localStorage.setItem('Userdata', JSON.stringify(datafb.data.User));
                 localStorage.setItem('Status','1');
                 localStorage.setItem('fb','1');
                
                let toast = this.toastCtrl.create({
                  message: datafb.msg,
                  duration: 3000,
                  position: 'middle'
                });
                 toast.present();
                 
                 this.navCtrl.push(TabsPage);

              }
            }, (error) => {
              Loading.dismiss();
              let toast = this.toastCtrl.create({
                  message: "Check your Network Connection",
                  duration: 3000,
                  position: 'middle'
                });
                 toast.present();
                });
            })

          }, (error) => {
            console.log(error);
          })

      }, (error) => {
        console.log(error);
      });

  
  }) // save the token server-side and use it to push notifications to this device
  
  .catch(error => {
  console.error('Error getting token', error);
  //alert(JSON.stringify(error));
  });
      
  }

  gooGle() {
      
      this.firebase.getToken()
  .then(token => {
  console.log(`The token is ${token}`);
  //alert(JSON.stringify(token));
  
  var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    this.googlePlus.login({
      'webClientId': '419942336620-r59elsvpmk4fr1t64hbb4mlus6f9pe35.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
       
      var data_google = {

        name: res.displayName,
        google_id: res.userId,
        email: res.email,
        image: res.imageUrl,
        tokenid: token               
      }
       
      console.log(this.common.options);
      var options = this.common.options;

            var Serialized = this.common.serializeObj(data_google);
            console.log(Serialized);
            var options = this.common.options;

            Loading.present().then(() => {
            this.http.post(this.common.base_url + 'users/googlelogin', Serialized, options).map(res => res.json()).subscribe(datag => {
                   
                   Loading.dismiss();
                         
              if (datag.status == 0) {
                  
                 localStorage.setItem('ID', datag.data.User.id);
                 localStorage.setItem('Userdata', JSON.stringify(datag.data.User));
                 localStorage.setItem('Status','1');
                 localStorage.setItem('google','1');
                
                 let toast = this.toastCtrl.create({
                   message: datag.msg,
                   duration: 3000,
                   position: 'middle'
                 });
                 toast.present();
                 
                 this.navCtrl.push(TabsPage);
                 
              }else {

                let toast = this.toastCtrl.create({
                  message: datag.message,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
                
              }
            }, (error) => {
              Loading.dismiss();
              //alert(JSON.stringify(error));
              //alert(error);
            })
          });
      
    }, error => {
        //alert(JSON.stringify(error));
    }
    );
  
  }) // save the token server-side and use it to push notifications to this device
  .catch(error => {
      console.error('Error getting token', error);
      //alert(JSON.stringify(error));
  });

    

  }

}
