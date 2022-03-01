import {INameable} from "./INameable";

export class Episode implements INameable{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}
