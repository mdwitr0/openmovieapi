import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../user.service';
import { UserEntity } from '../entities/user.entity';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<UserEntity> {
    const user = this.userService.getAuthenticatedUser({ email, password });
    if (!user) throw new UserNotFoundException();
    return user;
  }
}
