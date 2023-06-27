import {Injectable, Logger} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Store} from "../entities/store.entity";
import {GlistoreNotFoundException} from "../exception/GlistoreNotFoundException";

@Injectable()
export class StoreDao {
    private readonly logger = new Logger(StoreDao.name);
    constructor(@InjectModel("Store") private storeModel: Model<Store>) {
    }

    updateStore(store: Store) {
        return this.storeModel.updateOne({userEmail: store.userEmail}, store)
    }

    async getStore(username: string): Promise<Store> {
        this.logger.warn(`Attempt to get store with username ${username}` )
        const res = await this.storeModel.findOne({username});
        if (!res) {
            throw new GlistoreNotFoundException("Store not found");
        }
        this.logger.log(`Atlas response OK with username ${username} and body`, [res.toJSON()]);
        return res as unknown as Store;
    }

    updateCategory(categories: string[], userEmail: string, username: string) {
        return this.storeModel.updateOne({username}, {$set: {categories}})
    }

    async getStoreByEmail(email: string) {
        this.logger.warn(`Attempt to get store with email ${email}` )
        const res = await this.storeModel.findOne({userEmail: email});
        if (!res) {
            throw new GlistoreNotFoundException("Store not found");
        }
        this.logger.log(`Get 200 with email ${email} and body {}`, [res.toJSON()] )
        this.logger.log(res)
        return res as unknown as Store;
    }

    async createStore(store: Store) {
        return await this.storeModel.create(store);
    }
}
