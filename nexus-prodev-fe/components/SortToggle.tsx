<Button
  title={sortOrder === "price" ? "Price ↑" : "Price ↓"}
  onPress={() =>
    setSortOrder(sortOrder === "price" ? "-price" : "price")
  }
/>


git add .
git commit -m "feat: add category filtering to product list"
git commit -m "feat: implement price sorting using API params"
git commit -m "refactor: connect filters to RTK Query"
