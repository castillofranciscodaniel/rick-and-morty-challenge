import {Module} from '@nestjs/common';
import {CountTheLetterCInNameCharacterUseCaseService} from "./count-the-letter-c-in-name-character-use-case.service";
import {CountTheLetterIInNamesLocationUseCaseService} from "./count-the-letter-i-in-names-location-use-case.service";
import {CountTheLetterEInNamesEpisodeUseCaseService} from "./count-the-letter-e-in-names-episode-use-case.service";

@Module({
    providers: [
        CountTheLetterCInNameCharacterUseCaseService,
        CountTheLetterIInNamesLocationUseCaseService,
        CountTheLetterEInNamesEpisodeUseCaseService
    ],
    exports: [
        CountTheLetterCInNameCharacterUseCaseService,
        CountTheLetterIInNamesLocationUseCaseService,
        CountTheLetterEInNamesEpisodeUseCaseService
    ],
})
export class UseCasesModule {
}
