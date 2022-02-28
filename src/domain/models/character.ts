export class Character {
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

export class LocationValue {
    name: string;
    url: string;
}
