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
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/product',
                method: 'POST',
                body: newProduct,
            }),
            // invalidatesTags: ['products'],
            // invalidatesTags: [{ type: 'products', id: 'LIST' }],
        }),
        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
                url: `/product/${id}`,
                method: 'PUT',
                body: updatedProduct,
            }),
            invalidatesTags: ['products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['products'],
        }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation } = productApi;
