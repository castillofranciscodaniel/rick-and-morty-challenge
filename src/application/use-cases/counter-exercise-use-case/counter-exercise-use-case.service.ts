import {Injectable} from '@nestjs/common';
import {CountResult, ExerciseResult} from "../../dto/count-result";
import {LOGGER, LoggerCustomService} from "../../../infrastructure/services/logger-custom.service";
import {INameable} from "../../../domain/models/INameable";
import {DataInMemoryService} from "../../../infrastructure/services/data-in-memory/data-in-memory.service";

const EXERCISE_NAME = 'Char counter'
const NAME_METHOD = 'handler'
const COUNT_OCCURRENCES_LETTER_IN_NAMES_NAMEABLE = 'countOccurrencesLetterInNamesOfNameable'
const COUNT_RESULT_PROCES = 'countResultProcess'
const LETTER_C = 'c'
const LETTER_L = 'l'
const LETTER_E = 'e'
const RESOURCE_CHARACTER = 'character'
const RESOURCE_EPISODE = 'episode'
const RESOURCE_LOCATION = 'location'
const MAX_TIME_TO_EXECUTE_IN_MILLISECONDS = 3000

@Injectable()
export class CounterExerciseUseCaseService {

    private readonly logger: LoggerCustomService = new LoggerCustomService(CounterExerciseUseCaseService.name);


    constructor(
        private readonly dataInMemoryService: DataInMemoryService) {
    }

    handler(startTime: Date): ExerciseResult<CountResult> {
        this.logger.info(NAME_METHOD, `startTime: ${startTime}`, LOGGER.INIT)

        const resultAll =
            [
                this.countOccurrencesLetterInNamesOfNameable(LETTER_L, 'locations', RESOURCE_LOCATION),
                this.countOccurrencesLetterInNamesOfNameable(LETTER_E, 'episodes', RESOURCE_EPISODE),
                this.countOccurrencesLetterInNamesOfNameable(LETTER_C, 'characters', RESOURCE_CHARACTER),
            ]


        const endTime = new Date();
        const totalTimeMilliseconds = (endTime.getTime() - startTime.getTime());
        const seconds = Math.trunc(totalTimeMilliseconds / 1000);
        const rest = totalTimeMilliseconds % 1000;


        this.logger.info(NAME_METHOD, `endTime: ${endTime}. Total time: ${seconds}s ${rest}ms`, LOGGER.END);

        return {
            exercise_name: EXERCISE_NAME,
            time: `${seconds}s ${rest}ms`,
            in_time: totalTimeMilliseconds <= MAX_TIME_TO_EXECUTE_IN_MILLISECONDS,
            results: resultAll
        } as ExerciseResult<CountResult>;
    }

    private countResultProcess(letter: string, contTheLetters: INameable[]): number {
        this.logger.info(COUNT_RESULT_PROCES, ``, LOGGER.INIT);

        let count = 0;
        contTheLetters.forEach(character => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === letter) {
                    count++;
                }
            }
        })

        this.logger.info(COUNT_RESULT_PROCES, `count: ${count}`, LOGGER.END);
        return count;
    }

    private countOccurrencesLetterInNamesOfNameable(letter: string, memoryKey: string, resource: string): CountResult {
        this.logger.info(COUNT_OCCURRENCES_LETTER_IN_NAMES_NAMEABLE, ``, LOGGER.INIT);

        const count = this.countResultProcess(letter, this.dataInMemoryService[memoryKey]);
        this.logger.info(COUNT_OCCURRENCES_LETTER_IN_NAMES_NAMEABLE, `count: ${count}`, LOGGER.END);

        return {
            char: letter,
            count: count,
            resource: resource,
        } as CountResult;
    }

}
