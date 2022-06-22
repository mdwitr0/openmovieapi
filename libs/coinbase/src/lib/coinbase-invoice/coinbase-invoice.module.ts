import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { httpConfig } from '../configs/http.config';
import { CoinbaseInvoiceService } from './coinbase-invoice.service';
import { COINBASE_INVOICE_SERVICE } from './interfaces/coinbase-invoice.interface';

@Module({
  providers: [
    {
      provide: COINBASE_INVOICE_SERVICE,
      useClass: CoinbaseInvoiceService,
    },
  ],
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: httpConfig,
    }),
  ],
  exports: [
    {
      provide: COINBASE_INVOICE_SERVICE,
      useClass: CoinbaseInvoiceService,
    },
  ],
})
export class CoinbaseInvoiceModule {}
