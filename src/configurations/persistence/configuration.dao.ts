import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Configuration} from "../entities/configuration.entity";
import {ConfigurationNotFoundException} from "../exception/ConfigurationNotFoundException";

@Injectable()
export class ConfigurationDao {
    constructor(@InjectModel("Configuration") private configurationModel: Model<Configuration>) {
    }

    async createBaseConfig(baseConfiguration: Configuration) {
        return await this.configurationModel.create(baseConfiguration);
    }

    updateConfig(config: Configuration) {
        return this.configurationModel.updateOne({userEmail: config.userEmail}, config)
    }

    async getConfig(userEmail: string): Promise<Configuration> {
        const res = await this.configurationModel.findOne({userEmail: userEmail});
        if(!res) {
            throw new ConfigurationNotFoundException();
        }
        return res as unknown as Configuration;
    }
}
