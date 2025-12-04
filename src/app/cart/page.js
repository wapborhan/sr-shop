"use client";

import BreadCrumb from "@/components/BreadCrumb";
import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import CartProduct from "./CartProduct";

const page = () => {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState({});

  // -------------------------------------
  // Fetch Single Product
  // -------------------------------------
  const fetchProductById = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch product");

      return await res.json();
    } catch (err) {
      console.error("Product error:", err);
      return null;
    }
  };

  // -------------------------------------
  // Load Cart from LocalStorage
  // -------------------------------------
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const loadProducts = async () => {
      const fetched = await Promise.all(
        cart.map(async (item) => {
          const data = await fetchProductById(item.id);
          return data ? { ...data, qty: item.qty } : null;
        })
      );

      const cleanData = fetched.filter((p) => p !== null);

      // Build qty object
      const qtyObj = {};
      cleanData.forEach((p) => (qtyObj[p.id] = p.qty));

      setQty(qtyObj);
      setProducts(cleanData);
    };

    loadProducts();
  }, []);

  // -------------------------------------
  // Update Product Quantity
  // -------------------------------------
  const updateQty = (id, newQty) => {
    setQty((prev) => ({ ...prev, [id]: newQty }));

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    );

    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // -------------------------------------
  // Remove Product
  // -------------------------------------
  const removeFromCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updated = cart.filter((c) => c.id !== id);

    localStorage.setItem("cart", JSON.stringify(updated));

    setProducts((prev) => prev.filter((p) => p.id !== id));

    setQty((prev) => {
      const q = { ...prev };
      delete q[id];
      return q;
    });
  };

  // -------------------------------------
  // Calculate Subtotal
  // -------------------------------------
  const subTotal = products.reduce((sum, p) => {
    const q = qty[p.id] || 1;
    return sum + p.price * q;
  }, 0);

  return (
    <div className="container">
      <BreadCrumb page="Cart Page" />
      <section className="mn-cart-section p-b-15">
        <div className="row relative">
          <div className="mn-cart-leftside col-lg-8 col-md-12">
            <CartProduct
              products={products}
              qty={qty}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
            />
          </div>

          <Summary subTotal={subTotal} />
        </div>
      </section>
    </div>
  );
};

export default page;
