import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './schemas/discount.model';

@Injectable()
export class DiscountService {

  constructor(@InjectModel(Discount) private discountRepository: typeof Discount) { }

  async create(createDiscountDto: CreateDiscountDto) {
    const newDiscount = await this.discountRepository.create(createDiscountDto)
    if(!newDiscount) {
      throw new HttpException(
        'Error has been detected during save information',
        HttpStatus.FORBIDDEN
      )
    }
    return newDiscount
  }

  async findAll() {
    const allDiscount = await this.discountRepository.findAll({include:{all:true}})
    if(!allDiscount) {
      throw new HttpException(
        'Information not found! Maybe Database is empty',
        HttpStatus.NOT_FOUND
      )
    }
    return allDiscount
  }

  async findOne(id: number) {
    const oneDiscount = await this.discountRepository.findByPk(+id)
    if(!oneDiscount) {
      throw new HttpException(
        'Id is incorrect',
        HttpStatus.NOT_FOUND
      )
    }
    return oneDiscount
  }

  async update(id: number, updateDiscountDto: UpdateDiscountDto) {
    const check = await this.discountRepository.findByPk(+id)
    if(!check){
      throw new HttpException(
        "Id is incorrect, Information not found",
        HttpStatus.NOT_FOUND
      )
    }
    const newDiscount = await this.discountRepository.update({...updateDiscountDto},{
      where:{
        id:+id
      },returning:true
    })
    if(!newDiscount) {
      throw new HttpException(
        "Error has been detected during save information",
        HttpStatus.NOT_FOUND
      )
      }
    return newDiscount
  }

  async remove(id: number) {
    const check = await this.discountRepository.findByPk(+id)
    if(!check) {
      throw new HttpException(
        'Id is incorrect,We couldnt find information!',
        HttpStatus.NOT_FOUND
      )
    }
    await this.discountRepository.destroy({
      where:{
        id:+id
      }
    })
    return check.id
}
}
