import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Store} from "../entities/store.entity";
import {StoreNotFoundException} from "../exception/StoreNotFoundException";

@Injectable()
export class StoreDao {
    constructor(@InjectModel("Store") private configurationModel: Model<Store>) {
    }

    async createBasicStore(basicStore: Store) {
        return await this.configurationModel.create(basicStore);
    }

    updateStore(store: Store) {
        return this.configurationModel.updateOne({userEmail: store.userEmail}, store)
    }

    async getStore(username: string): Promise<Store> {
        const res = await this.configurationModel.findOne({username});
        if(!res) {
            throw new StoreNotFoundException();
        }
        return res as unknown as Store;
    }
}
