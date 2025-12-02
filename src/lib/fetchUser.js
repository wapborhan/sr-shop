export async function fetchUser() {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
    cache: "no-store",
  });
  return res.json();
}
