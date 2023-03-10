import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import Product from "../entities/product.entity";
import {FindProductQuery} from "../products.service";

@Injectable()
export class ProductDao {
    constructor(@InjectModel("Product") private productModel: Model<Product>) {
    }

    create(p: Product, username: string) {
        return this.productModel.create({...p, username});
    }

    update(product: Product, id: string) {
        return this.productModel.updateOne({_id: id}, product)
    }

    delete(id: string) {
        return this.productModel.deleteOne({_id: id});
    }

    findAll(query: FindProductQuery, username: string) {
        return this.productModel.find({
            $and: [
                {
                    $or: [
                        {name: {$regex: query.name, $options: "i"}},
                        {description: {$regex: query.name, $options: "i"}},
                    ]
                },
                query.category.length ? {category: {$in: query.category}} : {}
                ,
                {username}
            ]
        }).skip(query.page * query.pageSize).limit(query.pageSize).exec();
    }

    findById(id: string) {
        return this.productModel.findById(id).exec();
    }
}
