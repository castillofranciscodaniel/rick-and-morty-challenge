import {Injectable} from '@nestjs/common';
import {CountResult} from "../../dto/count-result";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {CountCharactersInINameableService} from "../util/count-characters/count-characters-in-i-nameable.service";
import {LOGGER, LoggerCustomService} from "../../../infraestructure/services/logger-custom.service";

const nameMethod = 'handler'

@Injectable()
export class CountTheLetterLInNamesLocationUseCaseService {

    private letter = 'l';
    private resource = 'location';

    private readonly logger: LoggerCustomService = new LoggerCustomService(CountTheLetterLInNamesLocationUseCaseService.name);

    constructor(private readonly dataInMemoryService: DataInMemoryService, private countCharactersService: CountCharactersInINameableService) {
    }

    handler(): CountResult {

        this.logger.info(nameMethod, ``, LOGGER.INIT);

        const count = this.countCharactersService.countResultProcess(this.letter, this.dataInMemoryService.locations);
        this.logger.info(nameMethod, `count: ${count}`, LOGGER.END);

        return {
            count: this.countCharactersService.countResultProcess(this.letter, this.dataInMemoryService.locations),
            char: this.letter,
            resource: this.resource,
        } as CountResult;
    }


}
