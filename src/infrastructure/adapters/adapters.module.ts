import {Module} from '@nestjs/common';
import {ICharacterRepository} from "../../domain/adapters/ICharacterRepository";
import {CharacterRepositoryService} from "./character-repository/character-repository.service";
import {ILocationRepository} from "../../domain/adapters/ILocationRepository";
import {IEpisodeRepository} from "../../domain/adapters/IEpisodeRepository";
import {LocationRepositoryService} from "./location-repository/location-repository.service";
import {EpisodeRepositoryService} from "./episode-repository/episode-repository.service";
import {DataInMemoryModule} from "../services/data-in-memory/data-in-memory.module";

@Module({
    imports: [DataInMemoryModule],
    providers: [
        {
            provide: ICharacterRepository,
            useClass: CharacterRepositoryService
        },
        {
            provide: ILocationRepository,
            useClass: LocationRepositoryService
        },
        {
            provide: IEpisodeRepository,
            useClass: EpisodeRepositoryService
        }
    ],
    exports: [ICharacterRepository, ILocationRepository, IEpisodeRepository]
})
export class AdaptersModule {
}
