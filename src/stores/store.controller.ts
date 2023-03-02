import {Controller, Get, Post, Body, Patch, Req, Res, HttpStatus} from '@nestjs/common';
import {StoreService} from './store.service';
import {Request, Response} from "express";
import {CreateStoreDto} from "./dto/create-store.dto";
import {GlistoreHeaders} from "../Utils/GlistoreHeaders";

@Controller('stores')
export class StoreController {
    constructor(private readonly configurationsService: StoreService) {
    }

    @Post("/basic")
    async createBasicStore(@Req() request: Request) {
        return await this.configurationsService.createBasicStore(
            request.headers[GlistoreHeaders.USER_EMAIL] as string,
            request.headers[GlistoreHeaders.USERNAME] as string);
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
    update(@Body() updateConfigurationDto: CreateStoreDto, @Req() request: Request) {
        return this.configurationsService.update(
            request.headers[GlistoreHeaders.USER_EMAIL] as string,
            updateConfigurationDto,
            request.headers[GlistoreHeaders.USERNAME] as string);
    }
}
