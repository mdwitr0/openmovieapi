import * as bcrypt from 'bcrypt';

import {CreateUserDto} from './dto/create-user.dto';
import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {LoginUserDto} from './dto/login-user.dto';
import {PrismaOmsService} from '@kinopoiskdev/prisma-oms';
import {TariffService} from '../tariff/tariff.service';
import {TokenService} from '../token/token.service';
import {UpdateUserDto} from './dto/update-user.dto';
import {UserEntity} from './entities/user.entity';
import {UserNotFoundException} from './exceptions/user-not-found.exception';

@Injectable()
export class UserService {
  private uuidApiKey = require('uuid-apikey');
  constructor(
    private readonly prismaService: PrismaOmsService,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
    private readonly tariffService: TariffService
  ) {}

  private static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  private static async verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  async createUser(user: CreateUserDto) {
    const defaultTariff = await this.tariffService.getDefault();
    const newUser = await this.prismaService.user.create({
      data: {
        ...user,
        tariffId: defaultTariff.id,
        password: await UserService.hashPassword(user.password),
      },
    });

    const newToken = await this.tokenService.create({
      tariffId: defaultTariff.id,
      userId: newUser.id,
    });

    const updatedUser = await this.prismaService.user.update({
      where: {
        id: newUser.id,
      },
      data: {
        tokenId: newToken.id,
      },
      include: {
        tariff: true,
        token: true,
      },
    });

    const payload = {
      sub: newUser.id,
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
    };

    return {
      ...updatedUser,
      token: {
        ...updatedUser.token,
        publicToken: this.uuidApiKey.toAPIKey(updatedUser.token.publicKey),
      },

      access_token: this.jwtService.sign(payload),
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async login(user: UserEntity) {
    const payload = {
      sub: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
    return {
      ...user,
      token: {
        ...user.token,
        publicToken: this.uuidApiKey.toAPIKey(user.token.publicKey),
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  async getAuthenticatedUser(user: LoginUserDto): Promise<UserEntity> {
    try {
      const currentUser = await this.getOneByEmail(user.email);
      const verifyPassword = await UserService.verifyPassword(
        user.password,
        currentUser.password
      );

      if (!verifyPassword) return null;

      return currentUser;
    } catch (e) {
      throw new UserNotFoundException();
    }
  }

  async getOne(id: string): Promise<UserEntity> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        token: true,
        tariff: true,
      },
    });
  }

  private async getOneByEmail(email: string): Promise<UserEntity> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
      include: {
        token: true,
        tariff: true,
      },
    });
  }
}
