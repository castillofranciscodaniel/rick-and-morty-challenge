import {INameable} from "./INameable";

export interface Location extends INameable {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
