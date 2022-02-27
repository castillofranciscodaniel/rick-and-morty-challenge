import { Test, TestingModule } from '@nestjs/testing';
import { CounterExerciseUseCaseService } from './counter-exercise-use-case.service';

describe('CounterExerciseUseCaseService', () => {
  let service: CounterExerciseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounterExerciseUseCaseService],
    }).compile();

    service = module.get<CounterExerciseUseCaseService>(CounterExerciseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
