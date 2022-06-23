import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TariffEntity } from './entities/tariff.entity';
import { tariffTemplates } from './tariff.constans';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TariffService {
  private logger = new Logger(TariffService.name);
  constructor(private readonly prismaService: PrismaService) {}

  async init(): Promise<void> {
    const tariffs = await this.getAll();
    for (const tariff of tariffTemplates) {
      if (!tariffs.find((t) => t.name === tariff.name)) {
        this.create(tariff);
        this.logger.log('Tariff has been successfully created');
      } else {
        this.logger.log('Tariff exist');
      }
    }
  }

  async create(createTariffDto: CreateTariffDto): Promise<TariffEntity> {
    const tariff = await this.prismaService.tariff.create({
      data: {
        ...createTariffDto,
      },
    });
    return new TariffEntity(tariff);
  }

  async getAll(): Promise<TariffEntity[]> {
    const tariffs = await this.prismaService.tariff.findMany();
    return tariffs.map((tariff) => new TariffEntity(tariff));
  }

  async getOne(id: string): Promise<TariffEntity> {
    const tariff = await this.prismaService.tariff.findUnique({
      where: { id },
    });
    if (!tariff) throw new NotFoundException();

    return new TariffEntity(tariff);
  }

  async getDefault(): Promise<TariffEntity> {
    const tariff = await this.prismaService.tariff.findFirst({
      where: { price: 0 },
    });
    if (!tariff) throw new NotFoundException();

    return new TariffEntity(tariff);
  }

  async update(
    id: string,
    updateTariffDto: UpdateTariffDto,
  ): Promise<TariffEntity> {
    try {
      const tariff = await this.prismaService.tariff.update({
        where: {
          id,
        },
        data: updateTariffDto,
      });
      return new TariffEntity(tariff);
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: string): Promise<TariffEntity> {
    try {
      const tariff = await this.prismaService.tariff.delete({ where: { id } });
      return new TariffEntity(tariff);
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
