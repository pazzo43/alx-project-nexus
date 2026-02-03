<Button
  title={sortOrder === "price" ? "Price ↑" : "Price ↓"}
  onPress={() =>
    setSortOrder(sortOrder === "price" ? "-price" : "price")
  }
/>

