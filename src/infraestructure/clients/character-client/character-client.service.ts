import {Injectable} from '@nestjs/common';
import {Character} from "../../../domain/models/character";
import {Pagination} from "../../dto/pagination";
import {HttpService} from "nestjs-http-promise";
import {LOGGER, LoggerCustomService} from "../../services/logger-custom.service";

const nameMethod = 'findAll'

@Injectable()
export class CharacterClientService {

    private endpoint = "https://rickandmortyapi.com/api/character"

    private readonly logger: LoggerCustomService = new LoggerCustomService(CharacterClientService.name);

    constructor(private readonly http: HttpService) {
    }

    async findAll(page: number): Promise<Pagination<Character>> {
        this.logger.info(nameMethod, `page: ${page}`, LOGGER.INIT)
        const params = {
            page: page
        }
        try {
            const result = (await this.http.get<Pagination<Character>>(this.endpoint, {params}))
            this.logger.info(nameMethod, `page: ${page}`, LOGGER.END)
            return result.data
        } catch (e) {
            this.logger.error(nameMethod, e.message, LOGGER.ERROR)
            throw e
        }

    }
}