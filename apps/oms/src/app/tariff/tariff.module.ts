import {Module, OnApplicationBootstrap} from '@nestjs/common';

import {ConfigModule} from '@nestjs/config';
import {JwtStrategy} from '../user/strategies/jwt.strategy';
import {PrismaOmsModule} from '@kinopoiskdev/prisma-oms';
import {RoleGuard} from '../role/guards/role.guard';
import {TariffController} from './tariff.controller';
import {TariffService} from './tariff.service';

@Module({
  controllers: [TariffController],
  providers: [TariffService, JwtStrategy, RoleGuard],
  imports: [ConfigModule, PrismaOmsModule, ConfigModule],
  exports: [TariffService],
})
export class TariffModule implements OnApplicationBootstrap {
  constructor(private readonly tariffService: TariffService) {}
  async onApplicationBootstrap() {
    this.tariffService.init();
  }
}
