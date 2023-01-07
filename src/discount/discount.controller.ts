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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './schemas/discount.model';

@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @ApiOperation({summary:"Discount productini qo'shish"})
  @ApiResponse({status:201,type:Discount})
  @Post()
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountService.create(createDiscountDto);
  }

  @ApiOperation({summary:"Discount productlarini olish"})
  @ApiResponse({status:200,type:[Discount]})
  @Get()
  findAll() {
    return this.discountService.findAll();
  }

  @ApiOperation({summary:"Discount productini olish"})
  @ApiResponse({status:200,type:Discount})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountService.findOne(+id);
  }

  @ApiOperation({summary:"Discount productini yangilash"})
  @ApiResponse({status:200,type:Discount})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ) {
    return this.discountService.update(+id, updateDiscountDto);
  }

  @ApiOperation({summary:"Discount productini delete qilish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountService.remove(+id);
  }
}
