import {Injectable} from '@nestjs/common';
import {CharacterClientService} from "../../../infraestructure/clients/character-client.service";
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../count-the-letter-c-in-name-character-use-case/count-the-letter-c-in-name-character-use-case.service";
import {
    CountTheLetterLInNamesLocationUseCaseService
} from "../count-the-letter-l-in-names-location-use-case/count-the-letter-l-in-names-location-use-case.service";
import {
    CountTheLetterEInNamesEpisodeUseCaseService
} from "../count-the-letter-e-in-names-episode-use-case/count-the-letter-e-in-names-episode-use-case.service";
import {CountResult, ExerciseResult} from "../../dto/count-result";

@Injectable()
export class CounterExerciseUseCaseService {

    private readonly exercise_name;
    private readonly maxTimeToExecuteInMilliseconds;

    constructor(
        private readonly countTheLetterCInNameCharacterUseCaseService: CountTheLetterCInNameCharacterUseCaseService,
        private readonly countTheLetterIInNamesLocationUseCaseService: CountTheLetterLInNamesLocationUseCaseService,
        private readonly countTheLetterEInNamesEpisodeUseCaseService: CountTheLetterEInNamesEpisodeUseCaseService
    ) {
        this.exercise_name = 'Char counter';
        this.maxTimeToExecuteInMilliseconds = 3000
    }

    async handler(): Promise<ExerciseResult<CountResult>> {
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
            time: `${seconds}s ${rest}ms`,
            in_time: totalTimeMilliseconds <= this.maxTimeToExecuteInMilliseconds,
            results: resultAll
        } as ExerciseResult<CountResult>
    }

}
