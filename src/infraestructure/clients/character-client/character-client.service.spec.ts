import { Test, TestingModule } from '@nestjs/testing';
import { CharacterClientService } from './character-client.service';
import {HttpModule, HttpService} from "nestjs-http-promise";

describe('CharacterClientService', () => {
  let service: CharacterClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterClientService],
      imports: [HttpModule]
    }).compile();

    service = module.get<CharacterClientService>(CharacterClientService);
  });

  it('should be defined', () => {
    expect(service.findAll(1)).toBeDefined();
  });
});
