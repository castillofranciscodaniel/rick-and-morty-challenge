import { Test, TestingModule } from '@nestjs/testing';
import { LocationClientService } from './location-client.service';

describe('LocationClientService', () => {
  let service: LocationClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationClientService],
    }).compile();

    service = module.get<LocationClientService>(LocationClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
