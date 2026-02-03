import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useGetProductsQuery } from "../api/productsApi";

export default function ProductListScreen() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Failed to load products.</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 16 }}>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
      )}
    />
  );
}

// src/screens/ProductListScreen.tsx
import { View, Text, FlatList } from "react-native";
import { useGetProductsQuery } from "../services/api";

export default function ProductListScreen() {
  const { data, isLoading, error } = useGetProductsQuery({ page: 1 });

  if (isLoading) return <Text>Loading products...</Text>;
  if (error) return <Text>Failed to load products</Text>;

  return (
    <FlatList
      data={data.results}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
      )}
    />
  );
}


