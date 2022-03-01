import {Injectable} from '@nestjs/common';
import {INameable} from "../../../../domain/models/INameable";
import {LOGGER, LoggerCustomService} from "../../../../infraestructure/services/logger-custom.service";

const nameMethod = 'countResultProcess'

@Injectable()
export class CountCharactersInINameableService {

    private readonly logger: LoggerCustomService = new LoggerCustomService(CountCharactersInINameableService.name);


    countResultProcess(letter: string, contTheLetters: INameable[]): number {
        this.logger.info(nameMethod, ``, LOGGER.INIT)

        let count = 0;
        contTheLetters.map(character => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === letter) {
                    count++
                }
            }
        })

        this.logger.info(nameMethod, `count: ${count}`, LOGGER.END)
        return count;
    }

}
