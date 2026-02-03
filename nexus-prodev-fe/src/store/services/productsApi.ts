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


// src/store/services/productsApi.ts
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-backend-api.com/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { page: number; limit: number }>({
      query: ({ page, limit }) => `/products?page=${page}&limit=${limit}`,
      // Only provide the merge logic if you want RTK to handle the cache list
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

import React, { useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { useGetProductsQuery } from '../../src/store/services/productsApi';
import ProductCard from '../../src/components/ProductCard';

export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const { data: products, isLoading, isFetching } = useGetProductsQuery({ page, limit: 10 });

  const loadMore = () => {
    if (!isFetching) {
      setPage((prev) => prev + 1);
    }
  };

  // Professional Footer Loader
  const renderFooter = () => {
    if (!isFetching) return null;
    return (
      <View className="py-5">
        <ActivityIndicator size="small" color="#2563eb" />
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item, index) => item.id.toString() + index}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5} // Trigger when 50% from the bottom
      ListFooterComponent={renderFooter}
      // Performance Optimization Props
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
    />
  );
}

git add .
git commit -m "feat: add pagination and infinite scrolling"
