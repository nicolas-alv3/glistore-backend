import {Injectable, Logger} from '@nestjs/common';
import {CreateFeatureDto} from './dto/create-feature.dto';
import {ProductsService} from "../products/products.service";
import Product from "../products/entities/product.entity";

@Injectable()
export class FeatureService {
    constructor(private readonly productService: ProductsService) {
    }

    async create(createFeatureDto: CreateFeatureDto) {
        return await this.productService.findOne(createFeatureDto.ownerId)
            .then(async result => {
                if(result) {
                    const product = {...result.toObject(), features: [...result['features'], createFeatureDto]}
                    const updateResult = await this.productService.update(createFeatureDto.ownerId, product as unknown as Product);
                    if(updateResult.modifiedCount > 0) {
                        Logger.log("[INFO] Feature created correctly ", createFeatureDto)
                        return product
                    }
                }
            }) as Product
    }
}
