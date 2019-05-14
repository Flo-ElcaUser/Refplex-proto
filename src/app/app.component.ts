import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'replex-front';


  constructor(private router: Router) {

  }

  public goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
