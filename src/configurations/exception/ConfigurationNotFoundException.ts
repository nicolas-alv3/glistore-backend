import {GenericGlistoreException} from "../../exception/GenericGlistoreException";

export class ConfigurationNotFoundException extends GenericGlistoreException {
    constructor() {
        super("Configuration not found");
    }
}
