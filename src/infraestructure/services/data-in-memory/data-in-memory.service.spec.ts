import {Test, TestingModule} from '@nestjs/testing';
import {DataInMemoryService} from './data-in-memory.service';
import {ClientsModule} from "../../clients/clients.module";
import {newLocationPage1, newLocationPage2} from "../../../json-to-test";
import {LocationClientService} from "../../clients/location-client.service";
import {CharacterClientService} from "../../clients/character-client.service";
import {EpisodeClientService} from "../../clients/episode-client.service";

describe('DataInMemoryService', () => {
    let service: DataInMemoryService;
    let locationClientService: LocationClientService
    let characterClientService: CharacterClientService
    let episodeClientService: EpisodeClientService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DataInMemoryService],
            imports: [ClientsModule]
        }).compile();

        service = module.get<DataInMemoryService>(DataInMemoryService);
    });

    it('should be return true', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1())
            }
            return Promise.resolve(newLocationPage2())
        });

        expect(await service.load()).toEqual(true);
    });
});
