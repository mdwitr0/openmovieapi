import { Test, TestingModule } from '@nestjs/testing';
import { TariffController } from './tariff.controller';
import { TariffService } from './tariff.service';

describe('TariffsController', () => {
  let controller: TariffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TariffController],
      providers: [TariffService],
    }).compile();

    controller = module.get<TariffController>(TariffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
