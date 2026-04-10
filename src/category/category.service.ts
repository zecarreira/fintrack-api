import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category} from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) {}

    findAll() {
        return this.categoryRepository.find();
    }

    findOne(id: number){
        return this.categoryRepository.findOneBy({ id });
    }

    create(data: CreateCategoryDto){
        const category = this.categoryRepository.create(data);
        return this.categoryRepository.save(category);
    }
}
