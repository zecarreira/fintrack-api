import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Account } from './account.entity';
import { AccountRepository } from './repositories/account.repository';
import { FindAllAccountsUseCase } from './use-cases/find-all-accounts.use-case';
import { FindAccountUseCase } from './use-cases/find-account.use-case';
import { CreateAccountUseCase } from './use-cases/create-account.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    AccountService,
    AccountRepository,
    FindAllAccountsUseCase,
    FindAccountUseCase,
    CreateAccountUseCase,
  ],
  exports: [AccountService],
})
export class AccountModule {}