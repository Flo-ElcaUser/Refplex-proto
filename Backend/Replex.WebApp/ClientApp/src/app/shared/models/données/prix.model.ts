import { DonneeModel } from './donnée.model';

export class PrixModel extends DonneeModel {
    currency: string;
    cash: number;

    constructor(item?) {
        super(item);
        item = item || {};

        this.currency = item.string;
        this.cash = item.cash || 0;
    }
}
