import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './schemas/status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepository:typeof Status) {}
  
  async create(createStatusDto: CreateStatusDto) {
    const newStatus = await this.statusRepository.create(createStatusDto)
    if(!newStatus) {
      throw new HttpException(
        "Error has been detected during save information",
        HttpStatus.BAD_GATEWAY
      )
    }
    return newStatus
  }

  async findAll() {
    const allStatus = await this.statusRepository.findAll({include:{all:true}})
    if(!allStatus){
      throw new HttpException(
        "Status not found! Maybe Database is empty",
        HttpStatus.NOT_FOUND
      )
    }
    return allStatus
  }

  async findOne(id: number) {
    const oneStatus = await this.statusRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!oneStatus) {
      throw new HttpException(
        "ID is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    return oneStatus
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const check = await this.statusRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check){
      throw new HttpException(
        "Id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    const newStatus = await this.statusRepository.update({
      ...updateStatusDto
    },{
      where:{
        id:+id
      }
    })
    return newStatus
  }

  async remove(id: number) {
    const check = await this.statusRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check){
      throw new HttpException(
        "ID is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    await this.statusRepository.destroy({
      where:{
        id:+id
      }
    })
    return check.id
  }
}
