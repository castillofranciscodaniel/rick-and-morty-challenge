import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeClientService } from './episode-client.service';

describe('EpisodeClientService', () => {
  let service: EpisodeClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodeClientService],
    }).compile();

    service = module.get<EpisodeClientService>(EpisodeClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
