import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HizmetlerPage } from './hizmetler';

@NgModule({
  declarations: [
    HizmetlerPage,
  ],
  imports: [
    IonicPageModule.forChild(HizmetlerPage),
  ],
})
export class HizmetlerPageModule {}
