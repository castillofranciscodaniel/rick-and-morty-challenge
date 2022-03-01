import {INameable} from "./INameable";

export class Location implements INameable{
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
