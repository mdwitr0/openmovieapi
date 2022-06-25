import { MovieFact, PersonFact } from '@kinopoiskdev/prisma-api';

export class FindMovieFactDto implements MovieFact {
  // Id properties
  id: string;
  movieKpId: number;
  movieId: string;
  // String properties
  type: string;
  value: string;
  // Boolean properties
  spoiler: boolean;
  // Date properties
  createdAt: Date;
  updatedAt: Date;
}

export class FindPersonFactDto implements PersonFact {
  // Id properties
  id: string;
  personKpId: number;
  // String properties
  personId: string;
  value: string;
  // Date properties
  updatedAt: Date;
  createdAt: Date;
}
