import { PartialType } from '@nestjs/swagger';
import { IsOptional,IsString,IsNumber } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsOptional()
    @IsString({message:'Category_name string bolishi kerak !'})
    readonly category_name:string;
    @IsOptional()
    @IsNumber({},{message:'Parent_category_id number bolishi kerak'})
    readonly parent_category_id:number;
}
