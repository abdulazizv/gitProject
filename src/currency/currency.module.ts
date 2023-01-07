import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Currency } from './schemas/currency.model';

@Module({
  imports:[SequelizeModule.forFeature([Currency])],
  controllers: [CurrencyController],
  providers: [CurrencyService]
})
export class CurrencyModule {}
