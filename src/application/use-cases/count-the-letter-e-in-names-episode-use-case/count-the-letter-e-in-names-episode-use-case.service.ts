import {Injectable} from '@nestjs/common';
import {CountResult} from "../../dto/count-result";
import {Pagination} from "../../../infraestructure/dto/pagination";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client.service";
import {Episode} from "../../../domain/models/episode";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";

@Injectable()
export class CountTheLetterEInNamesEpisodeUseCaseService {

    private letter = 'e'
    private resource = 'episode'

    constructor(private readonly dataInMemoryService: DataInMemoryService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        this.countResultProcess(countResult, this.dataInMemoryService.episodes)
        return countResult
    }

    private countResultProcess(countResult: CountResult, episodes: Episode[]): void {
        episodes.map((character) => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === this.letter) {
                    countResult.count++
                }
            }
        })
    }

}
