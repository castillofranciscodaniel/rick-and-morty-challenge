import { Test, TestingModule } from '@nestjs/testing';
import { CharacterClientService } from './character-client.service';

describe('CharacterClientService', () => {
  let service: CharacterClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterClientService],
    }).compile();

    service = module.get<CharacterClientService>(CharacterClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
