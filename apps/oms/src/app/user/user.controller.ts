import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId } from './decorators/get-current-user-id.decorator';
import { GetCurrentUser } from './decorators/get-current-user.decorator';
import { LoginUserDto } from './dto/login-user.dto';
import { RoleGuard } from '../role/guards/role.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserNotFoundException } from './exceptions/user-not-found.exception';
import { JwtAuthenticationGuard } from './guards/jwt-authentication.guard';
import { LocalAuthenticationGuard } from './guards/local-authentication.guard';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiResponse({ type: UserEntity })
  async create(@Body() user: CreateUserDto): Promise<UserEntity> {
    const newUser = await this.userService.createUser(user);
    if (!newUser) throw new UserNotFoundException();

    return new UserEntity(newUser);
  }

  @ApiBody({ type: LoginUserDto })
  @ApiResponse({ type: UserEntity })
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@GetCurrentUser() currentUser: UserEntity): Promise<UserEntity> {
    const user = await this.userService.login(currentUser);
    if (!user) throw new UserNotFoundException();

    return new UserEntity(user);
  }

  @ApiBearerAuth()
  @ApiResponse({ type: UserEntity })
  @UseGuards(JwtAuthenticationGuard, RoleGuard)
  @Get('profile')
  async jwtLogin(@GetCurrentUserId() userId: string) {
    const user = await this.userService.getOne(userId);
    if (!user) throw new UserNotFoundException();

    return new UserEntity(user);
  }
}
