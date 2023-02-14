import { Module } from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsController } from './configurations.controller';
import {ConfigurationDao} from "./persistence/configuration.dao";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigurationSchema} from "./persistence/configuration.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Configuration", schema: ConfigurationSchema }])],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService, ConfigurationDao]
})
export class ConfigurationsModule {}
