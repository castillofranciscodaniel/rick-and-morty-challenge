import {Controller, Get, HttpException, Scope} from '@nestjs/common';
import {catchError, map, Observable, throwError} from "rxjs";
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../../application/use-cases/count-the-letter-c-in-name-character-use-case/count-the-letter-c-in-name-character-use-case.service";
import {CountResult, EpisodeLocationResult, ExerciseResult} from "../../application/dto/count-result";
import {Character} from "../../domain/models/character";
import {Pagination} from "../../infraestructure/dto/pagination";
import {
    CountTheLetterLInNamesLocationUseCaseService
} from "../../application/use-cases/count-the-letter-l-in-names-location-use-case/count-the-letter-l-in-names-location-use-case.service";
import {
    CountTheLetterEInNamesEpisodeUseCaseService
} from "../../application/use-cases/count-the-letter-e-in-names-episode-use-case/count-the-letter-e-in-names-episode-use-case.service";
import {
    CounterExerciseUseCaseService
} from "../../application/use-cases/counter-exercise-use-case/counter-exercise-use-case.service";
import {
    EpisodeLocationsExerciseUseCaseService
} from "../../application/use-cases/episode-locations-exercise-use-case/episode-locations-exercise-use-case.service";
import {DataInMemoryService} from "../../infraestructure/services/data-in-memory/data-in-memory.service";

@Controller({
    path: "/",
    scope: Scope.REQUEST
})
export class ChallengeResponseController {

    constructor(
        private readonly dataInMemoryService: DataInMemoryService,
        private readonly counterExerciseUseCaseService: CounterExerciseUseCaseService,
        private readonly episodeLocationsExerciseUseCaseService: EpisodeLocationsExerciseUseCaseService
    ) {
    }

    @Get('/challengeResult')
    async handler(): Promise<ExerciseResult<CountResult | EpisodeLocationResult>[]> {
        const startTime = new Date();

        await this.dataInMemoryService.load()

        return Promise.all<ExerciseResult<CountResult | EpisodeLocationResult>>(
            [
                this.counterExerciseUseCaseService.handler(startTime),
                this.episodeLocationsExerciseUseCaseService.handler(startTime)
            ]
        )

    }

}
