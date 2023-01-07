import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePriceYearDto } from './dto/create-price_year.dto';
import { UpdatePriceYearDto } from './dto/update-price_year.dto';
import { priceYear } from './schemas/price_year.model';

@Injectable()
export class PriceYearService {
  constructor(@InjectModel(priceYear) private priceYearRepository:typeof priceYear) { }

  async create(createPriceYearDto: CreatePriceYearDto) {
    const newpriceYear = await this.priceYearRepository.create(createPriceYearDto)
    if(!newpriceYear){
      throw new HttpException(
        "Error has been detected during save information",
        HttpStatus.NOT_FOUND
      )
    }
    return newpriceYear
  }

  async findAll() {
    const allPriceYear = await this.priceYearRepository.findAll({include:{all:true}})
    if(!allPriceYear) {
      throw new HttpException(
        "Information not found!Maybe Database is empty",
        HttpStatus.NOT_FOUND
      )
    }
    return allPriceYear
  }

  async findOne(id: number) {
    const onePriceYear = await this.priceYearRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!onePriceYear) {
      throw new HttpException(
        "Information not found",
        HttpStatus.NOT_FOUND
      )
    }
    return onePriceYear
  }

  async update(id: number, updatePriceYearDto: UpdatePriceYearDto) {
    const check = await this.priceYearRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check){
      throw new HttpException(
        "ID is not correct! Information not found",
        HttpStatus.NOT_FOUND
      )
    }
    const newPriceYear = await this.priceYearRepository.update({
      ...updatePriceYearDto
    },{
      where:{
        id:+id
      }
    })
    return newPriceYear
  }

  async remove(id: number) {
    const check = await this.priceYearRepository.findOne({
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
    await this.priceYearRepository.destroy({
      where:{
        id:+id
      }
    })
    return check.id
  }
}
