import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PoliciesComponent } from './policies.component';
import { CardModule } from '@aflac/core/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PoliciesComponent },
    ]),
  ],
  declarations: [PoliciesComponent],
})
export class WebsitePoliciesModule {}
