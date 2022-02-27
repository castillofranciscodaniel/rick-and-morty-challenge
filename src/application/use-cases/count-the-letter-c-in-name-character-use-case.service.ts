import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";
import {Observable, of} from "rxjs";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    constructor(private readonly characterClient: CharacterClientService) {
    }

    handler(): Observable<any> {


        return this.characterClient.findAll(1);
    }

}
