import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Template} from "../entities/template.entity";
import {GlistoreNotFoundException} from "../../stores/exception/GlistoreNotFoundException";

@Injectable()
export class TemplatesDao {
    constructor(@InjectModel("Templates") private templateModel: Model<Template>) {
    }

    create(template :Template) {
        return this.templateModel.create(template);
    }

    update(id: string, updateTemplate: Template) {
        return this.templateModel.updateOne({_id: id}, updateTemplate)
    }

    async get(id: string) {
        const res = await this.templateModel.findById(id).exec();
        if(res) {
            return res;
        } else {
            throw new GlistoreNotFoundException("Template not found")
        }
    }

    findAll(username: string) {
        return this.templateModel.find({username});
    }

    async delete(id: string) {
        const res = await this.templateModel.deleteOne({"_id": id}).exec();
        if(res) {
            return res;
        } else {
            throw new GlistoreNotFoundException("Template not found")
        }
    }
}
