import { ApiProperty } from "@nestjs/swagger";
import { Column,DataType,Model,Table,HasMany,BelongsTo, ForeignKey } from "sequelize-typescript";
import { Discount } from "src/discount/schemas/discount.model";
import { Product } from "src/product/schemas/product.model";
import { User } from "src/users/schemas/user.model";

@Table({tableName:'orders'})

export class Order extends Model<Order> {
    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ForeignKey(() => Product)
    @Column({
        type:DataType.INTEGER
    })
    product_id:number;

    @BelongsTo(() => Product)
    product:Product

    @ForeignKey(() => Discount)
    @Column({
        type:DataType.INTEGER
    })
    discount_id:number

    @BelongsTo(() => Discount)
    discount:Discount

    @ForeignKey(() => User)
    @Column({
        type:DataType.INTEGER
    })
    user_id:number

    @BelongsTo(() => User)
    user:User

    @ApiProperty({example:'Client1',description:'name of client'})
    @Column({
        type:DataType.STRING
    })
    client_name:string;

    @ApiProperty({example:`Shahmat ko'chasi`,description:'addres of client'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    client_address:string;

    @ApiProperty({example:'+998 90 908 12 40',description:'Phone number of client'})
    @Column({
        type:DataType.STRING
    })
    client_phone:string;
}