import {ForeignKey,HasMany,BelongsTo,Column,Model,Table,DataType, HasOne} from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'
import { Category } from 'src/category/schema/category.model';
import { Currency } from 'src/currency/schemas/currency.model';
import { priceYear } from 'src/price_year/schemas/price_year.model';
import { Description } from 'src/description/schemas/description.model';
import { Media } from 'src/media/schemas/media.model';
import { Status } from 'src/status/schemas/status.model';
import { ProductBrand } from 'src/product_brand/schemas/product_brand.model';
import { Order } from 'src/order/schemas/order.model';
import { Appliances } from 'src/appliances_characteristics/schemas/appliancesCharacteric.model';
import { Notebook } from 'src/notebook_characteristics/schemas/notebook.model';
import { Phone } from 'src/phone_characteristics/schemas/phone.model';

@Table({tableName:'products'})

export class Product extends Model<Product> {
    @ApiProperty({example:'1',description:'Unique id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'Artel televizor',description:'name of product'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    product_name:string;

    @ApiProperty({example:'3.500.000',description:'price of product'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    product_price:number;

    @ForeignKey(() => Appliances)
    @Column({
        type:DataType.INTEGER
    })
    appliances_characterics:number;

    @BelongsTo(() => Appliances)
    appliances:Appliances;

    @ForeignKey(() => Notebook)
    @Column({
        type:DataType.INTEGER
    })
    notebook_characterics:number;

    @BelongsTo(() => Notebook)
    notebook:Notebook;

    @ForeignKey(() => Phone)
    @Column({
        type:DataType.INTEGER
    })
    phone_characterics:number;

    @BelongsTo(() => Phone)
    phone:Phone;
    
    @ForeignKey(() => Currency)
    @Column({
        type:DataType.INTEGER
    })
    currency_id:number;

    @BelongsTo(() => Currency)
    currency:Currency
    
    @ForeignKey(() => priceYear)
    @Column({
        type:DataType.INTEGER
    })
    product_year_price:number;

    @BelongsTo(() => priceYear)
    priceYear:priceYear;

    @ForeignKey(() => Description)
    @Column({
        type:DataType.INTEGER
    })
    description_id:number;

    @BelongsTo(() => Description)
    description:Description


    @ForeignKey(()=> Category)
    @Column({
        type:DataType.INTEGER
    })
    category_id:number;

    @BelongsTo(() => Category)
    category:Category

    @ForeignKey(()=> Media)
    @Column({
        type:DataType.INTEGER
    })
    media_id:number;

    @BelongsTo(() => Media)
    media:Media

    @ApiProperty({example:'true',description:'true or false to know what product is new'})
    @Column({
        type:DataType.BOOLEAN,
        allowNull:false
    })
    is_new:boolean

    @ForeignKey(()=> Status)
    @Column({
        type:DataType.INTEGER
    })
    status_id:number;
    @BelongsTo(() => Status)
    status:Status

    @ForeignKey(() => ProductBrand)
    @Column({
        type:DataType.INTEGER
    })
    brand_id:number;

    @BelongsTo(() => ProductBrand)
    brand:ProductBrand

    @HasMany(() => Order)
    order:Order
    
    
}