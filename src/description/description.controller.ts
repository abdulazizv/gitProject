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
import { DescriptionService } from './description.service';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';
import { Description } from './schemas/description.model';

@Controller('description')
export class DescriptionController {
  constructor(private readonly descriptionService: DescriptionService) {}

  @ApiOperation({summary:"Description qo'shish"})
  @ApiResponse({status:201,type:Description})
  @Post()
  create(@Body() createDescriptionDto: CreateDescriptionDto) {
    return this.descriptionService.create(createDescriptionDto);
  }

  @ApiOperation({summary:"Descriptionlarni olish"})
  @ApiResponse({status:200,type:[Description]})
  @Get()
  findAll() {
    return this.descriptionService.findAll();
  }

  @ApiOperation({summary:"Descriptionni olish"})
  @ApiResponse({status:200,type:Description})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionService.findOne(+id);
  }

  @ApiOperation({summary:"Description yangilash"})
  @ApiResponse({status:200,type:Description})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDescriptionDto: UpdateDescriptionDto,
  ) {
    return this.descriptionService.update(+id, updateDescriptionDto);
  }

  @ApiOperation({summary:"Description o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionService.remove(+id);
  }
}
