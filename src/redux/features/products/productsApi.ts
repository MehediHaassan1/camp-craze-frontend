import baseApi from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                const params = new URLSearchParams();
                if (query) {
                    params.append('search', query)
                }
                
                return {
                    url: "/products",
                    method: "GET",
                    params: params,
                }
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


export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi