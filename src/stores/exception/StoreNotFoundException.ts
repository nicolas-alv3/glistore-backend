import {GenericGlistoreException} from "../../exception/GenericGlistoreException";

export class StoreNotFoundException extends GenericGlistoreException {
    constructor() {
        super("Store not found");
    }
}
