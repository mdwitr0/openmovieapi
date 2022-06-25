import { Video, VideoSource, VideoType } from '@kinopoiskdev/prisma-api';

export class FindVideoDto implements Video {
  // Id properties
  id: string;
  kpId: number;
  movieId: string;
  // String properties
  name: string;
  url: string;
  // Int properties
  size: number;
  // Enum properties
  source: VideoSource;
  type: VideoType;
  // Date properties
  updatedAt: Date;
  createdAt: Date;
}
