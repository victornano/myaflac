import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PoliciesComponent } from './policies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PoliciesComponent },
    ]),
  ],
  declarations: [PoliciesComponent],
})
export class WebsitePoliciesModule {}
