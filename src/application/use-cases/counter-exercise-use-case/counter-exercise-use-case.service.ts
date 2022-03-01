import {Injectable} from '@nestjs/common';
import {CountResult, ExerciseResult} from "../../dto/count-result";
import {LOGGER, LoggerCustomService} from "../../../infrastructure/services/logger-custom.service";
import {INameable} from "../../../domain/models/INameable";
import {DataInMemoryService} from "../../../infrastructure/services/data-in-memory/data-in-memory.service";

const EXERCISE_NAME = 'Char counter'
const NAME_METHOD = 'handler'
const COUNT_LETTER_C_IN_NAMES_CHARACTER = 'countLetterCInNamesCharacter'
const COUNT_LETTER_L_IN_NAMES_LOCATIONS = 'countLetterCInNamesCharacter'
const COUNT_LETTER_E_IN_NAMES_EPISODES = 'countLetterCInNamesCharacter'
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
        this.logger.info(NAME_METHOD, ``, LOGGER.INIT)

        const resultAll =
            [
                this.countLetterCInNamesCharacters(),
                this.countLetterLInNamesLocations(),
                this.countLetterEInNamesEpisodes()
            ]


        const endTime = new Date().getTime();
        const totalTimeMilliseconds = (endTime - startTime.getTime());
        const seconds = Math.trunc(totalTimeMilliseconds / 1000);
        const rest = totalTimeMilliseconds % 1000;


        this.logger.info(NAME_METHOD, ``, LOGGER.END);

        return {
            exercise_name: EXERCISE_NAME,
            time: `${seconds}s ${rest}ms`,
            in_time: totalTimeMilliseconds <= MAX_TIME_TO_EXECUTE_IN_MILLISECONDS,
            results: resultAll
        } as ExerciseResult<CountResult>;
    }

    private countResultProcess(letter: string, contTheLetters: INameable[]): number {
        this.logger.info(NAME_METHOD, ``, LOGGER.INIT);

        let count = 0;
        contTheLetters.map(character => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === letter) {
                    count++;
                }
            }
        })

        this.logger.info(NAME_METHOD, `count: ${count}`, LOGGER.END);
        return count;
    }

    private countLetterCInNamesCharacters(): CountResult {
        this.logger.info(COUNT_LETTER_C_IN_NAMES_CHARACTER, ``, LOGGER.INIT);

        const count = this.countResultProcess(LETTER_C, this.dataInMemoryService.characters);
        this.logger.info(COUNT_LETTER_C_IN_NAMES_CHARACTER, `count: ${count}`, LOGGER.END);

        return {
            count: count,
            char: LETTER_C,
            resource: RESOURCE_CHARACTER,
        } as CountResult;
    }

    private countLetterEInNamesEpisodes(): CountResult {
        this.logger.info(COUNT_LETTER_E_IN_NAMES_EPISODES, ``, LOGGER.INIT);

        const count = this.countResultProcess(LETTER_E, this.dataInMemoryService.episodes);
        this.logger.info(COUNT_LETTER_E_IN_NAMES_EPISODES, `count: ${count}`, LOGGER.END);

        return {
            count: count,
            char: LETTER_E,
            resource: RESOURCE_EPISODE,
        } as CountResult;
    }

    private countLetterLInNamesLocations(): CountResult {
        this.logger.info(COUNT_LETTER_L_IN_NAMES_LOCATIONS, ``, LOGGER.INIT);

        const count = this.countResultProcess(LETTER_L, this.dataInMemoryService.locations);
        this.logger.info(COUNT_LETTER_L_IN_NAMES_LOCATIONS, `count: ${count}`, LOGGER.END);

        return {
            count: count,
            char: LETTER_L,
            resource: RESOURCE_LOCATION,
        } as CountResult;
    }

}
