import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { instanceToPlain } from 'class-transformer';
import { jobNames, queueNames } from 'src/constants/queue.contacnts';
import { EventCoinbaseDto } from './dto/event-coinbase.dto';
import { CoinbaseUpdateInvoiceEntity } from './entities/coinbase-update-invoice.entity';
import { InvoicesService } from './invoices.service';

@Processor(queueNames.INVOICE)
export class InvoiceProcessor {
  constructor(private readonly invoicesService: InvoicesService) {}
  @Process(jobNames.COINBASE_EVENT)
  onCoinbaseWebhookEvent(event: Job<EventCoinbaseDto>) {
    this.invoicesService.update(
      event.data.event.data.memo,
      instanceToPlain(new CoinbaseUpdateInvoiceEntity(event.data), {
        strategy: 'excludeAll',
      }),
    );
  }
}
