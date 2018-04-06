import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcommentsPage } from './icomments';

@NgModule({
  declarations: [
    IcommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(IcommentsPage),
  ],
})
export class IcommentsPageModule {}
