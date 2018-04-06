import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  image: any;

  id: string;
  trip: string= 'upcoming';
  uflights = [];
  uhotels = [];
  pflights = [];
  photels = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider,public http: Http) {

      this.id = localStorage.getItem('ID');
      this.viewProfile();
      
      if(this.trip == 'upcoming'){
            this.upcomingBookings();
        }else if(this.trip == 'past'){
            this.pastBookings();
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
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
  
   upcomingBookings(){
     
      var options = this.common.options;
  
    var data_form = {
      user_id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'bookings/upcomingbooking', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
         
           this.uflights = data.data.flight;
           this.uhotels = data.data.hotel;
          
          
        }else {
                        
        }
      }, error => {
              
      });
       
  }
  
  pastBookings(){
      
      var options = this.common.options;
  
    var data_form = {
      user_id: this.id
    }
    console.log(data_form);
    
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
   
      this.http.post(this.common.base_url + 'bookings/pastbooking', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if (data.status == 0) {
          
          this.pflights = data.data.flight;
          this.photels = data.data.hotel;
          
        }else {
                        
        }
      }, error => {
              
      });
      
  }

}
