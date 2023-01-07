import { ApiProperty } from "@nestjs/swagger";
import { Column,DataType,Table,Model,HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Appliances } from "src/appliances_characteristics/schemas/appliancesCharacteric.model";
import { Category } from "src/category/schema/category.model";
import { Currency } from "src/currency/schemas/currency.model";
import { Description } from "src/description/schemas/description.model";
import { Media } from "src/media/schemas/media.model";
import { Notebook } from "src/notebook_characteristics/schemas/notebook.model";
import { Order } from "src/order/schemas/order.model";
import { Phone } from "src/phone_characteristics/schemas/phone.model";
import { priceYear } from "src/price_year/schemas/price_year.model";
import { ProductBrand } from "src/product_brand/schemas/product_brand.model";
import { Status } from "src/status/schemas/status.model";

@Table({tableName:'discount'})

export class Discount extends Model<Discount> {

    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'25',description:'Discount'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    discount:number;

    @ApiProperty({example:'Artel 43 tv',description:'product name which discount'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    product_name:string;

    @ApiProperty({example:'120.000',description:'price of product for discount'})
    @Column({
        type:DataType.DECIMAL,
        allowNull:false
    })
    product_price:number;

    @ForeignKey(() => Currency)
    @Column({
        type:DataType.INTEGER
    })
    currency_id:number;

    @BelongsTo(() => Currency)
    currency:Currency

    @ForeignKey(() => priceYear)
    @Column({
        type:DataType.INTEGER
    })
    product_price_year:number;

    @BelongsTo(() => priceYear)
    priceYear:priceYear

    @ForeignKey(() => Description)
    @Column({
        type:DataType.INTEGER
    })
    description_id:number;

    @BelongsTo(() => Description)
    description:Description;

    @ForeignKey(() => Category)
    @Column({
        type:DataType.INTEGER
    })
    category_id:number;

    @BelongsTo(() => Category)
    category:Category;

    @ForeignKey(() => Media)
    @Column({
        type:DataType.INTEGER
    })
    media_id:number;

    @BelongsTo(()=> Media)
    media:Media

    @ForeignKey(() => Appliances)
    @Column({
        type:DataType.INTEGER
    })
    appliances_characterics:number;

    @BelongsTo(() => Appliances)
    appliances:Appliances

    @ForeignKey(() => Notebook)
    @Column({
        type:DataType.INTEGER
    })
    notebook_characterics:number;

    @BelongsTo(() => Notebook)
    notebook:Notebook;

    @ForeignKey(() => Phone)
    @Column({
        type:DataType.INTEGER
    })
    phone_characterics:number;

    @BelongsTo(() => Phone)
    phone:Phone;

    @ApiProperty({example:'true',description:'Is Delivery true or false'})
    @Column({
        type:DataType.BOOLEAN
    })
    is_delivery:boolean

    @ApiProperty({example:'true',description:'Is New true or false'})
    @Column({
        type:DataType.BOOLEAN
    })
    is_new:boolean

    @ForeignKey(() => ProductBrand)
    @Column({
        type:DataType.INTEGER
    })
    brand_id:number;

    @BelongsTo(() => ProductBrand)
    brand:ProductBrand

    @ForeignKey(() => Status)
    @Column({
        type:DataType.INTEGER
    })
    status_id:number;

    @BelongsTo(() => Status)
    status:Status

    @HasMany(() => Order)
    order:Order

    



}