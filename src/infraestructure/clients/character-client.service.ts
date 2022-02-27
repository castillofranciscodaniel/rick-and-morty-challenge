import {Injectable} from '@nestjs/common';
import {Character} from "../../domain/models/character";
import {catchError, map, Observable, throwError} from "rxjs";
import {Pagination} from "../dto/pagination";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class CharacterClientService {

    private endpoint = "https://rickandmortyapi.com/api/character"

    constructor(private readonly http: HttpService) {
    }

    public findAll(page): Observable<Character[]> {

        const axiosRequest: AxiosRequestConfig<Pagination<Character>> = {
            params: {
                page: page
            }
        };

        return this.http.get(this.endpoint, axiosRequest).pipe(
            map(value => value.data.result),
            catchError(error => {
                return throwError(error);
            })
        );
    }

}
