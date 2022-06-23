import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Country,
  Language,
  Movie,
  MovieBudget,
  MovieDistributors,
  MovieExternalId,
  MovieFees,
  MovieFeesItem,
  MovieGenre,
  MoviePremiere,
  MovieRating,
  MovieStatus,
  MovieTechnology,
  MovieType,
  MovieVotes,
} from '@kinopoiskdev/prisma-api';

export class MovieBudgetDto implements MovieBudget {
  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: false })
  value: string;
}

export class MovieDistributorsDto implements MovieDistributors {
  @ApiProperty({ required: false })
  distributor: string;

  @ApiProperty({ required: false })
  distributorRelease: string;
}

export class MovieExternalIdDto implements MovieExternalId {
  @ApiProperty({ required: false })
  imdb: string;

  @ApiProperty({ required: false })
  tmdb: number;

  @ApiProperty({ required: false })
  kpHD: string;
}

export class MovieFeesItemDto implements MovieFeesItem {
  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: false })
  value: number;
}

export class MovieFeesDto implements MovieFees {
  @ApiProperty({ required: false, type: MovieFeesItemDto })
  usa: MovieFeesItemDto;

  @ApiProperty({ required: false, type: MovieFeesItemDto })
  world: MovieFeesItemDto;

  @ApiProperty({ required: false, type: MovieFeesItemDto })
  russia: MovieFeesItemDto;
}

export class MoviePremiereDto implements MoviePremiere {
  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false, type: Date })
  bluray: Date;

  @ApiProperty({ required: false, type: Date })
  cinema: Date;

  @ApiProperty({ required: false, type: Date })
  digital: Date;

  @ApiProperty({ required: false, type: Date })
  dvd: Date;

  @ApiProperty({ required: false, type: Date })
  russia: Date;

  @ApiProperty({ required: false, type: Date })
  world: Date;
}

export class MovieRatingDto implements MovieRating {
  @ApiProperty({ required: false })
  kp: number;

  @ApiProperty({ required: false })
  imdb: number;

  @ApiProperty({ required: false })
  await: number;

  @ApiProperty({ required: false })
  filmCritics: number;

  @ApiProperty({ required: false })
  russianFilmCritics: number;

  @ApiProperty({ required: false })
  tmdb: number;
}

export class MovieTechnologyDto implements MovieTechnology {
  @ApiProperty({ required: false })
  has3D: boolean;

  @ApiProperty({ required: false })
  hasImax: boolean;
}

export class MovieVotesDto implements MovieVotes {
  @ApiProperty({ required: false })
  await: number;

  @ApiProperty({ required: false })
  filmCritics: number;

  @ApiProperty({ required: false })
  imdb: number;

  @ApiProperty({ required: false })
  kp: number;

  @ApiProperty({ required: false })
  russianFilmCritics: number;

  @ApiProperty({ required: false })
  tmdb: number;
}

export class FindMovieDto implements Movie {
  // Id properties
  @ApiProperty()
  id: string;

  @ApiProperty({ description: 'Id фильма с кинопоиска' })
  kpId: number;

  @ApiProperty({
    description: 'Остальные известные id фильма',
  })
  externalId: MovieExternalId;

  // String properties
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false, isArray: true })
  names: string[];

  @ApiProperty({ required: false })
  enName: string;

  @ApiProperty({ required: false })
  alternativeName: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  ratingMpaa: string;

  @ApiProperty({ required: false })
  shortDescription: string;

  @ApiProperty({ required: false })
  slogan: string;

  //Int properties
  @ApiProperty({ required: false })
  year: number;

  @ApiProperty({ required: false })
  movieLength: number;

  @ApiProperty({ required: false })
  ageRating: number;

  // Enum properties
  @ApiProperty({ required: false })
  type: MovieType;

  @ApiProperty({ required: false })
  status: MovieStatus;

  @ApiProperty({ enum: MovieGenre, isArray: true, required: false })
  genres: MovieGenre[];

  @ApiProperty({ enum: Country, isArray: true, required: false })
  countries: Country[];

  @ApiProperty({ enum: Language, isArray: true, required: false })
  spokenLanguages: Language[];

  // Type properties
  @ApiProperty({ type: MovieRatingDto })
  rating: MovieRatingDto;

  @ApiProperty({ type: MovieBudgetDto })
  budget: MovieBudgetDto;

  @ApiProperty({ type: MovieDistributorsDto })
  distributors: MovieDistributorsDto;

  @ApiProperty({ type: MovieVotesDto })
  votes: MovieVotesDto;

  @ApiProperty({ type: MovieFeesDto })
  fees: MovieFeesDto;

  @ApiProperty({ type: MoviePremiereDto })
  premiere: MoviePremiereDto;

  @ApiProperty({ type: MovieTechnologyDto })
  technology: MovieTechnologyDto;

  // Date properties
  @ApiProperty({ required: false, type: Date })
  createdAt: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt: Date;

  // Relations
  @ApiProperty({ required: false, isArray: true })
  collectionIds: string[];
}
