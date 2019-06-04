import { Component, OnInit } from '@angular/core';
import { UploadEvent } from '@progress/kendo-angular-upload';
import { WebApiService } from '../Services/WebApiService';
import { Analyse } from '../model/metadata';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {
  public data: any[] = [{ name: 'Avril', value: 0.30 },
  { name: 'Mars', value: 0.20 },
  { name: 'Février', value: 0.40 },
  { name: 'Janvier', value: 0.10 }];

  test: string;
  public style: string = 'smooth';

  public seriesType: Array<string> = [];

  constructor(private webApiService: WebApiService, private apiService: ApiService) {

  }


  public series: any[] = [
    { name: "Legend", data: 0.2 }, {
      name: "Legend 1",
      data: 0.5
    }];


  ngOnInit() {
    this.apiService.cast.subscribe(test => this.test = test);
    this.apiService.casting.subscribe(seriesType => this.GenerateGraph(seriesType));

  }

  public GenerateGraph(series: any) {
    this.seriesType = [];
    this.seriesType.push(series);
    if (series.value) {
      this.data.push({ name: 'Legend 1', value: series.value });
    }


  }

  // public GetData() {

  //   // this.webApiService.getAnalyseData(id)
  //   //   .subscribe(data => {
  //   //     this.seriesType.push(data);
  //   //   });

  //   this.webApiService.getMetadata()
  //     .subscribe(data => {
  //       data.forEach(element => {
  //         this.seriesType.push(element.analyse);
  //       });
  //     });
  // }



  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];



  public labelContent(e: any): string {
    return e.category;
  }

  public lines: any[] = [{
    name: "Legend",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }];


  public onButtonUploadClick(event: UploadEvent) {
    let x = document.getElementsByClassName("k-upload-button")[0].firstElementChild.setAttribute("id", "upload-id");

    document.getElementById("upload-id").click();
  }

}
