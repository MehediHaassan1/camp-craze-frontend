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
    coverImage: string;
    name: string;
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

export type TUserName = {
    firstName: string;
    lastName: string;
}

export type TUserAddress = {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export type TUser = {
    name: TUserName;
    email: string;
    phone: number;
    address: TUserAddress;
    orderedProducts: TCartProduct[];
    deliveryOption: string;
}