<View style={{ flexDirection: "row" }}>
  {[1, 2, 3].map((catId) => (
    <Button
      key={catId}
      title={`Category ${catId}`}
      onPress={() => setSelectedCategory(catId)}
    />
  ))}
</View>

git add .
git commit -m "feat: add category filtering to product list"
git commit -m "feat: implement price sorting using API params"
git commit -m "refactor: connect filters to RTK Query"

