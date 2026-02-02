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
