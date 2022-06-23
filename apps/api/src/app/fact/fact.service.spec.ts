import { Test, TestingModule } from '@nestjs/testing';
import { FactService } from './fact.service';

describe('FactService', () => {
  let service: FactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactService],
    }).compile();

    service = module.get<FactService>(FactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
