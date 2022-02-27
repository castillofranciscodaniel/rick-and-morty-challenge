import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../infraestructure/clients/character-client.service";
import {CountTheLetterCInNameCharacterUseCaseService} from "./count-the-letter-c-in-name-character-use-case.service";
import {CountTheLetterIInNamesLocationUseCaseService} from "./count-the-letter-i-in-names-location-use-case.service";
import {CountTheLetterEInNamesEpisodeUseCaseService} from "./count-the-letter-e-in-names-episode-use-case.service";

@Injectable()
export class CounterExerciseUseCaseService {

    private exercise_name = 'Char counter'
    private maxTimeToExecuteInSeconds = 3

    constructor(
        private readonly countTheLetterCInNameCharacterUseCaseService: CountTheLetterCInNameCharacterUseCaseService,
        private readonly countTheLetterIInNamesLocationUseCaseService: CountTheLetterIInNamesLocationUseCaseService,
        private readonly countTheLetterEInNamesEpisodeUseCaseService: CountTheLetterEInNamesEpisodeUseCaseService
    ) {
    }

    async handler(): Promise<any> {
        const startTime = new Date().getTime();

        const resultAll = await Promise.all(
            [
                this.countTheLetterCInNameCharacterUseCaseService.handler(),
                this.countTheLetterIInNamesLocationUseCaseService.handler(),
                this.countTheLetterEInNamesEpisodeUseCaseService.handler()
            ]
        )

        const endTime = new Date().getTime();
        const totalTimeMilliseconds = (endTime - startTime)
        const seconds = Math.trunc(totalTimeMilliseconds / 1000)
        const rest = totalTimeMilliseconds % 1000

        return {
            exercise_name: this.exercise_name,
            time: `${seconds}s ${rest}`,
            in_time: totalTimeMilliseconds <= this.maxTimeToExecuteInSeconds,
            results: resultAll
        }
    }

}
