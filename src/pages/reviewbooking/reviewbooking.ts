import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassengerPage } from '../passenger/passenger';

/**
 * Generated class for the ReviewbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewbooking',
  templateUrl: 'reviewbooking.html',
})
export class ReviewbookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewbookingPage');
  }

  passenger(){
    this.navCtrl.push(PassengerPage);
  }
  
}
