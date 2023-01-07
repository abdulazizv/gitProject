import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.model';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product) private productRepository : typeof Product) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct  = await this.productRepository.create(createProductDto)
    if(!newProduct) {
      throw new HttpException(
        'Error detected during save information',
        HttpStatus.SERVICE_UNAVAILABLE
      )
    }
    return newProduct
  }

  async findAll(): Promise<Product[]> {
    const allProduct = await this.productRepository.findAll({include:{all:true}})
    if(allProduct.length < 1) {
      throw new HttpException(
        'Product is not found',
        HttpStatus.BAD_GATEWAY
      )
    }
    return allProduct 
  }

  async findOne(id: number): Promise<Product> {
    const oneProduct = await this.productRepository.findByPk(id)
    if(!oneProduct) {
      throw new HttpException(
        'Id is incorrect, Information not found',
        HttpStatus.NOT_FOUND
      )
    }
    return oneProduct
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const check = await this.productRepository.findByPk(id)
    if(!check){
      throw new HttpException(
        'Id is Incorrect, Information not found',
        HttpStatus.NOT_FOUND
      )
    }
    const newProduct = await this.productRepository.update(
      {...updateProductDto},{
        where:{id:id},returning:true
      },
    )
    if(!newProduct) {
      throw new HttpException(
        'Error has been detected during update information',
        HttpStatus.BAD_GATEWAY
      )
    }
    return newProduct
  }

  async remove(id: number):Promise<Number> {
    const check = await this.productRepository.findByPk(id)
    if(!check) {
      throw new HttpException(
        'Id is incorrect, Information not found',
        HttpStatus.NOT_FOUND
      )
    }
    await this.productRepository.destroy({
      where:{
        id:id
      }
    })
    return check.id
  }
}
