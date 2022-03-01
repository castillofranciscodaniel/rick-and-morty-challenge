import { Injectable } from '@nestjs/common';
import {HttpService} from "nestjs-http-promise";
import {Pagination} from "../../dto/pagination";
import {Location} from "../../../domain/models/location";

@Injectable()
export class LocationClientService {
    private endpoint = "https://rickandmortyapi.com/api/location"

    constructor(private readonly http: HttpService) {
    }

    async findAll(page): Promise<Pagination<Location>> {

        const params = {
            page: page
        }

        const result = await this.http.get<Pagination<Location>>(this.endpoint, {params})
        return result.data
    }
}
