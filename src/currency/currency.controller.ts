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
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './schemas/currency.model';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @ApiOperation({summary:"Currency qo'shish"})
  @ApiResponse({status:201,type:Currency})
  @Post()
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currencyService.create(createCurrencyDto);
  }

  @ApiOperation({summary:"Currencylarni olish"})
  @ApiResponse({status:200,type:[Currency]})
  @Get()
  findAll() {
    return this.currencyService.findAll();
  }

  @ApiOperation({summary:"Currency olish"})
  @ApiResponse({status:200,type:Currency})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currencyService.findOne(+id);
  }

  @ApiOperation({summary:"Currencyni yangilash"})
  @ApiResponse({status:200,type:Currency})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurrencyDto: UpdateCurrencyDto,
  ) {
    return this.currencyService.update(+id, updateCurrencyDto);
  }

  @ApiOperation({summary:"Currency o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currencyService.remove(+id);
  }
}
