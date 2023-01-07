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
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Status } from './schemas/status.model';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOperation({summary:"Statuslarni qo'shish"})
  @ApiResponse({status:201,type:Status})
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @ApiOperation({summary:"Statuslarni olish"})
  @ApiResponse({status:200,type:[Status]})
  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOperation({summary:"Statusni olish"})
  @ApiResponse({status:200,type:Status})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @ApiOperation({summary:"Statusni yangilash"})
  @ApiResponse({status:200,type:Status})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @ApiOperation({summary:"Statusni o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
