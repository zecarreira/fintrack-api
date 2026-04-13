import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { AccountException, AccountNotFoundException } from './account.exception';

@Catch(AccountException)
export class AccountExceptionFilter implements ExceptionFilter {
  catch(exception: AccountException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception instanceof AccountNotFoundException
      ? HttpStatus.NOT_FOUND
      : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}