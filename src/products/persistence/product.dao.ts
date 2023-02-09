import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import Product from "../entities/product.entity";
import {FindProductQuery} from "../products.service";

@Injectable()
export class ProductDao {
    constructor(@InjectModel("Product") private productModel: Model<Product>) {
    }

    create(p: Product) {
        return this.productModel.create(p);
    }

    update(product: Product, id: string) {
        return this.productModel.updateOne({_id: id}, product)
    }

    delete(id: string) {
        return this.productModel.deleteOne({_id: id});
    }

    findAll(query: FindProductQuery) {
        return this.productModel.find({
            $and: [
                {
                    $or: [
                        {name: {$regex: query.name, $options: "i"}},
                        {description: {$regex: query.name, $options: "i"}},
                    ]
                },
                query.category.length ? {category: {$in: query.category}} : {}
            ]
        }).skip(query.page * query.pageSize).limit(query.pageSize).exec();
    }

    findById(id: string) {
        return this.productModel.findById(id).exec();
    }
}