import { ApiProperty } from "@nestjs/swagger";
import { Column,DataType,HasMany,Model,Table } from "sequelize-typescript";


@Table({tableName:'media'})

export class Media extends Model<Media> {
    @ApiProperty({example:'1',description:"Unique Id"})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'qawesrdfgvhbyt6543.jpg',description:'media of table'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    media:string;

    @ApiProperty({example:'1',description:'id of target_table'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    target_table_id:number;

    @ApiProperty({example:'products',description:'name of target_table'})
    @Column({
        type:DataType.STRING
    })
    target_table_name:string;

}