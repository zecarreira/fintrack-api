import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { Category } from 'src/category/category.entity';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { precision:10, scale: 2})
    amount: number;

    @Column()
    description: string;

    @ManyToOne(() => Account)
    account: Account;

    @ManyToOne(() => Category)
    category: Category;

    @CreateDateColumn()
    createdAt: Date;
}