import {Inject, Injectable} from '@nestjs/common';
import {CountResult, ExerciseResult} from "../../dto/count-result";
import {INameable} from "../../../domain/models/INameable";
import {LOGGER, LoggerCustomService} from "../../../infrastructure/logger-custom.service";
import {ICharacterRepository} from "../../../domain/adapters/ICharacterRepository";
import {ILocationRepository} from "../../../domain/adapters/ILocationRepository";
import {IEpisodeRepository} from "../../../domain/adapters/IEpisodeRepository";

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
        @Inject(ICharacterRepository) private readonly characterRepository: ICharacterRepository,
        @Inject(ILocationRepository) private readonly locationRepository: ILocationRepository,
        @Inject(IEpisodeRepository) private readonly episodeRepository: IEpisodeRepository
    ) {
    }

    handler(startTime: Date): ExerciseResult<CountResult> {
        this.logger.info(NAME_METHOD, `startTime: ${startTime}`, LOGGER.INIT)

        const resultAll =
            [
                this.countOccurrencesLetterInNamesOfNameable(LETTER_L, this.locationRepository.findAll(), RESOURCE_LOCATION),
                this.countOccurrencesLetterInNamesOfNameable(LETTER_E, this.episodeRepository.findAll(), RESOURCE_EPISODE),
                this.countOccurrencesLetterInNamesOfNameable(LETTER_C, this.characterRepository.findAll(), RESOURCE_CHARACTER),
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

    private countOccurrencesLetterInNamesOfNameable(letter: string, nameable: INameable[], resource: string): CountResult {
        this.logger.info(COUNT_OCCURRENCES_LETTER_IN_NAMES_NAMEABLE, ``, LOGGER.INIT);

        const count = this.countResultProcess(letter, nameable);
        this.logger.info(COUNT_OCCURRENCES_LETTER_IN_NAMES_NAMEABLE, `count: ${count}`, LOGGER.END);

        return {
            char: letter,
            count: count,
            resource: resource,
        } as CountResult;
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

}
