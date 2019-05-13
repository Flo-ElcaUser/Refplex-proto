import { Component, OnInit } from '@angular/core';
import { UploadEvent } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  public series: any[] = [{
    name: "Legend",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Legend 1",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3]
  }];
  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

  public data: any[] = [
    { name: 'Legend', value: 0.20 },
    { name: 'Legend 1', value: 0.10 },
    { name: 'Legend 2', value: 0.70 }
  ];

  public labelContent(e: any): string {
    return e.category;
  }

  public lines: any[] = [{
    name: "Legend",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Legend 1",
    data: [9.907, 5.943, 8.848, 4.284, 1.263, 5.801, 3.890, 8.238, 7.552, 6.855]
  }, {
    name: "Legend 2",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3]
  }];

  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public onButtonUploadClick(event: UploadEvent) {
    let x = document.getElementsByClassName("k-upload-button")[0].firstElementChild.setAttribute("id", "upload-id");

    document.getElementById("upload-id").click();
  }
}
