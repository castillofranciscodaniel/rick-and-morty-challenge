import {Module} from '@nestjs/common';
import {CounterExerciseUseCaseService} from "./counter-exercise-use-case/counter-exercise-use-case.service";
import {
    EpisodeLocationsExerciseUseCaseService
} from './episode-locations-exercise-use-case/episode-locations-exercise-use-case.service';
import {DataInMemoryModule} from "../../infrastructure/services/data-in-memory/data-in-memory.module";

@Module({
    providers: [
        CounterExerciseUseCaseService,
        EpisodeLocationsExerciseUseCaseService,
    ],
    exports: [
        CounterExerciseUseCaseService,
        EpisodeLocationsExerciseUseCaseService,
    ],
    imports: [
        DataInMemoryModule
    ]
})
export class UseCasesModule {
}
