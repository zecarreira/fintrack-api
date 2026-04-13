import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from '../account.entity';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectRepository(Account)
    private readonly orm: Repository<Account>,
  ) {}

  findAll(): Promise<Account[]> {
    return this.orm.find();
  }

  findById(id: number): Promise<Account | null> {
    return this.orm.findOneBy({ id });
  }

  create(data: Partial<Account>): Promise<Account> {
    const account = this.orm.create(data);
    return this.orm.save(account);
  }
}