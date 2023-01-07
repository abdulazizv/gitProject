import { ApiProperty } from "@nestjs/swagger";
import { Column,Table,Model,DataType,HasMany } from "sequelize-typescript";
import { Discount } from "src/discount/schemas/discount.model";
import { Product } from "src/product/schemas/product.model";

@Table({tableName:'status'})

export class Status extends Model<Status> {
    @ApiProperty({example:'1',description:'Unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'Cancelled',description:'status of state'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    status:string;

    @HasMany(() => Product)
    product:Product

    @HasMany(() => Discount)
    discount:Discount
}
