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


feat: set up Redux Toolkit store
feat: add RTK Query API service for products
feat: fetch and display products from backend API


// Inside your HomeScreen.tsx
const handleSort = (type: 'price-asc' | 'price-desc') => {
  dispatch(sortProducts(type));
};

// UI Element
<View className="flex-row justify-between p-4 bg-gray-50">
  <Text className="font-bold text-gray-700">Products ({filteredItems.length})</Text>
  <TouchableOpacity onPress={() => handleSort('price-asc')}>
    <Text className="text-blue-600">Sort by Price ↑</Text>
  </TouchableOpacity>
</View>


const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
const [sortOrder, setSortOrder] = useState<"price" | "-price">("price");

