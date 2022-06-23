import {PartialType} from '@nestjs/mapped-types';
import {Expose, Transform, Type} from 'class-transformer';
import {EventCoinbaseDto} from '../dto/event-coinbase.dto';

export class CoinbaseUpdateInvoiceEntity extends PartialType(EventCoinbaseDto) {
  @Expose()
  @Transform(({ obj }) => obj?.event?.data?.status)
  status: string;
  @Expose()
  @Transform(({ obj }) => obj?.event?.data?.local_price?.amount)
  @Type(() => Number)
  amount: string;

  constructor(partial: Partial<CoinbaseUpdateInvoiceEntity>) {
    super();
    Object.assign(this, partial);
  }
}
