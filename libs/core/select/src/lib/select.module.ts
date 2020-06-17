import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { IconModule } from '@aflac/core/icon';
import { MenuModule } from '@aflac/core/menu';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    IconModule,
    MenuModule
  ],
  exports: [SelectComponent]
})
export class SelectModule {
}
