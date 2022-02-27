import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";
import {catchError, mergeMap, Observable, of, throwError, zip} from "rxjs";
import {CountResult} from "../dto/count-result";
import {Character} from "../../domain/models/character";
import {Pagination} from "../../infraestructure/dto/pagination";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    private letter = 'c'
    private resource = 'character'

    constructor(private readonly characterClient: CharacterClientService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        const requests: Promise<Pagination<Character>>[] = [];
        const firstPage = await this.characterClient.findAll(1)
        this.countResultProcess(countResult, firstPage)

        for (let i = 1; i <= firstPage.info.pages; i++) {
            requests.push(this.characterClient.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                this.countResultProcess(countResult, pag)
            })
        })

        return countResult
    }

    private countResultProcess(countResult: CountResult, pagination: Pagination<Character>): void {
        pagination.results.map((character) => {
            for (let i = 0; i < character.name?.length; i++) {
                if (character.name.toLowerCase().charAt(i) === this.letter) {
                    countResult.count++
                }
            }
        })
    }

}
