import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
    @PrimaryColumn()
    productId:string

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    price:number
}
