import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Store} from "../entities/store.entity";
import {GlistoreNotFoundException} from "../exception/GlistoreNotFoundException";

@Injectable()
export class StoreDao {
    constructor(@InjectModel("Store") private storeModel: Model<Store>) {
    }

    async createBasicStore(basicStore: Store) {
        return await this.storeModel.create(basicStore);
    }

    updateStore(store: Store) {
        return this.storeModel.updateOne({userEmail: store.userEmail}, store)
    }

    async getStore(username: string): Promise<Store> {
        const res = await this.storeModel.findOne({username});
        if(!res) {
            throw new GlistoreNotFoundException("Store not found");
        }
        return res as unknown as Store;
    }
}
