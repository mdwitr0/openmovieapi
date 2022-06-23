import { Test, TestingModule } from '@nestjs/testing';
import { FactController } from './fact.controller';
import { FactService } from './fact.service';

describe('FactController', () => {
  let controller: FactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactController],
      providers: [FactService],
    }).compile();

    controller = module.get<FactController>(FactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
