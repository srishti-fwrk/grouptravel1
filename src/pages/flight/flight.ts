import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { ArivalPage } from '../arival/arival';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';
import { FlightdetailPage } from '../flightdetail/flightdetail';
import { DiscoverPage } from '../discover/discover';

/**
 * Generated class for the FlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight',
  templateUrl: 'flight.html',
  providers: [HttpModule, CommonProvider]
})
export class FlightPage {
    
  optionss: RequestOptions;
  
  flightdetail: any;
  source: any;
  destination: any;
  flights: any;
  no: any;
  data: any = {
      filter: ''
  };
  info=[];
  info1=[];
  info2=[];
  track_id: any;
  sellrequest: any;
  origin= [];
  des= [];
  filterbit: any = 0;
  
  flightdetail2: any;
  d: any;
  result = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public common: CommonProvider,
    public toastCtrl: ToastController, 
    public loadingCtrl:LoadingController, public viewCtrl: ViewController) {    
    
      this.flightdetail = this.navParams.get('fdetail');
      console.log(this.flightdetail);
      
      if(this.flightdetail){
      this.source = this.flightdetail.source;
      this.destination = this.flightdetail.destination;
      this.flights = this.flightdetail.flights;
      this.track_id = this.flightdetail.track_id;
      console.log(this.track_id);
      console.log(this.flightdetail.flights.length);
      
      
      for(let i =0; i < this.flightdetail.flights.length; i++){
          //this.no = this.flightdetail.flights[i].Connection.Onward.NoOfStops;
          this.info1 = [];
          this.no = (this.flightdetail.flights[i].FlightDetails.length) - 1;            
            
            for(let j=0; j<this.flightdetail.flights[i].FlightDetails.length; j++){
            
                this.info1.push({ 
                    FlightID: this.flightdetail.flights[i].FlightDetails[j].FlightID, 
                    FlightNum: this.flightdetail.flights[i].FlightDetails[j].FlightNum,
                    CarrierId: this.flightdetail.flights[i].FlightDetails[j].CarrierCode, 
                    AircraftType: this.flightdetail.flights[i].FlightDetails[j].AirCraftType, 
                    Origin: this.flightdetail.flights[i].FlightDetails[j].Origin, 
                    Destination: this.flightdetail.flights[i].FlightDetails[j].Destination, 
                    DepartureDateTime: this.flightdetail.flights[i].FlightDetails[j].DepartureDateTime,
                    ArrivalDateTime: this.flightdetail.flights[i].FlightDetails[j].ArrivalDateTime, 
                    ClassCode: this.flightdetail.flights[i].FlightDetails[j].ClassCode, 
                    EquipmentType: this.flightdetail.flights[i].FlightDetails[j].AirEquipType, 
                    OperatingCarrierId: this.flightdetail.flights[i].FlightDetails[j].CarrierCode, 
                    Meal: this.flightdetail.flights[i].FlightDetails[j].MealCode.MealCode, 
                    OrgTerminal: this.flightdetail.flights[i].FlightDetails[j].OrgTerminal, 
                    DestTerminal: this.flightdetail.flights[i].FlightDetails[j].DesTerminal, 
                    MajorClassCode: this.flightdetail.flights[i].FlightDetails[j].MajorClassCode, 
                    Baggage: this.flightdetail.flights[i].FlightDetails[j].Baggage, 
                    Duration: this.flightdetail.flights[i].FlightDetails[j].Duration, 
                    ApiProvider: this.flightdetail.flights[i].ApiProvider, 
                    MarriageGroup: this.flightdetail.flights[i].FlightDetails[j].MarriageGroup, 
                    IsStopAirport: this.flightdetail.flights[i].FlightDetails[j].IsStopAirport                    
                });
            
            }
                                    
             this.info.push({
             n: this.no,
             s: this.flightdetail.flights[i].FlightDetails[0].Origin,
             d: this.flightdetail.flights[i].FlightDetails[this.no].Destination,
             s_date: this.flightdetail.flights[i].FlightDetails[0].DepartureDateTime,
             d_date: this.flightdetail.flights[i].FlightDetails[this.no].ArrivalDateTime,
             airline: this.flightdetail.flights[i].FlightDetails[0].AirlineName,
             price: this.flightdetail.flights[i].FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
             flights: this.flightdetail.flights[i],
             dates: this.info1           
             });           
        
      }
      console.log(this.info);
      }
      
      this.flightdetail2 = this.navParams.get('f2detail');
      console.log(this.flightdetail2);
      
      if(this.flightdetail2){
          
      this.source = this.flightdetail2.source;
      this.destination = this.flightdetail2.destination;
      console.log(this.destination);
      this.flights = this.flightdetail2.flights;
      this.track_id = this.flightdetail2.track_id;
      console.log(this.track_id);
      console.log(this.flightdetail2.flights.length);
      
      
      for(let i =0; i < this.flightdetail2.flights.length; i++){
          //this.no = this.flightdetail.flights[i].Connection.Onward.NoOfStops;
          this.info1 = [];
          console.log(this.flightdetail2.flights[i].FlightDetails);
          this.no = (this.flightdetail2.flights[i].FlightDetails.length) - 4; 
//          this.d = (this.flightdetail2.flights[i].FlightDetails.length - 1) - 2;           
            
            for(let j=0; j<this.flightdetail2.flights[i].FlightDetails.length; j++){
            
                this.info1.push({ 
                    FlightID: this.flightdetail2.flights[i].FlightDetails[j].FlightID, 
                    FlightNum: this.flightdetail2.flights[i].FlightDetails[j].FlightNum,
                    CarrierId: this.flightdetail2.flights[i].FlightDetails[j].CarrierCode, 
                    AircraftType: this.flightdetail2.flights[i].FlightDetails[j].AirCraftType, 
                    Origin: this.flightdetail2.flights[i].FlightDetails[j].Origin, 
                    Destination: this.flightdetail2.flights[i].FlightDetails[j].Destination, 
                    DepartureDateTime: this.flightdetail2.flights[i].FlightDetails[j].DepartureDateTime,
                    ArrivalDateTime: this.flightdetail2.flights[i].FlightDetails[j].ArrivalDateTime, 
                    ClassCode: this.flightdetail2.flights[i].FlightDetails[j].ClassCode, 
                    EquipmentType: this.flightdetail2.flights[i].FlightDetails[j].AirEquipType, 
                    OperatingCarrierId: this.flightdetail2.flights[i].FlightDetails[j].CarrierCode, 
                    Meal: this.flightdetail2.flights[i].FlightDetails[j].MealCode.MealCode, 
                    OrgTerminal: this.flightdetail2.flights[i].FlightDetails[j].OrgTerminal, 
                    DestTerminal: this.flightdetail2.flights[i].FlightDetails[j].DesTerminal, 
                    MajorClassCode: this.flightdetail2.flights[i].FlightDetails[j].MajorClassCode, 
                    Baggage: this.flightdetail2.flights[i].FlightDetails[j].Baggage, 
                    Duration: this.flightdetail2.flights[i].FlightDetails[j].Duration, 
                    ApiProvider: this.flightdetail2.flights[i].ApiProvider, 
                    MarriageGroup: this.flightdetail2.flights[i].FlightDetails[j].MarriageGroup, 
                    IsStopAirport: this.flightdetail2.flights[i].FlightDetails[j].IsStopAirport                    
                });                
                
                if(this.flightdetail2.flights[i].FlightDetails[j].Destination == this.destination){
                    //console.log(this.flightdetail2.flights[i].FlightDetails[j].Destination);
                    this.d = j;
                    //console.log(this.d);                    
                }
                            
            }
                                    
             this.info.push({
             n: this.no,
             s: this.flightdetail2.flights[i].FlightDetails[0].Origin,
             d: this.flightdetail2.flights[i].FlightDetails[this.d].Destination,
             s_date: this.flightdetail2.flights[i].FlightDetails[0].DepartureDateTime,
             d_date: this.flightdetail2.flights[i].FlightDetails[this.d].ArrivalDateTime,
             airline: this.flightdetail2.flights[i].FlightDetails[0].AirlineName,
             price: this.flightdetail2.flights[i].FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount,
             flights: this.flightdetail2.flights[i],
             dates: this.info1           
             });           
        //this.destination = this.flightdetail2.flights[i].FlightDetails[this.d].DestinationAirportCity;
      }
      console.log(this.info);
      }
      
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightPage');
  }
  
  back(){
      this.navCtrl.push(DiscoverPage);
  }
  
  filterSelect(chose){
      var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    Loading.present().then(() => {
      if(chose == 'lowest'){
          Loading.dismiss();
          this.filterbit = 0;
      }else if(chose == 'highest'){
          Loading.dismiss();
          this.filterbit = 1;
      }
     
     }); 
  }

  arival(flight,item,price){
      
      console.log(flight);
      console.log(item);
      console.log(item.length);
       console.log(price);
       
//       for(let i = 0; i < item.length; i++){
           
       
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    let headers = new Headers();
    headers.append('apikey',  'f391cf76-be55-4');
    headers.append('mode',  'sandbox');
    headers.append('Content-Type',  'application/json');
    this.optionss= new RequestOptions({ headers: headers });

    var data_form = { 
        TrackId: this.track_id,
         ItinearyDetails: { 
            Segments: [ { 
                ValidatingCarrier: flight.ValidatingCarrier,
                Price: flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount, 
                item: item
                 /*[ {
                     FlightID: flight.FlightDetails[0].FlightID, 
                     FlightNum: flight.FlightDetails[0].FlightNum,
                     CarrierId: flight.FlightDetails[0].CarrierCode, 
                    AircraftType: flight.FlightDetails[0].AirCraftType, 
                    Origin: flight.FlightDetails[0].Origin, 
                    Destination: flight.FlightDetails[0].Destination, 
                    DepartureDateTime: flight.FlightDetails[0].DepartureDateTime,
                    ArrivalDateTime: flight.FlightDetails[0].ArrivalDateTime, 
                    ClassCode: flight.FlightDetails[0].ClassCode, 
                    EquipmentType: flight.FlightDetails[0].AirEquipType, 
                    OperatingCarrierId: flight.FlightDetails[0].CarrierCode, 
                    Meal: flight.FlightDetails[0].MealCode.MealCode, 
                    OrgTerminal: flight.FlightDetails[0].OrgTerminal, 
                    DestTerminal: flight.FlightDetails[0].DesTerminal, 
                    MajorClassCode: flight.FlightDetails[0].MajorClassCode, 
                    Baggage: flight.FlightDetails[0].Baggage, 
                    Duration: flight.FlightDetails[0].Duration, 
                    ApiProvider: flight.ApiProvider, 
                    MarriageGroup: flight.FlightDetails[0].MarriageGroup, 
                    IsStopAirport: flight.FlightDetails[0].IsStopAirport 
                } 
                ]*/ 
            } 
            ] 
            } 
        }
     
    console.log(data_form);    
    
    Loading.present().then(() => {
    this.http.post('https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.1/look', data_form, this.optionss)
      .map(res => res.json())
      .subscribe(data => {
        Loading.dismiss();
        console.log(data);

        if (data.Message == 'success') {
            
          this.sellrequest = data.SellRequestId;
          console.log(this.sellrequest);
          console.log(data.FlightTimesAndDuration[0].Duration);
          console.log(data.ItinearyDetails.Segments[0].item);
          
          if(this.flightdetail){
              var send = {
              get: data,
              flight: flight,
              item: item,
              trackid: this.track_id,
              fdetail: this.flightdetail,
              price: data.PricingInfo[0].GrossAmount,
              currency: data.PricingInfo[0].CurrencyCode,
              bit: 0,
              request: data.SellRequestId
          }
          }else if(this.flightdetail2){
            var send = {
              get: data,
              flight: flight,
              item: item,
              trackid: this.track_id,
              fdetail: this.flightdetail2,
              price: data.PricingInfo[0].GrossAmount,
              currency: data.PricingInfo[0].CurrencyCode,
              bit: 1,
              request: data.SellRequestId
          }  
          }
          
          this.result.push(send);
          
          this.navCtrl.push(FlightdetailPage,{
              send: send
          });
          
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
//  }
//  this.navCtrl.push(FlightdetailPage,{
//              send: this.result
//          });
  }



}
