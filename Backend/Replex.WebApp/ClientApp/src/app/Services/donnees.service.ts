import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { donnees } from '../donnees/donnee';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    })
  };

@Injectable({
    providedIn: 'root',
})
export class DonneesService {
    private data: any[] =  donnees;
    private counter: number = donnees.length;
    apiUrl = 'http://localhost:3000/';  // URL to web api

    constructor(private http: HttpClient) { }

    public donnees() {
        try {
            return this.http.get<any[]>(this.apiUrl + 'donnees');

        } catch (error) {
            console.log(error);
        }
    }

    public remove(donnee: any): void {
        const index = this.data.findIndex(({ id }) => id === donnee.id);
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
            return this.http.put<any[]>(this.apiUrl + 'donnees/'+ value.id, JSON.stringify(value) , httpOptions).toPromise();

        } catch (error) {
            console.log(error);
        }
    }

    public add(value: any): Promise<any> {
        try {
            return this.http.post<any[]>(this.apiUrl + 'donnees', JSON.stringify(value) , httpOptions).toPromise();

        } catch (error) {
            console.log(error);
        }
    }
}
