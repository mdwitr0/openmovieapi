import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @ApiProperty()
  publicKey?: string;
  @ApiProperty()
  countRequests?: number;
  @ApiProperty()
  countAllRequests?: number;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  tariffId: string;
}
