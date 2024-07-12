export type TProduct = {
    _id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    category: string;
    ratings: number;
    coverImage: string;
    images: string[];
    isDeleted: boolean;
    tag: string;
}

export type TCartProduct = {
    productId: string;
    price: number;
    quantity: number;
}

export type TProductsState = {
    products: TCartProduct[];
}

