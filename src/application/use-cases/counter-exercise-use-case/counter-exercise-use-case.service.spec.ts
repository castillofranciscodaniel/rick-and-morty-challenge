import {Test, TestingModule} from '@nestjs/testing';
import {CounterExerciseUseCaseService} from './counter-exercise-use-case.service';
import {CountTheLetterEInNamesEpisodeUseCaseService} from "../count-the-letter-e-in-names-episode-use-case/count-the-letter-e-in-names-episode-use-case.service";
import {CountTheLetterCInNameCharacterUseCaseService} from "../count-the-letter-c-in-name-character-use-case/count-the-letter-c-in-name-character-use-case.service";
import {CountResult} from "../../dto/count-result";
import {CountTheLetterLInNamesLocationUseCaseService} from "../count-the-letter-l-in-names-location-use-case/count-the-letter-l-in-names-location-use-case.service";
import {UseCasesModule} from "../use-cases.module";

describe('CounterExerciseUseCaseService', () => {
    let service: CounterExerciseUseCaseService;
    let countTheLetterLInNamesLocationUseCaseService: CountTheLetterLInNamesLocationUseCaseService;
    let countTheLetterEInNamesEpisodeUseCaseService: CountTheLetterEInNamesEpisodeUseCaseService;
    let countTheLetterCInNameCharacterUseCaseService: CountTheLetterCInNameCharacterUseCaseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [UseCasesModule],
            providers: [CounterExerciseUseCaseService],
        }).compile();

        service = module.get<CounterExerciseUseCaseService>(CounterExerciseUseCaseService);
        countTheLetterLInNamesLocationUseCaseService = module.get<CountTheLetterLInNamesLocationUseCaseService>(CountTheLetterLInNamesLocationUseCaseService);
        countTheLetterEInNamesEpisodeUseCaseService = module.get<CountTheLetterEInNamesEpisodeUseCaseService>(CountTheLetterEInNamesEpisodeUseCaseService);
        countTheLetterCInNameCharacterUseCaseService = module.get<CountTheLetterCInNameCharacterUseCaseService>(CountTheLetterCInNameCharacterUseCaseService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be return an ExerciseResult', async () => {

        jest.spyOn(countTheLetterCInNameCharacterUseCaseService, 'handler').mockImplementation(() => {
            return Promise.resolve(newPageResultC());
        });

        jest.spyOn(countTheLetterLInNamesLocationUseCaseService, 'handler').mockImplementation(() => {
            return Promise.resolve(newPageResultL());
        });

        jest.spyOn(countTheLetterEInNamesEpisodeUseCaseService, 'handler').mockImplementation(() => {
            return Promise.resolve(newPageResultE());
        });


        // c l e
        expect(await service.handler()).toMatchObject({exercise_name: 'Char counter', in_time: true})
        expect(await service.handler()).toMatchObject({
            results: [newPageResultC(), newPageResultL(), newPageResultE()
            ]
        })

    });

});

function newPageResultL(): CountResult {
    return {
        count: 2,
        char: 'l',
        resource: 'location',
    };
}

function newPageResultC(): CountResult {
    return {
        count: 24,
        char: 'c',
        resource: 'location',
    };
}

function newPageResultE(): CountResult {
    return {
        count: 5,
        char: 'e',
        resource: 'location',
    }
}
