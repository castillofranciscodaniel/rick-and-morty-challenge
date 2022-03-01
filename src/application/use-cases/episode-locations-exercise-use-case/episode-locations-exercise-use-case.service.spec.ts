import {Test, TestingModule} from '@nestjs/testing';
import {EpisodeLocationsExerciseUseCaseService} from './episode-locations-exercise-use-case.service';
import {ClientsModule} from "../../../infrastructure/clients/clients.module";
import {CharacterClientService} from "../../../infrastructure/clients/character-client/character-client.service";
import {LocationClientService} from "../../../infrastructure/clients/location-client/location-client.service";
import {EpisodeClientService} from "../../../infrastructure/clients/episode-client/episode-client.service";
import {
    matchResponseEpisodeLocation,
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newLocationPage1,
    newLocationPage2
} from "../../../../test/json-to-test";
import {DataInMemoryModule} from "../../../infrastructure/services/data-in-memory/data-in-memory.module";
import {DataInMemoryService} from "../../../infrastructure/services/data-in-memory/data-in-memory.service";

describe('EpisodeLocationsExerciseUseCaseService', () => {
    let service: EpisodeLocationsExerciseUseCaseService;

    let characterClientService: CharacterClientService;
    let locationClientService: LocationClientService;
    let episodeClientService: EpisodeClientService;
    let dataInMemoryService: DataInMemoryService

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EpisodeLocationsExerciseUseCaseService],
            imports: [ClientsModule, DataInMemoryModule]
        }).compile();


        characterClientService = module.get<CharacterClientService>(CharacterClientService);
        locationClientService = module.get<LocationClientService>(LocationClientService);
        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService)
        
        service = module.get<EpisodeLocationsExerciseUseCaseService>(EpisodeLocationsExerciseUseCaseService);

        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1())
            }
            return Promise.resolve(newLocationPage2())
        });

    });

    it('should be return episode location exercise result', async () => {

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1())
            }
            return Promise.resolve(newCharacterPage2())
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1())
            }
            return Promise.resolve(newEpisodePage2())
        });

        await dataInMemoryService.load()

        expect(service.handler(new Date())).toMatchObject(matchResponseEpisodeLocation())
    });
});
