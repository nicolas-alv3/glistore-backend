import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductSchema} from "./persistence/product.schema";
import {ProductDao} from "./persistence/product.dao";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductDao]
})
export class ProductsModule {}
