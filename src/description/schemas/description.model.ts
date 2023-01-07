import { DataType,Column,Table,Model,HasMany, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "src/category/schema/category.model";
import { Product } from "src/product/schemas/product.model";
import { Discount } from "src/discount/schemas/discount.model";

@Table({tableName:'descriptions'})

export class Description extends Model<Description> {
    @ApiProperty({example:'1',description:'Unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'This is the best fridge in the world. Because fridge is produced by Artel',description:'Description for product'})
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    name:string;

    @ApiProperty({example:'1',description:'id of target_table'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    target_table_id:number;

    @ApiProperty({example:'Product',description:'name of target_table'})
    @Column({
        type:DataType.STRING
    })
    target_table_name:string;

    @HasMany(() => Product)
    product:Product

    @HasMany(() => Discount)
    discount:Discount
}