import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ImportsComponent } from './imports/imports.component';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import 'hammerjs';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AnalyseComponent } from './analyse/analyse.component';
import { DonneeComponent } from './donnee/donnee.component';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDonneeService } from './shared/fake-db/fake.donne';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ImportsComponent,
    TopMenuComponent,
    AnalyseComponent,
    DonneeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ButtonsModule,
    ChartsModule,
    FormsModule,
    GridModule,
    UploadModule,
    PDFExportModule,
    DatePickerModule,
    ComboBoxModule,
    InputsModule,
    NgxUiLoaderModule,
    DialogsModule,
    SidebarModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemDonneeService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot([
      { path: '', component: AnalyseComponent, pathMatch: 'full' },
      { path: 'imports', component: ImportsComponent },
      { path: 'donnee', component: DonneeComponent },
    ])
  ],
  providers: [
    InMemDonneeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
