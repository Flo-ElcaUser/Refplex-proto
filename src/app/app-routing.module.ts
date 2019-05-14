import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DonneeComponent } from './donnee/donnee.component';
import { ImportsComponent } from './imports/imports.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'analyse', component: DashboardComponent },
  { path: 'donnee', component: DonneeComponent },
  { path: 'imports', component: ImportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
