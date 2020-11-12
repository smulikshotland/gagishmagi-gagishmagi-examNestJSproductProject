import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(public productService:ProductService){}
    @Get('all')
    public async getProducts(): Promise<[]> {
        const products = await this.productService.getProducts();
        if(products){
        return this.getProducts();
    }
    else{
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }}
}
