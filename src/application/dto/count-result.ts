export interface CountResult {
    char: string,
    count: number,
    resource: string
}

export interface EpisodeLocationResult {
    name: string;
    episode: string;
    locations: Set<string> | string[];
}

export interface ExerciseResult<T> {
    exercise_name: string,
    time?: string,
    in_time: boolean,
    results: T[]
}

