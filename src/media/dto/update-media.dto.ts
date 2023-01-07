import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateMediaDto } from './create-media.dto';

export class UpdateMediaDto extends PartialType(CreateMediaDto) {
    
    @ApiProperty({example:'iahrcwkrcw,mcrnscfjnaue.jpg',description:'media of table'})
    @IsOptional()
    @IsString()
    readonly media:string;
    @ApiProperty({example:'1',description:'id of target_table'})
    @IsOptional()
    @IsNumber()
    readonly target_table_id:number;
    @ApiProperty({example:'user',description:'name of target_table'})
    @IsOptional()
    @IsString()
    readonly target_table_name:string;
}
