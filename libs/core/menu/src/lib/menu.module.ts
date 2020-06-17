import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTriggerDirective } from './menu-trigger.directive';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item.component';
import { IconModule } from '@aflac/core/icon';

@NgModule({
  declarations: [MenuTriggerDirective, MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [MenuTriggerDirective, MenuComponent, MenuItemComponent]
})
export class MenuModule {
}
