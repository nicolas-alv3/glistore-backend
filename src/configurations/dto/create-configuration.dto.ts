import {GColorPallette, GMenuItem} from "../entities/configuration.entity";

export class CreateConfigurationDto {
    companyName: string;
    description: string;
    instaUser: string;
    fbLink: string;
    phoneNumber: string;
    colorPalette: GColorPallette;
    logo: string;
    menu: GMenuItem[];
    userEmail: string
}

