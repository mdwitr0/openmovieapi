import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoinbaseService } from './coinbase.service';
import { CoinbaseInvoiceModule } from './coinbase-invoice/coinbase-invoice.module';
import { httpConfig } from './configs/http.config';

@Module({
  providers: [CoinbaseService],
  exports: [CoinbaseService],
  imports: [ConfigModule, CoinbaseInvoiceModule],
})
export class CoinbaseModule {}
