import {Body, Controller, Get, HttpStatus, Patch, Post, Put, Req, Res} from '@nestjs/common';
import {StoreService} from './store.service';
import {Request, Response} from "express";
import {CreateStoreDto} from "./dto/create-store.dto";
import {GlistoreHeaders} from "../Utils/GlistoreHeaders";

@Controller('stores/categories')
export class CategoryController {
    constructor(private readonly storeService: StoreService) {
    }

    @Put("/")
    async updateCategories(@Req() request: Request, @Body() body: { categories: string[]}) {
        return await this.storeService.createCategory(
            body.categories,
            request.headers [GlistoreHeaders.USER_EMAIL] as string,
            request.headers[GlistoreHeaders.USERNAME] as string);
    }

    @Get()
    async findOne(@Req() request: Request, @Res() res: Response) {
        try {
            const config = await this.storeService.findOne(request.headers[GlistoreHeaders.USERNAME] as string);
            res.json(config.categories);
        } catch (e) {
            res.status(HttpStatus.NOT_FOUND).json({error: "Configuration not found"})
        }
    }

}
