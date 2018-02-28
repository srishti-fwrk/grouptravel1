import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { GallerytwoPage } from '../gallerytwo/gallerytwo';
import { LocalityPage } from '../locality/locality';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProvider } from "../../providers/common/common";

/**
 * Generated class for the EditphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editphoto',
  templateUrl: 'editphoto.html',
  providers: [HttpModule,CommonProvider]
})
export class EditphotoPage {
    
    imgdata: any;
    showimg: any;
    location: any;
    bit: any = 0;
    data: any = {
        audience: ''
    };    
    aud: any;
    trip_id: any;  
    check: boolean = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public modalCtrl: ModalController,public http: Http, 
      public alertCtrl: AlertController,public common: CommonProvider,
    public toastCtrl: ToastController, public viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {      
      
      this.trip_id = localStorage.getItem('TripID');    
      this.imgdata = this.navParams.get('send');
      console.log(this.imgdata);
      if(this.imgdata){
          this.showimg = this.imgdata.Gallery.image;
          this.location = this.imgdata.Gallery.location;
                    
          if(this.location){
              this.bit = 1;
              console.log(this.bit);
          }
      }      
  }
  
  ionViewWillEnter(){
     this.imgdata = this.navParams.get('send');
     if(this.imgdata){
      if(this.imgdata.Gallery.imagestatus == 1){
              //this.check = true;
              this.data.audience = true;
          }else{
              //this.check = false;
              this.data.audience = false;

          }   
     }
               
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditphotoPage');
  }
  
  notify(){
      console.log(this.data.audience);
      if(this.data.audience == true){
          this.aud = 1;
      }else if(this.data.audience == false){
          this.aud = 0;
      }
      console.log('audience'+this.aud);
      
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    var options = this.common.options;

    var data_form = {
      imageid: this.imgdata.Gallery.id,
      trip_id: this.trip_id,
      status: this.aud
    }
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    Loading.present().then(() => {
    this.http.post(this.common.base_url + 'galleries/setimagestatus', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == 0) {
            
            if(data.data.Gallery.imagestatus == 0){
              /*let toast = this.toastCtrl.create({
            message: "Public Selected",
            duration: 3000,
            position: 'middle'
          });
          toast.present();*/       
  
            }else if(data.data.Gallery.imagestatus == 1){
                /*let toast = this.toastCtrl.create({
            message: "GroupOnly Selected",
            duration: 3000,
            position: 'middle'
          });
          toast.present(); */      

            }
            
          
        } else {

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
  
  back(){
      this.navCtrl.push(GallerytwoPage);
  }
  
  addLocation(){
      this.navCtrl.push(LocalityPage,{
         locationpage: this.imgdata 
      });
  }
  
  /*addLocation() {  
    let modal = this.modalCtrl.create(LocalityPage,{
         locationpage: this.imgdata 
      });
    modal.present();
  }*/

}
