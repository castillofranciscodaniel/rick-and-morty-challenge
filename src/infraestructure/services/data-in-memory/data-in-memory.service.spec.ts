import {Test, TestingModule} from '@nestjs/testing';
import {DataInMemoryService} from './data-in-memory.service';
import {ClientsModule} from "../../clients/clients.module";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newLocationPage1,
    newLocationPage2
} from "../../../json-to-test";
import {LocationClientService} from "../../clients/location-client/location-client.service";
import {CharacterClientService} from "../../clients/character-client/character-client.service";
import {EpisodeClientService} from "../../clients/episode-client/episode-client.service";

describe('DataInMemoryService', () => {
    let service: DataInMemoryService;
    let locationClientService: LocationClientService;
    let characterClientService: CharacterClientService;
    let episodeClientService: EpisodeClientService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DataInMemoryService],
            imports: [ClientsModule]
        }).compile();

        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        locationClientService = module.get<LocationClientService>(LocationClientService);
        characterClientService = module.get<CharacterClientService>(CharacterClientService);

        service = module.get<DataInMemoryService>(DataInMemoryService);
    });

    it('should be not throw', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1());
            }
            return Promise.resolve(newLocationPage2());
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1());
            }
            return Promise.resolve(newCharacterPage2());
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1());
            }
            return Promise.resolve(newEpisodePage2());
        });
        await expect(service.load()).resolves.not.toThrow();
    });

    it('should be throw', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation(() => {
            throw new Error('error 400');
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1());
            }
            return Promise.resolve(newCharacterPage2());
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1());
            }
            return Promise.resolve(newEpisodePage2());
        });

        expect(service.load()).resolves.toThrow();
    });
});
