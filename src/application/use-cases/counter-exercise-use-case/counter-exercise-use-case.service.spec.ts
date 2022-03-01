import {Test, TestingModule} from '@nestjs/testing';
import {CounterExerciseUseCaseService} from './counter-exercise-use-case.service';
import {CountResult} from "../../dto/count-result";
import {CharacterClientService} from "../../../infraestructure/clients/character-client/character-client.service";
import {LocationClientService} from "../../../infraestructure/clients/location-client/location-client.service";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client/episode-client.service";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2, newExerciseCResultCharCounter,
    newLocationPage1,
    newLocationPage2
} from "../../../../test/json-to-test";
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {DataInMemoryModule} from "../../../infraestructure/services/data-in-memory/data-in-memory.module";

describe('CounterExerciseUseCaseService', () => {
    let service: CounterExerciseUseCaseService;
    let characterClientService: CharacterClientService;
    let locationClientService: LocationClientService;
    let episodeClientService: EpisodeClientService;
    let dataInMemoryService: DataInMemoryService

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ClientsModule, DataInMemoryModule],
            providers: [CounterExerciseUseCaseService],
        }).compile();

        characterClientService = module.get<CharacterClientService>(CharacterClientService);
        locationClientService = module.get<LocationClientService>(LocationClientService);
        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService)

        service = module.get<CounterExerciseUseCaseService>(CounterExerciseUseCaseService);
    });

    it('should be return an ExerciseResult', async () => {

        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1())
            }
            return Promise.resolve(newLocationPage2())
        });

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

        const response = service.handler(new Date());

        expect(response).toMatchObject({exercise_name: 'Char counter', in_time: true})
        expect(response).toMatchObject(newExerciseCResultCharCounter());

    });

});
