import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { MediaService } from 'src/media/media.service';
import { CreatePhoneCharacteristicDto } from './dto/create-phone_characteristic.dto';
import { UpdatePhoneCharacteristicDto } from './dto/update-phone_characteristic.dto';
import { Phone } from './schemas/phone.model';

@Injectable()
export class PhoneCharacteristicsService {
  constructor(@InjectModel(Phone) private phoneRepository:typeof Phone,
  private readonly fileService:FilesService,
  private readonly mediaService:MediaService) { }

  async create(createPhoneCharacteristicDto: CreatePhoneCharacteristicDto,image:string) {
    const fileName = await this.fileService.createFile(image)
    const newPhone = await this.phoneRepository.create(createPhoneCharacteristicDto)
    if(!newPhone) throw new HttpException("Error has been detected during save information",HttpStatus.NOT_FOUND)
    const newMedia = await this.mediaService.create({
      media:fileName,
      target_table_id:newPhone.id,
      target_table_name:"phone"
    })
    newPhone.media_id = newMedia.id
    newPhone.save()
    return newPhone
  }

  async findAll() {
    const allPhone = await this.phoneRepository.findAll({include:{all:true}})
    if(!allPhone){
      throw new HttpException(
        "Information not found! Maybe Database is empty",
        HttpStatus.NOT_FOUND
      )
    }
    return allPhone
  }

  async findOne(id: number) {
    const onePhone = await this.phoneRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!onePhone){
      throw new HttpException(
        "Information not found! ID is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    return onePhone
  }

  async update(id: number, updatePhoneCharacteristicDto: UpdatePhoneCharacteristicDto) {
    const check = await this.phoneRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check) {
      throw new HttpException(
        "Id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    const onePhone = await this.phoneRepository.update({
      ...updatePhoneCharacteristicDto
    },{
      where:{
        id:+id
      }
    })
    return onePhone
  }

  async remove(id: number) {
    const check = await this.phoneRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check){
      throw new HttpException(
        "Id is incorrect!",
        HttpStatus.NOT_FOUND
      )
    }
    await this.phoneRepository.destroy({
      where:{
        id:+id
      }
    })
    return check.id
  }
}
