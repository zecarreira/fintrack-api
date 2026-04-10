import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    balance: number;

    @Column({default: 'checking'})
        type: string;
}