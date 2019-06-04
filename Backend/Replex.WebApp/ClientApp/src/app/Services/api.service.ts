import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private test = new BehaviorSubject<string>('Test 123');
    cast = this.test.asObservable();

    private seriesType = new BehaviorSubject<string>('');
    casting = this.seriesType.asObservable();

    constructor() {
    }

    EditTest(value: string) {
        this.test.next(value);
    }

    EditSeries(value: string) {
        console.log('The test: ', value);
        this.seriesType.next(value);
    }
}