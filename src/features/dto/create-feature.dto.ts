import {FeatureType} from "../../products/entities/product.entity";

export class CreateFeatureDto {
    type: FeatureType;
    name: string;
    // Enumberables are choosen by admin
    enumerable?: string[];
    //Options are choosen by user
    options?: string[];
    required?: boolean;
    priceAdded?: number
}
