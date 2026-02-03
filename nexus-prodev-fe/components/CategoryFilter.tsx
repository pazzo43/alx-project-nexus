<View style={{ flexDirection: "row" }}>
  {[1, 2, 3].map((catId) => (
    <Button
      key={catId}
      title={`Category ${catId}`}
      onPress={() => setSelectedCategory(catId)}
    />
  ))}
</View>

