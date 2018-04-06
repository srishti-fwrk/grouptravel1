import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightformPage } from './flightform';

@NgModule({
  declarations: [
    FlightformPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightformPage),
  ],
})
export class FlightformPageModule {}
