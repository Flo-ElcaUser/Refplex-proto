import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DonneeComponent } from './donnee/donnee.component';
import { AnalyseComponent } from './analyse/analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DonneeComponent,
    AnalyseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AnalyseComponent, pathMatch: 'full' },
      { path: 'donnee', component: DonneeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
