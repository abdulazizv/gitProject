import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreatePriceYearDto {
    @ApiProperty({example:'1200000',description:'year price of product'})
    @IsNumber()
    readonly price_year:number;
    @ApiProperty({example:'150.000',description:'price of month'})
    @IsNumber()
    readonly price_per_month:number;
    @ApiProperty({example:'4',description:'number of month'})
    @IsNumber()
    readonly number_of_month:number;
}

