import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ClaimsComponent } from './claims.component';
import { CardModule } from '@aflac/core/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ClaimsComponent },
    ]),
  ],
  declarations: [ClaimsComponent],
})
export class WebsiteClaimsModule {}
