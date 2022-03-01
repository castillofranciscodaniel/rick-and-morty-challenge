import {Test, TestingModule} from '@nestjs/testing';
import {DataInMemoryService} from './data-in-memory.service';
import {ClientsModule} from "../../clients/clients.module";

describe('DataInMemoryService', () => {
    let service: DataInMemoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DataInMemoryService],
            imports: [ClientsModule]
        }).compile();

        service = module.get<DataInMemoryService>(DataInMemoryService);
    });

    it('should be return true', async () => {
        expect(await service.load()).toEqual(true);
    });
});
