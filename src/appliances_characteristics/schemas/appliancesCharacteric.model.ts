import { ApiProperty } from "@nestjs/swagger";
import { Column,DataType,Model,Table,HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Discount } from "src/discount/schemas/discount.model";
import { Media } from "src/media/schemas/media.model";
import { Product } from "src/product/schemas/product.model";

@Table({tableName:'appliances-characteric'})

export class Appliances extends Model<Appliances> {

    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'A+',description:'class of electr product'})
    @Column({
        type:DataType.STRING
    })
    // Классэнергопотребления
    classenergopotrebleniya:string;

    @ApiProperty({example:'3 yil',description:'Year of warranty'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    warranty:string;

    @ApiProperty({example:'20 litr',description:'litr hajmi'})
    @Column({
        type:DataType.STRING
    })
    // Obshiy obyom olinadi.
    volume_l:string

    @ApiProperty({example:'209 litr',description:'if(xolodilnik) obyom xolodilnik kameri'})
    @Column({
        type:DataType.STRING
    })
    volume_of_refrigerator_compartment_l:string;

    @ApiProperty({example:'52 litr',description:'if(xolodilnik) obyom morilnik litr'})
    @Column({
        type:DataType.STRING
    })
    freezer_volume_l:string;

    @ApiProperty({example:'Pastda',description:'morozilnikni qayerda joylashgani'})
    @Column({
        type:DataType.STRING
    })
    freezer_location:string;

    @ApiProperty({example:'50sm',description:'height of appliances'})
    @Column({
        type:DataType.STRING
    })
    height_cm:string;

    @ApiProperty({example:'22sm',description:'shirina appliances'})
    @Column({
        type:DataType.STRING
    })
    width_cm:string;

    @ApiProperty({example:'15sm',description:'glubina of appliances'})
    @Column({
        type:DataType.STRING
    })
    depth_cm:string;

    @ApiProperty({example:'32"inch',description:'display of appliances'})
    @Column({
        type:DataType.STRING
    })
    diagonal:string;

    @ApiProperty({example:'true',description:'boolean of smart'})
    @Column({
        type:DataType.BOOLEAN
    })
    is_smart:boolean;

    @ApiProperty({example:'7 kg',description:'emkost of wash machine'})
    @Column({
        type:DataType.STRING
    })
    capacity:string;

    @ApiProperty({example:'White',description:'color of appliances'})
    @Column({
        type:DataType.STRING
    })
    color:string;

    @ApiProperty({example:'true',description:'invertor motor of appliances'})
    @Column({
        type:DataType.BOOLEAN
    })
    isInvertorMotor:boolean;

    @ForeignKey(()=>Media)
    @Column({
        type:DataType.INTEGER
    })
    media_id:number

    @BelongsTo(() =>Media)
    media:Media
}