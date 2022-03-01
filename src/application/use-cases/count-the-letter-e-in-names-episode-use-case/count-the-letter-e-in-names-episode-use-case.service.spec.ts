import {Test, TestingModule} from '@nestjs/testing';
import {CountTheLetterEInNamesEpisodeUseCaseService} from './count-the-letter-e-in-names-episode-use-case.service';
import {CountResult} from "../../dto/count-result";
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client/episode-client.service";
import {DataInMemoryModule} from "../../../infraestructure/services/data-in-memory/data-in-memory.module";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newLocationPage1,
    newLocationPage2
} from "../../../../test/json-to-test";
import {LocationClientService} from "../../../infraestructure/clients/location-client/location-client.service";
import {CharacterClientService} from "../../../infraestructure/clients/character-client/character-client.service";
import {CountCharactersInINameableService} from "../util/count-characters/count-characters-in-i-nameable.service";
import {UseCasesModule} from "../use-cases.module";

describe('CountTheLetterEInNamesEpisodeUseCaseService', () => {
    let service: CountTheLetterEInNamesEpisodeUseCaseService;
    let episodeClientService: EpisodeClientService;
    let locationClientService: LocationClientService
    let characterClientService: CharacterClientService
    let dataInMemoryService: DataInMemoryService;
    let countCharactersInINameableService: CountCharactersInINameableService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountTheLetterEInNamesEpisodeUseCaseService],
            imports: [ClientsModule, DataInMemoryModule, UseCasesModule]
        }).compile();

        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        locationClientService = module.get<LocationClientService>(LocationClientService);
        characterClientService = module.get<CharacterClientService>(CharacterClientService);
        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
        countCharactersInINameableService = module.get<CountCharactersInINameableService>(CountCharactersInINameableService);

        service = module.get<CountTheLetterEInNamesEpisodeUseCaseService>(CountTheLetterEInNamesEpisodeUseCaseService);


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

    });

    it('should be return an CountResult', async () => {

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1());
            }
            return Promise.resolve(newEpisodePage2());
        });


        await dataInMemoryService.load();

        const countResult: CountResult = {
            count: 8,
            char: 'e',
            resource: 'episode',
        };

        expect(service.handler()).toStrictEqual(countResult);
    });

});
