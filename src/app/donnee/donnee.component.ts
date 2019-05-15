import { Component, OnInit } from '@angular/core';
import { donnees_enregistrees } from './donnees';
import { Data } from './data';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import { State } from '@progress/kendo-data-query';
import { IntlService } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-donnee',
  templateUrl: './donnee.component.html',
  styleUrls: ['./donnee.component.scss']
})
export class DonneeComponent implements OnInit {
  public gridData: any = donnees_enregistrees;
  public Data: any;
  public dialogOpened = false;

  constructor(private intl: IntlService) {}

  ngOnInit() {
    this.Data = this.extractData(this.gridData);
    console.log(this.Data);
  }

  public formatValue(value: Date): string {
    return this.intl.formatDate(value, 'dd.MM.yyyy');
  }

  private extractData(data?: Data[]) {
    if (data) {
      data.forEach((d: any) => {
        d.dateVente = this.formatValue(d.dateVente);
        d.dateValidee = this.formatValue(d.dateValidee);
        d.dateAjout = this.formatValue(d.dateAjout);
        d.dateModif = this.formatValue(d.dateModif);
        d.prix = d.prix.currency + ' ' + d.prix.cash;
        
        // d.ChangedDate = new Date(d.ChangedDate);
        // d.CompletionDate = new Date(d.CompletionDate);
        // d.DueDate = new Date(d.DueDate);
        // console.log(d.prix);
        // this.theDate = this.formatValue(d.dateVente);
        // console.log(this.theDate);
      });
      return data;
    }
  }

  public close(component) {
    this[component + 'Opened'] = false;
  }

  public open(component) {
    this[component + 'Opened'] = true;
  }
  public newRecVal: Date = new Date();
  

}
