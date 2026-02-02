import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../types';
import { styled } from 'nativewind';

// High-quality UI components often use 'styled' for cleaner components
const StyledView = styled(View);
const StyledText = styled(Text);

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-1 m-2 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
    >
      {/* Product Image */}
      <View className="w-full h-48 bg-gray-50">
        <Image 
          source={{ uri: product.image }} 
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      {/* Product Details */}
      <View className="p-3">
        <Text numberOfLines={1} className="text-gray-500 text-xs uppercase font-bold tracking-widest">
          {product.category}
        </Text>
        <Text numberOfLines={2} className="text-gray-900 text-sm font-semibold mt-1 h-10">
          {product.title}
        </Text>
        
        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-blue-600 text-lg font-extrabold">
            ${product.price.toFixed(2)}
          </Text>
          
          {/* Add to Cart Icon/Button */}
          <TouchableOpacity className="bg-blue-600 p-2 rounded-full">
             <Text className="text-white text-xs font-bold">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
