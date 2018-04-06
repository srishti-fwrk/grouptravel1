import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddtripPage } from '../addtrip/addtrip';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the IcommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icomments',
  templateUrl: 'icomments.html',
  providers: [HttpModule, CommonProvider]
})
export class IcommentsPage {
    
    data: any = {
        ccomment: ''
    }
    trip_id: any;
    id: any;
    eid: any;
    event_title: any;
    location: any;
    comments: any;
    len: any = 0;
    bit: any = 0;
    comment_count: any = 0;
    likecount: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController) {
    
    this.trip_id = localStorage.getItem('TripID');
    console.log(this.trip_id);
    this.id = localStorage.getItem('ID');
    this.eid = this.navParams.get('etid');
    console.log(this.eid);
    this.viewCard();
    this.commentList();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcommentsPage');
  }
  
  back(){
      this.navCtrl.push(AddtripPage);
  }
  
  viewCard(){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });  
      
    var options = this.common.options;
  
    var data_form = { 
         id: this.eid         
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'trips/singleevent', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          Loading.dismiss();          
        
        if (data.status == 0) { 
            console.log(data);
            this.event_title = data.data.Event.title;
            console.log(this.event_title);
            this.location = data.data.Event.location;
            console.log(this.location);
            
            this.likecount = data.data.Eventfavourite.length;
            console.log(this.likecount);
            
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
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
      });
  }
  
  comMent(commentForm){
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
      
      var options = this.common.options;
  
    var data_form = { 
         event_id: this.eid,
         trip_id: this.trip_id,
         comment: commentForm.value.ccomment,
         user_id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
   Loading.present().then(() => {
      this.http.post(this.common.base_url + 'bookings/commentonevent', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          Loading.dismiss();
        console.log(data);
        
        if (data.status == 0) {            
            this.data.ccomment = '';  
            this.commentList(); 
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
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
      });  
  }
  
  commentList(){
      
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
      
      var options = this.common.options;
  
    var data_form = { 
         event_id: this.eid,         
         user_id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    
   Loading.present().then(() => {
      this.http.post(this.common.base_url + 'bookings/commentlist', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          Loading.dismiss();
        console.log(data);
        
        if (data.status == 0) {            
            this.comments = data.data;  
            console.log(this.comments);            
                this.len = 1;
                this.comment_count = this.comments.length;
            
//            let toast = this.toastCtrl.create({
//            message: data.msg,
//            duration: 3000,
//            position: 'middle'
//          });
//          toast.present();          
            
        }else if(data.status == 1){
            this.len = 0;
                       
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
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
      });    
  }
  
   likeEvent(){
       
    var options = this.common.options;
  
    var data_form = {         
         event_id: this.eid,
         trip_id: this.trip_id  
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'bookings/addtofavourite', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {            
            this.bit = data.bit;
            this.viewCard();
            let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();          
            
        }else {
        //this.status = data.data.Favourite.status;
           let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();             
        }
      }, error => {
         let toast = this.toastCtrl.create({
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
        
  }

}
