import { Test, TestingModule } from '@nestjs/testing';
import { CountTheLetterCInNameCharacterUseCaseService } from './count-the-letter-c-in-name-character-use-case.service';

describe('CountTheLetterCInNameCharacterUseCaseService', () => {
  let service: CountTheLetterCInNameCharacterUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountTheLetterCInNameCharacterUseCaseService],
    }).compile();

    service = module.get<CountTheLetterCInNameCharacterUseCaseService>(CountTheLetterCInNameCharacterUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
