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
            const { productId, price, quantity } = action.payload;
            const existingProduct = state.products.find(prod => prod.productId === productId);

            if (existingProduct) {
                // Product already exists, increment quantity
                existingProduct.quantity += quantity;
            } else {
                // Product does not exist, add new product
                state.products.push({
                    productId,
                    price,
                    quantity,
                });
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProduct } = productsSlice.actions

export default productsSlice.reducer