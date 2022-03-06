import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeRepositoryService } from './episode-repository.service';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";

describe('EpisodeRepositoryService', () => {
  let service: EpisodeRepositoryService;
  let dataInMemoryService: DataInMemoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodeRepositoryService],
    }).compile();

    dataInMemoryService = module.get<DataInMemoryService>(DataInMemoryService);
    service = module.get<EpisodeRepositoryService>(EpisodeRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
