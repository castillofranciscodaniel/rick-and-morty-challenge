export interface CountResult {
    char: string,
    count: number,
    resource: string
}

export interface EpisodeLocationResult {
    name: string,
    episode: string,
    locations: string[]
}


export interface ExerciseResult<T> {
    exercise_name: string,
    time?: string,
    in_time: true,
    results: T[]
}

