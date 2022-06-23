import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from '../user/strategies/jwt.strategy';
import { RoleGuard } from '../role/guards/role.guard';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TokenController } from './token.controller';

@Module({
  controllers: [TokenController],
  providers: [TokenService, JwtStrategy, RoleGuard],
  imports: [PrismaModule, ConfigModule],
  exports: [TokenService],
})
export class TokenModule {}
