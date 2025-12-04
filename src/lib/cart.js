export const getCart = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveCart = (cart) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (productId, qty = 1) => {
  const cart = getCart();
  const exists = cart.find((item) => item.id === productId);

  if (exists) {
    return { added: false, message: "Already added" };
  } else {
    cart.push({ id: productId, qty });
    saveCart(cart);
    return { added: true, message: "Added to cart" };
  }
};

export const isInCart = (productId) => {
  const cart = getCart();
  return cart.some((item) => item.id === productId);
};
