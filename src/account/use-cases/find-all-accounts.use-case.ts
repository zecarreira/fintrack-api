import { Injectable } from '@nestjs/common';

import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class FindAllAccountsUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  execute() {
    return this.accountRepository.findAll();
  }
}