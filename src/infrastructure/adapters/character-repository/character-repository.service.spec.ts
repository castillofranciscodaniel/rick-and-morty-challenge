import { Test, TestingModule } from '@nestjs/testing';
import { CharacterRepositoryService } from './character-repository.service';
import {CharacterClientService} from "../../clients/character-client/character-client.service";

describe('CharacterRepositoryService', () => {
  let service: CharacterRepositoryService;
  let characterClientService: CharacterClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterRepositoryService],
    }).compile();

    characterClientService = module.get<CharacterClientService>(CharacterClientService);
    service = module.get<CharacterRepositoryService>(CharacterRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
