import { IsNumber, IsString, Min } from 'class-validator';

export class CreateTransactionDto {
    @IsNumber()
    @Min(0)
    amount: number;

    @IsString()
    description: string;

    @IsNumber()
    accountId: number;

    @IsNumber()
    categoryId: number;
}