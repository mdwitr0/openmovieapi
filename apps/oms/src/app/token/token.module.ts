import {ConfigModule} from '@nestjs/config';
import {JwtStrategy} from '../user/strategies/jwt.strategy';
import {Module} from '@nestjs/common';
import {PrismaOmsModule} from '@kinopoiskdev/prisma-oms';
import {RoleGuard} from '../role/guards/role.guard';
import {TokenController} from './token.controller';
import {TokenService} from './token.service';

@Module({
  controllers: [TokenController],
  providers: [TokenService, JwtStrategy, RoleGuard],
  imports: [PrismaOmsModule, ConfigModule],
  exports: [TokenService],
})
export class TokenModule {}
