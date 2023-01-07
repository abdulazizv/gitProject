import { Module } from '@nestjs/common';
import { PriceYearService } from './price_year.service';
import { PriceYearController } from './price_year.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { priceYear } from './schemas/price_year.model';

@Module({
  imports:[SequelizeModule.forFeature([priceYear])],
  controllers: [PriceYearController],
  providers: [PriceYearService]
})
export class PriceYearModule {}
