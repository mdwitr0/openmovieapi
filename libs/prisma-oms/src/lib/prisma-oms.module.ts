import { Module } from '@nestjs/common';
import { PrismaOmsService } from './prisma-oms.service';

@Module({
  controllers: [],
  providers: [PrismaOmsService],
  exports: [PrismaOmsService],
})
export class PrismaOmsModule {}
