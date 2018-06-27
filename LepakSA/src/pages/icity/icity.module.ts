import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcityPage } from './icity';

@NgModule({
  declarations: [
    IcityPage,
  ],
  imports: [
    IonicPageModule.forChild(IcityPage),
  ],
})
export class IcityPageModule {}
