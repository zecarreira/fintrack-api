import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction} from './transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private transactionRepository: Repository<Transaction>,
        ) {}

        findAll() {
            return this.transactionRepository.find({
                relations: ['account', 'category'],
            });
        }

        findOne(id: number){
            return this.transactionRepository.findOne({
                where: { id },
                relations: ['account', 'category']
            });
        }

        create(data: CreateTransactionDto){
            const transaction = this.transactionRepository.create({
                amount: data.amount,
                description: data.description,
                account: { id: data.accountId },
                category: { id: data.categoryId},
            });
            return this.transactionRepository.save(transaction)
        }


        async getSummary(){
            const transactions = await this.transactionRepository.find({
                relations: ['category'],
            });

            const income = transactions
                .filter(t=> t.category.type === 'income')
                .reduce ((sum, t) => sum + Number(t.amount), 0);

            const expense = transactions 
                .filter(t=> t.category.type === 'expense')
                .reduce ((sum, t) => sum + Number(t.amount), 0);

            return {
                income,
                expense,
                balance: income - expense,
            };
        }
}
