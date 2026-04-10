import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';
import { UnleashModule } from 'src/unleash/unleash.module';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), UnleashModule],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
