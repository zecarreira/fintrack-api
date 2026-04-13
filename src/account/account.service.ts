import { Injectable } from '@nestjs/common';

import { FindAllAccountsUseCase } from './use-cases/find-all-accounts.use-case';
import { FindAccountUseCase } from './use-cases/find-account.use-case';
import { CreateAccountUseCase } from './use-cases/create-account.use-case';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(
    private readonly findAllAccountsUseCase: FindAllAccountsUseCase,
    private readonly findAccountUseCase: FindAccountUseCase,
    private readonly createAccountUseCase: CreateAccountUseCase,
  ) {}

  findAll() {
    return this.findAllAccountsUseCase.execute();
  }

  findOne(id: number) {
    return this.findAccountUseCase.execute(id);
  }

  create(dto: CreateAccountDto) {
    return this.createAccountUseCase.execute(dto);
  }
}