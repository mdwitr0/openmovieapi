import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ maximum: 20 })
  @IsNotEmpty()
  @MaxLength(20)
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
}
