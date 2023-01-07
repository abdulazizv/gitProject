import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';
import { Description } from './schemas/description.model';

@Injectable()
export class DescriptionService {
  constructor(@InjectModel(Description) private descriptionRepository: typeof Description) { }

  async create(createDescriptionDto: CreateDescriptionDto) {
    const newDescription = await this.descriptionRepository.create(createDescriptionDto)
    return newDescription
  }

  async findAll() {
    const allDescription = await this.descriptionRepository.findAll({include:{all:true}})
    if(!allDescription) {
      throw new HttpException(
        'Description not found. Maybe database is empty!',
        HttpStatus.NOT_FOUND
      )
    }
    return allDescription
  }

  async findOne(id: number) {
    const oneDescription = await this.descriptionRepository.findByPk(+id)
    if(!oneDescription){
      throw new HttpException(
        'Id is incorrect.Information not found',
        HttpStatus.NOT_FOUND
      )
    }
    return oneDescription
  }

  async update(id: number, updateDescriptionDto: UpdateDescriptionDto) {
    const check = await this.descriptionRepository.findByPk(+id)
    if(!check) {
      throw new HttpException(
        "ID is incorrect, Information not found!",
        HttpStatus.NOT_FOUND
      )
    }
    const newDescription = await this.descriptionRepository.update({...updateDescriptionDto},{
      where:{
        id:+id
      },returning:true
    })
    if(!newDescription) {
      throw new HttpException(
        "Error has been detected during save Information",
        HttpStatus.FORBIDDEN
      )
    }
    return newDescription
  }

  async remove(id: number) {
    const check = await this.descriptionRepository.findByPk(+id)
    if(!check) {
      throw new HttpException(
        'Id is incorrect, Information not found!',
        HttpStatus.NOT_FOUND
      )
    }
    await this.descriptionRepository.destroy({
      where:{
        id:id
      }
    })
    return check.id
  }
}
