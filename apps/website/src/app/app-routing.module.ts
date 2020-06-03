import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'claims',
    loadChildren: () =>
      import('@aflac/website/claims').then((m) => m.WebsiteClaimsModule),
  },
  {
    path: 'policies',
    loadChildren: () =>
      import('@aflac/website/policies').then((m) => m.WebsitePoliciesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
