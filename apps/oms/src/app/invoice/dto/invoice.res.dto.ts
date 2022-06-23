import { Invoice, InvoiceStatus } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

export class InvoiceResDto implements Invoice {
  @ApiProperty()
  id: string;
  @ApiProperty()
  lifetime: number;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  status: InvoiceStatus;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  coinbaseId: string;
}
