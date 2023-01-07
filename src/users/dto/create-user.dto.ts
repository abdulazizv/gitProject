import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:'user1',description:'name of user'})
    @IsOptional()
    @IsString()
    readonly user_name:string;
    @ApiProperty({example:'user1@gmail.com',description:'email of user'})
    @IsOptional()
    @IsString()
    readonly user_email:string;
    @ApiProperty({example:'+998 90 123 45 67',description:'phone of user'})
    @IsString()
    readonly user_phone:string;
    @ApiProperty({example:'##@%%Q@%#@$!@#3rq3r',description:'hashed_password of user'})
    @IsString()
    @IsOptional()
    readonly hashed_password:string;
    @ApiProperty({example:'profil.jpg',description:'image of user'})
    @IsOptional()
    @IsString()
    readonly user_image:string;
    @ApiProperty({example:'!@#$%^$&^*(*&^%$#@$%^&',description:'hashed of token'})
    @IsOptional()
    @IsString()
    readonly hashed_refresh_token:string;
}
