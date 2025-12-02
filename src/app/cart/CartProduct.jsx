"use client";
import React, { useState } from "react";

const CartProduct = ({ products }) => {
  const [qty, setQty] = useState({}); // store per-product qty

  return (
    <div className="mn-cart-content">
      <div className="mn-cart-inner cart_list">
        <div className="row">
          <form action="#">
            <div className="table-content cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th style={{ textAlign: "center" }}>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    const quantity = qty[product.id] || 1;

                    return (
                      <tr className="mn-cart-product" key={product.id}>
                        <td data-label="Product" className="mn-cart-pro-name">
                          <a href="product-detail.html">
                            <img
                              className="mn-cart-pro-img"
                              src={product.thumbnail}
                              alt={product.title}
                            />
                            {product.title}
                          </a>
                        </td>

                        <td data-label="Price" className="mn-cart-pro-price">
                          <span className="amount">
                            {product.price.toFixed(2)} TK
                          </span>
                        </td>

                        <td
                          data-label="Quantity"
                          className="mn-cart-pro-qty"
                          style={{ textAlign: "center" }}
                        >
                          <div className="cart-qty-plus-minus">
                            <input
                              className="cart-plus-minus"
                              type="number"
                              min={1}
                              value={quantity}
                              onChange={(e) =>
                                setQty({
                                  ...qty,
                                  [product.id]: Number(e.target.value),
                                })
                              }
                            />
                          </div>
                        </td>

                        <td data-label="Total" className="mn-cart-pro-subtotal">
                          {(product.price * quantity).toFixed(2)} TK
                        </td>

                        <td data-label="Remove" className="mn-cart-pro-remove">
                          <a href="#">
                            <i className="ri-delete-bin-line"></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
