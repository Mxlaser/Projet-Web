import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): { userId: string } | undefined => {
    const request = ctx
      .switchToHttp()
      .getRequest<{ user?: { userId: string } }>();
    return request.user;
  },
);
