import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateProductBrandDto {
    @ApiProperty({example:'Artel',description:'name of product_brand'})
    @IsString()
    readonly brand_name:string;
    @ApiProperty({example:'UZB',description:'country of brand'})
    @IsOptional()
    @IsString()
    readonly brand_country:string;
}
