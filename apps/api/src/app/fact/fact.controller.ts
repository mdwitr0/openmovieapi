import { Controller } from '@nestjs/common';
import { FactService } from './fact.service';

@Controller('fact')
export class FactController {
  constructor(private readonly factService: FactService) {}
}
