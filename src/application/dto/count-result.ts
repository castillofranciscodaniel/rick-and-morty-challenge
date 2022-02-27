export interface CountResult {
    char: string,
    count: number,
    resource: string
}

export interface ExerciseResult<T> {
    exercise_name: string,
    time: string,
    in_time: true,
    results: T[]
}

