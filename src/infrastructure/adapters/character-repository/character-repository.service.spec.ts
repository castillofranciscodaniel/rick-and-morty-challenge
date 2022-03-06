import {Test, TestingModule} from '@nestjs/testing';
import {CharacterRepositoryService} from './character-repository.service';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {AdaptersModule} from "../adapters.module";
import {DataInMemoryModule} from "../../services/data-in-memory/data-in-memory.module";

describe('CharacterRepositoryService', () => {
    let service: CharacterRepositoryService;
    let dataInMemoryService: DataInMemoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AdaptersModule,DataInMemoryModule],
            providers: [CharacterRepositoryService],
        }).compile();

        dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
        service = module.get<CharacterRepositoryService>(CharacterRepositoryService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
