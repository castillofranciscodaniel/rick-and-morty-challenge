import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeResponseController } from './challenge-response.controller';

describe('ChallengeResponseController', () => {
  let controller: ChallengeResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeResponseController],
    }).compile();

    controller = module.get<ChallengeResponseController>(ChallengeResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
