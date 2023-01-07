import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsOptional()
    @IsNumber()
    readonly product_id:number;
    @IsOptional()
    @IsNumber()
    readonly discount_id:number;
    @IsOptional()
    @IsNumber()
    readonly user_id:number;
    @IsOptional()
    @IsString()
    readonly client_name:string;
    @IsOptional()
    @IsString()
    readonly client_address:string;
    @IsOptional()
    @IsString()
    readonly client_phone:string;
}
