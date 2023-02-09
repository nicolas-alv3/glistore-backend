import {FeatureDto} from "./feature.dto";

export class CreateProductDto {
    name: string;
    images: string[];
    features: FeatureDto[];
    preview: string;
    description: string;
    price: number;
    discount: number; // a porcentage < 100;
    category: string;
    isTrending: boolean;
    visible: boolean;
}
