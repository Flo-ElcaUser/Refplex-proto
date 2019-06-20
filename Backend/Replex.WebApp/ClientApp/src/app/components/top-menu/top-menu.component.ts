import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  public selectedAnalyse = true;
  public selectedDonnee = false;
  public selectedAImports = false;


  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.selectedPage(this.location.path())
  }

  public selectedPage(path: any) {
    switch (path) {
      case '/imports':
        this.selectedAnalyse = false;
        this.selectedDonnee = false;
        this.selectedAImports = true;
        break;
      case '/donnee':
        this.selectedAnalyse = false;
        this.selectedDonnee = true;
        this.selectedAImports = false;
        break;
      default:
        this.selectedAnalyse = true;
        this.selectedDonnee = false;
        this.selectedAImports = false;
        break;
    }
  }

  public goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
