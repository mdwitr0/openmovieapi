import {ConfigModule, ConfigService} from '@nestjs/config';
import {forwardRef, Module} from '@nestjs/common';

import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './strategies/jwt.strategy';
import {LocalStrategy} from './strategies/local.strategy';
import {PassportModule} from '@nestjs/passport';
import {PrismaOmsModule} from '@kinopoiskdev/prisma-oms';
import {RoleGuard} from '../role/guards/role.guard';
import {TariffModule} from '../tariff/tariff.module';
import {TokenModule} from '../token/token.module';
import {UserController} from './user.controller';
import {UserService} from './user.service';

@Module({
  providers: [UserService, JwtStrategy, LocalStrategy, RoleGuard],
  imports: [
    ConfigModule,
    PrismaOmsModule,
    PassportModule,
    forwardRef(() => TokenModule),
    forwardRef(() => TariffModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
        },
      }),
    }),
  ],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
