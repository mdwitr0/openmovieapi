import { BullModule } from '@nestjs/bull';
import { CoinbaseInvoiceModule } from '@kinopoiskdev/coinbase';
import { ConfigModule } from '@nestjs/config';
import { InvoiceProcessor } from './invoices.processor';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Module } from '@nestjs/common';
import { PrismaOmsModule } from '@kinopoiskdev/prisma-oms';
import { UserModule } from '../user/user.module';
import { queueNames } from '../constants/queue.constant';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoiceProcessor],
  imports: [
    ConfigModule,
    UserModule,
    CoinbaseInvoiceModule,
    PrismaOmsModule,
    BullModule.registerQueue({
      name: queueNames.INVOICE,
    }),
  ],
})
export class InvoicesModule {}
