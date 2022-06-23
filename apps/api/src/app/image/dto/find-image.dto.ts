import { Image, ImageType } from '@kinopoiskdev/prisma-api';
import { ApiProperty } from '@nestjs/swagger';

export class FindImageDto implements Image {
  // Id properties
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty({ required: false })
  movieId: string;
  @ApiProperty({ required: false })
  movieKpId: number;
  // String properties
  @ApiProperty({ required: false })
  language: string;
  @ApiProperty({ required: false })
  previewUrl: string;
  @ApiProperty({ required: false })
  url: string;
  // Int Properties
  @ApiProperty({ required: false })
  height: number;
  @ApiProperty({ required: false })
  width: number;
  // Enum properties
  @ApiProperty({ required: false, enum: ImageType })
  type: ImageType;
  // Date properties
  @ApiProperty({ required: false, type: Date })
  createdAt: Date;
  @ApiProperty({ required: false, type: Date })
  updatedAt: Date;
}
