import {Injectable} from '@nestjs/common';
import {Character} from "../../domain/models/character";
import {catchError, map, Observable, throwError} from "rxjs";
import {Pagination} from "../dto/pagination";
import {HttpService} from "nestjs-http-promise";
import {AxiosRequestConfig, AxiosResponse} from "axios";

@Injectable()
export class CharacterClientService {

    private endpoint = "https://rickandmortyapi.com/api/character"

    constructor(private readonly http: HttpService) {
    }

    async findAll(page): Promise<Pagination<Character>> {

        const params = {
            page: page
        }

        const result = await this.http.get<Pagination<Character>>(this.endpoint, {params})
        return result.data
    }
}
