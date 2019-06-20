export class DonneeModel {
    id?: number;
    dateVente?: Date;
    dateValide?: Date;
    canal?: string;
    type?: string;
    category?: string;
    classe?: string;
    produit?: string;
    nb: string;
    prix?: string;
    dateAdded?: Date;
    dateModif?: Date;
}

export class PrixModel {
    currency?: string;
    cash?: number;
}
