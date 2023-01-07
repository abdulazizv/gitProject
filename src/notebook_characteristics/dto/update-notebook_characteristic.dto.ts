import { PartialType } from '@nestjs/swagger';
import { IsString,IsOptional } from 'class-validator';
import { CreateNotebookCharacteristicDto } from './create-notebook_characteristic.dto';

export class UpdateNotebookCharacteristicDto extends PartialType(CreateNotebookCharacteristicDto) {
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
