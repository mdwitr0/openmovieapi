import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { ConfigService } from '@nestjs/config';
import { CoinbaseInvoiceService } from '@app/coinbase/coinbase-invoice/coinbase-invoice.service';
import {
  COINBASE_INVOICE_SERVICE,
  ICoinbaseInvoiceRequest,
} from '@app/coinbase/coinbase-invoice/interfaces/coinbase-invoice.interface';
import { instanceToPlain } from 'class-transformer';
import { CoinbaseInvoiceEntity } from './entities/coinbase-invoice.entity';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { InvoiceEntity } from './entities/invoice.entity';
import { IInvoiceCreate } from './interfaces/invoice.interfase';
import { InvoiceStatusEnum } from '../enums/invoice-status.enum';
import { IUser } from 'src/tariff/interfaces/tariff.interface';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoicesService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(COINBASE_INVOICE_SERVICE)
    private readonly coinbaseInvoiceService: CoinbaseInvoiceService,
    private readonly userService: UserService,
    private readonly prismaService: PrismaService,
  ) {}

  async create(
    createInvoiceDto: CreateInvoiceDto,
    user: IUser,
  ): Promise<Invoice> {
    const invoice = await this.prismaService.invoice.create({
      data: <IInvoiceCreate>(
        instanceToPlain(
          new InvoiceEntity({ userId: user.userId, ...createInvoiceDto }),
          {
            strategy: 'excludeAll',
          },
        )
      ),
    });
    const coinbaseInvoice = await this.coinbaseInvoiceService.create(
      <ICoinbaseInvoiceRequest>instanceToPlain(
        new CoinbaseInvoiceEntity({
          userEmail: user.email,
          username: user.username,
          memo: invoice.id,
          ...createInvoiceDto,
        }),
        {
          strategy: 'excludeAll',
        },
      ),
    );

    return this.prismaService.invoice.update({
      where: { id: invoice.id },
      data: { coinbaseId: coinbaseInvoice.code },
    });
  }

  async findAll(userId: string): Promise<Invoice[]> {
    return this.prismaService.invoice.findMany({
      where: {
        userId,
      },
    });
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.prismaService.invoice.update({
      where: { id: id },
      data: updateInvoiceDto,
    });
    await this.userService.update(invoice.userId, {
      balance: { increment: invoice.amount },
    });

    return invoice;
  }
}
