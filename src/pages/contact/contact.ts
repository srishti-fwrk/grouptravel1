import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { AboutPage } from '../about/about';
import { AddtripPage } from '../addtrip/addtrip';
import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  image: any;
  id: string;
  pet: string= "group";
  constructor(public navCtrl: NavController,public common: CommonProvider,public http: Http) {

    this.id = localStorage.getItem('ID');
  this.viewProfile();
  }

  payments(){
    this.navCtrl.push(ContactPage);
  }
  
  chat(){
    this.navCtrl.push(AboutPage);
  }

  itinerary(){
    this.navCtrl.push(AddtripPage);
  }

  gallery(){
    this.navCtrl.push(GalleryPage);
  }

  comments(){
    this.navCtrl.push(CommentsPage);
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
