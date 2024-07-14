export type TProduct = {
    _id?: string;
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
    name: string;
    image: string;
    productId: string;
    price: number;
    stock: number;
    quantity: number;
}


export type TUpdateProductProps = {
    product: TProduct
}

export type TProductsState = {
    products: TCartProduct[];
}

