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
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { RoleEnum } from '../enums/role.enum';
import { Roles } from '../role/decorators/role.decorator';
import { JwtAuthenticationGuard } from '../user/guards/jwt-authentication.guard';
import { RoleGuard } from '../role/guards/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('token')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  strategy: 'excludeAll',
})
@Controller('token')
export class TokenController {
  constructor(private readonly tokensService: TokenService) {}

  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Post()
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.tokensService.create(createTokenDto);
  }

  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Get()
  getAll() {
    return this.tokensService.getAll();
  }

  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.tokensService.getOne(id);
  }

  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokenDto: UpdateTokenDto) {
    return this.tokensService.update(id, updateTokenDto);
  }

  @Roles(RoleEnum.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokensService.remove(id);
  }
}
