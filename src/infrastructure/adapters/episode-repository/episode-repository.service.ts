import {Injectable} from '@nestjs/common';
import {DataInMemoryService} from "../../data-in-memory/data-in-memory.service";
import {IEpisodeRepository} from "../../../domain/ports/IEpisodeRepository";

@Injectable()
export class EpisodeRepositoryService implements IEpisodeRepository {

    constructor(private readonly data: DataInMemoryService) {
    }

    findAll(page?: number): any {
        return this.data.episodes;
    }

}
