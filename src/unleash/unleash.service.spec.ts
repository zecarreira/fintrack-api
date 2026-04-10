import { Test, TestingModule } from '@nestjs/testing';
import { UnleashService } from './unleash.service';

describe('UnleashService', () => {
  let service: UnleashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnleashService],
    }).compile();

    service = module.get<UnleashService>(UnleashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
