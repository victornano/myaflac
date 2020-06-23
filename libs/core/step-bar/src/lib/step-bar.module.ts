import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepBarComponent } from './step-bar.component';

@NgModule({
  declarations: [StepBarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    StepBarComponent
  ]
})
export class StepBarModule { }
