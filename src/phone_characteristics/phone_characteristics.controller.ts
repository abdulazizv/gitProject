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
import { PhoneCharacteristicsService } from './phone_characteristics.service';
import { CreatePhoneCharacteristicDto } from './dto/create-phone_characteristic.dto';
import { UpdatePhoneCharacteristicDto } from './dto/update-phone_characteristic.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {FileInterceptor} from '@nestjs/platform-express'
import { Phone } from './schemas/phone.model';

@Controller('phone-characteristics')
export class PhoneCharacteristicsController {
  constructor(
    private readonly phoneCharacteristicsService: PhoneCharacteristicsService,
  ) {}

  @ApiOperation({summary:"Phone_characterics qo'shish"})
  @ApiResponse({status:201,type:Phone})
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(@Body() createPhoneCharacteristicDto: CreatePhoneCharacteristicDto,
  @UploadedFile() image:string) {
    return this.phoneCharacteristicsService.create(
      createPhoneCharacteristicDto,image
    );
  }

  @ApiOperation({summary:"Phone_charactericslarni olish"})
  @ApiResponse({status:200,type:[Phone]})
  @Get()
  findAll() {
    return this.phoneCharacteristicsService.findAll();
  }

  @ApiOperation({summary:"Phone_charactericsni olish"})
  @ApiResponse({status:200,type:Phone})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneCharacteristicsService.findOne(+id);
  }

  @ApiOperation({summary:"Phone_charactericsni yangilash"})
  @ApiResponse({status:200,type:Phone})
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhoneCharacteristicDto: UpdatePhoneCharacteristicDto,
  ) {
    return this.phoneCharacteristicsService.update(
      +id,
      updatePhoneCharacteristicDto,
    );
  }

  @ApiOperation({summary:"Phone_charactericsni delete qilish"})
  @ApiResponse({status:202,type:Number})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneCharacteristicsService.remove(+id);
  }
}
