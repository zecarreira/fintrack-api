import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account/account.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';
import { TransactionModule } from './transaction/transaction.module';
import { Transaction } from './transaction/transaction.entity';
import { UnleashModule } from './unleash/unleash.module';
import { BudgetModule } from './budget/budget.module';
import { budget } from './budget/budget.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fintrack.sqlite',
      entities: [Account, Category, Transaction, budget],
      synchronize: true,
    }),
    AccountModule,
    CategoryModule,
    TransactionModule,
    UnleashModule,
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
