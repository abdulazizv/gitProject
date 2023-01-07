import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateProductBrandDto } from './create-product_brand.dto';

export class UpdateProductBrandDto extends PartialType(CreateProductBrandDto) {
    @IsOptional()
    @IsString()
    readonly brand_name:string;
    @IsOptional()
    @IsString()
    readonly brand_country:string;
}
