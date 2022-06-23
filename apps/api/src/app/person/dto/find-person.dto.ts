import {
  DivorcedReason,
  Person,
  PersonRelation,
  PersonSex,
  PersonSpouses,
  ProfessionType,
} from '@kinopoiskdev/prisma-api';

export class PersonSpousesDro implements PersonSpouses {
  name: string;
  children: number;
  divorced: boolean;
  divorcedReason: DivorcedReason;
  relation: PersonRelation;
  sex: PersonSex;
}

export class FindPersonDto implements Person {
  // Id properties
  id: string;
  kpId: number;
  // String properties
  name: string;
  enName: string;
  photo: string;
  birthPlace: string[];
  deathPlace: string[];
  // Int properties
  age: number;
  countAwards: number;
  growth: number;
  // Date properties
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
  death: Date;
  // Enum properties
  profession: ProfessionType[];
  sex: PersonSex;
  // Type properties
  spouses: PersonSpousesDro[];
}
