import { TCartProduct, TProductsState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: TProductsState = {
    products: [],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<TCartProduct>) => {
            const { name, stock, coverImage, productId, price, quantity } = action.payload;
            const existingProduct = state.products.find(prod => prod.productId === productId);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state.products.push({
                    stock,
                    name,
                    coverImage,
                    productId,
                    price,
                    quantity,
                });
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            const product = state.products.find(prod => prod.productId === productId);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            const product = state.products.find(prod => prod.productId === productId);

            if (product) {
                product.quantity += 1;
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            state.products = state.products.filter(prod => prod.productId !== productId);
        },
        orderComplete: (state) => {
            state.products = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addProduct,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    orderComplete,
} = productsSlice.actions

export default productsSlice.reducer