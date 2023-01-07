import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsOptional()
    @IsString()
    readonly product_name:string;
    @IsOptional()
    @IsNumber()
    readonly product_price:number;  
    @IsOptional()
    @IsOptional()
    @IsNumber()
    readonly appliances_characterics:number;
    @IsOptional()
    @IsOptional()
    @IsNumber()
    readonly notebook_characterics:number;
    @IsOptional()
    @IsOptional()
    @IsNumber()
    readonly phone_characterics:number;
    @IsOptional()
    @IsNumber()
    readonly currency_id:number;
    @IsOptional()
    @IsNumber()
    readonly product_year_price:number;
    @IsOptional()
    @IsNumber()
    readonly description_id:number;
    @IsOptional()
    @IsNumber()
    readonly category_id:number;
    @IsOptional()
    @IsNumber()
    readonly media_id:number;
    @IsOptional()
    @IsBoolean()
    readonly is_new:boolean;
    @IsOptional()
    @IsNumber()
    readonly status_id:number;
    @IsOptional()
    @IsNumber()
    readonly brand_id:number;
}
