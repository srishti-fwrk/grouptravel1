import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';

import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { GooglePlus } from '@ionic-native/google-plus';
import { SplashPage } from '../pages/splash/splash';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ImagePicker } from '@ionic-native/image-picker';
import { Calendar } from '@ionic-native/calendar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Ionic2RatingModule } from 'ionic2-rating';
import { OpenWeatherMapModule } from 'ionic-openweathermap';
import { Firebase } from '@ionic-native/firebase';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
        MyApp,
	GetstartedPage,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
	SignupPage,
	SigninPage,
	ForgotPage,
	ChangepasswordPage,
	ResetpasswordPage,
	My_tripPage,
	ProfilePage,
        AttendeesPage,
        AddtripPage,
        InvitePage,
        LocationPage,
        SearchitineraryPage,
        DiscoverPage,
        GaldetailPage,
        ViewactivitiesPage,
        SearchPage,
        HoteldetailPage,
        FlightPage,
        ArivalPage,
        ReviewbookingPage,
        PassengerPage,
        CommentsPage,
        GalleryPage,
        ThankyouPage,
        RatingPage,
        MytripPage,
        EditprofilePage,
        BookingPage,
        UploadedPage,
        LikedPage,
        InvitefriendsPage,
        SplashPage,
        AddeventPage,
        HotelPage,
        RequestPage,
        PrivacyPage,
        TermsPage,
        GallerytwoPage,
        EditphotoPage,
        LocalityPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule,
    Ionic2RatingModule,
    OpenWeatherMapModule    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
        MyApp,
	GetstartedPage,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
	SignupPage,
	SigninPage,
	ForgotPage,
	ChangepasswordPage,
	ResetpasswordPage,
	My_tripPage,
	ProfilePage,
        AttendeesPage,
        AddtripPage,
        InvitePage,
        LocationPage,
        SearchitineraryPage,
        DiscoverPage,
        GaldetailPage,
        ViewactivitiesPage,
        SearchPage,
        HoteldetailPage,
        FlightPage,
        ArivalPage,
        ReviewbookingPage,
        PassengerPage,
        CommentsPage,
        GalleryPage,
        ThankyouPage,
        RatingPage,
        MytripPage,
        EditprofilePage,
        BookingPage,
        UploadedPage,
        LikedPage,
        InvitefriendsPage,
        SplashPage,
        AddeventPage,
        HotelPage,
        RequestPage,
        PrivacyPage,
        TermsPage,
        GallerytwoPage,
        EditphotoPage,
        LocalityPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    Facebook,
    Camera,
    GooglePlus,
    Geolocation,
    NativeGeocoder,
    ImagePicker,
    SocialSharing,
    Firebase,
    FileTransfer,
    StreamingMedia    
        
  ]
})
export class AppModule {}
