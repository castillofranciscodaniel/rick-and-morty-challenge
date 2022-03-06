import {Test, TestingModule} from '@nestjs/testing';
import {CounterExerciseUseCaseService} from './counter-exercise-use-case.service';
import {CharacterClientService} from "../../../infrastructure/clients/character-client/character-client.service";
import {LocationClientService} from "../../../infrastructure/clients/location-client/location-client.service";
import {EpisodeClientService} from "../../../infrastructure/clients/episode-client/episode-client.service";
import {DataInMemoryService} from "../../../infrastructure/services/data-in-memory/data-in-memory.service";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newExerciseCResultCharCounter,
    newLocationPage1,
    newLocationPage2
} from "../../../../test/json-to-test";
import {DataInMemoryModule} from "../../../infrastructure/services/data-in-memory/data-in-memory.module";
import {AdaptersModule} from "../../../infrastructure/adapters/adapters.module";
import {ICharacterRepository} from "../../../domain/ports/ICharacterRepository";
import {ILocationRepository} from "../../../domain/ports/ILocationRepository";
import {IEpisodeRepository} from "../../../domain/ports/IEpisodeRepository";

describe('CounterExerciseUseCaseService', () => {
    let service: CounterExerciseUseCaseService;
    let characterClientService: ICharacterRepository;
    let locationClientService: ILocationRepository;
    let episodeClientService: IEpisodeRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AdaptersModule],
            providers: [CounterExerciseUseCaseService],
        }).compile();

        characterClientService = module.get<ICharacterRepository>(ICharacterRepository);
        locationClientService = module.get<ILocationRepository>(ILocationRepository);
        episodeClientService = module.get<IEpisodeRepository>(IEpisodeRepository);

        service = module.get<CounterExerciseUseCaseService>(CounterExerciseUseCaseService);
    });

    it('should be return an ExerciseResult', () => {

        jest.spyOn(locationClientService, 'findAll').mockImplementation(() => {
            return [...newLocationPage1().results, ...newLocationPage2().results]
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation(() => {
            return [...newCharacterPage1().results, ...newCharacterPage2().results]
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation(() => {
            return [...newEpisodePage1().results, ...newEpisodePage2().results]
        });

        const response = service.handler(new Date());

        expect(response).toMatchObject({exercise_name: 'Char counter', in_time: true})
        expect(response).toMatchObject(newExerciseCResultCharCounter());

    });

});
