import {Observable} from 'rxjs';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {HttpService} from "@nestjs/axios";
import {Pagination} from "../dto/pagination";


export abstract class CustomHttpService<T> {

    constructor(readonly http: HttpService) {
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<Pagination<T>>> {
        return this.http.get(url, config);
    }


}

