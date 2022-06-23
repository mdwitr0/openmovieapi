import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoinbaseInvoiceModule } from '@app/coinbase/coinbase-invoice/coinbase-invoice.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { InvoiceProcessor } from './invoices.processor';
import { BullModule } from '@nestjs/bull';
import { queueNames } from 'src/constants/queue.contacnts';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoiceProcessor],
  imports: [
    ConfigModule,
    UserModule,
    CoinbaseInvoiceModule,
    PrismaModule,
    BullModule.registerQueue({
      name: queueNames.INVOICE,
    }),
  ],
})
export class InvoicesModule {}
