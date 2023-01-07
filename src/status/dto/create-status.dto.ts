import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStatusDto {
    @ApiProperty({example:"Cancelled",description:'name of status'})
    @IsString()
    readonly status:string;
}
