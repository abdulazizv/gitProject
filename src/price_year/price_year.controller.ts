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
import { PriceYearService } from './price_year.service';
import { CreatePriceYearDto } from './dto/create-price_year.dto';
import { UpdatePriceYearDto } from './dto/update-price_year.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { priceYear } from './schemas/price_year.model';

@Controller('price-year')
export class PriceYearController {
  constructor(private readonly priceYearService: PriceYearService) {}

  @ApiOperation({summary:"Price_year ni qo'shish"})
  @ApiResponse({status:201,type:priceYear})
  @Post()
  create(@Body() createPriceYearDto: CreatePriceYearDto) {
    return this.priceYearService.create(createPriceYearDto);
  }

  @ApiOperation({summary:"PriceYearlarni olish"})
  @ApiResponse({status:200,type:[priceYear]})
  @Get()
  findAll() {
    return this.priceYearService.findAll();
  }

  @ApiOperation({summary:"priceYearni olish"})
  @ApiResponse({status:200,type:priceYear})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceYearService.findOne(+id);
  }

  @ApiOperation({summary:"priceYearni yangilash"})
  @ApiResponse({status:200,type:priceYear})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePriceYearDto: UpdatePriceYearDto,
  ) {
    return this.priceYearService.update(+id, updatePriceYearDto);
  }

  @ApiOperation({summary:"PriceYearni delete qilish"})
  @ApiResponse({status:202,type:priceYear})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceYearService.remove(+id);
  }
}
