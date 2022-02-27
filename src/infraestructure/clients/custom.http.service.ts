import {Observable} from 'rxjs';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {HttpService} from "@nestjs/axios";


export abstract class CustomHttpService {

    protected constructor(private readonly http: HttpService) {
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.post(url, data, config);
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.get(url, config);
    }

    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.put(url, data, config);
    }

    public delete<T = any>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.delete(url, config);
    }

    public request<T = any>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.request(config);
    }

}

