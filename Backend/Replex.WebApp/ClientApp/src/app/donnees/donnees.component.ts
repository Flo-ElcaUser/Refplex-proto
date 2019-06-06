import { Component, OnInit, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupDescriptor, groupBy, SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { DonneesService } from '../Services/donnees.service';
import { GridComponent } from '@progress/kendo-angular-grid';

const createFormGroup = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id) ,
  'dateVente': new FormControl(dataItem.dateVente) ,
  'dateValidee': new FormControl(dataItem.dateValidee) ,
  'canal': new FormControl(dataItem.canal),
  'type': new FormControl(dataItem.type),
  'category': new FormControl(dataItem.category),
  'classe': new FormControl(dataItem.classe),
  'produit': new FormControl(dataItem.produit),
  'nb': new FormControl(dataItem.nb),
  'prix':new FormControl(dataItem.prix),
  'dateAjout': new FormControl(dataItem.dateAjout),
  'dateModif': new FormControl(dataItem.dateModif)
});

const matches = (el, selector) => (el.matches || el.msMatchesSelector).call(el, selector);

@Component({
  selector: 'app-donnee',
  templateUrl: './donnees.component.html',
  styleUrls: ['./donnees.component.css']
})
export class DonneesComponent implements OnInit , OnDestroy {
  @ViewChild(GridComponent)
  private grid: GridComponent;
  public sort: SortDescriptor[] = [{
    field: 'dateVente',
    dir: 'asc'
  }];

  public groups: GroupDescriptor[] = [];
  public view: any[];

  public formGroup: FormGroup;

  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;

  constructor(private service: DonneesService, private renderer: Renderer2) { }

  public ngOnInit(): void {
    this.view = this.service.donnees();

    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
  }

  public ngOnDestroy(): void {
      this.docClickSubscription();
  }

  public addHandler(): void {
      this.closeEditor();

      this.formGroup = createFormGroup({
        'dateVente': '' ,
        'dateValidee': '' ,
        'canal': '',
        'type': '',
        'category': '',
        'classe': '',
        'produit': '',
        'nb': '',
        'prix': '',
        'dateAjout': '',
        'dateModif': ''
      });
      this.isNew = true;

      this.grid.addRow(this.formGroup);
  }

  public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
      if (isEdited || (this.formGroup && !this.formGroup.valid)) {
          return;
      }

      this.saveCurrent();

      this.formGroup = createFormGroup(dataItem);
      this.editedRowIndex = rowIndex;

      this.grid.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler(): void {
      this.closeEditor();
  }

  public groupChange(groups: GroupDescriptor[]): void {
      this.groups = groups;
      this.view = groupBy(this.service.donnees(), this.groups);
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
          this.saveCurrent();
      }
  }

  private saveCurrent(): void {
    // console.log("save",this.isNew);
      if (this.formGroup) {
          this.service.save(this.formGroup.value, this.isNew);
          this.closeEditor();
      }
  }
}

