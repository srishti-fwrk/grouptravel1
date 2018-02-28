import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the InvitefriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invitefriends',
  templateUrl: 'invitefriends.html',
})
export class InvitefriendsPage {
    
  image: any;
  id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public common: CommonProvider, public http: Http,
      public socialSharing: SocialSharing, public toastCtrl: ToastController) {
      
    this.id = localStorage.getItem('ID');
    this.viewProfile();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitefriendsPage');
  }
  
  socialsharing() {    

    this.socialSharing.share("Invite friend", null, null, "http://google.com")
      .then(() => {        
      },
      () => {
        let toast = this.toastCtrl.create({
          message: "failed",
          duration: 3000,
          position: 'middle'
        });
        toast.present();        
      })
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

}
