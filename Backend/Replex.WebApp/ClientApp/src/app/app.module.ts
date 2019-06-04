import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ImportsComponent } from './components/imports/imports.component';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import 'hammerjs';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { DonneeComponent } from './components/donnee/donnee.component';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';

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
    RouterModule.forRoot([
      { path: '', component: AnalyseComponent, pathMatch: 'full' },
      { path: 'imports', component: ImportsComponent },
      { path: 'donnee', component: DonneeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
