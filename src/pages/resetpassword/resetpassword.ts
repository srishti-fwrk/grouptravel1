import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';

@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html'
})
export class ResetpasswordPage {

  constructor(public navCtrl: NavController) {

  }
  openchangepassword(){
	  this.navCtrl.push(ChangepasswordPage)
  }

}
