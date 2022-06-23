import {ApiProperty} from '@nestjs/swagger';

export class CoinbaseLocalPrice {
  @ApiProperty()
  amount: string;
  @ApiProperty()
  currency: string;
}
export class CoinbaseEventData {
  @ApiProperty()
  id: string;
  @ApiProperty()
  memo: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  short_code: string;
  @ApiProperty({ type: CoinbaseLocalPrice })
  local_price: CoinbaseLocalPrice;
  @ApiProperty()
  business_name: string;
  @ApiProperty()
  customer_name: string;
  @ApiProperty()
  customer_email: string;
}
export class CoinbaseEvent {
  @ApiProperty()
  api_version: string;
  @ApiProperty()
  created_at: string;
  @ApiProperty({ type: CoinbaseEventData })
  data: CoinbaseEventData;
  @ApiProperty()
  id: string;
  @ApiProperty()
  resource: string;
  @ApiProperty()
  type: string;
}

export class EventCoinbaseDto {
  @ApiProperty()
  attempt_number: number;
  @ApiProperty({ type: CoinbaseEvent })
  event: CoinbaseEvent;
  @ApiProperty()
  id: string;
  @ApiProperty()
  scheduled_for: string;
}
