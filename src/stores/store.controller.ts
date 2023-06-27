import {Body, Controller, Get, HttpStatus, Logger, Param, Patch, Post, Query, Req, Res} from '@nestjs/common';
import {StoreService} from './store.service';
import {Request, Response} from "express";
import {CreateStoreDto} from "./dto/create-store.dto";
import {GlistoreHeaders} from "../Utils/GlistoreHeaders";

@Controller('stores')
export class StoreController {
    private readonly logger = new Logger(StoreController.name);
    constructor(private readonly configurationsService: StoreService) {
    }

    @Post("/")
    async create(@Body() createStoreDTO: CreateStoreDto, @Req() request: Request) {
        return this.configurationsService.create({...createStoreDTO, username: createStoreDTO.username.toLocaleLowerCase()});
    }

    @Post("/basic")
    async createBasicStore(@Req() request: Request) {
        return await this.configurationsService.createBasicStore(
            request.headers[GlistoreHeaders.USER_EMAIL] as string,
            request.headers[GlistoreHeaders.USERNAME] as string);
    }

    @Patch()
    update(@Body() updateConfigurationDto: CreateStoreDto, @Req() request: Request) {
        return this.configurationsService.update(
            request.headers[GlistoreHeaders.USER_EMAIL] as string,
            updateConfigurationDto,
            request.headers[GlistoreHeaders.USERNAME] as string);
    }

    @Get()
    async findStore(@Req() request: Request, @Res() res: Response) {
        this.logger.log("Attempt to find store")
        try {
            let config;
            if(request.query.email) {
                config = await this.configurationsService.findByEmail(request.query.email as string);
            }
            else {
                config = await this.configurationsService.findOne(request.headers[GlistoreHeaders.USERNAME] as string);
            }
            res.json(config);
        } catch (e) {
            res.status(HttpStatus.NOT_FOUND).json({error: "Configuration not found"})
        }
    }
}
