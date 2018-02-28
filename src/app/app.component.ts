import { Component, ViewChild } from '@angular/core';

import { Platform, Nav, MenuController, ToastController, LoadingController, Events, ModalController, Config, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GetstartedPage } from '../pages/getstarted/getstarted';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ForgotPage } from '../pages/forgot/forgot';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword'; 
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { My_tripPage } from '../pages/my_trip/my_trip';
import { ProfilePage } from '../pages/profile/profile';
import { AttendeesPage } from '../pages/attendees/attendees';
import { AddtripPage } from '../pages/addtrip/addtrip';
import { InvitePage } from '../pages/invite/invite';
import { LocationPage } from '../pages/location/location';
import { SearchitineraryPage } from '../pages/searchitinerary/searchitinerary';
import { DiscoverPage } from '../pages/discover/discover';
import { GaldetailPage } from '../pages/galdetail/galdetail';
import { ViewactivitiesPage } from '../pages/viewactivities/viewactivities';
import { SearchPage } from '../pages/search/search';
import { HoteldetailPage } from '../pages/hoteldetail/hoteldetail';
import { FlightPage } from '../pages/flight/flight';
import { ArivalPage } from '../pages/arival/arival';
import { ReviewbookingPage } from '../pages/reviewbooking/reviewbooking';
import { PassengerPage } from '../pages/passenger/passenger';
import { CommentsPage } from '../pages/comments/comments';
import { GalleryPage } from '../pages/gallery/gallery';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { RatingPage } from '../pages/rating/rating';
import { MytripPage } from '../pages/mytrip/mytrip';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { BookingPage } from '../pages/booking/booking';
import { UploadedPage } from '../pages/uploaded/uploaded';
import { LikedPage } from '../pages/liked/liked';
import { InvitefriendsPage } from '../pages/invitefriends/invitefriends';
import { AddeventPage } from '../pages/addevent/addevent';
import { HotelPage } from '../pages/hotel/hotel';
import { RequestPage } from '../pages/request/request';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsPage } from '../pages/terms/terms';
import { GallerytwoPage } from '../pages/gallerytwo/gallerytwo';
import { EditphotoPage } from '../pages/editphoto/editphoto';
import { LocalityPage } from '../pages/locality/locality';

import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { GooglePlus } from '@ionic-native/google-plus';
import { CommonProvider } from '../providers/common/common';
import 'rxjs/add/operator/map';
import { SplashPage } from '../pages/splash/splash';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ImagePicker } from '@ionic-native/image-picker';
import { Calendar } from '@ionic-native/calendar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Firebase } from '@ionic-native/firebase';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  
}

export class NotificationModel {
  public body: string;
  public title: string;
  public tap: boolean
}

@Component({
  templateUrl: 'app.html',
  providers: [HttpModule,CommonProvider,Facebook,GooglePlus,Firebase]
})
export class MyApp {
  log: string;
  user: any;
  id: any;
  image: any;
  data: any = '';
  guser: any;  
  
  rootPage: any;

 @ViewChild(Nav) nav: Nav;
 
pages: PageInterface[] = [
  { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0},
  /*{ title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 1},
  { title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 2},
  { title: 'Discover', pageName: 'TabsPage', tabComponent: 'DiscoverPage', index: 3},
  { title: 'Gallery', pageName: 'TabsPage', tabComponent: 'GalleryPage', index: 4}*/
  ]

  constructor(
    platform: Platform,
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menu: MenuController,
    public common: CommonProvider,public http: Http,
    public toastCtrl: ToastController,
    public loadingCtrl:LoadingController,
    public events: Events,
    private facebook: Facebook, private googlePlus: GooglePlus,
    public modalCtrl: ModalController,private config: Config,
    public firebase: Firebase, public alertCtrl: AlertController,
    public socialSharing: SocialSharing
   ) {
  platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
    //splashScreen.hide();
    setTimeout(() => {
      splashScreen.hide();
    }, 100);
  
    //this.hideSplashScreen();

    /*let splash = modalCtrl.create(SplashPage);
            splash.present();*/
    this.config.set("scrollPadding", false);
    this.config.set("scrollAssist", false);
    this.config.set("autoFocusAssist", true);

    this.config.set("android", "scrollAssist", true );
    this.config.set("android", "autoFocusAssist", "delay");
    
    if(localStorage.getItem('ID')){
      this.rootPage = TabsPage;
      //this.rootPage = GalleryPage; 
    }else{
      this.rootPage = GetstartedPage;
      
    }
   this.initializeFireBaseIos(); 
  });
  
  this.events.subscribe('user:login', () => {
       this.viewProfile();
     });
}

 private initializeFireBaseIos(): Promise<any> {
		return this.firebase.grantPermission()
			.catch(error => console.error('Error getting permission', error))
			.then(() => {
				this.firebase.getToken()
					.catch(error => console.error('Error getting token', error))
					.then(token => {

						console.log(`The token is ${token}`);

						Promise.all([
							this.firebase.subscribe('firebase-app'),
							this.firebase.subscribe('ios'),
							this.firebase.subscribe('userid-2')
						]).then((result) => {

							if (result[0]) console.log(`Subscribed to FirebaseDemo`);
							if (result[1]) console.log(`Subscribed to iOS`);
							if (result[2]) console.log(`Subscribed as User`);

							this.subscribeToPushNotificationEvents();
						});
					});
			})

  }
  //this.firebase.grantPermission();
  private saveToken(token: any): Promise<any> {
		// Send the token to the server
		console.log('Sending token to the server...');
		return Promise.resolve(true);
  } 
 


  	private subscribeToPushNotificationEvents(): void {
		//alert("hello everyone");
		// Handle token refresh
		this.firebase.onTokenRefresh().subscribe(
			token => {
				console.log(`The new token is ${token}`);
				this.saveToken(token);
			},
			error => {
				console.error('Error refreshing token', error);
			});

		// Handle incoming notifications
		this.firebase.onNotificationOpen().subscribe(
			(notification: NotificationModel) => {
				//alert('alert - > '+ JSON.stringify(notification))

				!notification.tap
					?  console.log('The user was using the app when the notification arrived...') 
					: console.log('The app was closed when the notification arrived...')
					// alert starts
				

				let notificationAlert = this.alertCtrl.create({
					title: '<center>' + notification.title + '</center>',
					message: notification.body,
					buttons: [{
							text: 'Ignore',
							role: 'cancel'
						}, {
							text: 'View',
							handler: () => {
								//TODO: Your logic here
								this.guser = localStorage.getItem('ID');
								//alert('user' + this.user)
								if (this.guser == undefined || this.guser == null) {
									this.nav.push(SigninPage);
								} else {
									this.nav.push(RequestPage, { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
								}

							}
						}]
				});
				if(notification.title != undefined){
					notificationAlert.present();
				}

			
			},
			error => {
				console.error('Error getting the notification', error);
                                //alert(JSON.stringify(error));
			});
	}

/*hideSplashScreen() {
  if (splashScreen) {
    setTimeout(() => {
      splashScreen.hide();
    }, 100);
   }
  }*/

viewProfile(){

this.id = localStorage.getItem('ID');
  var options = this.common.options;

  var data_form = {
    id: this.id
  }
    
  var Serialized = this.common.serializeObj(data_form);
  console.log(Serialized);
 
    this.http.post(this.common.base_url + 'users/user', Serialized, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      
      if (data.status == 0) {
       
         this.image = data.data.User.image; 
                         
      }else {
                      
      }
    }, error => {
            
    });
  

}

logOut(){

  this.log = localStorage.getItem('Status');
  
  if(this.log == '0'){

    localStorage.clear();
     this.nav.push(GetstartedPage);

  }else if(this.log == '1'){
     
     if(localStorage.getItem('fb')){

      this.facebook.logout().then((sucess) => {
     
        localStorage.clear();
       
        this.nav.push(GetstartedPage);
      }).catch((error) => {
       
         console.log(error)
      })

     }else if(localStorage.getItem('google')){

      this.googlePlus.logout().then((response)=> {
              
        localStorage.clear();
        this.nav.push(GetstartedPage);
      }).catch((error) => {
   localStorage.clear();
   this.nav.push(GetstartedPage);

    })

     }else{
      this.nav.push(GetstartedPage);
     }

  }

}


  openPage(page: PageInterface) {
    let params = {};
console.log(page.index)
   // return false;
   
   if (page.index == 0) {
    this.nav.push(TabsPage);
} else{
    if (page.index) {
      console.log('00000');
      console.log(page.index);
      params = { 
        tabIndex: page.index};
    }
  }
    if (this.nav.getActiveChildNav() && page.index != undefined) {
        console.log('77');
        this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }
    isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }
  

ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewDidLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
   }
   
   termsnc(){
       this.nav.push(TermsPage);
   }
    
   ppolicy(){
      this.nav.push(PrivacyPage); 
   }
   
   book(){
     this.nav.push(BookingPage);
   }

   upload(){
    this.nav.push(UploadedPage);
  }

  liked(){
    this.nav.push(LikedPage);
  }

  profile(){
    this.nav.push(ProfilePage);
  }

  friend(){
      
      this.socialSharing.share("Invite friend", null, null, "http://google.com")
      .then(() => {        
      },
      () => {
        let toast = this.toastCtrl.create({
          message: "Invite not sent",
          duration: 3000,
          position: 'middle'
        });
        toast.present();        
      })
    //this.nav.push(InvitefriendsPage);
  }

dismiss(){
  this.menu.toggle();
   
}

}
