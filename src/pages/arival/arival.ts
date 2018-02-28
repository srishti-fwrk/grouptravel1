import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewbookingPage } from '../reviewbooking/reviewbooking';

/**
 * Generated class for the ArivalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arival',
  templateUrl: 'arival.html',
})
export class ArivalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArivalPage');
  }

  review(){
    this.navCtrl.push(ReviewbookingPage)
  }

}
