import { Injectable } from '@nestjs/common';

import { AccountNotFoundException } from '../Exceptions/account.exception';
import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class FindAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute(id: number) {
    const account = await this.accountRepository.findById(id);

    if (!account) throw new AccountNotFoundException(id);

    return account;
  }
}