import {IsEmail, IsNotEmpty, IsOptional, IsUUID} from 'class-validator';

import {ApiProperty} from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  username?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  userEmail?: string;
}
