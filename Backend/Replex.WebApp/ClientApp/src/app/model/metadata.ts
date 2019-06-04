export interface Metadata {
    id?: string;
    year: string;
    status: string;
    icon: string;
    analyse: Analyse;
    selected: boolean;
}

export class Analyse {
    name: string;
    data: Array<number>;
    value: number;
}