import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { budget } from './budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([budget])],
  controllers: [BudgetController],
  providers: [BudgetService]
})
export class BudgetModule {}
