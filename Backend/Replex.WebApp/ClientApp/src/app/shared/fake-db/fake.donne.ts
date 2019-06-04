import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemDonneeService implements InMemoryDbService {
  createDb() {
    let donnees = [
        {
            'dateVente': new Date(1996, 8, 20),
            'dateValidee': new Date(1996, 8, 20),
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
            'dateAjout': new Date(1996, 8, 20),
            'dateModif': new Date(1996, 8, 20),
        },
        {
            'dateVente': new Date('2018-7-20'),
            'dateValidee': new Date('2018-7-20'),
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
            'dateAjout': new Date('2018-7-20'),
            'dateModif': new Date('2018-7-20')
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
    
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
    
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        },
        {
            'dateVente': new Date(2019, 4, 29),
            'dateValidee': new Date(2019, 4, 29),
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
            'dateAjout': new Date(2019, 4, 30),
            'dateModif': new Date(2019, 4, 30)
        }
    ];
    return {donnees};
  }
}