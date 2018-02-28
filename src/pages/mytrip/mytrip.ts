import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatingPage } from '../rating/rating';

/**
 * Generated class for the MytripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytrip',
  templateUrl: 'mytrip.html',
})
export class MytripPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytripPage');
  }

  rating(){
    this.navCtrl.push(RatingPage)
  }

}
