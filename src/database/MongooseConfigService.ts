import {Injectable} from "@nestjs/common";
import {MongooseModuleOptions, MongooseOptionsFactory} from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        console.log(process.env.DB_CONNECTION)
        return {
            uri: process.env.DB_CONNECTION
        };
    }
}
