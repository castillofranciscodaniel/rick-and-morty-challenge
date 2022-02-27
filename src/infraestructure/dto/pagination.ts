export interface Pagination<T> {
    info: Info
    result: T[]
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: string;
}
