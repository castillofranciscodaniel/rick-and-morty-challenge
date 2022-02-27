import {Controller, Get, HttpException, Scope} from '@nestjs/common';
import {catchError, map, Observable, throwError} from "rxjs";
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../../application/use-cases/count-the-letter-c-in-name-character-use-case.service";
import {CountResult} from "../../application/dto/count-result";
import {Character} from "../../domain/models/character";
import {Pagination} from "../../infraestructure/dto/pagination";
import {
    CountTheLetterIInNamesLocationUseCaseService
} from "../../application/use-cases/count-the-letter-i-in-names-location-use-case.service";
import {
    CountTheLetterEInNamesEpisodeUseCaseService
} from "../../application/use-cases/count-the-letter-e-in-names-episode-use-case.service";

@Controller({
    path: "/",
    scope: Scope.REQUEST
})
export class ChallengeResponseController {

    private exercise_name = 'Char counter'
    private maxTimeToExecuteInSeconds = 3

    constructor(
        private readonly countTheLetterCInNameCharacterUseCaseService: CountTheLetterCInNameCharacterUseCaseService,
        private readonly countTheLetterIInNamesLocationUseCaseService: CountTheLetterIInNamesLocationUseCaseService,
        private readonly countTheLetterEInNamesEpisodeUseCaseService: CountTheLetterEInNamesEpisodeUseCaseService
    ) {
    }

    @Get('/challengeResult')
    async handleNextChatSchedule(): Promise<any> {
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
