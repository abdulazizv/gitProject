import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { NotebookCharacteristicsService } from './notebook_characteristics.service';
import { CreateNotebookCharacteristicDto } from './dto/create-notebook_characteristic.dto';
import { UpdateNotebookCharacteristicDto } from './dto/update-notebook_characteristic.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Notebook } from './schemas/notebook.model';
import {FileInterceptor} from '@nestjs/platform-express';

@Controller('notebook-characteristics')
export class NotebookCharacteristicsController {
  constructor(
    private readonly notebookCharacteristicsService: NotebookCharacteristicsService,
  ) {}

  @ApiOperation({summary:"Notebook_characterics qo'shish"})
  @ApiResponse({status:201,type:Notebook})
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(
    @Body() createNotebookCharacteristicDto: CreateNotebookCharacteristicDto,
    @UploadedFile() image:string
  ) {
    return this.notebookCharacteristicsService.create(
      createNotebookCharacteristicDto,image
    );
  }

  @ApiOperation({summary:"Notebook_charactericslarni olish"})
  @ApiResponse({status:200,type:[Notebook]})
  @Get()
  findAll() {
    return this.notebookCharacteristicsService.findAll();
  }

  @ApiOperation({summary:"Notebook_charactericsni olish"})
  @ApiResponse({status:200,type:Notebook})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notebookCharacteristicsService.findOne(+id);
  }

  @ApiOperation({summary:"Notebook_characterics yangilash"})
  @ApiResponse({status:200,type:Notebook})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotebookCharacteristicDto: UpdateNotebookCharacteristicDto,
  ) {
    return this.notebookCharacteristicsService.update(
      +id,
      updateNotebookCharacteristicDto,
    );
  }

  @ApiOperation({summary:"Notebook_charactericsni o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notebookCharacteristicsService.remove(+id);
  }
}
