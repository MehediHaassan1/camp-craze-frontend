import baseApi from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ search, sortBy }) => {
                const params = new URLSearchParams();
                if (sortBy) {
                    params.append('sort', sortBy);
                }
                if (search) {
                    params.append('search', search);
                }

                return {
                    url: '/products',
                    method: 'GET',
                    params,
                };
            },
            providesTags: ['product']
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            })
        }),
        createProduct: builder.mutation({
            query: ({ data }) => ({
                url: '/products',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['product']
        }),
        updateProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['product']
        }),
        deleteProduct: builder.mutation({
            query: ({ id }) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['product']
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
