import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeLocationsExerciseUseCaseService } from './episode-locations-exercise-use-case.service';

describe('EpisodeLocationsExerciseUseCaseService', () => {
  let service: EpisodeLocationsExerciseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodeLocationsExerciseUseCaseService],
    }).compile();

    service = module.get<EpisodeLocationsExerciseUseCaseService>(EpisodeLocationsExerciseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
