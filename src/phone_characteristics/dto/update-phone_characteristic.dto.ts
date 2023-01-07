import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreatePhoneCharacteristicDto } from './create-phone_characteristic.dto';

export class UpdatePhoneCharacteristicDto extends PartialType(CreatePhoneCharacteristicDto) {
    @IsOptional()
    @IsString()
    readonly color:string;
    @IsOptional()
    @IsString()
    readonly memory_rom:string;
    @IsOptional()
    @IsString()
    readonly memory_ram:string;
    @IsOptional()
    @IsString()
    readonly videocard:string;
    @IsOptional()
    @IsString()
    readonly warranty:string;
    @IsOptional()
    @IsString()
    readonly display:string;
}
