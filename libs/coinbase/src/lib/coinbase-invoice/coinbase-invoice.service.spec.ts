import { Test, TestingModule } from '@nestjs/testing';
import { CoinbaseInvoiceService } from './coinbase-invoice.service';

describe('CoinbaseInvoiceService', () => {
  let service: CoinbaseInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoinbaseInvoiceService],
    }).compile();

    service = module.get<CoinbaseInvoiceService>(CoinbaseInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
