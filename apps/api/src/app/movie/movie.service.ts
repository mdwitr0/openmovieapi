import { PrismaApiService } from '@kinopoiskdev/prisma-api';
import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaApiService) {}

  async findAll(query: any): Promise<MovieDto[]> {
    return this.prisma.movie.findMany({
      where: {
        ...query,
      },
    });
  }

  async findOne(kpId: number): Promise<MovieDto> {
    return this.prisma.movie.findUnique({
      where: {
        kpId,
      },
    });
  }
}
