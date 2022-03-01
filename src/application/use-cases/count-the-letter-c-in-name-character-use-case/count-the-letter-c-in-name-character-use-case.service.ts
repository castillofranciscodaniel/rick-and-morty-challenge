import {Injectable} from '@nestjs/common';
import {CountResult} from "../../dto/count-result";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {CountCharactersInINameableService} from "../util/count-characters/count-characters-in-i-nameable.service";
import {LOGGER, LoggerCustomService} from "../../../infraestructure/services/logger-custom.service";

const nameMethod = 'handler'

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService {

    private letter = 'c'
    private resource = 'character'


    private readonly logger: LoggerCustomService = new LoggerCustomService(CountTheLetterCInNameCharacterUseCaseService.name);

    constructor(private readonly dataInMemoryService: DataInMemoryService, private countCharactersInINameableService: CountCharactersInINameableService) {
    }

    async handler(): Promise<CountResult> {
        this.logger.info(nameMethod, ``, LOGGER.INIT)

        const count = this.countCharactersInINameableService.countResultProcess(this.letter, this.dataInMemoryService.characters);
        this.logger.info(nameMethod, `count: ${count}`, LOGGER.END)

        return {
            count: count,
            char: this.letter,
            resource: this.resource,
        }
    }

}
