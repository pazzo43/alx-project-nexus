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
