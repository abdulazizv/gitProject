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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product } from './schemas/product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({summary:"Productni qo'shish"})
  @ApiResponse({status:201,type:Product})
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiOperation({summary:"Productlarni olish"})
  @ApiResponse({status:200,type:[Product]})
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiOperation({summary:"Productni olish"})
  @ApiResponse({status:200,type:Product})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiOperation({summary:"Productlarni yangilash"})
  @ApiResponse({status:200,type:Product})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @ApiOperation({summary:"Productni o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
