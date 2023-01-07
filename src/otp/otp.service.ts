import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import * as OtpGenerator from 'otp-generator'
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { Otp } from './schemas/otp.model';
import { encode } from 'punycode';
import { VerifyOtpDto } from './dto/verifyotp.dto';
import { UsersService } from 'src/users/users.service';
import { JwtPayload, Tokens } from 'src/types';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class OtpService {
  constructor(@InjectModel(Otp) private otpService:typeof Otp,
  private readonly userService:UsersService,
  private readonly jwtService:JwtService) { } 

  async create(createOtpDto: CreateOtpDto) {
    return await this.otpService.create(createOtpDto)
  }
  
  async verifyOTP(id:string,verifyotpDto:VerifyOtpDto){
    const {phone_number,otp_code} = verifyotpDto
    const otpData = await this.otpService.findByPk(id)
    if(!otpData) {
      throw new HttpException(
        "Id is incorrect! Information not found",
        HttpStatus.NOT_FOUND
      )
    }
    if(otp_code !== otpData.otp){
      throw new HttpException(
        "Otp_code is incorrect",
        HttpStatus.FORBIDDEN
      )
    } else {
      otpData.is_verified = true
      otpData.save()
    }
    const newUser = await this.userService.createfromOtp(phone_number)
    const userId = newUser.id
    const tokens = await this.getTokens(newUser.id,true)
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)
    newUser.hashed_refresh_token = hashed_refresh_token
    newUser.save()
    return {
      userId,
      success:true,
      tokens
    }
    
  }


  async newOtp(phone_number:string){
    const otp = OtpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const now = new Date()
    const expiration_time = this.AddMinutesToDate(now,3)
    const id = uuidv4()
    const newOtp = await Otp.create({id,otp,expiration_time})
    const details = {
      timestamp:now,
      phone_number,
      success:true,
      message:"OTP sent to user",
      otp_id:newOtp.id
    }
    return {
      status:"succes",
      details
    }
  }


  async findAll() {
    return await this.otpService.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return await this.otpService.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateOtpDto: UpdateOtpDto) {
    const idCheck = await this.otpService.findByPk(id)
    if(!idCheck) {
      throw new HttpException(
        "Id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    const updatedOtp = await this.otpService.update({...updateOtpDto},{
      where:{
        id:id
      },returning:true
    });
    return updatedOtp
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }

  AddMinutesToDate(date:Date,minutes:number){
    return new Date(date.getTime() + minutes * 60000)
  }

  async getTokens(userId: number,is_active:boolean): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      is_active:is_active
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}

