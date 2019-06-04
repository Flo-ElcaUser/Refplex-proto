export interface Metadata {
    id?: number;
    year: string;
    status: string;
    icon: string;
    analyse: Analyse;
}

export class Analyse {
    name: string;
    data: Array<number>;
    value: number;
}