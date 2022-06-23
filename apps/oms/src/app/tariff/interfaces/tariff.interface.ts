import { RoleEnum } from '../../enums/role.enum';

export interface IUser {
  userId: string;
  email: string;
  username: string;
  role: RoleEnum;
}

export interface ITariff {
  id: string;
  name: string;
  price: number;
  maxDailyCountRequests: number;
  users: string[];
  tokens: string[];
  createdAt: Date;
  updatedAt: Date;
}
