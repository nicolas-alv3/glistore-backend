import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Configuration} from "../entities/configuration.entity";

@Injectable()
export class ConfigurationDao {
    constructor(@InjectModel("Configuration") private configurationModel: Model<Configuration>) {
    }

    createBaseConfig(baseConfiguration: Configuration) {
        const res = this.configurationModel.create(baseConfiguration);
        console.log(res)

        return res;
    }
}