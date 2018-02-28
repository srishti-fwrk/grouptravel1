import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { ArivalPage } from '../arival/arival';
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { CommonProvider } from '../../providers/common/common';

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
  
  info=[];
  info1=[];
  info2=[];
  track_id: any;
  sellrequest: any;
  origin= [];
  des= [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public common: CommonProvider,
    public toastCtrl: ToastController, 
    public loadingCtrl:LoadingController, public viewCtrl: ViewController) {    
    
      this.flightdetail = this.navParams.get('fdetail');
      console.log(this.flightdetail);
      
      this.source = this.flightdetail.source;
      this.destination = this.flightdetail.destination;
      this.flights = this.flightdetail.flights;
      this.track_id = this.flightdetail.track_id;
      console.log(this.track_id);
      console.log(this.flightdetail.flights.length);
      
      /*for(let i =0; i < this.flightdetail.flights.length; i++){
          for(let j =0; j < this.flightdetail.flights[i].FlightDetails.length; j++){
              this.origin['origin' + j]=this.flightdetail.flights[i].FlightDetails[j].Origin;
              this.des['destination' +j]=this.flightdetail.flights[i].FlightDetails[j].Destination;
              //this.flightdetail.flights[i].push({stops: this.des['destination' +j]});
          } 
                   
      }
      console.log(this.flightdetail.flights);
      console.log(this.des);*/
      
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

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightPage');
  }

  arival(flight,item){
      console.log(flight);
      console.log(item);
    //this.navCtrl.push(ArivalPage);
    
    
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });

    //var options = this.common.options;
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
                item: [item[0]]
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
        
        /*if(flight.FlightDetails.length == 2){
            console.log('2');
            var data_form = { 
        TrackId: this.track_id,
         ItinearyDetails: { 
            Segments: [ { 
                ValidatingCarrier: flight.ValidatingCarrier,
                Price: flight.FareDescription.PaxFareDetails[0].OtherInfo.GrossAmount, 
                item: [ {
                     FlightID: flight.FlightDetails[0].FlightID, 
                     FlightNum: flight.FlightDetails[0].FlightNum,
                     CarrierId: flight.FlightDetails[0].CarrierCode, 
                    AircraftType: flight.FlightDetails[0].AirCraftType, 
                    Origin: flight.FlightDetails[0].Origin, 
                    Destination: flight.FlightDetails[1].Destination, 
                    DepartureDateTime: flight.FlightDetails[0].DepartureDateTime,
                    ArrivalDateTime: flight.FlightDetails[1].ArrivalDateTime, 
                    ClassCode: flight.FlightDetails[0].ClassCode, 
                    EquipmentType: flight.FlightDetails[0].AirEquipType, 
                    OperatingCarrierId: flight.FlightDetails[0].CarrierCode, 
                    Meal: flight.FlightDetails[0].MealCode.MealCode, 
                    OrgTerminal: flight.FlightDetails[0].OrgTerminal, 
                    DestTerminal: flight.FlightDetails[1].DesTerminal, 
                    MajorClassCode: flight.FlightDetails[0].MajorClassCode, 
                    Baggage: flight.FlightDetails[0].Baggage, 
                    Duration: flight.FlightDetails[0].Duration + flight.FlightDetails[1].Duration, 
                    ApiProvider: flight.ApiProvider, 
                    MarriageGroup: flight.FlightDetails[0].MarriageGroup, 
                    IsStopAirport: flight.FlightDetails[0].IsStopAirport 
                } 
                ] 
            } 
            ] 
            } 
        }
            
        }*/
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



}
