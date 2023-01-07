import { PartialType } from '@nestjs/swagger';
import { CreateCurrencyDto } from './create-currency.dto';
import { IsOptional,IsString } from 'class-validator';
export class UpdateCurrencyDto extends PartialType(CreateCurrencyDto) {
    @IsOptional()
    @IsString({message:"currency_name string bo'lishi kerak"})
    readonly currency_name:string;
}
