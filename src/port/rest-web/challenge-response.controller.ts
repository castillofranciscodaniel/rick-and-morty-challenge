import {Controller, Get, HttpException, Scope} from '@nestjs/common';
import {catchError, map, Observable, throwError} from "rxjs";
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../../application/use-cases/count-the-letter-c-in-name-character-use-case.service";
import {CountResult, ExerciseResult} from "../../application/dto/count-result";
import {Character} from "../../domain/models/character";
import {Pagination} from "../../infraestructure/dto/pagination";
import {
    CountTheLetterIInNamesLocationUseCaseService
} from "../../application/use-cases/count-the-letter-i-in-names-location-use-case.service";
import {
    CountTheLetterEInNamesEpisodeUseCaseService
} from "../../application/use-cases/count-the-letter-e-in-names-episode-use-case.service";
import {CounterExerciseUseCaseService} from "../../application/use-cases/counter-exercise-use-case.service";

@Controller({
    path: "/",
    scope: Scope.REQUEST
})
export class ChallengeResponseController {

    constructor(
        private readonly counterExerciseUseCaseService: CounterExerciseUseCaseService
    ) {
    }

    @Get('/challengeResult')
     handler(): Promise<any> {
        const startTime = new Date().getTime();

        return  Promise.all<ExerciseResult<CountResult>>(
            [
                this.counterExerciseUseCaseService.handler(),
            ]
        )

    }

}
