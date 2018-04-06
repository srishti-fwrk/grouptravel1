import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DiscoverPage } from '../discover/discover';
import { LocationPage } from '../location/location';
import { DiscovertopPage } from '../discovertop/discovertop';

/**
 * Generated class for the ViewactivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewactivities',
  templateUrl: 'viewactivities.html',
})
export class ViewactivitiesPage {
    
    activities: any;
    redirect: any;
    title: any;
    send: any;
    front: any;
    filterbit: any = 0;
    data: any = {
        filter: ''
    };
    infolow = [];
    location: any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingCtrl: LoadingController) {
      
      this.send = this.navParams.get('send');
      if(this.send){
      this.activities = this.send.activities;
      console.log(this.activities);
      this.redirect = this.send.back;
      console.log(this.redirect);
      if(this.redirect == '2'){
          this.title = this.send.title;
          console.log(this.title);
          this.front = this.send.front;
          console.log(this.front);
      }
      
      if(this.redirect == '3'){
          this.location = this.send.location;
          console.log(this.location);          
      }
      
      }
      
  }
  
  back(){
      if(this.redirect == '1'){
        this.navCtrl.push(DiscoverPage,{
          activities: this.activities
      });  
      }else if(this.redirect == '2'){
        this.navCtrl.push(LocationPage,{
          activities: this.activities,
          title: this.title,
          send: this.front
      });  
      }else if(this.redirect == '3'){
        this.navCtrl.push(DiscovertopPage,{
          activities: this.activities,
          location: this.location         
      });  
      }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewactivitiesPage');
  }
  
  filterSelect(chose){
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    Loading.present().then(() => {
      if(chose == 'lowest'){
          Loading.dismiss();
          this.filterbit = 0;
          console.log(this.activities.length);
          
         let n = this.activities.length; 
         let temp = 0;  
        
         for(let i=0; i < n; i++){  
                 for(let j=1; j < (n-i); j++){  
                          if(this.activities[j-1].amountsFrom[0].convertedAmount > this.activities[j].amountsFrom[0].convertedAmount){  
                                  
                                 temp = this.activities[j-1];  
                                 this.activities[j-1] = this.activities[j];  
                                 this.activities[j] = temp;  
                         }  
                          
                 }  
         }
         
          console.log(this.activities);
          
      }else if(chose == 'highest'){
          Loading.dismiss();
          this.filterbit = 1;
          
          let n = this.activities.length; 
         let temp = 0;  
        
         for(let i=0; i < n; i++){  
                 for(let j=1; j < (n-i); j++){  
                          if(this.activities[j-1].amountsFrom[0].convertedAmount < this.activities[j].amountsFrom[0].convertedAmount){  
                                  
                                 temp = this.activities[j-1];  
                                 this.activities[j-1] = this.activities[j];  
                                 this.activities[j] = temp;  
                         }  
                          
                 }  
         }
         console.log(this.activities);
         
      }
     
     }); 
  }

}
