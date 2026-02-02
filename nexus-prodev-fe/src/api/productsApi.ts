import { apiSlice } from "./apiSlice";
import { Product } from "../types/product";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products/",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

