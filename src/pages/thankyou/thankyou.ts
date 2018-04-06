import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ReviewbookingPage } from '../reviewbooking/reviewbooking';

/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {
    
    interval: any;
    fid: any;
    id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      this.fid = this.navParams.get('fid');
      this.id = this.navParams.get('id');
      this.interval= setInterval(()=>{
        this.showDetail();     
      },5000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }
  
//  back(){
//      this.navCtrl.push(HomePage);
//  }
  
  showDetail() {
      
      if(this.fid){
          this.navCtrl.push(ReviewbookingPage,{
              fid: this.fid
          });
          clearInterval(this.interval);
      }else if(this.id){
         this.navCtrl.push(ReviewbookingPage,{
              id: this.id
          }); 
          clearInterval(this.interval);
      }
   
   
    
  }

}
