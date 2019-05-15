import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';
import { DonneeComponent } from './donnee/donnee.component';
import { ImportsComponent } from './imports/imports.component';
import { SaisieComponent } from './saisie/saisie.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { AnalyseComponent } from './analyse/analyse.component';
import { WebApiService } from './Services/WebApiService';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DonneeComponent,
    ImportsComponent,
    SaisieComponent
    AnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    LayoutModule,
    PDFExportModule,
    ButtonsModule,
    UploadModule,
    HttpClientModule,
    GridModule,
    FormsModule,
    DialogsModule,
    DateInputsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
