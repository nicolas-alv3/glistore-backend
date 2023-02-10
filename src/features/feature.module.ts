import { Module } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { FeatureController } from './feature.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductSchema} from "../products/persistence/product.schema";
import {ProductsService} from "../products/products.service";
import {ProductDao} from "../products/persistence/product.dao";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }])],
  controllers: [FeatureController],
  providers: [FeatureService, ProductsService, ProductDao]
})
export class FeatureModule {}
