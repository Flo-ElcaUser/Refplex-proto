export class BaseModel {
    id: number;

    constructor(item?) {
        item = item || {};
        this.id = item.id;
    }
}
