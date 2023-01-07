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
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppliancesCharacteristicsService } from './appliances_characteristics.service';
import { CreateAppliancesCharacteristicDto } from './dto/create-appliances_characteristic.dto';
import { UpdateAppliancesCharacteristicDto } from './dto/update-appliances_characteristic.dto';
import { Appliances } from './schemas/appliancesCharacteric.model';

@Controller('appliances-characteristics')
export class AppliancesCharacteristicsController {
  constructor(
    private readonly appliancesCharacteristicsService: AppliancesCharacteristicsService,
  ) {}

  @ApiOperation({ summary: 'Appliances_characterics qoshish' })
  @ApiResponse({ status: 201, type: Appliances })
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(
    @Body()
    createAppliancesCharacteristicDto: CreateAppliancesCharacteristicDto,
    @UploadedFile() image:string
  ) {
    return this.appliancesCharacteristicsService.create(
      createAppliancesCharacteristicDto,image
    );
  }

  @ApiOperation({ summary: 'Appliances_charactericslarni olish' })
  @ApiResponse({ status: 200, type: [Appliances] })
  @Get()
  findAll() {
    return this.appliancesCharacteristicsService.findAll();
  }

  @ApiOperation({ summary: 'Appliances_charactericsni olish' })
  @ApiResponse({ status: 200, type: Appliances })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appliancesCharacteristicsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Appliances_characterics yangilash' })
  @ApiResponse({ status: 200, type: Appliances })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateAppliancesCharacteristicDto: UpdateAppliancesCharacteristicDto,
  ) {
    return this.appliancesCharacteristicsService.update(
      +id,
      updateAppliancesCharacteristicDto,
    );
  }

  @ApiOperation({summary:"Appliances_characterics o'chirish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appliancesCharacteristicsService.remove(+id);
  }
}
