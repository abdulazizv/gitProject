import {DataType,Column,Table,Model,ForeignKey,HasMany,BelongsTo} from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'
import { Order } from 'src/order/schemas/order.model';

@Table({tableName:'users'})

export class User extends Model<User> {

    @ApiProperty({example:'1',description:'unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'User',description:'Name of user'})
    @Column({
        type:DataType.STRING
    })
    user_name:string;

    @ApiProperty({example:'user@gmail.com',description:'email of user'})
    @Column({
        type:DataType.STRING
    })
    user_email:string;

    @ApiProperty({example:'+998 90 124 99 00',description:'phone of user'})
    @Column({
        type:DataType.STRING
    })
    user_phone:string;

    @ApiProperty({example:'##*&143123$$!#$',description:'hashed of password'})
    @Column({
        type:DataType.STRING
    })
    hashed_password:string;

    @ApiProperty({example:'profil.jpg',description:'image of user'})
    @Column({
        type:DataType.STRING
    })
    user_image:string;
    
    @ApiProperty({example:'!@#$%&^%$#@$%^&DAFSGHrtyhgdg',description:'hashed of token'})
    @Column({
        type:DataType.STRING
    })
    hashed_refresh_token:string;
    
    @HasMany(() => Order)
    order:Order
}