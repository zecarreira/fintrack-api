import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UnleashService } from 'src/unleash/unleash.service';

@Controller('transaction')
export class TransactionController {
    constructor(
        private readonly transactionService: TransactionService,
        private readonly unleashService: UnleashService,
    
    ) {}

    @Get()
    findAll(){
        return this.transactionService.findAll();
    }

    @Get('summary')
    getSummary(){
        if (!this.unleashService.isEnabled('summary-report')){
            throw new NotFoundException('This feature is not available');
        }
        return this.transactionService.getSummary();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.transactionService.findOne(+id);
    }

    @Post()
    create(@Body() CreateTransactionDto: CreateTransactionDto){
        return this.transactionService.create(CreateTransactionDto);
    }
}
