import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateAccountDto } from './dto/create-account.dto';
import { FindAllAccountsUseCase } from './use-cases/find-all-accounts.use-case';
import { FindAccountUseCase } from './use-cases/find-account.use-case';
import { CreateAccountUseCase } from './use-cases/create-account.use-case';

@Controller('accounts')
export class AccountController {
  constructor(
    private readonly findAllAccountsUseCase: FindAllAccountsUseCase,
    private readonly findAccountUseCase: FindAccountUseCase,
    private readonly createAccountUseCase: CreateAccountUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllAccountsUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findAccountUseCase.execute(+id);
  }

  @Post()
  create(@Body() dto: CreateAccountDto) {
    return this.createAccountUseCase.execute(dto);
  }
}