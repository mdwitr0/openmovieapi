import { ApiProperty } from '@nestjs/swagger';
import { Review } from '@kinopoiskdev/prisma-api';

export class FindReviewDto implements Review {
  // Id properties
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty({ required: false })
  kpMovieId: number;
  // String properties
  @ApiProperty({ required: false })
  author: string;
  @ApiProperty({ required: false })
  title: string;
  @ApiProperty({ required: false })
  review: string;
  // Int Properties
  @ApiProperty({ required: false })
  reviewDislikes: number;
  @ApiProperty({ required: false })
  reviewLikes: number;
  @ApiProperty({ required: false })
  userRating: number;
  // Date properties
  @ApiProperty({ required: false, type: Date })
  updatedAt: Date;
  @ApiProperty({ required: false, type: Date })
  createdAt: Date;
  @ApiProperty({ required: false, type: Date })
  date: Date;

  @ApiProperty({ required: false })
  movieId: string;
}
