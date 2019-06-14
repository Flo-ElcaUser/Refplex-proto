import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { donnees } from '../donnees/donnee';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    })
};

@Injectable({
    providedIn: 'root',
})
export class DonneesService {
    private data: any[] = donnees;
    private counter: number = donnees.length;
    apiUrl = 'api/';  // URL to web api

    constructor(private http: HttpClient) { }

    public donnees() {
        try {
            return this.http.get<any[]>(this.apiUrl + 'TicketPrototypes');

        } catch (error) {
            console.log(error);
        }
    }

    public remove(donnee: any): void {
        const index = this.data.findIndex(({ ticketProtoTypeId }) => ticketProtoTypeId === donnee.ticketProtoTypeId);
        this.data.splice(index, 1);
    }

    // public save(donnee: any, isNew: boolean): void {
    //     if (isNew) {
    //         donnee.id = this.counter++;
    //         this.data.splice(0, 0, donnee);
    //     } else {
    //         Object.assign(
    //             this.data.find(({ id }) => id === donnee.id),
    //             donnee
    //         );
    //     }
    // }

    public save(value: any): Promise<any> {
        console.log(JSON.stringify(value));
        try {
            return this.http.put<any[]>(this.apiUrl + 'TicketPrototypes/' + value.ticketProtoTypeId, JSON.stringify(value), httpOptions).toPromise();

        } catch (error) {
            console.log(error);
        }
    }

    public add(value: any): Promise<any> {
        let array: Array<any> = [];
        console.log(value);
        array.push(value);
        try {
            console.log("tttt");
            return this.http.post<any[]>(this.apiUrl + 'TicketPrototypes/', JSON.stringify(array), httpOptions).toPromise();

        } catch (error) {
            console.log(error);
        }
    }
}
