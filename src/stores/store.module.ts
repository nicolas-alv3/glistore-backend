import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import {StoreDao} from "./persistence/store-dao.service";
import {MongooseModule} from "@nestjs/mongoose";
import {StoreSchema} from "./persistence/store.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Store", schema: StoreSchema }])],
  controllers: [StoreController],
  providers: [StoreService, StoreDao]
})
export class StoreModule {}
