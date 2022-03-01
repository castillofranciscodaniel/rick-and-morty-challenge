export interface CountResult {
    char: string,
    count: number,
    resource: string
}

export class EpisodeLocationResult {
    name: string;
    episode: string;
    locations: Set<string> | string[];

    constructor(name: string, episode: string, locations: Set<string>) {
        this.name = name;
        this.episode = episode;
        this.locations = locations;
    }
}


export interface ExerciseResult<T> {
    exercise_name: string,
    time?: string,
    in_time: boolean,
    results: T[]
}

