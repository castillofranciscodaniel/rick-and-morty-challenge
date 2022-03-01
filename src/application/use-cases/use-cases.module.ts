import {Module} from '@nestjs/common';
import {CountTheLetterCInNameCharacterUseCaseService} from "./count-the-letter-c-in-name-character-use-case/count-the-letter-c-in-name-character-use-case.service";
import {CountTheLetterLInNamesLocationUseCaseService} from "./count-the-letter-l-in-names-location-use-case/count-the-letter-l-in-names-location-use-case.service";
import {CountTheLetterEInNamesEpisodeUseCaseService} from "./count-the-letter-e-in-names-episode-use-case/count-the-letter-e-in-names-episode-use-case.service";
import {ClientsModule} from "../../infraestructure/clients/clients.module";
import {CounterExerciseUseCaseService} from "./counter-exercise-use-case/counter-exercise-use-case.service";
import { EpisodeLocationsExerciseUseCaseService } from './episode-locations-exercise-use-case/episode-locations-exercise-use-case.service';

@Module({
    providers: [
        CountTheLetterCInNameCharacterUseCaseService,
        CountTheLetterLInNamesLocationUseCaseService,
        CountTheLetterEInNamesEpisodeUseCaseService,
        CounterExerciseUseCaseService,
        EpisodeLocationsExerciseUseCaseService
    ],
    exports: [
        CountTheLetterCInNameCharacterUseCaseService,
        CountTheLetterLInNamesLocationUseCaseService,
        CountTheLetterEInNamesEpisodeUseCaseService,
        CounterExerciseUseCaseService,
        EpisodeLocationsExerciseUseCaseService
    ],
    imports: [
        ClientsModule
    ]
})
export class UseCasesModule {
}
