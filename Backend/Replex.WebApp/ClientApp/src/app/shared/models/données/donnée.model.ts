import { BaseModel } from './base.model';
import { PrixModel } from './prix.model';
import { TypeModel } from './type.model';

export class DonneeModel extends BaseModel {
    dateVente: Date;
    dateValide: Date;
    canal: string;
    type: TypeModel[];
    category: string;
    classe: number;
    produit: string;
    nb: number;
    prix: PrixModel[];
    dateAjout: Date;
    dateModif: Date;

    constructor(item?) {
        super(item);
        item = item || {};

        this.dateVente = item.dateVente || new Date();
        this.dateValide = item.dateValide || new Date();
        this.canal = item.canal;
        this.type = item.TypeModel || [];
        this.category = item.string;
        this.classe = item.classe || 0;
        this.produit = item.produit;
        this.nb = item.nb || 0;
        this.prix = item.PrixModel || [];
        this.dateAjout = item.dateAjout || new Date();
        this.dateModif =  item.dateModif || new Date();
    }
}
