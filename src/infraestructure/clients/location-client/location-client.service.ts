import {Injectable} from '@nestjs/common';
import {HttpService} from "nestjs-http-promise";
import {Pagination} from "../../dto/pagination";
import {Location} from "../../../domain/models/location";
import {LOGGER, LoggerCustomService} from "../../services/logger-custom.service";

const nameMethod = 'findAll'

@Injectable()
export class LocationClientService {
    private endpoint = "https://rickandmortyapi.com/api/location"

    private readonly logger: LoggerCustomService = new LoggerCustomService(LocationClientService.name);

    constructor(private readonly http: HttpService) {
    }

    async findAll(page): Promise<Pagination<Location>> {

        this.logger.info(nameMethod, `page: ${page}`, LOGGER.INIT)

        const params = {
            page: page
        };

        try {
            const result = await this.http.get<Pagination<Location>>(this.endpoint, {params});
            return result.data;
        } catch (e) {
            this.logger.error(nameMethod, e.message, LOGGER.ERROR);
            throw e;
        }
    }
}
