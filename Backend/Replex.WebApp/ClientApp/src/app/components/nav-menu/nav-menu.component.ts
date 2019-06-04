import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from '../../Services/WebApiService';
import { ApiService } from '../../Services/api.service';
import { Metadata } from '../../model/metadata';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  title = 'replex-front';

  private _opened: boolean = true;
  public data: Array<Metadata>;
  public dataLastYear: Array<Metadata>;
  public iconCollapse = "minus";
  public firstId: string;

  constructor(private router: Router, private webApiService: WebApiService, private apiService: ApiService) {

  }

  ngOnInit() {
    this.GetMetadata()
  }

  public GetMetadata() {
    this.webApiService.getPresentData()
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        data.forEach(element => {
          if (element.selected === true) {
            this.GetData(element.id);
          }
        });
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

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


}