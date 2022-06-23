import { Module } from '@nestjs/common';
import { FactService } from './fact.service';
import { FactController } from './fact.controller';

@Module({
  controllers: [FactController],
  providers: [FactService]
})
export class FactModule {}
