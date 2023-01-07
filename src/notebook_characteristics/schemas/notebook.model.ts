import { ApiProperty } from "@nestjs/swagger";
import { DataType,Column,Table,Model,HasMany,BelongsTo, ForeignKey } from "sequelize-typescript";
import { Discount } from "src/discount/schemas/discount.model";
import { Media } from "src/media/schemas/media.model";
import { Product } from "src/product/schemas/product.model";

@Table({tableName:'notebook-characterics'})

export class Notebook extends Model<Notebook> {

    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'Qora',description:'color of notebook'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    color:string;

    @ApiProperty({example:'1tb',description:'rom of notebook'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    memory_rom:string;

    @ApiProperty({example:'8 gb',description:'ram of notebook'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    memory_ram:string;

    @ApiProperty({example:'Intel Iris',description:'videocard of notebook'})
    @Column({
        type:DataType.STRING
    })
    videocard:string;

    @ApiProperty({example:'1 yil',description:'warranty of notebook'})
    @Column({
        type:DataType.STRING
    })
    warranty:string;

    @ApiProperty({example:'15.6 fhd ekran',description:'display of notebook'})
    @Column({
        type:DataType.STRING
    })
    display:string;

    @ForeignKey(()=>Media)
    @Column({
        type:DataType.INTEGER
    })
    media_id:number

    @BelongsTo(() =>Media)
    media:Media
}