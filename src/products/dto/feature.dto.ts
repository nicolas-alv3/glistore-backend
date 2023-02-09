import {FeatureType} from "../entities/product.entity";

export interface FeatureDto {
    type: FeatureType,
    name: string,
    // Enumberables are choosen by admin
    enumerable?: string[],
    //Options are choosen by user
    options?: string[],
    required?: boolean,
    priceAdded?: number
}