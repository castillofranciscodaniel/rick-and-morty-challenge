import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";
import {catchError, mergeMap, Observable, of, throwError, zip} from "rxjs";
import {CountResult} from "../dto/count-result";
import {Character} from "../../domain/models/character";
import {Pagination} from "../../infraestructure/dto/pagination";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    private letter = 'c'
    private resource = 'resource'

    constructor(private readonly characterClient: CharacterClientService) {
    }

    async handler(): Promise<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }


        const requests: Promise<Pagination<Character>>[] = [];
        for (let i = 0; i <= 42; i++) {
            requests.push(this.characterClient.findAll(i))
        }

        const resultAll = Promise.all(requests)

        await resultAll.then(thenResults => {
            thenResults.map(pag => {
                pag.results.map((character) => {
                    for (let i = 0; i < character.name?.length; i++) {
                        if (character.name.toLowerCase().charAt(i) === this.letter) {
                            countResult.count++
                        }
                    }
                })
            })
        })

        return countResult
    }

}
