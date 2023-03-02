import {GColorPallette, GMenuItem} from "../entities/store.entity";

export class CreateStoreDto {
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

