import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/product",
                method: "GET",
            }),
            providesTags: ["products"],
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            }),
            providesTags: ["products"],
        }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;
