import { Test, TestingModule } from '@nestjs/testing';
import { LocationRepositoryService } from './location-repository.service';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {DataInMemoryModule} from "../../services/data-in-memory/data-in-memory.module";
import {AdaptersModule} from "../adapters.module";

describe('LocationRepositoryService', () => {
  let service: LocationRepositoryService;
  let dataInMemoryService: DataInMemoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AdaptersModule,DataInMemoryModule],
      providers: [LocationRepositoryService],
    }).compile();

    dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
    service = module.get<LocationRepositoryService>(LocationRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
