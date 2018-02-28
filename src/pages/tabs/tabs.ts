import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DiscoverPage } from '../discover/discover';
import { GalleryPage } from '../gallery/gallery';
import { My_tripPage } from '../my_trip/my_trip';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  bit: any = '0';

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab4Root = DiscoverPage;
  //tab5Root = GalleryPage;
  
  constructor(public events: Events) {

    this.bit = localStorage.getItem('bit');
    
    console.log(this.bit);
    if(HomePage){
      console.log('home');
      this.bit = 1;
    }
    
  }

  tabIs(tab) {
    var br = tab._btnId.split('-');
    console.log(tab);
    console.log(br);
    console.log(br[2]);
    console.log(br[1]);
    
    
  }

}
