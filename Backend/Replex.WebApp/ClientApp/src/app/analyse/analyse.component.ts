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
  public data: any[] = [{ name: 'Avril', value: 100 },
  { name: 'Mars', value: 200 },
  { name: 'Février', value: 420 },
  { name: 'Janvier', value: 350 }];

  test: string;
  public style: string = 'smooth';

  public seriesType: Array<string> = [];

  constructor(private apiService: ApiService) { }


  public series: any[] = [
    { name: "Legend", data: 0.2 }, {
      name: "Legend 1",
      data: 0.5
    }];


  ngOnInit() {
    this.apiService.cast.subscribe(test => this.test = test);
    this.apiService.castData.subscribe(seriesType => this.GenerateGraph(seriesType));
  }

  public GenerateGraph(series: any) {
    this.seriesType = [];
    this.seriesType.push(series);
    // if (series) {
    //   this.data.push({ name: 'Legend', value: series });
    // }
  }


  // public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

  public labelContent(e: any): string {
    return e.category;
  }

  public lines: any[] = [{
    name: "Erreurs",
    data: [10, 25, 7, 23]
  }];


  public onButtonUploadClick(event: UploadEvent) {
    let x = document.getElementsByClassName("k-upload-button")[0].firstElementChild.setAttribute("id", "upload-id");

    document.getElementById("upload-id").click();
  }

}
