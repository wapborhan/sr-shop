export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
    cache: "no-store",
  });
  return res.json();
}

export async function getProductsByCategory(category) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
