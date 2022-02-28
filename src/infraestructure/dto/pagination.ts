export class Pagination<T> {
    info: Info
    results: T[]

    constructor(info: Info, result: T[]) {
        this.info = info;
        this.results = result;
    }
}

export class Info {
    count: number;
    pages: number;
    next: string;
    prev?: string;

    constructor(count: number, pages: number, next: string, prev?: string,) {
        this.count = count;
        this.pages = pages;
        this.next = next;
        this.prev = prev;
    }
}
