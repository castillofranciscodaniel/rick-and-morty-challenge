import {Injectable} from '@nestjs/common';
import {CountResult} from "../../dto/count-result";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {CountCharactersInINameableService} from "../util/count-characters/count-characters-in-i-nameable.service";

@Injectable()
export class CountTheLetterLInNamesLocationUseCaseService {

    private letter = 'l'
    private resource = 'location'

    constructor(private readonly dataInMemoryService: DataInMemoryService, private countCharactersService: CountCharactersInINameableService) {
    }

    async handler(): Promise<CountResult> {

        return {
            count: this.countCharactersService.countResultProcess(this.letter, this.dataInMemoryService.locations),
            char: this.letter,
            resource: this.resource,
        }
    }


}
