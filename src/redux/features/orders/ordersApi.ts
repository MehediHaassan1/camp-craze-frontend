import baseApi from "@/redux/api/baseApi";

const ordersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateStockWithOrderQuantity: builder.mutation({
            query: (products) => {

                return {
                    url: '/order/complete-order',
                    method: 'PATCH',
                    body: products,
                };
            },
        }),

    })
})

export const {
    useUpdateStockWithOrderQuantityMutation
} = ordersApi;
