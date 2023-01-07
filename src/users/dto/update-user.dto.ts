import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    readonly user_name:string;
    @IsOptional()
    @IsString()
    readonly user_email:string;
    @IsOptional()
    @IsString()
    readonly user_phone:string;
    @IsOptional()
    @IsString()
    readonly hashed_password:string;
    @IsOptional()
    @IsString()
    readonly user_image:string;
    @IsOptional()
    @IsString()
    readonly hashed_refresh_token:string;
}
