import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../../infraestructure/clients/character-client.service";
import {CountResult} from "../../dto/count-result";
import {Pagination} from "../../../infraestructure/dto/pagination";
import {Character} from "../../../domain/models/character";
import {Location} from "../../../domain/models/location";
import {LocationClientService} from "../../../infraestructure/clients/location-client.service";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";

@Injectable()
export class CountTheLetterLInNamesLocationUseCaseService {

    private letter = 'l'
    private resource = 'location'

    constructor(private readonly dataInMemoryService: DataInMemoryService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        this.countResultProcess(countResult, this.dataInMemoryService.locations)
        return countResult
    }

    private countResultProcess(countResult: CountResult, locations: Location[]): void {
        locations.map((character) => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === this.letter) {
                    countResult.count++
                }
            }
        })
    }
}
