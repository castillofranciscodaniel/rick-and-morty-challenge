import {INameable} from "./INameable";

export interface Character extends INameable{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationValue;
    location: LocationValue;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface LocationValue {
    name: string;
    url: string;
}
