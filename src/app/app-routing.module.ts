import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DonneeComponent } from './donnee/donnee.component';
import { ImportsComponent } from './imports/imports.component';
import { AnalyseComponent } from './analyse/analyse.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'analyse', component: AnalyseComponent },
  { path: 'donnee', component: DonneeComponent },
  { path: 'imports', component: ImportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
