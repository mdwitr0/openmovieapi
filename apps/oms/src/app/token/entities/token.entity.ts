import { Exclude, Expose, Transform } from 'class-transformer';

export class TokenEntity {
  @Expose()
  id: string;
  @Exclude()
  publicKey: string;
  @Expose()
  countRequests: number;
  @Expose()
  countAllRequests: number;
  @Expose()
  userId: string;
  @Expose()
  tariffId: string;
  @Expose()
  publicToken?: string;

  constructor(partial: Partial<TokenEntity>) {
    Object.assign(this, partial);
  }
}
