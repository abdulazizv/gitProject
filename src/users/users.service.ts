import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository:typeof User) { }

  async createfromOtp(phone_number:string){
    const user = await this.userRepository.create({
      user_phone:phone_number
    })
    return user
  }
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto)
    if(!user){
      throw new HttpException(
        "Information not found",
        HttpStatus.BAD_GATEWAY
      )
    }
    return user
  }

  async findAll() {
    const allUser = await this.userRepository.findAll({include:{all:true}})
    if(!allUser) {
      throw new HttpException(
        "Information not found! Maybe database is empty",
        HttpStatus.NOT_FOUND
      )
    }
    return allUser
  }

  async findOne(id: number) {
    const oneUser = await this.userRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!oneUser) {
      throw new HttpException(
        "ID is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    return oneUser
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const check = await this.userRepository.findOne({
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
    const updateUser = await this.userRepository.update({
      ...updateUserDto
    },{
      where:{
        id:+id
      }
    })
    return updateUser
  }

  async remove(id: number) {
    const check = await this.userRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check){
      throw new HttpException(
        "ID is incorrect,Information not found",
        HttpStatus.NOT_FOUND
      )
    }
    await this.userRepository.destroy({
      where:{
        id:+id
      }
    })
    return check.id
  }
}
