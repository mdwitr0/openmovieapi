import { Expose, Transform, Type } from 'class-transformer';

class LocalPrice {
  @Expose()
  amount: string;
  @Expose()
  currency: string;
}

export class CoinbaseInvoiceEntity {
  amount: number;

  @Expose()
  @Transform(() => 'kinopoisk.dev')
  business_name: string;
  @Expose({ name: 'customer_email' })
  userEmail: string;
  @Expose({ name: 'customer_name' })
  username: string;
  @Expose()
  @Type(() => LocalPrice)
  @Transform(({ obj }) => ({ amount: obj.amount, currency: 'RUB' }))
  local_price: LocalPrice;
  @Expose()
  memo: string;

  constructor(partial: Partial<CoinbaseInvoiceEntity>) {
    Object.assign(this, partial);
  }
}
