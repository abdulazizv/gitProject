import {Column,DataType,Table,Model,HasMany} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Product } from 'src/product/schemas/product.model';
import { Discount } from 'src/discount/schemas/discount.model';

@Table({tableName:'product-brand'})

export class ProductBrand extends Model<ProductBrand> {
    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'Artel',description:'name of product_brand'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    brand_name:string;

    @ApiProperty({example:'Deutschland',description:'name of brand_country'})
    @Column({
        type:DataType.STRING
    })
    brand_country:string;

    @HasMany(() => Product)
    product:Product

    @HasMany(() => Discount)
    discount:Discount
}