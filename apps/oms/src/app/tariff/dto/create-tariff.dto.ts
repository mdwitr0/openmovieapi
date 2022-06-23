import {ApiProperty} from '@nestjs/swagger';

export class CreateTariffDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly maxDailyCountRequests: number;
}
