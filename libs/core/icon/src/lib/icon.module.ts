import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [IconComponent]
})
export class IconModule {
}
