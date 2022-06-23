import {SetMetadata} from '@nestjs/common';
import {RoleEnum} from '../../enums/role.enum';

export const ROLES_KEY = 'role';
export const Roles = (...roles: RoleEnum[]) => SetMetadata('role', roles);
