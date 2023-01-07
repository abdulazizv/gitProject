import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductBrandDto } from './dto/create-product_brand.dto';
import { UpdateProductBrandDto } from './dto/update-product_brand.dto';
import { ProductBrand } from './schemas/product_brand.model';

@Injectable()
export class ProductBrandService {
  constructor(@InjectModel(ProductBrand) private brandRepository:typeof ProductBrand) { }

  async create(createProductBrandDto: CreateProductBrandDto) {
    const newBrand = await this.brandRepository.create(createProductBrandDto)
    if(!newBrand) {
      throw new HttpException(
        "Error has been detected during save information",
        HttpStatus.NOT_FOUND
      )
    }
    return newBrand
  }

  async findAll() {
    const allBrand = await this.brandRepository.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const oneBrand = await this.brandRepository.findOne({where:{id:+id}})
    if(!oneBrand){
      throw new HttpException(
        "Brand is not found!Maybe id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    return oneBrand
  }

  async update(id: number, updateProductBrandDto: UpdateProductBrandDto) {
    const check = await this.brandRepository.findOne({
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
    const newBrand = await this.brandRepository.update({
      ...updateProductBrandDto
    },{
      where:{
        id:+id
      }
    })
    return newBrand
  }

  async remove(id: number) {
    const check = await this.brandRepository.findOne({
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
    return check.id
  }
}
