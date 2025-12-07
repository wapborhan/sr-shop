"use client";
import { addToCart, isInCart } from "@/lib/cart";
import React, { useState } from "react";

const ProductDescription = ({ product }) => {
  const {
    id,
    title,
    rating,
    availabilityStatus,
    sku,
    price,
    discountPercentage,
    description,
  } = product;

  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    const result = addToCart(id, qty);
    setMessage(result.message);
  };

  return (
    <div className="single-pro-content">
      <h5 className="mn-single-title">{title}</h5>
      <div className="mn-single-rating-wrap">
        <div className="mn-single-rating mn-pro-rating">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`ri-star-fill ${i < Math.round(rating) ? "" : "grey"}`}
            ></i>
          ))}
        </div>
        <span className="mn-read-review">
          |&nbsp;&nbsp;<a href="#mn-spt-nav-review">{rating} Ratings</a>
        </span>
      </div>

      <div className="mn-single-price-stoke">
        <div className="mn-single-price">
          <div className="final-price">
            {(price - (price * discountPercentage) / 100).toFixed(2)} TK
            <span className="price-des">-{discountPercentage}%</span>
          </div>
          <div className="mrp">
            M.R.P. : <span>{price} TK</span>
          </div>
        </div>
        <div className="mn-single-stoke">
          <span className="mn-single-sku">SKU#: {sku}</span>
          <span className="mn-single-ps-title">{availabilityStatus}</span>
        </div>
      </div>

      <div className="mn-single-desc">{description}</div>

      <div className="mn-pro-variation">
        {/* <div className="mn-pro-variation-inner mn-pro-variation-size m-b-24">
          <span>Size</span>
          <div className="mn-pro-variation-content">
            <ul>
              <li className="active">
                <span>s</span>
              </li>
              <li>
                <span>m</span>
              </li>
              <li>
                <span>l</span>
              </li>
              <li>
                <span>xl</span>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div className="mn-pro-variation-inner mn-pro-variation-color">
          <span>Colors</span>
          <div className="mn-pro-variation-content">
            <ul>
              <li className="active">
                <span style="background-color:#1b4a87"></span>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="mn-single-qty">
        <div className="qty-plus-minus">
          <input
            className="qty-input"
            type="number"
            name="ms_qtybtn"
            min="1"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>
        <div className="mn-btns">
          <div className="mn-single-cart">
            <button
              className="btn btn-primary mn-btn-2 mn-add-cart"
              onClick={handleAddToCart}
              disabled={isInCart(id)}
            >
              <span>{isInCart(id) ? "Already in Cart" : "Add To Cart"}</span>
            </button>
          </div>
          <div className="mn-single-wishlist">
            <a
              href="javascript:void(0)"
              className="mn-btn-group wishlist mn-wishlist"
              title="Wishlist"
            >
              <i className="ri-heart-line"></i>
            </a>
          </div>
          <div className="mn-single-mn-compare">
            <a
              href="javascript:void(0)"
              className="mn-btn-group mn-compare"
              title="Quick view"
            >
              <i className="ri-repeat-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
