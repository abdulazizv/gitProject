import { ApiProperty } from '@nestjs/swagger'
import {DataType,HasMany,Table,Model,Column} from 'sequelize-typescript'
import { Discount } from 'src/discount/schemas/discount.model';
import { Product } from 'src/product/schemas/product.model';


@Table({tableName:'currencies'})

export class Currency extends Model<Currency> {
    @ApiProperty({example:'1',description:'Unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'USD',description:'Aqsh dollari'})
    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    currency_name:string;

    @HasMany(()=> Product)
    product:Product

    @HasMany(() => Discount)
    discount:Discount;
}