import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ApiService {

    private seriesType = new BehaviorSubject<string>('');
    casting = this.seriesType.asObservable();

    constructor() {
    }

    EditSeries(value: string) {
        console.log(value);
        this.seriesType.next(value);
    }
}