import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-getstarted',
  templateUrl: 'getstarted.html'
})
export class GetstartedPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
}
  opensignuppage(){
	  this.navCtrl.push(SignupPage)
  }

  login(){
	  this.navCtrl.push(SigninPage)
  }

}
