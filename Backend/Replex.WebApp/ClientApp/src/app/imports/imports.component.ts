import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SelectEvent, FileInfo, FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.scss']
})
export class ImportsComponent implements OnInit {

  public gridData: GridDataResult;
  public data: any[] = sampleProducts;

  constructor() {
    this.loadProducts();
  }

  ngOnInit() {
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



  saveUrl = 'api/SampleData/SaveFile'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  myFiles: Array<FileInfo> = [];

  selectEventHandler(e: SelectEvent) {
    e.files.forEach((file) => this.myFiles.push(file));
  }

  successEventHandler(e) {
    this.myFiles = e.response.json().uri;
  }

  uploadRestrictions: FileRestrictions = {
    allowedExtensions: ['.csv', '.xls']
  };


}

export const sampleProducts = [
  {
    "DateImport": "14-11-2016",
    "Transaction": "13,237",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "05-07-2017",
    "Transaction": "9,801",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "26-07-2015",
    "Transaction": "4,359",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "28-07-2015",
    "Transaction": "11,190",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "08-11-2014",
    "Transaction": "12,637",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "14-02-2015",
    "Transaction": "5,201",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "23-03-2018",
    "Transaction": "9,311",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "25-02-2016",
    "Transaction": "12,714",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "30-11-2014",
    "Transaction": "13,502",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  },
  {
    "DateImport": "04-09-2014",
    "Transaction": "12,926",
    "Erreurs": 0,
    "Type": "data.csv",
    "Source": "SFTP"
  }
];