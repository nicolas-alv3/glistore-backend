import {Injectable} from '@nestjs/common';
import {CreateTemplateDto} from './dto/create-template.dto';
import {UpdateTemplateDto} from './dto/update-template.dto';
import {TemplatesDao} from "./persistence/templates.dao";
import DTOConverter from "../Utils/DTOConverter";
import {Template} from "./entities/template.entity";

@Injectable()
export class TemplatesService {
    constructor(private templatesDAO: TemplatesDao) {
    }

    create(createTemplateDto: CreateTemplateDto, username: string) {
        return this.templatesDAO.create({...createTemplateDto, username});
    }

    findAll(username: string) {
        return this.templatesDAO.findAll(username);
    }

    findOne(id: string) {
        return this.templatesDAO.get(id);
    }

    update(id: string, updateTemplateDto: UpdateTemplateDto) {
        return this.templatesDAO.update(
            id,
            DTOConverter.toEntity<UpdateTemplateDto, Template>(updateTemplateDto, new Template())
        );
    }

    remove(id: number) {
        return `This action removes a #${id} template`;
    }
}
