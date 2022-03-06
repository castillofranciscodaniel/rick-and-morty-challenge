import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeRepositoryService } from './episode-repository.service';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {AdaptersModule} from "../adapters.module";
import {DataInMemoryModule} from "../../services/data-in-memory/data-in-memory.module";

describe('EpisodeRepositoryService', () => {
  let service: EpisodeRepositoryService;
  let dataInMemoryService: DataInMemoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AdaptersModule,DataInMemoryModule],
      providers: [EpisodeRepositoryService],
    }).compile();

    dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
    service = module.get<EpisodeRepositoryService>(EpisodeRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
