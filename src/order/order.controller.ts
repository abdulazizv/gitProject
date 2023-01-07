import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Order } from './schemas/order.model';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({summary:"Order qo'shish"})
  @ApiResponse({status:201,type:Order})
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @ApiOperation({summary:"Orderlarni olish"})
  @ApiResponse({status:200,type:[Order]})
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @ApiOperation({summary:"Orderni olish"})
  @ApiResponse({status:200,type:Order})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @ApiOperation({summary:"Orderni update qilish"})
  @ApiResponse({status:200,type:Order})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @ApiOperation({summary:"Orderni delete qilish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
