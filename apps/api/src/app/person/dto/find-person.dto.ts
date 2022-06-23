import {
  DivorcedReason,
  Person,
  PersonRelation,
  PersonSex,
  PersonSpouses,
  ProfessionType,
} from '@kinopoiskdev/prisma-api';
import { ApiProperty } from '@nestjs/swagger';

export class PersonSpousesDro implements PersonSpouses {
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  children: number;

  @ApiProperty({ required: false })
  divorced: boolean;

  @ApiProperty({ required: false, enum: DivorcedReason })
  divorcedReason: DivorcedReason;

  @ApiProperty({ required: false, enum: PersonRelation })
  relation: PersonRelation;

  @ApiProperty({ required: false, enum: PersonSex })
  sex: PersonSex;
}

export class FindPersonDto implements Person {
  // Id properties

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  kpId: number;
  // String properties

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  enName: string;

  @ApiProperty({ required: false })
  photo: string;

  @ApiProperty({ required: false, isArray: true })
  birthPlace: string[];

  @ApiProperty({ required: false, isArray: true })
  deathPlace: string[];
  // Int properties

  @ApiProperty({ required: false })
  age: number;

  @ApiProperty({ required: false })
  countAwards: number;

  @ApiProperty({ required: false })
  growth: number;
  // Date properties

  @ApiProperty({ required: false, type: Date })
  birthday: Date;

  @ApiProperty({ required: false, type: Date })
  createdAt: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt: Date;

  @ApiProperty({ required: false, type: Date })
  death: Date;
  // Enum properties

  @ApiProperty({ required: false, isArray: true, enum: ProfessionType })
  profession: ProfessionType[];

  @ApiProperty({ required: false, enum: PersonSex })
  sex: PersonSex;
  // Type properties

  @ApiProperty({ required: false, isArray: true, type: PersonSpousesDro })
  spouses: PersonSpousesDro[];
}
