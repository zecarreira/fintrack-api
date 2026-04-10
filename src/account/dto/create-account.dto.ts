import { IsString, IsNumber, IsOptional, IsIn, Min } from 'class-validator';

export class CreateAccountDto {
    @IsString()
    name: string;

    @IsNumber()
    @Min(0)
    balance: number;

    @IsOptional()
    @IsIn(['checking', 'savings', 'investment', 'crypto'])
    type?: string;
}