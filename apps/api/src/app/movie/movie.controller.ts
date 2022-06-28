import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { FindMovieDto } from './dto/find-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiResponse({ status: 200, type: MovieDto })
  async findAll(@Query() query: FindMovieDto) {
    return this.movieService.findAll(query);
  }

  @Get(':kpId')
  async findOne(@Param('kpId') kpId: number) {
    return this.movieService.findOne(kpId);
  }
}
