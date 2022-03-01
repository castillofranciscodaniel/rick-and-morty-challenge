import {INameable} from "./INameable";

export interface Episode extends INameable{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}
