import { Test, TestingModule } from '@nestjs/testing';
import { CountTheLetterIInNamesLocationUseCaseService } from './count-the-letter-i-in-names-location-use-case.service';

describe('CountTheLetterIInNamesLocationUseCaseService', () => {
  let service: CountTheLetterIInNamesLocationUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountTheLetterIInNamesLocationUseCaseService],
    }).compile();

    service = module.get<CountTheLetterIInNamesLocationUseCaseService>(CountTheLetterIInNamesLocationUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
