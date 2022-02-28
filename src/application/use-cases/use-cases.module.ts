import {Module} from '@nestjs/common';
import {CountTheLetterCInNameCharacterUseCaseService} from "./count-the-letter-c-in-name-character-use-case.service";
import {CountTheLetterIInNamesLocationUseCaseService} from "./count-the-letter-i-in-names-location-use-case.service";
import {CountTheLetterEInNamesEpisodeUseCaseService} from "./count-the-letter-e-in-names-episode-use-case.service";
import {ClientsModule} from "../../infraestructure/clients/clients.module";
import {CounterExerciseUseCaseService} from "./counter-exercise-use-case.service";

@Module({
    providers: [
        CountTheLetterCInNameCharacterUseCaseService,
        CountTheLetterIInNamesLocationUseCaseService,
        CountTheLetterEInNamesEpisodeUseCaseService,
        CounterExerciseUseCaseService
    ],
    exports: [
        CountTheLetterCInNameCharacterUseCaseService,
        CountTheLetterIInNamesLocationUseCaseService,
        CountTheLetterEInNamesEpisodeUseCaseService,
        CounterExerciseUseCaseService
    ],
    imports: [
        ClientsModule
    ]
})
export class UseCasesModule {
}
