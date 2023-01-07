import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateNotebookCharacteristicDto {
    @ApiProperty({example:'black',description:'color of product'})
    @IsString()
    readonly color:string;

    @ApiProperty({example:'1tb',description:'memory of rom'})
    @IsString()
    readonly memory_rom:string;

    @ApiProperty({example:'8gb',description:'ram of notebook'})
    @IsString()
    readonly memory_ram:string;

    @ApiProperty({example:'Intel Iris vx540g',description:'videocard of product'})
    @IsOptional()
    @IsString()
    readonly videocard:string;

    @ApiProperty({example:'1 oy',description:'warranty of product'})
    @IsString()
    readonly warranty:string;

    @ApiProperty({example:'15.6 fhd ekran',description:'display of product'})
    @IsString()
    readonly display:string;

    readonly image:string;
    

}
