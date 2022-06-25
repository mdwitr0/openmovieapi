import { Collection } from '@kinopoiskdev/prisma-api';

export class FindCollectionDto implements Collection {
  // Id properties
  id: string;
  movieIds: string[];
  kpHdCollectionId: string;
  // String properties
  title: string;
  image: string;
  // Int properties
  sortRange: number;
  // Date properties
  updatedAt: Date;
  createdAt: Date;
}
