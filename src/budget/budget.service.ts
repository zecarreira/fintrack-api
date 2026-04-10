import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { budget}  from './budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Injectable()
export class BudgetService {
    constructor(
        @InjectRepository(budget)
        private budgetRepository: Repository<budget>
    ) {}

    findAll(){
        return this.budgetRepository.find({
            relations: ['category'],
        });
    }

    findOne(id: number){
        return this.budgetRepository.findOne({
            where: { id },
            relations: ['category']
        });
    }

    create(data: CreateBudgetDto){
        const budget = this.budgetRepository.create({
            name: data.name,
            limit: data.limit,
            category: { id: data.categoryId },
        });
        return this.budgetRepository.save(budget)
    }
}
