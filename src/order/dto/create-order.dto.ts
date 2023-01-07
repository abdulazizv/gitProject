import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { IsNumeric } from "sequelize-typescript";

export class CreateOrderDto {
    @ApiProperty({example:"1",description:'id of product'})
    @IsNumber()
    readonly product_id:number;
    @ApiProperty({example:'2',description:'id of discount'})
    @IsNumber()
    readonly discount_id:number;
    @ApiProperty({example:'1',description:'id of user'})
    @IsNumber()
    readonly user_id:number;
    @ApiProperty({example:'name1',description:'name of client'})
    @IsString()
    readonly client_name:string;
    @ApiProperty({example:'Abdulla Nabiev 4a uy',description:'address of client'})
    @IsString()
    readonly client_address:string;
    @ApiProperty({example:'909082131',description:'phone of client'})
    @IsString()
    readonly client_phone:string;
}
