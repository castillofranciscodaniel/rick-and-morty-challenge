import {Module} from '@nestjs/common';
import {CounterExerciseUseCaseService} from "./counter-exercise-use-case/counter-exercise-use-case.service";
import {
    EpisodeLocationsExerciseUseCaseService
} from './episode-locations-exercise-use-case/episode-locations-exercise-use-case.service';
import {AdaptersModule} from "../../infrastructure/adapters/adapters.module";
import {CalculateValueOfCharacterService} from './calculate-value-of-character/calculate-value-of-character.service';
import {ClientsModule} from "../../infrastructure/clients/clients.module";

@Module({
    providers: [
        CounterExerciseUseCaseService,
        EpisodeLocationsExerciseUseCaseService,
        CalculateValueOfCharacterService,
    ],
    exports: [
        CounterExerciseUseCaseService,
        EpisodeLocationsExerciseUseCaseService,
        CalculateValueOfCharacterService
    ],
    imports: [
        AdaptersModule,
        ClientsModule
    ]
})
export class UseCasesModule {
}
