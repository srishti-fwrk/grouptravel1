import { Component, ViewChild} from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, ToastController, ActionSheetController, LoadingController, ViewController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ImagePicker } from '@ionic-native/image-picker';
import { EditphotoPage } from '../editphoto/editphoto';
import { LocalityPage } from '../locality/locality';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';

@Component({
  selector: 'page-gallerytwo',
  templateUrl: 'gallerytwo.html',
  providers: [Camera,FileTransfer,StreamingMedia,MediaCapture]
  
})
export class GallerytwoPage {
    
    @ViewChild('myVideo') myVideo: any;
    
    public pet;
    photos: string[];
    id: any;
    trip_id: any;
    images: any;
    vid: any;
    videos: any;
    
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    if(this.pet == 'library'){
            this.viewallImages();
        }else if(this.pet == 'camera'){
            this.viewallImages();
        }else if(this.pet == 'video'){
            this.videoListing();
        }
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider, public http: Http,
    public camera: Camera, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public viewCtrl: ViewController, public imagePicker: ImagePicker,
    public modalCtrl: ModalController, public transfer: FileTransfer,
    public streamingMedia: StreamingMedia, private mediaCapture: MediaCapture) {
      
	this.pet='library';
        if(this.pet == 'library'){
            this.viewallImages();
        }else if(this.pet == 'camera'){
            this.viewallImages();
        }else if(this.pet == 'video'){
            this.videoListing();
        }
        this.id = localStorage.getItem('ID');
        this.trip_id = localStorage.getItem('TripID');   
        this.viewallImages();       
  }
  
  videoCapture(){
      
      let options: CaptureVideoOptions = {
       limit: 1 
       };
 
    this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {
        //alert(JSON.stringify(data));
        //alert(JSON.stringify(data[0].fullPath));
          this.vid = data[0].fullPath;
          
      const fileTransfer: FileTransferObject = this.transfer.create();
      let currentName =  this.vid.substring(this.vid.lastIndexOf('/') + 1);
    
      let options1: FileUploadOptions = {
        fileKey: 'file',          
        fileName: currentName,
        headers: {
           
        },        
        params: {
          user_id: this.id,
          trip_id: this.trip_id
        },
        chunkedMode: false,
        mimeType: 'video/quicktime'
      }     
      
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
        });
        Loading.present().then(() => {
      fileTransfer.upload(this.vid, this.common.base_url + 'galleries/videoupload', options1)           
      .then((data) => {
          Loading.dismiss();
          
          let toast = this.toastCtrl.create({
            message: 'Video Uploaded successfully',
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
          this.videoListing();
       
        }).catch((error)=>{
          Loading.dismiss();
          
          //alert(JSON.stringify(error));
           
       });
      });
        
        },
        (err: CaptureError) => {        
        this.videoListing();
        }
      );
  } 
  
  videoPlayy(url){
      
      console.log(url);
      let options: StreamingVideoOptions = {
        successCallback: () => { console.log('Video played') },
        errorCallback: (e) => { console.log('Error streaming') },
        orientation: 'landscape'
      };
//https://path/to/video/stream
      this.streamingMedia.playVideo(url, options);
  }
  
  selectVideo(){
        //let video = this.myVideo.nativeElement;
      
      const options: CameraOptions = {
          sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          mediaType: this.camera.MediaType.VIDEO,
      };
      this.camera.getPicture(options).then((data) =>{
          
          this.vid = data;
          
      const fileTransfer: FileTransferObject = this.transfer.create();
      let currentName =  this.vid.substring(this.vid.lastIndexOf('/') + 1);
    
      let options1: FileUploadOptions = {
        fileKey: 'file',          
        fileName: currentName,
        headers: {
           
        },        
        params: {
          user_id: this.id,
          trip_id: this.trip_id
        },
        chunkedMode: false,
        mimeType: 'video/quicktime'
      }     
      
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
        });
        Loading.present().then(() => {
      fileTransfer.upload(this.vid, this.common.base_url + 'galleries/videoupload', options1)           
      .then((data) => {
          Loading.dismiss();
          
          let toast = this.toastCtrl.create({
            message: 'Video Uploaded successfully',
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
          this.videoListing();
       
        }).catch((error)=>{
          Loading.dismiss();
          
          //alert(JSON.stringify(error));
           
       });
      });

    
          
      })
  }
  
  videoListing(){
           
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      trip_id: this.trip_id      
    }
    
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'galleries/videolisting', Serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loading.dismiss();
          //alert(JSON.stringify(data));
          console.log(data);
          if (data.status == 0) {

            this.videos = data.data;
           //alert(JSON.stringify(this.videos));
              
            let toast = this.toastCtrl.create({
              message: data.msg,
              duration: 3000,
              position: 'middle'
            });
            toast.present();

          } else {

            let toast = this.toastCtrl.create({
              message: data.msg,
              duration: 3000,
              position: 'middle'
            });
            toast.present();

          }
        }, error => {
          Loading.dismiss();
          let toast = this.toastCtrl.create({
            message: "Check your Network Connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        });
    });

  }
  
  back(){
      this.navCtrl.push(GalleryPage);
  }
  
  opensingleImage(imgdata){
      this.navCtrl.push(EditphotoPage,{
          send: imgdata
      });
  }
  
  viewallImages(){

    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    var options = this.common.options;

    var data_form = {
      user_id: this.id,
      trip_id: this.trip_id      
    }
    
    console.log(data_form);

    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);

    Loading.present().then(() => {
      this.http.post(this.common.base_url + 'galleries/viewimage', Serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loading.dismiss();
         
          console.log(data);
          if (data.status == 0) {

            this.images = data.data;
            console.log(this.images);
           
            let toast = this.toastCtrl.create({
              message: data.msg,
              duration: 3000,
              position: 'middle'
            });
            toast.present();

          } else {

            let toast = this.toastCtrl.create({
              message: data.msg,
              duration: 3000,
              position: 'middle'
            });
            toast.present();

          }
        }, error => {
          Loading.dismiss();
          let toast = this.toastCtrl.create({
            message: "Check your Network Connection",
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        });
    });

  }
  
    openImagePicker() {
        
    let options = {
      maximumImagesCount: 5,
      outputType: 1,
      quality: 10      
    }
    this.photos = [];
    this.imagePicker.getPictures(options)
      .then((results) => {

        for (var i = 0; i < results.length; i++) {

          this.photos.push(results[i]);

        }
        console.log(this.photos);

        var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          showBackdrop: false,
          cssClass: 'loader'
        });

        var options = this.common.options;

        var data_form = {
          user_id: this.id,
          trip_id: this.trip_id,
          img: this.photos
        }
        //alert(JSON.stringify(data_form));
        console.log(data_form);

        var Serialized = this.common.serializeObj(data_form);
        console.log(Serialized);

        Loading.present().then(() => {
          this.http.post(this.common.base_url + 'galleries/uploadgallery', Serialized, options)
            .map(res => res.json())
            .subscribe(data => {
              Loading.dismiss();

              console.log(data);
              if (data.status == 0) {
                  this.viewallImages();
                //this.images = data.image;

                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();

              } else {

                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();

              }
            }, error => {
              Loading.dismiss();
              let toast = this.toastCtrl.create({
                message: "Check your Network Connection",
                duration: 3000,
                position: 'middle'
              });
              toast.present();
            });
        });


      }, (err) => { console.log(err) });
  }
  
  openCamera(){      
      
          const options: CameraOptions = {
            quality: 10,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500,
          }
          
          this.camera.getPicture(options).then((imageData) => {
           // this.dpimage = 'data:image/jpeg;base64,' + imageData;
            
            //this.dpimage = imageData;

            var Loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              showBackdrop: false,
              cssClass: 'loader'
            });

            var data_img = {
                user_id: this.id,
                trip_id: this.trip_id,
                img: imageData
            }

            var serialized_img = this.common.serializeObj(data_img);
            console.log(serialized_img);

            let options = this.common.options;

            var url: string = this.common.base_url + 'galleries/uploadgallery';
            Loading.present().then(() => {
            this.http.post(url, serialized_img, options).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              
                console.log(data);
              if (data.status == 0) {
                  this.viewallImages();
                //this.images = data.image;

                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();

              } else {

                let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();

              }
            
            })
          }, (err) => {
            Loading.dismiss();
            
            let toast = this.toastCtrl.create({
              message: "Server not Working,Please Check your Internet Connection and try again!",
              duration: 3000
            });
            toast.present();
          });
        });
      
  }

}
