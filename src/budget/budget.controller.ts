import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto'


@Controller('budget')
export class BudgetController {
    constructor(
        private readonly budgetService: BudgetService,
    ) {}
    
    @Get()
    findAll(){
        return this.budgetService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.budgetService.findOne(+id);
    }

    @Post()
    create(@Body() CreateBudgetDto: CreateBudgetDto){
        return this.budgetService.create(CreateBudgetDto)
    }
}
