import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schema/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private CategoryRepository: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const newCategory = await this.CategoryRepository.create(createCategoryDto)
      if(!newCategory) {
        throw new HttpException(
        'Error has been detected during create new Category',
        HttpStatus.BAD_GATEWAY
      )
      }
       return newCategory
    } 
    catch (error) {
      console.log(error)
      throw new HttpException(
        `${error.message}`,
        HttpStatus.BAD_REQUEST
      )
    } 
  }


  async findAll(): Promise<Category[]>{
    const allCategory = await this.CategoryRepository.findAll({include:{all:true}});
    if(allCategory.length < 1) {
      throw new HttpException(
        'Category is not found',
        HttpStatus.NOT_FOUND
      )
    }
    return allCategory
  }

  async findOne(id: number):Promise<Category> {
      const oneCategory = await this.CategoryRepository.findOne({
        where:{
          id:id
        }
      });
      if(!oneCategory) {
        throw new HttpException(
          'Id is incorrect',
          HttpStatus.NOT_FOUND
        )
      }
      return oneCategory
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updCategory = await this.CategoryRepository.findByPk(id)
    if(!updCategory) {
      throw new HttpException(
        "Id is Incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    const newCategory = await this.CategoryRepository.update({
      ...updateCategoryDto
    },
    {where:{id:id},returning:true})
    if(!newCategory) {
      throw new HttpException(
        "Error detected during update information",
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
    return newCategory
  }

  async remove(id: number):Promise<Number>{
    const check = await this.CategoryRepository.findByPk(id)
    if(!check){
      throw new HttpException(
        'Id is incorrect',
        HttpStatus.NOT_FOUND
      )
    }
    await this.CategoryRepository.destroy({
      where:{
        id:id
      }
    })
    return check.id
  }
}
