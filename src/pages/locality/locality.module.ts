import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalityPage } from './locality';

@NgModule({
  declarations: [
    LocalityPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalityPage),
  ],
})
export class LocalityPageModule {}
