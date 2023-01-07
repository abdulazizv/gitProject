import {BelongsTo,Column,DataType,ForeignKey,HasMany,Model,Table} from  'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Product } from 'src/product/schemas/product.model';
import { Discount } from 'src/discount/schemas/discount.model';

@Table({tableName:'category'})

export class Category extends Model<Category> {
    @ApiProperty({example:'1',description:'unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @ApiProperty({example:'name',description:'name of category'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    category_name:string;

    @ApiProperty({example:'telev.jpg',description:'image of category'})
    @Column({
        type:DataType.STRING
    })
    category_image:string;

    @ApiProperty({example:'1',description:'Parentcategory_id'})
    @Column({
        type:DataType.INTEGER
    })
    parent_category_id:number;
    
    @HasMany(() => Product)
    product:Product

    @HasMany(() => Discount)
    discount:Discount

    
}