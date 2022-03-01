import { Test, TestingModule } from '@nestjs/testing';
import { DataInMemoryService } from './data-in-memory.service';

describe('DataInMemoryService', () => {
  let service: DataInMemoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataInMemoryService],
    }).compile();

    service = module.get<DataInMemoryService>(DataInMemoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
