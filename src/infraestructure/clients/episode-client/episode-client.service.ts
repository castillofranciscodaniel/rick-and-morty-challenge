import {Injectable} from '@nestjs/common';
import {HttpService} from "nestjs-http-promise";
import {Pagination} from "../../dto/pagination";
import {Episode} from "../../../domain/models/episode";

@Injectable()
export class EpisodeClientService {
    private endpoint = "https://rickandmortyapi.com/api/episode"


    constructor(private readonly http: HttpService) {
    }

    async findAll(page): Promise<Pagination<Episode>> {

        const params = {
            page: page
        }

        const result = await this.http.get<Pagination<Episode>>(this.endpoint, {params})
        return result.data
    }
}
