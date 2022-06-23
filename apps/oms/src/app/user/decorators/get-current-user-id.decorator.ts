import {createParamDecorator, ExecutionContext} from '@nestjs/common';

export const GetCurrentUserId = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.user.userId;
    return request.user[data].id;
  },
);
