import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  interpolate 
} from 'react-native-reanimated';

const ProductSkeleton = () => {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    // Create a pulse animation
    opacity.value = withRepeat(
      withTiming(0.7, { duration: 800 }),
      -1, // Infinite repeat
      true // Reverse direction
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View className="flex-1 m-2 bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Image Placeholder */}
      <Animated.View style={animatedStyle} className="w-full h-48 bg-gray-200" />
      
      <View className="p-3">
        {/* Category Placeholder */}
        <Animated.View style={animatedStyle} className="w-1/2 h-3 bg-gray-200 rounded" />
        
        {/* Title Placeholder */}
        <Animated.View style={animatedStyle} className="w-full h-4 bg-gray-200 rounded mt-2" />
        <Animated.View style={animatedStyle} className="w-3/4 h-4 bg-gray-200 rounded mt-1" />
        
        <View className="flex-row justify-between items-center mt-4">
          {/* Price Placeholder */}
          <Animated.View style={animatedStyle} className="w-16 h-6 bg-gray-200 rounded" />
          {/* Button Placeholder */}
          <Animated.View style={animatedStyle} className="w-8 h-8 bg-gray-200 rounded-full" />
        </View>
      </View>
    </View>
  );
};

export default ProductSkeleton;


export default React.memo(ProductSkeleton);

git add .
git commit -m "style: enhance UI with skeleton loaders for better UX"
