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
import { ProductBrandService } from './product_brand.service';
import { CreateProductBrandDto } from './dto/create-product_brand.dto';
import { UpdateProductBrandDto } from './dto/update-product_brand.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductBrand } from './schemas/product_brand.model';

@Controller('product-brand')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}

  @ApiOperation({summary:"Product_brand qo'shish"})
  @ApiResponse({status:201,type:ProductBrand})
  @Post()
  create(@Body() createProductBrandDto: CreateProductBrandDto) {
    return this.productBrandService.create(createProductBrandDto);
  }

  @ApiOperation({summary:"Product_brand olish"})
  @ApiResponse({status:200,type:[ProductBrand]})
  @Get()
  findAll() {
    return this.productBrandService.findAll();
  }

  @ApiOperation({summary:"Product_brandni olish"})
  @ApiResponse({status:200,type:ProductBrand})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productBrandService.findOne(+id);
  }

  @ApiOperation({summary:"Product_brandni yangilash"})
  @ApiResponse({status:200,type:ProductBrand})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductBrandDto: UpdateProductBrandDto,
  ) {
    return this.productBrandService.update(+id, updateProductBrandDto);
  }

  @ApiOperation({summary:"Product_brandni o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productBrandService.remove(+id);
  }
}
