import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";
import {catchError, mergeMap, Observable, of, throwError, zip} from "rxjs";
import {CountResult} from "../dto/count-result";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    letter: 'c'
    resource: 'resource'

    constructor(private readonly characterClient: CharacterClientService) {
    }

    handler(): Observable<CountResult> {

        const countResult: CountResult = {
            count: 0,
            char: this.letter,
            resource: this.resource,
        }

        const requests: Observable<any>[] = [];
        for (let i = 0; i <= 42; i++) {
            requests.push(this.characterClient.findAll(i))
        }

        return zip(...requests).pipe(
            mergeMap(characters => {

                characters.flatMap((character) => {
                    for (let i = 0; i < character.name?.length; i++) {
                        if (character.name.toLowerCase().charAt(i) === this.letter) {
                            countResult.count++
                        }
                    }
                })

                return of(countResult)
            }),
            catchError(error => {
                return throwError(error);
            })
        )
    }

}
