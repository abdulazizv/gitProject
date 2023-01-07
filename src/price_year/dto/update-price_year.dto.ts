import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreatePriceYearDto } from './create-price_year.dto';

export class UpdatePriceYearDto extends PartialType(CreatePriceYearDto) {
    @IsOptional()
    @IsNumber()
    readonly price_year:number;
    @IsOptional()
    @IsNumber()
    readonly price_per_month:number;
    @IsOptional()
    @IsNumber()
    readonly number_of_month:number;
}
