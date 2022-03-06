import {Test, TestingModule} from '@nestjs/testing';
import {EpisodeRepositoryService} from './episode-repository.service';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {AdaptersModule} from "../adapters.module";
import {DataInMemoryModule} from "../../services/data-in-memory/data-in-memory.module";
import {newEpisodePage1, newEpisodePage2} from "../../../../test/json-to-test";

describe('EpisodeRepositoryService', () => {
    let service: EpisodeRepositoryService;
    let dataInMemoryService: DataInMemoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AdaptersModule, DataInMemoryModule],
            providers: [EpisodeRepositoryService],
        }).compile();

        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
        service = module.get<EpisodeRepositoryService>(EpisodeRepositoryService);
    });

    it('should be return an episodes array', () => {

        jest.spyOn(dataInMemoryService, 'episodes', 'get').mockImplementation(() => {
            return [...newEpisodePage1().results, ...newEpisodePage2().results];
        });

        expect(service.findAll()).toMatchObject([...newEpisodePage1().results, ...newEpisodePage2().results]);
    });

});
