import {Injectable} from '@nestjs/common';
import {HttpService} from "nestjs-http-promise";
import {Pagination} from "../../dto/pagination";
import {Episode} from "../../../domain/models/episode";
import {IEpisodeRepository} from "../../../domain/ports/IEpisodeRepository";
import {LOGGER, LoggerCustomService} from "../../logger-custom.service";

const nameMethod = 'findAll'

@Injectable()
export class EpisodeClientService {
    private endpoint = process.env.RICK_AND_MORTY_API + 'episode'

    private readonly logger: LoggerCustomService = new LoggerCustomService(EpisodeClientService.name);

    constructor(private readonly http: HttpService) {
    }

    async findAll(page): Promise<Pagination<Episode>> {
        this.logger.info(nameMethod, `page: ${page}`, LOGGER.INIT);

        try {
            const result = await this.http.get<Pagination<Episode>>(this.endpoint, {params: {page: page}});
            this.logger.info(nameMethod, `page: ${page}`, LOGGER.END);
            return result.data;

        } catch (e) {
            this.logger.error(nameMethod, e.message, LOGGER.ERROR);
            throw e;
        }

    }
}
