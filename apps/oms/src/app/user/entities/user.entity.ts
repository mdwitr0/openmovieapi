import { Exclude, Expose, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';
import { TariffEntity } from '../../tariff/entities/tariff.entity';
import { TokenEntity } from '../../token/entities/token.entity';

export class UserEntity {
  @ApiProperty()
  @Expose()
  email: string;
  @ApiProperty()
  @Expose()
  username: string;
  @ApiProperty()
  @Expose()
  role: string;
  @ApiProperty()
  @Expose()
  id: string;
  @ApiProperty()
  @Expose()
  tokenId: string;
  @ApiProperty()
  @Expose()
  access_token?: string;
  @Exclude()
  password: string;
  @ApiProperty()
  @Type(() => TokenEntity)
  @ApiProperty()
  @Expose()
  token?: TokenEntity;
  @Type(() => TariffEntity)
  @ApiProperty()
  @Expose()
  tariff?: TariffEntity;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
