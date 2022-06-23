import { InjectQueue } from '@nestjs/bull';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Queue } from 'bull';
import { jobNames, queueNames } from 'src/constants/queue.contacnts';
import { RoleEnum } from 'src/enums/role.enum';
import { InvoiceResDto } from 'src/invoice/dto/invoice.res.dto';
import { Roles } from 'src/role/decorators/role.decorator';
import { RoleGuard } from 'src/role/guards/role.guard';
import { IUser } from 'src/tariff/interfaces/tariff.interface';
import { GetCurrentUserId } from 'src/user/decorators/get-current-user-id.decorator';
import { GetCurrentUser } from 'src/user/decorators/get-current-user.decorator';
import { JwtAuthenticationGuard } from 'src/user/guards/jwt-authentication.guard';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { EventCoinbaseDto } from './dto/event-coinbase.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoicesService } from './invoices.service';
@ApiTags('invoice')
@ApiBearerAuth()
@Controller('invoice')
export class InvoicesController {
  constructor(
    private readonly invoicesService: InvoicesService,
    @InjectQueue(queueNames.INVOICE) private readonly invoicesQueue: Queue,
  ) {}

  @Post('event/coinbase')
  async onCoinbaseEvent(@Body() event: EventCoinbaseDto) {
    return this.invoicesQueue.add(jobNames.COINBASE_EVENT, event);
  }

  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @ApiResponse({ type: InvoiceResDto })
  @Post()
  async create(
    @GetCurrentUser() user: IUser,
    @Body() createInvoiceDto: CreateInvoiceDto,
  ): Promise<InvoiceResDto> {
    return this.invoicesService.create(createInvoiceDto, user);
  }

  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @ApiResponse({ type: InvoiceResDto, isArray: true })
  @Get()
  async findAll(@GetCurrentUserId() userId: string): Promise<InvoiceResDto[]> {
    return this.invoicesService.findAll(userId);
  }

  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Patch(':uuid')
  update(
    @Param('uuid', ValidationPipe) uuid: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    return this.invoicesService.update(uuid, updateInvoiceDto);
  }
}
