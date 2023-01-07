import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './schemas/currency.model';

@Injectable()
export class CurrencyService {

  constructor(@InjectModel(Currency) private currencyService:typeof Currency) {  }

  async create(createCurrencyDto: CreateCurrencyDto) {
    const newCurrency = await this.currencyService.create(createCurrencyDto)
    return newCurrency
  }


  async findAll() {
    const allCurrency = await this.currencyService.findAll({include:{all:true}})
    if(!allCurrency) {
      throw new HttpException(
        'Information not found! Maybe Database is empty',
        HttpStatus.NOT_FOUND
      )
    }
    return allCurrency
  }

  async findOne(id: number) {
    const oneCurrency = await this.currencyService.findByPk(+id)
    if(!oneCurrency) {
      throw new HttpException(
        'Id is incorrect, Information not found!',
        HttpStatus.NOT_FOUND
      )
    }
    return oneCurrency
  }

  async update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    const check = await this.currencyService.findByPk(+id)
    if(!check) {
      throw new HttpException(
        'Id is incorrect, Information not found!',
        HttpStatus.NOT_FOUND
      )
    }
    const newCurrency = await this.currencyService.update({...updateCurrencyDto},{
      where:{
        id:+id
      },returning:true
    })
    if(!newCurrency) {
      throw new HttpException(
        'Error has been detected during save information',
        HttpStatus.NOT_FOUND
      )
    }
    return newCurrency
  }

  async remove(id: number) {
    const check = await this.currencyService.findByPk(+id)
    if(!check) {
      throw new HttpException(
        'Id is incorrect! Information not found!',
        HttpStatus.NOT_FOUND
      )
    }
    await this.currencyService.destroy({
      where:{
        id:+id
      }
    })
    return check.id
  }
}
