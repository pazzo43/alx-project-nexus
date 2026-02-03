import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useGetProductsQuery } from '../../src/store/services/productsApi';
import ProductCard from '../../src/components/ProductCard';

export default function HomeScreen() {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading products. Check your Backend!</Text>;

  return (
    <View className="flex-1 bg-white p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2} // Professional grid layout
      />
    </View>
  );
}

git add .
git commit -m "feat: add API integration for fetching product data"

192.168.1.XX

import { View, FlatList, ActivityIndicator } from 'react-native';
import { useGetProductsQuery } from '../../src/store/services/productsApi';
import ProductCard from '../../src/components/ProductCard';

export default function HomeScreen() {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) return <ActivityIndicator className="mt-20" size="large" color="#2563eb" />;

  return (
    <View className="flex-1 bg-gray-50 pt-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => console.log('Navigate to details', item.id)} 
          />
        )}
        numColumns={2} // Two-column grid
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
}

git add .
git commit -m "feat: implement product list UI with ProductCard component"


import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../src/store/services/productsApi';
import { setProducts, filterByCategory, sortProducts } from '../../src/store/slices/productSlice';
import { RootState } from '../../src/store';
import ProductCard from '../../src/components/ProductCard';
import CategoryBar from '../../src/components/CategoryBar';

export default function HomeScreen() {
  const dispatch = useDispatch();
  
  // 1. Fetch data from API
  const { data: apiProducts, isLoading, error } = useGetProductsQuery();
  
  // 2. Get transformed data from Redux Slice
  const { filteredItems, category } = useSelector((state: RootState) => state.products);

  // 3. Sync API data to Redux Store when it arrives
  useEffect(() => {
    if (apiProducts) {
      dispatch(setProducts(apiProducts));
    }
  }, [apiProducts, dispatch]);

  if (isLoading) return <ActivityIndicator className="mt-20" size="large" color="#2563eb" />;
  if (error) return <View className="p-10"><Text>Failed to load products.</Text></View>;

  return (
    <View className="flex-1 bg-gray-50">
      {/* Search/Header Area */}
      <View className="px-4 pt-4 bg-white">
        <Text className="text-2xl font-extrabold text-gray-900">Explore</Text>
      </View>

      {/* Category Filter - Feature Focus */}
      <CategoryBar 
        activeCategory={category} 
        onSelect={(cat) => dispatch(filterByCategory(cat))} 
      />

      {/* Sorting Bar - Feature Focus */}
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-gray-500 font-medium">{filteredItems.length} items found</Text>
        <View className="flex-row">
          <TouchableOpacity onPress={() => dispatch(sortProducts('price-asc'))} className="mr-3">
            <Text className="text-blue-600 font-semibold text-xs">Price ↑</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(sortProducts('price-desc'))}>
            <Text className="text-blue-600 font-semibold text-xs">Price ↓</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Grid */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => console.log('Navigate to details', item.id)} 
          />
        )}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

git add .
git commit -m
"feat: implement product filtering and sorting functionality"


// app/(tabs)/index.tsx
if (error) return <ErrorMessage message="Failed to fetch products" onRetry={refetch} />;

return (
  <FlatList
    data={filteredItems}
    ListEmptyComponent={<EmptyState message={`No items in ${category}`} />}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    // ...rest of the configuration
  />
);

git add .
git commit -m "style: enhance UI with Tailwind CSS, skeleton loaders, and error states"
