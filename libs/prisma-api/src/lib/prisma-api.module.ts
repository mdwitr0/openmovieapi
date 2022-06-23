import { Module } from '@nestjs/common';
import { PrismaApiService } from './prisma-api.service';

@Module({
  controllers: [],
  providers: [PrismaApiService],
  exports: [PrismaApiService],
})
export class PrismaApiModule {}
