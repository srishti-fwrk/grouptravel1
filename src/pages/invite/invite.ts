import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
  providers:[SocialSharing,HttpModule,CommonProvider]
})
export class InvitePage {
    
    public data = {
        userr:''
    };
    public user: any;
    public code: any;
    id: any;
    fid: any;
    trip_id: any;
    destination: any;
    recentfrnds: any;
        
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private socialSharing: SocialSharing, public http: Http,
      public common: CommonProvider, public toastCtrl: ToastController,
      public loadingCtrl:LoadingController, public viewCtrl: ViewController) {
      this.destination = localStorage.getItem('destination');
      this.id = localStorage.getItem('ID');
      this.trip_id = localStorage.getItem('TripID');
      this.recentTravel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }
  
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  
  recentTravel(){
      console.log('recent');    
      
    var options = this.common.options;
    
    var data_form = {        
        user_id: this.id 
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
    this.http.post(this.common.base_url + 'trips/recenttravelfrd', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == 0) {
        this.recentfrnds = data.data;
        
        console.log(this.recentfrnds);
          
        }else {        
          
        }
      }, error => {
        
      });   
        
  }
  
  search(keys){
      console.log("dxd")
      this.code = keys;
      console.log(this.code);
      /*var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });*/
    var options = this.common.options;
    var data_form = {
      code: this.code,
      user_id: this.id      
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    //Loading.present().then(() => {
    this.http.post(this.common.base_url + 'users/namesearch', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        //Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
        this.user = data.data;
        console.log(this.user);
        }else {
        
          /*let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();*/
          
        }
      }, error => {
        //Loading.dismiss();
        let toast = this.toastCtrl.create({
          message: "Check your Network Connection",
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });
    //});
      
  }
  
  chooseItem(i_user,i_id){
    console.log(i_user);
    console.log(i_id);
    this.fid = i_id;
    this.user = [];
    this.data.userr = i_user;
   
  }
  
  sendInvite(searchu){
      
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    var options = this.common.options;
    var data_form = {
        frd_id: this.fid,
        trip_id: this.trip_id,
        user_id: this.id 
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'invites/invitefrd', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);
        if (data.status == 0) {
        //this.user = data.data;
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();  
            
        //console.log(this.user);
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
  

  fb(){
    this.socialSharing.shareViaFacebook('hi', 'image', 'url')
    .then(() => {
     // alert('Sharing via fb is possible'); 
    }).catch(() => {
      //alert('Sharing via fb is not possible');      
    });
  }

  twitter(){    
    this.socialSharing.shareViaTwitter('hi', 'image', 'url')
    .then(() => {
     // alert('Sharing via twitter is possible'); 
    }).catch(() => {
      //alert('Sharing via twitter is not possible');      
    });
  }

  msging(){
    this.socialSharing.shareViaSMS('hi', '')
    .then(() => {
     // alert('Message sent'); 
    }).catch(() => {
     // alert('Sharing via msging is not possible');      
    });
  }

}
