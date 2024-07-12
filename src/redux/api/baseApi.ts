import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi;