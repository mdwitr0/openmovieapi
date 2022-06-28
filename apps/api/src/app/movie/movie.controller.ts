import { Controller, Query, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll(@Query() query: any) {
    return this.movieService.findAll(query);
  }

  @Get(':kpId')
  async findOne(@Param('kpId') kpId: number) {
    return this.movieService.findOne(kpId);
  }
}
