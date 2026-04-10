import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    findAll() {
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.categoryService.findOne(+id);
    }

    @Post()
    create(@Body() CreateCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(CreateCategoryDto);
    }
}
