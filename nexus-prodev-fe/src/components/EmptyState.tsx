// src/components/EmptyState.tsx
import { View, Text, Image } from 'react-native';

const EmptyState = ({ message = "No products found." }) => (
  <View className="flex-1 items-center justify-center p-10 mt-10">
    <View className="w-40 h-40 bg-gray-100 rounded-full items-center justify-center mb-4">
       {/* You would use a vector icon or illustration here */}
       <Text className="text-4xl">🔍</Text>
    </View>
    <Text className="text-gray-900 text-lg font-bold">Oops!</Text>
    <Text className="text-gray-500 text-center mt-2">{message}</Text>
  </View>
);
