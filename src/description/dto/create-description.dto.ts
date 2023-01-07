import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDescriptionDto {
    @ApiProperty({example:'Bu muzlatgich imkoniyatlari juda keng desak ham boladi',description:"full description"})
    @IsOptional()
    @IsString({message:'description string bolishi kerak. '})
    readonly name:string;
    @ApiProperty({example:'1',description:"id of target_table"})
    @IsOptional()
    @IsNumber({},{message:"target_table id number bolishi kerak"})
    readonly target_table_id:number;
    @ApiProperty({example:'appliances',description:'this column helps us to find information easily'})
    @IsOptional()
    @IsString({message:"target_table_name string bolishi kerak"})
    readonly target_table_name:string;
}
