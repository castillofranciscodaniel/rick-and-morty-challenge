import {Test, TestingModule} from '@nestjs/testing';
import {CountTheLetterLInNamesLocationUseCaseService} from './count-the-letter-l-in-names-location-use-case.service';
import {CountResult} from "../../dto/count-result";
import {LocationClientService} from "../../../infraestructure/clients/location-client.service";
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";
import {DataInMemoryModule} from "../../../infraestructure/services/data-in-memory/data-in-memory.module";
import {newLocationPage1, newLocationPage2} from "../../../json-to-test";

describe('CountTheLetterLInNamesLocationUseCaseService', () => {
    let service: CountTheLetterLInNamesLocationUseCaseService;
    let locationClientService: LocationClientService;
    let dataInMemoryService: DataInMemoryService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountTheLetterLInNamesLocationUseCaseService],
            imports: [ClientsModule, DataInMemoryModule]
        }).compile();

        locationClientService = module.get<LocationClientService>(LocationClientService);
        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
        service = module.get<CountTheLetterLInNamesLocationUseCaseService>(CountTheLetterLInNamesLocationUseCaseService);

    });

    it('should be return an CountResult', async () => {


        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1())
            }
            return Promise.resolve(newLocationPage2())
        });

        await dataInMemoryService.load()

        const countResult: CountResult = {
            count: 2,
            char: 'l',
            resource: 'location',
        };

        expect(await service.handler()).toStrictEqual(countResult);
    });

});

