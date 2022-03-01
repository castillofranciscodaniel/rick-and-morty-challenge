import {Controller, Get, Scope} from '@nestjs/common';
import {CountResult, EpisodeLocationResult, ExerciseResult} from "../../application/dto/count-result";
import {
    CounterExerciseUseCaseService
} from "../../application/use-cases/counter-exercise-use-case/counter-exercise-use-case.service";
import {
    EpisodeLocationsExerciseUseCaseService
} from "../../application/use-cases/episode-locations-exercise-use-case/episode-locations-exercise-use-case.service";
import {DataInMemoryService} from "../../infraestructure/services/data-in-memory/data-in-memory.service";
import {LOGGER, LoggerCustomService} from "../../infraestructure/services/logger-custom.service";

const nameMethod = 'handler'

@Controller({
    path: "/",
    scope: Scope.REQUEST
})
export class ChallengeResponseController {

    private readonly logger: LoggerCustomService = new LoggerCustomService(ChallengeResponseController.name);


    constructor(
        private readonly dataInMemoryService: DataInMemoryService,
        private readonly counterExerciseUseCaseService: CounterExerciseUseCaseService,
        private readonly episodeLocationsExerciseUseCaseService: EpisodeLocationsExerciseUseCaseService
    ) {
    }

    @Get('/challengeResult')
    async handler(): Promise<ExerciseResult<CountResult | EpisodeLocationResult>[]> {
        this.logger.info(nameMethod, '', LOGGER.INIT)

        const startTime = new Date();

        this.logger.info(nameMethod, '', LOGGER.INIT)

        try {
            await this.dataInMemoryService.load()
        } catch (e) {
            this.logger.error(nameMethod, e.message, LOGGER.ERROR)
            throw e
        }

        this.logger.info(nameMethod, ``, LOGGER.END)
        return Promise.all<ExerciseResult<CountResult | EpisodeLocationResult>>(
            [
                this.counterExerciseUseCaseService.handler(startTime),
                this.episodeLocationsExerciseUseCaseService.handler(startTime)
            ]
        )
    }
}
