import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomiePage } from './homie';

@NgModule({
  declarations: [
    HomiePage,
  ],
  imports: [
    IonicPageModule.forChild(HomiePage),
  ],
})
export class HomiePageModule {}
