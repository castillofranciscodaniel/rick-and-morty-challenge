import {Injectable} from '@nestjs/common';
import {CountResult} from "../../dto/count-result";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {CountCharactersInINameableService} from "../util/count-characters/count-characters-in-i-nameable.service";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    private letter = 'c'
    private resource = 'character'

    constructor(private readonly dataInMemoryService: DataInMemoryService, private countCharactersInINameableService: CountCharactersInINameableService) {
    }

    async handler(): Promise<CountResult> {

        return {
            count: this.countCharactersInINameableService.countResultProcess(this.letter, this.dataInMemoryService.characters),
            char: this.letter,
            resource: this.resource,
        }
    }

}
