import baseApi from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ search, sortBy }) => {
                const params = new URLSearchParams();
                if (sortBy) {
                    params.append('sort', sortBy); // Adjusted to 'sort' to match the backend
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
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            })
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
