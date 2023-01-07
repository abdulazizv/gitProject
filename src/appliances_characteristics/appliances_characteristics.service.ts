import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { MediaService } from 'src/media/media.service';
import { CreateAppliancesCharacteristicDto } from './dto/create-appliances_characteristic.dto';
import { UpdateAppliancesCharacteristicDto } from './dto/update-appliances_characteristic.dto';
import { Appliances } from './schemas/appliancesCharacteric.model';

@Injectable()
export class AppliancesCharacteristicsService {
  constructor(@InjectModel(Appliances) private  appliancesRepository: typeof Appliances,
  private readonly fileService: FilesService,
  private readonly mediaService:MediaService) { }
  
  async create(createAppliancesCharacteristicDto: CreateAppliancesCharacteristicDto,image:string) {
    console.log("erdtfyguhj")
    const fileName = await this.fileService.createFile(image)
    const newAppliances = await this.appliancesRepository.create(createAppliancesCharacteristicDto)
    if(!newAppliances) {
      throw new HttpException(
        'Error has been detected during save information',
        HttpStatus.BAD_REQUEST
      )
    }
    const newMedia = await this.mediaService.create({
      media:fileName,
      target_table_id:newAppliances.id,
      target_table_name:"appliances"
    })
    newAppliances.media_id = newMedia.id
    await newAppliances.save()
    return   newAppliances
  }

  async findAll() {
    console.log('hih')
    const allAppliances = await this.appliancesRepository.findAll({include:{all:true}})
    console.log(allAppliances)
    if(!allAppliances) {
      throw new HttpException(
        "Information not found. Maybe Database is empty",
        HttpStatus.NOT_FOUND
      )
    }
    return allAppliances
  }

  async findOne(id: number) {
    const appliances = await this.appliancesRepository.findByPk(+id)
    if(!appliances) {
      throw new HttpException(
        "Information not found. Id is incorrect maybe!",
        HttpStatus.NOT_FOUND
      )
    }
    return appliances
  }

  async update(id: number, updateAppliancesCharacteristicDto: UpdateAppliancesCharacteristicDto) {
    const check = await this.appliancesRepository.findByPk(+id)
    if(!check ){
      throw new HttpException(
        'Id is incorrect,Information not found',
        HttpStatus.NOT_FOUND
      )
    }
    const newAppliances = await this.appliancesRepository.update({...updateAppliancesCharacteristicDto},{
      where:{
        id:+id
      },returning:true
    })
    if(!newAppliances){
      throw new HttpException(
        'Error has been detected during save information',
        HttpStatus.FORBIDDEN
      )
    }
    return newAppliances
  }

  async remove(id: number) {
    const check = await this.appliancesRepository.findByPk(+id)
    if(!check) {
      throw new HttpException(
        'Id is incorrect,Information not found',
        HttpStatus.NOT_FOUND
      )
    }
    await this.appliancesRepository.destroy({
      where:{
        id:+id
      }
    })
    return check.id
  }
}
