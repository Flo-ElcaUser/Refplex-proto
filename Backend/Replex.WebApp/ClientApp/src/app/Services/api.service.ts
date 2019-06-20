import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private test = new BehaviorSubject<string>('Test 123');
    cast = this.test.asObservable();

    private chartData = new BehaviorSubject<string>('');
    private chartKey = new BehaviorSubject<string>('');

    castData = this.chartData.asObservable();
    CastKey = this.chartKey.asObservable();

    constructor() {
    }

    EditTest(value: string) {
        this.test.next(value);
    }

    EditSeries(value: string, name: string) {
        this.chartData.next(value);
        this.chartKey.next(name);
    }
}