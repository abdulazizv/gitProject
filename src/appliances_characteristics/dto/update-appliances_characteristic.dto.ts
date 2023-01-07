import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAppliancesCharacteristicDto } from './create-appliances_characteristic.dto';
import { IsString,IsOptional, IsBoolean } from 'class-validator';
export class UpdateAppliancesCharacteristicDto extends PartialType(CreateAppliancesCharacteristicDto) {
    @ApiProperty({example:'A+',description:' Классэнергопотребления of product'})
    @IsOptional()
    @IsString({message:" Классэнергопотребления string bo'lishi kerak"})
    readonly Классэнергопотребления:string;
    @ApiProperty({example:'3 yil',description:'warranty of product'})
    @IsOptional()
    @IsString({message:'warranty stringda bolishi kerak '})
    readonly warranty:string;
    @ApiProperty({example:'220l',description:'Объем_л of product'})
    @IsOptional()
    @IsString({message:"Объем_л string bo'lishi kerak"})
    readonly Объем_л:string;
    @ApiProperty({example:'220l',description:'Объем_холодильной_камеры_л of products'})
    @IsOptional()
    @IsString({message:'Объем_холодильной_камеры_л string bolishi kerak'})
    readonly Объем_холодильной_камеры_л:string;
    @ApiProperty({example:'30l',description:'Объем_морозильной_камеры_л of product'})
    @IsOptional()
    @IsString({message:"Объем_морозильной_камеры_л string bo'lishi kerak"})
    readonly Объем_морозильной_камеры_л:string;
    @ApiProperty({example:'Vnizu',description:'Расположение_морозильной_камеры of product'})
    @IsOptional()
    @IsString({message:"Расположение_морозильной_камеры string bo'lishi kerak"})
    readonly Расположение_морозильной_камеры:string;
    @ApiProperty({example:'25sm',description:'Высота_см of product'})
    @IsOptional()
    @IsString({message:"Высота_см string bo'lishi kerak"})
    readonly Высота_см:string;
    @ApiProperty({example:'60sm',description:'Ширина_см of product'})
    @IsOptional()
    @IsString({message:"Ширина_см string bo'lishi kerak"})
    readonly Ширина_см:string;
    @ApiProperty({example:'30sm',description:'Глубина_см of product'})
    @IsOptional()
    @IsString({message:"Глубина_см string bo'lishi kerak"})
    readonly Глубина_см:string;
    @ApiProperty({example:"90sm",description:'Диагональ of product'})
    @IsOptional()
    @IsString({message:"Диагональ string bo'lishi kerak"})
    readonly Диагональ:string;
    @ApiProperty({example:'true',description:'televizor smart yoki smartmasligi.'})
    @IsOptional()
    @IsBoolean({message:"is_smart boolean bo'lishi kerak"})
    readonly is_smart:boolean;
    @ApiProperty({example:'95% yomkost',description:'eмкость of product'})
    @IsOptional()
    @IsString({message:"Емкость string bo'lishi kerak"})
    readonly Емкость:string;
    @ApiProperty({example:'black',description:'color of product'})
    @IsOptional()
    @IsString({message:"color string bo'lishi kerak"})
    readonly color:string;
    @ApiProperty({example:'false',description:'Инвертормотор of product'})
    @IsOptional()
    @IsBoolean({message:"Инвертормотор boolean bo'lishi kerak"})
    readonly Инвертормотор:boolean;
}
