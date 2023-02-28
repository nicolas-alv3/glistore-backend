import {Injectable} from '@nestjs/common';
import {CreateConfigurationDto} from './dto/create-configuration.dto';
import {Configuration} from "./entities/configuration.entity";
import {ConfigurationDao} from "./persistence/configuration.dao";

@Injectable()
export class ConfigurationsService {

    constructor(private configurationDAO: ConfigurationDao) {
    }

    async findOne(userEmail: string) {
        return await this.configurationDAO.getConfig(userEmail);
    }

    update(userEmail: string, updateConfigurationDto: CreateConfigurationDto) {
        return this.configurationDAO.updateConfig(this.getUpdatedConfiguration(userEmail, updateConfigurationDto));
    }

    async createBaseCofiguration(email: string) {
        return await this.configurationDAO.createBaseConfig(this.getBaseConfiguration(email))
    }

    private getBaseConfiguration(email: string): Configuration {
        return {
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
            userEmail: email
        }
    }

    private getUpdatedConfiguration(userEmail: string, updateConfigurationDto: CreateConfigurationDto): Configuration {
        return {...updateConfigurationDto, userEmail};
    }
}
