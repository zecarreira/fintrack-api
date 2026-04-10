import { Category } from 'src/category/category.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

@Entity()
export class budget{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    limit: number

    @ManyToOne(() => Category)
    category: Category;
}