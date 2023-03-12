import {Feature} from "../../features/entities/feature.entity";

export class CreateTemplateDto {
    name: string;
    features: Feature[]
}
