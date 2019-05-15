import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from './Services/WebApiService';
import { Metadata } from './model/metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'replex-front';

  public data: Metadata;

  constructor(private router: Router, private webApiService: WebApiService) {

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
}
