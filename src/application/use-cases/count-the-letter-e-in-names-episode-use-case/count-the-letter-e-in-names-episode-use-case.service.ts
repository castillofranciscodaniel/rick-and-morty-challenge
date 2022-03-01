import {Injectable} from '@nestjs/common';
import {CountResult} from "../../dto/count-result";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {CountCharactersInINameableService} from "../util/count-characters/count-characters-in-i-nameable.service";
import {LOGGER, LoggerCustomService} from "../../../infraestructure/services/logger-custom.service";

const nameMethod = 'handler'

@Injectable()
export class CountTheLetterEInNamesEpisodeUseCaseService {

    private letter = 'e'
    private resource = 'episode'

    private readonly logger: LoggerCustomService = new LoggerCustomService(CountTheLetterEInNamesEpisodeUseCaseService.name);


    constructor(private readonly dataInMemoryService: DataInMemoryService, private countCharactersInINameableService: CountCharactersInINameableService) {
    }


    handler(): CountResult {
        this.logger.info(nameMethod, ``, LOGGER.INIT)

        const count = this.countCharactersInINameableService.countResultProcess(this.letter, this.dataInMemoryService.episodes);
        this.logger.info(nameMethod, `count: ${count}`, LOGGER.END)

        return {
            count: count,
            char: this.letter,
            resource: this.resource,
        }
    }

}
