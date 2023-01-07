import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtpService } from './otp.service';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { VerifyOtpDto } from './dto/verifyotp.dto';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post()
  create(@Body() createOtpDto: CreateOtpDto) {
    return this.otpService.create(createOtpDto);
  }

  @Post('newotp')
  newotp(@Body() phone_number:string){
    return this.otpService.newOtp(phone_number)
  }

  @Post('verifyotp/:id')
  verifyotp(@Body() verifyotpDto:VerifyOtpDto,
  @Param('id') id:string){
    return this.otpService.verifyOTP(id,verifyotpDto)
  }
  @Get()
  findAll() {
    return this.otpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOtpDto: UpdateOtpDto) {
    return this.otpService.update(+id, updateOtpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otpService.remove(+id);
  }
}
