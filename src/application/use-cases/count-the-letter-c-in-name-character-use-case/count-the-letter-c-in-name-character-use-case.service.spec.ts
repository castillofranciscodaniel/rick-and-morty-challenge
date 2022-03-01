import {Test, TestingModule} from '@nestjs/testing';
import {CountTheLetterCInNameCharacterUseCaseService} from './count-the-letter-c-in-name-character-use-case.service';
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {CharacterClientService} from "../../../infraestructure/clients/character-client.service";
import {Pagination} from "../../../infraestructure/dto/pagination";
import {Character} from "../../../domain/models/character";
import {CountResult} from "../../dto/count-result";
import {DataInMemoryModule} from "../../../infraestructure/services/data-in-memory/data-in-memory.module";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client.service";
import {LocationClientService} from "../../../infraestructure/clients/location-client.service";
import {
    newCharacterPage1, newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newLocationPage1,
    newLocationPage2
} from "../../../json-to-test";

describe('CountTheLetterCInNameCharacterUseCaseService', () => {
    let service: CountTheLetterCInNameCharacterUseCaseService;
    let episodeClientService: EpisodeClientService;
    let locationClientService: LocationClientService
    let characterClientService: CharacterClientService
    let dataInMemoryService: DataInMemoryService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountTheLetterCInNameCharacterUseCaseService],
            imports: [ClientsModule, DataInMemoryModule]
        }).compile();

        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        locationClientService = module.get<LocationClientService>(LocationClientService);
        characterClientService = module.get<CharacterClientService>(CharacterClientService);
        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
        service = module.get<CountTheLetterCInNameCharacterUseCaseService>(CountTheLetterCInNameCharacterUseCaseService);

        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1())
            }
            return Promise.resolve(newLocationPage2())
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1())
            }
            return Promise.resolve(newEpisodePage2())
        });

    });

    it('should be return an CountResult', async () => {

        const countResult: CountResult = {
            count: 4,
            char: 'c',
            resource: 'character',
        }


        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1())
            }
            return Promise.resolve(newCharacterPage2())
        });

        await dataInMemoryService.load()


        expect(await service.handler()).toStrictEqual(countResult);
    });
});
