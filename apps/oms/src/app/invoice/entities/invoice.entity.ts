import {Expose} from 'class-transformer';

export class InvoiceEntity {
  @Expose()
  amount: number;
  @Expose()
  userId: string;
  @Expose()
  coinbaseId: string;

  constructor(partial: Partial<InvoiceEntity>) {
    Object.assign(this, partial);
  }
}
