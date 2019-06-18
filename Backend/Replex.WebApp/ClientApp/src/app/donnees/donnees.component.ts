import { Component, OnInit, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DonneesService } from '../Services/donnees.service';
import { GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DonneeModel } from '../shared/models/données/donnée.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

const createFormGroup = dataItem => new FormGroup({
  'ticketProtoTypeId': new FormControl(dataItem.ticketProtoTypeId),
  'salesDate': new FormControl(dataItem.salesDate, Validators.required),
  'validityDate': new FormControl(dataItem.validityDate, Validators.required),
  'channelName': new FormControl(dataItem.channelName, Validators.required),
  'ticketTypeName': new FormControl(dataItem.ticketTypeName, Validators.required),
  'categoryName': new FormControl(dataItem.categoryName, Validators.required),
  'ci': new FormControl(dataItem.ci, Validators.required),
  'productName': new FormControl(dataItem.productName, Validators.required),
  'numberOfTickets': new FormControl(dataItem.numberOfTickets, Validators.required),
  'price': new FormControl(dataItem.price, Validators.required),
  'addedDate': new FormControl(dataItem.addedDate, Validators.required),
  'lastModifiedDate': new FormControl(dataItem.lastModifiedDate, Validators.required),
  'distributorName': new FormControl(dataItem.distributorName),
  'status': new FormControl('ToCreate'),
  'source': new FormControl('Manual')
});


const matches = (el, selector) => (el.matches || el.msMatchesSelector).call(el, selector);

@Component({
  selector: 'app-donnee',
  templateUrl: './donnees.component.html',
  styleUrls: ['./donnees.component.css']
})
export class DonneesComponent implements OnInit, OnDestroy {
  @ViewChild(GridComponent)
  private grid: GridComponent;
  public view: any[];
  public formGroup: FormGroup;
  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;
  public donnees: DonneeModel[];
  public listItems: Array<string> = ['TPG', 'NOVA', 'SNCF'];
  public data = [{ name: 'E-commerce', value: 1 }, { name: 'Billets SMS', value: 2 }, { name: 'Apps CFF', value: 3 }];
  public ticket = [{ name: 'Carte journalière', value: 1 }, { name: 'Billet', value: 2 }, { name: 'Abo annuel', value: 3 }];
  public ci = [{ name: '1', value: 1 }, { name: '2', value: 2 }];
  public category = [{ name: 'Adulte', value: 1 }, { name: 'Junior', value: 2 }];
  public distributorName: string;
  public pageSize = 100;
  public skip = 0;
  public query: any;

  constructor(private service: DonneesService, private renderer: Renderer2, private http: HttpClient) {
  }
  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];

  public ngOnInit(): void {
    this.service.donnees().subscribe(x => { this.view = this.extractData(x, this.distributorName); });
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
  }

  public ngOnDestroy(): void {
    this.docClickSubscription();
  }

  public addHandler(): void {
    this.closeEditor();

    this.formGroup = createFormGroup({
      'ticketProtoTypeId': 0,
      'salesDate': '',
      'validityDate': '',
      'channelName': '',
      'ticketTypeName': '',
      'categoryName': '',
      'ci': 1,
      'productName': '',
      'numberOfTickets': '',
      'price': 0.00,
      'addedDate': '',
      'lastModifiedDate': '',
      'distributorName': this.distributorName
    });
    this.isNew = true;

    this.grid.addRow(this.formGroup);
  }

  public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
    if (isEdited || (this.formGroup && !this.formGroup.valid)) {
      console.log("dfsdf");
      return;
    }


    this.handleCurrentChange();

    this.formGroup = createFormGroup(dataItem);
    this.editedRowIndex = rowIndex;

    this.grid.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler(): void {
    this.closeEditor();
  }

  private closeEditor(): void {
    this.grid.closeRow(this.editedRowIndex);

    this.isNew = false;
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  private onDocumentClick(e: any): void {
    if (this.formGroup && this.formGroup.valid &&
      !matches(e.target, '#donneesGrid tbody *, #donneesGrid .k-grid-toolbar .k-button')) {
      console.log("Click");
      this.handleCurrentChange();
    }
  }

  private handleCurrentChange(): void {
    console.log("testss");
    if (this.formGroup) {
      if (this.isNew) {
        this.service.add(this.formGroup.value).then(val =>
          this.service.donnees().subscribe(x => { this.view = this.extractData(x, this.distributorName); })
        );
      } else {
        this.service.save(this.formGroup.value).then(val =>
          this.service.donnees().subscribe(x => { this.view = this.extractData(x, this.distributorName); })
        );
      }
      this.closeEditor();
    }
  }

  public selectionChange(value: any): void {
    this.distributorName = value;
    this.service.donnees().subscribe(x => { this.view = this.extractData(x, this.distributorName); })
  }

  extractData(value: any, val: any) {
    value.sort(this.sortedtData);
    let displayedData = [];
    value.forEach((data) => {
      data.salesDate = new Date(data.salesDate);
      data.validityDate = new Date(data.validityDate);
      data.addedDate = new Date(data.addedDate);
      data.lastModifiedDate = new Date(data.lastModifiedDate);

      if (data.distributorName === this.distributorName) {
        displayedData.push(data);
      }

    });

    if (displayedData) {
      return displayedData;
    }

    return value;
  }

  sortedtData(a, b) {
    return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
  }

  //Button

  public events: string[] = [];

  public onClick(): void {
    this.log('click');
  }

  public onFocus(): void {
    this.log('focus');
  }

  public onBlur(): void {
    this.log('blur');
  }

  private log(event: string): void {
    this.events.push(`${event}`);
  }

}
