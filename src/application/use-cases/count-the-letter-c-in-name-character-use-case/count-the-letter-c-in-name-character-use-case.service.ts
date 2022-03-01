import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../../infraestructure/clients/character-client/character-client.service";
import {catchError, mergeMap, Observable, of, throwError, zip} from "rxjs";
import {CountResult} from "../../dto/count-result";
import {Character} from "../../../domain/models/character";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    private letter = 'c'
    private resource = 'character'

    constructor(private readonly dataInMemoryService: DataInMemoryService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        this.countResultProcess(countResult, this.dataInMemoryService.characters)

        return countResult
    }

    private countResultProcess(countResult: CountResult, pagination: Character[]): void {
        pagination.map((character) => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === this.letter) {
                    countResult.count++
                }
            }
        })
    }

}
