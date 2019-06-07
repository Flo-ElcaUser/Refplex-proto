import { Injectable } from '@angular/core';
import { donnees } from '../donnees/donnee';

@Injectable({
    providedIn: 'root',
})
export class DonneesService {
    private data: any[] = donnees;
    private counter: number = donnees.length;

    public donnees(): any[] {
        return this.data;
    }

    public remove(donnee: any): void {
        const index = this.data.findIndex(({ id }) => id === donnee.id);
        this.data.splice(index, 1);
    }

    public save(donnee: any, isNew: boolean): void {
        if (isNew) {
            donnee.id = this.counter++;
            this.data.splice(0, 0, donnee);
        } else {
            Object.assign(
                this.data.find(({ id }) => id === donnee.id),
                donnee
            );
        }
    }
}
