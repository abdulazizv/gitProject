import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateDescriptionDto } from './create-description.dto';

export class UpdateDescriptionDto extends PartialType(CreateDescriptionDto) {
    @IsOptional()
    @IsString({message:"name string bolishi kerak"})
    readonly name:string;
    @IsOptional()
    @IsNumber({},{message:'target_table id number bolishi kerak'})
    readonly target_table_id:number;
    @IsOptional()
    @IsString({message:"target_table_name string bo'lishi kerak"})
    readonly target_table_name:string;
}
