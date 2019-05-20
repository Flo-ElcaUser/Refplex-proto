import { donnees_enregistrees } from './donnees';

export class Data {
    public dateVente?: Date;
    public dateValid?: Date;
    public canal?: string;
    public type?: string;
    public category?: string;
    public classe?: string;
    public produit?: string;
    public nb?: string;
    public prix?: string;
    public dateAdded?: Date;
    public dateModif?: Date;
}

export class prix {
    public currency?: string;
    public cash?: Int16Array;
}