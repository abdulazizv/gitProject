import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateStatusDto } from './create-status.dto';

export class UpdateStatusDto extends PartialType(CreateStatusDto) {
    @IsString()
    readonly status:string;
}
