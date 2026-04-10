import { IsNumber, IsString, Min, Max } from 'class-validator';

export class CreateBudgetDto {

    @IsString()
    name: string;

    @IsNumber()
    @Min(0)
    @Max(50)
    limit: number;

    @IsNumber()
    categoryId: number;
}