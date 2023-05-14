export interface Price {
    amount: string;
    currencyCode: string;
}

export interface PriceProd {
    max: Price;
    min: Price;
};

export interface ImageProd {
    url: string;
}

export interface TypeProd {
    id: string;
    title: string;
    tags: string[];
    feacturedImage: ImageProd;
    prices:  PriceProd;
    totalInventory: number;
    tracksInventory: boolean;
}

export interface InterceptorProd {
    products: {
        nodes: TypeProd[];
    };
}