import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(public productService:ProductService){}
   
    @Post()
  create(@Body() createProdectDto: CreateProductDTO) {
    console.log("post")
    return this.productService.createProduct(createProdectDto);
  }
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

  //   @Patch(':id')
  // update(@Param('productId',ParseIntPipe) productId: number, @Body() name: string) {
    
  //   return this.productService.editProduct(name,productId);
  // }
  @Delete(':id')
  remove(@Param('id') productId: string) {
    return this.productService.deleteProduct(+productId);
  }
}
