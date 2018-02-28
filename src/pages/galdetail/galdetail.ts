import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import {GalleryPage} from '../gallery/gallery';


/**
 * Generated class for the GaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galdetail',
  templateUrl: 'galdetail.html',
})
export class GaldetailPage {
    
    imgid: any;
    id: any;
    trip_id: any;    
    get: any;
    bit: any;
    image: any;
    location: any;
    username: any;
    tym: any;
    data: any = {
        commentt: '' 
    };
    
    public buttonClicked: boolean = false;
    comments: any;
    len: any = 0;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController,
      public common: CommonProvider,public http: Http,
      public toastCtrl: ToastController) {
      
      this.get = this.navParams.get('send');
      
          this.imgid = this.get.Gallery.id;
          this.bit = this.get.Gallery.status;
          this.image = this.get.Gallery.image;
          this.location = this.get.Gallery.location;
          if(!this.location){
             this.location = 'Location'; 
          }
          this.username = this.get.User.name;
          this.tym = this.get.Gallery.created;
        console.log(this.tym);
      
      this.id = localStorage.getItem('ID');
      this.trip_id = localStorage.getItem('TripID');
//      this.commentList();
  }
  
  commentList(){
      
      var options = this.common.options;
  
    var data_form = { 
         user_id: this.id,
         image_id: this.imgid         
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'galleries/commentlist', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {            
            this.comments = data.data; 
              console.log(this.comments);
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
         let toast = this.toastCtrl.create({
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
      
  }
  
  postComment(){     
      this.buttonClicked = !this.buttonClicked;
      if(this.buttonClicked == true){
           this.commentList();
           this.len = 1;
      }else{
          this.comments = [];
          this.len = 0;
      }
     
  }
  
  comment(commentForm){
      
      var options = this.common.options;
  
    var data_form = { 
         user_id: this.id,
         image_id: this.imgid,
         trip_id: this.trip_id,
         comment: commentForm.value.commentt
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'galleries/commentonimage', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {            
            this.data.commentt = '';  
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
         let toast = this.toastCtrl.create({
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaldetailPage');
  }
  
  likeImage(){
      
    var options = this.common.options;
  
    var data_form = {
         user_id: this.id,
         image: this.imgid,
         trip_id: this.trip_id  
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'galleries/addtofavourite', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {            
            this.bit = data.bit;
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

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log('Destructive clicked');
            
            var options = this.common.options;
  
    var data_form = {         
         image_id: this.imgid,
         trip_id: this.trip_id  
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'galleries/removeimage', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) { 
                       
            this.navCtrl.push(GalleryPage);
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
         let toast = this.toastCtrl.create({
            message: "Check your network connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();     
      });    
                    
          }
        }
        /*,{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }*/
        ,{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

