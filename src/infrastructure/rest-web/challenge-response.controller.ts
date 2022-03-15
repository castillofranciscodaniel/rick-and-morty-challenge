import {Controller, Get, Scope} from '@nestjs/common';
import {CalculateValue, CountResult, EpisodeLocationResult, ExerciseResult} from "../../application/dto/count-result";
import {
    CounterExerciseUseCaseService
} from "../../application/use-cases/counter-exercise-use-case/counter-exercise-use-case.service";
import {
    EpisodeLocationsExerciseUseCaseService
} from "../../application/use-cases/episode-locations-exercise-use-case/episode-locations-exercise-use-case.service";
import {DataInMemoryService} from "../data-in-memory/data-in-memory.service";
import {LOGGER, LoggerCustomService} from "../logger-custom.service";
import {
    CalculateValueOfCharacterService
} from "../../application/use-cases/calculate-value-of-character/calculate-value-of-character.service";

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
        private readonly episodeLocationsExerciseUseCaseService: EpisodeLocationsExerciseUseCaseService,
        private readonly calculateValueOfCharacterService: CalculateValueOfCharacterService
    ) {
    }

    @Get()
    async handler(): Promise<ExerciseResult<CountResult | EpisodeLocationResult | CalculateValue>[]> {
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

        return [
            this.counterExerciseUseCaseService.handler(startTime),
            this.episodeLocationsExerciseUseCaseService.handler(startTime),
            this.calculateValueOfCharacterService.handler(startTime)
        ]

    }

}
