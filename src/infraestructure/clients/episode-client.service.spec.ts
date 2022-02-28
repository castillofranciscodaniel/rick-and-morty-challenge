import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeClientService } from './episode-client.service';
import {HttpModule} from "nestjs-http-promise";

describe('EpisodeClientService', () => {
  let service: EpisodeClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodeClientService],
      imports: [HttpModule]
    }).compile();

    service = module.get<EpisodeClientService>(EpisodeClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
