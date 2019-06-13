import { Component, OnInit, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DonneesService } from '../Services/donnees.service';
import { GridComponent } from '@progress/kendo-angular-grid';
import { DonneeModel } from '../shared/models/données/donnée.model';
import { HttpClient } from '@angular/common/http';

const createFormGroup = dataItem => new FormGroup({
  'ticketProtoTypeId': new FormControl(0),
  'salesDate': new FormControl(dataItem.salesDate, Validators.required),
  'validityDate': new FormControl(dataItem.validityDate, Validators.required),
  'channelName': new FormControl(dataItem.channelName, Validators.required),
  'ticketTypeName': new FormControl(dataItem.ticketTypeName, Validators.required),
  'categoryName': new FormControl(dataItem.categoryName, Validators.required),
  'ci': new FormControl(dataItem.ci, Validators.required),
  'productName': new FormControl(dataItem.productName, Validators.required),
  'numberOfTickets': new FormControl(dataItem.numberOfTickets, Validators.required),
  'price': new FormControl(dataItem.price, Validators.required),
  // 'addedDate': new FormControl(new Date(), Validators.required),
  'lastModifiedDate': new FormControl(new Date(), Validators.required),
  'distributorName': new FormControl(dataItem.distributorName),
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
  public distributorName: string;

  constructor(private service: DonneesService, private renderer: Renderer2, private http: HttpClient) { }

  public ngOnInit(): void {
    this.service.donnees().subscribe(x => { this.view = x; });
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
  }

  public ngOnDestroy(): void {
    this.docClickSubscription();
  }

  public addHandler(): void {
    this.closeEditor();

    this.formGroup = createFormGroup({
      'salesDate': '',
      'validityDate': '',
      'channelName': '',
      'ticketTypeName': '',
      'categoryName': '',
      'ci': '',
      'productName': '',
      'numberOfTickets': '',
      'price': '',
      'addedDate': new Date(),
      'lastModifiedDate': '',
      'distributorName': this.distributorName
    });
    this.isNew = true;

    this.grid.addRow(this.formGroup);
  }

  public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
    // if (isEdited || (this.formGroup && !this.formGroup.valid)) {console.log("dfsdf");
    //     return;
    // }


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
          this.service.donnees().subscribe(x => { this.view = x; })
        );
      } else {
        this.service.save(this.formGroup.value).then(val =>
          this.service.donnees().subscribe(x => { this.view = x; })
        );
      }
      this.closeEditor();
    }
  }

  public selectionChange(value: any): void {
    this.distributorName = value;
  }

}
