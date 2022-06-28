import { Injectable } from '@nestjs/common';
import { PrismaApiService } from '@kinopoiskdev/prisma-api';
import { FindMovieDto } from './dto/find-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaApiService) {}

  async findAll(query: any): Promise<FindMovieDto[]> {
    return this.prisma.movie.findMany({
      where: {
        ...query,
      },
    });
  }

  async findOne(kpId: number): Promise<FindMovieDto> {
    return this.prisma.movie.findUnique({
      where: {
        kpId,
      },
    });
  }
}
