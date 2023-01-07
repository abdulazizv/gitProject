import {IsString,IsNumber,IsOptional} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
export class CreateCategoryDto {
    @ApiProperty({example:'Televizorlar',description:'name of category_name'})
    @IsString({message:'Category_name string bolishi kerak !'})
    readonly category_name:string;
    @ApiProperty({example:'1',description:'parent_category_id number bolishi kerak!'})
    @IsOptional()
    @IsNumber({},{message:'Parent_category_id number bolishi kerak'})
    readonly parent_category_id:number;
}
