import {Module} from '@nestjs/common';
import {UseCasesModule} from './use-cases/use-cases.module';
import {
    CountTheLetterEInNamesEpisodeUseCaseService
} from './use-cases/count-the-letter-e-in-names-episode-use-case.service';
import { CountTheLetterIInNamesLocationUseCaseService } from './use-cases/count-the-letter-i-in-names-location-use-case.service';

@Module({
    imports: [UseCasesModule],
    providers: [CountTheLetterEInNamesEpisodeUseCaseService, CountTheLetterIInNamesLocationUseCaseService],
})
export class ApplicationModule {
}
