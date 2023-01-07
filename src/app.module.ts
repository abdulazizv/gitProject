import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModule } from './category/category.module';
import { Category } from './category/schema/category.model';
import { ProductModule } from './product/product.module';
import { Product } from './product/schemas/product.model';
import { UsersModule } from './users/users.module';
import { User } from './users/schemas/user.model';
import { CurrencyModule } from './currency/currency.module';
import { StatusModule } from './status/status.module';
import { PriceYearModule } from './price_year/price_year.module';
import { DescriptionModule } from './description/description.module';
import { ProductBrandModule } from './product_brand/product_brand.module';
import { MediaModule } from './media/media.module';
import { Currency } from './currency/schemas/currency.model';
import { Description } from './description/schemas/description.model';
import { Media } from './media/schemas/media.model';
import { priceYear } from './price_year/schemas/price_year.model';
import { ProductBrand } from './product_brand/schemas/product_brand.model';
import { Status } from './status/schemas/status.model';
import { DiscountModule } from './discount/discount.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/schemas/order.model';
import { Discount } from './discount/schemas/discount.model';
import { SearchHistoryModule } from './search_history/search_history.module';
import { AppliancesCharacteristicsModule } from './appliances_characteristics/appliances_characteristics.module';
import { PhoneCharacteristicsModule } from './phone_characteristics/phone_characteristics.module';
import { NotebookCharacteristicsModule } from './notebook_characteristics/notebook_characteristics.module';
import { Appliances } from './appliances_characteristics/schemas/appliancesCharacteric.model';
import { Phone } from './phone_characteristics/schemas/phone.model';
import { Notebook } from './notebook_characteristics/schemas/notebook.model';
import { FilesModule } from './files/files.module';
import { OtpModule } from './otp/otp.module';
import { Otp } from './otp/schemas/otp.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Category,
        Product,
        User,
        Currency,
        Description,
        Media,
        priceYear,
        ProductBrand,
        Status,
        Order,
        Discount,
        Appliances,
        Phone,
        Notebook,
        Otp
      ],
      autoLoadModels: true,
      logging: false,
    }),
    CategoryModule,
    ProductModule,
    UsersModule,
    CurrencyModule,
    StatusModule,
    PriceYearModule,
    DescriptionModule,
    ProductBrandModule,
    MediaModule,
    DiscountModule,
    OrderModule,
    SearchHistoryModule,
    AppliancesCharacteristicsModule,
    PhoneCharacteristicsModule,
    NotebookCharacteristicsModule,
    FilesModule,
    OtpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
