import { ApiProperty } from "@nestjs/swagger";
import {DataType,Model,Table,Column, HasMany} from 'sequelize-typescript'
import { Discount } from "src/discount/schemas/discount.model";
import { Product } from "src/product/schemas/product.model";

@Table({tableName:'priceYear'})

export class priceYear extends Model<priceYear> {
    @ApiProperty({example:'1',description:'Unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'100000',description:'year price of product'})
    @Column({
        type:DataType.DECIMAL,
        allowNull:false
    })
    price_year:number;

    @ApiProperty({example:'10.000',description:'price of month'})
    @Column({
        type:DataType.DECIMAL
    })
    price_per_month:number;

    @ApiProperty({example:'8',description:'number of month'})
    @Column({
        type:DataType.DECIMAL,

    })
    number_of_month:number;

    @HasMany(() => Product)
    product:Product

    @HasMany(() => Discount)
    discount:Discount;
}