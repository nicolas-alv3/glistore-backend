import {Body, Controller, Delete, Get, HttpStatus, Logger, Param, Patch, Post, Req, Res} from '@nestjs/common';
import {Response, Request} from 'express';

import {ProductsService} from './products.service';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import DTOConverter from "../Utils/DTOConverter";
import Product from "./entities/product.entity";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  private readonly logger = new Logger(ProductsController.name);

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    this.logger.log("Attempt to create new product with body " + JSON.stringify(createProductDto))
    return this.productsService.create(DTOConverter.toEntity<CreateProductDto, Product>(createProductDto, new Product()));
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.productsService.findAll({
      name: req.query['name'] as string || '',
      category: req.query['category'] ? JSON.parse(req.query['category'] as string || '') : [],
      page: parseInt(req.query['page'] as string) || 0, //Pages starts in 0
      pageSize: parseInt(req.query['pageSize'] as string) || 10,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.productsService.findOne(id).then( r => {
      if(r) {
        res.status(HttpStatus.OK).json(r)
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ error: "Product not found"})
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Res() res: Response) {
    this.logger.log("Attempt to update product with body " + JSON.stringify(updateProductDto))
    return this.productsService.update(id, DTOConverter.toEntity<UpdateProductDto, Product>(updateProductDto, new Product()))
        .then(this.handleError(r => r.matchedCount, { code: HttpStatus.NOT_FOUND, message : "Product not found"}, res ))
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  private handleError( isError: (r:any) => boolean, errorResponse : { code: HttpStatus, message: string }, res: Response) {
    return (r: any) => {
      if(isError(r)) {
        res.status(HttpStatus.OK).json(r)
      } else {
        res.status(errorResponse.code).json({ error: errorResponse.message})
      }
    }
  }
}
