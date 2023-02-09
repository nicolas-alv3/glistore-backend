import {Injectable} from '@nestjs/common';
import {ProductDao} from "./persistence/product.dao";
import Product from "./entities/product.entity";

export interface FindProductQuery {
  name: string,
  category: string[],
  page: number,
  pageSize: number
}

@Injectable()
export class ProductsService {
  constructor(private readonly productDao: ProductDao) {
  }


  async create(p: Product) {
      return this.productDao.create(p)
  }

  async findAll(query: FindProductQuery) {
    return this.productDao.findAll(query);
  }

  async findOne(id: string) {
    return this.productDao.findById(id);
  }

  async update(id: string, product: Product) {
    return this.productDao.update(product, id);
  }

  async remove(id: string) {
    return this.productDao.delete(id);
  }
}
