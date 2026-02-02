npm install @reduxjs/toolkit react-redux

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-backend-api.com/api/v1' }), // Use your IP for local dev
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
