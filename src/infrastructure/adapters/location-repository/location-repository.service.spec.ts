import {Test, TestingModule} from '@nestjs/testing';
import {LocationRepositoryService} from './location-repository.service';
import {DataInMemoryService} from "../../data-in-memory/data-in-memory.service";
import {DataInMemoryModule} from "../../data-in-memory/data-in-memory.module";
import {AdaptersModule} from "../adapters.module";
import {newLocationPage1, newLocationPage2} from "../../../../test/json-to-test";

describe('LocationRepositoryService', () => {
    let service: LocationRepositoryService;
    let dataInMemoryService: DataInMemoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AdaptersModule, DataInMemoryModule],
            providers: [LocationRepositoryService],
        }).compile();

        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
        service = module.get<LocationRepositoryService>(LocationRepositoryService);
    });

    it('should be return an locations array', () => {

        jest.spyOn(dataInMemoryService, 'locations', 'get').mockImplementation(() => {
            return [...newLocationPage1().results, ...newLocationPage2().results];
        });

        expect(service.findAll()).toMatchObject([...newLocationPage1().results, ...newLocationPage2().results]);
    });
});
