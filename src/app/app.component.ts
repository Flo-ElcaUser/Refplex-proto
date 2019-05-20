import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from './Services/WebApiService';
import { Metadata } from './model/metadata';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'replex-front';

  public data: Array<Metadata>;
  public dataLastYear: Array<Metadata>;
  private _opened: boolean = true;
  public iconCollapse = "minus";

  constructor(private router: Router, private webApiService: WebApiService, private apiService: ApiService) {

  }

  ngOnInit() {
    this.GetMetadata();

  }

  public GetMetadata() {
    this.webApiService.getPresentData()
      .subscribe(data => {
        this.data = data;
      });
    this.webApiService.getPastData()
      .subscribe(data => {
        this.dataLastYear = data;
      });
  }


  public getIcons(data: string): string {
    return data = 'k-icon k-i-' + data;
  }

  public goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  //to be changed to meaningful name
  public change(param: any) {
    this.apiService.EditSeries(param);
  }

  public GetData(id: string) {
    this.webApiService.getAnalyseData(id)
      .subscribe(data => {
        this.change(data.analyse);
      });

  }

  private _toggleSidebar() {
    this.iconCollapse = this.iconCollapse === 'minus' ? this.iconCollapse = 'plus' : this.iconCollapse = 'minus';
    this._opened = !this._opened;
  }
}
