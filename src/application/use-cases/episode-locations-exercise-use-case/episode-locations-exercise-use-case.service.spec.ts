import {Test, TestingModule} from '@nestjs/testing';
import {EpisodeLocationsExerciseUseCaseService} from './episode-locations-exercise-use-case.service';
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {CharacterClientService} from "../../../infraestructure/clients/character-client.service";
import {LocationClientService} from "../../../infraestructure/clients/location-client.service";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client.service";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newLocationPage1, newLocationPage2
} from "../../../json-to-test";
import {EpisodeLocationResult, ExerciseResult} from "../../dto/count-result";
import {DataInMemoryModule} from "../../../infraestructure/services/data-in-memory/data-in-memory.module";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";

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

        service = module.get<EpisodeLocationsExerciseUseCaseService>(EpisodeLocationsExerciseUseCaseService);
        characterClientService = module.get<CharacterClientService>(CharacterClientService);
        locationClientService = module.get<LocationClientService>(LocationClientService);
        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService)

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

        expect(await service.handler()).toMatchObject(matchResponse())
    });
});

function matchResponse(): ExerciseResult<EpisodeLocationResult> {
    return {
        "exercise_name": "Episode locations",
        "in_time": true,
        "results": [
            {
                "name": "Pilot",
                "episode": "S01E01",
                "locations": [
                    "Citadel of Ricks"
                ]
            },
            {
                "name": "Lawnmower Dog",
                "episode": "S01E02",
                "locations": [
                    "Citadel of Ricks"
                ]
            },
            {
                "name": "Anatomy Park",
                "episode": "S01E03",
                "locations": [
                    "Citadel of Ricks"
                ]
            },
            {
                "name": "The Wedding Squanchers",
                "episode": "S02E10",
                "locations": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)",
                    "Immortality Field Resort"
                ]
            },
            {
                "name": "The Rickshank Rickdemption",
                "episode": "S03E01",
                "locations": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)"
                ]
            },
            {
                "name": "Rickmancing the Stone",
                "episode": "S03E02",
                "locations": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)"
                ]
            }
        ]
    }
}
