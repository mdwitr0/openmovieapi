import {Expose} from 'class-transformer';

export class TariffEntity {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  price: number;
  @Expose()
  maxDailyCountRequests: number;

  constructor(partial: Partial<TariffEntity>) {
    Object.assign(this, partial);
  }
}
