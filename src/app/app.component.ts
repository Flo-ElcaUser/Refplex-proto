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
  private _opened: boolean = true;

  constructor(private router: Router, private webApiService: WebApiService, private apiService: ApiService) {

  }

  ngOnInit() {
    this.GetMetadata();

  }

  public GetMetadata() {
    this.webApiService.getMetadata()
      .subscribe(data => {
        this.data = data;
      });
  }


  public getIcons(data: string): string {
    return data = 'k-icon k-i-' + data;
  }

  public goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

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
    this._opened = !this._opened;
  }
}
