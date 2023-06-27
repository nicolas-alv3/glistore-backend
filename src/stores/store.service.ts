import {Injectable} from '@nestjs/common';
import {CreateStoreDto} from './dto/create-store.dto';
import {Store} from "./entities/store.entity";
import {StoreDao} from "./persistence/store-dao.service";
import DTOConverter from "../Utils/DTOConverter";

@Injectable()
export class StoreService {

    constructor(private configurationDAO: StoreDao) {
    }

    async findOne(user: string) {
        return await this.configurationDAO.getStore(user);
    }

    update(userEmail: string, updateConfigurationDto: CreateStoreDto, username: string) {
        return this.configurationDAO.updateStore(StoreService.getUpdatedStore(userEmail, updateConfigurationDto, username));
    }

    async createBasicStore(email: string, username: string) {
        return await this.configurationDAO.createStore(StoreService.getBasicStore(email, username))
    }

    async createCategory(categories: string[], userEmail: string, username: string) {
        return this.configurationDAO.updateCategory(categories, userEmail, username);
    }

    async findByEmail(email: string) {
        return this.configurationDAO.getStoreByEmail(email);
    }

    create(store: CreateStoreDto) {
        return this.configurationDAO.createStore(DTOConverter.toEntity<CreateStoreDto, Store>(store, new Store()));
    }

    private static getBasicStore(email: string, username: string): Store {
        return {
            categories: [],
            companyName: "Test name",
            description: "Test config",
            instaUser: "test.user",
            fbLink: "flink",
            phoneNumber: "+5491354135",
            colorPalette: {
                primary: "#A7D2CB",
                secondary: "#F2D388",
                tertiary: "#C98474",
                quaternary: "#874C62",
                primaryFont: "#212121",
                secondaryFont: "#3D3D3D"
            },
            logo: "https://glidersoftware.web.app/static/media/gliderlogo.72278e90.png",
            menu: [],
            userEmail: email,
            username
        } as unknown as Store
    }

    private static getUpdatedStore(userEmail: string, updateConfigurationDto: CreateStoreDto, username: string): Store {
        return {...updateConfigurationDto, userEmail, username} as unknown as Store;
    }
}
