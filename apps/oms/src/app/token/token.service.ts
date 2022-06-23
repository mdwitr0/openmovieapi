import {Injectable, NotFoundException} from '@nestjs/common';

import {CreateTokenDto} from './dto/create-token.dto';
import {PrismaOmsService} from '@kinopoiskdev/prisma-oms';
import {TokenEntity} from './entities/token.entity';
import {UpdateTokenDto} from './dto/update-token.dto';

@Injectable()
export class TokenService {
  constructor(private readonly prismaService: PrismaOmsService) {}

  async create(createTokenDto: CreateTokenDto): Promise<TokenEntity> {
    const token = await this.prismaService.token.create({
      data: {
        ...createTokenDto,
      },
    });
    return new TokenEntity(token);
  }

  async getAll(): Promise<TokenEntity[]> {
    const tokens = await this.prismaService.token.findMany();
    return tokens.map((token) => new TokenEntity(token));
  }

  async getOne(id: string): Promise<TokenEntity> {
    const token = await this.prismaService.token.findUnique({
      where: { id },
    });
    if (!token) throw new NotFoundException();

    return new TokenEntity(token);
  }

  async update(
    id: string,
    updateTokenDto: UpdateTokenDto
  ): Promise<TokenEntity> {
    try {
      const token = await this.prismaService.token.update({
        where: {
          id,
        },
        data: updateTokenDto,
      });
      return new TokenEntity(token);
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: string): Promise<TokenEntity> {
    try {
      const token = await this.prismaService.token.delete({ where: { id } });
      return new TokenEntity(token);
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
