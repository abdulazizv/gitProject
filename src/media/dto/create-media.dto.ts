import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateMediaDto {
    @ApiProperty({example:'iahrcwkrcw,mcrnscfjnaue.jpg',description:'media of table'})
    @IsString()
    readonly media:string;
    @ApiProperty({example:'1',description:'id of target_table'})
    @IsNumber()
    readonly target_table_id:number;
    @ApiProperty({example:'user',description:'name of target_table'})
    @IsString()
    readonly target_table_name:string;
}