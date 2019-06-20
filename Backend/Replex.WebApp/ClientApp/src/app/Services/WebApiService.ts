import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Metadata, Analyse } from '../model/metadata';


@Injectable({
    providedIn: 'root',
})
export class WebApiService {
    ApiUrl = 'api/';  // URL to web api
    basicUrl = 'http://localhost:55575/api/';

    constructor(private http: HttpClient) {
    }

    /** GET metadata from the server */
    public getPresentData() {
        try {
            return this.http.get<Metadata[]>(this.ApiUrl + 'MonthlyStatus');

        } catch (error) {
            console.log(error);
        }
    }

    public getAnalyseData(param: string) {
        try {
            return this.http.get<any>(this.ApiUrl + 'MonthlyStatus/' + param);

        } catch (error) {
            console.log(error);
        }
    }

    public getImports() {
        try {
            return this.http.get<any>('api/' + 'ImportLogs');

        } catch (error) {
            console.log(error);
        }
    }
}
