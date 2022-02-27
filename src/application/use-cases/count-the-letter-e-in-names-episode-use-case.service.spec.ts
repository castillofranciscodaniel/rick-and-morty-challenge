import { Test, TestingModule } from '@nestjs/testing';
import { CountTheLetterEInNamesEpisodeUseCaseService } from './count-the-letter-e-in-names-episode-use-case.service';

describe('CountTheLetterEInNamesEpisodeUseCaseService', () => {
  let service: CountTheLetterEInNamesEpisodeUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountTheLetterEInNamesEpisodeUseCaseService],
    }).compile();

    service = module.get<CountTheLetterEInNamesEpisodeUseCaseService>(CountTheLetterEInNamesEpisodeUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
