import { Component, ContentChild, ViewChild } from '@angular/core';
import { NavController, ToastController, LoadingController, Content } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { ContactPage } from '../contact/contact';
import { AddtripPage } from '../addtrip/addtrip';
import { GalleryPage } from '../gallery/gallery';
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Camera]
})

export class AboutPage {
  @ViewChild(Content) content: Content;
      
  image: any;
  id: string;
  data: any = {
      msg: ''
  };
  trip_id: any;
  msgs = [];
  fav: any = 0;
  interval: any;
  cimage: any;
  bottom: any;

  constructor(public navCtrl: NavController,public common: CommonProvider,
  public http: Http,public toastCtrl: ToastController,
  public camera: Camera, public loadingCtrl: LoadingController) {
  
    this.id = localStorage.getItem('ID');
    this.viewProfile();
    this.trip_id = localStorage.getItem('TripID');
    this.firstfullChat();
    this.showChat();
    
  }
  
  showChat() {
   
    this.interval= setInterval(()=>{
        this.fullChat();       
      },5000)
  }

  chat(){
    this.navCtrl.push(AboutPage);
  }

//  payments(){
//    this.navCtrl.push(ContactPage);
//    clearInterval(this.interval);
//  }

  itinerary(){
    this.navCtrl.push(AddtripPage);
    clearInterval(this.interval);
  }

  gallery(){
    this.navCtrl.push(GalleryPage);
    clearInterval(this.interval);
  }

  viewProfile(){

    var options = this.common.options;
  
    var data_form = {
      id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'users/user', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
         
           this.image = data.data.User.image; 
           console.log(this.image);   
          
          
        }else {
                        
        }
      }, error => {
              
      });
    
  
  }
  
  favorite(msgid,userid){
      console.log(msgid);
      console.log(userid);
      
    var options = this.common.options;
  
    var data_form = {
        user_id: userid,
        msg_id: msgid        
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'invites/addtofavourite', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
            
            /*let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();*/
          this.fullChat();
            
        }else {
           /*let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();*/             
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
  
  sendMsg(chatForm){
      
      console.log(chatForm.value.msg);
      var options = this.common.options;
  
    var data_form = {
        sender_id: this.id,
        trip_id: this.trip_id,
        message: chatForm.value.msg,
        type: 'text'
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'invites/groupchat', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
            this.data.msg = '';             
            this.fullChat(); 
                  
        }else {
                        
        }
      }, error => {
              
      });      
  }
  
  fullChat(){ 
      
    var options = this.common.options;
  
    var data_form = {        
        trip_id: this.trip_id,
        user_id: this.id        
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'invites/chatview', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
        this.msgs = data.data;
        console.log(this.msgs);
        
//        this.bottom=setInterval(()=>{
//                        this.content.scrollToBottom(300);
//                    },1000);
          
        }else {
                        
        }
      }, error => {
              
      });
      
  }
  
  firstfullChat(){ 
      
    var options = this.common.options;
  
    var data_form = {        
        trip_id: this.trip_id,
        user_id: this.id        
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'invites/chatview', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
        this.msgs = data.data;
        console.log(this.msgs);
        
        this.bottom=setInterval(()=>{
                        this.content.scrollToBottom(300);
                    },1000);
          
        }else {
                        
        }
      }, error => {
              
      });
      
  }
  
  sendImg(){
    
          const options: CameraOptions = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
          }
          
          this.camera.getPicture(options).then((imageData) => {
            //this.dpimage = 'data:image/jpeg;base64,' + imageData;
            
            //this.dpimage = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = {
                sender_id: this.id,
                trip_id: this.trip_id,
                message: imageData,
                type: 'image'
            }
            
            var serialized_img = this.common.serializeObj(data_img);
            console.log(serialized_img);

            let options = this.common.options;

            var url: string = this.common.base_url + 'invites/groupchat';
            Loading.present().then(() => {
            this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              
              if (data.status == 0) {
                
                  this.fullChat();
                  
                let toast = this.toastCtrl.create({
                  message: "Image sent",
                  duration: 3000
                });
                toast.present();
                
              } else {
                
                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000
                });
                toast.present();
              }

            })
          }, (error) => {
            Loading.dismiss();
            
            let toast = this.toastCtrl.create({
              message: "Server not Working,Please Check your Internet Connection and try again!",
              duration: 3000
            });
            toast.present();
          });
        });    
         
  }

}
