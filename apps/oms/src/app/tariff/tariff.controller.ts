import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {TariffService} from './tariff.service';
import {CreateTariffDto} from './dto/create-tariff.dto';
import {UpdateTariffDto} from './dto/update-tariff.dto';
import {RoleEnum} from '../enums/role.enum';
import {Roles} from '../role/decorators/role.decorator';
import {JwtAuthenticationGuard} from '../user/guards/jwt-authentication.guard';
import {RoleGuard} from '../role/guards/role.guard';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('tariff')
@SerializeOptions({
  strategy: 'excludeAll',
})
@Controller('tariff')
export class TariffController {
  constructor(private readonly tariffsService: TariffService) {}

  @ApiBearerAuth()
  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Post()
  create(@Body() createTariffDto: CreateTariffDto) {
    return this.tariffsService.create(createTariffDto);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Get('init')
  init() {
    return this.tariffsService.init();
  }

  @Get()
  getAll() {
    return this.tariffsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.tariffsService.getOne(id);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTariffDto: UpdateTariffDto) {
    return this.tariffsService.update(id, updateTariffDto);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tariffsService.remove(id);
  }
}
