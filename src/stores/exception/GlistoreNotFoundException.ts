import {GenericGlistoreException} from "../../exception/GenericGlistoreException";

export class GlistoreNotFoundException extends GenericGlistoreException {
    constructor(msg: string) {
        super(msg);
    }
}
