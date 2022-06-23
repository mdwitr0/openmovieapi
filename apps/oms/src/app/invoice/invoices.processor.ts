import { Process, Processor } from '@nestjs/bull';
import { jobNames, queueNames } from '../constants/queue.constant';

import { CoinbaseUpdateInvoiceEntity } from './entities/coinbase-update-invoice.entity';
import { EventCoinbaseDto } from './dto/event-coinbase.dto';
import { InvoicesService } from './invoices.service';
import { Job } from 'bull';
import { instanceToPlain } from 'class-transformer';

@Processor(queueNames.INVOICE)
export class InvoiceProcessor {
  constructor(private readonly invoicesService: InvoicesService) {}
  @Process(jobNames.COINBASE_EVENT)
  onCoinbaseWebhookEvent(event: Job<EventCoinbaseDto>) {
    this.invoicesService.update(
      event.data.event.data.memo,
      instanceToPlain(new CoinbaseUpdateInvoiceEntity(event.data), {
        strategy: 'excludeAll',
      })
    );
  }
}
