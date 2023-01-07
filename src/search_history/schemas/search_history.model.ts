import { ApiProperty } from "@nestjs/swagger";
import {Column,DataType,Model,Table,HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Product } from "src/product/schemas/product.model";

@Table({tableName:'search-history'})

export class SearchHistory extends Model<SearchHistory> {
    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'2',description:'id of product'})
    @ForeignKey(() => Product)
    @Column({
        type:DataType.INTEGER
    })
    product_id:Product

    @BelongsTo(() => Product)
    product:Product

}