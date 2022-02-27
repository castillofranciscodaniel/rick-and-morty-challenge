import { Injectable } from '@nestjs/common';
import {CountResult} from "../dto/count-result";
import {Pagination} from "../../infraestructure/dto/pagination";
import {EpisodeClientService} from "../../infraestructure/clients/episode-client.service";
import {Location} from "../../domain/models/location";
import {Episode} from "../../domain/models/episode";

@Injectable()
export class CountTheLetterEInNamesEpisodeUseCaseService {

    private letter = 'e'
    private resource = 'location'

    constructor(private readonly episodeClientService: EpisodeClientService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        const requests: Promise<Pagination<Episode>>[] = [];
        const firstPage = await this.episodeClientService.findAll(1)
        this.countResultProcess(countResult, firstPage)

        for (let i = 1; i <= firstPage.info.pages; i++) {
            requests.push(this.episodeClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                this.countResultProcess(countResult, pag)
            })
        })

        return countResult
    }

    private countResultProcess(countResult: CountResult, pagination: Pagination<Episode>): void {
        pagination.results.map((character) => {
            for (let i = 0; i < character.name?.length; i++) {
                if (character.name.toLowerCase().charAt(i) === this.letter) {
                    countResult.count++
                }
            }
        })
    }

}
