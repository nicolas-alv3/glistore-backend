export enum FeatureType {
    ENUM_MULT="ENUM_MULT",
}

export class Feature {
    type: FeatureType;
    name: string;
    // Enumberables are choosen by admin
    enumerable?: string[];
    //Options are choosen by user
    options?: string[];
    required?: boolean;
    priceAdded?: number
}
