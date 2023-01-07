import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './schemas/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary:"Userlarni qo'shish"})
  @ApiResponse({status:201,type:User})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({summary:"Userlarni olish"})
  @ApiResponse({status:200,type:[User]})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({summary:"Userni olish"})
  @ApiResponse({status:200,type:User})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({summary:"Userni yangilash"})
  @ApiResponse({status:200,type:User})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({summary:"Userni o'chirish"})
  @ApiResponse({status:202,type:User})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
