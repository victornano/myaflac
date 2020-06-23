import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBannerComponent } from './alert-banner.component';

@NgModule({
  declarations: [AlertBannerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AlertBannerComponent
  ]
})
export class AlertBannerModule { }
