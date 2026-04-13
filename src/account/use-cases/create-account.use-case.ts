import { Injectable } from '@nestjs/common';

import { CreateAccountDto } from '../dto/create-account.dto';
import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  execute(dto: CreateAccountDto) {
    return this.accountRepository.create(dto);
  }
}