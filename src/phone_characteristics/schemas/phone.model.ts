import { ApiProperty } from "@nestjs/swagger";
import { DataType,Model,Table,Column,HasMany,BelongsTo, ForeignKey } from "sequelize-typescript";
import { Discount } from "src/discount/schemas/discount.model";
import { Media } from "src/media/schemas/media.model";
import { Product } from "src/product/schemas/product.model";

@Table({tableName:'phone-characterics'})

export class Phone extends Model<Phone> {

    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'blue',description:'color of phone'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    color:string;

    @ApiProperty({example:'64gb',description:'memory_rom of phone'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    memory_rom:string;

    @ApiProperty({example:'4gb',description:'memory_ram of phone'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    memory_ram:string;

    @ApiProperty({example:'Mediatek Helio G65',description:'videocard of phone'})
    @Column({
        type:DataType.STRING
    })
    videocard:string;

    @ApiProperty({example:'6oy',description:'name of videocard'})
    @Column({
        type:DataType.STRING
    })
    warranty:string;

    @ApiProperty({example:'6.5 inch display',description:'display of phone'})
    @Column({
        type:DataType.STRING
    })
    display:string;

    @ForeignKey(() => Media)
    @Column({
        type:DataType.INTEGER
    })
    media_id:number
    @BelongsTo(() =>Media)
    media:Media
} 