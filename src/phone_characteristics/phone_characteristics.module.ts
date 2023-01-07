import { Module } from '@nestjs/common';
import { PhoneCharacteristicsService } from './phone_characteristics.service';
import { PhoneCharacteristicsController } from './phone_characteristics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Phone } from './schemas/phone.model';
import { FilesModule } from 'src/files/files.module';
import { MediaModule } from 'src/media/media.module';

@Module({
  imports:[SequelizeModule.forFeature([Phone]),FilesModule,MediaModule],
  controllers: [PhoneCharacteristicsController],
  providers: [PhoneCharacteristicsService]
})
export class PhoneCharacteristicsModule {}
