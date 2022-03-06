import {Module} from '@nestjs/common';
import {CounterExerciseUseCaseService} from "./counter-exercise-use-case/counter-exercise-use-case.service";
import {
    EpisodeLocationsExerciseUseCaseService
} from './episode-locations-exercise-use-case/episode-locations-exercise-use-case.service';
import {AdaptersModule} from "../../infrastructure/adapters/adapters.module";

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
        AdaptersModule
    ]
})
export class UseCasesModule {
}
