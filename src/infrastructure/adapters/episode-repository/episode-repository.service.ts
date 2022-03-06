import {Injectable} from '@nestjs/common';
import {EpisodeRepository} from "../../../../dist/domain/adapters/episodeRepository";
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";

@Injectable()
export class EpisodeRepositoryService implements EpisodeRepository {

    constructor(private readonly data: DataInMemoryService) {
    }

    findAll(page?: number): any {
        return this.data.episodes;
    }

}
