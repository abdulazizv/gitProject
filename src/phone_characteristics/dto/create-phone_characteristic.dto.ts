import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePhoneCharacteristicDto {
    @ApiProperty({example:'black',description:'color of phone'})
    @IsString()
    readonly color:string;
    @ApiProperty({example:'1tb',description:'memory_rom of phone_characterics'})
    @IsString()
    readonly memory_rom:string;
    @ApiProperty({example:'4gb',description:'memory_ram of string'})
    @IsString()
    readonly memory_ram:string;
    @ApiProperty({example:'Mediatek Helio g85',description:'videocard of phone'})
    @IsString()
    readonly videocard:string;
    @ApiProperty({example:'1 yil',description:'warranty of phone'})
    @IsString()
    readonly warranty:string;
    @ApiProperty({example:'6.5 inch display',description:'display of phone'})
    @IsString()
    readonly display:string;

    readonly image:string;
}


