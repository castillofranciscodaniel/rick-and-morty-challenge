import { Injectable } from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";
import {CountResult} from "../dto/count-result";
import {Pagination} from "../../infraestructure/dto/pagination";
import {Character} from "../../domain/models/character";
import {Location} from "../../domain/models/location";
import {LocationClientService} from "../../infraestructure/clients/location-client.service";

@Injectable()
export class CountTheLetterIInNamesLocationUseCaseService {

    private letter = 'c'
    private resource = 'location'

    constructor(private readonly locationClientService: LocationClientService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        const requests: Promise<Pagination<Location>>[] = [];
        const firstPage = await this.locationClientService.findAll(1)
        this.countResultProcess(countResult, firstPage)

        for (let i = 1; i < firstPage.info.pages; i++) {
            requests.push(this.locationClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                this.countResultProcess(countResult, pag)
            })
        })

        return countResult
    }

    private countResultProcess(countResult: CountResult, pagination: Pagination<Location>): void {
        pagination.results.map((character) => {
            for (let i = 0; i < character.name?.length; i++) {
                if (character.name.toLowerCase().charAt(i) === this.letter) {
                    countResult.count++
                }
            }
        })
    }
}
