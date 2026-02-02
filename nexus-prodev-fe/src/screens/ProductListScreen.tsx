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

