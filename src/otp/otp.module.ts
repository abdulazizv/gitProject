import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OtpController } from './otp.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Otp } from './schemas/otp.model'
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Otp]),UsersModule,JwtModule],
  controllers: [OtpController],
  providers: [OtpService]
})
export class OtpModule {}
