import {Module} from '@nestjs/common';
import {TemplatesService} from './templates.service';
import {TemplatesController} from './templates.controller';
import {TemplatesDao} from "./persistence/templates.dao";
import {MongooseModule} from "@nestjs/mongoose";
import {TemplateSchema} from "./persistence/templates.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Templates", schema: TemplateSchema }])],
  controllers: [TemplatesController],
  providers: [TemplatesService, TemplatesDao]
})
export class TemplatesModule {}
