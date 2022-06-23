import { CoinbaseInvoiceModule } from './coinbase-invoice/coinbase-invoice.module';
import { CoinbaseService } from './coinbase.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  providers: [CoinbaseService],
  exports: [CoinbaseService],
  imports: [ConfigModule, CoinbaseInvoiceModule],
})
export class CoinbaseModule {}
