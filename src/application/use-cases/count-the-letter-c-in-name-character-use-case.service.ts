import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    constructor(private readonly characterClient: CharacterClientService) {
    }

}
