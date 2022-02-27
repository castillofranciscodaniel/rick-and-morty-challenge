import {Observable} from 'rxjs';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {HttpService} from "@nestjs/axios";


export abstract class CustomHttpService<T> {

    protected constructor(private readonly http: HttpService) {
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.post(url, data, config);
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.get(url, config);
    }

    public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.put(url, data, config);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.delete(url, config);
    }

    public request<T>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return this.http.request(config);
    }

}

