import {Controller, Get, Post, Body, Patch, Param, Delete, Req} from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import {Request} from "express";

@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  @Post("/base")
  async createBaseConfiguration(@Req() request: Request) {
    return await this.configurationsService.createBaseCofiguration(request.headers['user_email'] as string);
  }

  @Get()
  findAll() {
    return this.configurationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configurationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigurationDto: UpdateConfigurationDto) {
    return this.configurationsService.update(+id, updateConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configurationsService.remove(+id);
  }
}
