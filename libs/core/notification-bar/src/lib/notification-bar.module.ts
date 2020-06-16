import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from './notification-bar.component';
import { IconModule } from '@aflac/core/icon';

@NgModule({
  declarations: [NotificationBarComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    NotificationBarComponent
  ]
})
export class NotificationBarModule { }
