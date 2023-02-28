import {Controller, Get, Post, Body, Patch, Param, Delete, Req} from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import {Request} from "express";
import {CreateConfigurationDto} from "./dto/create-configuration.dto";

@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  @Post("/base")
  async createBaseConfiguration(@Req() request: Request) {
    return await this.configurationsService.createBaseCofiguration(request.headers['user_email'] as string);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configurationsService.findOne(+id);
  }

  @Patch()
  update(@Body() updateConfigurationDto: CreateConfigurationDto, @Req() request: Request) {
    return this.configurationsService.update(request.headers['user_email'] as string, updateConfigurationDto);
  }
}
