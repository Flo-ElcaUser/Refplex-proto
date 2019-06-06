import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDonneeService implements InMemoryDbService {
  createDb() {
    let donnees = [
        {
            'dateVente': "28-07-2015",
            'dateValidee': "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Billet',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif': "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Abo annuel',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Demi-tarif',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
    
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
    
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Billet',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Abo annuel',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Demi-tarif',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        },
        {
            'dateVente':  "28-07-2015",
            'dateValidee':  "28-07-2015",
            'canal': 'E-commerce',
            'type': 'Carte journalière',
            'category': 'Adulte',
            'classe': 2,
            'produit': 'Z10 - Genève - Thonon',
            'nb': 10,
            'prix': {
                'currency': 'CHF',
                'cash': 500.00
            },
            'dateAjout':  "28-07-2015",
            'dateModif':  "28-07-2015"
        }
    ];
    return {donnees};
  }
}