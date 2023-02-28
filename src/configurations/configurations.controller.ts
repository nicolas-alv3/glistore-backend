import {Controller, Get, Post, Body, Patch, Req, Res, HttpStatus} from '@nestjs/common';
import {ConfigurationsService} from './configurations.service';
import {Request, Response} from "express";
import {CreateConfigurationDto} from "./dto/create-configuration.dto";
import {GlistoreHeaders} from "../Utils/GlistoreHeaders";

@Controller('configurations')
export class ConfigurationsController {
    constructor(private readonly configurationsService: ConfigurationsService) {
    }

    @Post("/base")
    async createBaseConfiguration(@Req() request: Request) {
        return await this.configurationsService.createBaseCofiguration(request.headers[GlistoreHeaders.USER_EMAIL] as string);
    }

    @Get()
    async findOne(@Req() request: Request, @Res() res: Response) {
        try {
            const config = await this.configurationsService.findOne(request.headers[GlistoreHeaders.USER_EMAIL] as string);
            res.json(config);
        } catch (e) {
            res.status(HttpStatus.NOT_FOUND).json({error: "Configuration not found"})
        }
    }

    @Patch()
    update(@Body() updateConfigurationDto: CreateConfigurationDto, @Req() request: Request) {
        return this.configurationsService.update(request.headers[GlistoreHeaders.USER_EMAIL] as string, updateConfigurationDto);
    }
}
