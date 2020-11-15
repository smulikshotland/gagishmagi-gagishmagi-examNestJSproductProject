import { IsString } from 'class-validator';

export class CreateProductDTO {
    productId:string
    name:string
    description:string
    price:any
}
