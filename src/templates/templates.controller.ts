import {Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import {GlistoreHeaders} from "../Utils/GlistoreHeaders";
import {Request, Response} from "express";

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto, @Req() request: Request) {
    return this.templatesService.create(createTemplateDto, request.headers[GlistoreHeaders.USERNAME] as string);
  }

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const template = await this.templatesService.findOne(id);
      res.json(template);
    } catch (e) {
      res.status(HttpStatus.NOT_FOUND).json({error: "Template not found"})
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    return this.templatesService.update(id, updateTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesService.remove(+id);
  }
}
