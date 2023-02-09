export enum FeatureType {
    ENUM_MULT="ENUM_MULT",
}

interface Feature {
    type: FeatureType,
    name: string,
    // Enumberables are choosen by admin
    enumerable?: string[],
    //Options are choosen by user
    options?: string[],
    required?: boolean,
    priceAdded?: number
}

export default class Product {
    private name: string;
    private images: string[];
    private features: Feature[];
    private preview: string;
    private description: string;
    private price: number;
    private discount: number; // a porcentage < 100;
    private category: string;
    private isTrending: boolean;
    private visible: boolean;
    constructor(name?: string, price?: number, discount?: number) {
        this.name = name || "";
        this.images = [];
        this.preview = "";
        this.description = "Dummy description";
        this.price = price || 0;
        this.discount = discount || 0;
        this.category = "KID";
        this.isTrending = false;
        this.visible = true;
        this.features = [];
    }

    private calculateDiscount(): number {
        if(this.discount === 0) {
            return 0;
        }
        return (this.discount / 100) * this.price;
    }

    getPrice(): number {
        return this.price - this.calculateDiscount()
    }

    getPriceRaw() {
        return this.price;
    }

    getName() {
        return this.name;
    }

    getDiscount() {
        return this.discount;
    }

    getFeatures() {
        return this.features
    }

    setFeatures(features: Feature[]) {
        this.features = features;
    }
}