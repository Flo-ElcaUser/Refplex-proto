import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SelectEvent, FileInfo, FileRestrictions } from '@progress/kendo-angular-upload';
import { WebApiService } from '../Services/WebApiService';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.scss']
})
export class ImportsComponent implements OnInit {

  public gridData: GridDataResult;
  public data: any[] = [];

  constructor(private webApiService: WebApiService) {
    this.loadProducts();
  }

  ngOnInit() {
    this.GetData();
  }

  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];


  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridData = {
      data: orderBy(this.data, this.sort),
      total: this.data.length
    };

    console.log("Tests: ", this.gridData);
  }

  public opened = false;
  public events: string[] = [];

  public onDragStart(): void {
    this.log('Drag Start');
  }

  public onDragEnd(): void {
    this.log('Drag End');
  }

  public onResizeStart(): void {
    this.log('Resize Start');
  }

  public onResizeEnd(): void {
    this.log('Resize End');
  }

  public onStateChange(state): void {
    this.log('State Changed to ' + state);
  }

  public onClose(): void {
    this.opened = false;
    this.log('Window was closed');
  }

  public open(): void {
    this.opened = true;
    this.log('Window was opened');
  }

  private log(event: string): void {
    this.events = [event].concat(this.events);
  }

  public GetData() {
    this.webApiService.getImports()
      .subscribe(data => {
        this.data = data;
        console.log("Test: ", this.data);
      });
  }



  saveUrl = 'api/SampleData/SaveFile'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  myFiles: Array<FileInfo> = [];

  selectEventHandler(e: SelectEvent) {
    e.files.forEach((file) => this.myFiles.push(file));
  }

  successEventHandler(e) {
    this.myFiles = e.response.json().uri;
    this.GetData();
  }

  uploadRestrictions: FileRestrictions = {
    allowedExtensions: ['.csv', '.xls']
  };


}
