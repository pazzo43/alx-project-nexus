// Example: Polishing the Category Chip
<TouchableOpacity
  onPress={() => onSelect(cat)}
  // Using Tailwind to handle conditional styling professionally
  className={`mr-3 px-6 py-2 rounded-full border ${
    activeCategory === cat 
      ? 'bg-blue-600 border-blue-600 shadow-md scale-105' // Active state
      : 'bg-white border-gray-200 opacity-80'           // Inactive state
  }`}
>
  <Text className={activeCategory === cat ? 'text-white font-bold' : 'text-gray-600 font-medium'}>
    {cat}
  </Text>
</TouchableOpacity>
