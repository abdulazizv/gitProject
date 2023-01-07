import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType,Table,Model } from "sequelize-typescript";

@Table({tableName:'otp'})
export class Otp extends Model<Otp> {
    @ApiProperty({example:'3deaa6976a924c18bff5d',description:'UUID'})
    @Column({
        type:DataType.UUID,
        unique:true,
        primaryKey:true
    })
    id:string

    @ApiProperty({example:'1232',description:'One time password'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    otp:number

    @ApiProperty({example:'22-01-2021',description:'expiration time of otp'})
    @Column({
        type:DataType.DATE
    })
    expiration_time:Date;

    @ApiProperty({example:'true',description:'otp is verified or not'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_verified:boolean
}