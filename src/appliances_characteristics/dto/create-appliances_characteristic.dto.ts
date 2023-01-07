import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateAppliancesCharacteristicDto {
    @ApiProperty({example:'A+',description:' Классэнергопотребления of product'})
    @IsOptional()
    @IsString({message:"Классэнергопотребления string bo'lishi kerak !"})
    readonly classenergopotrebleniya:string;
    @ApiProperty({example:'3 yil',description:'warranty of product'})
    @IsString({message:'warranty stringda bolishi kerak '})
    readonly warranty:string;
    @ApiProperty({example:'220l',description:'Объем_л of product'})
    @IsOptional()
    @IsString({message:"Объем_л string bo'lishi kerak"})
    readonly volume_l:string;
    @ApiProperty({example:'220l',description:'Объем_холодильной_камеры_л of products'})
    @IsOptional()
    @IsString()
    readonly volume_of_refrigerator_compartment_l:string;
    @ApiProperty({example:'30l',description:'Объем_морозильной_камеры_л of product'})
    @IsOptional()
    @IsString({message:"Объем_морозильной_камеры_л string bo'lishi kerak"})
    readonly freezer_volume_l:string;
    @ApiProperty({example:'Vnizu',description:'Расположение_морозильной_камеры of product'})
    @IsOptional()
    @IsString()
    readonly freezer_location:string;
    @ApiProperty({example:'25sm',description:'Высота_см of product'})
    @IsOptional()
    @IsString({message:"Высота_см string bo'lishi kerak"})
    readonly height_cm:string;
    @ApiProperty({example:'60sm',description:'Ширина_см of product'})
    @IsOptional()
    @IsString({message:"Ширина_см string bo'lishi kerak"})
    readonly width_cm:string;
    @ApiProperty({example:'30sm',description:'Глубина_см of product'})
    @IsOptional()
    @IsString({message:"Глубина_см string bo'lishi kerak"})
    readonly depth_cm:string;
    @ApiProperty({example:"90sm",description:'Диагональ of product'})
    @IsOptional()
    @IsString({message:"Диагональ string bo'lishi kerak"})
    readonly diagonal:string;
    @ApiProperty({example:'true',description:'televizor smart yoki smartmasligi.'})
    @IsOptional()
    @IsBoolean()
    readonly is_smart:boolean;
    @ApiProperty({example:'95% yomkost',description:'eмкость of product'})
    @IsOptional()
    @IsString({message:"Емкость string bo'lishi kerak"})
    readonly capacity:string;
    @ApiProperty({example:'black',description:'color of product'})
    @IsOptional()
    @IsString({message:"color string bo'lishi kerak"})
    readonly color:string;
    @ApiProperty({example:'false',description:'Инвертормотор of product'})
    @IsOptional()
    @IsBoolean({message:"Инвертормотор boolean bo'lishi kerak"})
    readonly isInvertormotor:boolean;
    readonly image:string;
}
