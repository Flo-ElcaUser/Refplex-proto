import { DonneeModel } from './donnée.model';

export class TypeModel extends DonneeModel {
    name: string;

    constructor(item?) {
        super(item);
        item = item || {};

        this.name = item.string;
    }
}
