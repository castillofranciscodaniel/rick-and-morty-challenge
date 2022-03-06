import {Test, TestingModule} from '@nestjs/testing';
import {EpisodeLocationsExerciseUseCaseService} from './episode-locations-exercise-use-case.service';
import {
    matchResponseEpisodeLocation,
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2
} from "../../../../test/json-to-test";
import {ICharacterRepository} from "../../../domain/ports/ICharacterRepository";
import {AdaptersModule} from "../../../infrastructure/adapters/adapters.module";
import {IEpisodeRepository} from "../../../domain/ports/IEpisodeRepository";

describe('EpisodeLocationsExerciseUseCaseService', () => {
    let service: EpisodeLocationsExerciseUseCaseService;

    let characterClientService: ICharacterRepository;
    let episodeClientService: IEpisodeRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EpisodeLocationsExerciseUseCaseService],
            imports: [AdaptersModule]
        }).compile();


        characterClientService = module.get<ICharacterRepository>(ICharacterRepository);
        episodeClientService = module.get<IEpisodeRepository>(IEpisodeRepository);

        service = module.get<EpisodeLocationsExerciseUseCaseService>(EpisodeLocationsExerciseUseCaseService);

    });

    it('should be return episode location exercise result', async () => {

        jest.spyOn(characterClientService, 'findAll').mockImplementation(() => {
            return [...newCharacterPage1().results, ...newCharacterPage2().results]
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation(() => {
            return [...newEpisodePage1().results, ...newEpisodePage2().results]
        });

        expect(service.handler(new Date())).toMatchObject(matchResponseEpisodeLocation())
    });
});
