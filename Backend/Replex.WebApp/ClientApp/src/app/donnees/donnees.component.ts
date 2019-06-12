import { Component, OnInit, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DonneesService } from '../Services/donnees.service';
import { GridComponent } from '@progress/kendo-angular-grid';
import { DonneeModel } from '../shared/models/données/donnée.model';
import { HttpClient } from '@angular/common/http';

const createFormGroup = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id, Validators.required),
  'dateVente': new FormControl(dataItem.dateVente, Validators.required),
  'dateValide': new FormControl(dataItem.dateValide, Validators.required),
  'canal': new FormControl(dataItem.canal, Validators.required),
  'type': new FormControl(dataItem.type, Validators.required),
  'category': new FormControl(dataItem.category, Validators.required),
  'classe': new FormControl(dataItem.classe, Validators.required),
  'produit': new FormControl(dataItem.produit, Validators.required),
  'nb': new FormControl(dataItem.nb, Validators.required),
  'prix': new FormControl(dataItem.prix, Validators.required),
  'dateAjout': new FormControl(dataItem.dateAjout, Validators.required),
  'dateModif': new FormControl(dataItem.dateModif, Validators.required)
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
  public view: any[];
  public formGroup: FormGroup;
  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;
  public donnees: DonneeModel[];
  public listItems: Array<string> = ['TPG', 'NOVA', 'SNCF'];

  constructor(private service: DonneesService, private renderer: Renderer2, private http: HttpClient) { }

  public ngOnInit(): void {
    this.service.donnees().subscribe(x =>{ this.view = x;});
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
  }

  public ngOnDestroy(): void {
      this.docClickSubscription();
  }

  public addHandler(): void {
      this.closeEditor();

      this.formGroup = createFormGroup ({
        'dateVente': '',
        'dateValide': '' ,
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
          this.handleCurrentChange();
      }
  }

  private handleCurrentChange(): void {
      if (this.formGroup) {
        if (this.isNew) {
          this.service.add(this.formGroup.value).then( val =>
            this.service.donnees().subscribe(x => { this.view = x; })
          );
        } else {
          this.service.save(this.formGroup.value).then( val =>
            this.service.donnees().subscribe(x => { this.view = x; })
          );
        }
          this.closeEditor();
      }
  }

}