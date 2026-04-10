import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: string;

    @Column({default: 'expense'})
    type: string;
}