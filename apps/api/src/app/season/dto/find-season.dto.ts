import { Season, SeasonEpisode } from '@kinopoiskdev/prisma-api';
import { ApiProperty } from '@nestjs/swagger';

export class SeasonEpisodeDto implements SeasonEpisode {
  @ApiProperty({ required: false })
  number: number;
  @ApiProperty({ required: false })
  name: string;
  @ApiProperty({ required: false })
  enName: string;
  @ApiProperty({ required: false, type: Date })
  date: Date;
  @ApiProperty({ required: false })
  description: string;
}

export class FindSeasonDto implements Season {
  // Id properties
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty({ required: false })
  movieId: string;
  @ApiProperty({ required: false })
  movieKpId: number;
  // Int properties
  @ApiProperty({ required: false })
  number: number;
  @ApiProperty({ required: false })
  episodesCount: number;
  // Type properties
  @ApiProperty({ required: false, isArray: true, type: SeasonEpisodeDto })
  episodes: SeasonEpisodeDto[];
  // Date properties
  @ApiProperty({ required: false, type: Date })
  updatedAt: Date;
  @ApiProperty({ required: false, type: Date })
  createdAt: Date;
}
