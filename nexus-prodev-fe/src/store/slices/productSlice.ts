import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface ProductState {
  items: Product[];         // The master list from API
  filteredItems: Product[]; // What the user actually sees
  category: string;
  sortBy: 'none' | 'price-asc' | 'price-desc';
}

const initialState: ProductState = {
  items: [],
  filteredItems: [],
  category: 'All',
  sortBy: 'none',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.filteredItems = action.payload === 'All' 
        ? state.items 
        : state.items.filter(item => item.category === action.payload);
    },
    sortProducts: (state, action: PayloadAction<'price-asc' | 'price-desc'>) => {
      state.sortBy = action.payload;
      state.filteredItems.sort((a, b) => 
        action.payload === 'price-asc' ? a.price - b.price : b.price - a.price
      );
    },
  },
});

export const { setProducts, filterByCategory, sortProducts } = productSlice.actions;
export default productSlice.reducer;


import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

const categories = ['All', 'Electronics', 'Jewelry', "Men's Clothing", "Women's Clothing"];

const CategoryBar = ({ activeCategory, onSelect }: { activeCategory: string, onSelect: (cat: string) => void }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-4 bg-white">
    {categories.map((cat) => (
      <TouchableOpacity
        key={cat}
        onPress={() => onSelect(cat)}
        className={`ml-4 px-5 py-2 rounded-full ${activeCategory === cat ? 'bg-blue-600' : 'bg-gray-100'}`}
      >
        <Text className={activeCategory === cat ? 'text-white font-bold' : 'text-gray-600'}>
          {cat}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
