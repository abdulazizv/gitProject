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
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Media } from './schemas/media.model';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({summary:"Media create qilish"})
  @ApiResponse({status:201,type:Media})
  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  @ApiOperation({summary:'Medialarni get qilish'})
  @ApiResponse({status:200,type:[Media]})
  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @ApiOperation({summary:"Mediani get qilish"})
  @ApiResponse({status:200,type:Media})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }

  @ApiOperation({summary:"Mediani yangilash"})
  @ApiResponse({status:200,type:Media})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @ApiOperation({summary:"Mediani o'chirib tashlash"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
